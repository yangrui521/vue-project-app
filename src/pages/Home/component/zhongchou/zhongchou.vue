<template>
  <div class="zhongchou">
    <div class="zhongchou_gou">
      <div class="zhongchou_left">
        <span class="zhongchou_gouwu">众筹</span>
      </div>
      <a href="javascript:;" class="zhongchou_right">
        <span>更多></span>
      </a>
    </div>
    <div class="zhongchou_content">
      <a class="zhongchou_top" v-for="(item,index) in zhongchouL" :key="index">
        <div class="zhongchou_img">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="zhongchou_right">
          <span class="name">{{item.name}}</span>
          <div class="er">
            <span class="price">{{item.showRetailPrice}}</span>
            <span class="p1">起</span>
          </div>
          <div class="heng">
            <span class="hengtiao"></span>
          </div>
          <span class="bai">75%</span>
          <span class="num">{{item.supportNum}}</span>
        </div>
      </a>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "zhongchou",
    computed:{
      ...mapState({
        zhongchouL : state=>state.shouye.zhongChouList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .zhongchou
    width 100%
    background-color #fff
    .zhongchou_gou
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
      overflow hidden
      border-bottom 1px solid #eee
      .zhongchou_left
        float left
        .zhongchou_gouwu
          font-size 32px
      .zhongchou_right
        float: right
        span
          font-size 28px
    .zhongchou_content
      width 100%
      padding 30px 30px 0
      .zhongchou_top
        width 750px
        height 240px
        display flex
        align-items center
        position relative
        .zhongchou_img
          width 210px
          height 210px
          background-color #f4f4f4
          margin-right 30px
          img
            width 210px
            height 210px
      
        .zhongchou_right
          display flex
          flex-direction column
          .name
            font-size 28px
          .er
            display flex
            .price
              color #b4282d
              font-size 32px
            .p1
              margin-top 7px
              fong-size 24px
              color #b4282d
          .heng
            width 360px
            height 6px
            margin-top 16px
            background-color #d8d8d8
            overflow hidden
            border-radius 3px
            .hengtiao
              display block
              height 6px
              width 70%
              background-color #fea438
          .bai
            font-size 24px
            color #7f7f7f
            position absolute
            right 80px
            top 140px
          .num
            margin-top 15px
            font-size 24px
            color #7f7f7f
</style>
