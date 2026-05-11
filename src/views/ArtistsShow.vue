<template>
  <div class="artists-show">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1>{{ artist.name }}</h1>

        <router-link class="btn btn-warning m-2" :to="'/artists/' + artist.id + '/edit'">Edit</router-link>
        <button class="btn btn-danger m-2" v-on:click="destroyArtist()">Delete</button>

        <h3 class="mt-4">Songs</h3>
        <div v-if="songs.length === 0">No songs yet.</div>
        <ul class="list-group">
          <li class="list-group-item" v-for="song in songs" :key="song.id">
            <router-link :to="'/songs/' + song.id">{{ song.title }}</router-link>
          </li>
        </ul>
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
      artist: { id: "", name: "" },
      songs: []
    };
  },
  created: function() {
    var id = this.$route.params.id;
    axios.get("/api/artists/" + id)
      .then(response => {
        this.artist = response.data;
      });
    axios.get("/api/songs")
      .then(response => {
        this.songs = response.data.filter(s => s.artist_id == id);
      });
  },
  methods: {
    destroyArtist: function() {
      axios.delete("/api/artists/" + this.artist.id)
        .then(response => {
          this.$router.push("/artists");
        });
    }
  }
};
</script>
