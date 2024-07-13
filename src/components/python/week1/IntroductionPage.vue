<template>
  <div class="container">
    <h3 class="mt-4">L1.1: Introduction</h3>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <star-rating :rating="0" />
      <span class="text-muted">- / 5 (0 reviews)</span>
      <button class="btn btn-primary btn-sm">Submit a review</button>
    </div>
    <div class="embed-responsive embed-responsive-16by9">
      <iframe id="player" frameborder="0" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" title="How to submit a programming assignment" width="879.1999999999999" height="494.54999999999995" src="https://www.youtube.com/embed/8ndsDXohLMQ"></iframe>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "IntroductionPage",
};
</script>