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
                <router-link class="nav-link" aria-current="page" to="/admin/home"
                  >Home</router-link
                >
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/admin/reservation">Student Reservation</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/admin/history">History</RouterLink>
              </li>
               <li class="nav-item">
                <RouterLink class="nav-link" to="/admin/Report">Report</RouterLink>
              </li>
               <li class="nav-item">
                <RouterLink class="nav-link" to="/admin/students">Students</RouterLink>
              </li>
              <!-- <li class="nav-item">
                <router-link class="nav-link" to="/students"
                  >Students</router-link
                >
              </li> -->
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
        <h4>Report</h4>
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
          <div class="col-12 mb-3">
            <label for="">Id Number</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.idnum"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Lastname</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.lastname"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Firstname</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.firstname"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Phone</label>
            <input
              type="number"
              class="form-control"
              v-model="model.res.phone"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Violation</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.violations"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Date</label>
            <input
              type="date"
              class="form-control"
              v-model="model.res.date"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Status</label>
            <input
              type="text"
              class="form-control"
              v-model="model.res.status"
            />
          </div>
          <div class="col-12 mb-3 text-end">
            <button type="button" @click="saveStudent" class="btn btn-success">
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
          idnum: "",
          lastname: "",
          firstname: "",
          phone: "",
          violations: "",
          date: "",
          status: "",
        },
      },
    };
  },

  methods:{
    saveStudent() {
      var mythis = this;
      axios
        .post("http://127.0.0.1:8000/api/report", this.model.res)
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          this.model.res = {
            idnum: "",
            lastname: "",
            firstname: "",
            phone: "",
            violations: "",
            date: "",
            status: "",
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