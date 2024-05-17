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
    <div class="home-container">
    <Nav/>
    <main>
      <section class="home" id="home">
        <div class="home-text">
          <div class="home-text-container">
            <h1>Welcome to ICTDU Space</h1>
            <h3><span>Admin!</span></h3>
            <p></p>
          </div>
        </div>
      </section>
    </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem('token'); // Clear token from local storage
        alert('Logout Successfully');
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

