import { createApp } from 'vue';
import './scss/reset.scss';
import './scss/global.scss';
import withUUID from 'vue-uuid';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from './App.vue';

withUUID(createApp(App)).mount('#app');
