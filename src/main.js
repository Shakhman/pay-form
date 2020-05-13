import Vue from "vue";
import App from "./App.vue";
import $ from "jquery";
import VueSlideToggle from "vue-slide-toggle";
import vmodal from 'vue-js-modal'


Vue.use(VueSlideToggle);
Vue.use(vmodal, {
  dialog: true
});
Vue.config.productionTip = false;

Vue.prototype.$ = $;
new Vue({
  render: (h) => h(App),
}).$mount("#app");