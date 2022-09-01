// run with $ yarn vite --config vite.config.js form-validation

import { createApp } from "vue"
import App from "./App.vue"
import { store } from './store.js'

const app = createApp(App)
app.use(store)

app.mount("#app")