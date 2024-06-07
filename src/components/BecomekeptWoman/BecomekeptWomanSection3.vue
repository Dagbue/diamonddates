<template>
  <div class="alpha">

    <div class="section-alpha">

      <div class="section-2">

        <div id="contact-form" class="contact-form">
                    <h1 class="contact-form_title">Become an elite kept woman and meet a rich sponsor</h1>
          <p class="contact-form_paragraph">If you want to become an elite kept woman and meet a rich sponsor, you can
            do it right here and now. After all, we will provide you with a large selection of candidates, as well as
            a team of professional stylists and photographers who will help you create the right portfolio to attract
            a worthy partner. And we will also fully organize your acquaintance and suggest how best to start
            communication with a specific man in such a way as to win his heart.</p>

          <button class="button">
            Send a Request
            <!--            <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />-->
          </button>

        </div>

      </div>

      <div class="section-1">
        <img src="https://luxury-girls-monaco.com/wp-content/uploads/2022/03/Girls-who-became-kept-women.jpg" alt=""  class="image"/>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "BecomekeptWomanSection3"
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
.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
}

.section-1{
  width: 50%;
}

.section-2{
  width: 50%;
}

.image{
  width: 75%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 12px;
}

.contact-form {
  max-width: 540px;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  /*margin-right: 10%;*/
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);*/
  /*padding: 20px 30px;*/
  /*border-radius: 8px;*/
  /*padding-bottom: 40px;*/
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  /*margin-bottom: 15px;*/
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: left;
  font-size: 36px;
  line-height: 44px;
  padding-bottom: 10px;
  color: #101828;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.contact-form_paragraph {
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  padding-bottom: 6%;
  color: #475467;
}


.contact-form .button {
  background: #911e37;
  border: 1px solid #911e37;
  color: white;
  cursor: pointer;
  padding: 15px 35px;
  text-align: center;
  border-radius: 12px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
}

.contact-form .button:hover {
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
}


@media (max-width: 700px) {
  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 100%;
    margin-top: 5%;
  }

  .contact-form_title {
    text-align: center;
  }

  .contact-form_paragraph {
    text-align: center;
    width: 90%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }

  .contact-form .button {
    padding: 15px 55px;
    display: block;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 5%;
  }


}


@media (max-width: 500px) {


}


</style>