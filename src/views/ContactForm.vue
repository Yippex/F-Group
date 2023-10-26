<template>
    <div class="contact-page">
      <h1>Contact Us</h1>
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="formData.message" required></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </template>
  
  <script>
  import Footer from '../components/Footer.vue';

  export default {
    name: 'ContactPage',
    
    data() {
        Footer
      return {
        formData: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // You can handle form submission here, e.g., send data to a server or perform other actions.
        console.log('Form submitted with data:', this.formData);
        // Clear the form after submission
        this.formData = {
          name: '',
          email: '',
          message: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your CSS styling here */
  .contact-page {
    text-align: center;
    padding: 20px;
  }
  
  .contact-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f8f8f8;
  }
  
  .form-group {
    margin: 10px 0;
  }
  
  label {
    display: block;
    font-weight: bold;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  