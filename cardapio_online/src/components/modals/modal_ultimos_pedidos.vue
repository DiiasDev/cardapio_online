<template>
    <v-row>
        <v-col>
            <v-dialog v-model="useAppStore.state.modal_ultimos_pedidos">
                <v-card>
                    <v-card-title>
                        Últimos Pedidos
                    </v-card-title>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
import store from '../../stores/app';
export default{
    name: 'ultimosPedidos',
    data(){
        return{

        }
    },
    mounted(){

    },
    computed:{
        useAppStore(){
            return store
        }
    },
    methods:{

    }
}
</script>