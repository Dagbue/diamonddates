<template>
  <div class="alpha">

<!--    <div class="section-1">-->

<!--      <div class="section-1-content">-->
<!--        <p class="section-1-header">As Featured In</p>-->
<!--      </div>-->

<!--      <div class="section-1-images">-->
<!--        <img src="@/assets/BI.svg" alt="" class="section-1-image" />-->

<!--&lt;!&ndash;        <img src="@/assets/cnn.svg" alt="" class="section-1-image" />&ndash;&gt;-->

<!--&lt;!&ndash;        <img src="@/assets/forbes.svg" alt="" class="section-1-image" />&ndash;&gt;-->

<!--&lt;!&ndash;        <img src="@/assets/THP-2.svg" alt="" class="section-1-image" />&ndash;&gt;-->

<!--&lt;!&ndash;        <img src="@/assets/tnr-1.svg" alt="" class="section-1-image" />&ndash;&gt;-->

<!--        <img src="@/assets/wall-street-1-2.svg" alt="" class="section-1-image" />-->
<!--      </div>-->


<!--    </div>-->

    <div class="the-footer">

      <div class="bottom">
        <div class="logo-container">
          <!--        <img src="@/assets/companylogo.svg" alt="logo" class="footer-img" />-->

          <div class="footer-link-container">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-link width">
              Allure Affiliations is the largest luxury and secured connection site for the beautiful, wealthy,
              and successful individuals in over 60 countries.
            </p>

            <div class="social">
              <div class="social-part-1">
                <i class='bx bxl-facebook'></i>
                <i class='bx bxl-twitter' ></i>
                <i class='bx bxl-instagram' ></i>
                <i class='bx bxl-youtube' ></i>
              </div>
              <img src="https://www.seeking.com/wp-content/uploads/2021/10/google-play-btn-1.svg" alt="" class="google" />
            </div>

            <p class="footer-link width">
              MEMBERS OF ALLURE AFFILIATIONS ARE NOT SUBJECT TO MANDATORY BACKGROUND SCREENINGS BUT HAVE THE OPTION TO
              SUBMIT FOR A BACKGROUND CHECK AND/OR ID VERIFICATION.
            </p>
          </div>

          <div class="footer-link-container2">
            <h3 class="footer-title">Links</h3>
            <a  class="footer-link hover" @click="onPostClick">Home</a>
            <a  class="footer-link hover" @click="onPostClick2">About Us</a>
            <a  class="footer-link hover" @click="onPostClick3">Testimony</a>
            <a  class="footer-link hover" @click="onPostClick4">Contact</a>
            <a  class="footer-link hover" @click="onPostClick5">Request</a>
          </div>

          <div class=" stay-connected">
            <h3 class="footer-title">Stay connected</h3>
            <div class="socials-container">
              <div class="social-logo">
                <div class="last-div">
<!--                  <i class='bx bxs-phone' ></i>-->
                  <i class='bx bxl-telegram'></i>
                  <a href="https://t.me/Allureserv" class="last-div-para">https://t.me/Allureserv</a>

                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para">71-75 Uxbridge Road, London, England, W5 5SL</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bx-mail-send' style='color:#ffffff'></i>
                  <p class="last-div-para">support@allureaffiliations.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <hr />
      <p class="copyright">
        © 2009 Allure Affiliations | All Rights Reserved
      </p>
    </div>


  </div>
</template>

<script>
export default {
  name: "FooterHome",
  methods: {
    onPostClick() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/testimonials");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/requestView");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.alpha{
  color: #FFFFFF;
}

.section-1-header{
  color: #222222;
  font-size: 30px;
  text-align: center;
  margin-top: 1%;
  margin-bottom: 3%;
}

.section-1-images{
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
}

.section-1-image{
  object-fit: contain;
  width: 12%;
}


.the-footer {
  user-select: none;
  /*max-width: 300px;*/
  /*margin: 2rem auto;*/
  border: 0.5px solid #ffffff22;
  background-color: #1F1F2A;
  box-shadow: 0 7px 20px 5px #00000088;
  /*border-radius: 0.7rem;*/
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;
  /*text-align: center;*/
  padding: 4vh  0 2vh 0;
  margin-top: 3%;
}


.logo-container {
  display: flex;
  padding-top: 2%;
}

.footer-title {
  font-size: 20px;
  line-height: 20px;
}

.footer-link {
  display: block;
  font-size: 16px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
}

.bottom{
  margin-top: 2%;
}

.footer-link-container {
  margin-left: 5%;
  margin-right: 5%;
  width: 45%;
}

.footer-link-container2{
  padding-right: 5%;
}
.stay-connected{

}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}

hr {
  width: 100%;
  background-color: #ffffff22;
  border: 0.5px solid #ffffff22;
  opacity: 0.2;
  margin-top: 65px;
}

.copyright {
  font-size: 12px;
  /*line-height: 12px;*/
  text-align: center;
  opacity: 0.75;
  margin-top: 10px;
  padding-bottom: 0;
  margin-bottom: 0;
  font-weight: 900;
}
.footer-img {
  width: 22%;
}
a {
  text-decoration: none;
  transition: ease 0.3s;
}
a:hover{
//font-size: 22px;
  font-weight: 700;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 27px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 15px;
  padding-left: 10px;
  line-height: 1.3;
  text-decoration: none;
  color: #FFFFFF;
}
.footer-title{
  /*font-size: 30px;*/
  font-weight: bold;
}

.google{
  width: 20%;
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: 1%;
}

.social-part-1 i {
  padding-right: 10px;
  margin-top: 1%;
}

.hover:hover{
  color: #911e37;
}

@media (max-width: 990px) {
  .footer-link-container {
    margin-left: 2%;
    margin-right: 3%;
    width: 80%;
  }
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
    margin-bottom: 15%;
    margin-top: 10%;
  }
  .footer-link-container2 {
    margin-bottom: 18%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
}
@media (max-width: 500px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .copyright{
    font-size: 13px;
  }
  .bx{
    font-size: 30px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 10px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
  .last-div{
    margin-left: 30px;
  }

  .section-1-images{
    display: flex;
    flex-direction: column-reverse;
  }

  .section-1-image{
    object-fit: contain;
    width: 34%;
    margin-bottom: 25px;
    margin-top: 5px;
  }

  .width{
    margin-left: 4%;
    margin-right: 4%;
  }

  .google{
    width: 30%;
  }
}
</style>