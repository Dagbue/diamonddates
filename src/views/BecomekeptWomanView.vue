<template>
  <div>
    <becomekept-woman-hero-section/>
    <becomekept-woman-section1/>
    <becomekept-woman-section2/>
    <becomekept-woman-section3/>
    <becomekept-woman-section4/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import BecomekeptWomanHeroSection from "@/components/BecomekeptWoman/BecomekeptWomanHeroSection.vue";
import BecomekeptWomanSection1 from "@/components/BecomekeptWoman/BecomekeptWomanSection1.vue";
import BecomekeptWomanSection2 from "@/components/BecomekeptWoman/BecomekeptWomanSection2.vue";
import BecomekeptWomanSection3 from "@/components/BecomekeptWoman/BecomekeptWomanSection3.vue";
import BecomekeptWomanSection4 from "@/components/BecomekeptWoman/BecomekeptWomanSection4.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "BecomekeptWomanView",
  components: {
    FooterHome,
    ReadyToWork,
    BecomekeptWomanSection4,
    BecomekeptWomanSection3, BecomekeptWomanSection2, BecomekeptWomanSection1, BecomekeptWomanHeroSection}
}
</script>

<style scoped>

</style>