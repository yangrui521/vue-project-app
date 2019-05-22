import {
  RECEIVE_SHOUYE,
  RECEIVE_SHOUYETOP,
  RECEIVE_SHOUYELUNBO,
  RECEIVE_TWOLIST,
  RECEIVE_TABS,
  RECEIVE_RECOMMEN,
  RECEIVE_SEARCH
} from './mutation-types'


export default {
  [RECEIVE_SHOUYE](state,shouye){
    state.shouye = shouye
  },
  [RECEIVE_SHOUYETOP](state,shouyeTop){
    state.shouyeTop = shouyeTop
  },
  [RECEIVE_SHOUYELUNBO](state,shouyeLunbo){
    state.shouyeLunbo = shouyeLunbo
  },
  [RECEIVE_TWOLIST](state,twoList){
    state.twoList = twoList
  },
  [RECEIVE_TABS](state,tabs){
    state.tabs = tabs
  },
  [RECEIVE_RECOMMEN](state,recommen){
    state.recommen = recommen
  },
  [RECEIVE_SEARCH](state,searchData){
    state.searchData = searchData
    console.log(searchData)
  },
}
