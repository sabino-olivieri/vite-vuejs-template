import { createApp } from 'vue';
import {router} from "./router";
import './style/general.scss';
import App from './App.vue';
import axios from "axios";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App).use(router).mount('#app');
