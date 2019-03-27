<template> 
  <div class="songs-edit"> 
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>Edit Song</h1>
        
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control form-control-lg" placeholder="title" autofocus="" v-model="song.title">
          </div>

          <div class="form-group">
            <label>Lyrics</label>
            <textarea class="form-control form-control-lg" rows="20" cols="40" placeholder="lyrics" v-model="song.lyrics"></textarea>
          </div>

          <div class="form-group">
            <label>Chords</label>
            <input type="text" class="form-control form-control-lg" placeholder="chords" v-model="song.chords_list">
          </div>

          <div class="form-group">
            <label>Category</label>
            <select class="form-control form-control-lg" v-model="song.category_id">
              <option  v-for="category in categories" v-bind:value="category.id">
                {{ category.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label>Artist</label>
            <select class="form-control form-control-lg" v-model="song.artist_id">
              <option v-for="artist in artists" v-bind:value="artist.id">
                {{ artist.name }}
              </option>
            </select>
          </div>

          <div class="form-group action">
            <button type="submit" class="btn btn-lg btn-primary">Update</button>
          </div>
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
                chords_list: "",
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
                    chords_list: this.song.chords_list,
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






