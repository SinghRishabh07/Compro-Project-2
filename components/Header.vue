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
                                <NuxtLink class="dropdown-item" to="/"
                                    >Active Courses</NuxtLink
                                >
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/"
                                    >Live Courses</NuxtLink
                                >
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
                                <li
                                    class="nav-item px-2 ms-2 position-relative"
                                >
                                    <NuxtLink
                                        class="nav-link text-black text-uppercase navbar-items-font-size"
                                        aria-current="page"
                                        to="/"
                                        >Refer and Earn</NuxtLink
                                    ><span
                                        class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        >50+</span
                                    >
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
                                        to="/freeMasterclass"
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
                                        <ul
                                            v-if="isUserActive"
                                            class="dropdown-menu navbar-items-font-size"
                                        >
                                            <li>
                                                <button
                                                    class="dropdown-item"
                                                    type="button"
                                                >
                                                    {{ currentUserUsername }}
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    class="dropdown-item"
                                                    type="button"
                                                >
                                                    {{
                                                        currentUserEmailAddress
                                                    }}
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    class="dropdown-item"
                                                    type="button"
                                                >
                                                    Something else here
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item px-3 dropdown">
                                    <button
                                        v-if="isUserActive"
                                        type="button"
                                        class="btn btn-bg-color px-2 ms-2"
                                        @click="googleSignOut"
                                    >
                                        Log out
                                    </button>
                                    <NuxtLink
                                        v-else
                                        type="button"
                                        class="btn btn-bg-color px-2 ms-2"
                                        to="/signupPage"
                                    >
                                        Sign In
                                    </NuxtLink>
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
                <div v-if="isUserActive" class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1
                                class="modal-title modal-font-500"
                                id="exampleModalLabel"
                            >
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
                                    <label
                                        for="recipient-fullname"
                                        class="col-form-label"
                                        >FullName</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="recipient-fullname"
                                        v-model="currentUserUsername"
                                        readonly
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="recipient-nationality"
                                        class="col-form-label"
                                        >Choose Nationality</label
                                    >
                                    <select
                                        class="form-select"
                                        aria-label="select nationality"
                                        id="recipient-nationality"
                                        v-model="recipientNationality"
                                    >
                                        <option value="indian" selected>
                                            Indian
                                        </option>
                                        <option value="amarican">
                                            American
                                        </option>
                                        <option value="canadian">
                                            Canadian
                                        </option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="recipient-email-address"
                                        class="col-form-label"
                                        >Email Address</label
                                    >
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="recipient-email-address"
                                        v-model="currentUserEmailAddress"
                                        readonly
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
                                        <label
                                            class="form-check-label"
                                            for="englishProficiencyYes"
                                        >
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
                                        <label
                                            class="form-check-label"
                                            for="englishProficiencyNo"
                                        >
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
                                            >Do you have all the required
                                            documents</label
                                        >
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="recipient-description"
                                        class="col-form-label"
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
                            <button
                                type="button"
                                class="btn modal-font-500-btn"
                                @click="resetFields"
                            >
                                Reset Form
                            </button>
                            <button
                                type="button"
                                class="btn modal-font-500-btn"
                            >
                                Send message
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title modal-font-500">Please Sign In</h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body modal-font-500">
                            <p>Unless you sign In. You can't access any links</p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Ok
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const recipientFullname = ref("");
const recipientNationality = ref("");
const recipientCurrentUniversity = ref("");
const englishProficiencyYes = ref("");
const englishProficiencyNo = ref("");
const documentVerification = ref("");
const recipientDescription = ref("");

const isUserActive = ref(false);
const currentUserEmailAddress = ref("");
const currentUserUsername = ref("");

const resetFields = () => {
    recipientFullname.value = "";
    recipientNationality.value = "";
    recipientCurrentUniversity.value = "";
    englishProficiencyYes.value = "";
    englishProficiencyNo.value = "";
    documentVerification.value = "";
    recipientDescription.value = "";
};

const googleSignOut = async () => {
    console.log("Click registerd");
    
    try{
        await signOut(auth);
        navigateTo("/signupPage");
    }
    catch(error){
        console.log(error);
    }
    
};
const userCreds = auth.currentUser;
if (userCreds !== null) {
    isUserActive.value = true;
    currentUserUsername.value = userCreds.displayName;
    currentUserEmailAddress.value = userCreds.email;
}
</script>

<style lang="scss" scoped></style>
