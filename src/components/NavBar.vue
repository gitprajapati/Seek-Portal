<template>
  <div class="fixed-top">
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://doe.iitm.ac.in/wp-content/uploads/2021/06/220px-IIT_Madras_Logo.svg_.png"
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          IIT Madras
        </a>
        <button class="navbar-brand btn btn-danger" @click="logout">
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import { googleLogout } from "vue3-google-login";
import auth from "../router/auth";
export default {
  name: "NavBar",
  methods: {
    logout() {
      googleLogout();
      auth.loggedIn = false;
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },
};
</script>
