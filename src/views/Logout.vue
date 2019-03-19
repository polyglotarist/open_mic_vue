<template>
  <div class="logout">
    <router-link to="/logout">Logout</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    this.$router.push("/");
  }
};
</script>