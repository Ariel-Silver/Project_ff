<template>
  
    <v-footer 
    dark >
    <v-container>
      <v-card class="flex" flat tile>
        <v-card-title>
          <strong class="subheading"
            >Project Final Fantasy community</strong
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
      </v-container>
    </v-footer>
  
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

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;
}
</style>