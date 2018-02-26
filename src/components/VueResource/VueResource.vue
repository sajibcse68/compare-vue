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
        <hr/>

        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul>
          <li class="list-group-item" v-for="user in users" :key="user.id">{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-http-77464.firebaseio.com/data.json';
// Vue.http.options.headers = 'anything'

Vue.http.interceptors.push((req, next) => {
  console.log('req: ', req);
  /*
  if (req.method === 'POST') {
    request.method = 'PUT';
  }
  */
  next();
})

export default {
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  methods: {
    submit() {
      console.log('data: ', this.user);
      this.$http.post('', this.user)
        .then((resp) => {
          console.log('resp: ', resp);
          this.user.username = '';
          this.user.email = '';
        }, (err) => {
          console.log('err: ', err);
        })
    },
    fetchData() {
      this.$http.get('')
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          const resultArr = [];
          for (let key in data) {
            console.log('data[key]: ', data[key]);
            resultArr.push(data[key]);
          }
          this.users = resultArr;
        })
    }
  }
}
</script>

<style>
.container {
  padding-bottom: 50px;
}
</style>
