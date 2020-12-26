import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from "@/components/BaseCard";

const app = createApp(App);

app.component('base-card', BaseCard)
app.component('base-badge', BaseBadge);

app.mount('#app');
