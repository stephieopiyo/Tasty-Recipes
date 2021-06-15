<template>
  <div class="container-fluid">
    <div class="bgimg" v-bind:style="recipeImage">
      >
      <form class="form-inline my-2 my-lg-0 srch">
        <input
          v-model="search"
          class="form-control form-control-lg mr-sm-2"
          type="search"
          placeholder="Find a Recipe"
          aria-label="Search"
        />
        <button
          @click="searchRecipe"
          class="btn btn-lg btn-success my-2 my-sm-0 searchbtn"
          type="submit"
        >
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchRecipe() {},
  },
  computed: {
    recipeImage() {
      return {
        backgroundImage: `url(${require("../assets/img/recipe.jpg")})`,
      };
    },
  },
};
</script>



