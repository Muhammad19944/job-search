import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "./assets/css/index.css"

const app = createApp(App)

// Register global components

app.use(router).mount('#app')
