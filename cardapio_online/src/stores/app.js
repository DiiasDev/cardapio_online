import { createStore } from 'vuex';

const store = createStore({
  state: () => ({
    modal_carrinho: false, // Define o estado inicial
  }),
  getters: {
    // Getter para acessar o estado do modal
    modalCarrinho: state => state.modal_carrinho,
  },
});

export default store;
