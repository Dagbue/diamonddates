<template>
  <div class="section-alpha">

    <p class="section-header-1">Our Clients</p>
    <p class="section-header">
      We deliver the highest quality of service in the industry – this is confirmed by the large number of our repeat
      clients who are regulars on the Forbes list.
    </p>

    <p class="section-header">
      Therefore our agency is happy to offer the quality services suited for goal oriented, purpose driven,
      successful individuals who value their time.
      The nature of or our work requires that we hold to the highest standards not only our models and managers,
      but our clients as well. Our clients are:
    </p>


    <div class="section-2">

      <div class="section-2-part-1">
        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>First and foremost - proper gentlemen.</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Dependable.</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Secure and confident in their desires.</p>
        </div>


      </div>


      <div class="section-2-part-1">
        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Neat and orderly</p>
        </div>

        <div class="inner">
          <i class='bx bx-check-circle'></i>
          <p>Honest and chivalrous.</p>
        </div>


      </div>
    </div>

    <p class="section-header">
      We exclusively work with (and employ) the upper-echelon of their respective fields. Confidentiality and
      discretion is one of our top priorities. As such, it is absolutely forbidden to disclose any personal and/or
      identifiable details of any of our models, employees or the events we organize. Our security team regularly
      conducts background checks on prospective clients and employees.
    </p>

    <p class="section-header">
      We reserve the right to conduct a background check, at the discretion of our security professionals, with any
      individual applying to conduct any form of business and/or cooperation with our organization at any time.
    </p>


  </div>



</template>

<script>
export default {
  name: "AboutSection3"
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
  margin-left: 8%;
  margin-right: 8%;
  padding-bottom: 1.2%;
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
  width: 100%;
  /*display: block;*/
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 20px;
}

.section-2{
  display: flex;
  justify-content: space-evenly;
  /*margin-left: 4%;*/
  /*margin-right: 4%;*/
  margin-top: 1%;
  margin-bottom: 1%;
}

.section-2-part-1{

}

.section-2-part-1 p {
  font-size: 17px;
}

.bx-check-circle{
  color: #911e37;
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
  .section-2{
    display: block;
    margin-left: 12%;
    margin-right: auto;
    margin-top: 1%;
    margin-bottom: 1%;
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