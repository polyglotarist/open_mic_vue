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
          Lyrics: <input v-model="newSongLyrics">
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
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    title: this.newSongTitle,
                    lyrics: this.newSongLyrics,
                    };
      axios.post("/api/songs", params)
        .then(response => {
          console.log("Song Successfully Created!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
  };
</script>