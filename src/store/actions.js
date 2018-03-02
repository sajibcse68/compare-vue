import Vue from 'vue';

export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
};

export const loadData = ({ commit }) => {
  Vue.http.get('tradeRider.json')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stockPortfolio = data.stockPortfolio;
        const portfolio = {
          stockPortfolio,
          funds
        };

        console.log('commit: ', commit);
        debugger;
        commit('SET_STOCKS', stocks);
        commit('SET_PORTFOLIO', portfolio);
      }
    });
};
