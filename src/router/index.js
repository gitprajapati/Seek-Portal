// index.js
import { createRouter, createWebHistory } from "vue-router";
import loginPage from "../components/loginPage.vue";
import currentCourse from "../components/currentCourse.vue";
import pythonCourse from "../components/pythonCourse.vue";
import auth from "../router/auth"; // Import the authentication state

const routes = [
  {
    path: "/",
    name: "home",
    component: currentCourse,
    meta: { requiresAuth: true }, // Add meta field for routes that require authentication
  },
  {
    path: "/login",
    name: "login",
    component: loginPage,
  },
  {
    path: "/python-course",
    name: "python-course",
    component: pythonCourse,
    meta: { requiresAuth: true }, // Add meta field for routes that require authentication
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Add a global navigation guard
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    // Clear auth state and remove user from localStorage
    auth.loggedIn = false;
    localStorage.removeItem("user");
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!auth.loggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath }, // Save the location to redirect to after login
      });
    } else {
      next();
    }
  } else {
    next(); // Always call next() to ensure the navigation resolves
  }
});

export default router;
