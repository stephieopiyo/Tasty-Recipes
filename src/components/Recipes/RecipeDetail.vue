<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h1>{{ item.strMeal }}</h1>
        <div>
          <img :src="item.strMealThumb" alt="item.strMeal" />
        </div>
      </div>
      <div class="col-md-8">
        <h2>Ingredients</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h3>Instructions</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RecipeDetail",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
};
</script>