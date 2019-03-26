<template> 
  <div class="songs-edit">
    <h1>Edit Song</h1>
    
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        Title: <input v-model="song.title">
      </div>
      <div>
          Lyrics: <textarea rows="20" cols="40" v-model="song.lyrics"></textarea>
        </div>
      <div>
        Chords List: <input v-model="song.chords_list">
      </div>
      <div>
        Category: 
        <select v-model="song.category_id">
          <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
        </select>
      </div>

       <div>
        Artist: 
        <select v-model="song.artist_id">
          <option v-for="artist in artists" v-bind:value="artist.id">
           {{ artist.name }}
          </option>
        </select>
      </div>
      <input type="submit" value="Update" class="btn btn-warning">
    </form>
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
                    chords: this.song.chords_list,
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






