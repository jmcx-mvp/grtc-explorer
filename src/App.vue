<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";
import FooterNav from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

window.allPoolInfo = []

export default {
  name: 'app',
  components: {
    FooterNav,
    TopNav,
  },
}
</script>

<style lang="scss">
</style>
