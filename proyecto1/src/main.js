// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import movieIndex from './movieIndex.vue'
import movieDetails from './movieDetails.vue'
import directorIndex from './directorIndex.vue'
import directorDetails from './directorDetails.vue'
import producerIndex from './producerIndex.vue'
import producerDetails from './producerDetails.vue'
//faltan producers y directors
const routes = [{
        path: '/movie',
        component: movieIndex,
        props: true
    },
    {
        path: '/movie/show/:id',
        component: movieDetails,
        props: { show: true }
    },
    {
        path: '/movie/edit/:id',
        component: movieDetails,
        props: { edit: true }
    },
    {
        path: '/movie/create',
        component: movieDetails,
        props: { create: true }
    },
    {
        path: '/movie/delete/:id',
        component: movieDetails,
        props: { delete: true }
    },
    {
        path: '/',
        component: movieIndex,
        props: true
    },
    {
        path: '/director',
        component: directorIndex,
        props: true
    },
    {
        path: '/director/show/:id',
        component: directorDetails,
        props: { show: true }
    },
    {
        path: '/director/edit/:id',
        component: directorDetails,
        props: { edit: true }
    },
    {
        path: '/director/create',
        component: directorDetails,
        props: { create: true }
    },
    {
        path: '/director/delete/:id',
        component: directorDetails,
        props: { delete: true }
    },
    {
        path: '/',
        component: directorIndex,
        props: true
    },
    {
        path: '/producer',
        component: producerIndex,
        props: true
    },
    {
        path: '/producer/show/:id',
        component: producerDetails,
        props: { show: true }
    },
    {
        path: '/producer/edit/:id',
        component: producerDetails,
        props: { edit: true }
    },
    {
        path: '/producer/create',
        component: producerDetails,
        props: { create: true }
    },
    {
        path: '/producer/delete/:id',
        component: producerDetails,
        props: { delete: true }
    },
    {
        path: '/',
        component: producerIndex,
        props: true
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')