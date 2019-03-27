<template>
  <div class="artists-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Artist Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="artist in filterBy(artists, titleFilter, 'name')">
            <td>
              <router-link v-bind:to="'/artists/' + artist.id">
                {{artist.name}}
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














