import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from "./store/store";

import "./assets/global.styles.css";

createApp(App).use(router).use(store).mount('#app')
