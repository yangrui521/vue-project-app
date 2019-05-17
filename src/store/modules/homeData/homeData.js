import {RECEIVE_HOMEDATA,RECEIVE_SEARCHDATA,RECEIVE_SEARCHRESULT} from '../../mutation-types'
import {reqMockHomeData} from '../../../api'
const state = {
  homeData: [],
  searchData: {},
  searchResult: []
}
const mutations = {
 [RECEIVE_HOMEDATA](state,homeData){
  state.homeData = homeData
 }
}
const actions = {
  async getHomeData({commit}){
    const result = await reqMockHomeData()
    if (result.code===0){
      const homeData = result.data
      console.log('homeData')
      commit(RECEIVE_HOMEDATA,homeData)
    }
  },
}

const getters = {

}

export default {
  state,
  mutations,
  actions,
  getters
}
