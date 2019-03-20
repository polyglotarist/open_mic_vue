<template>
  <div class="songs-show">
    <div class="container">
      <h1>{{song.title}}</h1>
      <!-- <h3>by {{song.artist.name}}</h3> -->
      <p>{{song.lyrics}}</p>
      <div v-for="lines in song.formatted.lyrics">
        <pre v-for="line in lines">{{ line }}</pre>
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
              formatted: {
                lyrics: []
              }
            }
    };
  },
  created: function() {
    axios.get("/api/songs/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.song = response.data;
      });
  },
  methods: {
    destroySong: function() {
      axios.delete("/api/songs/" + this.song.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
    }
  }
}
</script>






