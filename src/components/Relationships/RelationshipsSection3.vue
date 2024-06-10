<template>
  <div class="alpha">

    <div class="section-alpha-1">
      <p class="section-header-1">WE ARE LOOKING FOR THE MODELS
        FOR THE FOLLOWING GOALS</p>
<!--      <p class="section-header">You don't have an account yet? start trading with Asset Trade Markets. </p>-->
    </div>

    <div class="section-alpha">

      <div class="third-section top">
<!--        <p class="text-1">Silver</p>-->
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_price_01.jpg"
             alt="" class="image">
<!--        <p class="text-2">10<span class="text-2-inner">%</span></p>-->
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">IN PURSUIT OF BENEFACTOR/CONCUBINE RELATIONSHIPS</p>

        <div class="separate">
          <p>Standard class</p>
          <p>5000$</p>
        </div>

        <div class="separate">
          <p>Top class</p>
          <p>10000$</p>
        </div>

        <div class="separate">
          <p>Luxury class</p>
          <p>15000$</p>
        </div>


        <div class="btn" @click="onPostClick" >
          <p>Send a Request</p>
        </div>
      </div>

      <div class="third-section top">
        <!--        <p class="text-1">Silver</p>-->
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_price_02.jpg"
             alt="" class="image">
        <!--        <p class="text-2">10<span class="text-2-inner">%</span></p>-->
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">IN PURSUIT OF DATING AND RELATIONSHIPS</p>

        <div class="separate">
          <p>Standard class</p>
          <p>10000$</p>
        </div>

        <div class="separate">
          <p>Top class</p>
          <p>20000$</p>
        </div>

        <div class="separate">
          <p>Luxury class</p>
          <p>30000$</p>
        </div>


        <div class="btn" @click="onPostClick" >
          <p>Send a Request</p>
        </div>
      </div>
    </div>


    <div class="section-alpha">

      <div class="third-section top">
        <!--        <p class="text-1">Silver</p>-->
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_price_03.jpg"
             alt="" class="image">
        <!--        <p class="text-2">10<span class="text-2-inner">%</span></p>-->
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">IN PURSUIT OF A SOULMATE</p>

        <div class="separate">
          <p>from</p>
          <p>50000$</p>
        </div>


        <div class="btn" @click="onPostClick" >
          <p>Send a Request</p>
        </div>
      </div>

      <div class="third-section top">
        <!--        <p class="text-1">Silver</p>-->
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_price_04.jpg"
             alt="" class="image">
        <!--        <p class="text-2">10<span class="text-2-inner">%</span></p>-->
        <!--        <p class="text-2">4 Months</p>-->
        <p class="text-3">INDIVIDUAL PLAN</p>

        <div class="separate">
          <p>Personalized pricing</p>
<!--          <p>50000$</p>-->
        </div>


        <div class="btn" @click="onPostClick" >
          <p>Send a Request</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "RelationshipsSection3",
  methods: {
    onPostClick() {
      this.$router.push("/requestView");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  /*background-image: url("@/assets/background.png");*/
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}
.section-header{
  font-size: 17px;
  color: #0a1538;
  text-align: center;
  font-weight: 300;
  margin-left: 23%;
  margin-right: 23%;
  padding-bottom: 1%;
}

.image{
  width: 100%;
}

.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.section-alpha{
  display: flex;
  justify-content: space-evenly;
  margin-right: 3%;
  margin-left: 3%;
}

.section-alpha-2{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
  margin-bottom: 2%;
}

.third-section{
  width: 480px;
  height: 100%;
  background-color: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  border-radius: 8px;
  margin-bottom: 5%;
}

.separate{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 1%;
}

.separate i{
  padding-top: 15px;
  padding-right: 13px;
}

.separate p{
  /*width: 220px;*/
  padding-top: 15px;
  font-size: 18px;
  line-height: 24px;
  color: #667085;
  margin-left: 5%;
  margin-right: 5%;
}

.btn{
  margin-top: 5%;
  margin-bottom: 10%;
}

.btn p{
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 320px;
  height: 44px;
  background: #911e37;
  border: 1px solid #911e37;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #FFFFFF;
  text-align: center;
}

/*.btn p:hover{*/
/*  background-color: #ffcf01;*/
/*  color: #ffffff;*/
/*  border: 1px solid #ffcf01;*/
/*  -webkit-transition: all 0.35s ease;*/
/*  transition: all 0.35s ease;*/
/*  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);*/
/*}*/

.top{
  margin-top: 1%;
}

.text-1{
  text-align: center;
  padding-top: 9%;
  padding-bottom: 3%;
  font-size: 19px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  text-align: center;
  padding-bottom: 4%;
  font-size: 27px;
  font-weight: bold;
}

.text-2-inner{
  font-size: 14px;
  font-weight: normal;
}

.text-3{
  text-align: center;
  font-size: 20px;
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 10px;
  font-family: 'BR-Firma-Bold', sans-serif;
}


.bx{
  color: #1450C8;
}
@media (max-width: 990px) {

}

@media (max-width: 700px) {
  .section-alpha{
    display: block;
    margin-left: unset;
    margin-right: unset;
    margin-top: 3.5%;
  }

  .third-section{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-header-1{
    width: 90%;
  }


  .section-header-1{
    font-size: 25px;
  }

  .btn p{
    width: 90%;
    border-radius: unset;
  }


}

@media (max-width: 500px) {

  .third-section{
    width: 400px;
    box-shadow: unset;
    border: 1px solid #e4e8ee;
  }
}

</style>