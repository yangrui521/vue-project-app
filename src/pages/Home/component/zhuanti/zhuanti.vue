<template>
	<div class="zhuanti">
    <div class="zhuanti_gou">
      <div class="zhuanti_left">
        <span class="zhuanti_gouwu">专题精选</span>
      </div>
      <a href="javascript:;" class="zhuanti_right">
        <span>更多></span>
      </a>
    </div>
    <div class="zhuanti_content">
      <ul class="zhuanti_ul">
        <li class="zhuanti_li" v-for="(item,index) in zhuanList" :key="index">
          <a href="javascript:;" class="zhuanti_a ">
            <img :src="item.itemPicUrl" alt="">
            <div class="zhuanti_footer">
              <h4>{{item.title}}</h4>
              <span>{{item.subtitle}}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "zhuanti",
    computed:{
      ...mapState({
        zhuanList:state=>state.shouye.topicList
      })
    },
    mounted(){
        new BScroll('.zhuanti_content',{
          scrollX:true,
          click: true,
        })
        
      
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .zhuanti
    background-color #fff
    .zhuanti_gou
      height 100px
      line-height 100px
      padding 0 30px
      font-size 32px
      overflow hidden
      .zhuanti_left
        float left
        .zhuanti_gouwu
          font-size 32px
      .zhuanti_right
        float: right
        span
          font-size 28px
    .zhuanti_content
      width 690px
      position relative
      padding 0 30px 30px
      background-color #fff
      overflow hidden
      .zhuanti_ul
        width 100%
        overflow visible
        height 378px
        display flex
        flex-wrap nowrap
        .zhuanti_li
          width 480px
          margin-right 31px
          padding-bottom 24px
          background-color #f5f5f5
          border-radius 10px
          .zhuanti_a
            display block
            width 480px
            height 268px
            margin-bottom 15px
            border-radius 10px
            img
              width 480px
              height auto
              margin-bottom 10px
            .zhuanti_footer
              padding 0 20px
              h4
                width 410px
                height 40px
                font-size 28px
                color #333
                text-overflow ellipsis
                white-space nowrap
                margin 0 0 6px
              span
                font-size 24px
                width 440px
                height 24px
                color #7f7f7f
</style>
