<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>

<style></style>
