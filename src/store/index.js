import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    toggle: {
      alarm: true,
      setting: false,
      chatSort: false,
    },
  }
})