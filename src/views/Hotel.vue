<script setup></script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 4rem; margin-bottom: 1px"
        >WELCOME TO KSSD HOTEL SERVICES CO LTD
      </marquee>
      <div class="container-text">
        <h2 >KSSD HOTEL SERVICES</h2>

        <p style="margin-top: 20px;">
          Home Away from HomeWhether you're traveling for leisure or business, F&F Hotel Services
          aims to be your home away from home. Come and experience the magic of F&F Hotel Services.
          We invite you to immerse yourself in the exceptional hospitality, comfort, and luxury that
          we offer. 
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Photo Gallery</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/hotel/hotel1.jpg" alt="Company 2" />
          <div class="card-text">
            Beacon of comfort and luxury, offering a welcoming
            retreat for travelers from all walks of life. 
           
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/hotel/hotel2.jpg" alt="Company 3" />
          <div class="card-text">
            A well furnished room houghtfully furnished to provide a relaxing and pleasant
            environment.
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/hotel/hotel3.jpg" alt="Company 4" />
          <div class="card-text">
            Design and furnished to give you the best relaxation and entertainment
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        
          <img src="../assets/hotel/hotel4.jpg" alt="Company 4" />
          <div class="card-text">Standard room for your comfort</div>
        
      </div>

      <div class="img-card">
        
          <img src="../assets/hotel/hotel5.jpg" alt="Company 4" />
          <div class="card-text">Beautiful artistic design</div>
       
      </div>
      <div class="img-card">
        
          <img src="../assets/hotel/hotel6.jpg" alt="Company 4" />
          <div class="card-text">Outdoor relaxationn view</div>
        
      </div>
      <div class="img-card">
        
          <img src="../assets/hotel/hotel7.jpg" alt="Company 4" />
          <div class="card-text">Executive suit</div>
        
      </div>

      <div class="img-card">
       
          <img src="../assets/hotel/hotel8.jpg" alt="Company 4" />
          <div class="card-text">Build with the best architectural design</div>
        
      </div>
    </div>
  </section>
  <footer>
    <div class="footer-text">
      <p>
        KSSD HOTEL LTD ALONG NTA OFF ILAWE ROAD, <br />
        ADO EKITI TEL..09036321835.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.gallery {
  padding-top: 2%;
}
.centered-h1 {
  text-align: center;
}
.container {
  position: relative;
  background-image: url('../assets/hotel/hotel1.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  padding: 10px;
  height: 80vh;
}

.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  filter: blur(10px); /* Adjust the blur amount as needed */
}

.container p {
  margin: 0;
  color: white; /* Text color on the blurred background */
  position: relative; /* Position relative for z-index to work */
  z-index: 1; /* Place text above the blurred background */
}
a {
  text-decoration: none;
}
footer {
  height: 90px;
  background: #90613f;
}
.footer-text {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 20px 0;
}
.container-text {
  color: #fff;
  position: relative;
  margin-top: 150px;
  z-index: 1; /* Place text above the blurred background */
  text-align: center; /* Center-align the text */
}
.container-text h1{
  font-size: 2.5em;
}
.container-text p{
  font-size: 1.2em;
}
.container-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.img-card {
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(34, 16, 16, 0.4);
  margin: 16px;
  padding: 2px;
  text-align: center;
}

.img-card img {
  height: 200px;
  width: 100%;
  background-size: contain;
}

.card-text {
  margin-top: 10px;
  font-size: 16px;
  text-decoration: none;
  color: #333;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .container-links {
    flex-direction: column;
    /* align-items: center; */
  }
  .container-text {
    margin-top: 20px;
  }
  nav {
    padding: 0 1rem;
  }

  .img-card {
    max-width: 100%;
  }
  .container-text h1{
    font-size: 1.5em;
  }
  .container-text p{
    font-size: 1em;
  }
  .img-card{
    max-width: 300px;
  }
  .img-card img{
    width: 100%;
  }
}
</style>
