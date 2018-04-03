import Vue from 'vue'
import App from './vue/App'
import store from './store/store'
import Vuetify from 'vuetify'
import rest from "./rest/routes";
import router from './routes'

//Evite le Verbose qui dit qu'on est pas en Prod
Vue.config.productionTip = false;


Vue.use(Vuetify);

const app = new Vue({
    router,
    data: {
        //currentRoute: window.location.pathname
    },    
    store,
    components: { App },
    template: '<App/>'
}).$mount('#app');


