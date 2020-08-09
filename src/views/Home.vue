<template>
    <v-container>
        <div class="text-right">
                <router-link :to="{name:'home'}">
                    Historique de la derniere heure
                </router-link>
        </div>
        <v-alert v-if="note"
                 dense
                 border="left"
                 colored-border
                 type="info"
                 class="body-2">
            <div class="title">Note de patrouille</div>
            <div class="note">{{note}}</div>
        </v-alert>
        <v-row dense>
            <v-col :cols="8">
                <Dispatch/>
            </v-col>
            <v-col :cols="4">
                <Workforce class="mb-5"/>
                <Training/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import Dispatch from "@/components/Dispatch";
    import Training from "@/components/Training";
    import Workforce from "@/components/Workforce";
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "Home",
        components: {Workforce, Training, Dispatch},
        computed: {
            ...mapState(['note', 'central']),
            ...mapGetters(['getUnit'])
        }
    }
</script>

<style scoped>
    .note {
        white-space: pre-line;
    }
</style>