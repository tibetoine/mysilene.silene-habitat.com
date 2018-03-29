import Vue from 'vue'
import Vuex from 'vuex'
import state from './state';
//import getters from './getters';
//import appActions from "./actions/appActions";




Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    //getters,
    mutations:{
        //...branchMutations
        
    },
    actions: {
        //...appActions
       
    }
});

export default store;