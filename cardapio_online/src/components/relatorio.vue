<template>
    <v-row>
        <v-col>
            <v-card>
                <v-row class="d-flex justify-center">
                    <v-col cols="6">
                        <v-card-title>
                            <v-icon icon="mdi-home" @click="home"></v-icon>
                        </v-card-title>
                    </v-col>
                    <v-col cols="6">
                        <v-card-title>
                            Relatórios
                        </v-card-title>
                    </v-col>
                </v-row>

                <!-- filtros -->
                 <v-row>
                    <v-col>
                        filtros
                    </v-col>
                 </v-row>

                 <!-- graficos -->
                  <v-row>
                    <v-col>
                        graficos
                    </v-col>
                  </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import store from '../stores/app'
export default {
    name: "relatorioVue",
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {
        home() {
            console.log("clicou em home");
            this.useAppStore.state.selectedOption = "navbar"
        }
    },
    computed: {
        useAppStore() {
            return store;
        }
    },
}
</script>