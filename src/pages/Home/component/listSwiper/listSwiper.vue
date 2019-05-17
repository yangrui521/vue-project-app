<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="img">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0" alt="img">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0" alt="img">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0" alt="img">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0" alt="img">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: "listSwiper",
    mounted() {
      new Swiper('.swiper-container',{
        loop:true,  //循环轮播
        autoplay:true,
         /*pagination:{
          el:'.swiper-pagination',
          type: 'custom',
          clickable: true,
         }*/
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    display flex
    height 367.5px
    .swiper-wrapper
      display flex
      .swiper-slide
        img
          width 100%
          

</style>
