<template>
  <div>

    <h1>User Page</h1>
    <hr>
    <button class="btn btn-primary" @click="navigateToHome">Back to Home</button>
    <hr>

    <router-view name="header-top"></router-view>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <router-view name="header-bottom"></router-view>

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
};
</script>

<style>
/* need to put CSS for transition of router */
</style>
