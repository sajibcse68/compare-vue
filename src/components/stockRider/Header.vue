<template>
  <div>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Stock Trader</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

      <router-link tag="li" to="/stocks/portfolio" class="nav-item" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
      <router-link tag="li" to="/stocks/stocks" class="nav-item" activeClass="active"><a class="nav-link">Stocks</a></router-link>

      <li class="nav-item" @click="endDay"><a href="#">End Day</a></li>

      <li class="nav-item dropdown" :class="{show: isDropdownOpen}" @click="isDisDropdownOpen = !isDropdownOpen">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Save & Load
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
          <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
        </div>
      </li>

      <li class="nav-item">Funds: {{ funds | currency }}</li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data () {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    funds () {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay () {
      this.randomizeStocks();
    },
    saveData () {
      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put('tradeRider.json', data);
    },
    loadData () {

    }
  }
};
</script>
