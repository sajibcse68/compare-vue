<template>
<div>
  <button @click="selectedComponent='AppAuthor'">Author</button>
  <button @click="selectedComponent='AppNew'">New</button>
  <hr>
  <p>selectedComponent: {{ selectedComponent }}</p>
  <component :is="selectedComponent"></component>
  <hr>
</div>
</template>

<script>
import Author from './Author';
import New from './New';

export default {
  data: () => {
    return {
      selectedComponent: 'AppAuthor'
    }  
  },
  components: {
    'AppAuthor': Author,
    'AppNew': New
  }
}

</script>

<style>

</style>