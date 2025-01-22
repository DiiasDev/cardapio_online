<template>
    <!-- Navbar com ícone do menu e carrinho -->
    <v-row>
        <v-col>
            <v-card>
                <v-app-bar color="primary" prominent>
                    <!-- Ícone de menu (hamburger) -->
                    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                    <!-- Categorias -->
                    <v-row width="100%" align="center" justify="center">
                        <v-col cols="12" xl="6" xs="12" sm="6" class="d-flex justify-space-between">
                            <!-- Ícone e texto para Lanche -->
                            <div class="d-flex flex-column align-center">
                                <v-icon size="48" color="orange">mdi-hamburger</v-icon>
                                <span class="text-caption">Lanche</span>
                            </div>

                            <!-- Ícone e texto para Pizza -->
                            <div class="d-flex flex-column align-center">
                                <v-icon size="48" color="red">mdi-pizza</v-icon>
                                <span class="text-caption">Pizza</span>
                            </div>

                            <!-- Ícone e texto para Bebidas -->
                            <div class="d-flex flex-column align-center">
                                <v-icon size="48" color="blue">mdi-cup</v-icon>
                                <span class="text-caption">Bebidas</span>
                            </div>

                            <!-- Ícone e texto para Porção -->
                            <div class="d-flex flex-column align-center">
                                <v-icon size="48" color="green">mdi-food</v-icon>
                                <span class="text-caption">Porção</span>
                            </div>
                        </v-col>
                    </v-row>



                </v-app-bar>

                <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'bottom' : 'left'" app
                    class="elevation-3" width="300">
                    <v-list dense>
                        <!-- Linha com Imagem, Nome do Usuário e Texto "Editar Perfil" -->
                        <v-list-item>
                            <v-row align="center" no-gutters>
                                <!-- Avatar -->
                                <v-col cols="auto" class="mr-3">
                                    <v-list-item-avatar>
                                        <v-img
                                            :src="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ofoTBXuTH92-2fDUsDUD01vpGhQmsAQP8Q&s' || 'https://static.vecteezy.com/ti/vetor-gratis/t2/2318271-icone-do-perfil-do-usuario-vetor.jpg'"
                                            alt="Perfil" height="50" width="50" class="rounded-circle" />
                                    </v-list-item-avatar>
                                </v-col>

                                <!-- Nome do Usuário e Texto "Editar Perfil" -->
                                <v-col>
                                    <v-list-item-content>
                                        <v-list-item-title
                                            class="font-weight-bold text-h6 mb-0">User</v-list-item-title>
                                        <v-list-item-subtitle class="text-caption mt-1">
                                            <span style="color: #1976D2; cursor: pointer;">Editar Perfil</span>
                                        </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-col>
                            </v-row>
                        </v-list-item>

                        <v-divider class="my-4"></v-divider>

                        <v-list dense>
                            <v-list-item-group>
                                <!-- Item 1 -->
                                <v-list-item>
                                    <v-list-item-icon class="d-flex align-center">
                                        <v-icon color="primary" class="me-2">mdi-information</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Informações</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <!-- Item 2 -->
                                <v-list-item>
                                    <v-list-item-icon class="d-flex align-center">
                                        <v-icon color="primary" class="me-2">mdi-history</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Últimos Pedidos</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>

                                <!-- Item 3 -->
                                <v-list-item>
                                    <v-list-item-icon class="d-flex align-center">
                                        <v-icon color="primary" class="me-2">mdi-file-document-box</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>Relatório</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list-item-group>
                        </v-list>

                        <v-divider class="my-4"></v-divider>

                        <!-- Botão de Logout -->
                        <v-list-item>
                            <v-btn block color="red" dark>
                                <v-icon left>mdi-logout</v-icon>
                                Sair
                            </v-btn>
                        </v-list-item>
                    </v-list>
                </v-navigation-drawer>
            </v-card>


            <!-- Barra de pesquisa -->

            <v-row>
                <!-- Ícone de pesquisa e campo de entrada -->
                <v-col cols="12" xl="12" lg="12" md="10" sm="12" xs="12" class="d-flex justify-center">
                    <v-card class="d-flex justify-center align-center pa-4 mt-2"
                        :style="display.xs ? 'width: 100%; max-width: 600px; border-radius: 8px;' : 'width: 50%; border-radius: 8px;'">
                        <v-icon v-if="!display.xs" icon="mdi-magnify" style="font-size: 32px; color: #FF5722;"></v-icon>
                        <input type="text" placeholder="Pesquisar..." @click="pesquisar" class="ma-2"
                            :style="!display.xs ? 'flex: 1; padding: 8px 12px; font-size: 16px; border-radius: 8px; border: 2px solid #FF5722;' : ' flex: 1; padding: 8px 12px; font-size: 16px; border-radius: 8px; border: 2px solid #FF5722;'" />

                        <v-btn @click="pesquisar" color="orange"
                            style="font-weight: bold; text-transform: none; padding: 10px 20px; border-radius: 8px;">
                            Pesquisar
                        </v-btn>

                        <!-- Ícone de carrinho -->
                        <v-icon @click="openModalCart" icon="mdi-cart" style="font-size: 32px; color: #FF5722;"
                            class="ml-3"></v-icon>
                    </v-card>
                </v-col>
            </v-row>



        </v-col>
    </v-row>


    <modalCarrinho />
</template>

<script>
import store from '../stores/app'
import modalCarrinho from './modals/modal_carrinho.vue'
import { useDisplay } from 'vuetify';
export default {
    components: {
        modalCarrinho
    },
    name: 'AppNavbar',
    data() {
        return {
            display: useDisplay(),
            drawer: false,
            group: null,
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
        },
        pesquisar() {
            console.log("PESQUISAR");
            // Add your search logic here
        }
    }
}
</script>