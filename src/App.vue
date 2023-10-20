<script>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    }
  }
}
</script>

<template>
  <div>
    <header>
      <nav>
        <div class="navbar">
          <div class="logo">
            <RouterLink to="/Home">Home</RouterLink>
          </div>
          <div>
            <RouterLink to="/AgroAllied">Contact Us</RouterLink>
            <div class="dropdown" @click="toggleDropdown">
              <button class="dropbtn">
                Dropdown
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content" :class="{ open: isDropdownOpen }">
                <RouterLink to="/AgroAllied">Agro Allied</RouterLink>
                <RouterLink to="/Fedas water service">Hotel Services</RouterLink>
                <RouterLink to="/Fedas Engineering">Engineering Co</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <section :class="{ hidden: $route.matched.length }">
      <div class="background-image">
        <marquee behavior="" direction="" style="color: white; font-size: 3em"
          >WELCOME TO FANDF GREENER GROUP OF COMPANIES</marquee
        >
        <img src="../src/assets/images/FandF.png" alt="" class="full-width-height" />
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
  background-color: #31708e;
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
  /* background-color: #31708e; */
}

.img-card {
  flex: 1;

  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  max-width: 300px; /* Adjust the max-width as needed for your design */

  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
  margin: 20px;
}

.img-card img {
  max-width: 100%;
  height: auto;
}

.card-text {
  margin-top: 10px;
  font-weight: bold;
  color: black;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}

.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #004daa;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* Media query for small screens */
@media (max-width: 768px) {
  .container-links {
    flex-direction: column; /* Stack cards vertically on smaller screens */
    align-items: center;
  }
  .full-width-height {
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
