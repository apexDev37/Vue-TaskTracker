import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vue application instances

// Single Vue application instance
createApp(App)
    .use(router)
    .mount('#app')
