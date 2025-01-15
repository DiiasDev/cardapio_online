// src/stores/app.ts
import { createStore } from 'vuex';

interface State {
  items: string[];
  modal_carrinho: boolean;
}

const store = createStore<State>({
  state: {
    items: [],
    modal_carrinho: false,
  },
  mutations: {
    setModalCarrinho(state, value: boolean) {
      state.modal_carrinho = value;
    },
    addItem(state, item: string) {
      state.items.push(item);
    },
    removeItem(state, item: string) {
      state.items = state.items.filter(i => i !== item);
    },
  },
  actions: {
    async fetchItems({ commit }) {
      const response = await fetch('/api/items');
      const data = await response.json();
      data.forEach((item: string) => commit('addItem', item));
    },
  },
  getters: {
    getModalCarrinho(state) {
      return state.modal_carrinho;
    },
    getItems(state) {
      return state.items;
    },
  },
});

export default store;
