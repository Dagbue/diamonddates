<template>
  <div class="alpha">

<!--    <div class="section-1">-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--      <div class="video">-->
<!--        <iframe width="400" height="340" src="https://www.youtube.com/embed/jWtmuRn_n5Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
<!--      </div>-->
<!--    </div>-->


    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>Exceptional service and absolute discretion. Every interaction has been handled with the utmost
              professionalism. Highly recommend their services for anyone seeking quality and a memorable experience.</p>
          </blockquote>
          <h3>James T.</h3>
          <h4>Banker.</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>Fantastic service! They ensure safety and privacy, making every meeting special and stress-free. It’s
              clear they prioritize client satisfaction. Definitely the best in the business.</p>
          </blockquote>
          <h3>Henry G.</h3>
          <h4>Banker</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>Professional, discreet, and reliable—every time. The staff is courteous and goes above and beyond to
              meet specific requests. A seamless and enjoyable experience every visit.</p>
          </blockquote>
          <h3>David K.</h3>
          <h4>Lawyer</h4>
        </figcaption>
      </figure>
    </div>

    <div class="section-2">
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>This company sets the bar high with their exceptional service and discretion. Their commitment to client
              privacy and satisfaction is commendable. I’ve used their services multiple times and have never been
              disappointed.</p>
          </blockquote>
          <h3>Edward M.</h3>
          <h4>Investor.</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>This service is truly five-star! From the initial contact to the final goodbye, everything was handled
              with the utmost care and professionalism. I felt valued and respected throughout my entire experience.</p>
          </blockquote>
          <h3>Jennifer McCain</h3>
          <h4>Model</h4>
        </figcaption>
      </figure>
      <figure class="snip1533">
        <figcaption>
          <blockquote>
            <p>I travel frequently for work and always rely on their service for companionship. They consistently
              provide educated, engaging, and sophisticated individuals who make my stays much more enjoyable..</p>
          </blockquote>
          <h3>Jude B.</h3>
          <h4>Business Man</h4>
        </figcaption>
      </figure>
    </div>

  </div>
</template>

<script>
export default {
  name: "TestimonialsBody"
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
  padding-bottom: 1%;
  padding-top: 1%;
}

.section-1{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
}

.snip1533 {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  color: #1F1F2A;
  display: inline-block;
  font-size: 16px;
  margin: 35px 10px 10px;
  max-width: 370px;
  min-width: 250px;
  position: relative;
  text-align: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 5px;
  border-top: 5px solid #911e37;
  line-height: 1.4;
}

.snip1533 *,
.snip1533 *:before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.1s ease-out;
  transition: all 0.1s ease-out;
}

.snip1533 figcaption {
  padding: 13% 10% 12%;
}

.snip1533 figcaption:before {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  color: #911e37;
  content: "&";
  font-size: 32px;
  font-style: normal;
  left: 50%;
  line-height: 60px;
  position: absolute;
  top: -30px;
  width: 60px;
}

.snip1533 h3 {
  color: #1F1F2A;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  margin: 10px 0 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.snip1533 h4 {
  font-weight: 400;
  margin: 0;
  opacity: 0.5;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.snip1533 blockquote {
  font-style: italic;
  font-weight: 300;
  margin: 0 0 20px;
}

.section-2{
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
  margin-bottom: 5%;
}


.container img {
  float: left;
  margin-right: 20px;
  border-radius: 50%;
}

.container span {
  font-size: 20px;
  margin-right: 15px;
}

@media (max-width: 700px) {
  iframe{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }

  .section-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .snip1533{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
  }
}

@media (max-width: 500px) {

}
</style>