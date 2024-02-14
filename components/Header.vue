<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-6 col-md-2 d-flex justify-content-start align-items-center px-4"
        >
          <div class="dropdown">
            <button
              class="btn btn-bg-color dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              COURSES
            </button>
            <ul class="dropdown-menu navbar-items-font-size">
              <li>
                <NuxtLink class="dropdown-item" to="/">Active Courses</NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/">Live Courses</NuxtLink>
              </li>
              <li>
                <NuxtLink class="dropdown-item" to="/"
                  >Recorded Lectures</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
        <nav
          class="col-6 col-md-10 navbar navbar-expand-lg d-flex justify-content-end"
        >
          <div class="me-3 p-2">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav d-flex gap-4">
                <li class="nav-item px-2 ms-2 position-relative">
                  <NuxtLink
                    class="nav-link text-black text-uppercase navbar-items-font-size"
                    aria-current="page"
                    to="/"
                    >Refer and Earn</NuxtLink
                  ><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">50+</span>
                </li>
                <li class="nav-item px-2 ms-2">
                  <button
                    class="nav-link text-black text-uppercase navbar-items-font-size btn"
                    aria-current="page"
                    to="/"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Study Abroad
                  </button>
                </li>
                <li class="nav-item px-2 ms-2">
                  <NuxtLink
                    class="nav-link text-black text-uppercase navbar-items-font-size"
                    aria-current="page"
                    to="/"
                    >Free MasterClass</NuxtLink
                  >
                </li>
                <li
                  class="nav-item px-2 ms-2 dropdown d-none d-lg-block navbar-items-font-size"
                >
                  <div class="dropdown">
                    <div
                      class="dropdown-toggle text-black d-flex justify-content-center align-items-center p-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      MORE
                    </div>
                    <ul class="dropdown-menu navbar-items-font-size">
                      <li>
                        <button class="dropdown-item" type="button">
                          Action
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Another action
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Something else here
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item px-3 dropdown">
                  <button type="button" class="btn btn-bg-color px-2 ms-2" @click="signOutHandler" >
                    <!-- <NuxtLink
                      to="/loginPage"
                      class="text-decoration-none btn-bg-color"
                    > -->
                      Logout
                    <!-- </NuxtLink> -->
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title modal-font-500" id="exampleModalLabel">
                Where You Wanna Study
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="resetFields"
              ></button>
            </div>
            <div class="modal-body modal-font-500">
              <form>
                <div class="mb-3">
                  <label for="recipient-fullname" class="col-form-label"
                    >FullName</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-fullname"
                    v-model="recipientFullname"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="recipient-nationality" class="col-form-label"
                    >Choose Nationality</label
                  >
                  <select
                    class="form-select"
                    aria-label="select nationality"
                    id="recipient-nationality"
                    v-model="recipientNationality"
                    
                  >
                    <option value="indian" selected>Indian</option>
                    <option value="amarican">American</option>
                    <option value="canadian">Canadian</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label
                    for="recipient-current-university"
                    class="col-form-label"
                    >University</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-current-university"
                    v-model="recipientCurrentUniversity"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label> Proficent in English</label>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="englishProficiencyYes"
                      v-model="englishProficiencyYes"

                    />
                    <label class="form-check-label" for="englishProficiencyYes">
                      Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="englishProficiencyNo"
                      v-model="englishProficiencyNo"

                    />
                    <label class="form-check-label" for="englishProficiencyNo">
                      No
                    </label>
                  </div>
                </div>
                <div class="mb-3">
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="documentVerification"
                      v-model="documentVerification"
                    />
                    <label for="documentVerification"
                      >Do you have all the required documents</label
                    >
                  </div>
                </div>
                <div class="mb-3">
                  <label for="recipient-description" class="col-form-label"
                    >Add Description:</label
                  >
                  <textarea
                    class="form-control"
                    id="recipient-description"
                    v-model="recipientDescription"
                    required
                  ></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                @click="resetFields"
              >
                Close
              </button>
              <button type="button" class="btn modal-font-500-btn" @click="resetFields">
                Reset Form
              </button>
              <button type="button" class="btn modal-font-500-btn">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipientFullname: '',
      recipientNationality:'',
      recipientCurrentUniversity:'',
      englishProficiencyYes: '',
      englishProficiencyNo:'',
      documentVerification:'',
      recipientDescription: ''
    };
  },
  methods: {
    resetFields() {
      this.recipientFullname = ''; 
      this.recipientNationality = '';
      this.recipientCurrentUniversity = '';
      this.englishProficiencyYes = '';
      this.englishProficiencyNo = '';
      this.documentVerification = '';
      this.recipientDescription = ''; 
      console.log("button clicked");
    },
    async signOutHandler(){
      console.log("Sign out button clicked");
      const result = await signOutUser();
      console.log("User signed out : ",result);
      if(result){
        console.log(party);
      }
      else{
        navigateTo('/loginPage');
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
