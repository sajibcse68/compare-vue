<template>
  <div class="container">
    <h1>Quotes View</h1>

    <ac-new-quote @quoteAdded="addNewQuote"></ac-new-quote>

    <ac-quote-gride :quotes="quotes"></ac-quote-gride>

    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a Quote to delete it!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './QuoteGrid';
import NewQuote from './NewQuote';
export default {
  data: () => {
    return {
      quotes: [
        'Just a Quote to see something'
      ],
      maxQuotes: 10
    };
  },
  methods: {
    addNewQuote(newQuote) {
      this.quotes.push(newQuote);
    }
  },
  components: {
    AcQuoteGride: QuoteGrid,
    AcNewQuote: NewQuote
  }
};
</script>
