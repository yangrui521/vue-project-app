<template>
	<div class="contentHeader">
    <div class="content_img">
      <img src="https://yanxuan.nosdn.127.net/02c975c2c8ef58225f1acafea7d41152.png" alt="">
    </div>
    <div class="content_ul">
      <ul class="ul_list">
        <li class="li_list" v-for="(item,index) in shouye" :key="index">
          <p class="p1">{{item.styleItem.title}}</p>
          <p class="p2">{{item.styleItem.desc}}</p>
          <div class="ul_list_img">
            <img :src="item.styleItem.picUrlList[0]" alt="">
            <img :src="item.styleItem.picUrlList[1]" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "shouyeListContent",
    computed:{
      ...mapState({
        shouye:state=>state.shouye.sceneLightShoppingGuideModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .contentHeader
    margin-bottom 20px
    padding 10px 30px 30px 26px
    background-color #fff
    .content_img
      height 160px
      margin-bottom 10px
      background-color #fff
      img
        height 100%
    .content_ul
      .ul_list
        display flex
        flex-wrap wrap
        justify-content center
        .li_list
          width 343px
          height 260px
          box-sizing border-box
          margin 4px 0 0 4px
          padding 20px 0 0 20px
          border-radius 4px
          background-color #f5f5f5
          .p1
            padding-left 10px
            font-size 32px
            color #333
            box-sizing border-box
          .p2
            margin-bottom 10px
            margin-top 10px
            padding-left 10px
            color #7f7f7f
            font-size 24px
            box-sizing border-box
          .ul_list_img
            display flex
            justify-content center
            img
              width 150px
              height 150px
              margin-right 4px
</style>
