"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const speech = require('@google-cloud/speech');
const collectionProjects = 'projects';
const collectionInterviews = 'interviews';
const collectionTranscriptions = 'transcriptions';
const collectionQuestions = 'questions';
const maxAttempt = 5;
let attempt = 0;
const interviewStatus = {
    scheduled: "Scheduled",
    done: "Done",
};
//const projectId = functions.config().app.project.id;
const projectId = "restitux-194509";
admin.initializeApp(functions.config().firebase);
const firestore = admin.firestore();
const client = new speech.SpeechClient({
    projectId: projectId,
});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.createProject = functions.firestore
    .document('projects/{projectId}')
    .onCreate(event => {
    // const userFcmToken = "eGvGeA00WXw:APA91bEsGrl91KhmDAdxJ-jkMWJKQnaiN20zQZx8M55Nm8rJO3HLPacdxSMo4KV_2gmwhNSVrEMsFrRfL3PDUfnSC-4lzt_mJXNxpwXVciH51YJPFSCoeRtrjY1OTHg8FSyxxiPiBzKu";
    // Get an object representing the document
    const newValue = event.data.data();
    // access a particular field as you would any JS property
    const name = newValue.name;
    const payload = {
        notification: {
            title: "New created project",
            body: `A project named  ${name} has been created`,
            icon: `${functions.config().app.notification.icon}`,
            click_action: `${functions.config().app.host.url}`
        }
    };
    //messages'tokens
    let userFcmToken;
    // const userId = "k7CJxbWsb0Y0rjzE3hWh269JNk73";
    const userId = "fdP79qEbJNTwaEjJ2HEsgFneiLE3";
    const userRef = admin.firestore().doc(`users/${userId}`);
    userRef.get().then((user) => {
        if (!user) {
            console.log("no user found with id = " + userId);
            return;
        }
        userFcmToken = Object.keys(user.get("fcmTokens"));
        console.log(`Send to ${userFcmToken[0]}`);
        admin.messaging().sendToDevice(userFcmToken, payload)
            .then(res => {
            console.log("Sent Successfully", res);
        })
            .catch(err => {
            console.log(err);
        });
    }).catch(error => {
        console.log(`Error occured while getting fcmTokens : ${error}`);
    });
    return;
});
/**
 * @name databaseTrigger
 * @type {CloudFunction<ObjectMetadata>}
 */
exports.databaseTrigger = functions.storage.object().onChange((event) => {
    const idArray = event.data.id.split('/');
    if (idArray[1] === 'audio') {
        // Case : wav file encapsulate in JSON uploaded
        if (event.data.contentType === 'application/octet-stream' && event.data.resourceState === 'exists') {
            const refInterview = firestore.doc(`${collectionProjects}/${event.data.metadata.projectId}/${collectionInterviews}/${event.data.metadata.interviewId}`);
            //Save the ref into the interview
            refInterview.update({
                refToAudio: event.data.metadata.audioId,
                duration: event.data.metadata.duration,
                status: interviewStatus.done,
            }).catch((err) => {
                console.log(err);
            });
        }
        // Case : wav file uploaded
        if (event.data.contentType === 'audio/wav' && event.data.resourceState === 'exists') {
            const config = JSON.parse(event.data.metadata.config);
            const uriArray = event.data.id.split('/');
            uriArray.splice(uriArray.length - 1, 1);
            const uri = uriArray.join('/');
            const fullUri = 'gs://' + uri;
            const audio = {
                uri: fullUri,
            };
            const request = {
                config: config,
                audio: audio
            };
            doTranscription(request, event);
        }
    }
});
/**
 *
 * @name doTranscription
 * @param request
 * @param event
 */
function doTranscription(request, event) {
    attempt++;
    client
        .longRunningRecognize(request)
        .then(data => {
        const operation = data[0];
        // Get a Promise representation of the final result of the job
        return operation.promise();
    })
        .then(data => {
        treatment(event, data).then(() => {
            attempt = 0;
        }).catch(err => {
            console.error('ERROR:', err);
        });
    })
        .catch(err => {
        console.log('Attempt of transcription : ' + attempt);
        if (attempt < maxAttempt) {
            doTranscription(request, event);
        }
        console.error('ERROR:', err);
    });
}
/**
 *
 * @name treatment
 * @param event
 * @param data
 */
