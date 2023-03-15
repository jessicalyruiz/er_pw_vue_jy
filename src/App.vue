<template>

  <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style="background-color: #B76E79;">
    <div class="container-fluid">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active text-dark" aria-current="page" to="/materias/nueva">Crear Materia</router-link> 
          </li>
          <li class="nav-item">
            <router-link class="nav-link active text-dark" aria-current="page" to="/materias">Consultar MAterias</router-link> 
          </li>
        </ul>
      </div>
    </div>
  </nav>



  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
