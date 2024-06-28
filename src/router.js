import {createRouter, createWebHistory} from "vue-router";
import HomePage from './pages/HomePage.vue';

export const router = createRouter({
    history: createWebHistory(),  // serve per la cronologia
    routes: [
        {
            path: "/",     // path è quello che vediamo nella barra dei ricerca del browser
            name: "home",    // etichetta definita per la rotta del codice
            component: HomePage // bisogna importarla
        },

    ]
});