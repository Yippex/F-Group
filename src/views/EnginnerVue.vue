<script>
export default {
  setup() {}
}
</script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 3REM;">WELCOME TO FANDF ENGINEERING CO LTD</marquee>
      <div class="container-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eveniet velit doloribus
          sint dolorem laboriosam, natus dicta repellat rerum modi animi unde, reprehenderit vitae
          blanditiis. Debitis aspernatur officiis quo magnam!
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Image Gallery</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="/AgroAllied">
          <img src="../assets/engineering/IMG-20231019-WA0016.jpg" alt="Company 2" />
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat laborum
            mollitia fugit expedita libero vel quia in. Officiis iste voluptatibus maiores dolorum
            suscipit rem fugit dignissimos molestias et repellendus.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="/company3">
          <img src="../assets/engineering/IMG-20231019-WA0022.jpg" alt="Company 3" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem non animi vero,
            voluptate debitis vitae molestiae nesciunt alias officiis eaque porro voluptatibus
            numquam quas nulla excepturi, id rem doloremque.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="/company4">
          <img src="../assets/engineering/IMG-20231019-WA0028.jpg" alt="Company 4" />
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
 .gallery{
  padding-top: 2%;
}
.centered-h1 {
  text-align: center;
}
.container {
  position: relative;
  background-image: url('../assets/engineering/IMG-20231019-WA0022.jpg'); /* Replace with your background image path */
  background-size: cover;
  padding: 20px;
  height: 80vh;
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
.container-links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

.img-card {
  flex: 1;
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
}
</style>
