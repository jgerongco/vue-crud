<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>
          Students
          <router-link to="/students/create" class="btn btn-success float-end"
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
    getStudents() {
      axios.get("http://127.0.0.1:8000/api/students/").then((res) => {
        this.students = res.data.students;
      });
    },

    deleteStudent(studentId) {
      console.log(studentId);

      if (confirm("Are you sure you want to delete this this data?")) {
        // console.log(studentId);s

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

<style></style>
