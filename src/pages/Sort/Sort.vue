<template>
  <div class="sort">
    <div class="sort_header">
      <div class="sort_header_content">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
        <span>搜索商品，共21726件好货</span>
      </div>
    </div>
    <div class="sort_content">
      <div class="sort_content_left">
        <ul class="sort_content_left_ul" >
          <li class="sort_content_left_li" v-for="(item,index) in getList" :key="index"
              @click="addActive(index)" :class="{active:getList[indexx]===item}">
            <a href="javascript:;">
              <span>{{item.name}}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="sort_content_right" v-if="getList">
        <div class="sort_content_right_top">
          <img :src="getList[indexx].wapBannerUrl" alt="">
        </div>
        <div class="sort_content_right_bottom">
          <ul class="sort_content_right_bottom_ul">
              <li class="sort_content_right_bottom_li" v-for="(c,index) in getList[indexx].subCateList" :key="index">
                <a href="javascript:;" class="sort_content_right_bottom_a">
                  <div class="sort_content_right_bottom_a_img">
                    <img :src="c.wapBannerUrl" alt="">
                  </div>
                  <div class="sort_content_right_bottom_a_span">{{c.name}}</div>
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "Sort",
    data(){
      return{
        indexx: 0,
      }
    },
    computed:{
      ...mapState({
        getList:state=>state.twoList.categoryL1List,
      })
    },
    mounted() {
      this.$store.dispatch('getList')
      new BScroll('.sort_content_left',{
        scrollY:true,
        click: true,
      })
      
     
       new BScroll('.sort_content_right_bottom',{
         scrollY:true,
         click: true,
       })
     
    },
    methods:{
      addActive(index){
        this.indexx = index
        
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .sort
    .sort_header
      height 88px
      background-color #fff
      padding 0 30px
      display flex
      flex-direction column
      justify-content center
      border-bottom 1px solid #eee
      position relative
      z-index 100
      .sort_header_content
        height 56px
        display flex
        align-items center
        justify-content center
        background-color #ededed
        img
          width 28px
          height 28px
          margin-right 10px
        span
          font-size 28px
          color #666
    .sort_content
      width 100%
      display flex
      .sort_content_left
        width 162px
        height 1100px
        display flex
        flex-direction column
        border-right 1px solid #eee
        .sort_content_left_ul
          width 100%
          height 1170px
          padding 0 0 40px
          .sort_content_left_li
            width 100%
            height 50px
            line-height 50px
            text-align center
            margin-top 40px
            &.active
              border-left 6px solid #ab2b2b
            a
              width 100%
              height 100%
              span
                color #333
                font-size 28px
      .sort_content_right
        padding 30px 30px 21px
        display flex
        align-items center
        flex-direction column
        .sort_content_right_top
          width 100%
          height 192px
          margin-bottom 40px
          display flex
          
          img
            width 528px
            height 192px
            border-radius 4px
        .sort_content_right_bottom
          width 528px
          height 840px
          display flex
          overflow hidden
          .sort_content_right_bottom_ul
            height 1080px
            display flex
            justify-content space-between
            flex-wrap wrap
            .sort_content_right_bottom_li
              width 144px
              height 216px
              margin-right 32px
              vertical-align top
              .sort_content_right_bottom_a
                .sort_content_right_bottom_a_img
                  width 144px
                  height 144px
                  img
                    width 144px
                    height 144px
                .sort_content_right_bottom_a_span
                  width 144px
                  height 72px
                  font-size 24px
                  color #333
                  line-height 40px
  
</style>
