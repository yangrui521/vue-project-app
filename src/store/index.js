import Vue from 'vue'
import Vuex from 'vuex'
import category from './modules/category/category'
import categoryList from './modules/categoryList/categoryList'
import homeData from './modules/homeData/homeData'


Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    categoryList,
    category,
    homeData
  }
})
