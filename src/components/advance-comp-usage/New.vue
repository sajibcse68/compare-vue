<template>
  <div>
    <h3> The New </h3>
    {{ count }}
    <button @click="count++">Increase!</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      count: 0
    }
  }
}
</script>