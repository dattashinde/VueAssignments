<template>
  <nav class="navbar navbar-expand-lg">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active px-4">
          <a class="nav-link color-me" href="/">HOME<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item px-4">
          <a class="nav-link color-me" href="/Projects">PROJECTS</a>
        </li>
        <li class="nav-item px-4 ">
          <a class="nav-link color-me" href="/Services">SERVICES</a>
        </li>
        <li class="nav-item px-4 color-me">
          <a class="nav-link color-me" href="/Contact">CONTACT</a>
        </li>
        <li class="nav-item px-4 color-me">
          <a class="nav-link color-me" href="/Weather">WEATHER</a>
        </li>
      </ul>
    </div>
  </nav>
  
  <router-view />
</template>
<style scoped>
  nav {
    background-color:#0099ff;
  }
  .color-me{
    color:white;
  }
</style>

