<script setup>
import Nav from "../components/Navbar.vue";
</script>

<template>
  <div class="home-container">
    <Nav/>
    <main>
      <section class="home" id="home">
        <div class="home-text">
            <div class="slide">
                <span class="one">Hello</span>
                <span class="two">I'm</span>
            </div>
            <h1>Martin Rey Tolang</h1>
            <h3>BACHELOR OF SCIENCE IN <span>INFORMATION TECHNOLOGY.</span></h3>
            <p></p>
            <a href="" class="visit-btn">EXPLORE NOW</a>
        </div>
    </section>
    </main>
  </div>
</template>

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
