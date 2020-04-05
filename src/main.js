import Vue from "vue";
import "./plugins/vuetify";
import router from "./router";
import moment from "moment";

import BootstrapVue from "bootstrap-vue";

import App from "./App";

import Default from "./Layout/Wrappers/baseLayout.vue";
import Pages from "./Layout/Wrappers/pagesLayout.vue";
import Apps from "./Layout/Wrappers/appLayout.vue";
import Axios from "axios";
import i18n from "./i18n";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);
Vue.component("apps-layout", Apps);

Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
Vue.prototype.$http = Axios;
Vue.prototype.moment = moment;

new Vue({
  el: "#app",
  router,
  i18n,
  template: "<App/>",
  components: { App },
});
