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
        <h4>Edit Students</h4>
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
            <label for="">Name</label>
            <input
              type="text"
              class="form-control"
              v-model="model.student.name"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="courseSelect">Course</label>
            <select id="courseSelect" class="form-control" v-model="model.student.course">
              <option value="">Select a course</option>
              <option value="BS in Information Systems">BS in Information Systems</option>
              <option value="BS in Information Technology">BS in Information Technology</option>
              <option value="BS in Computer Science">BS in Computer Science</option>
              <!-- Add more options as needed -->
            </select>
          </div>
          <div class="col-12 mb-3">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              v-model="model.student.email"
            />
          </div>
          <div class="col-12 mb-3">
            <label for="">Phone</label>
            <input
              type="text"
              class="form-control"
              v-model="model.student.phone"
            />
          </div>
          <div class="col-12 mb-3 text-end">
            <button
              type="button"
              @click="updateStudent"
              class="btn"
            >
              Update
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
  name: "studentEdit",
  data() {
    return {
      studentId: "",
      errorList: "",
      model: {
        student: {
          name: "",
          course: "",
          email: "",
          phone: "",
        },
      },
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.studentId = this.$route.params.id;
    this.getStudentData(this.$route.params.id);
  },
  methods: {
    logout() {
      localStorage.removeItem('token'); // Clear token from local storage
      alert('Logout Successfully');
      this.$router.push('/admin'); // Redirect to the login page
    },
    getStudentData(studentId) {
      axios
        .get(`http://127.0.0.1:8000/api/students/${studentId}/edit`)
        .then((res) => {
          console.log(res.data.student);

          this.model.student = res.data.student;
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          }
        });
    },

    updateStudent() {
      var mythis = this;
      axios
        .put(
          `http://127.0.0.1:8000/api/students/${this.studentId}`,
          this.model.student
        )
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);

          this.errorList = "";
        })
        .catch(function (error) {
          if (error.response) {
            if (error.response.status == 422) {
              mythis.errorList = error.response.data.errors;
            }
            if (error.response.status == 404) {
              alert(error.response.data.message);
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log("Error", error.message);
          }
        });
    },
  },
  
};
</script>
