<template>
    <!-- Navbar centralizada -->
    <div class="navbar">
        <v-card>
            <v-row justify="center">
                <v-col cols="12" md="9" lg="9">
                    <v-main>
                        <v-card class="pa-4">
                            <v-row justify="center" align="center">
                                <v-col cols="6" sm="3" class="d-flex flex-column align-center">
                                    <v-icon size="48" color="orange">mdi-hamburger</v-icon>
                                    <span class="text-caption">Lanche</span>
                                </v-col>

                                <v-col cols="6" sm="3" class="d-flex flex-column align-center">
                                    <v-icon size="48" color="red">mdi-pizza</v-icon>
                                    <span class="text-caption">Pizza</span>
                                </v-col>

                                <v-col cols="6" sm="3" class="d-flex flex-column align-center">
                                    <v-icon size="48" color="blue">mdi-cup</v-icon>
                                    <span class="text-caption">Bebidas</span>
                                </v-col>

                                <v-col cols="6" sm="3" class="d-flex flex-column align-center">
                                    <v-icon size="48" color="green">mdi-food</v-icon>
                                    <span class="text-caption">Porção</span>
                                </v-col>
                            </v-row>
                        </v-card>
                    </v-main>
                </v-col>
            </v-row>
        </v-card>
    </div>

    <!-- Barra de pesquisa -->
    <div class="pesquisa mt-3">
        <v-card class="pa-4"
            style="background-color: #f5f5f5; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <v-row align="center" justify="space-between">

                <!-- Ícone de pesquisa e campo de entrada -->
                <v-col class="d-flex align-center" cols="auto">
                    <v-icon icon="mdi-magnify" style="font-size: 32px; color: #FF5722;"></v-icon>
                    <input type="text" placeholder="Pesquisar..." @click="pesquisar" class="ma-2"
                        style="flex: 1; padding: 8px 12px; font-size: 16px; border-radius: 8px; border: 2px solid #FF5722;">
                </v-col>

                <!-- Botão de pesquisa -->
                <v-col class="d-flex justify-center align-center" cols="auto">
                    <v-btn @click="pesquisar" color="orange"
                        style="font-weight: bold; text-transform: none; padding: 10px 20px; border-radius: 8px;">
                        Pesquisar
                    </v-btn>
                </v-col>

                <!-- Ícone de carrinho -->
                <v-col class="d-flex justify-center align-center mr-2" cols="auto">
                    <v-icon @click="openModalCart" icon="mdi-cart" style="font-size: 32px; color: #FF5722;"></v-icon>
                </v-col>
            </v-row>
        </v-card>
    </div>
    <modalCarrinho/>
</template>

<script>
import {store} from '../stores/app'
export default {
  name: 'AppNavbar',
  computed: {
    // Acessando a store diretamente
    useAppStore() {
      return store.state;
    }
  },
  methods: {
    openModalCart() {
      console.log("Clicou no carrinho");
      this.useAppStore.modal_carrinho = true
    }
  }
}
</script>



