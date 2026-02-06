import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import store from './store/index'
import { createPinia } from 'pinia'


// store.dispatch('user/initializeAuth')

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)

pinia.use(piniaPluginPersistedstate)

app.use(router)

app.use(store)

app.mount('#app')
