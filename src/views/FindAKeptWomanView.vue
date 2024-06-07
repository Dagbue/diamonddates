<template>
  <div>
    <find-a-kept-woman-header/>
    <find-a-kept-woman-section1/>
    <find-a-kept-woman-section2/>
    <find-a-kept-woman-section3/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import FindAKeptWomanHeader from "@/components/FindAKeptWoman/FindAKeptWomanHeader.vue";
import FindAKeptWomanSection1 from "@/components/FindAKeptWoman/FindAKeptWomanSection1.vue";
import FindAKeptWomanSection2 from "@/components/FindAKeptWoman/FindAKeptWomanSection2.vue";
import FindAKeptWomanSection3 from "@/components/FindAKeptWoman/FindAKeptWomanSection3.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "FindAKeptWomanView",
  components: {
    FooterHome,
    ReadyToWork, FindAKeptWomanSection3, FindAKeptWomanSection2, FindAKeptWomanSection1, FindAKeptWomanHeader}
}
</script>

<style scoped>

</style>