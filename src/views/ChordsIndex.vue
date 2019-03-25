<template>
  <div class="chords-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Chords</th>
            <th scope="col">Song Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="chord in filterBy(chords, noteFilter, 'note')">
            <td>
              <router-link v-bind:to="'/chords/' + chord.id">
                {{song.chords_list}}
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
      </table>
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
      noteFilter: ''
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














