<template>
  <div>
    <main>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div class="container-fluid">
        <header class="text-center">
          <h4 class="text-warning display-1">Welcome to IITM BS Portal</h4>
          <hr class="text-warning" />
          <h3 class="text-warning">Login Here</h3>
        </header>
      </div>
      <section
        class="container my-5 w-50 p-5 text-black bg-secondary bg-gradient border border-primary-subtle rounded-3"
      >
        <div class="d-flex justify-content-center align-items-center">
          <div v-if="!loggedIn">
            <GoogleLogin :callback="callback" prompt auto-login />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { decodeCredential, googleLogout } from "vue3-google-login";
import auth from "../router/auth"; 

export default {
  data() {
    return {
      loggedIn: false,
      user: null,
      callback: (response) => {
        console.log("Logged In");
        this.loggedIn = true;
        auth.loggedIn = true; 
        this.user = decodeCredential(response.credential);
        localStorage.setItem("user", this.user); 
        console.log(this.user);
        const redirectTo = this.$route.query.redirect || "/";
        this.$router.push(redirectTo);
      },
    };
  },
  methods: {
    logout() {
      googleLogout();
      this.loggedIn = false;
      auth.loggedIn = false; 
      localStorage.removeItem("user");
    },
  },
  created() {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.loggedIn = true;
      auth.loggedIn = true;
    }
  },
};
</script>
