<template>
  <div class="section-alpha">

    <p class="section-header-1">SERVICES</p>
    <p class="section-header">
      Diamond Dates Agency offers a premier blend of concierge-style services, personal development
      training, and image and lifestyle coaching. Additionally, we function as a production hub for modeling and
      the entertainment industry.
    </p>



    <div class="section-content">

      <div class="section-content-1" >
        <div class="box">
          <img src="https://luxury-girls-monaco.com/wp-content/uploads/2022/03/Girls-who-found-relationships-on-the-content.jpg" class="about-image" alt="assets-image"/>
          <h3>FIND A KEPT WOMAN</h3>
          <p>Looking for a stunning companion? Contact Diamond Dates agency! We'll match you with the perfect partner to brighten your life.</p>
        </div>
        <div class="box">
          <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img%20service_04.jpg" class="about-image" alt="assets-image"/>
          <h3>TRAVEL ORGANIZATION</h3>
          <p>We are more than happy in providing assistance with locating, selecting, and hiring a female personnel
            for your organization according to given requirements.</p>
        </div>
      </div>

      <div class="section-content-1" >
        <div class="box">
          <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img%20service_01.jpg" class="about-image" alt="assets-image"/>
          <h3>ELITE ESCORTS</h3>
          <p>
            Private meetings with premium class Kept Women and the hottest models: our ladies will accompany you anywhere
            on the globe and provide the highest level of service.</p>
        </div>
        <div class="box">
          <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img%20service_02.jpg" class="about-image" alt="assets-image"/>
          <h3>RELATIONSHIPS</h3>
          <p>This service is suitable for people who value their time and want to have a serious and harmonious
            relationship with beautiful, intelligent and worthy women.</p>
        </div>
      </div>



    </div>

  </div>
</template>

<script>
export default {
  name: "HomeSection3"
}
</script>

<style scoped>

.section-alpha{
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
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 20%;
  margin-right: 20%;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box{
  background-color: #1F1F2A;
  /*box-shadow:  20px 20px 60px #d9d9d9,*/
  /*-20px -20px 60px #ffffff;*/
  /*padding: 15px;*/
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 500px;
  height: 550px;
  border: 0.5px solid #1F1F2A;
}



.section-content-1{
  display: flex;
  justify-content: space-evenly;
}

.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 350px;
  width: 100%;
  border-radius: 12px 12px 0 0  ;
  object-fit: cover;
}


.box h3{
  padding-top: 22px;
  color: #911e37;
  font-weight: bold;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box p{
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 3%;
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


@media (max-width: 700px) {
  .section-header{
    font-size: 15px;
    margin-left: 10%;
    margin-right: 10%;
  }
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  .section-header-1{
    font-size: 26px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .box{
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 400px;
  }
}



@media (max-width: 500px) {
  .section-header{
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>