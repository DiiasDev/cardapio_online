<template>
  <v-app>
    <!-- Definindo o estilo de fundo dinamicamente com computedBackgroundStyle -->
    <v-main :style="computedBackgroundStyle" :key="useAppStore.state.selectedOption">
      <!-- Mostrar login se o usuário não estiver logado e a opção não for 'relatorio' -->
      <loginUsers v-if="!useAppStore.state.isLoggedIn && useAppStore.state.selectedOption !== 'relatorio'" />

      <!-- Mostrar navbar se a opção não for 'relatorio' -->
      <AppNavbar v-if="useAppStore.state.selectedOption !== 'relatorio'" />

      <!-- Mostrar relatorioVue se a opção for 'relatorio' -->
      <relatorioVue v-if="useAppStore.state.selectedOption === 'relatorio'" />
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/navbar.vue'
import loginUsers from './components/login.vue'
import relatorioVue from './components/relatorio.vue'
import store from './stores/app'

export default {
  components: {
    AppNavbar,
    loginUsers,
    relatorioVue
  },
  name: 'App',

  computed: {
    useAppStore() {
      return store;
    },

    // Função para calcular o estilo de fundo dinamicamente
    computedBackgroundStyle() {
      const isLoggedIn = this.useAppStore.state.isLoggedIn;
      const selectedOption = this.useAppStore.state.selectedOption;

      // Caso esteja logado
      if (isLoggedIn) {
        if (selectedOption === 'navbar') {
          // Aplica um degradê suave e sutil do preto para tons mais claros, concentrado no meio da tela
          return `
            background-image: linear-gradient(to right top, #f7f7f7, #e5e6ee, #d0d6e6, #b8c8de, #9dbad5);
            background-size: cover;
            background-position: center;
            min-height: 100vh; /* Garante que o fundo ocupe toda a altura da tela */
          `;
        } else if (selectedOption === 'relatorio') {
          // Caso a opção seja 'relatorio', um fundo neutro com degradê sutil
          return `
            background-image: linear-gradient(to right top, #f7f7f7, #e5e6ee, #d0d6e6, #b8c8de, #9dbad5);
            background-size: cover;
            background-position: center;
            min-height: 100vh;
          `;
        } else {
          return `
            background: radial-gradient(circle, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.1));
            background-size: cover;
            background-position: center;
          `;
        }
      } else {
        // Caso não esteja logado, aplica o degradê com cores mais sóbrias
        return 'background: linear-gradient(135deg, #FF6F00, #212121);';
      }
    }
  }
}
</script>
