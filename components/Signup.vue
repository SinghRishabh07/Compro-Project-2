<template>
    <div
        class="container-lg d-flex flex-column align-items-center justify-content-center p-5"
    >
        <div class="container-lg">
            <div class="row justify-content-center">
                <div class="col-md-6 m-3 p-3 rounded-3 loginpage-container">
                    <div
                        class="loginpage-heading text-uppercase my-2 text-center"
                    >
                        Sign Up
                    </div>
                    <form
                        class="d-flex flex-column justify-content-center align-items-start gap-2"
                    >
                        <label
                            for="email"
                            class="form-label loginpage-text-black-500"
                            >Email:</label
                        >
                        <input
                            type="email"
                            class="form-control loginpage-text-black-500"
                            id="email"
                        />
                        <label
                            for="username"
                            class="form-label loginpage-text-black-500"
                            >Username:</label
                        >
                        <input
                            type="text"
                            class="form-control loginpage-text-black-500"
                            id="username"
                        />
                        <label
                            for="password"
                            class="form-label loginpage-text-black-500"
                            >Password:</label
                        >
                        <input
                            type="password"
                            class="form-control loginpage-text-black-500"
                            id="password"
                        />
                        <button
                            type="submit"
                            class="btn btn-primary d-block align-self-center my-2 text-uppercase"
                        >
                            Sign Up
                        </button>
                        <div
                            class="align-self-center d-flex flex-column align-items-centerd"
                        >
                            <NuxtLink
                                to="/"
                                class="align-self-center my-2 text-uppercase"
                                >Go To Home Page</NuxtLink
                            >
                        </div>
                        <button
                            type="button"
                            @click="googleHandler"
                            class="loginpage-text-black-500 text-decoration-none btn btn-light align-self-center my-2"
                        >
                            Sign Up with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

//! middleware
// definePageMeta({
//     middleware:['auth']
// })
import {
    GoogleAuthProvider,
    getAuth,
    signInWithRedirect,
    getRedirectResult,
} from "firebase/auth";



//! using google popUP

// const auth = getAuth();
// const provider = new GoogleAuthProvider();
// const googleHandler = async() =>{
//     console.log("clicked");
//     const user = await signInWithPopup(auth,provider).catch((error)=>console.log(error));
//     if(user){
//         navigateTo('/');
//     }

// }

const auth = getAuth();
const provider = new GoogleAuthProvider();


const googleHandler = async () => {
    await signInWithRedirect(auth, provider);
    
};
onMounted(async () => {
    console.log("Page mounted");
    try {
        const results = await getRedirectResult(auth);
        if (results) {
            console.log(results);
            navigateTo("/");
        }
    } catch(error) {
        console.log(error);
    }
   
});
</script>

<style lang="scss" scoped></style>
