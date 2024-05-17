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
          Students
          <router-link to="/admin/students/create" class="btn btn-success float-end"
            >Add Student</router-link
          >
        </h4>
      </div>
      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Course</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date Created</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="students.length > 0">
            <tr v-for="student in students" :key="student">
              <td>{{ student.id }}</td>
              <td>{{ student.name }}</td>
              <td>{{ student.course }}</td>
              <td>{{ student.email }}</td>
              <td>{{ student.phone }}</td>
              <td>{{ formatDate(student.created_at) }}</td>
              <td class="d-flex gap-1">
                <router-link
                  :to="{ path: '/students/' + student.id + '/edit' }"
                  class="btn "
                  >Edit</router-link
                >
                <button
                  type="button"
                  @click="deleteStudent(student.id)"
                  class="btn btn-danger btn-block"
                >
                  Delete
                </button>
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
  name: "students",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.getStudents();
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      this.$router.push('/admin'); // Redirect to the login page
    },  

    getStudents() {
      axios.get("http://127.0.0.1:8000/api/students/").then((res) => {
        this.students = res.data.students;
      });
    },

    deleteStudent(studentId) {
      console.log(studentId);

      if (confirm("Are you sure you want to delete this this data?")) {

        axios
          .delete(`http://127.0.0.1:8000/api/students/${studentId}`)
          .then((res) => {
            console.log(res);

            alert(res.data.message);
            this.getStudents();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }
          });
      }
    },

    // change to proper format
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
