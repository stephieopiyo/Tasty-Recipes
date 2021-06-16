<template>
  <div class="container">
    <div class="cuisine-tabs">
      <ul
        class="nav nav-tabs justify-content-center"
        id="cuisine"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            class="nav-link active"
            id="american-tab"
            data-toggle="tab"
            href="#american"
            role="tab"
            aria-controls="american"
            aria-selected="true"
            >American</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="british-tab"
            data-toggle="tab"
            href="#british"
            role="tab"
            aria-controls="british"
            aria-selected="false"
            >British</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="canadian-tab"
            data-toggle="tab"
            href="#canadian"
            role="tab"
            aria-controls="canadian"
            aria-selected="false"
            >Canadian</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="chinese-tab"
            data-toggle="tab"
            href="#chinese"
            role="tab"
            aria-controls="chinese"
            aria-selected="false"
            >Chinese</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="french-tab"
            data-toggle="tab"
            href="#french"
            role="tab"
            aria-controls="french"
            aria-selected="false"
            >French</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="indian-tab"
            data-toggle="tab"
            href="#indian"
            role="tab"
            aria-controls="indian"
            aria-selected="false"
            >Indian</a
          >
        </li>
        <li class="nav-item" role="presentation">
          <a
            class="nav-link"
            id="italian-tab"
            data-toggle="tab"
            href="#italian"
            role="tab"
            aria-controls="italian"
            aria-selected="false"
            >Italian</a
          >
        </li>
      </ul>
    </div>
    <div class="tab-content" id="nav-tabContent">
      <div
        class="tab-pane fade show active"
        id="american"
        role="tabpanel"
        aria-labelledby="american-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in americanItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="british"
        role="tabpanel"
        aria-labelledby="british-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in britishItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="canadian"
        role="tabpanel"
        aria-labelledby="canadian-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in canadianItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="chinese"
        role="tabpanel"
        aria-labelledby="chinese-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in chineseItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="french"
        role="tabpanel"
        aria-labelledby="french-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in frenchItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="indian"
        role="tabpanel"
        aria-labelledby="indian-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in indianItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="italian"
        role="tabpanel"
        aria-labelledby="italian-tab"
      >
        <div class="recipes-container">
          <div
            v-for="item in italianItems"
            :key="item.idMeal"
            class="col-md-3 mt-2"
          >
            <router-link
              :to="{ name: 'RecipeDetail', params: { id: item.idMeal } }"
            >
              <img :src="item.strMealThumb" width="100%" alt="item.strMeal" />
            </router-link>
            <h5 class="card-title">{{ item.strMeal }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Recipes",
  data() {
    return {
      americanItems: [],
      britishItems: [],
      canadianItems: [],
      chineseItems: [],
      frenchItems: [],
      indianItems: [],
      italianItems: [],
    };
  },

  mounted() {
    const american =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=American";
    const british =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=British";
    const canadian =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
    const chinese =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese";
    const french =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=French";
    const indian =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian";
    const italian =
      "https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian";

    const requestOne = axios.get(american);
    const requestTwo = axios.get(british);
    const requestThree = axios.get(canadian);
    const requestFour = axios.get(chinese);
    const requestFive = axios.get(french);
    const requestSix = axios.get(indian);
    const requestSeven = axios.get(italian);

    axios
      .all([
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive,
        requestSix,
        requestSeven,
      ])
      .then(
        axios.spread((...responses) => {
          console.log(responses);
          this.americanItems = responses[0].data.meals;
          this.britishItems = responses[1].data.meals;
          this.canadianItems = responses[2].data.meals;
          this.chineseItems = responses[3].data.meals;
          this.frenchItems = responses[4].data.meals;
          this.indianItems = responses[5].data.meals;
          this.italianItems = responses[6].data.meals;
        })
      )
      .catch((errors) => console.error(errors));
  },
};
</script>
 
