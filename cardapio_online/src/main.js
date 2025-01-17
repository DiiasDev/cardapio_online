import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import store from './stores/app'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(store)
  .mount('#app')
