<template>
  <div class="songs-index">

    <!-- Section - Services Start -->
    <section id="services" class="bg-gray-dark-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8 text-center">
                    <h3 class="font-alt font-w-600 letter-spacing-2 title-extra-large text-uppercase text-white">All Songs</h3>
          
                    <span class="bg-base-color mt-4 mx-auto sep-line-medium-thick-long"></span>
                </div>
                <!-- //.col-lg-8 -->
            </div>
            <!-- //.row -->
            
            <div class="row mt-5 pt-5">
                <div class="col-lg-4 bg-gray-dark-3 border-md-0 border-bottom border-right border-gray-2" data-mh="mh-col-services" v-for="song in filterBy(songs, titleFilter, 'title')">
                  <router-link v-bind:to="'/songs/' + song.id">
                    <div class="px-lg-3 py-5 py-lg-4 text-center text-lg-left">
                        <i class="icon-Chess text-base-color title-extra-large"></i>
                        <span class="d-block font-alt letter-spacing-2 mt-2 text-extra-large text-uppercase text-white">{{ song.title }}</span>
                        <span class="bg-base-color ml-lg-0 mt-3 mx-auto sep-line-thick"></span>
                        <!-- <p class="m-0 mt-3 text-gray text-medium">{{ song.lyrics }}</p> -->
                        
                    </div>
                    <!-- //.px-lg-3 -->
                  </router-link>
                </div>
                <!-- //.col-lg-4 -->
                
            </div>
            <!-- //.row -->
        </div>
        <!-- //.container -->
    </section>
    <!-- //Section - Services End -->

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
      songs: [],
      currentSong: {},
      titleFilter: ''
    };
  },
  created: function() {
    axios.get("/api/songs")
      .then(response => {
        this.songs = response.data;
      });
  },
  methods: {
    
  },
  mixins: [Vue2Filters.mixin]
};
</script>














