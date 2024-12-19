<template>
    <div class="container mt-5">
      <h1 class="text-center">Nieuws Overzicht</h1>
  
      <!-- Conditie om overzicht of detailpagina weer te geven -->
      <div v-if="selectedArticle === null">
        <!-- Overzicht van de nieuwsberichten -->
        <div class="row">
          <div class="col-md-4" v-for="(article, index) in articles" :key="index">
            <div class="card shadow-sm">
              <img :src="article.image" class="card-img-top" alt="Nieuwsafbeelding">
              <div class="card-body">
                <h5 class="card-title">{{ article.title }}</h5>
                <p class="card-text">{{ article.summary }}</p>
                <p class="card-text"><small class="text-muted">{{ article.date }}</small></p>
                <button @click="viewDetails(article)" class="btn btn-primary">Lees verder</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Detailpagina van het geselecteerde nieuwsbericht -->
      <div v-else>
        <div class="card shadow-sm">
          <img :src="selectedArticle.image" class="card-img-top" alt="Nieuwsafbeelding">
          <div class="card-body">
            <h1 class="card-title">{{ selectedArticle.title }}</h1>
            <p class="card-text"><small class="text-muted">{{ selectedArticle.date }}</small></p>
            <p class="card-text">{{ selectedArticle.content }}</p>
            <button @click="goBack" class="btn btn-secondary">Terug naar overzicht</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        articles: [
          {
            id: 1,
            title: "Nieuwsbericht 1",
            summary: "Dit is een samenvatting van het eerste nieuwsbericht.",
            content: "Dit is de volledige inhoud van het eerste nieuwsbericht. Hier kunnen we meer details plaatsen.",
            date: "2024-12-19",
            image: "https://via.placeholder.com/300x200?text=Nieuws+1"
          },
          {
            id: 2,
            title: "Nieuwsbericht 2",
            summary: "Dit is een samenvatting van het tweede nieuwsbericht.",
            content: "Dit is de volledige inhoud van het tweede nieuwsbericht. Hier kunnen we meer details plaatsen.",
            date: "2024-12-18",
            image: "https://via.placeholder.com/300x200?text=Nieuws+2"
          },
          {
            id: 3,
            title: "Nieuwsbericht 3",
            summary: "Dit is een samenvatting van het derde nieuwsbericht.",
            content: "Dit is de volledige inhoud van het derde nieuwsbericht. Hier kunnen we meer details plaatsen.",
            date: "2024-12-17",
            image: "https://via.placeholder.com/300x200?text=Nieuws+3"
          }
        ],
        selectedArticle: null
      };
    },
    methods: {
      // Functie om het geselecteerde artikel te tonen
      viewDetails(article) {
        this.selectedArticle = article;
      },
      // Functie om terug te gaan naar de overzichtspagina
      goBack() {
        this.selectedArticle = null;
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  