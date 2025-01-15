<template>
    <v-dialog v-model="useAppStore.modal_carrinho">
        <v-card>
            <v-card-text>teste</v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

export default{
    name: "modalCarrinho",
    data(){
        return{

        }
    },
    computed: {
        // Acessando a store diretamente usando `this.$store` 
        useAppStore() {
            return this.$store;
        }
    },
}
</script>