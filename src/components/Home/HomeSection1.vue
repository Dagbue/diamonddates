<template>
  <div class="alpha">

    <div class="section-1">
      <h2 class="text-1" style="text-align: center;">DIAMOND DATES AGENCY</h2>
      <p class="text-2">
        Diamond Dates Agency offers an exceptional blend of services, encompassing concierge assistance in
        personal relationships, leisure activities, social introductions, and talent scouting for modeling and dating.</p>
    </div>

    <p class="text-3">IN NUMBERS</p>

    <div class="section-2">

      <div class="section-2-content">
        <p style="text-align: center;" class="text-1">13 Years</p>
        <p class="text-2">We’ve been on the market since 2009.</p>
      </div>
      <div class="vl"></div>
      <hr />

      <div class="section-2-content">
        <p style="text-align: center;" class="text-1">5000 Models</p>
        <p class="text-2">in our model base which is updated constantly.</p>
      </div>
      <div class="vl"></div>
      <hr />

      <div class="section-2-content">
        <p style="text-align: center;" class="text-1">500 Clients</p>
        <p class="text-2">including Forbes List inductees.</p>
      </div>





    </div>

    <div class="btn-part">
<!--      <div class="btn-1" @click="onPostClick">Create Account</div>-->
      <p class="btn-2" @click="onPostClick2">Send a Request</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "HomeSection1",
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
  padding-bottom: 5%;
  /*background: #f4f5f6;*/
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
  letter-spacing: 1.2px;
  width: 40%;
  font-size: 25px;
  padding-bottom: 5px;
  font-family: 'BR-Firma-Bold', sans-serif;
}
.text-2{
  font-size: 18px;
  text-align: center;
  padding-bottom: 1%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
.text-3{
  font-size: 18px;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  margin-bottom: 2%;
  margin-top: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
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
  color: #FFFFFF;
}



.box h1{
  padding-top: 17px;
  color: #d0a984;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
  font-size: 40px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.box h3{
  padding-top: 22px;
  color: #d0a984;
  font-weight: bold;
  text-align: center;
  margin-bottom: 6px;
}

.box p{
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
  padding-top: 5%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}



.vl {
  border-left: 2px solid #1F1F2A;
  height: 90px;
}



.section-2{
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
  margin-bottom: 3%;
}



hr {
  display: none;
  margin-left: auto;
  margin-right: auto;
  width: 65%;
  background-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  opacity: 0.5;
  margin-top: 20px;
  margin-bottom: 15px;
}




@media (max-width: 990px){

  .text-1{
    letter-spacing: 1.1px;
    width: 90%;
    font-size: 23px;
  }

  .alpha{
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .section-2{
    display: block;
  }
  .vl {
    display: none;
  }
  hr{
    display: block;
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