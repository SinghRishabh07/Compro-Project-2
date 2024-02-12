<template>
  <div class="container-fluid">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-6 col-md-2  d-flex justify-content-start align-items-center px-4"
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
                <NuxtLink class="dropdown-item" to="/">Live Courses</NuxtLink>
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
                <li class="nav-item px-2 ms-2">
                  <NuxtLink
                    class="nav-link text-black text-uppercase navbar-items-font-size"
                    aria-current="page"
                    to="/"
                    >Refer and Earn</NuxtLink
                  >
                </li>
                <li class="nav-item px-2 ms-2">
                  <NuxtLink
                    class="nav-link text-black text-uppercase navbar-items-font-size"
                    aria-current="page"
                    to="/"
                    >Study Abroad</NuxtLink
                  >
                </li>
                <li class="nav-item px-2 ms-2">
                  <NuxtLink
                    class="nav-link text-black text-uppercase navbar-items-font-size"
                    aria-current="page"
                    to="/"
                    >Free MasterClass</NuxtLink
                  >
                </li>
                <li class="nav-item px-2 ms-2 dropdown d-none d-lg-block navbar-items-font-size">
                  <div class="dropdown ">
                    <div
                      class="dropdown-toggle text-black d-flex justify-content-center align-items-center p-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      MORE
                    </div>
                    <ul class="dropdown-menu navbar-items-font-size">
                      <li>
                        <button class="dropdown-item" type="button">
                          Action
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Another action
                        </button>
                      </li>
                      <li>
                        <button class="dropdown-item" type="button">
                          Something else here
                        </button>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item px-3 dropdown">
                  <button type="button" class="btn btn-bg-color px-2 ms-2">
                    <NuxtLink to="/loginPage" class="text-decoration-none btn-bg-color">
                      SIGN UP
                    </NuxtLink>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
