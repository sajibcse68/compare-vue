<template>
  <div>

    <app-header></app-header>

    <h1>User Page</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-primary" @click="navigateToHome">Back to Home</button>
  </div>
</template>

<script>
import Header from '../Header/Header';

  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    components: {
      AppHeader: Header
    },
    watch: {
      '$route'(to, from) {
        this.id = to.params.id;
      }
    },
    methods: {
      navigateToHome () {
        this.$router.push('/home');
      }
    }
  }
</script>
