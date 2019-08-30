import * as mutationTypes from '../mutationTypes'
import axios from 'axios'

export default {
    namespaced: true,
    state: {
        newsList: []
    },
    mutations: {
        [mutationTypes.news.GET_NEWSLIST_SUCCESS]: (state, payload) => {
            if (payload.status == 200 && payload.data.success) {
                state.newsList = payload.data.result
            }
        }
    },
    actions: {
        getNewsList: async ({ commit }) => {
            try {
                const res = await axios.get('http://stg.myxxjs.com:9001/api/user')
                commit(mutationTypes.news.GET_NEWSLIST_SUCCESS, res)
            } catch (err) {

            }
        }
    }
}