<template>
  <div class="container">
    <h1>Quotes View</h1>
    <ac-quote-gride :quotes="quotes"></ac-quote-gride>
  </div>
</template>

<script>
import QuoteGrid from './QuoteGrid';
export default {
  data: () => {
    return {
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    };
  },
  components: {
    AcQuoteGride: QuoteGrid
  }
};
</script>
