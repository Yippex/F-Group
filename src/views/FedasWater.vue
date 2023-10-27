<script>
export default {
  setup() {}
}
</script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 3rem"
        >WELCOME TO FEDAS WATER SERVICES LTD</marquee
      >
      <div class="container-text">
        <h1>FEDAS Water Service Ltd is a leading provider of high-quality water solutions.</h1>
        <p>
          With a commitment to excellence and a dedication to serving communities, we offer a wide
          range of water services and products designed to meet the needs of our customers. Our team
          of experts is passionate about water conservation, purity, and efficient delivery.
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Fedas Water Services</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/borehole1.jpg" alt="Company 2" />
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat laborum
            mollitia fugit expedita libero vel quia in. Officiis iste voluptatibus maiores dolorum
            suscipit rem fugit dignissimos molestias et repellendus.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/boreholde4.jpg" alt="Company 3" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem non animi vero,
            voluptate debitis vitae molestiae nesciunt alias officiis eaque porro voluptatibus
            numquam quas nulla excepturi, id rem doloremque.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/borehole5.png" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/borehole7.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/borehole9.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/borehole/borehole10.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>
    </div>
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
  background-image: url('../assets/borehole/borehole11.jpg'); /* Replace with your background image path */
  background-size: cover;
  background-position: center;
  padding: 20px;
  height: 90vh;
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
  margin-top: 50px;
  z-index: 1; /* Place text above the blurred background */
  text-align: center; /* Center-align the text */
}

.container-text h1 {
  font-size: 2.5em;
}
 .container-text p{
  font-size: 1.2em;
  margin-top: 10px;
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
  .container-text h1{
    font-size: 1.5em;
  }
  .container-text p{
    font-size: 17px;
  }
}
</style>
