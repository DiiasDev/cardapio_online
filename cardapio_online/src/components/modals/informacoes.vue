<template>
    <v-row>
        <v-col>
            <v-dialog v-model="useAppStore.state.modal_informacoes">
                <v-card>
                <v-card-title>
                    Informações
                </v-card-title>
            </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
import store from '../../stores/app'
export default{
    name: "informacoesVue",
    data(){
        return{

        }
    },
    mounted(){

    },
    computed: {
        useAppStore() {
            return store;
        }
    },
    methods:{

    }
}
</script>