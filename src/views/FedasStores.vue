<script setup>

</script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 4rem; margin-bottom: 1px"
        >WELCOME TO FEDAS HOTEL SERVICES CO LTD
      </marquee>
      <div class="container-text">
        <h2>FEDAS HOTEL SERVICES</h2>
        <p style="margin-bottom: 1rem; font-size: 1.5em;" >
          At F&F Hotel Services, we are committed to providing an unforgettable and unparalleled
          experience for our guests. Our mission is to be your trusted partner in hospitality,
          ensuring your stay with us is not just comfortable but truly memorable.
        </p>
        <p>
          <span style="color: #004daa;">Your Home Away from Home</span> Whether you're traveling for leisure or business, F&F Hotel
          Services aims to be your home away from home. We understand that every guest is unique,
          and we tailor our services to cater to your individual preferences and needs. Come and
          experience the magic of F&F Hotel Services. We invite you to immerse yourself in the
          exceptional hospitality, comfort, and luxury that we offer. Your journey with us will be
          filled with beautiful memories and the promise of returning to a place where you're not
          just a guest but a valued part of our family.
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Photo Gallery</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/water/IMG-20231019-WA0015.jpg" alt="Company 2" />
          <div class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus repellat laborum
            mollitia fugit expedita libero vel quia in. Officiis iste voluptatibus maiores dolorum
            suscipit rem fugit dignissimos molestias et repellendus.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/water/IMG-20231019-WA0018.jpg" alt="Company 3" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem non animi vero,
            voluptate debitis vitae molestiae nesciunt alias officiis eaque porro voluptatibus
            numquam quas nulla excepturi, id rem doloremque.
          </div>
        </RouterLink>
      </div>
     
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0042.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0037.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/water/IMG-20231019-WA0017.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0030.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0029.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0021.jpg" alt="Company 4" />
          <div class="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa expedita delectus totam
            dicta facilis quisquam voluptate repudiandae saepe perferendis magnam ab accusamus earum
            illo cupiditate vero commodi, odit, asperiores quibusdam!
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/images/IMG-20231019-WA0026.jpg" alt="Company 4" />
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
  background-image: url('../assets/images/IMG-20231019-WA0021.jpg'); /* Replace with your background image path */
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
  background: rgba(0, 0, 0, 0.5);
  filter: blur(10px); /* Adjust the blur amount as needed */
}

.container p {
  margin: 0;
  color: white; /* Text color on the blurred background */
  position: relative; /* Position relative for z-index to work */
  z-index: 1; /* Place text above the blurred background */
}
a{
  text-decoration: none;
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
  font-size: 16px;
  text-decoration: none;
  color: #333;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .container-links {
    flex-direction: column;
    align-items: center;
  }
  .container-text{
    margin-top: 20px;
  }
  nav {
    padding: 0 1rem;
  }

  .img-card {
    max-width: 100%;
  }
}
</style>
