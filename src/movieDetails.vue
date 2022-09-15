<!-- bookDetails.vue -->
<template>
           <div class="row">
            <div class="eleven column" style="margin-top: 5%">
             <h2>{{title}}</h2>
              <form>
              <div class="row">
               <div class="six columns">
                <label for="titleInput">Title</label>
                <input class="u-full-width" type="text"
                  v-model="movie.title">
               </div>
               <div class="six columns">
                <label for="editionInput">Country</label>
                <input class="u-full-width" type="text"
                   v-model="movie.country">
               </div>
               <div class="six columns">
                <label for="copyrightInput">Year</label>
                <input class="u-full-width" type="text"
                   v-model="movie.year">
               </div>
              </div>
              <div class="row">
               <div class="six columns">
                <label for="emailInput">Director</label>
                <input class="u-full-width" type="email"
                   v-model="movie.director">
               </div>
               <div class="six columns">
                <label for="phoneInput">Producer</label>
                <input class="u-full-width" type="tel"
                  v-model="movie.producer">
               </div>
               <router-link class="button button-primary" 
                 to="/movie">Back</router-link>
               <a v-if='edit' class="button button-primary" style="float: right"
                  v-on:click="updateMovie()">Update</a>
               <a v-if='create' class="button button-primary" style="float: right"
                  v-on:click="createMovie()">Create</a>
              </div>
             </form>
            </div>
           </div>
         </template>
         <script>
         export default {
           props: ['create','edit','show'],
           data: function() {
             return {
               title: "Movie Data",
               prof: {'title':'','country':'','year':'','language':'','duration':'','director':"",'producer':''},
             }
           },
           created () {
            this.findMovie(app.$route.params.id)
           },
           methods: {
             findMovie: function(id) {
               var movie = app.movies.find(
                 function(x) { return x.id == id; });
               if (movie!=null)
                 Object.assign(this.movie,movie);
             },
             updateMovie: function() {
               this.prof['_method'] = 'PUT';
               var id = app.$route.params.id;
               fetch('/server/movie/'+id,
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.movie)})
                 .then((data) => {
                   var index = app.movies.findIndex(
                      function(x) { return x.id == id; });
                   app.movies[index] = this.movie;
                   router.push('/movie');
                 }
               )
             },
             createMovie: function() {
               fetch('/server/movie',
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.movie)})
                 .then((data) => {
                    app.movies.push(this.book);
                    router.push('/movie');
                 }
               )
             }
           }
         }
         </script>