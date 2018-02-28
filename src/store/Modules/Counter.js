import * as types from '../types';

const state = {
  counter: 0
};
const getters = {
  [types.DOUBLE_COUNTER]: state => {
    return state.counter;
  },
  [types.CLICK_COUNTER]: state => {
    return state.counter + ' Clicks';
  }
};
const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};
const actions = {
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
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
