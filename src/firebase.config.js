// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 01 ACCOUNT

// const firebaseConfig = {
//     apiKey: "AIzaSyDtx7TajlmsxEpDxSlwkODJsOTs9KSsJ2I",
//     authDomain: "otp-project-75ade.firebaseapp.com",
//     projectId: "otp-project-75ade",
//     storageBucket: "otp-project-75ade.appspot.com",
//     messagingSenderId: "1002570704922",
//     appId: "1:1002570704922:web:ee21c7a41340a08d66c9a3",
//     measurementId: "G-FE5MHSYVGP"
// };

// 77 ACCOUNT

// const firebaseConfig = {
//     apiKey: "AIzaSyBJijQO1bhsXPvJ2ltBsl7CBnIg8VxvDhg",
//     authDomain: "otp-project-c0766.firebaseapp.com",
//     projectId: "otp-project-c0766",
//     storageBucket: "otp-project-c0766.appspot.com",
//     messagingSenderId: "911864757696",
//     appId: "1:911864757696:web:f99cc233abac54834b5c25",
//     measurementId: "G-9R7QJH1FDZ"
// };

// gtp ACCOUNT

// const firebaseConfig = {
//     apiKey: "AIzaSyAFSQHky9pQ60PypDfHwRy_eV_gJ2euUeE",
//     authDomain: "otp-project-cb994.firebaseapp.com",
//     projectId: "otp-project-cb994",
//     storageBucket: "otp-project-cb994.appspot.com",
//     messagingSenderId: "583788944968",
//     appId: "1:583788944968:web:ff300d0c65be79a8e6427d",
//     measurementId: "G-KDQRG0G2QL"
// };

// omer

const firebaseConfig = {
  apiKey: "AIzaSyC6rThaC94vFlyra0TC-AFIkLOC3pwcDBg",
  authDomain: "otp-project-25541.firebaseapp.com",
  projectId: "otp-project-25541",
  storageBucket: "otp-project-25541.appspot.com",
  messagingSenderId: "393196641454",
  appId: "1:393196641454:web:19bcacf93fc4cdfcb9613f",
  measurementId: "G-W4ZRQEXNW3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)