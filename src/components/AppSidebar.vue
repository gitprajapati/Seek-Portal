<template>
  <div class="d-flex align-items-start">
    <div
      class="nav flex-column nav-pills me-3"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        class="nav-link active"
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        @click="$emit('tab-changed', 'modules')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-journal-text"
          viewBox="0 0 16 16"
        >
          <path
            d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
          />
          <path
            d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"
          />
          <path
            d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"
          />
        </svg>
        Modules
      </button>
      <button
        class="nav-link"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
         @click="$emit('tab-changed', 'grades')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clipboard-data"
          viewBox="0 0 16 16"
        >
          <path
            d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"
          />
          <path
            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"
          />
          <path
            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"
          />
        </svg>
        Grades
      </button>
      <button
        class="nav-link"
        id="v-pills-disabled-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-disabled"
        type="button"
        role="tab"
        aria-controls="v-pills-disabled"
        aria-selected="false"
        @click="$emit('tab-changed', 'inbox')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-inbox-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"
          />
        </svg>
        Inbox
      </button>
      <button
        class="nav-link"
        id="v-pills-messages-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-messages"
        type="button"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
        @click="$emit('tab-changed', 'discuss')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chat-right-text"
          viewBox="0 0 16 16"
        >
          <path
            d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
          />
          <path
            d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"
          />
        </svg>
        Discuss
      </button>
      <button
        class="nav-link"
        id="v-pills-settings-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-settings"
        type="button"
        role="tab"
        aria-controls="v-pills-settings"
        aria-selected="false"
        @click="$emit('tab-changed', 'calc')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-calculator"
          viewBox="0 0 16 16"
        >
          <path
            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
          />
          <path
            d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
          />
        </svg>
        Calc
      </button>
    </div>
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
        tabindex="0"
      >
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Course Introduction
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div
                  class="btn-group-vertical"
                  role="group"
                  aria-label="Vertical radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio1"
                    autocomplete="off"
                    @click="$emit('toggle-about-course')"
                    checked
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio1"
                    >About the Course</label
                  >
                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio2"
                    autocomplete="off"
                    @click="$emit('toggle-programming-assignment')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio2"
                    >How to submit a programming assignment</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Week 1
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <div
                  class="btn-group-vertical"
                  role="group"
                  aria-label="Vertical radio toggle button group"
                >
                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio3"
                    autocomplete="off"
                    @click="$emit('toggle-introduction-page')"
                    checked
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio3"
                    >L1.1: Introduction</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio4"
                    autocomplete="off"
                    @click="$emit('toggle-introduction-replit')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio4"
                    >L1.2: Introduction to Replit</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio5"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-3')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio5"
                    >L1.3: More on Replit, print and Common Mistakes</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio6"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-4')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio6"
                    >L1.4: A Quick Introduction to Variables</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio7"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-5')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio7"
                    >L1.5: Variables and Input Statement</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio8"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-6')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio8"
                    >L1.6: Variables and Literals</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio9"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-7')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio9"
                    >L1.7: Data Types 1</label
                  >

                  <input
                    type="radio"
                    class="btn-check"
                    name="vbtn-radio"
                    id="vbtn-radio10"
                    autocomplete="off"
                    @click="$emit('toggle-lecture-ppa1')"
                  />
                  <label class="btn btn-outline-danger" for="vbtn-radio10"
                    >PPA 1 - Not Graded</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-disabled"
        role="tabpanel"
        aria-labelledby="v-pills-disabled-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-messages"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
        tabindex="0"
      >
        ...
      </div>
      <div
        class="tab-pane fade "
        id="v-pills-settings"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
        tabindex="0"
      >
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAboutCourse: false,
      showProgrammingAssignment: false,
      showIntroductionPage: false,
      showIntroductionReplit: false,
      showWeek1Lecture3: false,
      showPPA1: false,
    };
  },
  
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: fixed;
}
</style>
