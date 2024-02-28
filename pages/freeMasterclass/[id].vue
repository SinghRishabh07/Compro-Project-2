<template>
    <div id="masterclass-container">
        <div
            v-if="fetchedData"
            class="d-flex flex-column justify-content-center align-items-center gap-3 text-uppercase"
        >
            <div class="font-weight-500-black">Welcome {{ userInfo.id }}</div>
            <div class="card card-masterclass p-3" style="width: 18rem">
                <div class="card-body">
                    <div class="card-subtitle mb-2">
                        {{ userInfo.title }}
                    </div>
                    <div class="card-text">
                        {{ userInfo.body }}
                    </div>
                    <button
                        class="btn btn-info mt-3 text-uppercase"
                        @click="clickHandler"
                    >
                        Go Back to Classes
                    </button>
                </div>
            </div>
        </div>
        <div v-else class="container-fluid text-center">
            <div class="spinner-grow text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <div class="spinner-grow text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "navbar",
});
const { id } = useRoute().params;
const fetchedData = ref(false);
const router = useRouter();

const uri = "https://jsonplaceholder.typicode.com/posts/" + id;

const { data: userInfo, pending, error, refresh } = await useFetch(uri);
if (pending.value === false) {
    fetchedData.value = true;
}
if (error.value) {
    console.log("Error is :  ", error);
}
if(!userInfo.value){
    throw createError({statusCode:404,statusMessage:"Sorry! Page not found"});
}

const clickHandler = () => {
    router.go(-1);
};
</script>

<style lang="scss" scoped></style>
