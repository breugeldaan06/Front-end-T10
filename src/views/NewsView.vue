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
            summary: "Deze maand heeft Klanklokaal een nieuwe muziekuitgave gepresenteerd die veelbelovende artiesten van de regio bevat. Het album is beschikbaar voor streaming en bevat een mix van moderne muziekstijlen.",
            content: "Met trots kondigt Klanklokaal de release aan van ons nieuwste album met opkomende muzikanten. Het album bevat zowel experimenten als klassieke invloeden, met nummers die variëren van elektronische beats tot akoestische melodieën. We zijn er zeker van dat dit album een breed publiek zal aanspreken en we moedigen je aan om het te beluisteren via je favoriete streamingplatform. De fysieke exemplaren van het album zijn ook beschikbaar in de Klanklokaal winkel. Vergeet niet om ons te volgen op sociale media voor updates over de artiesten en aankomende optredens!",
            date: "2024-12-19",
            image: "http://klanklokaal.nl/images/groep.jpg"
          },
          {
            id: 2,
            title: "Nieuwsbericht 2",
            summary: "Het herfstconcert van Klanklokaal was een groot succes. De studio was gevuld met warme geluiden en een intieme sfeer, ideaal voor de seizoensgebonden gelegenheid.",
            content: "Het herfstconcert van dit jaar bracht een betoverende sfeer in onze studio. Lokale artiesten deelden hun mooiste herfstnummers, en de avond werd afgesloten met een magische performance van een klassiek ensemble. Het was een gelegenheid voor muziekfans om in contact te komen en nieuwe ontdekkingen te doen in de wereld van live muziek. De volgende optredens worden al voorbereid, dus houd de agenda in de gaten!",
            date: "2024-12-18",
            image: "http://klanklokaal.nl/images/dagnachttegaal.jpg"
          },
          {
            id: 3,
            title: "Nieuwsbericht 3",
            summary: "Klanklokaal biedt binnenkort een workshop aan over digitale muziekproductie. Een unieke kans om je eigen muziek te maken met professionele tools.",
            content: "Heb je altijd al willen leren hoe je muziek maakt met digitale software? Dan is de aankomende workshop digitale muziekproductie bij Klanklokaal precies wat je zoekt. Deze workshop, geleid door ervaren producers, biedt hands-on ervaring met de nieuwste muzieksoftware en apparatuur. Of je nu een beginner bent of al enige ervaring hebt, deze sessie zal je helpen om je vaardigheden naar een hoger niveau te tillen. Meld je snel aan, want de plaatsen zijn beperkt!",
            date: "2024-12-17",
            image: "http://klanklokaal.nl/images/piano7.jpg"
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
  