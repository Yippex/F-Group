<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="landing">
    <div class="about-me">
      <div class="custom-card">
        <div class="about-me-content">
          <img src="../assets/images/FandF.png" alt="Profile Image" class="profile-image" />
          <p class="bio">
            I Chief Aare OLUWAYAYO OLUWADARE Chairman C.E.O.F&F GROUP OF COMPANIES A POTENTIAL
            NIGERIA BUSINESS MAN AND PHILANTHROPY, CHIEF OLUWADARE WAS BORN IN EKITI STATE HE OBTAIN
            HIS EDUCATION WITHIN NIGERIA.
          </p>
        </div>
      </div>
    </div>

    <div class="card-container">
      <div class="card-item">
        <router-link to="/AgroAllied" class="card">
          <img src="../assets/farm/IMG-20231019-WA0048.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>AgroAllied Farm Limited</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/hotel" class="card">
          <img src="../assets/images/IMG-20231019-WA0037.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>KSSD Hotel</h2>
          </div>
        </router-link>
      </div>

      <div class="card-item">
        <router-link to="/Engineering" class="card">
          <img src="../assets/engineering/IMG-20231019-WA0039.jpg" alt="Card Image" class="card-image" />
          <div class="card-description">
            <h2>Engineering Co Ltd</h2>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing {
  background: #ffff;
}
.about-me {
  text-align: center;
  padding: 20px;
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
  border-radius: 50%;
  object-fit: cover;
  margin: 20px auto;
}

.bio {
  font-size: 16px;
  line-height: 1.4;
  color: #666;
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
  justify-content: space-between; /* Distribute cards evenly across the container */
  padding: 0 3rem;
}

.card-item {
  flex-basis: calc(33.33% - 10px); /* Create equal-width columns with some spacing */
  margin-bottom: 20px; /* Add some vertical spacing between cards */
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
