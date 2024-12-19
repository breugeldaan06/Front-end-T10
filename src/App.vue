<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
   
  </nav>
  <main class="main-container">
    <router-view/>
  </main>


    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h5>About Us</h5>
          <p>Your trusted source for modern web solutions.</p>
        </div>
        <div class="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h5>Follow Us</h5>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://instagram.com" target="_blank">Instagram</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
      
      </div>
    </footer>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
main{
  min-height: 100vh;
}
.footer {
  background-color: #f8f9fa;
  padding: 20px 0;
  margin-top: auto;
  border-top: 1px solid #ddd;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 10px;

}

.footer-section h5 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  text-decoration: none;
  color: #2c3e50;
}

.footer-section ul li a:hover {
  text-decoration: underline;
}

.social-icons a {
  display: inline-block;
  margin-right: 10px;
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

.social-icons a:hover {
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding: 10px 0;
  font-size: 0.9em;
  color: #6c757d;
}
</style>