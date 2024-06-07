<template>
  <div class="alpha">
    <p class="section-header-1">Open an account and start trading commodities</p>
    <p class="section-header">Your funds and data are always secure. With Asset Trade Markets you’re protected
      by industry-leading protocols.</p>


    <div class="section-alpha">

      <div class="section-1">

        <div class="text-part">
          <p class="text-1">Expand your portfolio</p>
          <p class="text-2">with commodity trading and capitalize on endless opportunities.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Trade some of the most popular commodities online</p>
          <p class="text-2">including gold and crude oil with both low and stable spreads.</p>
        </div>

        <div class="text-part">
          <p class="text-1">Leverage unique trading conditions</p>
          <p class="text-2">like Stop Out Protection to give your strategy an advantage.</p>
        </div>


      </div>

      <div class="section-2">

        <img src="https://d33vw3iu5hs0zi.cloudfront.net/media/md_exness_gold_trading1_cdd73dcf0b.jpg" alt="image" class="image" />

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "AboutSection6"
}
</script>

<style scoped>
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
  width: 75%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 5%;
}

.text-1{
  font-size: 28px;
  line-height: 26px;
  font-weight: 500;
  white-space: pre-line;
  margin-bottom: 10px;
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