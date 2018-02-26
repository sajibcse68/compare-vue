<template>
  <div class="row">
    <div class="col-sm-12">
      <h3>Quotes Added</h3>
      <div class="progress">
        <div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"
          :style="{ width: (quoteCount / maxQoutes) * 100 + '%' }">
          {{ quoteCount }} / {{ maxQoutes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quoteCount', 'maxQoutes']
};
</script>
