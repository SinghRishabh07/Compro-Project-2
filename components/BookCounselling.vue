<template>
    <form @submit.prevent="sessionRequestHandeler"
        class="container-fluid d-flex flex-column justify-content-center align-items-center mt-3"
    >
        <div class="container-fluid mb-3">
            <label for="username" class="form-label"
                >Enter your Full Name</label
            >
            <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Full Name"
                v-model="username"
                required
            />
        </div>
        <div class="container-fluid mb-3">
            <label for="userAge" class="form-label"
                >Your Age</label
            >
            <input type="text" placeholder="Enter your age" id="userAge" v-model="userage">
            <!-- <select v-model="counsellorName" class="form-select" aria-label="Default select example" required>
                <option selected>Select Councellor Name</option>
                <option value="Mr. Heisenberg">Mr. Heisenberg</option>
                <option value=" Professor Dumbledore">Professor Dumbledore</option>
                <option value="Others">Others</option>
            </select> -->
        </div>
        <div class="container-fluid mb-3">
            <label for="description" class="form-label">Add Description</label>
            <textarea
                class="form-control"
                id="description"
                rows="3"
                placeholder="Description"
                v-model="counsellingDescription"
                required
            ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Request a Session</button>
    </form>
</template>

<script setup>

const username = ref("");
const userage = ref("");
const counsellingDescription = ref("");

const sessionRequestHandeler = async() =>{
    console.log("Request Session Button Clicked");
    console.log("Received data is : ", username,userage,counsellingDescription)
    const {data} = await $fetch("/api/counsellingApi",{
        method:"post",
        body:{
            age:userage.value,
            name: username.value,
            description: counsellingDescription.value
        }
    })
}
</script>

<style lang="scss" scoped></style>
