<template>
  <div class="row">

    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>

  </div>
</template>

<script>
import Stock from './Stock';
export default {
  data () {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 10 },
        { id: 2, name: 'Google', price: 20 },
        { id: 3, name: 'Apple', price: 100 },
        { id: 4, name: 'Twiller', price: 30 }
      ]
    };
  },
  components: {
    appStock: Stock
  }
};
</script>

<style scoped>
div.row {
  margin-top: 30px;
}
</style>
