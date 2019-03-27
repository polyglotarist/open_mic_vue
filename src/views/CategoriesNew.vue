<template>
  <div class="categories-new">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <div class="login">
      <div class="container">
        <form v-on:submit.prevent="submit()">
          <h1>New Category</h1>
          <ul>
            <li class="text-danger" v-for="error in errors">{{ error }}</li>
          </ul>
          <div class="form-group">
            <label>Category Name:</label>
            <input type="name" class="form-control" v-model="newCategoryName">
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
      newCategoryName: "",
      errors: []
    };
  },
  created: function() {
    axios
      .get("api/categories")
      .then(response => {
        this.categories = response.data;
      });
  },

  methods: {
    submit: function() {
      var params = {
                     name: this.newCategoryName,
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