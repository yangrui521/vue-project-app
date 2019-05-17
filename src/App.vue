<template>
  <div id="app">
    <HeaderNav v-show="$route.path ==='/home'?'isShow':''"/>
    <router-view></router-view>
    <FoorterNav v-show="$route.path ==='/personal'?'':'isShow'"/>
  </div>
</template>

<script>
import FoorterNav from './components/footerNav/footerNav'
import HeaderNav from './components/HeaderNav/HeaderNav'



export default {
  name: 'App',
  components: {
    HeaderNav,
    FoorterNav,
  },
  data(){
    return{
      isShow:true
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
