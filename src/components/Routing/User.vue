<template>
  <div>

    <app-header></app-header>

    <h1>User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Back to Home</button>
    <hr>
    <app-user-start></app-user-start>
  </div>
</template>

<script>
import Header from '../Header/Header';
import UserStart from './UserStart';

 export default {
   
   components: {
     AppHeader: Header,
     AppUserStart: UserStart
   },
   /*
   data () {
     return {
       id: this.$route.params.id
     }
   },
   watch: {
     '$route'(to, from) {
       console.log('to: ', to);
       this.id = to.params.id;
     }
   },
 */
   methods: {
     navigateToHome () {
       this.$router.push('/home');
     }
   }
 }
</script>
