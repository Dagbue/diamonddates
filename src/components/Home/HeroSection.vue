<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-1">
        <div class="text-1">BECOME A <br/> KEPT WOMAN</div>

        <p class="text-2">Experience our premier specialist services immediately by completing a <br/>
          quick and easy request form to schedule your appointment.</p>




        <div class="button-group">
          <div class="btn-1" @click="onPostClick">
            Send a Request
<!--            <img src="@/assets/arrow-right-line.svg" alt="" class="" />-->
          </div>
<!--          <div class="btn-1">-->
<!--            LogIn-->
<!--&lt;!&ndash;            <img src="@/assets/arrow-right-line.svg" alt="" class="" />&ndash;&gt;-->
<!--          </div>-->
        </div>
      </div>

      <div class="section-2">
<!--        <img src="@/assets/iphonex.png" alt="" class="image" />-->

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "HeroSection",
  // beforeDestroy() {
  //   clearInterval(this.intervalId);
  // },
  methods: {
    onPostClick() {
      this.$router.push("/requestView");
      window.scrollTo(0, 0);
    },
  }
}
</script>

<style scoped>
.section-alpha{
  background-image: url(@/assets/hero-background.png);
  background-color: #cccccc;
  height: 600px;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.items-switch .active {
  display: inline; /* Show only active item */
}
.items-switch .active {
  display: inline; /* Show only active item */
}

.items-switch span {
  display: none; /* Hide all by default */
}
.section-alpha{
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
  /*gap: 20%;*/
  /*flex-direction: column;*/
}

.section-1{
  /*margin-top: 50px;*/
  margin-left: 6%;
}

.section-2{
  /*margin-bottom: -10px;*/
  /*width: 255px;*/
  /*height: 500px;*/
  /*background: url("https://margex.com/images/phone_border.svg");*/
  /*background-repeat: no-repeat;*/
  /*-webkit-background-position: center;*/
  /*background-position: center;*/
  /*-webkit-background-size: contain;*/
  /*background-size: contain;*/
  /*padding: 12px 16px 0;*/
}


.text-1{
  font-size: 56px;
  font-family: 'BR-Firma-Bold', sans-serif;
  line-height: 64px;
  letter-spacing: -0.01em;
  text-align: left;
  margin-bottom: 8px;
  color: #FFFFFF;
}

.text-2{
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.015em;
  text-align: left;
  color: #7A849D;
  margin-bottom: 24px;
}

.btn-1{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 46px;
  padding: 8px 16px;
  border-radius: 12px;
  gap: 8px;
  background: #911e37;
  border: 1px solid #911e37;
  width: 170px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  color: #FFFFFF;
  /*margin-bottom: 30px;*/
}



.image{
  width: 65%;
  display: block;
  /*margin-left: auto;*/
  margin-right: auto;
  margin-left: 35%;
}


.button-group{
  display: flex;
  justify-content: left;
  gap: 10px;
}

@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .text-1{
    font-size: 45px;
    line-height: 48px;
    margin-bottom: 8px;
    /*width: 90%;*/
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  }

  .text-2{
    font-size: 18px;
    line-height: 22px;
    width: 95%;
  }

  .btn-1{
    height: 45px;
    padding: 9px 16px;
    gap: 6px;
    width: 190px;
    font-size: 14px;
  }

  .image{
    width: 100%;
  }
}

@media (max-width: 500px) {
  .text-1{
    font-size: 40px;
    line-height: 42px;
    margin-bottom: 9px;
  }



  .text-2{
    width: 85%;
    font-size: 19px;
    line-height: 23px;
  }
}
</style>