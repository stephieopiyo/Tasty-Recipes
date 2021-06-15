<template>
  <div id="app">
    <AppNav></AppNav>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNav from "./components/layout/AppNav";
import AppFooter from "./components/layout/AppFooter";

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
