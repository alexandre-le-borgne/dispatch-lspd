<template>
    <v-card>
        <v-card-title>Effectifs</v-card-title>
        <v-list dense>
            <v-list-item>
                <v-list-item-content>
                    Central
                </v-list-item-content>
                <v-list-item-content>
                    <div v-for="unitId in central">
                        {{getUnit(unitId).grade + ' ' + getUnit(unitId).name}}
                    </div>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    En patrouille
                </v-list-item-content>
                <v-list-item-content class="align-end">
                    {{totalInPatrol}}
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    En pause
                </v-list-item-content>
                <v-list-item-content class="align-end">
                    {{totalBusy}}
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    En formation
                </v-list-item-content>
                <v-list-item-content class="align-end">
                    {{totalTraining}}
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name: "Workforce",
        computed: {
            ...mapState(['units', 'dispatch', 'training', 'central']),
            ...mapGetters(['getUnit']),
            totalInPatrol() {
                return this.dispatch.filter(row => {
                    return !row.busy
                }).length
            },
            totalBusy() {
                return this.dispatch.filter(row => {
                    return row.busy
                }).length
            },
            totalTraining() {
                return this.training.length
            }
        }
    }
</script>

<style scoped>

</style>