// middleware/auth.ts

export default defineNuxtRouteMiddleware(async (to, from) => {
    const user = await getCurrentUser();
    console.log(from);
    // redirect the user to the login page
    // if (user ) {
    //     return navigateTo({
    //         path: "/signupPage",
    //         query: {
    //             redirect: to.fullPath,
    //         },
    //     });
    // }
});
