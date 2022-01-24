<template>
  <div>
    <v-navigation-drawer
      app
      v-model="drawer"
      color="grey darken-4"
      class="white--text"
      ><v-row justify="space-around" class="mt-12">
        <v-avatar size="100">
          <img
            src="https://i.ibb.co/b2ZZx5W/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg"
            alt="Moogle"
          />
        </v-avatar>
      </v-row>
      <v-list class="white--text mt-8">
        <v-list-item
          v-for="(item, $index) in items"
          :key="$index"
          link
          :to="item.to"
          class="text-decoration-none"
        >
          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      elevation="20"
      prominent
      src="https://i.ibb.co/WsyMfBJ/banner.png"
      app
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer">
        <v-icon size="50">mdi-menu-open</v-icon>
      </v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      
      <router-link style="text-decoration: none" :to="{ name: 'Home' }">
        <v-btn fab depressed large dark color="black" class="mt-5">
          <v-icon size="50">mdi-home</v-icon>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    user: null,
    drawer: false,
    items: [
      {
        title: "Final Fantasy I",
        to: "/ff1",
      },
      {
        title: "Final Fantasy II",
        to: "/ff2",
      },
      {
        title: "Final Fantasy III",
        to: "/ff3",
      },
      {
        title: "Final Fantasy IV",
        to: "/ff4",
      },
      {
        title: "Final Fantasy V",
        to: "/ff5",
      },
      {
        title: "Final Fantasy VI",
        to: "/ff6",
      },
      {
        title: "Final Fantasy VII",
        to: "/ff7",
      },
      {
        title: "Final Fantasy VIII",
        to: "/ff8",
      },
      {
        title: "Final Fantasy IX",
        to: "/ff9",
      },
      {
        title: "Final Fantasy X",
        to: "/ff10",
      },
      {
        title: "Final Fantasy XI",
        to: "/ff11",
      },
      {
        title: "Final Fantasy XII",
        to: "/ff12",
      },
      {
        title: "Final Fantasy XIII",
        to: "/ff13",
      },
      {
        title: "Final Fantasy XIV",
        to: "/ff14",
      },
      {
        title: "Final Fantasy XV",
        to: "/ff15",
      },
    ],
  })
};
</script>

<style>
</style>
