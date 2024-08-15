<template>
  <div class="alpha">
    <p class="text-1">Connect with Elegance .</p>
    <hr class="law"/>

    <div class="section-1-alpha">
      <div class="section-1-part-1">
        <div class="container ">
          <p class="text-2" style="color: #D3D3D3;">Mei Ling</p>

          <p class="text-3">Connect with mature, sophisticated women for engaging conversations, genuine companionship,
            and more. Discover the unique charm and meaningful connections they offer.</p>
          <p class="text-4" @click="scrollToSection('section1')" >Contact</p>
        </div>

      </div>
      <div class="section-1-part-2">
        <img src="@/assets/shuffler-3.jpeg" alt="section-1-image" class="section-1-part-img" />
      </div>
    </div>
    <br/>

    <!--    <p class="text-1">Get to know me  better.</p>-->

    <p class="text-5">
      "Engage with accomplished, sophisticated women who offer genuine companionship, stimulating discussions,
      and unique connections. Experience the unmatched charm and depth they provide."
    </p>

    <p class="text-5">
      "Meet mature, elegant women who inspire with their wisdom, offer real companionship, and form lasting
      connections. Discover the extraordinary appeal and profound relationships they bring."
    </p>

    <div class="contact" id="section1" ref="section1" >
      <p class="text-6">contact information :</p>
      <p class="text-7">
        WhatsApp :
        <i class='bx bxl-whatsapp' style="color: #070e20;position: unset"></i>
        +61 488 872 106
      </p>

      <p class="text-7">
        Telegram :
        <i class='bx bxl-telegram'></i>
        _@jqhen
      </p>
    </div>


    <div class="section-2-alpha">
      <div class="section-2-part-2">
        <img src="@/assets/shuffler-2.jpeg" alt="section-1-image" class="section-2-part-img" />
      </div>
      <div class="section-2-part-2">
        <img src="@/assets/shuffler-1.jpeg" alt="section-1-image" class="section-2-part-img" />
      </div>
    </div>
    <br/>

    <footer-home2/>



  </div>
</template>


<script>
import FooterHome2 from "@/components/BaseComponents/FooterHome2.vue";

export default {
  name: "BioSection",
  components: {FooterHome2},
  methods: {
    scrollToSection(sectionId) {
      const section = this.$refs[sectionId] || document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style scoped>
.alpha{
  background-image: url("@/assets/background.png");
  /*background-color: #000;*/
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.text-1{
  padding-left: 4%;
  padding-top: 2%;
  font-size: 25px;
  font-family: 'BR-Firma-SemiBold', sans-serif;
}



.section-1-part-img{
  width: 500px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin-left: 3%;
}

.section-1-alpha{
  display: flex;
  justify-content: center;
  margin-top: 3%;
}

.container{
  background-color: #D3D3D3;
  border-radius: 10px;
  padding: 20px 35px;
  height: 450px;
  width: 350px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.text-2{
  padding-bottom: 10%;
  padding-top: 10%;
  font-size: 20px;
  font-family: 'BR-Firma-SemiBold', sans-serif;
}

.text-3{
  font-size: 20px;
  padding-bottom: 17%;
  line-height: 1.4;
}

.text-4{
  background-color: #151515;
  display: inline-block;
  color: #ffff;
  padding: 7px 30px;
  border-radius: 5px;
  font-size: 15px;
}

.text-5{
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1%;
  font-size: 18px;
  line-height: 1.5;
}

.text-6{
  font-size: 19px;
}

.bxl-whatsapp{
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.bxl-telegram{
  font-size: 20px;
  padding-left: 5px;
  padding-right: 5px;
}

.text-7{
  display: flex;
  font-size: 17px;
  padding-left: 7px;
  margin-top: 10px;
}

.contact{
  display: block;
  margin-left: 6%;
  margin-top: 1%;
  font-family: 'BR-Firma-SemiBold', sans-serif;
}

.section-2-alpha{
  display: flex;
  justify-content: center;
  margin-top: 3%;
  margin-right: 4%;
}

.section-2-part-img{
  width: 480px;
  height: 550px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.container-2{
  background-color: #D3D3D3;
  border-radius: 10px;
  padding: 20px 30px;
  height: 600px;
  width: 430px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  font-family: 'BR-Firma-SemiBold', sans-serif;
  margin-left: 2%;
}

.law{
  margin-top: 1.5%;
  background-color: #151515;
}

.section-2-part-2{
  margin-left: 1%;
}


@media only screen and (max-width: 900px) {
  .section-1-part-img{
    width: 350px;
    height: 400px;
  }
  .container{
    height: 400px;
    width: 300px;
  }

  .text-2{
    padding-bottom: 10%;
    padding-top: 10%;
  }

  .text-3{
    font-size: 19px;
    padding-bottom: 10%;
    line-height: 1.35;
  }

  .section-2-part-img{
    width: 350px;
    height: 450px;
  }
}

@media only screen and (max-width: 768px) {
  .section-2-part-img{
    width: 320px;
    height: 450px;
  }

  .text-5{
    width: 85%;
    padding-bottom: 5px;
  }

}

@media only screen and (max-width: 450px) {

  .section-1-alpha{
    display: block;
  }

  .container{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    margin-top: 5%;
    width: 350px;
  }

  .section-1-part-img{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }


  .text-4{
    padding: 7px 28px;
    font-size: 13px;
    margin-top: 12%;
  }

  .text-1{
    padding-top: 3%;
    font-size: 22px;
  }

  .section-2-alpha{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-2-part-img{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 370px;
    margin-bottom: 5%;
  }


}
</style>