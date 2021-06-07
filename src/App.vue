<template>
  <div id="app">
    <AppNav></AppNav>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNav from "./components/AppNav";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    AppNav,
    AppFooter,
  },
};
</script>
<style>
@import "./assets/css/styles.css";
</style>
