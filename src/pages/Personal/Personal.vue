<template>
  <div class="personal">
    <div class="personalHeader">
      <div class="headerLeft">
        <i class="iconfont icon-home"></i>
      </div>
      <div class="headerCenter">
        <span>网易严选</span>
      </div>
      <div class="headerRight">
        <i class="iconfont icon-icon-test left"></i>
        <i class="iconfont icon-gouwuche right"></i>
      </div>
    </div>
    <div class="personalContent">
      <div class="contentLogo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login">
        <div class="loginPhone">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登录</span>
        </div>
        <div class="loginEmail">
          <i class="iconfont icon-youxiang"></i>
          <span>邮箱账号登录</span>
        </div>
      </div>
      <div class="zhuce">
        <span>手机号快速注册> </span>
      </div>
    </div>
    <ul>
      <li >
        <a href="javascript:;">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </a>
      </li>
      <li >
        <a href="javascript:;">
          <i class="iconfont icon-qq"></i>
          <span>QQ</span>
        </a>
      </li>
      <li >
        <a href="javascript:;">
          <i class="iconfont icon-weibo"></i>
          <span>微博</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "Personal"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .personal
    width: 100%;
    height: 100%;
    font-size: 24px;
    padding-top: 88px;
    .personalHeader
      position fixed
      left 0
      top 0
      padding 0 8px
      font-size 42px
      width 100%
      height 88px
      display flex
      .headerLeft
        margin-left 24px
        .iconfont
          font-size 51px
          line-height 75px
  
      .headerCenter
        width 60%
        font-size 28px
        margin-left 36px
        display flex
        justify-content center
        align-items center
        >span
          font-size 40px
          color #000
          font-weight 700
      
      .headerRight
        margin-right 24px
        .iconfont
          font-size 51px
          line-height 75px
        .left
          margin-right 24px
    .personalContent
      width 100%
      background #F2F5F4
      display flex
      flex-direction column
      align-items center
      .contentLogo
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 100%
        height:423px
        img
          width 268px
          height 90px
      .login
        width 677px
        height 96px
        .loginPhone
          margin-top 32px
          text-align: center
          line-height 90px
          border 1px solid #b4282d
          color #fff
          background #b4282d
          .iconfont
            font-size 30px
          >span
            font-size 28px
            margin-left 16px
        .loginEmail
          margin-top 32px
          text-align: center
          line-height 90px
          border 1px solid #b4282d
          color #b4282d
          .iconfont
            font-size 30px
          >span
            font-size 28px
            margin-left 16px
      .zhuce
        margin-top 180px
        font-size 28px
  
</style>
