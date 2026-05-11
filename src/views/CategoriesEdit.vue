<template>
  <div class="categories-edit">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>Edit Category</h1>

        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div class="form-group">
            Name: <input class="form-control" v-model="category.name">
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
var axios = require("axios");
export default {
  data: function() {
    return {
      category: { id: "", name: "" },
      errors: []
    };
  },
  created: function() {
    axios.get("/api/categories/" + this.$route.params.id)
      .then(response => {
        this.category = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = { name: this.category.name };
      axios.patch("/api/categories/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/categories/" + this.category.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
