<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">

      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>(Price: {{ stock.price }} || Quantity: {{ stock.quantity }} )</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="float-left">
          <input type="number" class="from-control" placeholder="Quantity" v-model="quantity" :class="{danger: insufficientQuantity}">
        </div>
        <div class="float-right">
          <button class="btn btn-success"
            @click="sellStock"
            :disabled="insufficientQuantity || quantity < 1 || (quantity === parseInt(quantity, 10))">{{ insufficientQuantity ? 'Insufficient Quantity' : 'Sell' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity () {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      PlaceSellOrder: 'sellStock'
    }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.PlaceSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>

<style>
.danger {
  border: 1px solid red;
}
</style>
