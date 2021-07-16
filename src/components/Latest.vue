
<template>
  <div class="container">
    <div class="latest-meals">
      <h2 class="latest-title">Latest Meals</h2>
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

    const request1 = axios.get(random1);
    const request2 = axios.get(random2);
    const request3 = axios.get(random3);
    const request4 = axios.get(random4);
    const request5 = axios.get(random5);
    const request6 = axios.get(random6);

    axios
      .all([request1, request2, request3, request4, request5, request6])
      .then(
        axios.spread((...responses) => {
          console.log(responses.data);
        })
      )
      .catch((error) => console.log(error));
  },
};
</script>