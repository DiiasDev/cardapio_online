<template>
  <v-app>
    <v-main  style="
  background-image: url('https://img.elo7.com.br/product/zoom/2E829BB/papel-de-parede-adesivo-fast-food-fundo-preto-lanchonete-papel-de-parede-lavavel.jpg'); 
  background-color: #f0f0f0; 
  background-size: cover; 
  background-position: center;">
      <AppNavbar/>
    </v-main>
  </v-app>
</template>


<script>
import AppNavbar from './components/navbar.vue'

export default {
  components:{
    AppNavbar,
  },
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
