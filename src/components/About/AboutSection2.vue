<template>
  <div class="alpha">

    <div class="section-1">
      <h2 class="text-1" style="text-align: center;">WHY OUR CLIENTS CHOSE US</h2>
      <p class="text-2">
        What sets us apart from our competition is our dedicated approach to every client. Other agencies utilize a
        one-size-fit all approach – we DO NOT! We cherish every one of our clients for the gentlemen they truly are.
        All your unique needs, preferences, and tastes will be taken into account in the presentation and selection
        process. This takes into mind not only the body type and personality of the required model/models but in
        organizing the intricacies of the event you had in mind.
      </p>

      <p class="text-3">Taking all this into account we can confidently state that NOTHING is impossible.</p>
    </div>




    <div class="section-content-1" >
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_01.jpg" class="about-image" alt="image"/>
        <h3>TOP LEVEL SERVICE :</h3>
        <p>allow us to arrange your events' unique needs. All you need to do is relax and enjoy!</p>
      </div>
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_02.jpg" class="about-image" alt="image"/>
        <h3>WE HAVE WHAT YOU NEED :</h3>
        <p>You’re in professional hands. What could possibly be better?</p>
      </div>
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_03.jpg" class="about-image" alt="image"/>
        <h3>SPEED AND EFFICIENCY :</h3>
        <p>The average time to organize an event is approximately 2 hours.</p>
      </div>
    </div>



    <div class="section-content-1" >
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_04.jpg" class="about-image" alt="image"/>
        <h3>WE VALUE OUR CLIENTS :</h3>
        <p>Allure Affiliations Agency members enjoy benefits such as discounts, exclusive offers and gifts, as well as a whole lot more (join to find out) .</p>
      </div>
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_05.jpg" class="about-image" alt="image"/>
        <h3>EXPERIENCE :</h3>
        <p>our background includes over a decade of providing world-class services to VIP and Forbes list clients around the globe.</p>
      </div>
      <div class="box">
        <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_pochemu_06.jpg" class="about-image" alt="image"/>
        <h3>LOCATIONS CONVENIENT FOR YOU :</h3>
        <p>we provide our exclusive services anywhere in  the major cities of the world.</p>
      </div>
    </div>




    <!--    <div class="btn-part">-->
    <!--      &lt;!&ndash;      <div class="btn-1" @click="onPostClick">Create Account</div>&ndash;&gt;-->
    <!--      <p class="btn-2" @click="onPostClick2">Send a Request</p>-->
    <!--    </div>-->


  </div>
</template>

<script>
export default {
  name: "AboutSection2",
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

.alpha{
  padding-top: 3%;
  padding-bottom: 10%;
  background: #f4f5f6;
}

.section-1-inner-content h1{
  font-size: 17px;
  font-family: 'BR-Firma-Bold', sans-serif;
  padding-bottom: 5px;
}



.text-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-size: 25px;
  padding-bottom: 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.text-2{
  font-size: 18px;
  text-align: left;
  padding-bottom: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  line-height: 1.3;
}

.text-3{
  font-size: 18px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-family: 'BR-Firma-Bold', sans-serif;
}





.section-content-1{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 6%;
}

.about-image{
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  /*height: 100px;*/
  /*width: 100px;*/
  /*object-fit: cover;*/
  /*margin-top: 7%;*/
}

.box h1{
  padding-top: 17px;
  color: #911e37;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  font-size: 40px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box h3{
  padding-top: 22px;
  color: #911e37;
  font-weight: bold;
  text-align: left;
  margin-bottom: 3px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box p{
  color: #222222;
  text-align: left;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 1%;
}

.box{
  /*background-color: #ffffff;*/
  /*box-shadow:  20px 20px 60px #d9d9d9,*/
  /*-20px -20px 60px #ffffff;*/
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 350px;
  height: 260px;
  /*border: 2px solid #1F1F2A;*/
}


@media (max-width: 990px){
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  .box{
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: unset;
    margin-top: unset;
    width: 100%;
  }

  .alpha{
    padding-top: 10%;
    padding-bottom: 5%;
  }

  .text-1{
    width: 90%;
    font-size: 23px;
  }

  .text-2{
    width: 90%;
    font-size: 18px;
  }

  .about-image{
    display: block;
    margin-left: auto;
    margin-right: auto;
    /*height: 100px;*/
    /*width: 100px;*/
    /*object-fit: cover;*/
    /*margin-top: 7%;*/
  }

  .box h1{
    text-align: center;
  }

  .box h3{
    text-align: center;
  }

  .box p{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    text-align: center;
  }

  .text-3{
    width: 90%;
    margin-top: 3%;
    margin-bottom: 3%;
  }

}

@media (max-width: 500px){


  .btn-part{
    margin-top: 5%;
  }

  .text-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>