<template>
  <div class="container">

    <app-header :quoteCount="quotes.length" :maxQoutes="maxQuotes"></app-header>

    <ac-new-quote @quoteAdded="addNewQuote"></ac-new-quote>

    <ac-quote-gride :quotes="quotes" @quoteDeleted="quoteDeleted"></ac-quote-gride>

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
import Header from './Header';
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
    addNewQuote (newQuote) {
      if (this.quotes.length >= this.maxQuotes) {
        alert('Please delete Qoutes first!');
      } else {
        this.quotes.push(newQuote);
      }
    },
    quoteDeleted (index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    AcQuoteGride: QuoteGrid,
    AcNewQuote: NewQuote,
    AppHeader: Header
  }
};
</script>
