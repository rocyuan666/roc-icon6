import { createApp } from 'vue'
import App from './App.vue'
import RocIconPlus from '../src/main'

const app = createApp(App)

app.use(RocIconPlus)

app.mount('#app')
