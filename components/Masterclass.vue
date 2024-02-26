<template>
    <div class="container-fluid">
        <template v-if="showDisplay">
            <div class="row row-cols-md-4 g-4">
                <div
                    v-for="c in lectures"
                    :key="c.id"
                    class="col-sm-6 col-md-4"
                >
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">{{ c.title }}</h5>
                            <h6 class="card-subtitle mb-2 text-body-secondary">
                                Card subtitle
                            </h6>
                            <p class="card-text">
                                {{ c.body }}
                            </p>
                            <NuxtLink href="#" class="card-link">{{
                                c.id
                            }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <div class="spinner-grow text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script setup lang="ts">
const showDisplay = ref(false);
const lectures = ref([] as any);

// const  {data:response}  = await useFetch('/api/hello');

const fetchUser = async () => {
    const { data, pending, error, refresh, status } = await useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    let randomNumber = Math.floor(Math.random() * 5);
    console.log(randomNumber);
    if (randomNumber === 0) {
        randomNumber = 10;
    }

    if (status.value === "success") {
        showDisplay.value = true;
    }

    console.log("data is : ", data);
    console.log("pending state is : ", pending);
    console.log("status state is : ", status);
    console.log("data value is : ", data.value);
    lectures.value = (data.value as any).filter(
        (e: any) => e.id % randomNumber === 0
    );
    console.log(lectures);
};

onMounted(() => {
    fetchUser();
});
</script>

<style lang="scss" scoped></style>
