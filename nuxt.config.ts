// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    typescript: {
      typeCheck: true
    },
    css: ['~/assets/styles/custom.scss','~/assets/styles/main.scss'],
    modules: ["nuxt-bootstrap-icons",'@nuxtjs/google-fonts','nuxt-vuefire'],
    app:{
      head:{
        title:"Compro Project",
        meta:[
          {name:"description", content: "Trying Nuxt for the first time"}
        ]
      }
    },
    vuefire: {
      config: {
        apiKey: "AIzaSyB66utojdAA9ZIFsAwSg-cCr__9KG3R3Rk",
        authDomain: "compro-project-8f705.firebaseapp.com",
        projectId: "compro-project-8f705",
        storageBucket: "compro-project-8f705.appspot.com",
        messagingSenderId: "229734009830",
        appId: "1:229734009830:web:b16d950350cd18bf15e427",
      },
      auth: {
        enabled: true
      },
    },

    
 
})
