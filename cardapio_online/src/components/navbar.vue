<template>
    <!-- Navbar com ícone do menu e carrinho -->
    <div class="navbar">
        <v-card>
            <v-app-bar>
                <!-- Ícone de menu (hamburger) -->
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <!-- Categorias -->
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
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : undefined" temporary>
                <!-- Imagem de Perfil e Alterar Perfil -->
                <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-row align="center" no-gutters>
  <!-- Imagem de Perfil -->
  <v-col class="d-flex justify-center">
    <v-img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ofoTBXuTH92-2fDUsDUD01vpGhQmsAQP8Q&s"
      alt="Perfil"
      height="80px"
      width="80px"
      contain
      class="rounded-circle"
    />
  </v-col>

  <!-- Nome do Usuário -->
  <v-col>
    <v-list-item-title>User</v-list-item-title>
  </v-col>
</v-row>

                        </v-list-item-avatar>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>

    <!-- Barra de pesquisa -->
    <div class="pesquisa mt-3 d-flex justify-center">
        <v-card class="pa-4 d-flex justify-center align-center" width="50%"
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

    <modalCarrinho />
</template>

<script>
import store from '../stores/app'
import modalCarrinho from './modals/modal_carrinho.vue'
export default {
    components: {
        modalCarrinho
    },
    name: 'AppNavbar',
    data() {
        return {
            drawer: false,
            group: null,
            items: [
                {
                    title: 'Foo',
                    value: 'foo',
                },
                {
                    title: 'Bar',
                    value: 'bar',
                },
                {
                    title: 'Fizz',
                    value: 'fizz',
                },
                {
                    title: 'Buzz',
                    value: 'buzz',
                },
            ],
        }
    },
    computed: {
        useAppStore() {
            return store;
        }
    },
    methods: {
        openModalCart() {
            console.log("ABRIU CART");
            this.useAppStore.state.modal_carrinho = true;
        }
    }
}
</script>
