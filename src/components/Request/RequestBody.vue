<template>
  <div>
    <div class="alpha">

      <div class="section-alpha">

        <div class="section-1">
          <img src="https://interescort-monaco.com/bitrix/templates/interescort_sites/assets/img/content/img_form_01%201.jpg" alt=""  class="image"/>
        </div>
        <div class="section-2">

          <div id="contact-form" class="contact-form">
            <h1 class="contact-form_title">Send a Request</h1>
            <p class="contact-form_paragraph">Our friendly team would love to hear from you.</p>

            <form @submit.prevent="sendMessage"  class="form" >
              <div class="form-separate">
                <div class="split">
                  <label class="label-input">First name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                      placeholder="Enter First Name"
                      v-model="firstName"
                  />
                </div>
                <div class="split">
                  <label class="label-input">Last name</label>
                  <input
                      required
                      name="name"
                      type="text"
                      autocomplete="off"
                      placeholder="Enter Last Name"
                      v-model="lastName"
                  />
                </div>
              </div>

              <div class="split">
                <label class="label-input">Email address</label>
                <input
                    required
                    name="email"
                    type="email"
                    autocomplete="off"
                    placeholder="Enter Email"
                    v-model="email"
                />
              </div>

              <div class="split">
                <label class="label-input">Gender</label>
                <select  required v-model="gender" >
                  <option selected disabled value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>



              <div class="split">
                  <label class="label-input" >Age</label>
                  <select v-model="age" required >
                    <option selected disabled value="">Select Age</option>
                    <option value="18-25">18-25</option>
                    <option value="26-45">26-45</option>
                    <option value="46-65">46-65</option>
                    <option value="66-85">66-85</option>
                    <option value="86-100">86-100</option>
                  </select>
                </div>




              <div class="split">
                <label class="label-input" >Country</label>
                <select  name="country" v-model="country" id="country" required >
                    <option selected disabled value="">Choose Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d&#039;Ivoire">Cote d&#039;Ivoire</option>
                    <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="France Metropolitan">France Metropolitan</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">French Southern Territories</option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option>
                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People&#039;s Republic of">Korea, Democratic People&#039;s Republic of</option>
                    <option value="Korea, Republic of">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao, People&#039;s Democratic Republic">Lao, People&#039;s Democratic Republic</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                    <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Virgin Islands (British)">Virgin Islands (British)</option>
                    <option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option>
                    <option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Yugoslavia">Yugoslavia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>



              <div class="split">
                  <p class="label-input">Enter State/Province</p>
                  <input type="text" v-model="state"  required placeholder="State/Province"  />
                </div>

              <div class="split">
                <label class="label-input">I am Looking for</label>
                <select  required v-model="lookingFor" >
                  <option selected disabled value="">Select Below</option>
                  <option value="Elite Dating">Elite Dating</option>
                  <option value="A Kept Woman">A Kept Woman</option>
                  <option value="Travel Organization">Travel Organization</option>
                  <option value="Relationships">Relationships</option>
                  <option value="Become a kept woman">Become a kept woman</option>
                </select>
              </div>

              <div class="split">
                <p class="label-input">Phone number</p>
                <input type="number" v-model="phoneNumber"  required placeholder="Phone number"  />
              </div>



              <div class="split">
                <label class="label-input">Message</label>
                <textarea
                    name="message"
                    rows="4"
                    placeholder="Leave us a message..."
                    required
                    style="
                                    font-family: 'BR-Firma-Regular', sans-serif;
                                    letter-spacing: 1.5px;
                                    font-size: 13px;
"
                    v-model="message"
                ></textarea>
              </div>

              <div class="split-2">
                <input type="checkbox" class="checkbox"/>
                <label class="check-box-label">You agree to our friendly privacy policy.</label>
              </div>

<!--              <button class="button">-->
<!--                Send Request-->
<!--                <img src="@/assets/arrow-right-line.svg" alt="btn-image" class="btn-image" />-->
<!--              </button>-->

              <base-button :loading="loading">
                Send Request
              </base-button>
            </form>
          </div>

        </div>

      </div>

    </div>



  </div>
