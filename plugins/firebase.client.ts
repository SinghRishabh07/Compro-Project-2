import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin((nuxtApp) => {
    const firebaseConfig = {
        apiKey: "AIzaSyB66utojdAA9ZIFsAwSg-cCr__9KG3R3Rk",
        authDomain: "compro-project-8f705.firebaseapp.com",
        projectId: "compro-project-8f705",
        storageBucket: "compro-project-8f705.appspot.com",
        messagingSenderId: "229734009830",
        appId: "1:229734009830:web:b16d950350cd18bf15e427",
    };

    // Initialize Firebase
    if(firebase.apps.length===0){
        const app = initializeApp(firebaseConfig);

    }
});
