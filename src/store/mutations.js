import {RECEIVE_SHOUYE,RECEIVE_SHOUYETOP,RECEIVE_SHOUYELUNBO,RECEIVE_TWOLIST} from './mutation-types'


export default {
  [RECEIVE_SHOUYE](state,shouye){
    state.shouye = shouye
  },
  [RECEIVE_SHOUYETOP](state,shouyeTop){
    state.shouyeTop = shouyeTop
  },
  [RECEIVE_SHOUYELUNBO](state,shouyeLunbo){
    state.shouyeLunbo = shouyeLunbo
    console.log(shouyeLunbo)
  },
  [RECEIVE_TWOLIST](state,twoList){
    state.twoList = twoList
    console.log(twoList)
  },
}
