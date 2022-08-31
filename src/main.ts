import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.postcss'
import '@fontsource/roboto-flex'
import '@fontsource/average'
import '@fontsource/kaisei-decol'
import '@fontsource/cagliostro'
import '@fontsource/inika'
import '@fontsource/inter'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
