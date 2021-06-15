import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Recipes from "./components/Recipes/Recipes";
import RecipeDetail from "./components/Recipes/RecipeDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/Home",
      name: "Home",
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component: () => import(/* webpackChunkName: "about" */"./views/About.vue")
    },
    {
      path: "/Contact",
      name: "Contact",
      component: () => import(/* webpackChunkName: "contact" */"./views/Contact.vue")
    },
    {
      path: "/Recipes",
      name: "Recipes",
      component: Recipes
    },
    {
      path: "/Recipe/:id",
      name: "RecipeDetail",
      component: RecipeDetail,
      props: true
    },
    {
      path: "/404",
      alias: "*",
      component: PageNotFound
    }
  ]
});
