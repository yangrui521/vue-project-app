<template>
  <div>
    <ul class="ulList">
      <li class="liList" v-for="(item,index) in shouye" :key="index">
        <a href="javascript:;">
          <span>{{item.desc}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: "shouyeList",
    computed:{
      ...mapState({
        shouye:state=>state.shouye.policyDescList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
      .ulList
        box-sizing border-box
        width 100%
        height 72px
        padding 0 20px
        display flex
        justify-content center
        background-color #fff
        .liList
          display flex
          justify-content center
          align-items center
          >a
            color: #b4282d;
            display flex
            justify-content center
            align-items center
            >span
              font-size 24px
              margin-left 15px
              line-height 32px
              vertical-align middle
</style>
