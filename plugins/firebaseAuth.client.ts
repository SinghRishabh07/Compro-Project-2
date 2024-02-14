import { initializeApp } from "firebase/app";


export default defineNuxtPlugin((nuxtApp) => {
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyB66utojdAA9ZIFsAwSg-cCr__9KG3R3Rk",
    authDomain: "compro-project-8f705.firebaseapp.com",
    projectId: "compro-project-8f705",
    storageBucket: "compro-project-8f705.appspot.com",
    messagingSenderId: "229734009830",
    appId: "1:229734009830:web:b16d950350cd18bf15e427"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);

    initialiseUser();
});
