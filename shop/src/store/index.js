import Vue from "vue";
import Vuex from "vuex";

import banner from './banner/index';
import product from './product/index';
import cart from './cart/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    banner,
    product,
    cart
  },
});
