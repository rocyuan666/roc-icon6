import { Plugin, App } from 'vue'
import RocIconPlus from './components/RocIconPlus/RocIconPlus.vue'

const RocIconPlusPlugin: Plugin = {
  install(app: App) {
    app.component(RocIconPlus?.name || '', RocIconPlus)
  },
}

export default RocIconPlusPlugin
