
<template>
  <div class="container">
    <h2 class="latest-title">Latest Meals</h2>
    <div class="latest-meals">
      <div v-for="item in latestMeals" :key="item.idMeal" class="col-md-3 mt-2">
        <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
        <h5 class="card-title">{{ item.strMeal }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Latest",
  data() {
    return {
      latestMeals: [],
    };
  },
  mounted() {
    const random1 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random2 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random3 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random4 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random5 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random6 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random7 = "https://www.themealdb.com/api/json/v1/1/random.php";
    const random8 = "https://www.themealdb.com/api/json/v1/1/random.php";

    const request1 = axios.get(random1);
    const request2 = axios.get(random2);
    const request3 = axios.get(random3);
    const request4 = axios.get(random4);
    const request5 = axios.get(random5);
    const request6 = axios.get(random6);
    const request7 = axios.get(random7);
    const request8 = axios.get(random8);

    axios
      .all([
        request1,
        request2,
        request3,
        request4,
        request5,
        request6,
        request7,
        request8,
      ])
      .then(
        axios.spread((...responses) => {
          //console.log(responses);
          this.latestMeals = responses.map((response) => {
            response = response.data.meals[0];
            return response;
          });
          //console.log(this.latestMeals);
        })
      )
      .catch((error) => console.log(error));
  },
};
</script>