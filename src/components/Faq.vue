<template>
  <div class="faq">
  <h1>Start of FAQ</h1>
    <div class="container">
      <section class="section">
        <h1 class="title">FAQ</h1>
        <h2 class="subtitle is-4 blue-color">FAQ Header: <b>{{ faqHeader }}</b></h2>
        <h2 class="subtitle is-4 blue-color">Age: <b>{{ age }}</b></h2>
        <button @click="changeFaqHeader" >Change FAQ Header Text</button>

        <h3 class="subtitle is-4 blue-color">Age: <b>{{ age }}</b></h3>
        <button @click="changeAge" >Change Age</button>

        <div class="columns" v-if="faqs && faqs.length">
          <div class="column is-one-third" v-for="(faq, index) of faqs" :key='index'>
            <div class="card">
              <div class="card-content">
                <p class="title">{{ faq.title }}</p>
                <p class="answer">{{ faq.body }}</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  <h1>End of FAQ</h1>
  <app-footer></app-footer>
  </div>
</template>

<script>
import axios from 'axios';
import { eventBus } from '../main';
import Footer from './Footer';

// import form from './Form.vue';

export default {
  // props: ['faqHeader],
  props: {
    faqHeader: {
      type: String,
      default: 'It is default Header value'
    },
    age: {
      type: String
    }
  },
  data: () => ({
    faqs: [],
    errors: []
  }),

  components: {
    AppFooter: Footer
  },

  methods: {
    changeFaqHeader () {
      this.faqHeader = 'FAQ Header is Changed from child';
      this.$emit(' ', this.faqHeader);
    },
    changeAge () {
      this.age = '100';
      eventBus.$emit('ageIsChanged', this.age);
    }
  },
  created () {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.faqs = response.data.slice(0, 10);
      }).catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd
  padding: 2.5em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap

.blue-color
  color: blue

button
  margin: 0px 0px 50px 0px
</style>
