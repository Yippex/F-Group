<!-- <script>
import { supabase } from './supabaseConfig';

export default {
  data() {
    return {
      description: '',
      selectedCompany: '',
      file: null
    }
  },


  methods: {
    handleFileChange(event) {
      this.file = event.target.files[0];
    },

    async handleFormSubmit(event) {
      event.preventDefault();
      if (!this.file) {
        alert('Please select a file.');
        return;
      }

      if (!this.selectedCompany) {
        alert('Please select a company.');
        return;
      }

      const { data, error } = await supabase.storage
        .from('Image')
        .upload(`images/${this.file.name}`, this.file);

      if (error) {
        console.error('Error uploading file:', error);
        return;
      }

      const imageUrl = data.Key;

      
      const { data: companyData, error: companyError } = await supabase
        .from(`company_${this.selectedCompany.toLowerCase()}`) // Adjust table name as needed
        .insert([
          { description: this.description, image_url: imageUrl },
        ]);

      if (companyError) {
        console.error('Error inserting data into the company database:', companyError);
      } else {
        // Successfully uploaded data to the selected company's database.
        // You can add more handling here.
      }
    },
  },
};
</script>


<template>
  <div class="admin-dashboard">
    <main class="main-content">
      <h1>Welcome to the Admin Dashboard</h1>
      <p>
        This is a simple admin dashboard layout. You can add your content, charts, tables, and more
        in this main area.
      </p>

      
      <template>
        
        <form @submit="handleFormSubmit">
          <div class="form-group">
            <label for="file">Select Image</label>
            <input type="file" id="file" name="file" accept="image/*" @change="handleFileChange" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input type="text" id="description" name="description" v-model="description" />
          </div>
          <div class="form-group">
            <label for="company">Select Company</label>
            <select id="company" v-model="selectedCompany">
              <option value="CompanyA">Company A</option>
              <option value="CompanyB">Company B</option>
              <option value="CompanyC">Company C</option>
              
            </select>
          </div>
          <button type="submit">Upload</button>
        </form>
      </template>
    </main>
  </div>
</template>

<style scoped>
.admin-dashboard {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: #fff;
  /* Sidebar styles go here */
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  /* Main content styles go here */
}

/* Form Styles */
form {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type='file'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input[type='text'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

button[type='submit'] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
}

button[type='submit']:hover {
  background-color: #0056b3;
}
</style> -->
