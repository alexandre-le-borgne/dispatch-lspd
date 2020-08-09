<template>
    <v-card>
        <v-card-title>En patrouille</v-card-title>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                <tr>
                    <th class="text-left">Status</th>
                    <th class="text-left">Call Sign</th>
                    <th class="text-left">Unité</th>
                    <th class="text-left">Secteur de patrouille</th>
                    <th class="text-left">Depuis</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="row in dispatch" :key="row.name">
                    <td>
                        <v-icon size="16"
                                :color="statusTheme(row.status).color"
                                :title="statusTheme(row.status).title">
                            {{statusTheme(row.status).icon}}
                        </v-icon>
                    </td>
                    <td>{{ row.call_sign_type }} {{ row.call_sign_position }}</td>
                    <td>{{ getUnit(row.unit_id).grade + ' ' + getUnit(row.unit_id).name }}</td>
                    <td>
                        <template v-if="row.patrol_area">{{row.patrol_area}}</template>
                        <template v-else>Non défini</template>
                    </td>
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
        name: "Dispatch",
        data() {
            return {}
        },
        computed: {
            ...mapState(['dispatch', 'units']),
            ...mapGetters(['getUnit']),
            statusTheme() {
                return status => {
                    let theme
                    switch (status) {
                        case 'available':
                            theme = {color: 'green', icon: 'fa-car', title: 'En patrouille'}
                            break
                        case 'busy':
                            theme = {color: 'orange', icon: 'fa-car', title: 'Occupé sur une intervention'}
                            break
                        default:
                            theme = {color: 'grey', icon: 'fa-coffee', title: 'En pause'}
                            break

                    }
                    return theme
                }
            }
        }
    }
</script>

<style scoped>

</style>