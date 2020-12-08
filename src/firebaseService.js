import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyAOfql5tvBmvP2MBdAOK6hzs12rHfCTo3Y",
    authDomain: "pushnotification-21187.firebaseapp.com",
    databaseURL: "https://pushnotification-21187.firebaseio.com",
    projectId: "pushnotification-21187",
    storageBucket: "pushnotification-21187.appspot.com",
    messagingSenderId: "22747533808",
    appId: "1:22747533808:web:11530b4ab5c6daa1860d35"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();





export function notificationConfigure() {
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                    // Show permission request.
                    console.log('No registration token available. Request permission to generate one.');
    
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
    
            });
        }
       
    })
}