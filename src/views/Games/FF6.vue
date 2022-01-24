<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container>
         <div class="games">
      <div
        class="games__item"
        v-for="game in games"
        :key="game.id"
      >
        <h1>{{ game.title }}</h1>
        <div>
          <img :src="game.picture" :alt="game.name" />
        </div>
        <span>{{ game.platform }} - {{ game.releaseDate }}</span>
        <h3>{{ game.description }}</h3>
        
      </div>
    </div>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "FF6",
  components: {
    Navbar,
  },
  computed: {
    games() {
      return this.$store.state.gamesFilter.slice(5, 6)
    }
  },
  mounted() {
    this.$store.dispatch("getGames");
  }
};
</script>

<style>
img {
  width: 400px;
  height: 100px;
}
</style>
