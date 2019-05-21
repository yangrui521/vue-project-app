<template>
  <div class="article">
    <div class="personalHeader">
      <div class="headerLeft">
        <i class="iconfont icon-home" @click="$router.push('/home')"></i>
      </div>
      <div class="headerCenter">
        <span class="span1" :class="{hong:isShow}" @click="isShow=true">发现</span>
        <span class="span2" :class="{hong:!isShow}" @click="isShow=false">甄选家</span>
      </div>
      <div class="headerRight">
        <i class="iconfont icon-icon-test left" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche right" @click="$router.push('/shopCard')"></i>
      </div>
    </div>
    <div class="header_nav">
      <ul class="header_nav_ul">
        <li class="header_nav_li" v-for="(item,index) in tabs" :key="index"
            :class="{active:tabs[indexx]===item}"  @click="addActive(index)"
        >
          <span>{{item.tabName}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Article",
    data(){
      return{
        isShow:true,
        indexx:0
      }
    },
    mounted(){
      this.$store.dispatch('getTabs')
      new BScroll('.header_nav',{
        scrollX:true,
        click: true,
      })
    },
    computed:{
      ...mapState({
        tabs:state=>state.tabs
      })
    },
    methods:{
      addActive(index){
        this.indexx = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .article
    font-size: 24px;
    height 100%
    position relative
    background-color #fff
    .personalHeader
      background-color #fafafa
      box-sizing border-box
      position fixed
      left 0
      top 0
      padding 0 8px
      font-size 42px
      width 768px
      margin auto
      height 124px
      display flex
      justify-content center
      align-items center
      z-index 10
      border-bottom 1px solid #e9e9e9
      .headerLeft
        margin-left -30px
        .iconfont
          font-size 65px
      .headerCenter
        width 50%
        height 124px
        font-size 28px
        margin-left 30px
        position relative
        text-align center
        line-height 124px
        >span
          font-size 28px
          color #000
          font-weight 700
          &.hong
            font-size 50px
            color #b4282d
        .span1
          margin-right 20px
          margin-left 30px
          /*position absolute
          left 70px
          top 25%*/
        /*.span2*/
          /*position absolute
          right 50px
          top 25%*/
      .headerRight
        margin-right 24px
        .iconfont
          font-size 65px
        .left
          margin-right 24px
    .header_nav
      width 100%
      height 114px
      padding 0 0 25px
      margin-top 124px
      white-space nowrap
      overflow hidden
      .header_nav_ul
        width 950px
        .header_nav_li
          height 114px
          line-height 114px
          display inline-block
          margin 0 25px
          font-size 35px
          padding 0 10px
          box-sizing border-box
          vertical-align middle
          &.active
            color #b4282d
            border-bottom 4px solid #b4282d
</style>
