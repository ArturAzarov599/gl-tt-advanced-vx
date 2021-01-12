import {createStore} from "vuex";

const store = createStore({
    actions: {},
    mutations: {
        updateShowMenu(state) {
            state.showMenu = !state.showMenu
        },
        showLoading(state) {
            state.loading = true
        },
        hideLoading(state) {
            state.loading = false
        }
    },
    state: {
        showMenu: false,
        loading: true
    },
    getters: {}
})

export default store;
