<template>
  <main class="staff-page">
    <div class="staff-container">
      <h1>Onze Leid(st)ers</h1>
      <div class="staff-grid">
        <div class="staff-card" v-for="(staff, index) in leidsters" :key="index">
          <img :src="staff.url_img" :alt="staff.naam" class="staff-image" />
          <div class="staff-info">
            <h2>{{ staff.naam }}</h2>
            <p>Leeftijd: {{ staff.leeftijd }}</p>
            <p>Functie: {{ staff.functie }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import leidsters from "@/leidsters.js";

export default {
  name: "StaffPage",
  data() {
    return {
      leidsters,
    };
  },
};
</script>

<style scoped>
.staff-container {
  text-align: center;
  padding: 20px;
  margin: 0 auto;
}

.staff-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.staff-card {
  background: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.staff-image {
  width: 100%;
  height: auto;
  border-radius: 50%;
}

.staff-info {
  margin-top: 10px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .staff-grid {
    grid-template-columns: 1fr;
  }
}
</style>
