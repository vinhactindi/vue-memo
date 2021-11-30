import Vue from "vue";
import App from "./App.vue";
import store from "../store";
import { title } from "./title";

Vue.config.productionTip = false;

Vue.filter("title", title);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
