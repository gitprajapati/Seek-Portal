<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="main-content">
      <AppSidebar
        @toggle-programming-assignment="
          showProgrammingAssignment = true;
          showAboutCourse = false;
          showIntroductionPage = false;
          showIntroductionReplit = false;
          showWeek1Lecture3 = false;
        "
        @toggle-about-course="
          showAboutCourse = true;
          showProgrammingAssignment = false;
          showIntroductionPage = false;
          showIntroductionReplit = false;
          showWeek1Lecture3 = false;
        "
        @toggle-introduction-page="
          showIntroductionPage = true;
          showProgrammingAssignment = false;
          showAboutCourse = false;
          showIntroductionReplit = false;
          showWeek1Lecture3 = false;
        "
        @toggle-introduction-replit="
          showIntroductionPage = false;
          showProgrammingAssignment = false;
          showAboutCourse = false;
          showIntroductionReplit = true;
          showWeek1Lecture3 = false;
        "
        @toggle-lecture-3="
          showIntroductionPage = false;
          showProgrammingAssignment = false;
          showAboutCourse = false;
          showIntroductionReplit = false;
          showWeek1Lecture3 = true;
        "
        @toggle-lecture-ppa1="
          showPPA1 = true;
          showIntroductionPage = false;
          showProgrammingAssignment = false;
          showAboutCourse = false;
          showIntroductionReplit = false;
          showWeek1Lecture3 = false;
        "
        @tab-changed="setActiveTab"
      />
      <div v-if="activeTab === 'modules'">
        <ProgrammingAssignmentguide v-if="showProgrammingAssignment" />
        <AboutCourse v-if="showAboutCourse" />
        <IntroductionPage v-if="showIntroductionPage" />
        <IntroductionReplit v-if="showIntroductionReplit" />
        <LectureThird v-if="showWeek1Lecture3" />
        <PpaNonGradedfirst v-if="showPPA1" />
      </div>
      <div v-if="activeTab === 'calc'">
        <calCulator></calCulator>
      </div>
    </div>
  </div>
</template>

<script>
import AppSidebar from "../components/AppSidebar.vue";
import NavBar from "../components/NavBar.vue";
import AboutCourse from "../components/python/course introduction/AboutCourse.vue";
import calCulator from "../components/calCulator.vue";
import ProgrammingAssignmentguide from "../components/python/course introduction/ProgrammingAssignmentguide.vue";
import IntroductionPage from "../components/python/week1/IntroductionPage.vue";
import PpaNonGradedfirst from "../components/python/week1/PpaNonGradedfirst.vue";
import IntroductionReplit from "../components/python/week1/IntroductionReplit.vue";
import LectureThird from "../components/python/week1/LectureThird.vue";

export default {
  name: "App",
  components: {
    PpaNonGradedfirst,
    NavBar,
    AppSidebar,
    ProgrammingAssignmentguide,
    AboutCourse,
    IntroductionPage,
    IntroductionReplit,
    LectureThird,
    calCulator,
  },
  data() {
    return {
      showAboutCourse: false,
      showProgrammingAssignment: false,
      showIntroductionPage: false,
      showIntroductionReplit: false,
      showWeek1Lecture3: false,
      showPPA1: false,
      activeTab: "modules", // Default to 'modules'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>
<style scoped>
#app {
  display: flex;
}
.main-content {
  display: flex;
  padding-top: 60px; /* Adjust this value to your navbar's height */
}
.content {
  flex-grow: 1;
  padding: 20px;
  background: #f8f9fa;
}

b-sidebar {
  width: 250px;
}
</style>
