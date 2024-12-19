<template>
  <main class="main-container">
    <div class="home-container">
      <!-- Logo en Titel -->
      <div class="logo-title">
        <img src="{logo_url}" alt="BSO Rooie Noes Logo" class="logo" />
        <h1>Welcome to BSO Rooie Noes</h1>
      </div>

      <!-- Inleidende Tekst -->
      <div class="intro-text">
        <p>
          Uw kind is het waardevolste bezit en als werkende en/of studerende ouder/verzorger
          zoek je natuurlijk een buitenschoolse opvang die bij u en bij uw kind past.
        </p>
        <p>
          Wij bieden opvang, begeleiding en ondersteuning aan kinderen vanaf de geboorte tot het moment dat ze de basisschool verlaten. Zowel de dagopvang als de buitenschoolse opvang vindt plaats in een ongedwongen en huiselijke sfeer.
        </p>
        <p>
          Wij sluiten aan bij de wensen van de ouders/verzorgers en de behoefte en ontwikkelingsfase van het individuele kind. Ons team is hecht, zorgzaam, toegewijd en professioneel. De zorg voor uw kind kan met het volste vertrouwen aan hen worden overgedragen. Binnen onze kinderopvang gebruiken wij de Gordon-methode als leidraad voor de communicatie.
        </p>
        <p>
          Ons ruime, sfeervolle pand is gelegen in Ons Dorp in een rustige, groene omgeving in de buurt van een van de grootste speeltuinen.
        </p>
      </div>

      <!-- Carousel -->
      <div class="carousel">
        <div class="carousel-container">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-slide"
            :class="{ active: currentSlide === index }"
          >
            <img src="public/images/rooienoes_logo.png" alt="Event Image" />
            <h2 class="slide-title">{{ slide.title }}</h2>
          </div>
        </div>
        <button class="carousel-button prev" @click="prevSlide">&#8249;</button>
        <button class="carousel-button next" @click="nextSlide">&#8250;</button>
      </div>

      <!-- News -->
      <div class="news">
        <h2>Latest News</h2>
        <ul>
          <li v-for="(newsItem, index) in latestNews" :key="index">{{ newsItem }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'HomeViews',
  data() {
    return {
      logo_url: require("@/assets/logo.png"),
      currentSlide: 0,
      slides: [
        { title: 'Event 1: Fun Day!' },
        { title: 'Event 2: Craft Workshop' },
      ],
      latestNews: [
        'New afterschool programs announced!',
        'Holiday schedule updates!',
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 100px auto;
}

.logo-title {
  text-align: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 200px;
  height: auto;
  margin: 0 auto;
  display: block;
}

.intro-text {
  text-align: center;
  margin: 20px auto;
  max-width: 800px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.carousel {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.carousel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s;
}

.carousel-slide.active {
  opacity: 1;
}

.slide-title {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 10px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
}

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.news {
  padding: 20px;
  width: 100%;
  max-width: 600px;
}

.news ul {
  list-style: none;
  padding: 0;
}

.news li {
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
</style>
