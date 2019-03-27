<template>
  <div class="artists-new">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <div class="login">
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>New Artist</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Artist Name:</label>
            <input type="name" class="form-control" v-model="newArtistName">
          </div>
          <input type="submit" class="btn btn-primary" value="Create">
        </form>
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
      newArtistName: "",
      errors: [] 
    };
  },
  created: function() {
    axios
      .get("api/artists")
      .then(response => {
        this.artists = response.data;
      });
  },

  methods: {
    submit: function() {
      var params =  {
                      name: this.newArtistName
                    };
      axios.post("/api/artists/", params)
        .then(response => {
          console.log("Chord Successfully Created!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
  };
</script>