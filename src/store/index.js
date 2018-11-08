import Vue from 'vue'
import Vuex from 'vuex'
import money from '@/store/modules/a'
import count from '@/store/modules/b'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        money,
        count
    }
})