import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

// const i18n = createI18n({
//     locale: "dk",
//     messages: {
//         dk: {
//             jegEr: "Hej, jeg er",
//         },
//         en: {
//             jegEr: "Hi, I am",
//         }
//     },
// })



// createApp(App).use(i18n).mount('#app')


// 1. Ready translated locale messages
// The structure of the locale message is the hierarchical object structure with each locale as the top property
const messages = {
    en: {
      message: {
        hello: 'hello world'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界'
      }
    }
  }
  
  // 2. Create i18n instance with options
  const i18n = VueI18n.createI18n({
    locale: 'ja', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })
  
  
  // 3. Create a vue root instance
  const appen = Vue.createApp({
    // set something options
    // ...
  })
  
  // 4. Install i18n instance to make the whole app i18n-aware
  appen.use(i18n)
  
  // 5. Mount
  appen.mount('#app')
  
  // Now the app has started!










app.use(router)

app.mount('#app')
