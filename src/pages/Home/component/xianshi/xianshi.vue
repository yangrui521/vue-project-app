<template>
	<div class="xianshi">
    <div class="xianshi_gou">
      <div class="xianshi_left">
        <span class="xianshi_gouwu">限时购</span>
        <div class="xianshi_shijian">
          <span class="shi">01</span>
          <span class="dian">:</span>
          <span class="fen">01</span>
          <span class="dian">:</span>
          <span class="miao">01</span>
        </div>
      </div>
      <a href="javascript:;" class="xianshi_right">
        <span>更多></span>
      </a>
    </div>
    <div class="xianshi_content" v-if="itemListC">
      <a href="javascript:;" class="xianshi_item" v-for="(item,index) in itemListC.itemList" :key="index">
        <div class="xianshi_img">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="xianshi_price">
          <span class="activityPrice">￥{{item.activityPrice}}</span>
          <span class="originPrice">
            <s>￥{{item.originPrice}}</s>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "xianshi",
    computed:{
      ...mapState({
        itemListC:state=>state.shouye.flashSaleModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .xianshi
    background-color #fff
    margin-bottom 20px
    width 100%
    height 100%
    .xianshi_gou
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
      overflow hidden
      .xianshi_left
        float left
        .xianshi_gouwu
        .xianshi_shijian
          display inline-block
          vertical-align middle
          margin-left 12px
          span
            font-size 24px
          .shi
            background #000
            color #fff
          .fen
            background #000
            color #fff
          .miao
            background #000
            color #fff
          .dian
            font-size 12px
      .xianshi_right
        float: right
        span
          font-size 28px
    .xianshi_content
      display flex
      flex-wrap wrap
      height 100%
      overflow hidden
      margin 0 10px 0 30px
      .xianshi_item
        margin-right 20px
        padding-bottom 30px
        .xianshi_img
          width 216px
          height 216px
          border-radius 4px
          background-color #f5f5f5
          margin-bottom 10px
          img
            width 216px
            height 216px
        .xianshi_price
          padding-left 20px
          .activityPrice
            font-size 28px
            color #b4282d
          .originPrice
            font-size 24px
            color #7f7f7f
</style>
