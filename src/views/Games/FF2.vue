<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-parallax
        height="100%"
        src="https://cache-eu.finalfantasy.com/assets/web/title/bg_ff2-9ffd3f8b51d738779417123f214ef884f4529b84577c15f8d71e6c2f43fc0a54.jpg"
      >
        <v-row>
          <v-col v-for="game in games" :key="game.id">
            <v-card
              cols="12"
              md="6"
              lg="4"
              max-width="1200"
              class="mx-auto mb-15 frame"
              color="rgba(0, 0, 0, 0.6)"
              shaped
            >
              <v-card-text class="white--text">
                <h2 class="mb-5">
                  {{ game.title }}
                </h2>
                <p>{{ game.platform }} - {{ game.releaseDate }}</p>
                <h3>
                  {{ game.description }}
                </h3>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <div class="pb-16"></div>
      </v-parallax>

      <v-container>
        <div v-for="game in games" :key="game.id">
          <v-row class="mt-10" justify="center">
            <v-col cols="12" md="6" lg="8" xl="8">
              <v-img :src="game.picture" :alt="game.name"> </v-img>
              <v-layout class="mt-5">
                <v-flex xs12 sm6 offset-sm3 lg4 offset-lg4>
                  <v-card>
                    <vuetify-audio
                      color="black"
                      :file="file"
                      :ended="audioFinish"
                    ></vuetify-audio>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-col>
          </v-row>

          <div class="divider mt-15">
            <v-divider color="black"></v-divider>
            <h2>Characters</h2>
            <v-row>
              <v-col
                cols="12"
                md="6"
                lg="4"
                v-for="(character, id) in $store.state.ff2.characters"
                :key="id"
              >
                <v-hover v-slot="{ hover }" open-delay="0">
                  <v-card
                    class="justify-space-around my-5 white--text"
                    color="grey darken-4"
                    :class="{ 'on-hover': hover }"
                    max-width="500"
                    :elevation="hover ? 20 : 4"
                  >
                    <v-img :src="character.image" height="50vh"></v-img>

                    <v-card-title class="white--text">
                      {{ character.name }}
                    </v-card-title>

                    <v-card-subtitle class="white--text text-left">
                      Job: {{ character.job }}
                      <v-spacer></v-spacer>
                      Age: {{ character.age }}
                    </v-card-subtitle>

                    <v-card-actions>
                      <v-expansion-panels>
                        <v-expansion-panel
                          class="mb-1"
                          v-for="(item, i) in 1"
                          :key="i"
                        >
                          <v-expansion-panel-header color="grey lighten-4">
                            More...
                          </v-expansion-panel-header>
                          <v-expansion-panel-content color="grey lighten-4">
                            {{ character.description }}
                          </v-expansion-panel-content>
                        </v-expansion-panel>
                      </v-expansion-panels>
                    </v-card-actions>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>

            <v-divider color="black" class="mb-16 mt-5"></v-divider>
            <v-layout>
              <v-flex>
                <iframe
                  class="mx-2"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3XHVOjdBDbc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  class="mx-2"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/U47tYvxG21o?start=776"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </v-flex>
            </v-layout>
            <v-divider color="black" class="mb-16 mt-16"></v-divider>
          </div>
        </div>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "FF2",
  components: {
    Navbar,
    Footer,
    VuetifyAudio: () => import("vuetify-audio"),
  },
  data: () => ({
    show: false,
    file: "https://cache-jp.finalfantasy.com/titles/audio/ff2.mp3",
  }),

  computed: {
    games() {
      return this.$store.state.gamesFilter.slice(1, 2);
    },
  },
  mounted() {
    this.$store.dispatch("getGames");
    this.$store.dispatch("ff2/getAllCharacters");
  },
};
</script>

<style>
.v-parallax {
  margin-top: -130px;
  padding-top: 30%;
}
h2 {
  padding-top: 20px;
  text-decoration: underline;
  font-family: "Barlow Condensed", sans-serif;
  font-size: xx-large;
}
h3 {
  padding-top: 30px;
  font-size: x-large;
  line-height: 150%;
}
.frame {
  border: 10px inset #fff;
  position: relative;
  text-shadow: 2px 2px black;
}
</style>
