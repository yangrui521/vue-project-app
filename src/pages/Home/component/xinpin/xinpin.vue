<template>
  <div class="xinpin">
    <div class="xinpin_gou">
      <div class="xinpin_left">
        <span class="xinpin_gouwu">新品首发</span>
      </div>
      <a href="javascript:;" class="xinpin_right">
        <span>更多></span>
      </a>
    </div>
    <div class="xinpin_content">
      <a href="javascript:;" class="xinpin_item" v-for="(item,index) in newList" :key="index"
          v-if="index<6"
      >
        <div class="xinpin_img">
          <img :src="item.primaryPicUrl" alt="">
        </div>
        <div class="xinpin_price">
          <span>{{item.name}}</span>
          <span class="activityPrice">￥{{item.counterPrice}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "xinpin",
    computed:{
      ...mapState({
        newList:state=>state.shouye.newItemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .xinpin
    background-color #fff
    margin-bottom 20px
    width 100%
    height 100%
    overflow hidden
    .xinpin_gou
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
      overflow hidden
      .xinpin_left
        float left
        .xinpin_gouwu
          font-size 32px
      .xinpin_right
        float: right
        span
          font-size 28px
    .xinpin_content
      display flex
      flex-wrap wrap
      overflow hidden
      margin 0 10px 0 30px
      .xinpin_item
        margin-right 20px
        padding-bottom 30px
        .xinpin_img
          width 216px
          height 216px
          border-radius 4px
          background-color #f5f5f5
          margin-bottom 10px
          img
            width 216px
            height 216px
        .xinpin_price
          width 216px
          .activityPrice
            font-size 28px
            color #b4282d
</style>
