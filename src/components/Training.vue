<template>
    <v-card>
        <v-card-title>En formation</v-card-title>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Unité</th>
                    <th class="text-left">Depuis</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="row in training" :key="row.name">
                    <td>{{ getUnit(row.unit_id).grade + ' ' + getUnit(row.unit_id).name }}</td>
                    <td>{{ row.since }}</td>
                </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-card>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "Training",
        computed: {
            ...mapState(['training', 'units']),
            ...mapGetters(['getUnit']),
        }
    }
</script>

<style scoped>

</style>