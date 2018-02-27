<template>
  <div>
    <h3>Some User Details</h3>
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      :to="{ name: 'UserEdit', params: { id: this.$route.params.id }, query: { locale: 'en',q: '100'}, hash: '#data' }"
      class="btn btn-primary">Edit User</router-link>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        btnLink: {
          name: 'UserEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: '100'
          },
          hash: '#data'
        }
      }
    }
  }
</script>
