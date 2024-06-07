<template>
  <div class="alpha">
    <p class="section-header-1">Requirements for girls who want to become kept women.</p>
    <!--        <p class="section-header">You decide what to trade and when to trade it. We’re hard at work behind the scenes to-->
    <!--          minimize your costs and improve your execution.</p>-->


    <div class="section-alpha">

      <div class="section-2">

        <img src="https://luxury-girls-monaco.com/wp-content/uploads/2022/03/Elite-kept-woman-of-the-agency-Luxury-Girls.jpg" alt="image" class="image" />

      </div>


      <div class="section-1">

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Personal motivation to become an elite kept woman</p>
          </div>
          <!--          <p class="text-2">Create your account today and unlock the full potential of our services.</p>-->
        </div>

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Well-groomed appearance, attractiveness</p>
          </div>
          <!--          <p class="text-2">Verify your account to unlock full access and kickstart your journey with us.</p>-->
        </div>

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Age 18+</p>
          </div>
          <!--          <p class="text-2">Select the perfect investment plan and embark on your journey to financial success.</p>-->
        </div>

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">The desire to find the best sponsor and give him sincerity</p>
          </div>
          <!--          <p class="text-2">Deposit into your investment account and watch your Profits grow.</p>-->
        </div>


        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Opportunity to choose from the best sponsors from around the world</p>
          </div>
          <!--          <p class="text-2">Create your account today and unlock the full potential of our services.</p>-->
        </div>

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Self-confidence and the ability to easily communicate with men</p>
          </div>
          <!--          <p class="text-2">Create your account today and unlock the full potential of our services.</p>-->
        </div>

        <div class="text-part">
          <div class="lawrence">
            <img src="@/assets/pointer.svg" alt="pointer" class="pointer">
            <p class="text-1">Hobbies that attract men: sports, fashion, languages, etc.</p>
          </div>
          <!--          <p class="text-2">Create your account today and unlock the full potential of our services.</p>-->
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "BecomekeptWomanSection4"
}
</script>

<style scoped>
.lawrence{
  display: flex;
  align-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.alpha{
  /*background-image: url("@/assets/backgroungimage.png");*/
  background-color: #f4f5f6;
  height: 100%;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
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
  margin-left: 23%;
  margin-right: 23%;
  padding-bottom: 1%;
}
.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
  width: 60%;
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
  width: 90%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border-radius: 12px;
}

.text-part{
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
}

.text-1{
  font-size: 22px;
  line-height: 24px;
  font-weight: 500;
  white-space: pre-line;
  color: #0f171c;
  /*font-family: 'BR-Firma-Bold', sans-serif;*/
}

.text-2{
  margin: 0;
  color: #222222;
  font-size: 17px;
  white-space: pre-line;
  line-height: 1.4;
  padding-left: 7%;
}

.pointer{
  width: 3.5%;
}

@media (max-width: 700px) {
  .alpha{
    padding-top: 10%;
    padding-bottom: unset;
  }
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
    display: flex;
    flex-direction: column-reverse;
  }
  .section-1{
    width: 100%;
    margin-bottom: 10px;
  }

  .section-2{
    width: 100%;
    margin-bottom: 5%;
  }

  .text-1{
    font-size: 20px;
    line-height: 24px;
  }

  .text-2{
    font-size: 16px;
    line-height: 1.3;
    padding-left: 10%;
  }
  .image{
    width: 90%;
  }
}


@media (max-width: 500px) {
  .alpha{
    padding-bottom: unset;
  }

  .image{
    margin-bottom: -19px;
  }

  .lawrence{
    margin-bottom: 5px;
  }

}
</style>