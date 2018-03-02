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

        <input type="text" class="form-control" v-model="node">
        <br><br>

        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul>
          <li class="list-group-item" v-for="user in users" :key="user.id">{{ user.username }} - {{ user.email }}</li>
        </ul>
      </div>
    </div>
   <h1><b><a href="https://github.com/pagekit/vue-resource" target="_blank"> Learn More </a></b></h1>
  </div>
</template>

<script>
// Vue.http.options.headers = 'anything'

/*
Vue.http.interceptors.push((req, next) => {
  console.log('req: ', req);

//intercepting requests
  if (req.method === 'POST') {
    request.method = 'PUT';
  }
  next()

  // intercepting responses
  next(resp => {
    resp.json = () => {
     return { message: response.body }
    }
  });
})
*/

export default {
  data () {
    return {
      user: {
        username: '',
        email: ''
      },
      users: [],
      resoruce: {},
      node: 'data'
    };
  },
  methods: {
    submit () {
      console.log('data: ', this.user);
      /*
      this.$http.post('', this.user)
        .then((resp) => {
          console.log('resp: ', resp);
          this.user.username = '';
          this.user.email = '';
        }, (err) => {
          console.log('err: ', err);
        })
      */
      this.resource.saveAlt({}, this.user);
    },
    fetchData () {
      // this.$http.get('')
      //   .then(resp => {
      //     return resp.json();
      //   })
      //   .then(data => {
      //     const resultArr = [];
      //     for (let key in data) {
      //       console.log('data[key]: ', data[key]);
      //       resultArr.push(data[key]);
      //     }
      //     this.users = resultArr;
      //   })
      this.resource.getData({node: this.node})
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
        });
    }
  },
  created () {
    const customActions = {
      saveAlt: { method: 'POST', url: 'alternative.json' },
      getData: { method: 'GET' }
    };
    this.resource = this.$resource('{node}.json', {}, customActions);
  }
};
</script>

<style>
.container {
  padding-bottom: 50px;
}
</style>
