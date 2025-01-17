<template>
    <v-dialog v-model="useAppStore.state.modal_carrinho" max-width="500px" persistent>
      <v-card class="pa-4" elevation="4" style="border-radius: 16px; overflow: hidden;">
        <!-- Título do Modal -->
        <v-card-title class="headline" style="font-weight: 600; color: #333;">
          Meu Carrinho
        </v-card-title>
  
        <!-- Conteúdo do Carrinho -->
        <v-card-text class="text-body-1" style="color: #555;">
          <!-- Aqui você pode colocar os itens do carrinho, por exemplo -->
          <p>Conteúdo do carrinho</p>
        </v-card-text>
  
        <!-- Botões do Modal -->
        <v-card-actions class="justify-end" style="padding-top: 0;">
          <v-btn
            text
            color="primary"
            @click="fecharModal"
            style="font-weight: 500; color: #007bff; text-transform: none; padding: 8px 16px;"
          >
          
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import store from "../../stores/app";
  
  export default {
    name: "modalCarrinho",
    computed: {
      useAppStore() {
        return store;
      },
    },
    methods: {
      fecharModal() {
        console.log("FECHOU CART");
        this.useAppStore.state.modal_carrinho = false;
      },
    },
  };
  </script>
