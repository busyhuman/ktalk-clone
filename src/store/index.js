import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    account: {},
    toggle: {
      alarm: true,
      setting: false,
      chatSort: false,
    },
  }
})