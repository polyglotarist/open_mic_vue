<template>
  <div class="artists-show">
    <h1>{{artist.name}}</h1>
    <div class="row"></div>
      <div class="col-md-5">
        <div>
          <h5>Songs: {{song.title}}</h5>
          <h5>Categories: {{category.title}}</h5>
        </div>

        <div class="row">
          <div class="col-md-4 m-2" v-for="song in songs">
            {{song.title}}
          </div>
        </div>
      </div>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        <div>
          Name: <input v-model="newAtristName">
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
      newArtistName: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    name: this.newArtistName,
                    };
      axios.post("/api/artists", params)
        .then(response => {
          console.log("Artist Successfully Created!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
  };
</script>