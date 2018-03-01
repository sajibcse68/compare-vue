<template>
  <div id="app">
    <div class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">MyCompany</a>
        </div>

        <span class="nav-toggle" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div class="nav-right nav-menu" v-bind:class="{ 'is-active': isActive }">

          <router-link to="/" class="nav-item r-item">Home</router-link>
          <router-link to="/form" tag="li" active-class="active" class="nav-item r-item" exact><a>Form</a></router-link>
          <router-link to="faq" class="nav-item r-item">FAQ</router-link>
          <router-link to="quote" class="nav-item r-item">Quote</router-link>

          <div class="nav-item">
            <p class="control">
              <a class="button is-primary is-outlined">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Join Now</span>
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>

<div class="row">
  <div class="col-md-2">
    <router-link to="/stocks" class="nav-item r-item">Stock Rider (p1)</router-link>
  </div>
  <!-- 
  <div class="col-md-1">
    <router-link to="/monster-game" class="nav-item r-item">project-1</router-link>
  </div>
 -->
  <div class="col-md-3">
    <router-link to="/wonderful-quotes" class="nav-item r-item">Wonderful Quotes (p2)</router-link>
  </div>

  <div class="col-md-1">
    <router-link to="/Forms" class="nav-item r-item">project-3</router-link>
  </div>

  <div class="col-md-1">
    <router-link to="form" class="nav-item r-item">Form</router-link>
  </div>
  
  <div class="col-md-1">
    <router-link to="faq" class="nav-item r-item">FAQ</router-link>
  </div>
  <div class="col-md-1">
    <router-link to="vue-resource" class="nav-item r-item">Vue Resource</router-link>
  </div>
  <div class="col-md-1">
    <router-link to="home" class="nav-item r-item">Router Home</router-link>
  </div>
  <div class="col-md-1">
    <router-link to="vuex" class="nav-item r-item">Vuex</router-link>
  </div>
</div>


    <router-view></router-view>

  </div>
</template>

<script>
import Vue from 'vue';
import Faq from './components/Faq';
Vue.component('ac-faq', Faq);

export default {
  name: 'app',
  data: function () {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav: function () {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import 'mq'

.nav
  background-color: #383838
  a:hover
    color: gray

.nav-left a
  color: #fff
  font-weight: bold

a.r-item
  color:#C1C1C1
  padding: 0.5rem 1.75rem
  +mobile
    color: gray
    &:hover
      background-color: #F1F1F1

.nav-toggle span
  background-color: #C1C1C1

footer
  background-color: $primary !important
  color: #fff

  .icon
    color: #fff
    margin-left: 20px

</style>
