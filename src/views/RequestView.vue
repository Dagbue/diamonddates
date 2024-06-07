<template>
  <div>
    <request-hero/>
    <request-body/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import RequestHero from "@/components/Request/RequestHero.vue";
import RequestBody from "@/components/Request/RequestBody.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "RequestView",
  components: {FooterHome, ReadyToWork, RequestBody, RequestHero}
}
</script>

<style scoped>

</style>