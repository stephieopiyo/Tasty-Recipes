<template>
  <div class="container">
    <div class="recipes-container">
      <div v-for="item in items" :key="item.idMeal" class="col-md-3 mt-2">
        <router-link
          :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
        >
          <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
        </router-link>
        <h5 class="card-title">{{ item.strMeal }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recipes",
  data() {
    return {
      items: [],
    };
  },

  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?a=American")
      .then((response) => {
        console.log(response.data);
        this.items = response.data.meals;
      })
      .catch((error) => console.error(error));
  },
};
</script>
 
