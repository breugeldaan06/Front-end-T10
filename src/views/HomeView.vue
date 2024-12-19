<template>
  <main class="main-container">
    <div class="home-container">
      <!-- Logo en Titel -->
      <div class="logo-title">
        <img src="public/src/assets/rooienoes_logo.png" alt="BSO Rooie Noes Logo" class="logo" />
        <h1>Welcome to BSO Rooie Noes</h1>
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
