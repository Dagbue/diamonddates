<template>
  <div class="about">
    <about-hero-section/>
    <about-section1/>
    <about-section2/>
    <about-section3/>
    <about-section4/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>
<script setup>
import AboutHeroSection from "@/components/About/AboutHeroSection.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";
import AboutSection1 from "@/components/About/AboutSection1.vue";
import AboutSection2 from "@/components/About/AboutSection2.vue";
import AboutSection3 from "@/components/About/AboutSection3.vue";
import AboutSection4 from "@/components/About/AboutSection4.vue";
</script>