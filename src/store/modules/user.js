/**
 * Date: 12/7/20
 */
export default {
    namespaced: true,
    state: {
        token: "", //
        name: "",
    },
    mutations:{
        SET_TOKEN: (state, token) => {
            let _token = 'Bearer ' + token;
            state.token = _token;
        },
        CLEAR_TOKEN: (state) => {
            state.token = '';
        },
    },
    actions:{
        UpdateToken({commit}, token) {
            commit('SET_TOKEN', token);
        },
    }
}
