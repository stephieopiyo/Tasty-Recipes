<template>
  <div class="container">
    <div class="meal-categories">
      <h2 class="categories-title">Categories</h2>
      <div class="categories">
        <div
          class="category"
          v-for="category in categories"
          :key="category.idCategory"
        >
          <div class="category-img">
            <img
              width="100%"
              :src="category.strCategoryThumb"
              alt="category.strCategory"
            />
          </div>
          <p>{{ category.strCategory }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Categories",
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        //console.log(response.data);
        this.categories = response.data.categories;
      })
      .catch((error) => console.log(error));
  },
};
</script>