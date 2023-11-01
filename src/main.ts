import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes/router'
import { peoplesStore } from './store/store'

createApp(App)
  .use(router)
  .use(peoplesStore)
  .mount('#app')
