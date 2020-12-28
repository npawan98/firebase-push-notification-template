import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBqQBu8iIoYddjtlTqAPfBD9IzzSV0c7Vw",
    authDomain: "cloudmessage-162bb.firebaseapp.com",
    projectId: "cloudmessage-162bb",
    storageBucket: "cloudmessage-162bb.appspot.com",
    messagingSenderId: "962676709328",
    appId: "1:962676709328:web:ad884bd8dafd181c42cbd5"
}
firebase.initializeApp(config)

export default firebase