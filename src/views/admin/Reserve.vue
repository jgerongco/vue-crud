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
        <h4>
          Reservation
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Lastname</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Purpose</th>
              <th scope="col">People</th>
              <th scope="col">Faculty</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="reservation.length > 0">
            <tr v-for="reservations in reservation" :key="reservations">
              <td>{{ reservations.lastname }}</td>
              <td>{{ formatDate(reservations.date) }}</td>
               <td>{{ reservations.time }}</td>
              <td>{{ reservations.purpose }}</td>
              <td>{{ reservations.people }}</td>
              <td>{{ reservations.faculty }}</td>
              <td>{{ reservations.status }}</td>
              <td class="d-flex gap-1">
                <button
                    class="btn btn-primary"
                    @click="acceptReserve(reservations.id)"
                    >Accept</button
                  >
                <button
                  type="button"
                  class="btn btn-danger btn-block"
                  @click="declineReserve(reservations.id)"
                >
                  Decline
                </button>
                <!-- <button
                  type="button"
                  class="btn btn-warning btn-block"
                    @click="reschedReserve(reservations.id)"
                >
                  Reschedule
                </button> -->
              </td>
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
  name: "reservation",

  data() {
    return {
      reservation: [],
    };
  },

  mounted() {
    this.getReserve();
  },

  methods: {
    logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      alert('Logout Successfully');
      this.$router.push('/admin'); // Redirect to the login page
    },

    getReserve() {
      axios.get("http://127.0.0.1:8000/api/reservation/")
        .then((res) => {
          this.reservation = res.data.reservation;
        })
        .catch((error) => {
          console.error("Error fetching reservation data:", error);
        });
    },
    acceptReserve(reserveId){
      console.log(reserveId)

      alert('Reservation Accepted successfully');
      const data = {
          status: 'Accepted'
      };

      axios
          .put(`http://127.0.0.1:8000/api/reservation/${reserveId}`, data)
          .then((res) => {
            console.log(res);

            // alert(res.data.message);
            this.getReserve();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });

    },
    declineReserve(reserveId){
      console.log(reserveId)

      alert('Reservation Decline successfully');
      const data = {
          status: 'Decline'
      };

      axios
          .put(`http://127.0.0.1:8000/api/reservation/${reserveId}`, data)
          .then((res) => {
            console.log(res);

            // alert(res.data.message);
            this.getReserve();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });

    },
    reschedReserve(reserveId){
      console.log(reserveId)

      const data = {
          status: 'Reschedule'
      };

      axios
          .put(`http://127.0.0.1:8000/api/reservation/${reserveId}`, data)
          .then((res) => {
            console.log(res);

            // alert(res.data.message);
            this.getReserve();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
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
  }
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