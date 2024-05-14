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
                <RouterLink class="nav-link" to="/admin/students">Student</RouterLink>
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
        <h4>
          Report
          <router-link to="/admin/report/create" class="btn  float-end"
            >Add Report</router-link
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID Number</th>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
              <th scope="col">Violation</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody v-if="report.length > 0">
            <tr v-for="reports in report" :key="reports">
              <td>{{ reports.idnum }}</td>
              <td>{{ reports.lastname }}</td>
              <td>{{ reports.firstname }}</td>
              <td>{{ reports.phone }}</td>
              <td>{{ reports.date }}</td>
              <td>{{ reports.violation }}</td>
              <td>{{ reports.status }}</td>
             
            </tr>
          </tbody>
          <tbody v-else>
            <tr>
              <td colspan="7">Loading...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "report",
  data() {
    return {
      report: [],
    };
  },
  mounted() {
    this.getReserve();
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      this.$router.push('/'); // Redirect to the login page
    },
   getReserve() {
      axios.get("http://127.0.0.1:8000/api/report/")
        .then((res) => {
          this.report = res.data.report;
        })
        .catch((error) => {
          console.error("Error fetching reservation data:", error);
        });
    },

    formatDate(dateString) {
      var date = new Date(dateString);

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
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
