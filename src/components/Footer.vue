
<script setup>
</script>
<template>
  <div>
    <!-- Footer section -->
    <footer class="footer">
      <div class="footer-links">
        <!-- Your social media links here -->
      </div>
      <div class="footer-logos">
        <!-- Your logos here -->
      </div>
      <div class="footer-contact">
        <!-- Contact information -->
        <div class="footer-contact-desktop">
          <!-- Display as a row for desktop -->
          <div class="footer-contact-item">
            <p>F&F GREENER ENGINEERING CO LTD</p>
            <p>KM 5, IWOROKO ROAD,</p>
            <p>OPPOSITE EKITI STATE WATER CORPORATION HEADQUARTERS, ADO EKITI</p>
            <p>TEL: 08132214142, 08066562376</p>
          </div>
          <div class="footer-contact-item">
            <p>FEDAS AGRO ALLIED FARMS LTD</p>
            <p>BEHIND IREWOLEDE ESTATE, OFF ILAWE ROAD, ADO EKITI, EKITI STATE</p>
          </div>
          <div class="footer-contact-item">
            <p>KSSD HOTEL LTD</p>
            <p>ALONG NTA OFF ILAWE ROAD, ADO EKITI</p>
            <p>TEL: 09036321835</p>
          </div>
          <div class="footer-contact-item">
            <p>FEDAS WATER SERVICES LTD.</p>
            <p>SHOP NO. 33/24 PURPLE STONE PLAZA APO ABUJA</p>
            <p>TEL: 08069013057, 08132214142</p>
          </div>
        </div>
        <div class="footer-contact-mobile">
          <!-- Display as a column for mobile -->
          <div class="footer-contact-item">
            <p>F&F GREENER ENGINEERING CO LTD</p>
            <p>
              KM 5, IWOROKO ROAD, OPPOSITE EKITI STATE WATER CORPORATION HEADQUARTERS, ADO EKITI
            </p>
            <p>TEL: 08132214142, 08066562376</p>
          </div>
          <div class="footer-contact-item">
            <p>FEDAS AGRO ALLIED FARMS LTD</p>
            <p>BEHIND IREWOLEDE ESTATE, OFF ILAWE ROAD, ADO EKITI, EKITI STATE</p>
          </div>
          <div class="footer-contact-item">
            <p>KSSD HOTEL LTD</p>
            <p>ALONG NTA OFF ILAWE ROAD, ADO EKITI</p>
            <p>TEL: 09036321835</p>
          </div>
          <div class="footer-contact-item">
            <p>FEDAS WATER SERVICES LTD.</p>
            <p>SHOP NO. 33/24 PURPLE STONE PLAZA APO ABUJA</p>
            <p>TEL: 08069013057, 08132214142</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Your existing styles */

.footer {
  background: #90613f;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-link {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}

.footer-logos {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-logo {
  width: 30px; /* Adjust the width as needed */
  height: 30px; /* Adjust the height as needed */
  margin: 0 10px;
}

.footer-contact {
  display: flex;
  justify-content: center;
}

.footer-contact-desktop {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.footer-contact-mobile {
  display: flex;
  flex-direction: column;
}

.footer-contact-item {
  flex: 1;
  margin: 10px;
  text-align: center;
}

/* Define media query for mobile view */
@media (max-width: 768px) {
  .footer-contact-desktop {
    display: none;
  }
  .footer-contact-mobile {
    display: flex;
  }
}

/* Define media query for desktop view */
@media (min-width: 769px) {
  .footer-contact-desktop {
    display: flex;
  }
  .footer-contact-mobile {
    display: none;
  }
}
</style>
