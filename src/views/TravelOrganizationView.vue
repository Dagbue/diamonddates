<template>
  <div>
    <travel-organization-header/>
    <travel-organization-section1/>
    <travel-organization-section2/>
    <travel-organization-section3/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>
import TravelOrganizationHeader from "@/components/TravelOrganization/TravelOrganizationHeader.vue";
import TravelOrganizationSection1 from "@/components/TravelOrganization/TravelOrganizationSection1.vue";
import TravelOrganizationSection2 from "@/components/TravelOrganization/TravelOrganizationSection2.vue";
import TravelOrganizationSection3 from "@/components/TravelOrganization/TravelOrganizationSection3.vue";
import ReadyToWork from "@/components/Home/ReadyToWork.vue";
import FooterHome from "@/components/BaseComponents/FooterHome.vue";

export default {
  name: "TravelOrganizationView",
  components: {
    FooterHome,
    ReadyToWork,
    TravelOrganizationSection3,
    TravelOrganizationSection2, TravelOrganizationSection1, TravelOrganizationHeader}
}
</script>

<style scoped>

</style>