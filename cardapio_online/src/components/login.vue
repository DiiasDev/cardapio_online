<template>
    <v-row class="fill-height" align="center" justify="center">
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="10" rounded="lg" class="pa-5">
          <v-card-title class="text-h5 font-weight-bold text-center">
            🍔 Seja Bem-vindo(a) ao Cardápio Online
          </v-card-title>
          <v-divider class="my-4"></v-divider>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="email"
                label="Email"
                variant="outlined"
                rounded
                clearable
                class="mb-4"
                prepend-inner-icon="mdi-email"
                :rules="[requiredRule, emailRule]"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Senha"
                type="password"
                variant="outlined"
                rounded
                clearable
                prepend-inner-icon="mdi-lock"
                :rules="[requiredRule]"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center mt-4">
            <v-btn
              color="blue"
              dark
              large
              rounded
              @click="login"
            >
              Entrar
            </v-btn>
          </v-card-actions>
          <v-divider class="my-4"></v-divider>
          <div class="text-center">
            <span class="text-caption">
              Não tem uma conta? <a href="#" @click="openModalCadastro" class="font-weight-bold">Cadastre-se</a>
            </span>
          </div>
        </v-card>
        <modalCadastro/>
    </v-col>
    </v-row>
  </template>
  

<script>
import store from '../stores/app'
import modalCadastro from './modals/modal_cadastro.vue'
export default {
    name: 'loginUsers',
    components: {
        modalCadastro
    },
    data() {
        return {
            email: '',
            password: ''
        }
    },
   computed:{
    useAppStore(){
        return store;
    }   
   },
    methods: {
        login() {
            console.log(this.email, this.password)
            console.log("Logou")
            this.useAppStore.state.isLoggedIn = true;
        },
        openModalCadastro(){
          this.useAppStore.state.modal_cadastro = true;
        },
    },
    
}
</script>