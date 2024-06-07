<template>
  <div>
    <relationships-hero-section/>
    <relationships-section1/>
    <relationships-section2/>
    <relationships-section3/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import RelationshipsHeroSection from "@/components/Relationships/RelationshipsHeroSection.vue";
import RelationshipsSection1 from "@/components/Relationships/RelationshipsSection1.vue";
import RelationshipsSection2 from "@/components/Relationships/RelationshipsSection2.vue";
import RelationshipsSection3 from "@/components/Relationships/RelationshipsSection3.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "RelationshipsView",
  components: {
    FooterHome,
    ReadyToWork,
    RelationshipsSection3, RelationshipsSection2, RelationshipsSection1, RelationshipsHeroSection}
}
</script>

<style scoped>

</style>