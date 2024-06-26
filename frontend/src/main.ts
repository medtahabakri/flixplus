import 'vuetify/styles'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';


const app = createApp(App)



app.use(createPinia())
app.use(router)

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    theme: {
        defaultTheme: 'dark',
        themes:{
            dark: {
                colors:{
                    "main-color": '#5356FF'
                },
                variables:{
                    "main-color": '#5356FF'
                }
            }
        }
    }
});

app.use(vuetify)

app.mount('#app')
