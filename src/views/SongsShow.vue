<template> 
  <div class="songs-show">
    <h1>{{song.title}}</h1>
    <div class="row"> 
      <div class="col-md-5">


        <div>
          <h5>Artist: {{ song.artist.name}}</h5>
          <h5>Category: {{ song.category.name}}</h5>
          <h5>Chords: {{ song.chords_list}}</h5>
        </div>

        <div class="row">
          <div class="col-md-4 m-2" v-for="chord in song.chords">
            <img class="img-fluid" :src="'/chord_grids/' + chord.note + '.jpg'">
          </div>
        </div>
        
        <router-link class="btn btn-lg btn-primary m-2" v-bind:to="'/songs/' + song.id + '/edit'">Edit</router-link>
        <button class="btn btn-lg btn-primary m-2" v-on:click="destroySong()">Delete</button>
      </div>

      <div class="col-md-7">
        
        <div v-for="lines in song.formatted.lyrics">
          <pre v-for="line in lines">{{ line }}</pre>
        </div>
      </div>



    </div>
  </div> 
</template>

<style> 
.chord-grid {
  width: 90px;
}
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
              formatted: {
                lyrics: []
              },
              chords: []
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
    // autoScroll: function self.ready() {
    //   $(.scrolltext).scrollTo(0,1000000);
    // }
  }
}
</script>






