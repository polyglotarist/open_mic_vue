<template>
  <div class="categories-show">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1>{{ category.name }}</h1>

        <router-link class="btn btn-warning m-2" :to="'/categories/' + category.id + '/edit'">Edit</router-link>
        <button class="btn btn-danger m-2" v-on:click="destroyCategory()">Delete</button>

        <h3 class="mt-4">Songs</h3>
        <div v-if="songs.length === 0">No songs in this category yet.</div>
        <ul class="list-group">
          <li class="list-group-item" v-for="song in songs" :key="song.id">
            <router-link :to="'/songs/' + song.id">{{ song.title }}</router-link>
          </li>
        </ul>
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
      category: { id: "", name: "" },
      songs: []
    };
  },
  created: function() {
    var id = this.$route.params.id;
    axios.get("/api/categories/" + id)
      .then(response => {
        this.category = response.data;
      });
    axios.get("/api/songs")
      .then(response => {
        this.songs = response.data.filter(s => s.category_id == id);
      });
  },
  methods: {
    destroyCategory: function() {
      axios.delete("/api/categories/" + this.category.id)
        .then(response => {
          this.$router.push("/categories");
        });
    }
  }
};
</script>
