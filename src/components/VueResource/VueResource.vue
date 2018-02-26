<template>
  <div class="container">
    <h1 style="margin-bottom: 50px">HTTP</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username">
        </div>
        
        <div class="form-group">
          <label>Email</label>
          <input class="form-control" type="email" v-model="user.email">
        </div>
        
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log('data: ', this.user);
    }
  }
}
</script>

<style>
.container {
  padding-bottom: 50px;
}
</style>
