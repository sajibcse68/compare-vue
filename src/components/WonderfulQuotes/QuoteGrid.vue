<template>
  <div class="row">

    <single-quote v-for="quote in quotes" :key="quote.id">{{ quote }}</single-quote>

  </div>
</template>

<script>
import SingleQuote from './QuoteSingle';

export default {
  props: ['quotes'],
  components: {
    SingleQuote: SingleQuote
  }
};
</script>

<style>

</style>
