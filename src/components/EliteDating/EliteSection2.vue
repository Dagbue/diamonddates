<template>
  <div class="section-alpha">

    <p class="section-header-1">Girls from our agency are ready to meet you</p>
        <p class="section-header">The best girls from all over the world are here, and you can meet
          them today through our agency. We cooperate with a wide variety of women from all over the world. They not only stun
          with their spectacular appearance, but also conquer men's hearts with their education, secular manners, and
          the ability to delicately communicate.</p>



    <div class="section-content">

      <div class="section-content-1" >
        <div class="box">
          <p>Martina</p>
        </div>
        <div class="box-2">
          <p>Stacy</p>
        </div>
        <div class="box-3">
          <p>Jane</p>
        </div>
      </div>

      <div class="section-content-1" >
        <div class="box-4">
          <p>Vanessa</p>
        </div>
        <div class="box-5">
          <p>Brooke</p>
        </div>
        <div class="box-6">
          <p>Melisa</p>
        </div>
      </div>


    </div>

    <div class="btn-part">
      <!--      <div class="btn-1" @click="onPostClick">Create Account</div>-->
      <p class="btn-2" @click="onPostClick">Send a Request</p>
    </div>

  </div>
</template>

<script>
export default {
  name: "EliteSection2",
  methods: {
    onPostClick() {
      this.$router.push("/requestView");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.section-alpha{
  /*background-image: url("@/assets/background.png");*/
  background-color: #f4f5f6;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-bottom: 5%;
  padding-top: 5%;
}

.section-header{
  font-size: 17px;
  color: #0f171c;
  text-align: center;
  font-weight: 300;
  margin-left: 15%;
  margin-right: 15%;
}
.section-header-1{
  font-size: 30px;
  color: #222222;
  font-weight: bold;
  text-align: center;
  padding-bottom: 0.5%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/07/Martina-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}

.box-2{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/07/Stacy-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}

.box-3{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/08/Jane-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}

.box-4{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/08/Vanessa-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}

.box-5{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/09/Brooke-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}

.box-6{
  box-shadow:  20px 20px 60px #d9d9d9,
  -20px -20px 60px #ffffff;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 400px;
  height: 400px;
  border: 0.5px solid #1F1F2A;
  background: url("https://luxury-girls-monaco.com/wp-content/uploads/2021/07/Melisa-foto-1.jpg");
  background-repeat: no-repeat;
  -webkit-background-position: center;
  background-position: center;
  -webkit-background-size: contain;
  background-size: contain;
}



.section-content-1{
  display: flex;
  justify-content: space-evenly;
}

.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 350px;
  width: 350px;
  object-fit: cover;
  margin-top: 5%;
}


.box p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}


.box-2 p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}


.box-3 p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}


.box-4 p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}


.box-5 p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  margin-bottom: 4px;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}


.box-6 p{
  width: 100%;
  background-color: rgba(31, 31, 42, 0.8);
  padding: 32px;
  margin-top: 81.5%;
  color: #ffffff;
  text-align: center;
  font-family: 'BR-Firma-Bold', sans-serif;
  float: bottom;
  letter-spacing: 1px;
}

.btn-part{
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 3%;
}

.btn-2{
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 48px;
  padding: 8px 16px;
  border-radius: 14px;
  gap: 8px;
  background: #911e37;
  border: 1px solid #911e37;
  width: 190px;
  color: #ffffff;
}

.btn-2:hover{
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
}


@media (max-width: 700px) {
  .section-header{
    font-size: 15px;
    margin-left: 10%;
    margin-right: 10%;
  }
  .section-content-1{
    /*display: flex;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    /*flex-direction: column-reverse;*/
    /*justify-content: space-evenly;*/
  }

  .section-header-1{
    font-size: 26px;
    width: 95%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .box{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  .box-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  .box-3{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  .box-4{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  .box-5{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
  .box-6{
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: none;
  }
}



@media (max-width: 500px) {
  .section-header{
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>