<template>
  <div class="section-alpha">

<!--    <p class="section-header-1">About Us</p>-->
    <p class="section-header">
      At all times, family was considered a stronghold of consistency and stability. After all, we always want our
      beloved ones to welcome us at home after a long and hard day, in whose company all troubles seem insignificant.
      An atmosphere of home comfort, caress and care of a beloved woman - that's what a man needs to welcome a new day
      with joy. Love is exactly the feeling that gives a woman happiness and reveals her like the warmth of spring,
      a beautiful flower.
    </p>

    <p class="section-header">
      We are pleased to offer you the service of finding your soulmate. This service is suitable for people who value
      their time and want to have a permanent and harmonious relationship with handsome, intelligent and worthy men.
    </p>


<!--    <div class="section-2">-->

<!--      <div class="section-2-part-1">-->
<!--        <div class="inner">-->
<!--          <i class='bx bx-check-circle'></i>-->
<!--          <p>Organizing the luxurious, beautiful, classy and high-quality life you deserve.</p>-->
<!--        </div>-->

<!--        <div class="inner">-->
<!--          <i class='bx bx-check-circle'></i>-->
<!--          <p>Presenting and assisting with the selection of a female work staff of various professional backgrounds.</p>-->
<!--        </div>-->

<!--        <div class="inner">-->
<!--          <i class='bx bx-check-circle'></i>-->
<!--          <p>Create the dream life with a perfect work/play harmony.</p>-->
<!--        </div>-->


<!--      </div>-->


<!--      <div class="section-2-part-1">-->
<!--        <div class="inner">-->
<!--          <i class='bx bx-check-circle'></i>-->
<!--          <p>Cooperate with your work and lifestyle schedule in such a way that it brings maximum enjoyment.</p>-->
<!--        </div>-->

<!--        <div class="inner">-->
<!--          <i class='bx bx-check-circle'></i>-->
<!--          <p>Elevate the level of your personal prestige as well as that of your company.</p>-->
<!--        </div>-->


<!--      </div>-->
<!--    </div>-->


  </div>



</template>

<script>
export default {
  name: "RelationshipsSection1"
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
  color: #d0a984;
  font-size: 26px;
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