import Vue from "vue";
import Router from "vue-router";
import Recipes from "@/components/Recipes/Recipes";
import RecipeDetail from "@/components/Recipes/RecipeDetail";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/Home"
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/About",
      name: "About",
      component: () => import("./views/About.vue")
    },
    {
      path: "/Contact",
      name: "Contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/Recipes",
      name: "Recipes",
      component: Recipes
    },
    {
      path: "/Recipe/:id",
      name: "RecipeDetail",
      component: RecipeDetail
    },
    {
      path: "*",
      component: () => import("./views/PageNotFound.vue")
    }
  ]
});
