import Vue from 'vue'
import Vuex from 'vuex'
import BC from "./blockchain";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    BC,
  }
});

export default store;
