import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useFirebaseUser } from "./useStates";

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Oops!!Error occured");
            console.log(errorMessage);
        });
        console.log("Created User Credentials",userCredentials);
        return userCredentials;
};
export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const signedInUserCredentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Error!!!!Invalid Credentials");
            console.log(errorMessage);
            // return errorMessage;
        });
        console.log("Signed In User Credentials",signedInUserCredentials);
        return signedInUserCredentials;

};
export const initialiseUser = async () => {
    const auth = getAuth();
    let firebaseUserAuth = useFirebaseUser();
    // const currentUser = auth.currentUser;
    // firebaseUserAuth = auth.currentUser;
    

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
            console.log("Auth changed : user signed in ",user);
            

        } else {
            // User is signed out
            console.log("Auth changed else : user signed in ",user);

        }
        // firebaseUserAuth.value = user;
    console.log(auth.currentUser);

    });
};

export const signOutUser = async () =>{
    const auth = getAuth();
    const result = await auth.signOut()
    .catch((error)=>{
        alert("Sorry!!!!S.W.R")
        console.log("Something went wrong");
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    })
    console.log("signed out user", result);
}


// !createUser

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

//! sign in existing user
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

//! state observer
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });
