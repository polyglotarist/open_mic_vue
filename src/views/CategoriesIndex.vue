<template>
  <div class="categories-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Category Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in filterBy(categories, titleFilter, 'name')">
            <td>
              <router-link v-bind:to="'/categories/' + category.id">
                {{category.name}}
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
      categories: [],
      currentCategory: {},
      titleFilter: ''
    };
  },
  created: function() {
    axios.get("/api/categories")
      .then(response => {
        this.categories = response.data;
      });
  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
};
</script>














