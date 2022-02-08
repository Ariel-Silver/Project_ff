<template>
  <v-app>
    <v-main>
      <v-container>
        <h2 class="mt-15">ERROR 404.</h2>
        <div
          class="d-flex flex-column justify-space-between align-center mt-15"
        >
          <v-img
            src="https://i.imgur.com/9yc9GQK.gif"
            max-height="150"
            max-width="150"
          >
          </v-img>
        </div>
        <h3>Page not found.</h3>
        <p>Page no longer exists or the URL is incorrect.</p>
        <router-link :to="{ name: 'Home' }">
          <v-btn class="white--text" color="black" type="submit"
            >Take me back</v-btn
          >
        </router-link>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  name: "NotFound",
  components: {
    Footer,
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>