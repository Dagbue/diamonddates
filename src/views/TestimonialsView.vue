<template>
  <div class="alpha">
    <testimonials-header/>
    <testimonials-body/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import TestimonialsHeader from "@/components/Testimonials/TestimonialsHeader.vue";
import TestimonialsBody from "@/components/Testimonials/TestimonialsBody.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "TestimonialsView",
  components: {FooterHome, ReadyToWork, TestimonialsBody, TestimonialsHeader}
}
</script>

<style scoped>

</style>