<template> 
  <div class="songs-new">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>New Song</h1>

        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control form-control-lg" placeholder="title" autofocus="" v-model="newSongTitle">
          </div>
          <div class="form-group">
            <label>Lyrics</label>
            <textarea class="form-control form-control-lg" placeholder="lyrics" v-model="newSongLyrics"></textarea>
          </div>
          <div class="form-group">
            <label>Chords</label>
            <input type="text" class="form-control form-control-lg" placeholder="chords" v-model="newSongChords">
          </div>
          <div class="form-group">
            <label>Category</label>
            <select class="form-control form-control-lg" v-model="newCategoryId">
              <option  v-for="category in categories" v-bind:value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Artist</label>
            <select class="form-control form-control-lg" v-model="newArtistId">
              <option v-for="artist in artists" v-bind:value="artist.id">
                {{ artist.name }}
              </option>
            </select>
          </div>
          <hr>
          <div class="form-group action">
            <button type="submit" class="btn btn-lg btn-primary">Create</button>
          </div>
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
      newSongTitle: "",
      newSongLyrics: "",
      newCategoryId: "",
      newArtistId: "",
      errors: [],
      categories: [],
      artists: [],
      chords: []
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
                    chords_list: this.newSongChords
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
    // addChord: function() {
    //   this.customChords.push(this.selectedChord);
    // }
  }
  };
</script>