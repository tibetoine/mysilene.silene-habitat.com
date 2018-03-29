import Vue from 'vue'
import App from './vue/App'
import store from './store/store'
import Vuetify from 'vuetify'
import rest from "./rest/routes";

//Evite le Verbose qui dit qu'on est pas en Prod
Vue.config.productionTip = false;


Vue.use(Vuetify);

new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
});
