<template>
	<div class="fuyong">
    <div class="fuyong_top" v-for="(item,index) in shouye" :key="index">
      <img :src="item.titlePicUrl" alt="">
      <div class="foyong_bottom">
        <ul>
          <li v-for="(c,index) in item.itemList" :key="index">
            <div class="div">
              <img :src="c.scenePicUrl" alt="">
            </div>
            <div class="div1">
              <span>{{c.name}}</span>
              <span class="price">￥{{c.counterPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "fuyong",
    computed:{
      ...mapState({
        shouye:state=>state.shouye.categoryModule
      })
    },
    mounted() {
      /*new BScroll('.foyong_bottom',{
        scrollX:true,
        click: true,
      })*/
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .fuyong
    height 100%
    background-color #fff
    .fuyong_top
      margin-bottom 20px
      img
        height 370px
        width 100%
        margin-bottom 20px
      .foyong_bottom
        height 100%
        margin 0 30px 30px
        ul
          display flex
          overflow hidden
          li
            padding 0!important
            margin-right .26667rem
            width 200px
            height 354px
            .div
              img
                width 200px
                height 200px
                background-color #f5f5f5
            .div1
              font-size 24px
              color #333
              .price
                color #b4282d
</style>
