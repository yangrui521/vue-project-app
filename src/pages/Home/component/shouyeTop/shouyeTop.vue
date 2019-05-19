<template>
	<div>
    <ul class="ulList">
      <li v-for="(item,index) in shouyeTop" :key="index">
        <a href="javascript:;">
          <img :src="item.picUrl">
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "shouyeTop",
    /*data(){
      return{
        shouyeTop: []
      }
    },*/
    mounted() {
      this.$store.dispatch('getHomeList')
    },
    computed:{
       ...mapState({
         shouyeTop:state=>state.shouyeTop
       })
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  div
    background-color #fff
    .ulList
      display flex
      flex-wrap wrap
      margin-bottom 10px
      background-color #fff
      li
        width 110px
        height 156px
        margin 10px 20px 0
        a
          display flex
          flex-direction column
          justify-content center
          align-items center
          img
            width 110px
            height 110px
            span
              font-size 24px
              line-height 36px
              color #333
</style>
