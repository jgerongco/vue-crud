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
        <h4>
          Reservation
          <router-link to="/reservation/create" class="btn btn-success float-end"
            >Add Reservation</router-link
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Lastname</th>
              <th scope="col">Email</th>
              <th scope="col">Faculty</th>
              <th scope="col">People</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Purpose</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody v-if="reservation.length > 0">
            <tr v-for="reservations in reservation" :key="reservations">
              <td>{{ reservations.id }}</td>
              <td>{{ reservations.lastname }}</td>
              <td>{{ reservations.email }}</td>
              <td>{{ reservations.faculty }}</td>
              <td>{{ reservations.people }}</td>
              <td>{{ formatDate(reservations.date) }}</td>
              <td>{{ reservations.time }}</td>
              <td>{{ reservations.purpose }}</td>
              <td>{{ reservations.status }}</td>
             
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
      this.$router.push('/'); // Redirect to the login page
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
