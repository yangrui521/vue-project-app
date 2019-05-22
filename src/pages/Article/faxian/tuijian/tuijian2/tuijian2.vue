<template>
  <div>
    <div class="tuijian_header">
      <span class="span1">
        <img :src="c.avatar" alt="">
      </span>
      <span class="span2">{{c.nickname}}</span>
    </div>
    <div class="title">{{c.title}}</div>
    <div class="desc">{{c.subTitle}}</div>
    <div class="tuijian_img">
      <img :src="c.picUrl" alt="">
    </div>
    <div class="tuijian_kan">
      <i class="iconfont icon-yanj"></i>
      <span>{{c.readCount}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "tuijian2",
    props:{
      c:Object
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
        div
          width 440px
          .tuijian_header
            margin-bottom 30px
            font-size 17.5px
            line-height 80px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            .span1
              width 60px
              height 60px
              img
                display inline-block
                vertical-align middle
                width 66px
                height 66px
                margin-right 15px
                border-radius 50%
                border 0.02rem solid #d9d9d9
            .span2
              display inline-block
              vertical-align middle
              font-size 35px
          .title
            font-size 45px
            line-height 70px
            margin -10px 0 10px
            overflow hidden
            text-overflow ellipsis
          .desc
            font-size 35px
            margin-top 10px
            color #7f7f7f
          .tuijian_img
            img
              width 340px
              height 340px
</style>
