<template>
  <div class="artists-edit">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>Edit Artist</h1>
        
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div>
            Name: <input v-model="artist.name">
          </div>
          <input type="submit" value="Update" class="btn btn-warning">
        </form>
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
      artist: {
                id: "",
                name: ""
              },
      errors: []
    };
  },
  created: function() {
    axios
      .get("/api/artists" + this.$route.params.id)
      .then(response => {
        this.artist = response.data;
      });
  },
  methods: {
    submit: function() {
      var params =  {
                      name: this.artist.name
                    };
      axios
      .patch("/api/artists/" + $route.params.id, params)
      .then(response => {
        this.$router.push("/artists" + this.artist.id);
      }).catch(error =>{
        this.errors = errors.response.data.errors;
      });
    }
  }
}
</script>






