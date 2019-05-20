<template>
  <div class="personal_shop">
    <div class="personal_shop_title">私人订制</div>
    <div class="personal_shop_swiper_box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(personalShop, index) in personalShopArr" :key="index">
            <div class="personalShop-item" v-for="(good ,index) in personalShop" :key="index">
              <img class="primaryPic"  :src="good.primaryPicUrl" :alt="good.name">
              <div class="text">
                <span class="name">{{good.name}}</span>
                <span class="price">¥{{good.retailPrice}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  
  export default {
    name: "siRen",
    mounted () {
      this.$store.dispatch('getHomeLunbo')
    },
    computed: {
      ...mapState(['shouyeLunbo']),
      personalShopArr () {
        const {shouyeLunbo} = this
        console.log(shouyeLunbo)
        const bigArr = []
        let smallArr = []
        shouyeLunbo.forEach(c=>{
          if (smallArr.length === 0){
            bigArr.push(smallArr)
          }
          smallArr.push(c)
          if (smallArr.length===8){
            smallArr = []
          }
        })
        return bigArr
      }
    },
    watch: {
      personalShopArr () {
        this.$nextTick(()=>{
          new Swiper('.swiper-container', {
            loop: true,
            autoplay:true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              type: 'custom'
            },
          })
        })
      }
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .personal_shop
    background-color #fff
    margin-bottom 80px
    .personal_shop_title
      width 100%
      height 100px
      line-height 100px
      font-size 32px
      padding 0 30px
      background #fff
      
    .personal_shop_swiper_box
      display flex
      background #fff
      .swiper-container
        overflow inherit
        display flex
        .swiper-pagination
          width 750px
          height 70px
          background #fff
          transform translateY(100px)
          margin-bottom 20px
        .personalShop-item
          float left
          width 210px
          padding 0 !important
          margin-left 30px
          .primaryPic
            background-color #f5f5f5
            margin-bottom 12px
            width 216px
            height 216px
          >div
            margin-top 0
            margin-bottom 10px
            font-size 24px
            overflow visible
            white-space normal
            line-height 36px
            .name
              width 216px
              color #333
              margin-top 0
              margin-bottom 10px
              font-size 24px
              line-height 36px
              white-space normal
            .price
              font-size 22.5px
              color #b4282d
</style>
