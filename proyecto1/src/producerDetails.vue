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
                  v-model="producer.producer_name">
               </div>
               <div class="six columns">
                <label for="editionInput">Country</label>
                <input class="u-full-width" type="text"
                   v-model="producer.country">
               </div>
               <div class="six columns">
                <label for="copyrightInput">Founded</label>
                <input class="u-full-width" type="text"
                   v-model="producer.founded">
               </div>
              </div>
              <div class="row">
               <div class="six columns">
                <label for="emailInput">Genere</label>
                <input class="u-full-width" type="email"
                   v-model="producer.genere">
               </div>
               <div class="six columns">
                <label for="phoneInput">Movies</label>
                <input class="u-full-width" type="tel"
                  v-model="producer.movies.title">
               </div>
               <router-link class="button button-primary" 
                 to="/director">Back</router-link>
               <a v-if='edit' class="button button-primary" style="float: right"
                  v-on:click="updateProducer()">Update</a>
               <a v-if='create' class="button button-primary" style="float: right"
                  v-on:click="createProducer()">Create</a>
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
               title: "Producer Data",
               prof: {'producer_name':'','country':'','founded':'','genere':'','title':''},
             }
           },
           created () {
            this.findProducer(app.$route.params.id)
           },
           methods: {
             findProducer: function(id) {
               var producer = app.producers.find(
                 function(x) { return x.id == id; });
               if (producer!=null)
                 Object.assign(this.producer,producer);
             },
             updateProducer: function() {
               this.prof['_method'] = 'PUT';
               var id = app.$route.params.id;
               fetch('/server/producer/'+id,
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.producer)})
                 .then((data) => {
                   var index = app.producers.findIndex(
                      function(x) { return x.id == id; });
                   app.producers[index] = this.producer;
                   router.push('/producer');
                 }
               )
             },
             createProducer: function() {
               fetch('/server/producer',
                 { headers: {'Content-Type':'application/json'},
                   method: 'POST',
                   body: JSON.stringify(this.producer)})
                 .then((data) => {
                    app.producers.push(this.producer);
                    router.push('/producer');
                 }
               )
             }
           }
         }
         </script>