<template>
  <div class="container">
    <h3 class="mt-4">About the Course</h3>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <star-rating :rating="0" />
      <span class="text-muted">- / 5 (0 reviews)</span>
      <button class="btn btn-primary btn-sm">Submit a review</button>
    </div>

    <div>
      <h5>Course Instructor:</h5>
      <p>
        Sudarshan Iyengar,<br />
        Associate Professor,<br />
        Department of Computer Science & Engineering,<br />
        IIT Ropar
      </p>
    </div>

    <div>
      <h5>Course Mentors (listed in alphabetical order):</h5>
      <ol>
        <li>Atul Pratap Singh (M.Tech, Galgotias University, Greater Noida)</li>
        <li>Karthik Thiagarajan (BTech, IIT Madras)</li>
        <li>Kumar Ramanand (EPABA, IIM Ahmedabad)</li>
        <li>Omkar Joshi (MTech, Amrita University)</li>
        <li>Santhana Krishnan S (ME, College of Engineering, Guindy)</li>
      </ol>
    </div>

    <div>
      <h5>Study Material:</h5>
      <p>
        The primary study material for this course is the set of videos and
        assignments posted on the course page. The learners are advised to make
        best use of the interaction sessions with the course support members in
        addition to the videos and assignments.
      </p>
    </div>

    <div class="mb-3">
      <p>
        To know more about course syllabus, Instructors and Prescribed Books
        please click on the below tab:
      </p>
      <a
        href="https://www.onlinedegree.iitm.ac.in/course_pages/BSCS1002.html"
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue"
      >
        https://www.onlinedegree.iitm.ac.in/course_pages/BSCS1002.html
      </a>
    </div>

    <div>
      <p>Please click on the below tab to view the Course Specific Calendar:</p>
      <a
        href="https://calendar.google.com/calendar/u/6?cid=Y19tbHU2ZnZu..."
        target="_blank"
        rel="noopener noreferrer"
        class="text-blue"
      >
        https://calendar.google.com/calendar/u/6?cid=Y19tbHU2ZnZu...
      </a>
    </div>
  </div>
</template>



<script>
export default {
  name: "AboutCourse",
};
</script>

<style scoped>
.text-blue {
  color: blue;
}
</style>
