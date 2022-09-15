<!-- src/bookIndex.vue -->
<template>
           <div class="row">
            <div style="margin-top: 5%">
              <h2>{{title}}</h2>
              <table><thead>
               <tr><th>Title</th><th>Country</th><th>Year</th>
                   <th>Director</th><th>Producer</th></tr>
               </thead><tbody>
               <tr v-for='movie in movies' :key="movie.id"><td>{{movie.title}}</td>
               <td>{{movie.country}}</td>
               <td>{{movie.year}}</td>
               <td>{{movie.director}}</td>
               <td>{{movie.producer}}</td>
               <td>
               <router-link class="button"
                 :to="'/movie/show/'+movie.id">Show</router-link>
               <router-link class="button"
                 :to="'/movie/edit/'+movie.id">Edit</router-link>
               <a class="button"
                 v-on:click="deleteMovie(movie.id)">Erase</a>
               </td>
               </tr></tbody>
              </table>
              <router-link class="button button-primary" 
                to="/movie/create">New</router-link>
            </div>
           </div>
         </template>
         <script>
         export default {
           props: ['movies'],
           data: function() {
             return {
               title: 'MovieList'
             }
           },
           created () {
             this.allMovie()
           },
           methods: {
             allMovie() {
               fetch('/server/movie',
                 { headers: {'Accept': 'application/json'}})
                 .then((response) => response.json())
                 .then((data) => {
                   app.movies = data;
                 })
              },
              deleteMovie(id) {
                fetch('/server/movie/'+id,
                  { headers: {'Content-Type': 'application/json'},
                              method: 'POST',
                    body: JSON.stringify({'_method':'DELETE'})})
                  .then((data) => {
                   this.allMovie();
                   }
                 )
              }
           }
         }
         </script>