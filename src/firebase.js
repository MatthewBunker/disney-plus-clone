import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCJTQEbrlMoqDKb5ZxTLkfU-KrRV0TPVp4",
    authDomain: "disney-plus-clone-c1f5d.firebaseapp.com",
    databaseURL: "https://disney-plus-clone-c1f5d-default-rtdb.firebaseio.com",
    projectId: "disney-plus-clone-c1f5d",
    storageBucket: "disney-plus-clone-c1f5d.appspot.com",
    messagingSenderId: "1018106668310",
    appId: "1:1018106668310:web:902120b48a22611c6adc37",
    measurementId: "G-BZN6LQH41C"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

// var gcloud = require('@google-cloud/storage')({
//   projectId: "disney-plus-clone-c1f5d"
// });
// var storage = gcloud.storage();


// let data = require('./disneyPlusMovieData.json');
// data = JSON.parse(data);

// data.forEach(function(obj) {
//   db.collection("Movies").add({
//       backgroundImg: obj.backgroundImg,
//       cardImg: obj.cardImg,
//       description: obj.description,
//       subTitle: obj.subTitle,
//       title: obj.title,
//       titleImg: obj.titleImg,
//       type: obj.type
//   });
// });


export { auth, provider, storage };
export default db;