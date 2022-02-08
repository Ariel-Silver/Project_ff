<template>
  <v-app>
    <Navbar></Navbar>
    <v-main>
      <v-container fluid>
        <div class="heroBlock">
          <v-carousel cycle show-arrows-on-hover>
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              :href="item.link"
            >  
            </v-carousel-item>
          </v-carousel>
        </div>

        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-card dark color="rgba(0, 0, 0, 0.6)">
                <v-card-text class="white--text">
                  <h1 class="mb-10">Who are we?</h1>
                  <p>Hello and welcome to Project Final Fantasy!</p>
                  <p>
                    We intend to be your library on Final Fantasy games series
                    of Japanese role-playing games developed and published by
                    Square Enix.
                  </p>
                  <p>
                    To this point, PFF has information covering the main
                    numerical releases and over 120 character descriptions.
                  </p>
                  <p>
                    The future of the project holds a lot of exciting news as
                    new features and much more information is on the way!
                  </p>
                </v-card-text>
                <v-img
                  class="mx-auto mt-5"
                  max-height="600"
                  max-width="300"
                  src="https://images.wikidexcdn.net/mwuploads/esssbwiki/a/ae/latest/20180829144548/Artwork_de_un_chocobo_de_la_subsaga_Chocobo.png"
                ></v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>

        <v-row class="white--text">
          <v-col class="mb-15" cols="12" sm="6" xl="8">
            <h3 class="underline">News</h3>
            <v-card outlined class="mx-auto mt-10 hover" max-width="344">
              <v-img
                src="https://i.ibb.co/8NsN9Ln/logo-pixel-1.png"
                height="200px"
              ></v-img>
              <v-card-title>
                2D Pixel Remasters with Updated Graphics and Audio
              </v-card-title>
              <v-card-actions>
                <a href="https://na.finalfantasy.com/news/1742">
                  <v-btn outlined color="black"> Visit </v-btn>
                </a>
              </v-card-actions>
            </v-card>

            <v-card outlined class="mx-auto mt-10 hover" max-width="344">
              <v-img
                src="https://www.lavanguardia.com/files/image_449_220/uploads/2019/09/21/5fa53380e73b5.png"
                height="200px"
              ></v-img>
              <v-card-title>
                Final Fantasy 14 is a huge reason behind financial success in
                2021
              </v-card-title>
              <v-card-actions>
                <a
                  href="https://www.pcgamer.com/square-enix-says-final-fantasy-14-is-a-huge-reason-behind-financial-success-in-2021/"
                >
                  <v-btn outlined color="black"> Visit </v-btn>
                </a>
              </v-card-actions>
            </v-card>

            <v-card name="news" outlined class="mx-auto mt-10 hover" max-width="344">
              <v-img
                src="https://thesupertimes.com/wp-content/uploads/2022/01/Tifa-Lockhart-Has-Become-A-Wholesome-Italian-Icon-900x400.jpg"
                height="200px"
              ></v-img>
              <v-card-title>
                Italian Senate Accidentally Plays 30 Seconds Of NSFW Tifa
                Lockhart Video
              </v-card-title>
              <v-card-actions>
                <a
                  href="https://www.thegamer.com/italian-senate-tifa-lockhart-hentai/"
                >
                  <v-btn outlined color="black"> Visit </v-btn>
                </a>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" xl="4">
            <h3 class="underline">Sites of interest</h3>
            <v-card
              outlined
              class="mx-auto mt-10"
              max-width="400"
              max-height="315"
            >
              <a href="https://store.na.square-enix-games.com/en_US/">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://i.ibb.co/GFtLFkd/sqs.png"
                >
                </v-img>
              </a>
            </v-card>
            <v-card
              outlined
              class="mx-auto mt-10"
              max-width="400"
              max-height="315"
            >
              <a href="https://na.finalfantasy.com/">
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://i.ibb.co/h7TrBPG/ff-portal-site-twitter.jpg"
                >
                </v-img>
              </a>
            </v-card>
            <v-card
              outlined
              class="mx-auto mt-10"
              max-width="400"
              max-height="315"
            >
              <a
                href="https://finalfantasy.fandom.com/wiki/Final_Fantasy_Wiki/"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://i.ibb.co/HXBD8pZ/Wiki.png"
                >
                </v-img>
              </a>
            </v-card>
            <v-card
              outlined
              class="mx-auto mt-10"
              max-width="400"
              max-height="315"
            >
              <a
                href="https://freetrial.finalfantasyxiv.com/?_ga=2.71493267.1085513993.1644242979-1709371758.1642961886"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  src="https://sysrqmts.com/images/games/final-fantasy-xiv-online-free-trial.jpg"
                >
                </v-img>
              </a>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      items: [
        {
          src: require("@/assets/7G.jpg"),
          link: "https://ffvii-remake.square-enix-games.com/en-us",
        },
        {
          src: require("@/assets/16.jpg"),
          link: "https://na.finalfantasyxvi.com/",
        },
        {
          src: require("@/assets/14.jpg"),
          link: "https://na.finalfantasyxiv.com/endwalker/",
        },
        {
          src: require("@/assets/tactics.jpg"),
          link: "https://play.google.com/store/apps/details?id=com.square_enix.android_googleplay.FFT_en2&hl=es_CL&gl=US",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.v-main {
  background-color: black;
}
.heroBlock {
  position: relative;
  margin-top: -12px;

  .v-window {
    @media only screen and (max-width: 599px) {
      height: 220px !important;
    }
  }
  .title {
    color: white;
    text-shadow: 2px 2px black;
    margin-top: 08%;
  }
}
p {
  font-size: large;
  margin-top: -12px;
}
a {
  text-decoration: none;
}
.hover {
  position: relative;
  top: 0;
  transition: top ease 0.5s;
}
.hover:hover {
  top: -10px;
}
.underline {
  display: inline-block;
  position: relative;
  color: white;
}

.underline:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
