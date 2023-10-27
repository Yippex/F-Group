<script>
export default {
  setup() {}
}
</script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 3rem"
        >WELCOME TO FEDAS AGRO ALLIED FARM LTD</marquee
      >
      <div class="container-text">
        <h1>Fedas Agro Allied Farm Ltd: Cultivating Excellence</h1>
        <p>
          FEDAS Agro Allied Farm Ltd, we are committed to redefining the future of agriculture.
          Established with a vision to create a sustainable and thriving agro-allied enterprise, we
          have grown to become a trusted name in the industry. Our unwavering dedication to
          innovation, quality, and responsible farming practices has set us apart as a leader in the
          field.
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Agro Allied Farms</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm1.jpg" alt="Company 2" />
          <div class="card-text">A sow strecting out its head for food</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm11.jpeg" alt="Company 3"  style=" width: 100;"/>
          <div class="card-text">Birds in their cage ready for feed</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm16.jpeg" alt="Company 3" />
          <div class="card-text">Pig in its house</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm2.jpg" alt="Company 3" />
          <div class="card-text">Cassava grinding engine</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm10.jpeg" alt="Company 3" />
          <div class="card-text">A kitten eating in it's cage</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm13.jpeg" alt="Company 3" />
          <div class="card-text">Rabbit well caged</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm14.jpeg" alt="Company 3" />
          <div class="card-text">A boars in its house</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm12.jpeg" alt="Company 3" />
          <div class="card-text">Cows and ram going out for grazing</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm15.jpeg" alt="Company 3" />
          <div class="card-text"> Baby Piglet suckinng from its sow</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm9.jpeg" alt="Company 3" />
          <div class="card-text">Layers chicken's egg on the tray</div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm3.jpg" alt="Company 4" />
          <div class="card-text">Rabbit farm and healthy Rabbit in it</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm4.jpg" alt="Company 4" />
          <div class="card-text">Rice Processing Milling Engine</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/cow1.jpg" alt="Company 4" />
          <div class="card-text">Different brid of cows feeding</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/cow2.jpg" alt="Company 4" />
          <div class="card-text">Healthy cows going out to graze</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/cow3.jpg" alt="Company 4" />
          <div class="card-text">Cows in there shed</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm5.jpg" alt="Company 4" />
          <div class="card-text">Healthy Pineapple farm</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm6.jpg" alt="Company 4" />
          <div class="card-text">
            A spacious metal birdcage with a colorful, contented bird perched on a wooden branch,
            bathed in gentle sunlight.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/farm/farm7.jpg" alt="Company 4" />
          <div class="card-text">
            In the poultry farm, a diligent man in work attire tends to the flock, ensuring their
            well-being and the smooth operation of the farm.
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
          <img src="../assets/farm/farm8.jpg" alt="Company 4" />
          <div class="card-text">
            The cage is thoughtfully designed, with ample room for the bird to spread its wings and
            a variety of perches and toys for its enrichment.
          </div>
        
      </div>
    </div>
    <footer>
      <div class="footer-text">
        <p>
          FEDAS AGRO ALLIED FARMS LTD BEHIND IREWOLEDE ESTATE,<br />
          OFF ILAWE ROAD, ADO EKITI, EKITI STATE
        </p>
      </div>
    </footer>
  </section>
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
  background-image: url('../assets/farm/farm5.jpg'); /* Replace with your background image path */
  background-size: cover;
  padding: 20px;
  height: 80vh;
  background-position: center;
}

a {
  text-decoration: none;
}
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  filter: blur(1); /* Adjust the blur amount as needed */
}

.container p {
  margin: 0;
  color: white; /* Text color on the blurred background */
  position: relative; /* Position relative for z-index to work */
  z-index: 1; /* Place text above the blurred background */
}

.container-text {
  color: #fff;
  position: relative;
  margin-top: 150px;
  z-index: 1; /* Place text above the blurred background */
  text-align: center; /* Center-align the text */
}
.container-text h1 {
  font-size: 2.5em;
}
.container-text p {
  font-size: 1.2em;
  margin-top: 30px;
}
.container-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.img-card {
  width:300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(34, 16, 16, 0.4);
  margin:16px;
  padding: 2px;
  text-align: center;
}

.img-card img {
  height: 200px;
  width: 100%;
  background-size: contain;
  /* background-attachment: fixed; */
}

.card-text {
  margin-top: 10px;
  font-weight: bold;
  color: #333;
}
footer {
  height: 80px;
  background: #90613f;
}
.footer-text{
  display: flex;
  align-items:center ;
  justify-content: center;
  color: white;
  padding-top: 20px;
  
}

/* Media query for small screens */
@media (max-width: 768px) {
  .container-links {
    flex-direction: column;
    align-items: center;
  }
  nav {
    padding: 0 1rem;
  }

  .img-card {
    max-width: 100%;
  }
  .container-text h1 {
    font-size: 1.5em;
  }
  .container-text p {
    font-size: 1em;
  }
}
</style>
