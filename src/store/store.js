import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter;
    },
    stringCounter: state => {
      return state.counter + ' Clicks';
    },
    value: state => {
      return state.value;
    }
  },
  mutations: { // always synchronous
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions: { // need to run async tasks
    increment: ({ commit }, payload) => {
      commit('increment', payload); // call mutation's method
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload); // call mutation's method
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by); // call mutation's method
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by); // call mutation's method
      }, payload.duration);
    },
    updateValue: ({commit}, payload) => {
      commit('updateValue', payload);
    }
  }
});
