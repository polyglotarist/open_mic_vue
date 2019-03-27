 <template>
   <div class="chords-new">
     <ul>
       <li v-for="error in errors">{{ error }}</li>
     </ul>

     <div class="login"> 
       <div class="container">
         <form v-on:submit.prevent="submit()">
           <h1>New Chord</h1>
           <ul>
             <li class="text-danger" v-for="error in errors">{{ error }}</li>
           </ul>
           <div class="form-group">
             <label>Chord Note:</label>
             <input type="note" class="form-control" v-model="newChordNote">
           </div>
           <div class="form-group">
             <label>Chord Row:</label>
             <input type="row" class="form-control" v-model="newChordRow">
           </div>
           <div class="form-group">
             <label>Chord Location:</label>
             <input type="location" class="form-control" v-model="newChordLocation">
           </div>
           <select v-model="newSongId">
             <option v-for="song in songs" v-bind:value="song.id">
               {{ song.title }}
             </option>
           </select>

           <input type="submit" class="btn btn-primary" value="Create">
         </form>
       </div>
     </div>
   </div>
 </template>
  
 <style>
 </style>

 <script>
   var axios = require("axios");
   export default {
   data: function() {
     return {
       newChordNote: "",
       newChordRow: "",
       newChordLocation: "",
       newSongId: "",
       newSongTitle: "",
       errors: [],
       songs: []
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

      axios
        .get("api/songs")
        .then(response => {
          this.songs = response.data
        });
   },
   methods: {
     submit: function() {
       var params = {
                     note: this.newChordNote,
                     row: this.newChordRow,
                     location: this.newChordLocation,
                     song_id: this.newSongId,
                     title: this.newSongTitle
                     };
       axios.post("/api/chords/", params)
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