<template>
    <div class="container-fluid mt-4 overflow-x-hidden">
        <template v-if="showDisplay">
            <div class="row row-cols-md-4 g-3">
                <div
                    v-for="c in lectures"
                    :key="c.id"
                    class="col-sm-6 col-md-4"
                >
                    <div class="card text-center card-masterclass">
                        <div class="card-body font-weight-500-grey">
                            <h5 class="card-title">{{ c.id }}</h5>
                            <h6 class="card-subtitle mb-2">
                                {{ c.title }}
                            </h6>
                            <p class="card-text">
                                {{ c.body }}
                            </p>
                            <NuxtLink
                                type="button"
                                class="btn btn-outline-info text-uppercase"
                                :to="`/freeMasterclass/${c.id}`"
                            >
                                Click for more details
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div v-else class="text-center">
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

<script setup lang="ts">
const showDisplay = ref(false);
const lectures = ref([] as any);

console.log("Hello World");
const { data, pending, error, refresh, status } = await useFetch(
    "https://jsonplaceholder.typicode.com/posts"
);

let randomNumber = Math.floor(Math.random() * 5);
if (randomNumber === 0) {
    randomNumber = 10;
}

if (status.value === "success") {
    showDisplay.value = true;
    lectures.value = (data.value as any).filter(
    (e: any) => e.id % randomNumber === 0
);
}

if (error.value) {
    throw createError({
        statusCode: 500,
        statusMessage: "Something went Wrong",
    });
}


</script>

<style lang="scss" scoped></style>
