<template>
    <div class="container-fluid mt-4">
        <button class="btn btn-primary mb-2 text-center text-uppercase" @click="refreshDataHandler">Refresh Data</button>

        <div class="row row-cols-md-4 g-2">
            <template v-if="fetchedData">
                <div v-for="c in data" :key="c.id" class="col-sm-6 col-md-3">
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title cursor-style-default">
                                {{ c.id }}
                            </h5>
                            <h6
                                class="card-subtitle mb-2 text-body-secondary cursor-style-default text-uppercase"
                            >
                                {{ c.name }}
                            </h6>
                            <p
                                class="card-text cursor-style-default text-uppercase"
                            >
                                {{ c.designation }}
                            </p>
                            <button class="btn btn-outline-info text-uppercase">
                                Click for more details
                            </button>
                        </div>
                    </div>
                </div>
            </template>
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
    </div>
</template>

<script setup>
const fetchedData = ref(false);

const { data, pending,error, refresh } = await useFetch("/api/counsellingApi");
if (pending.value === false) {
    fetchedData.value = true;
}
if(error.value){
    console.log("Error is :  " , error);
}
else{
    console.log("No error");
}
const refreshDataHandler = ()=>{
    refresh();
}
// const data = [];

// const fetchHandler = async() =>{
//     await refresh();
//     console.log("Clicked fetch handler");
// }
</script>

<style lang="scss" scoped></style>
