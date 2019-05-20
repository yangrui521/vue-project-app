import {reqList, reqShouye} from '../api/index'
import {RECEIVE_SHOUYE,RECEIVE_SHOUYETOP,RECEIVE_SHOUYELUNBO,RECEIVE_TWOLIST} from './mutation-types'
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
}
