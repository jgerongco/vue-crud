<template>
  <div class="background">
    <div class="container">
        <div class="row justify-content-center align-items-center" style="height: 100vh;">
            <div class="col-md-4">
                <div class="card mt-0">
                    <div class="card-header text-white">
                        <h3 class="card-title text-center">Login</h3>
                    </div>
                    <div class="card-body text-left">
                        <form @submit.prevent="login">
                            <div class="mb-3">
                                <label for="email" class="form-label">Email:</label>
                                <input type="email" class="form-control" v-model="email" id="email" name="email" required>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password:</label>
                                <input type="password" v-model="password" class="form-control" id="password" name="password" required>
                            </div>
                          <div class="text-center"> <!-- Aligning the button in the center -->
                            <button type="submit" class="btn custom-btn-width custom-btn-color">Login</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/studentlogin', {
          email: this.email,
          password: this.password
        });
        
        const token = response.data.token;
        localStorage.setItem('token', token); // Store token in localStorage

        alert('Login Successful');

        this.$router.push('/home');
        // Redirect or perform other actions upon successful login
      } catch (error) {
        alert('Unauthorized');
        console.error(error);

        // Handle login error
      }
    }
  }
};
</script>

<style scoped>
.background {
  background-image: url('./NIY_03551.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  margin: 0;
  padding: 0;/* Adjust the height as needed */
}
.card {
  background-color: rgba(255, 255, 255, 0.8);
}

.custom-btn-width {
  width: 70%;
  margin-top: 5px;
}

.custom-btn-color {
  background-color: #e62b4d; 
  color: white; 
  border-color: #e62b4d /* Border color */
}

/* Example: */
.custom-btn-color:hover {
  background-color: #F68B9E;
  color: white; 
  border-color: #F68B9E;
}
.card-header{
  background-color: #a00522;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.form-label{
  font-family:'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
}
.form-control{
  border: black;
}
</style>
