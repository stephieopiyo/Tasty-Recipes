<template>
  <div class="container-fluid">
    <div class="bgimg" v-bind:style="recipeImage">
      <form class="form-inline my-2 my-lg-0 srch">
        <input
          v-model="searchKeyword"
          class="form-control form-control-lg mr-sm-2"
          type="search"
          placeholder="Find a Recipe"
          aria-label="Search"
        />
        <button
          class="btn btn-lg btn-success my-2 my-sm-0 searchbtn"
          type="submit"
          @click.prevent="search"
        >
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
    <!--<div class="meal-categories">
      <h2 class="categories-title">Categories</h2>
      <div class="categories">
        <div
          class="category"
          v-for="category of categories"
          :key="category.strCategory"
        >
          {{ category.strCategory }}
        </div>
      </div>
    </div>-->
    <div class="search-results hide">
      <div class="h1 text-center">{{ searchResult.strMeal }}</div>
      <div class="row">
        <div class="col-md-8">
          <img :src="searchResult.strMealThumb" alt="item.strMeal" />
        </div>
        <div class="col-md-8">
          <p>Cuisine: {{ searchResult.strArea }}</p>
          <p>Meal Category{{ searchResult.strCategory }}</p>
        </div>
      </div>
      <div class="row">
        <div class="h2 text-center">Ingredients</div>
        <div class="col-md-8">
          <ol>
            <li>{{ searchResult.strIngredient1 }}</li>
            <li>{{ searchResult.strIngredient2 }}</li>
            <li>{{ searchResult.strIngredient3 }}</li>
            <li>{{ searchResult.strIngredient4 }}</li>
            <li>{{ searchResult.strIngredient5 }}</li>
            <li>{{ searchResult.strIngredient6 }}</li>
            <li>{{ searchResult.strIngredient7 }}</li>
            <li>{{ searchResult.strIngredient8 }}</li>
            <li>{{ searchResult.strIngredient9 }}</li>
            <li>{{ searchResult.strIngredient10 }}</li>
          </ol>
        </div>
        <div class="col-md-8">
          <ol>
            <li>{{ searchResult.strIngredient11 }}</li>
            <li>{{ searchResult.strIngredient12 }}</li>
            <li>{{ searchResult.strIngredient13 }}</li>
            <li>{{ searchResult.strIngredient14 }}</li>
            <li>{{ searchResult.strIngredient15 }}</li>
            <li>{{ searchResult.strIngredient16 }}</li>
            <li>{{ searchResult.strIngredient17 }}</li>
            <li>{{ searchResult.strIngredient18 }}</li>
            <li>{{ searchResult.strIngredient19 }}</li>
            <li>{{ searchResult.strIngredient20 }}</li>
          </ol>
        </div>
      </div>
      <div class="h3 text-center">
        Instructions
        <p>{{ searchResult.strInstructions }}</p>
      </div>
      <div class="row">
        <div class="h4 text-center">Measurement</div>
        <div class="col-md-3">
          <ol>
            <li>{{ searchResult.strMeasure1 }}</li>
            <li>{{ searchResult.strMeasure2 }}</li>
            <li>{{ searchResult.strMeasure3 }}</li>
            <li>{{ searchResult.strMeasure4 }}</li>
            <li>{{ searchResult.strMeasure5 }}</li>
          </ol>
        </div>
        <div class="col-md-3">
          <ol>
            <li>{{ searchResult.strMeasure6 }}</li>
            <li>{{ searchResult.strMeasure7 }}</li>
            <li>{{ searchResult.strMeasure8 }}</li>
            <li>{{ searchResult.strMeasure9 }}</li>
            <li>{{ searchResult.strMeasure10 }}</li>
          </ol>
        </div>
        <div class="col-md-3">
          <ol>
            <li>{{ searchResult.strMeasure11 }}</li>
            <li>{{ searchResult.strMeasure12 }}</li>
            <li>{{ searchResult.strMeasure13 }}</li>
            <li>{{ searchResult.strMeasure14 }}</li>
            <li>{{ searchResult.strMeasure15 }}</li>
          </ol>
        </div>
        <div class="col-md-3">
          <ol>
            <li>{{ searchResult.strMeasure16 }}</li>
            <li>{{ searchResult.strMeasure17 }}</li>
            <li>{{ searchResult.strMeasure18 }}</li>
            <li>{{ searchResult.strMeasure19 }}</li>
            <li>{{ searchResult.strMeasure20 }}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      searchResult: [],
      categories: [],
      searchKeyword: this.$route.query.searchKeyword,
    };
  },
  watch: {
    "$route.query.searchKeyword": {
      handler: function (newVal, oldVal) {
        if (newVal !== oldVal) {
          this.searchKeyword = this.$route.query.searchKeyword;
          this.searchRecipe();
        }
      },
      immediate: true,
    },
  },
  methods: {
    search() {
      // this is call when user click search Button
      this.$router.push({ query: { searchKeyword: this.searchKeyword } });
    },
    searchRecipe() {
      axios
        .get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${this.searchKeyword}`
        )
        .then((response) => {
          console.log(response.data);
          this.searchResult = response.data.meals;
        })
        .catch((error) => console.log(error));
    },
  },
  created() {
    if (this.searchKeyword != null) {
      this.searchRecipe();
    }
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((response) => {
        //console.log(response.data);
        this.categories = response.data.meals;
        document.querySelector("hide").style = "block";
      })
      .catch((error) => console.log(error));
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
<style scoped>
.hide {
  display: none;
}
</style>



