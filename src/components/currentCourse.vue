<template>
  <NavBar></NavBar>
  <div class="container main-content">
    <div class="row">
      <div class="col-md-12 text-end">
        <p>{{ currentDate }}</p>
        <p>{{ currentTerm }}</p>
      </div>
    </div>
    <div class="p-5 bg-secondary bg-gradient">
      <h2 class="mb-4">My Current Courses</h2>
      <p>Cumulative Grade Point Average (CGPA) till this term - 9.2</p>

      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body text-center bg-dark text-white">
              <h5 class="card-title">Python Programming</h5>
              <p v-for="(assignment, index) in pythonAssignments" :key="index">
                Week {{ index + 1 }} Assignment - {{ assignment }}
              </p>
              <RouterLink class="btn btn-primary" to="/python-course"
                >Go to Course page</RouterLink
              >
              <!-- <a href="#" class="btn btn-light mt-3">Go to Course page ></a> -->
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body text-center bg-dark text-white">
              <h5 class="card-title">Statistics</h5>
              <p v-for="(assignment, index) in pythonAssignments" :key="index">
                Week {{ index + 1 }} Assignment - {{ assignment }}
              </p>
              <a href="#" class="btn btn-light mt-3">Go to Course page ></a>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body text-center bg-dark text-white">
              <h5 class="card-title">Java Programming</h5>
              <p v-for="(assignment, index) in pythonAssignments" :key="index">
                Week {{ index + 1 }} Assignment - {{ assignment }}
              </p>
              <a href="#" class="btn btn-light mt-3">Go to Course page ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      currentDate: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      currentTerm: "MAY 2024 TERM",
      pythonAssignments: [100.0, 100.0], // Example assignment scores
    };
  },
};
</script>

<style scoped>
.main-content {

  padding-top: 60px; /* Adjust this value to your navbar's height */
}
</style>
