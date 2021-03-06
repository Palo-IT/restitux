/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.**/

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp({
   'messagingSenderId': '103953800507'
 });

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
/**
 // [END initialize_firebase_in_sw]
 **/

self.toolbox.options.cache = {
  name: 'restitUx-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;


// self.addEventListener("fetch", function(event) {
//   console.log("SW Event");
//   console.log(event.request.method);
//   console.log(event.request.url);
// });


// self.addEventListener('sync', function (event) {
//   console.log("Hello !");
//   event.waitUntil(
//   setTimeout(function() {
//     if (event.tag === 'check-online') {
//       console.log("SW : check-online");
//       console.log("SW : notification");
//       self.registration.showNotification("App State");
//     }
//   }, 1000));
//
// });


// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// if your json defines notification property, then the setBackgroundMessageHandler is sort of ignored
// [START background_handler]
// messaging.setBackgroundMessageHandler(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });
// [END background_handler]

