<template>
  <div class="container">
    <div
      class="container search-results"
      v-for="item of results"
      :key="item.idMeal"
    >
      <div class="h1 text-center">{{ item.strMeal }}</div>
      <div class="row">
        <div class="col-md-5 searchImg">
          <img
            width="100%"
            :src="item.strMealThumb"
            alt="searchResult.strMeal"
          />
        </div>
        <div class="col-md-6">
          <p class="area">Cuisine: {{ item.strArea }}</p>
          <p class="meal-category">Meal Category: {{ item.strCategory }}</p>
          <p class="source">
            Source: <a href="item.strSource">{{ item.strSource }}</a>
          </p>
          <p class="yt-video">
            Video: <a href="item.strYoutube">{{ item.strYoutube }}</a>
          </p>
          <p class="tags">Tags: {{ item.strTags }}</p>
        </div>
      </div>
      <hr />
      <div class="h2 text-center">Ingredients</div>
      <div class="row">
        <div class="col-md-4">
          <ul class="ingredients-list">
            <li>{{ item.strIngredient1 }}</li>
            <li>{{ item.strIngredient2 }}</li>
            <li>{{ item.strIngredient3 }}</li>
            <li>{{ item.strIngredient4 }}</li>
            <li>{{ item.strIngredient5 }}</li>
            <li>{{ item.strIngredient6 }}</li>
            <li>{{ item.strIngredient7 }}</li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="ingredients-list">
            <li>{{ item.strIngredient8 }}</li>
            <li>{{ item.strIngredient9 }}</li>
            <li>{{ item.strIngredient10 }}</li>
            <li>{{ item.strIngredient11 }}</li>
            <li>{{ item.strIngredient12 }}</li>
            <li>{{ item.strIngredient13 }}</li>
            <li>{{ item.strIngredient14 }}</li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="ingredients-list">
            <li>{{ item.strIngredient15 }}</li>
            <li>{{ item.strIngredient16 }}</li>
            <li>{{ item.strIngredient17 }}</li>
            <li>{{ item.strIngredient18 }}</li>
            <li>{{ item.strIngredient19 }}</li>
            <li>{{ item.strIngredient20 }}</li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="h3 text-center">Instructions</div>
      <p>{{ item.strInstructions }}</p>
      <hr />
      <div class="h4 text-center">Measurement</div>
      <div class="row">
        <div class="col-md-3">
          <ul class="measure">
            <li>{{ item.strMeasure1 }}</li>
            <li>{{ item.strMeasure2 }}</li>
            <li>{{ item.strMeasure3 }}</li>
            <li>{{ item.strMeasure4 }}</li>
            <li>{{ item.strMeasure5 }}</li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="measure">
            <li>{{ item.strMeasure6 }}</li>
            <li>{{ item.strMeasure7 }}</li>
            <li>{{ item.strMeasure8 }}</li>
            <li>{{ item.strMeasure9 }}</li>
            <li>{{ item.strMeasure10 }}</li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="measure">
            <li>{{ item.strMeasure11 }}</li>
            <li>{{ item.strMeasure12 }}</li>
            <li>{{ item.strMeasure13 }}</li>
            <li>{{ item.strMeasure14 }}</li>
            <li>{{ item.strMeasure15 }}</li>
          </ul>
        </div>
        <div class="col-md-3">
          <ul class="measure">
            <li>{{ item.strMeasure16 }}</li>
            <li>{{ item.strMeasure17 }}</li>
            <li>{{ item.strMeasure18 }}</li>
            <li>{{ item.strMeasure19 }}</li>
            <li>{{ item.strMeasure20 }}</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "RecipeDetail",
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        console.log(response.data.meals);
        this.results = response.data.meals;
      })
      .catch((error) => console.log(error));
  },
};
</script>
