<template>
  <div class="alpha">
    <p class="section-header-1">Focus on trading. We’ll handle the rest.</p>
    <p class="section-header">You decide what to trade and when to trade it. We’re hard at work behind the scenes to
      minimize your costs and improve your execution.</p>


    <div class="section-alpha">

      <div class="section-2">

        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/md_exness_deposits_4516a9f627.jpg" alt="image" class="image" />

      </div>


      <div class="section-1">

        <div class="text-part">
          <p class="text-1">Lower trading costs</p>
          <p class="text-2">Experience the most competitive commission and spread levels in the market.</p>
        </div>

        <div class="text-part">
          <p class="text-1">No market impact</p>
          <p class="text-2">Trade large orders with the same spread and pricing as any other trader.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Better trade implementation</p>
          <p class="text-2">Benefit from our proprietary trade implementation process with guaranteed liquidity.</p>
        </div>


      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection5"
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
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 3%;
}

.text-1{
  font-size: 28px;
  line-height: 26px;
  font-weight: 500;
  white-space: pre-line;
  margin-bottom: 10px;
  color: #0f171c;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.text-2{
  margin: 0;
  color: #222222;
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
  }
  .section-alpha{
    display: block;
  }
  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
    margin-bottom: 5%;
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