<template>
  <div class="wrapper">
    <div class="homeList">
      <ListSwiper></ListSwiper>
      <ShouyeList></ShouyeList>
      <ShouyeTop></ShouyeTop>
      <ShouyeListContent></ShouyeListContent>
      <SiRen></SiRen>
      <XianShi></XianShi>
      <XinPin></XinPin>
      <RenQi></RenQi>
      <ZhuanTi></ZhuanTi>
      <ZhongChou></ZhongChou>
      <FuYong></FuYong>
      <Footer></Footer>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import ListSwiper from './component/listSwiper/listSwiper'
  import ShouyeList from './component/shouyeList/shouyeList'
  import ShouyeTop from './component/shouyeTop/shouyeTop'
  import ShouyeListContent from './component/shouyeListContent/shouyeListContent'
  import SiRen from './component/siRen/siRen'
  import XianShi from './component/xianshi/xianshi'
  import XinPin from './component/xinpin/xinpin'
  import RenQi from './component/renqi/renqi'
  import ZhuanTi from './component/zhuanti/zhuanti'
  import ZhongChou from './component/zhongchou/zhongchou'
  import FuYong from './component/fuyong/fuyong'
  import Footer from './component/Footer/Footer'

  export default {
    name: "Home",
    
    components:{
      ListSwiper,
      ShouyeList,
      ShouyeTop,
      ShouyeListContent,
      SiRen,
      XianShi,
      XinPin,
      RenQi,
      ZhuanTi,
      ZhongChou,
      FuYong,
      Footer
    },
    mounted() {
      this.$store.dispatch('getHomeData')
      this.$nextTick(()=>{
        this.BScroll = new BScroll('.wrapper',{
          scrollY:true,
          click: true,
        })
      })
    },
    computed:{
      ...mapState(
        ['shouye']
      )
    },
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrapper
    height 100%
    background-color #F4F4F4
    .homeList
      padding-top 150px
      padding-bottom 98px
      overflow-x hidden
      img
        height 100%
</style>
