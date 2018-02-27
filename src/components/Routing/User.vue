<template>
  <div>
    <h1>User Page</h1>
    <hr>
    <p>Loaded ID: {{ id }}</p>
    <button class="btn btn-primary" @click="navigateToHome">Back to Home</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id
      }
    },
    methods: {
      navigateToHome () {
        this.$router.push('/home');
      }
    }
  }
</script>
