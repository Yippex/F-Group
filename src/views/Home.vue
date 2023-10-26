<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div class="landing">
    <div class="about-me">
      <marquee behavior="" direction="" style="font-size: 2em; color: limegreen"
        >WELCOME TO F&F GREENER GROUP OF COMPANIES</marquee
      >
      <div class="custom-card">
        <div class="about-me-content">
          <img src="../assets/CEO2.jpg" alt="Profile Image" class="profile-image" />
          <p class="bio">
            I Chief Aare Oluwayayo Oluwadare Chairman C.E.O. of F and F group of companies a potential
            Nigeria business man and philanthropy, Chief Oluwadare was born in Ekiti state he obtain
            his education within Nigeria.
          </p>
        </div>
      </div>
    </div>

    <div class="card-container">
      <div class="card-item">
        <router-link to="/Engineering" class="card">
          <img src="../assets/engineering/tractor1.jpeg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>F&F Greener Engineering Co Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/AgroAllied" class="card">
          <img src="../assets/farm/farm5.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>Fedas Agro Allied Farms Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/hotel" class="card">
          <img src="../assets/hotel/hotel8.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>KSSD Hotel Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/FedasWater" class="card">
          <img src="../assets/borehole/borehole5.png" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>Fedas Water Services Ltd</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/Stores" class="card">
          <img src="../assets/stores/store2.jpeg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>F&F Stores and Supermarket</h2>
          </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.landing {
  background: #ffff;
}
.about-me {
  text-align: center;
  padding: 20px;
  background: #e2b98d;
}

.custom-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.card-title {
  font-size: 24px;
  color: #333;
}

.profile-image {
  width: 200px;
  height: 200px;
  /* border-radius: 50%; */
  object-fit: cover;
  margin: 20px auto;
}

.bio {
  font-size: 16px;
  line-height: 1.4;
  color: #000;
}

h1 {
  font-size: 2rem;
  /* color: #fff; */
}

p {
  font-size: 1.2rem;
  color: #cccccc;
}

.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap to the next line on small screens */
  justify-content: space-around;

  margin: 0 auto;
}

.card-item {
  flex-basis: calc(16.33% - 10px); /* Create equal-width columns with some spacing */
  margin-bottom: 20px; /* Add some vertical spacing between cards */
  margin: 10px;
}

.card {
  display: block;
  text-decoration: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-image {
  width: 100%;
  height: auto;
}

.card-description {
  padding: 10px;
  text-align: center;
}

h2 {
  font-size: 18px;
  margin: 0;
  color: #333;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    margin: 20px;
    padding: 1rem;
  }

  .card {
    width: 100%;
    margin: 10px 0;
    height: auto;
  }
}
</style>
