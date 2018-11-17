

importScripts('https://www.gstatic.com/firebasejs/5.5.8/firebase-app.js');


importScripts('https://www.gstatic.com/firebasejs/5.5.8/firebase-messaging.js');



  var config = {
    apiKey: "AIzaSyAA75m92aTU9bPh4xzpOvnPGqhtq3tb3Vk",
    authDomain: "mypush-f113a.firebaseapp.com",
    databaseURL: "https://mypush-f113a.firebaseio.com",
    projectId: "mypush-f113a",
    storageBucket: "mypush-f113a.appspot.com",
    messagingSenderId: "1019631122862"
  };
  firebase.initializeApp(config);


const messaging = firebase.messaging();

// Customize notification handler
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('Handling background message', payload);

  // Copy data object to get parameters in the click handler
  payload.data.data = JSON.parse(JSON.stringify(payload.data));

  return self.registration.showNotification(payload.data.title, payload.data);
});

self.addEventListener('notificationclick', function(event) {
  const target = event.notification.data.click_action || '/';
  event.notification.close();

  // This looks to see if the current is already open and focuses if it is
  event.waitUntil(clients.matchAll({
    type: 'window',
    includeUncontrolled: true
  }).then(function(clientList) {
    // clientList always is empty?!
    for (var i = 0; i < clientList.length; i++) {
      var client = clientList[i];
      if (client.url === target && 'focus' in client) {
        return client.focus();
      }
    }

    return clients.openWindow(target);
  }));
});
