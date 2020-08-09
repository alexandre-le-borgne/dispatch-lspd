import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        note: "Check régulier (30min max) de la zone 6001 à 6025.\n Secteur Forum Drive est toujours considéré comme dangereux et est à éviter.\n Ainsi que 7299 et ses alentours",
        units: [
            {
                id: 1,
                name: 'Unité un',
                grade: 'Officier',
                roles: []
            },
            {
                id: 2,
                name: 'Unité deux',
                grade: 'Brigadier',
                roles: []
            },
            {
                id: 3,
                name: 'Unité trois',
                grade: 'Cadet',
                roles: []
            },
            {
                id: 4,
                name: 'Unité trois',
                grade: 'Major',
                roles: []
            }
        ],
        dispatch: [
            {
                call_sign_type: 'LINCOLM',
                call_sign_position: '1',
                unit_id: 1,
                patrol_area: null,
                since: '2020-01-01 00:00:00',
                status: 'available',
                busy_since: null,
            },
            {
                call_sign_type: 'LINCOLM',
                call_sign_position: '2',
                unit_id: 2,
                patrol_area: 'Partout',
                since: '2020-01-01 00:00:00',
                status: 'rest',
                busy_since: '2020-01-02 00:00:00',
            },
            {
                call_sign_type: 'LINCOLM',
                call_sign_position: '4',
                unit_id: 4,
                patrol_area: 'Partout',
                since: '2020-01-01 00:00:00',
                status: 'busy',
                busy_since: '2020-01-02 00:00:00',
            }
        ],
        central: [2, 3],
        training: [
            {
                unit_id: 3,
                since: '2020-01-01 00:00:00'
            }
        ]
    },
    getters: {
        getUnit: state => id => {
            return state.units.find(unit => unit.id === id)
        }
    },
    mutations: {},
    actions: {},
    modules: {}
})
