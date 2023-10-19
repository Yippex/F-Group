<script setup>
import { RouterLink, RouterView } from 'vue-router'
import rentals from './assets/rental.jpeg'
import Agro from './views/AgroAllied.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <header>
      <nav>
        <h1>F and F Group of Companies</h1>
      </nav>
    </header>

    <section :class="{ hidden: $route.matched.length }">
      <div class="background-image">
        <img src="../src/assets/images/FandF.jpeg" alt="" class="full-width-height" />
      </div>
      <div class="container-links center">
        <div class="img-card">
          <RouterLink to="/AgroAllied">
            <img src="../src/assets/farm/IMG-20231019-WA0036.jpg" alt="Company 2" />
            <div class="card-text">Fedas Agro Allied Farms Ltd</div>
          </RouterLink>
        </div>
        <div class="img-card">
          <RouterLink to="/Fedas water service">
            <img src="./assets/water/IMG-20231019-WA0018.jpg" alt="Company 3" />
            <div class="card-text">Fedas Water Services Ltd.</div>
          </RouterLink>
        </div>
        <div class="img-card">
          <RouterLink to="/Fedas Engineering">
            <img src="./assets/images/IMG-20231019-WA0088.jpg" alt="Company 4" />
            <div class="card-text">F&F Greener Engineering Co Ltd</div>
          </RouterLink>
        </div>
      </div>
    </section>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped>
nav {
  height: 60px;
  background: #004daa;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.full-width-height {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto; /* Center the image horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the image vertically and horizontally */
}

.background-image {
  background-image: url('../src/assets/images/IMG-20231019-WA0021.jpg'); /* Replace with your background image URL */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 2; /* Adjust the opacity for transparency */
  position: relative;
  height: 400px; /* Adjust the height as needed */
  width: 100%;
  filter: blur(0px);
  margin: 0 auto;
}

h1 {
  color: white;
  font-size: 18px;
  margin: 0;
}

.container-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around; /* Center the cards on larger screens */
}

.img-card {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 300px; /* Adjust the max-width as needed for your design */
}

.img-card img {
  max-width: 100%;
  height: auto;
}

.card-text {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .container-links {
    flex-direction: column; /* Stack cards vertically on smaller screens */
    align-items: center;
  }
  .full-width-height{
    top: 40%;
  }
  nav {
    padding: 0 1rem;
  }

  .img-card {
    max-width: 100%;
  }
}

.hidden {
  display: none;
}
</style>
