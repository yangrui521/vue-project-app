import {reqList, reqShouye,reqTabs,reqRecommendData} from '../api/index'
import {
  RECEIVE_SHOUYE,
  RECEIVE_SHOUYETOP,
  RECEIVE_SHOUYELUNBO,
  RECEIVE_TWOLIST,
  RECEIVE_TABS,
  RECEIVE_RECOMMEN
} from './mutation-types'


export default {
  async getHomeData({commit}){
    const result = await reqShouye()
    if (result.code===0){
      const shouye = result.data
      commit(RECEIVE_SHOUYE,shouye)
    }
  },
  async getHomeList({commit}){
    const result = await reqShouye()
    if (result.code===0){
      const shouyeTop = result.data.kingKongModule.kingKongList
      commit(RECEIVE_SHOUYETOP,shouyeTop)
    }
  },
  async getHomeLunbo({commit}){
    const result = await reqShouye()
    if (result.code===0){
      const shouyeLunbo = result.data.personalShop
      commit(RECEIVE_SHOUYELUNBO,shouyeLunbo)
    }
  },
  async getList({commit}){
    const result = await reqList()
    if (result.code===0){
      const twoList = result.data
      commit(RECEIVE_TWOLIST,twoList)
      console.log(twoList)
    }
  },
  async getTabs({commit}){
    const result = await reqTabs()
    if (result.code==="200"){
      const tabs = result.data
      commit(RECEIVE_TABS,tabs)
    }
  },
  async getCommen({commit}){
    const result = await reqRecommendData()
    if (result.code==="200"){
      const recommen = result.data
      commit(RECEIVE_RECOMMEN,recommen)
      console.log(recommen)
    }
  },

}
