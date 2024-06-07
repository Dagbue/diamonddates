<template>
  <div class="alpha" >
    <form class="logoIn" @submit.prevent="next">
      <div class="wrapper">
        <div class="headline">
<!--          <router-link to="/">-->
<!--            <img src="@/assets/companylogo.svg" alt="logo" class="company-logo">-->
<!--          </router-link>-->
          <h2>
            Admin Login
          </h2>
        </div>
        <div class="form">
          <div class="logoIn">
            <div class="form-group">
              <input type="email" placeholder="Email"  name="email" required />
            </div>
            <div class="form-group">
              <input type="password" placeholder="Password"  name="password" required />
            </div>

            <div class="form-group-2">
              <input
                  type="checkbox"
                  placeholder="Remember-Me"
                  id="remember-me"
                  class="checkbox"
              />
              <label for="remember-me" class="checkbox-text">Remember me</label>
<!--              <a  class="forgot-password" @click="onPostClick2" >Forgot Password</a>-->
            </div>

            <button  class="btn btn-white btn-animated" >Sign In</button>
            <!--            <div v-if="error">{{ error }}</div>-->

<!--            <div class="separator">-->
<!--              <div class="line"></div>-->
<!--              <h2>OR</h2>-->
<!--              <div class="line"></div>-->
<!--            </div>-->

<!--            <div class="create-acc">-->
<!--              <p class="create-text">Don’t have an account?<a @click="onPostClick" class="create-link">Sign up here</a>-->
<!--              </p>-->
<!--            </div>-->
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// import AuthenticationRequest from "@/model/request/AuthenticationRequest";
// import {mapState} from "vuex";
// import StoreUtils from "@/utility/StoreUtils";

export default {
  name: "DashBoardAdminLoginView",
  data() {
    return {
      // model: new AuthenticationRequest().login,
      showPassword2: false,
    };
  },
  // computed:{
  //   ...mapState({
  //     loading: state => state.auth.loading,
  //     auth: state => state.auth,
  //   }),
  // },
  methods: {
    // async signIn() {
    //   await StoreUtils.dispatch(StoreUtils.actions.auth.login, this.model)
    //   // await this.$router.push("/over-view")
    // },
    onPostClick() {
      this.$router.push("/register");
      this.window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
      this.window.scrollTo(0, 0);
    },
    next() {
      this.$router.push("/dashBoard-side-bar-admin");
    }
  },
}
</script>

<style scoped>
form {
  margin: 0 auto;
  max-width: 40rem;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
 box-shadow:  30px 30px 100px #bebebe,
 -50px -50px 100px #ffffff;
 padding: 2rem;
 background-color: #ffffff;
  margin-top: 8%;
}

/*.alpha{*/
/* background-color: #F6F6F7;*/
/* background-image: url(https://www.interactivebrokers.com/images/web/why-ibkr-global-market-access-background.png), linear-gradient(#F6F6F7 17.14%, #DFE2E7 95.69%);*/
/* background-repeat: no-repeat;*/
/* background-size: 60%, cover;*/
/* background-position: bottom right, top left;*/
/* padding-bottom: 8.5%;*/
/*}*/

.company-logo{
  width: 25%;
  margin-top: 10%;
}

:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
}

.header-span {
  color: #0f171c;
}

.wrapper {
//padding: 50px 25px 0;
  max-width: 768px;
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  padding-bottom: 20px;
}


.wrapper .headline h2 {
  font-weight: 400;
  font-size: 25px;
  padding-top: 3%;
  padding-bottom: 1%;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 8px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  margin: 15px 0 30px;
  line-height: 22px;
  padding: 12px 29px;
  border: none;
  text-align: center;
  border-radius: 5px;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
}
.btn:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 4ms ease-in;
}
.btn:active {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: 4ms ease-in;
}
.btn-white {
  background-color: #911e37;
  color: white;
  font-size: 15px;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  font-size: 15px;
}

.forgot-password {
  padding-left: 26%;
  text-decoration: none;
  color: #0f171c;
  font-size: 15px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #676767;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 12px;
  color: #676767;
}

.create-acc {
  padding-top: 40px;
  font-size: 17px;
  padding-bottom: 40px;
}
.create-text {
  font-size: 15px;
}
.create-link {
  padding-left: 10px;
  text-decoration: none;
  color: #0f171c;
}

@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 550px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }
}
@media (max-width: 990px) {
  .wrapper .headline h1  {
    font-size: 32px;
  }
  .wrapper .headline h2  {
    font-size: 28px;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding: 10px 25px 0;
  }
  form {
    margin: 1rem;
    max-width: 40rem;
    border-radius: 12px;
    padding: 1rem;
    background-color: #ffffff;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 23px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }
  .company-logo{
    width: 50%;
    margin-top: unset;
  }
}
</style>