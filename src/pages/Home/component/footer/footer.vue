<template>
	<div class="footer">
    <div class="footer_content">
      <div class="footer_content_type">
        <a href="javascript:;" class="xiazai">下载App</a>
        <a href="javascript:;">电脑版</a>
      </div>
      <p>
        <span>网易公司版权所有 © 1997-2019</span>
        <span>食品经营许可证：JY13301080111719</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer
    background-color #414141
    border-top 1px solid #eee
    width 100%
    height 245px
    .footer_content
      text-align center
      padding: .72rem .26667rem .37333rem
      width: 10rem
      margin-right auto
      margin-left auto
      .footer_content_type
        height 62px
        margin-bottom .48rem
        color #fff
        a
          display inline-block
          text-align center
          line-height 62px
          width 172px
          height 62px
          border 1px solid #fff
          border-radius 5px
          font-size 24px
          color #fff
        .xiazai
          margin-right 50px
      p
        span
          display block
</style>
