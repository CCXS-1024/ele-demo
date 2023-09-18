import { createApp } from 'vue'

import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'
import 'amfe-flexible'

import 'vant/es/dialog/style'

createApp(App).use(router).mount('#app')
