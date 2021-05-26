<template>
  <div class="container">
    <div class="recipes-container">
      <div v-for="item in items" :key="item.idMeal" class="col-md-3 mt-2">
        <a href="" target="_blank">
          <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
        </a>
        <h5 class="card-title">{{ item.strMeal }}</h5>
      </div>
    </div>
    <RecipeDetail></RecipeDetail>
  </div>
</template>
<script>
import RecipeDetail from "./RecipeDetail";
export default {
  name: "Recipes",
  data() {
    return {
      items: [],
    };
  },
  components: {
    RecipeDetail,
  },

  created() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese")
      .then((response) => {
        console.log(response.data);
        this.items = response.data.meals;
      })
      .catch((error) => console.error(error));
  },
};
</script>
 
