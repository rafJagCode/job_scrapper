import { createApp } from 'vue';
import './scss/reset.scss';
import './scss/global.scss';
import withUUID from 'vue-uuid';
import App from './App.vue';

withUUID(createApp(App)).mount('#app');
