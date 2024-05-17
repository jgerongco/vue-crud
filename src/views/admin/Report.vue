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
          Report
          <!-- <router-link to="/students/create" class="btn btn-success float-end"
            >Add Student</router-link
          > -->
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Section</th>
              <th scope="col">Course</th>
              <th scope="col">Violation</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody >
            <tr>
              <td>BSIT-2A</td>
              <td>Information Technology</td>
              <td>Wa Gi Tarong Ang Banko</td>
              <td>April 16, 2024</td>
              <!-- <td class="d-flex gap-1">
                <router-link
                  :to="{ path: '/students/' + student.id + '/edit' }"
                  class="btn btn-primary"
                  >Edit</router-link
                >
                <button
                  type="button"
                  @click="deleteStudent(student.id)"
                  class="btn btn-danger btn-block"
                >
                  Delete
                </button>
              </td> -->
            </tr>
          </tbody>
          <!-- <tbody v-else>
            <tr>
              <td colspan="7">Loading...</td>
            </tr>
          </tbody> -->
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      this.$router.push('/admin'); // Redirect to the login page
    }
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