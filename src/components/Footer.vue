<template>
  <v-container>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading"
            >Connected with us on social networks!</strong
          >

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <a :href="icon.url" :target="icon.target">
            <v-icon size="24px">
              {{ icon.name }}
            </v-icon>
            </a>
          </v-btn>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Ariel Abarca P.</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
        {
            name:'fab fa-facebook',
            url: 'https://www.facebook.com/',
            target: '_blank'
        },
        {
            name:'fab fa-twitter',
            url: 'https://www.twitter.com/',
            target: '_blank'
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/',
            target: '_blank'
        },
        {
            name:'fab fa-instagram',
            url: 'https://www.instagram.com/',
            target: '_blank'
        }
      ]
  }),
};
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
</style>