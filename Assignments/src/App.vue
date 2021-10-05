<template>
  <div>
    <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active px-4 ">
          <router-link to='/' class="color-me">HOME</router-link>
        </li>
        <li class="nav-item px-4">
          <router-link to='/projects' class="color-me">PROJECTS</router-link>
        </li>
        <li class="nav-item px-4">
          <router-link to='/services' class="color-me">SERVICES</router-link>
        </li>
        <li class="nav-item px-4">
          <router-link to='/contact' class="color-me">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  background-color:#0099ff;
}
.color-me{
    color:white;
    
}
li {
  padding: 15px;
  text-decoration: none;
}
div nav ul li:hover {
  background-color: #111;
}
</style>
