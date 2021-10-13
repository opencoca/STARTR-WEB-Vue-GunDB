// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import VueGun from "vue-gun";
Vue.config.devtools = true;

Vue.use(VueGun, {
  peers: [
    "https://gun-manhattan.herokuapp.com/gun",
    "https://gunjs-mtl.herokuapp.com/gun"
  ]
});

Vue.config.productionTip = true;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