</template>

<script>
import Swal from "sweetalert2";
import {db} from "@/firebase/config";
import {doc, setDoc,} from "firebase/firestore";
import BaseButton from "@/components/BaseComponents/buttons/BaseButton.vue";
export default {
  name: "RequestBody",
  components: {BaseButton},
  data() {
    return {
      email: "",
      gender: "",
      age: "",
      country: "",
      state: "",
      firstName: "",
      lastName: "",
      message: "",
      lookingFor: "",
      phoneNumber: "",
      loading: false,  // This will track whether the form is sending or not
    };
  },
  methods: {
    // async sendMessage() {
    //
    //   await setDoc(doc(db,"Requests", this.email), {
    //     firstName: this.firstName,
    //     lastName: this.lastName,
    //     email: this.email,
    //     gender: this.gender,
    //     age: this.age,
    //     country: this.country,
    //     state: this.state,
    //     message: this.message,
    //     lookingFor: this.lookingFor,
    //   }, {merge: true})
    //       .then(() => {
    //         console.log('saved')
    //       })
    //   await Swal.fire({
    //     icon: 'success',
    //     title: 'Success',
    //     text: 'Request sent Successfully!',
    //   });
    //   this.resetForm()
    //
    // },


    async sendMessage() {
      this.loading = true;  // Start loading
      try {
        await setDoc(doc(db, "RequestBody", this.email), {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          gender: this.gender,
          age: this.age,
          country: this.country,
          state: this.state,
          message: this.message,
          lookingFor: this.lookingFor,
          phoneNumber: this.phoneNumber,
          // createdAt: serverTimestamp(),
        }, { merge: true });

        await Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Request sent Successfully!',
        });
      } catch (error) {
        console.error("Error sending message:", error);
        await Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      } finally {
        this.resetForm();
        this.loading = false;  // Stop loading
      }
    },

    resetForm() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.gender = '';
      this.age = '';
      this.country = '';
      this.state = '';
      this.message = '';
      this.phoneNumber = '';
      this.lookingFor = '';
    },

  }
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
  width: 85%;
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

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="number"],
.contact-form textarea {
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
  color: #475467;
}


.contact-form select{
  padding: 11px 16px;
  margin-bottom: 15px;
  margin-top: 5px;
  outline: none;
  width: 100%;
  border-radius: 12px;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #911e37;
  border: 1px solid #911e37;
  color: white;
  cursor: pointer;
  padding: 15px 16px;
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
  border: solid 1px #1F1F2A;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form input[type="checkbox"],
.contact-form input[type="number"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border: solid 1px #EEF0F1;
}

.contact-form select{
  font-size: 15px;
  border: solid 1px #EEF0F1;
  color: #475467;
}



.form-separate{
  display: flex;
  justify-content: space-between;
}

.split{
  display: block;
}

.split-2{
  display: flex;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
}

.check-box-label{
  padding-left: 8px;
  color: #475467;
  font-size: 16px;
}

.label-input{
  color: #070e20;
  font-size: 14px;
}

.btn-image{
  width: 3.5%;
}




.newsletter {
  background: linear-gradient(179.02deg, #DEE1E6 -15.49%, #F7F7F7 107.09%);
  padding-top: 10px;
  padding-bottom: 55px;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  /*background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');*/
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  /*background-color: #070e20;*/
  background: #1F1F2A;
  border: 1px solid #1F1F2A;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 10px 2.5px rgba(0, 0, 0, 0.25);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #1F1F2A;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  padding-top: 25px;
  line-height: 28px;
  font-family: 'BR-Firma-Bold', sans-serif;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  background: #1F1F2A;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background: #1F1F2A;
  border: 1.5px solid #1F1F2A;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  /*box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);*/
}

.subscribe-wrapper .submit-btn:hover {
  background: #1F1F2A;
}


@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }

  .section-alpha{
    display: block;
  }

  .section-1{
    width: 100%;
  }

  .section-2{
    width: 90%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (max-width: 700px){
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}


@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}


@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 700px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 10%;
    max-width: unset;
    width: unset;
    margin-right: 20px;
  }
}

</style>