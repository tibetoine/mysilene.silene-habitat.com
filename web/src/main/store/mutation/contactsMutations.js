import Vue from 'vue'
import Do from "../../const/do";


export default {

    [Do.SET_CONTACTS]: (state, contacts) => {
        //Vue.set(contacts, "contacts", contacts);
        state.contacts = contacts;
    }
    
}