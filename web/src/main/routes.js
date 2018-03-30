import Vue from 'vue';
import VueRouter from 'vue-router';
import News from './vue/pages/news';
import Contacts from './vue/pages/contacts';


Vue.use(VueRouter);

let routes = [
  {
    path: '/',
    component: News
  },
  {
    path: '/news',
    component: News
  },
  {
    path: '/contacts',
    component: Contacts
  }
];

export default new VueRouter({
  routes
});