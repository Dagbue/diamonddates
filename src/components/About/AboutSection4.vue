<template>
  <div class="alpha">

    <div class="section-1">
      <h2 class="text-1" style="text-align: center;">BY CHOOSING US YOU WILL RECEIVE</h2>
    </div>




    <div class="section-content-1" >
      <div class="box">
        <i class='bx bx-notepad'></i>
        <p>Upon request - informative in-depth details regarding your choices’ background, skills, and education.</p>
      </div>
      <div class="box">
        <i class='bx bxs-calendar-check'></i>
        <p>The required results within the necessary time frame.</p>
      </div>
      <div class="box">
        <i class='bx bx-file-find'></i>
        <p>A wide selection of models of various body and personality criteria catered to your preferences.</p>
      </div>
    </div>



    <div class="section-content-1" >
      <div class="box">
        <i class='bx bx-wine'></i>
        <p>
          Fully organized romantic dinners and dates.
        </p>
      </div>
      <div class="box">
        <i class='bx bx-user-check'></i>
        <p>
          If necessary - a comprehensive background check conducted by our security professionals.
        </p>
      </div>
      <div class="box">
        <i class='bx bxs-folder-minus'></i>
        <p>
          A personal cabinet with your preferred models.
        </p>
      </div>
    </div>




    <!--    <div class="btn-part">-->
    <!--      &lt;!&ndash;      <div class="btn-1" @click="onPostClick">Create Account</div>&ndash;&gt;-->
    <!--      <p class="btn-2" @click="onPostClick2">Send a Request</p>-->
    <!--    </div>-->


  </div>
</template>

<script>
export default {
  name: "AboutSection4",
  methods: {
    onPostClick() {
      this.$router.push("/register");
    },
    onPostClick2() {
      this.$router.push("/login");
    },
  },
}
</script>

<style scoped>

.alpha{
  padding-top: 3%;
  padding-bottom: 10%;
  background: #f4f5f6;
}

.section-1-inner-content h1{
  font-size: 17px;
  font-family: 'BR-Firma-Bold', sans-serif;
  padding-bottom: 5px;
}



.text-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  font-size: 25px;
  padding-bottom: 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.text-2{
  font-size: 18px;
  text-align: left;
  padding-bottom: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  line-height: 1.3;
}

.text-3{
  font-size: 18px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  font-family: 'BR-Firma-Bold', sans-serif;
}





.section-content-1{
  display: flex;
  justify-content: space-evenly;
  /*margin-bottom: 6%;*/
}

.about-image{
  /*display: block;*/
  /*margin-left: auto;*/
  /*margin-right: auto;*/
  /*height: 100px;*/
  /*width: 100px;*/
  /*object-fit: cover;*/
  /*margin-top: 7%;*/
}

.box h1{
  padding-top: 17px;
  color: #911e37;
  font-weight: bold;
  text-align: left;
  margin-bottom: 5px;
  font-size: 40px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box h3{
  padding-top: 22px;
  color: #911e37;
  font-weight: bold;
  text-align: left;
  margin-bottom: 3px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box p{
  color: #222222;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  padding-top: 1.5%;
}

.box{
  /*background-color: #ffffff;*/
  /*box-shadow:  20px 20px 60px #d9d9d9,*/
  /*-20px -20px 60px #ffffff;*/
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 12px;
  margin-top: 4%;
  width: 300px;
  height: 160px;
  text-align: center;
  /*border: 2px solid #1F1F2A;*/
}

.bx{
  color: #911e37;
  font-size: 100px;
}


@media (max-width: 990px){
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  .box{
    /*margin-left: 10%;*/
    /*margin-right: 10%;*/
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: unset;
    width: 90%;
  }

  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .text-1{
    width: 90%;
  }

}

@media (max-width: 500px){


  .btn-part{
    margin-top: 5%;
  }

  .text-2{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
  }
}
</style>