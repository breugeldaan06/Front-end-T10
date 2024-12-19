<template>
  <div class="container mt-5">
    <h1 class="text-center">Contactformulier</h1>
    
    <div class="card shadow-sm p-4">
      <form @submit.prevent="submitForm">
        <!-- Aanhef -->
        <div class="form-group">
          <label for="salutation">Aanhef</label>
          <select v-model="form.salutation" id="salutation" class="form-control" required>
            <option value="">Kies een aanhef</option>
            <option value="mr">De heer</option>
            <option value="ms">Mevrouw</option>
          </select>
        </div>

        <!-- Naam -->
        <div class="form-group">
          <label for="name">Naam</label>
          <input v-model="form.name" type="text" id="name" class="form-control" required placeholder="Vul uw naam in">
        </div>

        <!-- E-mailadres -->
        <div class="form-group">
          <label for="email">E-mailadres</label>
          <input v-model="form.email" type="email" id="email" class="form-control" required placeholder="Vul uw e-mailadres in">
        </div>

        <!-- Telefoonnummer -->
        <div class="form-group">
          <label for="phone">Telefoonnummer</label>
          <input v-model="form.phone" type="tel" id="phone" class="form-control" required placeholder="Vul uw telefoonnummer in">
        </div>

        <!-- Vraag/opmerking -->
        <div class="form-group">
          <label for="message">Vraag of Opmerking</label>
          <textarea v-model="form.message" id="message" class="form-control" rows="4" required placeholder="Vul uw vraag of opmerking in"></textarea>
        </div>

        <!-- Nieuwsbrief -->
        <div class="form-check">
          <input v-model="form.newsletter" type="checkbox" id="newsletter" class="form-check-input">
          <label class="form-check-label" for="newsletter">Aanmelden voor de nieuwsbrief</label>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary mt-3">Verzenden</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        salutation: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false
      }
    };
  },
  methods: {
    submitForm() {
      if (this.validateForm()) {
        // Simuleer formulierverzending (bijv. via een API-aanroep)
        console.log("Formulier verzonden:", this.form);
        alert("Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.");
        // Reset formulier na verzending
        this.resetForm();
      } else {
        alert("Vul alle verplichte velden in.");
      }
    },
    validateForm() {
      // Zorg ervoor dat alle verplichte velden ingevuld zijn
      return this.form.salutation && this.form.name && this.form.email && this.form.phone && this.form.message;
    },
    resetForm() {
      this.form = {
        salutation: '',
        name: '',
        email: '',
        phone: '',
        message: '',
        newsletter: false
      };
    }
  }
};
</script>

<style scoped>
.card {
  margin-top: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
