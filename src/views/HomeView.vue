<script setup>
import Nav from "../components/Navbar.vue";
</script>

<template>
  <div class="home-container">
    <Nav/>
    <main>
      <section class="home" id="home">
        <div class="home-text">
          <div class="home-text-container">
            <h1>Welcome to ICTDU Space</h1>
            <h3><span>User!</span></h3>
            <p></p>
            <div class="btn">RESERVE NOW</div>
          </div>
        </div>
      </section>
      
      <section class="about-us" id="about-us">
        <div class="about-us-container">
          <h2>About Us</h2>
          <p>
            Welcome to ICTDU Space, your one-stop solution for hassle-free room reservation within the UIC Main Campus. Designed exclusively for students, faculty, and staff, ICTDU Space simplifies the process of booking rooms for various academic and extracurricular activities.
          </p>
          <p>
            At ICTDU Space, we understand the importance of efficient space management within educational institutions. Our platform is developed to streamline the reservation process, ensuring that every user can easily find and reserve the ideal space for their needs.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>



<style>
body {
  margin: 0;
  padding: 0;
}

.home {
  background-image: url('./NIY_03551.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  background-color: #e62b4d; 
  color: white; 
  border-color: #e62b4d; /* Border color */
}

.btn:hover {
  background-color: #F68B9E;
  color: white; 
  border-color: #F68B9E;
}

.home-text {
  color: rgb(255, 255, 255);
  text-align: center;
}

.home-text-container {
  background-color: rgba(2, 2, 2, 0.5); /* Example: semi-transparent background */
  padding: 30px; /* Example: padding inside the container */
  border-radius: 50px; /* Example: rounded corners */
}

.home-text-container h1 {
  font-size: 4em; /* Adjust as needed */
}

.home-text-container h3 {
  font-size: 3em; /* Adjust as needed */
}

.about-us {
  padding: 50px 20px; /* Padding around the section */
  background-color: #f0f0f0; /* Light background color for contrast */
  text-align: center; /* Center text alignment */
  margin-top: 0px; /* Adjust this value to move the section further down */
}

.about-us-container {
  max-width: 800px; /* Maximum width of the content */
  margin: 0 auto; /* Center align the container */
  color: #333; /* Text color */
}

.about-us h2 {
  font-size: 2.5em; /* Font size for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

.about-us p {
  font-size: 1.2em; /* Font size for the paragraphs */
  line-height: 1.6; /* Line height for better readability */
  margin-bottom: 20px; /* Space between paragraphs */
  text-align: justify; /* Justify text alignment */
}


</style>
