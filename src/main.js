import { createApp } from 'vue'
import vue3dLoader from "vue-3d-loader"

import './style.css'
import App from './App.vue'


createApp(App)
   .use(vue3dLoader)
   .mount('#app')
