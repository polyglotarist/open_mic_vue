<template> 
  <div class="songs-new">
    <h1>New Song</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        <div>
          Title: <input v-model="newSongTitle">
        </div>
        <div>
          Lyrics: <textarea rows="20" cols="40"v-model="newSongLyrics"></textarea>
        </div>
        <div>
          Category: 
          <select v-model="newCategoryId">
            <option v-for="category in categories" v-bind:value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

         <div>
          Artist: 
          <select v-model="newArtistId">
            <option v-for="artist in artists" v-bind:value="artist.id">
              {{ artist.name }}
            </option>
          </select>
        </div>
        <div>
          ChordsList:
          <input v-model="selectedChord" placeholder="Am, GM, C#m, etc..."> 
          <button v-on:click="addChord()">Add Chord</button>
          <ul  v-for="something in customChords">
            <li>{{ something }}</li>
          </ul>
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
      newSongTitle: "",
      newSongLyrics: "",
      newCategoryId: "",
      newArtistId: "",
      errors: [],
      categories: [],
      artists: [],
      chords: [],
      customChords: [],
      selectedChord: ""
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
                    title: this.newSongTitle,
                    lyrics: this.newSongLyrics,
                    artist_id: this.newArtistId,
                    category_id: this.newCategoryId,
                    chords: this.customChords
                    };
      axios.post("/api/songs/", params)
        .then(response => {
          console.log("Song Successfully Created!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    addChord: function() {
      this.customChords.push(this.selectedChord);
    }
  }
  };
</script>