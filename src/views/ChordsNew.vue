 <template>
   <div class="chords-new">
     <h1>New Chord</h1>

     <ul>
       <li v-for="error in errors">{{ error }}</li>
     </ul>

     <form v-on:submit.prevent="submit()">
       <div>
         <div>
           Note: <input v-model="newChordNote">
         </div>
          <div>
           Row: <input v-model="newChordNote">
         </div> 
         <div>
           Location: <input v-model="newChordNote">
         </div> 
         <div>
           Song_id<input v-model="newSongId">
         </div>
         <input type="submit" value="Create">
         </div>
       </form>

   </div>
 </template>
  
 <style>
 </style>

 <script>
   var axios = require("axios");
   export default {
   data: function() {
     return {
       newchordNote: "",
       newchordRow: "",
       newLocation: "",
       newSongId: "",
       errors: []
     };
   },
   created: function() {
     axios
       .get("/api/categories")
       .then(response => {
         this.categories = response.data;
       });
       
     axios
       .get("api/artists")
       .then(response => {
         this.artists = response.data;
       });

      axios
        .get("api/chords")
        .then(response => {
          this.chords = response.data;
        });

   },
   methods: {
     submit: function() {
       var params = {
                     note: this.newchordNote,
                     row: this.newchordRow,
                     location: this.newChordLocation,
                     Song_id: this.newSongId
                     };
       axios.post("/api/Chords/", params)
         .then(response => {
           console.log("Chord Successfully Created!", response.data);
           this.$router.push("/");
         })
         .catch(error => {
           this.errors = error.response.data.errors;
         });
     }
   }
   };
 </script>