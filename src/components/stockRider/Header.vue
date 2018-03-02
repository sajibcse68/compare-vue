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

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          End Day
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Save Data</a>
          <a class="dropdown-item" href="#">Load Data</a>
        </div>
      </li>

      <li class="nav-item">Funds: {{ funds | currency }}</li>
    </ul>
  </div>
</nav>
</div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds;
    }
  }
};
</script>
