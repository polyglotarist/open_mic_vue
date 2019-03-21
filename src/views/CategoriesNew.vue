<template>
  <div class="songs-new">
    <h1>New Catogory</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <div>
        <div>
          Title: <input v-model="newCatogoryTitle">
        </div>
        <div>
          Lyrics: <input v-model="newCatogoryLyrics">
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
      newCatogoryTitle: "",
      newCatogoryLyrics: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    submit: function() {
      var params = {
                    title: this.newCatogoryTitle,
                    lyrics: this.newCatogoryLyrics,
                    };
      axios.post("/api/categories", params)
        .then(response => {
          console.log("Category Successfully Created!", response.data);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
  };
</script>