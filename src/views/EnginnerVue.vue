<script>
export default {
  setup() {}
}
</script>

<template>
  <section>
    <div class="container">
      <div class="container-text">
        <marquee behavior="" direction="" style="color: white; font-size: 3rem"
          >WELCOME TO FANDF ENGINEERING CO LTD</marquee
        >
        <h1>F&F Engineering Co Ltd: Pioneering Innovation in Engineering Excellence</h1>
        <p>
          At F&F Engineering Co Ltd, our commitment to excellence in engineering knows no bounds.
          With a proud legacy spanning over four decades, we have continually evolved and adapted to
          meet the ever-changing needs of the engineering industry. Our dedication to quality,
          innovation, and customer satisfaction has solidified our position as a trusted leader in
          the field.
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Image Gallery</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="/AgroAllied">
          <img src="../assets/engineering/tractor3.jpeg" alt="Company 2" />
          <div class="card-text">
            A massive yellow bulldozer, its blade gleaming in the sunlight, ready to move earth and
            shape the landscape.
          </div>
        </RouterLink>
      </div>
      <!-- <div class="img-card">
        <RouterLink to="/company3">
          <img src="../assets/engineering/tractor1.jpeg" alt="Company 3" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem non animi vero,
            voluptate debitis vitae molestiae nesciunt alias officiis eaque porro voluptatibus
            numquam quas nulla excepturi, id rem doloremque.
          </div>
        </RouterLink>
      </div> -->
      <div class="img-card">
        <RouterLink to="/company4">
          <img src="../assets/engineering/tractor2.jpeg" alt="Company 4" />
          <div class="card-text">
            A sand truck, also commonly known as a sand hauler or sand transporter, is a specialized
            heavy-duty vehicle designed for the transportation of sand and other loose materials
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="/company4">
          <img src="../assets/engineering/tractor4.jpeg" alt="Company 4" />
          <div class="card-text">
            A line of trucks and bulldozers rumbled in unison, a symphony of power and precision,
            ready to reshape the earth with each mighty push and pull
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="/company4">
          <img src="../assets/engineering/tractor5.jpeg" alt="Company 4" />
          <div class="card-text">
            A car transporter truck, often known as a car carrier, is a specialized vehicle designed
            for transporting multiple vehicles.
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="/company4">
          <img src="../assets/engineering/tractor6.jpeg" alt="Company 4" />
          <div class="card-text">
            A massive yellow bulldozer, its blade gleaming in the sunlight, ready to move earth and
            shape the landscape.
          </div>
        </RouterLink>
      </div>
    </div>
    <footer>
      <div class="footer-text">
        <p>
          F&F GREENER ENGINEERING CO LTD KM 5,<br> IWOROKO ROAD, OPPOSITE EKITI STATE WATER CORPORATION <br>
          HEADQUARTERS, ADO EKITI TEL: 08132214142, 08066562376
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
  background-image: url('../assets/engineering/tractor4.jpeg');
  background-size: cover;
  padding: 20px;
  height: 80vh;
  background-position: center;
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
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
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
  font-size: 3em;
}
.container-text p {
  font-size: 1.5em;
  margin-top: 30px;
}
.container-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.img-card {
  flex: 0 0 calc(35% - 20px);
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
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
