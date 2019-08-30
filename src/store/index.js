import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const www = 'www'

const store = new Vuex.Store({
    state: {
        count: {
            count: 1
        }

    },
    mutations: {
        [www]: (state, payload) => {
            console.log('payload', payload)
            
            state.count = {
                count: state.count.count + payload.count
            }
        }
    },
    actions: {
        increment: ({ commit }, ttt) => {
            console.log('ttt', ttt)
            commit(www, { count: ttt })
        }
    }
})

export default store