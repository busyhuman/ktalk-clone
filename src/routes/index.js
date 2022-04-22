import Vue from 'vue';
import VueRouter from 'vue-router';
import signin from '@/views/SignInView';
import friends from '@/views/FriendsView';
import chats from '@/views/ChatView';
import more from '@/views/MoreView';
import auth from '@/views/AuthView';
import authmore from '@/views/AuthMoreView';
import NotFound from '@/views/NotFound';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signin',
    },
    {
      name: 'auth',
      path: '/auth',
      component: auth
    },
    {
      name: 'authmore',
      path: '/authmore',
      component: authmore
    },
    {
      name: 'signin',
      path: '/signin',
      component: signin
    },
    {
      name: 'friends',
      path: '/friends',
      component: friends
    },
    {
      name: 'chats',
      path: '/chats',
      component: chats
    },
    {
      name: 'more',
      path: '/more',
      component: more
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})