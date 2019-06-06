export const questionTagType = "questionTime";

export const collectionProjects = "projects";
export const collectionObjectives = "objectives";
export const collectionQuestions = "questions";
export const collectionParticipants = "participants";
export const collectionInterviews = "interviews";
export const collectionTranscriptions = "transcriptions";

export const replaceId = "{id}";

export const pathObjectives = `${collectionProjects}/${replaceId}/${collectionObjectives}`;
export const pathQuestions = `${collectionProjects}/${replaceId}/${collectionQuestions}`;
export const pathInterviews = `${collectionProjects}/${replaceId}/${collectionInterviews}`;
export const pathTranscriptions = `${collectionProjects}/${replaceId}/${collectionTranscriptions}`;
export const pathProjects = collectionProjects;
export const pathParticipants = `${collectionProjects}/${replaceId}/${collectionParticipants}`;
export const objectives = {name: "objectives", value: 1};
export const preparation = {name: "preparation", value: 2};
export const interviews = {name: "interviews", value: 3};
export const analysis = {name: "analysis", value: 4};

export const questionCreator = {name: 'questionCreator', value: 1};
export const interviewTagPrepa = {name: 'interviewTagPrepa', value: 2};
export const participantsPanel = {name: 'participantsPanel', value: 3};

export const upComingInterviews = {name: 'upComingInterviews', value: 1};
export const finishedInterviews = {name: 'finishedInterviews', value: 2};

export const rawData = {name: 'rawData', value: 1};
export const syntheticData = {name: 'syntheticData', value: 2};
