<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="landing">
    <div id="landing-page">
      <marquee behavior="" direction="" style="font-size: 3rem; color: greenyellow"
        >WELCOME TO FANDF GREENER GROUP OF COMPANIES</marquee
      >
      <div class="background">
        <!-- Background image -->
        <img src="../assets/images/FandF.png" alt="Background Image" />
      </div>
      <div class="content">
        <h1>Welcome to FandF Greener Group of Companies</h1>
        <p style="font-size: 1.25rem;">
          I Chief Aare OLUWAYAYO OLUWADARE Chairman C.E.O.F&F GROUP OF COMPANIES A POTENTIAL NIGERIA
          BUSINESS MAN AND PHILANTHROPY, CHIEF OLUWADARE WAS BORN IN EKITI STATE HE OBTAIN HIS
          EDUCATION WITHIN NIGERIA.
        </p>
      </div>
    </div>
    <div class="card-container">
      <RouterLink to="/AgroAllied" class="card">
        <img src="../assets/farm/IMG-20231019-WA0048.jpg" alt="Card Image" class="card-image" />
        <div class="card-description">
          <h2>AgroAllied Farm Limited</h2>
        </div>
      </RouterLink>

      <RouterLink to="/Fedas Engineering" class="card">
        <img
          src="../assets/engineering/IMG-20231019-WA0022.jpg"
          alt="Card Image"
          class="card-image"
        />
        <div class="card-description">
          <h2>Fedas Engineering Co LTD</h2>
        </div>
      </RouterLink>

      <RouterLink to="/Fedas Engineering" class="card">
        <img src="../assets/images/IMG-20231019-WA0033.jpg" alt="Card Image" class="card-image" />
        <div class="card-description">
          <h2>FANDF HOTEL SERVICES</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.landing {
  height: 100vh;
}
#landing-page {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.background {
  position: fixed;
  width: 100%;
  height: 100vh; /* Adjusted to 100vh */
  top: 0;
  left: 0;
  filter: blur(5px);
  z-index: -1;
}

.background img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.content {
  /* background-color: rgba(255, 255, 255, 0.1); */
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 600px;
}

h1 {
  font-size: 2rem;
  color: #fff;
}

p {
  font-size: 1.2rem;
  color: #cccccc;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* Adjusted to 100vh */
  gap: 20px;
  margin-top: 50px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 5px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px; /* Equal width and height */
  /* background-color: #fff; */
  background: #f2d8ad;
}
.card h2 {
  color: #fff;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-description {
  padding: 1px;
}

h2 {
  font-size: 18px;
  margin: 0;
}

p {
  font-size: 14px;
  margin: 10px 0;
}

a {
  text-decoration: none;
  color: #007bff;
  font-weight: 500;
  font-size: 14px;
}

@media (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
    margin: 20px;
  }

  .card {
    width: 100%;
    margin: 10px 0;
    height: auto;
  }
}
</style>
