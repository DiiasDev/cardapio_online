import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    modal_carrinho: false, // Define o estado inicial
    modal_cadastro: false,
    modal_informacoes: false,
    modal_ultimos_pedidos: false,
    isLoggedIn: false,
    selectedRelatorio: false,
    selectedOption: null
  }),
  getters: {
    // Getter para acessar o estado do modal
    modalCarrinho: state => state.modal_carrinho,
  },
  mutations: {
    setSelectedOption(state, option) {
      state.selectedOption = option;
    },
    setIsLoggedIn(state, status) {
      state.isLoggedIn = status;
    },
  },
});

export default store;
