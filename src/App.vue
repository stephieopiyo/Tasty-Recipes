<template>
  <div id="app">
    <AppNav></AppNav>
    <Recipes></Recipes>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppNav from "./components/AppNav";
import Recipes from "./components/Recipes/Recipes";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    AppNav,
    Recipes,
    AppFooter,
  },
};
</script>
<style>
@import "./assets/css/styles.css";
</style>
