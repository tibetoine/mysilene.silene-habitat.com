import Vue from 'vue';
import VueRouter from 'vue-router';
import News from './vue/pages/news';
import Contacts from './vue/pages/contacts';
import Contact from './vue/pages/contact';
import ContactModal from './vue/modals/contactModal';
import NewsModal from './vue/modals/newsModal';


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
    component: Contacts,
    name:'contacts'   
  },
  {
    path: '/contacts/:id', 
    component: ContactModal, 
    name: 'contactModal'
  },
  {
    path: '/news/:id', 
    component: NewsModal, 
    name: 'newsModal'
  }
];

export default new VueRouter({
  routes
});