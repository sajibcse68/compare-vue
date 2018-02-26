<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="panel panel-default">
      <div class="panel-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style>
.panel {
  font-size: 2em;
}
.panel-body {
  font-family: 'Arizonia', cursive;
}
.quote {
  cursor: pointer;
}
.quote:hover {
  background-color: #ffe2e2;
}

footer.footer {
  margin-top: 30px;
}
</style>
