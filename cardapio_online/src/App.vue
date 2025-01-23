<template>
  <v-app>
    <v-main :style="computedBackgroundStyle">
      <loginUsers v-if="!useAppStore.state.isLoggedIn" />
      <AppNavbar/>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/navbar.vue'
import loginUsers from './components/login.vue'
import store from './stores/app'

export default {
  components:{
    AppNavbar,
    loginUsers
  },
  name: 'App',

  data: () => ({
  }),
  methods: {
    handleLoginSuccess() {
      this.useAppStore.state.isLoggedIn = true;
    }
  },
  computed: {
    useAppStore() {
      return store;
    },
    computedBackgroundStyle() {
      const isLoggedIn = this.useAppStore.state.isLoggedIn;
      return isLoggedIn
        ? `
          background-image: url('https://img.elo7.com.br/product/zoom/2E829BB/papel-de-parede-adesivo-fast-food-fundo-preto-lanchonete-papel-de-parede-lavavel.jpg'); 
          background-color: #f0f0f0; 
          background-size: cover; 
          background-position: center;
        `
        : 'background: linear-gradient(135deg, #FF6F00, #212121);';
    },
  }
}
</script>
