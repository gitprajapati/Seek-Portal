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
  "42526606124-lmn8l9o7jio8j6idf6671as7e38h1h9l.apps.googleusercontent.com";
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
