<template>
  <div class="alpha">
<!--    <p class="section-header-1">There’s a time and a place for risk</p>-->
<!--    <p class="section-header">Your funds and data are always secure. With Income And Assets Limited you’re protected-->
<!--      by industry-leading protocols.</p>-->

    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
<!--          <p class="text-3">About Us</p>-->

          <p class="text-1">FIND A KEPT WOMAN WITH THE DIAMOND DARES AGENCY.</p>
          <p class="text-2">Taking into account all the advantages and the best conditions of cooperation with
            the Diamond Dates Kept Women agency, we are sure you will become one of  our regulars.</p>

<!--          <div class="button-part">-->
<!--            <button class="btn1" @click="onPostClick2">Login Account</button>-->
<!--          </div>-->

          <div class="button-group">
            <div class="btn-1">
              Send a Request
              <!--            <img src="@/assets/arrow-right-line.svg" alt="" class="" />-->
            </div>
            <!--          <div class="btn-1">-->
            <!--            LogIn-->
            <!--&lt;!&ndash;            <img src="@/assets/arrow-right-line.svg" alt="" class="" />&ndash;&gt;-->
            <!--          </div>-->
          </div>
        </div>


      </div>

      <div class="section-2">

<!--        <img src="https://margex.com/_next/image?url=%2Fimages%2Fabout_onboarding.png&w=1200&q=75" alt="image" class="image" />-->

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutHeroSection",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>
/*.alpha{*/
/*  !*background-color: #f0f2f4;*!*/
/*  padding-bottom: 3%;*/
/*  padding-top: 3%;*/
/*}*/
.alpha{
  background-image: url("@/assets/image-hero-section.png");
  background-color: #1F1F2A;
  height: 600px;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

span{
  color: #3071EE;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  padding-top: 5.5%;
}

.image{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
}

.text-part{
  width: 83%;
  display: block;
  margin-right: auto;
  /*margin-left: auto;*/
  margin-top: 9%;
  margin-left: 15%;
}

.text-1{
  font-size: 45px;
  line-height: 1.1;
  font-weight: 500;
  white-space: pre-line;
  margin-bottom: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
  color: #FFFFFF;
}

.text-2{
  margin: 0;
  font-size: 20px;
  white-space: pre-line;
  line-height: 1.4;
  color: #7A849D;
}

.text-3{
  background: #d0a984;
  border: 1px solid #d0a984;
  display: inline-block;
  color: #FFFFFF;
  padding: 6px 30px 4px 30px;
  border-radius: 12px;
  margin-bottom: 2%;
  /*font-family: 'BR-Firma-Light', sans-serif;*/
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
  width: 180px;
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  color: #FFFFFF;
  /*margin-bottom: 30px;*/
}




.button-group{
  display: flex;
  justify-content: left;
  gap: 10px;
  margin-top: 2%;
}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
  }

  .text-1{
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 13px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
  }

  .alpha{
    padding-top: 10%;
  }

  .button-group{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 2%;
  }

  .text-part{
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-top: 9%;
  }
}


@media (max-width: 500px) {

  .text-part{
    width: 85%;
  }
  .section-header-1{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

}
</style>