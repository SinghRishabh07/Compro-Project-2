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
                        @submit="signUpHandler"
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
                            v-model="formValues.email"
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
                            v-model="formValues.username"
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
                            v-model="formValues.password"
                        />
                        <button
                            type="submit"
                            class="btn btn-primary d-block align-self-center my-2 text-uppercase"
                            @click="signUpHandler"
                        >
                            Sign Up
                        </button>
                        <div
                            class="align-self-center d-flex flex-column align-items-centerd"
                        >
                            <div class="loginpage-text-black-500">
                                Already have an account?
                            </div>
                            <NuxtLink
                                to="/loginPage"
                                class="align-self-center my-2 text-uppercase"
                                >Sign In</NuxtLink
                            >
                        </div>
                        <NuxtLink
                            to="/homepage"
                            class="loginpage-text-black-500 text-decoration-none btn btn-light align-self-center my-2"
                            >Go to Home Page</NuxtLink
                        >
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    data(){
      return{
        formValues:{
          email:"",
          username:"",
          password:"",
        }
      }
    },
    methods:{
        async signUpHandler(event){
        event.preventDefault();
        // console.log(this.formValues.email);
        // console.log(this.formValues.username);
        // console.log(this.formValues.password);
        // console.log(this.formValues);
        const email = this.formValues.email;
        const password = this.formValues.password;

        const credentials = await createUser(email,password);
        // console.log(credentials);
        if(credentials){
            console.log("Hello from signUp");
            navigateTo('/homepage');
        }
      }
    }

  }
</script>

<style lang="scss" scoped></style>
