<!-- src/App.vue -->
<template>
  <div id="app" class="container">
    <div class="row" style="margin-top: 5%">
      <router-link class="button button-primary" 
       style="margin-right: 10px;" to="/movie">Movies
      </router-link> 
      <router-link class="button button-primary" 
       style="margin-right: 10px;" to="/director">Directors
      </router-link>
      <router-link class="button button-primary" 
       to="/producer">Producers
      </router-link>
    </div>
    <router-view
      v-bind:movies="movies">
    </router-view>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      movies: []
    }
  }
}
</script>