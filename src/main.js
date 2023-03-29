
// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

 

import { createApp } from 'vue'
import App from './App.vue'
import {VueFire, VueFireAuth} from 'vuefire'
import firebase from 'firebase/compat/app'

import './assets/main.css'


const app = createApp(App)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebase,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

app.mount('#app')
