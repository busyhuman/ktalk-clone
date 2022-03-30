import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/SignInView';
import friends from '@/views/FriendsView';
import NotFound from '@/components/NotFound';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/signIn',
    },
    {
      name: 'signIn',
      path: '/signIn',
      component: SignIn
    },
    {
      name: 'friends',
      path: '/friends',
      component: friends
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})