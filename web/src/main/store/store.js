import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
//import getters from './getters';
import appActions from "./actions/appActions";
import contactsMutations from './mutation/contactsMutations';




Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    //getters,
    mutations:{
        ...contactsMutations
        
    },
    actions: {
        ...appActions
       
    }
});

export default store;