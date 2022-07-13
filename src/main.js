import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import { focusDirective } from './directives'
// import { focusDirective, rainbowDirective, customOnDirective, clickOutsideDirective } from './directives'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/styles/styles.scss'


const app = createApp(App)

app.directive('focus', focusDirective)
app.use(ElementPlus)
app.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDbJMazcULOlrKycwzUYHnwzFGb9phw0nI',
  },
})

app.use(router)
app.use(store)

app.mount('#app')
