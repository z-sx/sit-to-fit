import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import '@fontsource/roboto-flex'
import '@fontsource/average'
import '@fontsource/kaisei-decol'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
