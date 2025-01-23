<template>
    <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="6" lg="4">
            <v-dialog v-model="useAppStore.state.modal_cadastro" max-width="500">
                <v-card elevation="10" rounded="lg" class="pa-5"
                    style="background: linear-gradient(135deg, #f7f7f7, #e0e0e0);">
                    <v-icon icon="mdi-close" @click="useAppStore.state.modal_cadastro = false"></v-icon>
                    <!-- Cabeçalho do Modal -->
                    <v-card-title class="d-flex justify-center text-h5"
                        style="font-weight: 600; color: #424242;">Cadastro</v-card-title>

                    <!-- Conteúdo do Modal -->
                    <v-card-text>
                        <v-row>
                            <!-- Primeira Coluna -->
                            <v-col cols="12" md="6">
                                <v-text-field label="Nome" variant="outlined" rounded clearable class="mb-4 mt-2"
                                    prepend-inner-icon="mdi-account" color="primary"></v-text-field>
                                <v-text-field label="Sobrenome" variant="outlined" rounded clearable class="mb-4 mt-2"
                                    prepend-inner-icon="mdi-account-outline" color="primary"></v-text-field>
                                <v-text-field label="Telefone" variant="outlined" rounded clearable class="mb-4 mt-2"
                                    prepend-inner-icon="mdi-cellphone" color="primary"></v-text-field>
                            </v-col>

                            <!-- Segunda Coluna -->
                            <v-col cols="12" md="6">
                                <v-text-field label="Email" variant="outlined" rounded clearable class="mb-4 mt-2"
                                    prepend-inner-icon="mdi-email" color="primary"></v-text-field>
                                <v-text-field label="Senha" variant="outlined" rounded type="password" clearable
                                    class="mb-4 mt-2" prepend-inner-icon="mdi-lock" color="primary"></v-text-field>
                                <v-text-field label="Confirmar Senha" variant="outlined" rounded type="password"
                                    clearable class="mb-4 mt-2" prepend-inner-icon="mdi-lock" color="primary"
                                    :rules="[value => !!value || 'Este campo é obrigatório']"></v-text-field>
                            </v-col>

                            <!-- Checkboxes -->
                            <v-col cols="12" md="12" class="d-flex justify-space-between">
                                <v-checkbox label="Vendedor" color="primary"></v-checkbox>
                                <v-checkbox label="Consumidor" color="primary"></v-checkbox>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <!-- Rodapé do Modal -->
                    <v-card-actions class="d-flex justify-center mt-4">
                        <v-btn color="blue" dark large rounded>
                            Cadastrar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>



<script>
import store from '../../stores/app';

export default {
    name: 'modalCadastro',
    data() {
        return {
            email: '',
            password: ''
        };
    },
    computed: {
        useAppStore() {
            return store;
        }
    }
};
</script>
