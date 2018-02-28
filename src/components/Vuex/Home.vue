<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
    <h1>Vuex</h1>
    <app-result></app-result>
    <app-another-result></app-another-result>
    <hr>
    <app-counter ></app-counter>
  </div>
</template>

<script>
import Counter from './Counter.vue';
import Result from './Result.vue';
import AnotherResult from './AnotherResult.vue';
export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appAnotherResult: AnotherResult,
  }
}
</script>
