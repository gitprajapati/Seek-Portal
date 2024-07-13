import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";
import auth from "./router/auth";
// Import Bootstrap and BootstrapVue CSS files
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Import BootstrapVue 3
import BootstrapVue3 from "bootstrap-vue-3";

const app = createApp(App);

const gauthClientId =
  "35689373286-qc9uk9jl8s90tu1r61p761ssbqjl3f5d.apps.googleusercontent.com";
app.use(vue3GoogleLogin, {
  clientId: gauthClientId,
});
app.use(BootstrapVue3);
app.use(router);

// Check for stored credentials and update auth state
const storedUser = localStorage.getItem("user");
if (storedUser) {
  auth.loggedIn = true;
}
app.mount("#app");
