<template>
    <div class="container-fluid d-flex justify-content-center font-weight-600-grey">
        <div class="card card-masterclass p-3">
            <div class="card-body text-center">
                <div>Oppssss... Sorry</div>
                <div class="card-subtitle mb-2 mt-2">
                    {{ error.statusCode }}
                </div>
                <div class="card-text">
                    {{ error.statusMessage }}
                </div>
                <button
                    class="btn btn-info mt-3 text-uppercase"
                    @click="clickHandler"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
const router = useRouter();

defineProps(["error"]);
const clickHandler = () => {
    router.go(-1);
};
</script>

<style lang="scss" scoped></style>
