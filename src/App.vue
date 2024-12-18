<template>
    <h1>Hallo wereld</h1>
  <div>
    <p>
      Meneer Saebu moet mij even helpen!!<br>
      <button @click="groet">Klik me</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    groet() {
      alert('!');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
</style>
