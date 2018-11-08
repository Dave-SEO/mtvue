const state = {
    money: 1
}
const mutations = {
    add(state,param){
        console.log(param)
        state.money +=  param
    },
    decrement(state) {
        state.money --
    }
}
const actions = {
    add: ({commit},param)=>{
        commit('add',param)
    },
    decrement: ({commit}) => {
        commit('decrement')
    }
}
export default  {
    namespaced: true,
    state,
    mutations,
    actions
}