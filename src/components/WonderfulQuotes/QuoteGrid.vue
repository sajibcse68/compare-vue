<template>
  <div class="row">

    <single-quote v-for="(quote, index) in quotes" :key="quote.id" @click.native="deleteQuote(index)">{{ quote }}</single-quote>

  </div>
</template>

<script>
import SingleQuote from './QuoteSingle';

export default {
  props: ['quotes'],
  components: {
    SingleQuote: SingleQuote
  },
  methods: {
    deleteQuote (index) {
      this.$emit('quoteDeleted', index);
    }
  }
};
</script>

<style>

</style>
