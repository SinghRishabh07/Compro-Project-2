<template>
    <div class="container-fluid d-flex justify-content-center align-items-center gap-3">

        <form
            @submit.prevent="sessionRequestHandeler"
            class="container-fluid d-flex flex-column justify-content-center align-items-center mt-3 w-50 font-weight-600-grid border border-light card-masterclass rounded p-3"
        >
            <div class="container-fluid mb-3">
                <label for="username" class="form-label text-uppercase"
                    >Enter your Full Name</label
                >
                <input
                    type="text"
                    class="form-control font-weight-600-black"
                    id="username"
                    placeholder="Full Name"
                    v-model="username"
                    required
                />
            </div>
            <div class="container-fluid mb-3">
                <label for="designation" class="form-label text-uppercase">Your designation</label>
                <input
                    type="text"
                    class="form-control font-weight-600-black"
                    placeholder="Designation"
                    id="designation"
                    v-model="userDesignation"
                    required
                />
            </div>
            <div class="container-fluid mb-3">
                <label for="description" class="form-label text-uppercase">Describe yourself in few words</label>
                <textarea
                    class="form-control font-weight-600-black"
                    id="description"
                    rows="2"
                    placeholder="Add a Small Description"
                    v-model="userDescription"
                    required
                ></textarea>
            </div>
            <button type="submit" class="btn btn-bg-color mb-3">Request a Session</button>
        </form>

    </div>
</template>

<script setup>
const username = ref("");
const userDesignation = ref("");
const userDescription = ref("");

const sessionRequestHandeler = async () => {
    console.log("Request Session Button Clicked");
    console.log(
        "Received data is : ",
        username,
        userDesignation,
        userDescription
    );
    const { data } = await $fetch("/api/counsellingApi", {
        method: "post",
        body: {
            designation: userDesignation.value,
            name: username.value,
            description: userDescription.value,
        },
    });
};
</script>

<style lang="scss" scoped></style>
