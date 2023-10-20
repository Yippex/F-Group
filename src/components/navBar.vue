<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          My Website
        </a>
        <button class="navbar-burger burger" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div :class="{'navbar-menu': true, 'is-active': isNavbarActive}">
        <div class="navbar-start">
          <a class="navbar-item" href="/">Home</a>
          <a class="navbar-item" href="/about">About</a>
          <!-- Add more links as needed -->
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarActive: false,
      };
    },
    methods: {
      toggleNavbar() {
        this.isNavbarActive = !this.isNavbarActive;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Customize your CSS styles here */
  .navbar {
    background-color: #333;
  }
  
  .navbar-brand .navbar-item {
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .navbar-burger {
    color: #fff;
  }
  
  .navbar-menu {
    background-color: #333;
  }
  
  .navbar-start .navbar-item {
    color: #fff;
    font-weight: 500;
  }
  
  .navbar-item:hover {
    background-color: #555;
  }
  
  /* Media Query for Mobile */
  @media (max-width: 768px) {
    .navbar-item {
      background-color: #333;
    }
  }
  </style>
  