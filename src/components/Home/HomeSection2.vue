<template>
  <div class="alpha">
    <p class="section-header-1">Find Kept Women from the Allure Affiliations agency for successful men.</p>
    <p class="section-header">

      Allure Affiliations is a premier agency catering to discerning gentlemen who seek exceptional Kept Women services.
      Our mission is to thoroughly fulfill your preferences with an unparalleled level of personalized service.
      We are committed to delivering the utmost in quality, focusing on individual needs and meticulous attention
      to detail.
    </p>


    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
          <p class="text-1">Personal approach to all clients</p>
          <p class="text-2">A huge catalogue of candidates of all criteria.</p>
        </div>

<!--        <div class="text-part">-->
<!--          <p class="text-1">Available price from $ 999</p>-->
<!--          <p class="text-2">Only LUX escort models and VIP girls.</p>-->
<!--        </div>-->

        <div class="text-part">
          <p class="text-1">Elite Kept Women for any occasion</p>
          <p class="text-2">Privacy both for customers and models.</p>
        </div>


      </div>

      <div class="section-2">

        <img src="@/assets/section-2-image.jpeg" alt="image" class="image" />

      </div>

    </div>

    <p class="section-header-2">Qualified agency managers will show you what a quality service is, and all you
      have to do is enjoy cooperation.</p>

  </div>
</template>

<script>
export default {
  name: "HomeSection2"
}
</script>

<style scoped>
/*.alpha{*/
/*  !*background-color: #f0f2f4;*!*/
/*  padding-bottom: 3%;*/
/*  padding-top: 3%;*/
/*}*/
.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
  background: #f4f5f6;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 11%;
  margin-right: 11%;
  padding-bottom: 1%;
}

.section-header-2{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  padding-top: 3%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 45%;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.section-alpha{
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  margin-top: 3%;
}

.image{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
}

.text-part{
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
}

.text-1{
  font-size: 24px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-line;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  margin: 0;
  font-size: 17px;
  white-space: pre-line;
  line-height: 1.4;
}

@media (max-width: 700px) {
  .section-header{
    font-size: 16px;
    margin-left: 8%;
    margin-right: 8%;
  }
  .section-header-1{
    font-size: 28px;
    width: 90%;
  }
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
    font-size: 26px;
    line-height: 24px;
    margin-bottom: 13px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
  }
  .image{
    width: 90%;
  }

  .section-header-2{
    width: 90%;
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