<template>
  <div class="chords-edit">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>Edit Chord</h1>
        
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div>
            Note: <input v-model="chord.note">
          </div>
          <div>
            Row: <input v-model="chord.row">
          </div> 
          <div>
            location: <input v-model="chord.location">
          </div>  
          <div>
            song_id: <input v-model="chord.song_id">
          </div>
          <input type="submit" value="Update" class="btn btn-warning">
        </form>
      </div>
    </div>
  </div>
</template>

<style>
  
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      song: {
                id: "",
                title: "",
                lyrics: "",
                artist_id: "",
                category_id: ""
              },
      errors: [],
      categories: [],
      artists: []
    };
  },
  created: function() {
    axios.get("/api/songs/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.song = response.data;
      });

    axios
      .get("/api/categories")
      .then(response => {
        this.categories = response.data;
      });

    axios
      .get("/api/artists")
      .then(response => {
        this.artists = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = {
                    title: this.song.title,
                    lyrics: this.song.lyrics,
                    artist_id: this.song.artist_id,
                    category_id: this.song.category_id
                    };

      axios.patch("/api/songs/" + this.song.id, params)
        .then(response => {
          this.$router.push("/songs/" + this.song.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>






