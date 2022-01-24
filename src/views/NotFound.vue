<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
        <h2>ERROR 404.
        </h2>
        <h3>Pagina no encontrada.</h3>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "NotFound",
  components: {
    Navbar,
  },
};
</script>

<style></style>