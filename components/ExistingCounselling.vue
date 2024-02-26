<template>
    <div class="container-fluid bg-light">
        <div class="row row-cols-md-4 g-4">
            <template v-if="fetchedData" >
                <div v-for="c in data" :key="c.id" class="col-sm-6 col-md-4" >
                    <div class="card text-center " >
                        <div class="card-body" >
                            <h5 class="card-title">{{c.name}}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">
                                {{c.name}}
                            </h6>
                            <p class="card-text">
                                {{c.description}}
                            </p>
                            <NuxtLink href="#" class="card-link">{{ c.id }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </template>
            <div v-else class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <!-- <p>{{ response }}</p> -->
    </div>
    <!-- <div>{{ data }}</div> -->
</template>

<script setup>
const fetchedData = ref(false);
const {data,pending,refresh} = useFetch("/api/counsellingApi");
if(pending.value===false){
    fetchedData.value = true;
}
// const data = [];

// const fetchHandler = async() =>{
//     await refresh();
//     console.log("Clicked fetch handler");
// }

</script>

<style lang="scss" scoped></style>
