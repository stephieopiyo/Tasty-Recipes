<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <a class="navbar-brand" href="#">Tasty Recipes</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'About' }" class="nav-link"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Contact' }" class="nav-link"
            >Contact us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Recipes' }" class="nav-link"
            >Recipes</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: "AppNav",
};
</script>

