<template>
  <div class="artists-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Artist Name</th>
            <th scope="col">Artist Song Titles</th>
            <th scope="col">Song Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artist in filterBy(artists, titleFilter, 'title')">
            <td>
              <router-link v-bind:to="'/artists/'">
                {{artist.name}}
              </router-link>
            </td>
            <td>{{artist.name}}</td>
            <td>{{song.title}}</td>
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
      artists: [],
      currentArtist: {},
      titleFilter: ''
    };
  },
  created: function() {
    axios.get("/api/artists")
      .then(response => {
        this.artists = response.data;
      });
  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
};
</script>














