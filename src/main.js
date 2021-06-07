import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;
/* es-lint disable no-new*/

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
