import Vue from 'vue';
import VueRouter from 'vue-router';
import signin from '@/views/SignInView';
import friends from '@/views/FriendsView';
import chat from '@/views/ChatView';
import NotFound from '@/components/NotFound';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signin',
    },
    {
      name: 'signIn',
      path: '/signin',
      component: signin
    },
    {
      name: 'friends',
      path: '/friends',
      component: friends
    },
    {
      name: 'chat',
      path: '/chat',
      component: chat
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})