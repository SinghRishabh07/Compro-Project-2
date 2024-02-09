// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    typescript: {
      typeCheck: true
    },
    css: ['~/assets/styles/custom.scss','~/assets/styles/main.scss'],
    modules: ["nuxt-bootstrap-icons",'@nuxtjs/google-fonts']
    

})
