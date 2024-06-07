<template>
  <div class="section-alpha">

    <p class="section-header-1">About Us</p>
    <p class="section-header">
      We are grounded in the principle and philosophy of utilizing a creative and comprehensive approach in meeting
      and surpassing your needs and requests. We are fully dedicated to providing you with something that you
      will cherish and value. We do NOT take your time for granted – you will get BEYOND your money’s worth.
    </p>

    <p class="section-header">
      We utilize an individual, personal approach for all our clients. We take into consideration your unique needs
      and preferences. This allows precisely pinpointing your deepest wishes and desires and making them come to life.
    </p>

    <p class="section-header">
      Our dedication and mission is to fulfill all the aspects of our client’s needs, which includes
      (but is far from limited to):
    </p>

    <div class="section-2">

      <div class="section-2-part-1">
        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Organizing the luxurious, beautiful, classy and high-quality life you deserve.</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Presenting and assisting with the selection of a female work staff of various professional backgrounds.</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Create the dream life with a perfect work/play harmony.</p>
        </div>


      </div>


      <div class="section-2-part-1">
        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Cooperate with your work and lifestyle schedule in such a way that it brings maximum enjoyment.</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Elevate the level of your personal prestige as well as that of your company.</p>
        </div>


      </div>
    </div>


    </div>



</template>

<script>
export default {
  name: "AboutSection1"
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
  padding-bottom: 3%;
  padding-top: 2%;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: left;
  font-weight: 300;
  margin-left: 10%;
  margin-right: 10%;
  padding-bottom: 1.5%;
}
.section-header-1{
  font-size: 35px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 40%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.box h3{
  padding-top: 12px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.inner{
  display: flex;
  gap: 10px;
  width: 75%;
  /*display: block;*/
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}

.section-2{
  display: flex;
  justify-content: center;
  margin-left: 4%;
  margin-right: 4%;
}

.section-2-part-1{

}

.section-2-part-1 p {
  font-size: 17px;
}

.bx-check-circle{
  color: #911e37;
  font-size: 27px;
}


@media (max-width: 700px) {
  .section-header{
    font-size: 15px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .section-header-1{
    font-size: 26px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .section-2{
    display: block;
    margin-left: 1%;
    margin-right: 1%;
    margin-top: 2%;
  }
}



@media (max-width: 500px) {
  .section-2-alpha{
    margin-top: 7%;
    margin-bottom: 8%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .section-header{
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>