import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/SignInView';
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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    },
  ]
})