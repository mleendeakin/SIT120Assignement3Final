<template>
    <div class="nav-container">
    <nav class="navbar">

      <router-link :to="{ name: 'Home', params: {fruitPanelInSeason: fruitPanelInSeason}}" class="title">FruitPedia</router-link>
      <router-link :to="{name: 'Seasons'}">Seasons</router-link>
      <router-link :to="{name: 'Recipes'}">Recipes</router-link>
      <router-link :to="{ name: 'About', params: { id: Aboutid}}">About</router-link>
      
    </nav>
  </div>
  <router-view/>
</template>


<script>
export default {
    data () {
        return {
          fruitPanelInSeason: "In Season Price ",
          fruitPanelOutOfSeason: "Out of Season Price",
          fruitPanelSeason: "Season",
          Aboutid: "4",
        }
    }
}
</script>

<style>
    /* Nav Bar */
.navbar {
  width: 100%;
  background-color: #7aac5b;
  text-align: left;
}

.nav-container {
  width: 100%;
}

.title {
  font-size: 2em;
}

nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
  /* margin: 1em; */
}

nav a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  color: white;
  padding: 0.5em;
}

nav a:hover,
nav a:focus {
  color: #ddd;
}

@media (max-width: 700px) {
  nav a {
    font-size: 0.8em;
  }
}

@media (max-width: 400px) {
  .title {
    font-size: 1.5em;
  }
  nav a {
    font-size: 0.7em;
  }
}
</style>