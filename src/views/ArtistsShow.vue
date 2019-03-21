<template>
  <div class="artists-new">
    <h1>New Artist</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        <div>
          Title: <input v-model="newAtristName">
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
                    title: this.newArtistName,
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