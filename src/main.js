import { createApp } from 'vue'
import App from './App.vue'
import "./main.css"
import router from './router'
import store from './store/index'


store.dispatch('user/initializeAuth')
const app = createApp(App)

app.use(router)

app.use(store)

app.mount('#app')
