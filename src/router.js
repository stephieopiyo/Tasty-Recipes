import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import PageNotFound from "./views/PageNotFound";

Vue.use(Router);
const parseProps = (r) => ({ id: parseInt(r.params.id) });
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
      component: Home
    },
    {
      path: "/About",
      name: "About",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/Contact",
      name: "Contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "./views/Contact.vue")
    },
    {
      path: "/Recipes",
      name: "Recipes",
      component: () =>
        import(/* webpackChunkName: "recipes" */ "./components/Recipes/Recipes")
    },
    {
      path: "/Recipes/:id",
      name: "RecipeDetail",
      props: parseProps,
      component: () =>
        import(
          /* webpackChunkName: "recipes" */ "./components/Recipes/RecipeDetail"
        )
    },
    {
      path: "/404",
      alias: "*",
      component: PageNotFound
    }
  ]
});
