import Vue from 'vue';
import VueRouter from 'vue-router';
import SignIn from '@/views/SignIn';
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
  ]
})