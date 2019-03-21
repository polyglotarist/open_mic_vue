<template>
  <div class="categories-index">
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categorie in filterBy(categories, titleFilter, 'title')">
            <td>
              <router-link v-bind:to="'/categories/' + categorie.id">
                {{categorie.title}}
              </router-link>
            </td>
            <td>{{categorie.categorie.name}}</td>
            <td>{{categorie.category.name}} </td>
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














