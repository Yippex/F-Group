<script setup></script>

<template>
  <section>
    <div class="container">
      <marquee behavior="" direction="" style="color: white; font-size: 4rem; margin-bottom: 1px"
        >WELCOME TO F&F GREENER STORES AND SUPERMARKET LTD
      </marquee>
      <div class="container-text">
        <h2>STORES AND SUPERMARKET</h2>
        <p>
          At F&F, we understand that style and comfort should go hand in hand, and we offer a wide
          range of clothing options to cater to your fashion needs. Our stores are thoughtfully
          designed to provide a seamless and enjoyable shopping experience.
        </p>
      </div>
    </div>
  </section>
  <section class="gallery">
    <h1 class="centered-h1">Photo Gallery</h1>
    <div class="container-links">
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store1.jpeg" alt="Company 2" />
          <div class="card-text">
            An aisle in the supermarket stocked with an array of biscuit packages. The biscuit
            packages come in various sizes and shapes, from traditional round cookies to more
            elaborate and decorative options
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store2.jpeg" alt="Company 3" />
          <div class="card-text">
            A shelf with an assortment of body cream products. The creams are presented in bottles
            or containers of various sizes and shapes. Labels on the products indicate different
            scents, ingredients, and skin benefits, such as "hydrating," "nourishing," or "for
            sensitive skin.
          </div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store3.jpeg" alt="Company 4" />
          <div class="card-text">
            Here are rows of shelves filled with packages of noodles in different varieties. Some
            packages contain long spaghetti or fettuccine noodles, while others feature colorful
            packaging for instant ramen noodles.
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store5.jpeg" alt="Company 4" />
          <div class="card-text">A warehous for goods</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store6.jpeg" alt="Company 4" />
          <div class="card-text">
            Baby creams for a smooth moisturing body
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store8.jpeg" alt="Company 4" />
          <div class="card-text">
            Wine shop for all kind of wines
          </div>
        </RouterLink>
      </div>
      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store10.jpeg" alt="Company 4" />
          <div class="card-text">Different kind of wines and assorted drinks</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store9.jpeg" alt="Company 4" />
          <div class="card-text">A selection of wine bottles neatly arranged on shelves.</div>
        </RouterLink>
      </div>

      <div class="img-card">
        <RouterLink to="">
          <img src="../assets/stores/store11.jpeg" alt="Company 4" />
          <div class="card-text">
            |Wine shelf for different types of wine on display
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
  <footer>
    <div class="footer-text">
      <p>F&F Stores and Supermarket</p>
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
  background-image: url('../assets/stores/store1.jpeg'); /* Replace with your background image path */
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
  flex: 0 0 calc(25% - 20px); /* 25% width with 20px margin */
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
}

.img-card img {
  max-width: 100%;
  height: auto;
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
  .container-text {
    margin-top: 20px;
  }
  nav {
    padding: 0 1rem;
  }

  .img-card {
    max-width: 100%;
  }
  .container-text h1 {
    font-size: 2em;
  }
  .container-text p {
    font-size: 1em;
  }
}
</style>
