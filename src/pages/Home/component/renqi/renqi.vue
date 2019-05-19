<template>
	<div class="renqi">
    <div class="renqi_gou">
      <div class="renqi_left">
        <span class="renqi_gouwu">人气推荐</span>
      </div>
      <a href="javascript:;" class="renqi_right">
        <span>更多></span>
      </a>
    </div>
    <div class="renqi_content" v-if="popular">
      <a href="javascript:;" class="renqi_img">
        <img :src="popular[0].listPicUrl" alt="">
        <div class="renqi_span">
          <span class="span1">{{popular[0].name}}</span>
          <span class="span2">{{popular[0].simpleDesc}}</span>
          <span class="span3">￥{{popular[0].retailPrice}}</span>
        </div>
      </a>
      <ul class="renqi_ul">
        <li class="renqi_li">
          <a href="javascript:;" class="renqi_xiaotu">
            <img :src="popular[1].listPicUrl" alt="">
            <span class="name">
              {{popular[1].name}}
              <span class="price">￥{{popular[1].retailPrice}}</span>
            </span>
            
          </a>
        </li>
        <li class="renqi_li">
          <a href="javascript:;" class="renqi_xiaotu">
            <img :src="popular[2].primaryPicUrl" alt="">
            <span class="name">
              {{popular[2].name}}
              <span class="price">￥{{popular[2].retailPrice}}</span>
            </span>
          </a>
        </li>
        <li class="renqi_li">
          <a href="javascript:;" class="renqi_xiaotu">
            <img :src="popular[3].listPicUrl" alt="">
            <span class="name">
              {{popular[3].name}}
              <span class="price">￥{{popular[3].retailPrice}}</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "renqi",
    computed:{
      ...mapState({
        popular:state=>state.shouye.popularItemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .renqi
    background-color #fff
    
    .renqi_gou
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
      overflow hidden
      .renqi_left
        float left
        .renqi_gouwu
          font-size 32px
      .renqi_right
        float: right
        span
          font-size 28px
    .renqi_content
      width 100%
      height 100%
      .renqi_img
        display flex
        margin 0 30px 20px
        background-color #fef0df
        width 690px
        height 280px
        img
          width 280px
          height 280px
          float left
        .renqi_span
          display flex
          justify-content center
          align-items center
          flex-direction column
          margin-left 60px
          /*width 350px
          height 161px*/
          .span1
            width 350px
            height 41px
            font-size 28px
            color #333
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .span2
            width 350px
            height 36px
            font-size 24px
            color #7f7f7f
          .span3
            width 350px
            height 41px
            font-size 28px
            color #b4282d
      .renqi_ul
        display flex
        flex-wrap wrap
        background-color #fff
        .renqi_li
          width 216px
          height 337px
          padding-bottom 13px
          margin-left 20px
          .renqi_xiaotu
            width 216px
            height 337px
            img
              width 216px
              height 216px
              background-color #f5f5f5
            .name
              font-size 24px
              color #333
              .price
                color #b4282d
</style>
