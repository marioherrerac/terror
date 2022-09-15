// src/main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/css/normalize.css';
import './assets/css/skeleton.css';
import movieIndex from './movieIndex.vue'
import movieDetails from './movieDetails.vue'
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
]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')