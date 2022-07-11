import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import { focusDirective } from './directives'
// import { focusDirective, rainbowDirective, customOnDirective, clickOutsideDirective } from './directives'


const app = createApp(App)


app.directive('focus', focusDirective)


app.use(router)
app.use(store)

app.mount('#app')
