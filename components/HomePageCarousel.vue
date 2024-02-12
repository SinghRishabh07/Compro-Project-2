<template>
    <div
        class="container-fluid d-flex flex-row justify-content-around align-items-center d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center d-xl-flex flex-xl-row justify-content-xl-around align-items-xl-center pb-3 gap-lg-4 px-4 d-sm-none d-lg-inline"
    >
        <div
            class="d-flex flex-column justify-content-center align-items-center flex-grow-1 flex-grow-md-0 d-lg-flex flex-lg-row flex-grow-lg-1 justify-content-lg-around align-items-lg-center carousel-container text-center p-3"
        >
            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">2 Millions+</div>
                <div class="font-weight-600-black">Learner Counselled</div>
            </div>

            <div class="vertical-pipe d-none d-lg-inline"></div>
            <div class="horizontal-pipe d-lg-none"></div>

            <div
                class="m-1 p-2 d-flex flex-wrap flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">100%</div>
                <div class="font-weight-600-black">
                    Online Degree equivalent to offline
                </div>
            </div>

            <div class="vertical-pipe d-none d-lg-inline"></div>
            <div class="horizontal-pipe d-lg-none"></div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">50+</div>
                <div class="font-weight-600-black">
                    Online Degree Universities
                </div>
            </div>

            <div class="vertical-pipe d-none d-lg-inline"></div>
            <div class="horizontal-pipe d-lg-none"></div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">3000+</div>
                <div class="font-weight-600-black">Job Oppourtunities</div>
            </div>

            <div class="vertical-pipe d-none d-lg-inline"></div>
            <div class="horizontal-pipe d-lg-none"></div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">52%</div>
                <div class="font-weight-600-black">Average Salary Hike</div>
            </div>

            <div class="horizontal-pipe d-lg-none"></div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center d-lg-none"
            >
                <button class="btn btn-bg-color">Any Suggestions</button>
            </div>
        </div>
        <div class="align-self-lg-end d-none d-lg-inline">
            <div
                class="d-flex justify-content-center align-items-center py-sm-4 px-sm-3 py-lg-3 px-lg-3 shadow-lg bg-white rounded"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#ef403d"
                    class="bi bi-telephone-outbound-fill help-btn"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
                    />
                </svg>
            </div>
        </div>
    </div>
    <div class="container-fluid d-none d-sm-inline d-lg-none">
        <div class="grid-carousel">
            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">2 Millions+</div>
                <div class="font-weight-600-black">Learner Counselled</div>
            </div>

            <div
                class="m-1 p-2 d-flex flex-wrap flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">100%</div>
                <div class="font-weight-600-black">
                    Online Degree equivalent to offline
                </div>
            </div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">50+</div>
                <div class="font-weight-600-black">
                    Online Degree Universities
                </div>
            </div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">3000+</div>
                <div class="font-weight-600-black">Job Oppourtunities</div>
            </div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center"
            >
                <div class="font-weight-600-red">52%</div>
                <div class="font-weight-600-black">Average Salary Hike</div>
            </div>

            <div
                class="m-1 p-2 d-flex flex-column justify-content-center align-items-center d-lg-none"
            >
                <!-- !any Suggestions offcanvas -->
                <button
                    class="btn offcanvas-font-500-btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    Any Suggestions
                </button>
            </div>
        </div>
    </div>
    <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
    >
        <div class="offcanvas-header">
            <h5
                class="offcanvas-title offcanvas-font-500"
                id="offcanvasRightLabel"
            >
                How Can I help You?
            </h5>
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                @click="resetFields"
            ></button>
        </div>
        <div class="offcanvas-body">
            <form>
                <div class="mb-3">
                    <label
                        for="exampleFormControlInput1"
                        class="form-label offcanvas-font-500"
                        >Email us at</label
                    >
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        readonly
                    />
                </div>
                <div class="mb-3">
                    <label
                        for="exampleFormControlTextarea1"
                        class="form-label offcanvas-font-500"
                        >Your Query</label
                    >
                    <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        v-model="queryMsg"
                        required
                    ></textarea>
                    <button
                        type="button"
                        class="btn mt-3 me-3 offcanvas-font-500-btn"
                        @click="resetFields"
                    >
                        Reset
                    </button>
                    <button
                        type="button"
                        class="btn mt-3 offcanvas-font-500-btn"
                    >
                        Send
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            queryMsg: "",
        };
    },
    methods: {
        resetFields() {
            this.queryMsg = "";
            console.log("button clicked");
        },
    },
};
</script>

<style lang="scss" scoped></style>
