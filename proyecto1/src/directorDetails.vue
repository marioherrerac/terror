<!-- bookDetails.vue -->
<template>
           <div class="row">
            <div class="eleven column" style="margin-top: 5%">
             <h2>{{title}}</h2>
              <form>
              <div class="row">
               <div class="six columns">
                <label for="titleInput">Name</label>
                <input class="u-full-width" type="text"
                  v-model="director.director_name">
               </div>
               <div class="six columns">
                <label for="editionInput">Nationality</label>
                <input class="u-full-width" type="text"
                   v-model="director.nationality">
               </div>
               <div class="six columns">
                <label for="copyrightInput">Birth Year</label>
                <input class="u-full-width" type="text"
                   v-model="director.birth_year">
               </div>
              </div>
              <div class="row">
               <div class="six columns">
                <label for="emailInput">Fields</label>
                <input class="u-full-width" type="email"
                   v-model="director.fields">
               </div>
               <div class="six columns">
                <label for="phoneInput">Movies</label>
                <input class="u-full-width" type="tel"
                  v-model="director.movies.title">
               </div>
               <router-link class="button button-primary" 
                 to="/director">Back</router-link>
               <a v-if='edit' class="button button-primary" style="float: right"
                  v-on:click="updateDirector()">Update</a>
               <a v-if='create' class="button button-primary" style="float: right"
                  v-on:click="createDirector()">Create</a>
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
               title: "Director Data",
               prof: {'director_name':'','nationality':'','birth_year':'','fields':'','title':''},
             }
           },
           created () {
            this.findDirector(app.$route.params.id)
           },
           methods: {
             findDirector: function(id) {
               var director = app.directors.find(
                 function(x) { return x.id == id; });
               if (director!=null)
                 Object.assign(this.director,director);
             },
             updateDirector: function() {
               this.prof['_method'] = 'PUT';
               var id = app.$route.params.id;
               fetch('/server/director/'+id,
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.director)})
                 .then((data) => {
                   var index = app.directors.findIndex(
                      function(x) { return x.id == id; });
                   app.directors[index] = this.director;
                   router.push('/director');
                 }
               )
             },
             createMovie: function() {
               fetch('/server/director',
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.director)})
                 .then((data) => {
                    app.directors.push(this.director);
                    router.push('/director');
                 }
               )
             }
           }
         }
         </script>