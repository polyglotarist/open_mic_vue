<template> 
  <div class="songs-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Artist</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="song in filterBy(songs, titleFilter, 'title')">
            <td>
              <router-link v-bind:to="'/songs/' + song.id">
                {{song.title}}
              </router-link>
            </td>
            <td>{{song.artist.name}}</td>
            <td>{{song.category.name}} </td>
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
      titleFilter: ''
    };
  },
  created: function() {
    axios.get("/api/songs")
      .then(response => {
        this.songs = response.data;
      });
  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
};
</script>














