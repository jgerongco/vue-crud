<template>
<header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <!-- <RouterLink class="navbar-brand" to="/">Navbar</RouterLink> -->
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/home"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/reservation">Reservation</RouterLink>
              </li>

               <li class="nav-item">
                 <button class="nav-link" @click="logout">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Reservation</h4>
      </div>
      <div class="card-body">
        <ul
          class="alert alert-warning"
          v-if="Object.keys(this.errorList).length > 0"
        >
          <li class="mb-0 ms-3" v-for="error in errorList" :key="error">
            {{ error[0] }}
          </li>
        </ul>
        <div class="row">
          <div class="col-12 mb-1">
            <label for="">Firstname</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.firstname"
            />
          </div>
          <div class="col-12 mb-1">
            <label for="">Lastname</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.lastname"
            />
          </div>
          <div class="col-12 mb-1">
            <label for="">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="model.res.email"
            />
          </div>
          <div class="col-12 mb-1">
            <label for="">Faculty</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.faculty"
            />
          </div>
          <div class="col-12 mb-1">
            <label for="">People</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.people"
            />
          </div>
          <div class="col-12 mb-1">
            <label for="">Date</label>
            <input
              type="date"
              class="form-control"
              v-model="model.res.date"
            />
          </div>
         <div class="col-12 mb-1">
          <label for="timeSelect">Time</label>
          <select id="timeSelect"class="form-control" v-model="model.res.time">
            <option value="08:00">08:00 AM</option>
            <option value="09:00">09:00 AM</option>
            <option value="10:00">10:00 AM</option>
            <option value="11:00">11:00 AM</option>
            <option value="1:00">1:00 PM</option>
            <option value="2:00">2:00 PM</option>
            <option value="3:00">3:00 PM</option>
            <option value="4:00">4:00 PM</option>
            <option value="5:00">5:00 PM</option>
            <!-- Add more options as needed -->
          </select>
        </div>
          <div class="col-12 mb-2">
            <label for="">Purpose</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.purpose"
            />
          </div>
          <div class="col-12 mb-3 text-end">
            <button type="button" @click="saveStudent" class="btn">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "reserveCreate",
  data() {
    return {
      errorList: "",
      model: {
        res: {
          firstname: "",
          lastname: "",
          email: "",
          faculty: "",
          people:"",
          date: "",
          time: "",
          purpose: "",
        },
      },
    };
  },

  methods:{
    saveStudent() {
      var mythis = this;
      axios
        .post("http://127.0.0.1:8000/api/reservation", this.model.res)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          this.model.res = {
            firstname: "",
            lastname: "",
            email: "",
            faculty: "",
            people:"",  
            date: "",
            time: "",
            purpose: "",
          };
          this.errorList = "";
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },

     logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      alert('Logout Successfully');
      this.$router.push('/'); // Redirect to the login page
    },
  },
  
};
</script>
<style>
body {
  background-image: url('./NIY_03551.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  padding: 0;/* Adjust the height as needed */
}
.btn {
  background-color: #e62b4d; 
  color: white; 
  border-color: #e62b4d /* Border color */
}

/* Example: */
.btn:hover {
  background-color: #F68B9E;
  color: white; 
  border-color: #F68B9E;
}
</style>