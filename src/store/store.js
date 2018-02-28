import Vue from 'vue';
import Vuex from 'vuex';
import counter from './Modules/Counter';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    value: 0
  },
  getters: {
    value: state => {
      return state.value;
    }
  },
  mutations: { // always synchronous
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: { // need to run async tasks
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload);
    }
  },
  modules: {
    counter
  }
});
