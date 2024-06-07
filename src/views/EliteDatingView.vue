<template>
  <div>
    <elite-header/>
    <elite-section1/>
    <elite-section2/>
    <elite-section3/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import EliteHeader from "@/components/EliteDating/EliteHeader.vue";
import EliteSection1 from "@/components/EliteDating/EliteSection1.vue";
import EliteSection2 from "@/components/EliteDating/EliteSection2.vue";
import EliteSection3 from "@/components/EliteDating/EliteSection3.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "EliteDatingView",
  components: {FooterHome, ReadyToWork, EliteSection3, EliteSection2, EliteSection1, EliteHeader}
}
</script>

<style scoped>

</style>