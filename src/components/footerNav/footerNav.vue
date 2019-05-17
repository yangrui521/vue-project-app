<template>
	<footer class="footer">
    <ul class="footer_list">
      <li class="item" :class="$route.path==='/home'? 'item active':'item'"
          @click="$router.replace('/home')"
      >
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </li>
      <li class="item" :class="$route.path==='/sort'? 'item active':'item'"
          @click="$router.replace('/sort')"
      >
        <i class="iconfont icon-iconset0497"></i>
        <span>分类</span>
      </li>
      <li class="item" :class="$route.path==='/article'? 'item active':'item'"
          @click="$router.replace('/article')"
      >
        <i class="iconfont icon-tupian" ></i>
        <span>识物</span>
      </li>
      <li class="item" :class="$route.path==='/shopcard'? 'item active':'item'"
          @click="$router.replace('/shopcard')"
      >
        <i class="iconfont icon-gouwuche" ></i>
        <span>购物车</span>
      </li>
      <li class="item" :class="$route.path==='/personal'? 'item active':'item'"
          @click="$router.replace('/personal')"
      >
        <i class="iconfont icon-icon_pc"></i>
        <span>个人</span>
      </li>
    </ul>
  </footer>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "footerNav"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .footer
    position fixed
    left 0
    bottom 0
    width 100%
    .footer_list
      width 100%
      height 100px
      display flex
      justify-content space-around
      border-top 1px solid #eee
      .item
        margin-top 8px
        text-align center
        &.active
          color #b4282d
        .iconfont
          display block
          width 40px
          height 40px
          font-size 40px
          margin-left 4px
          margin-bottom 14px
        span
          font-size 24px
          display block
</style>
