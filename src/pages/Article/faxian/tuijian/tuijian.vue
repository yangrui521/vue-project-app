<template>
  
  <div class="tuijian">
    <div class="tuijian_content" >
      <ul v-for="(item,index) in recommen" :key="index">
        <li v-for="(c,index) in item.topics" :key="index" >
          <TuiJian1 v-if="c.style===1" :c="c"></TuiJian1>
          <TuiJian2 v-if="c.style===2" :c="c"></TuiJian2>
        </li>
      </ul>
    </div>
  </div>
  
  
</template>

<script type="text/ecmascript-6">
  import TuiJian1 from './tuijian1/tuijian1'
  import TuiJian2 from './tuijian2/tuijian2'

  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "tuijian",
    props:['item.tabId'],
    mounted() {
      this.$store.dispatch('getCommen')
      this.$nextTick(() => {
        new BScroll('.tuijian', {
          scrollY: true,
          click: true,
        })
      })
    },
    computed: {
      ...mapState({
        recommen: state => state.recommen
      })
    },
    components:{
      TuiJian1,
      TuiJian2,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .tuijian
    width 100%
    height 1800px
    background-color #fff
    margin 0.2rem 0
    padding 0.36rem 0.3rem
    box-sizing border-box
    .tuijian_content
      width 100%
      height 36200px
</style>
