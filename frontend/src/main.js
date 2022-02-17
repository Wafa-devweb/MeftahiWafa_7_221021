// 5. Créez et importer l'instance racine de l'app.
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'


createApp(App)
// utiliser l'instance du routeur 'router'pour le faire // toute l'application est compatible avec le routeur.
.use(router)
// l'application est lancée !
.mount('#app')