function treatment(event, data) {
    const response = data[0];
    return firestore.collection(`${collectionProjects}/${event.data.metadata.projectId}/${collectionQuestions}`).get().then(function (querySnapshot) {
        const questionsIdArray = [];
        querySnapshot.forEach(function (doc) {
            if (!doc.data().isNote) {
                questionsIdArray.push(doc.id);
            }
        });
        const textArray = [];
        questionsIdArray.forEach((q) => {
            textArray.push({
                refToQuestion: q,
                text: "",
            });
        });
        const texts = addTags(JSON.parse(event.data.metadata.tags), response.results[0].alternatives[0].words, textArray);
        const transcription = {
            plainText: response.results[0].alternatives[0].transcript,
            textWithTags: texts.textWithTags,
            textByQuestions: texts.textArray,
            confidence: response.results[0].alternatives[0].confidence,
            userId: event.data.metadata.userId,
        };
        const recCollectionTranscriptions = firestore.collection(`${collectionProjects}/${event.data.metadata.projectId}/${collectionTranscriptions}`);
        const refInterview = firestore.doc(`${collectionProjects}/${event.data.metadata.projectId}/${collectionInterviews}/${event.data.metadata.interviewId}`);
        return refInterview.get()
            .then((doc) => {
            const refTranscription = doc.data().refToText;
            if (refTranscription) {
                console.log('Document Transcription with ID : ' + refTranscription + ' updated');
                return recCollectionTranscriptions.doc(refTranscription).update(transcription);
            }
            else {
                // Create transcription in base
                return recCollectionTranscriptions.add(transcription).then(transcriptionDoc => {
                    console.log('Document Transcription with ID : ' + transcriptionDoc.id + ' created');
                    firestore.doc(`${collectionProjects}/${event.data.metadata.projectId}/${collectionInterviews}/${event.data.metadata.interviewId}`);
                    // update the transcription ref in Interview
                    return refInterview.update({ refToText: transcriptionDoc.id });
                });
            }
        });
    });
}
/**
 *
 * @name addTags
 * @param arrayAllTags
 * @param arrayOfData
 * @param textArray
 * @returns {{textWithTags: string; textArray: any}}
 */
function addTags(arrayAllTags, arrayOfData, textArray) {
    const parsedData = arrayOfData.map((x) => {
        return {
            startTime: parseFloat(`${x.startTime.seconds}` +
                `.` +
                x.startTime.nanos / 100000000) * 1000,
            endTime: parseFloat(`${x.endTime.seconds}` +
                `.` +
                x.endTime.nanos / 100000000) * 1000,
            word: x.word,
        };
    });
    const arrayQuestionTags = [];
    const arrayOfTags = [];
    arrayAllTags.forEach((a) => {
        if (a.type === 'questionTime') {
            arrayQuestionTags.push(a);
        }
        else {
            arrayOfTags.push(a);
        }
    });
    let textWithTags = "";
    let indexTags = 0;
    let indexQuestion = 0;
    let indexQuestionTags = 0;
    let isBegin = true;
    parsedData.forEach((word) => {
        while (arrayOfTags[indexTags] && word.startTime > arrayOfTags[indexTags].timestamp) {
            indexTags++;
        }
        if (arrayQuestionTags[indexQuestionTags] && word.endTime >= arrayQuestionTags[indexQuestionTags].timestamp) {
            isBegin = true;
            indexQuestionTags++;
        }
        if (isBegin && arrayQuestionTags[indexQuestionTags]) {
            indexQuestion = 0;
            while (textArray[indexQuestion].refToQuestion !== arrayQuestionTags[indexQuestionTags].refToQuestion) {
                indexQuestion++;
            }
            isBegin = false;
        }
        if (arrayOfTags[indexTags] && word.startTime <= arrayOfTags[indexTags].timestamp && word.endTime >= arrayOfTags[indexTags].timestamp) {
            textWithTags += `<* ${arrayOfTags[indexTags].type} *> ${word.word} `;
            textArray[indexQuestion].text += `<* ${arrayOfTags[indexTags].type} *> ${word.word} `;
            indexTags++;
        }
        else {
            textWithTags += word.word + ' ';
            textArray[indexQuestion].text += word.word + ' ';
        }
    });
    return { textWithTags, textArray };
}
//# sourceMappingURL=index.js.map