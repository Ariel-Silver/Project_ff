<template>
  <v-row no-gutters class="h-100 template-one">
    <v-col 
    cols="12" sm="6" xl="8"
    class="p-5 d-none d-sm-flex justify-content-center align-items-center background-container" :style="{backgroundImage:'url('+backgroundImage+')'}"></v-col>
    <v-col 
    cols="12" sm="6" xl="4"
    class="bg-light p-5 d-flex flex-column justify-content-center align-items-center shadow-lg">
      <div class="text-center my-auto">
        <v-img :src="logo" alt="logo" class="img-fluid mx-auto mb-4"></v-img>
        <div class="title mb-3"><h2>Project Final Fantasy</h2></div>
        <div class="disclaimer font-weight-light">
          <vue-typed-js
            class="d-block"
            :loop="true"
            :strings="['Under construction.', 'We will be back soon!']"
          >
            <span class="typing"></span>
          </vue-typed-js>
        </div>
      </div>
      <router-link :to="{ name: 'Home' }">
              <v-btn class="white--text" color="black" type="submit">Take me back</v-btn>
            </router-link>
      <div class="mt-auto text-center social-media-container">
        <a href="https://www.facebook.com/" target="_blank" class="text-body mx-2 my-3">Facebook</a>
        <a href="https://www.twitter.com/" target="_blank" class="text-body mx-2 my-3">Twitter</a>
        <a href="https://www.linkedin.com/" target="_blank" class="text-body mx-2 my-3">LinkedIn</a>
        <a href="https://www.instagram.com/" target="_blank" class="text-body mx-2 my-3">Instagram</a>
        
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "UnderConstruction",
  data(){
    return {
      logo: require('@/assets/logoff.png'),
      backgroundImage: require('@/assets/tifa.jpg'),
    }
  }
}
</script>

<style lang="scss" scoped>
.template-one{
  .title{
    font-size: 3rem;
  }
  .disclaimer{
    font-size: 1.5rem;
  }
  .background-container{
    background-position: center center;
    background-size: cover;
    box-shadow: inset 0rem 0rem 5rem rgba(0, 0, 0, 0.2) !important;
  }
  .social-media-container{
    a{
      transition: all 1s;
      &:hover{
        color: gray!important;
        text-decoration: none;
      }
    }
  }
}
a {
  text-decoration: none;
}
</style>