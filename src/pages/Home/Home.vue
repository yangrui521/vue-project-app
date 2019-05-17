<template>
  <div class="homeList">
    <ListSwiper></ListSwiper>
  </div>
</template>

<script type="text/ecmascript-6">
  
  import ListSwiper from './component/listSwiper/listSwiper'
  import {mapState} from 'vuex'
  export default {
    name: "Home",
    components:{
      ListSwiper
    },
    mounted() {
    
    },
    computed:{
      ...mapState({
        homeData:state=>state.homeData.homeData
      })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .homeList
    padding-top 150px
    padding-bottom 98px
    overflow-x hidden
    img
      height 100%
</style>
