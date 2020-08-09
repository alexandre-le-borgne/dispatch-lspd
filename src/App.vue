<template>
    <v-app id="app">
        <v-main>
            <v-container fluid>
                <v-img :src="lspdSeal" width="200px" aspect-ratio="1"/>
                <router-view/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import lspdSeal from './assets/lspd_seal.png'
    import Dispatch from "@/components/Dispatch";

    export default {
        name: 'App',

        components: {
            Dispatch,
        },

        data: () => ({
            lspdSeal,
        }),
    };
</script>

<style lang="scss">
    #app {
        background-image: url('./assets/bg6.jpg');
        background-size: cover;
    }
</style>