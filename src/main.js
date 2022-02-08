import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueTypedJs from 'vue-typed-js'

Vue.use(VueTypedJs)

Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(IconsPlugin)
Vue.config.productionTip = false

import firebase from 'firebase'
import 'firebase/firestore'

//Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBkeSIpoco4qqdwSATjtbXMYr4YdNa1ahQ",
  authDomain: "project-finalfantasy.firebaseapp.com",
  projectId: "project-finalfantasy",
  storageBucket: "project-finalfantasy.appspot.com",
  messagingSenderId: "974111123086",
  appId: "1:974111123086:web:03193243522f93181a0bdf"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

