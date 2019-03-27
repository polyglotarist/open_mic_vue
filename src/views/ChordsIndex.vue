<template>
  <div class="chords-index">
    <div class="container">
      <div class="row">
        <img v-for="chordName in chordImages" :src="'/chord_grids/' + chordName + '.jpg'">
      </div>
      <!-- <table class="table">
        <thead>
          <tr>
            <th scope="col">Chords</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="chord in filterBy(chords, titleFilter, 'note')">
            <td>
              <router-link v-bind:to="'/chord_grids/'">
                <img class="img-fluid" :src="'/chord_grids/' + chord + '.jpg'">
              </router-link>
            </td>
          </tr>
          <tr v-for="song in filterBy(songs, titleFilter, 'title')">
            <td>
              <router-link v-bind:to="'/chords/' + chord.id">
                {{song.title}}
              </router-link>
            </td> 
          </tr>
        </tbody>
      </table> -->
    </div>             
  </div>
</template>
 
<style>
</style>

<script>
var axios = require('axios');
import Vue2Filters from "vue2-filters";

export default {
  data: function() {
    return {
      songs: [],
      currentSong: {},
      chords: [],
      currentChord: {},
      noteFilter: '',
      chordImages: ['A', 'Am', 'C', 'D', 'Dm', 'E', 'Em', 'E9', 'F', 'G']
    };
  },
  created: function() {
    axios
      .get("api/songs")
      .then(response => {
        this.songs = response.data
      });

    axios
      .get("/api/chords")
      .then(response => {
        this.chords = response.data;
      });

  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
};
</script>














