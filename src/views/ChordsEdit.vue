<template>
  <div class="chords-edit">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-10 offset-1">
        <h1>Edit Chord</h1>

        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>

        <form v-on:submit.prevent="submit()">
          <div class="form-group">
            Note: <input class="form-control" v-model="chord.note">
          </div>
          <div class="form-group">
            Row: <input class="form-control" v-model="chord.row">
          </div>
          <div class="form-group">
            Location: <input class="form-control" v-model="chord.location">
          </div>
          <div class="form-group">
            <label>Song:</label>
            <select class="form-control" v-model="chord.song_id">
              <option v-for="song in songs" :key="song.id" v-bind:value="song.id">
                {{ song.title }}
              </option>
            </select>
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
      chord: {
        id: "",
        note: "",
        row: "",
        location: "",
        song_id: ""
      },
      errors: [],
      songs: []
    };
  },
  created: function() {
    axios.get("/api/chords/" + this.$route.params.id)
      .then(response => {
        this.chord = response.data;
      });

    axios.get("/api/songs")
      .then(response => {
        this.songs = response.data;
      });
  },
  methods: {
    submit: function() {
      var params = {
        note: this.chord.note,
        row: this.chord.row,
        location: this.chord.location,
        song_id: this.chord.song_id
      };

      axios.patch("/api/chords/" + this.chord.id, params)
        .then(response => {
          this.$router.push("/chords");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
}
</script>
