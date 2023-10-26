<script>
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
  },
}
</script>
<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="logo">
          <RouterLink to="/"><img src="../assets/logo.png" alt=""></RouterLink>
        </div>
        <div>
          <RouterLink to="/AgroAllied">Contact Us</RouterLink>
          <div class="dropdown" @click="toggleDropdown">
            <button class="dropbtn">
              Companies
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content" :class="{ open: isDropdownOpen }" style="color: black;">
              <RouterLink to="/Engineering">Engineering Co</RouterLink>
              <RouterLink to="/AgroAllied">Agro Allied</RouterLink>
              <RouterLink to="/hotel">Hotel Services</RouterLink>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav{
  
}
.logo img{
  width: 70px;
  height: 70px;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  
}

.navbar a {
  float: left;
  font-size: 20px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  font-size: 20px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}


.dropdown:hover .dropbtn {
  background-color: #90613f;
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
a{
  text-decoration: none;
  color: white;
}
@media (max-width: 789px) {
  .navbar{
    padding: 0 0.4rem;
  }
}
</style>
