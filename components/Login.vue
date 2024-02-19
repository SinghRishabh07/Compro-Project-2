<template>
  <div
    class="container-lg d-flex flex-column align-items-center justify-content-center p-5"
  >
    <div class="container-lg">
      <div class="row justify-content-center">
        <div class="col-md-6 m-3 p-3 rounded-3 loginpage-container">
          <div class="loginpage-heading text-uppercase my-2 text-center">
            Log In
          </div>
          <form
            class="d-flex flex-column justify-content-center align-items-start gap-2"
          >
            <label for="email" class="form-label loginpage-text-black-500"
              >Email:</label
            >
            <input
              type="email"
              class="form-control loginpage-text-black-500"
              id="email"
              v-model="formValues.email"
              
            />
            <label for="password" class="form-label loginpage-text-black-500"
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
            >
              Log in
            </button>
            <div
              class="align-self-center d-flex flex-column align-items-centerd"
            >
              <div class="loginpage-text-black-500">Don't have an account?</div>
              <NuxtLink
                to="/signupPage"
                class="align-self-center my-2 text-uppercase"
                >Sign Up</NuxtLink
              >
            </div>
            <NuxtLink
              to="/"
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
</script>

<style lang="scss" scoped></style>
