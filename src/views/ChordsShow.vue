<template>
  <div class="chords-show">
    <div class="container">
      <h1>{{chord.row}}</h1>
      <h1>{{chord.location}}</h1>
      <h1>{{chord.note}}</h1>
      <router-link class="nav-link" v-bind:to="'/chords/' + chord.id + '/edit'">Edit</router-link>
      <button v-on:click="destroyChord()">Delete</button>  
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
      chord: {
              id: "",
              row: "",
              location: "",
              note: ""
            }
    };
  },
  created: function() {
    axios.get("/api/chords/" + this.$route.params.id )
      .then(response => {
        console.log(response.data);
        this.chord = response.data;
      });
  },
  methods: {
    destroyChord: function() {
      axios.delete("/api/chords/" + this.chord.id)
        .then(response => {
          console.log("Success", response.data);
          this.$router.push("/");
        });
    }
  }
}
</script>






