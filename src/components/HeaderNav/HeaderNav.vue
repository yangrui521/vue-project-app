<template>
  <header class="header">
    <div class="headerSearch">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="网易严选">
      <div class="headerIn" @click="$router.push('/search')">
        <!--<i class="iconfont icon-icon-test"></i>-->
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="放大镜">
        <span>搜索商品，共21726件好货</span>
      </div>
      <span class="login" @click="$router.replace('/personal')">登录</span>
    </div>
    <div class="headerNav">
      <div class="listLeft">
        <ul class="clearfix" @click="addActive($event)">
          <li><a :class="{active:index===0}" href="javascript:;" data-this-index="0">推荐</a></li>
          <li><a :class="{active:index===1}" href="javascript:;" data-this-index="1">居家生活</a></li>
          <li><a :class="{active:index===2}" href="javascript:;" data-this-index="2">服饰鞋包</a></li>
          <li><a :class="{active:index===3}" href="javascript:;" data-this-index="3">美食酒水</a></li>
          <li><a :class="{active:index===4}" href="javascript:;" data-this-index="4">个人清洁</a></li>
          <li><a :class="{active:index===5}" href="javascript:;" data-this-index="5">母婴亲子</a></li>
          <li><a :class="{active:index===6}" href="javascript:;" data-this-index="6">运动旅行</a></li>
          <li><a :class="{active:index===7}" href="javascript:;" data-this-index="7">数码家电</a></li>
          <li><a :class="{active:index===8}" href="javascript:;" data-this-index="8">礼品特色</a></li>
        </ul>
      </div>
      <div class="listRight">
        <div class="img_box">
          <img :src="'http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png'"
               @click="isShow =!isShow" :class="{is_show:isShow}"
               alt="展开">
        </div>
      </div>
      <div class="listNone" v-show="isShow">
          <span>全部频道</span>
          <ul class="listMask">
            <li><a href="javescript:;">推荐</a></li>
            <li><a href="javescript:;">居家生活</a></li>
            <li><a href="javescript:;">服饰鞋包</a></li>
            <li><a href="javescript:;">美食酒水</a></li>
            <li><a href="javescript:;">个人清洁</a></li>
            <li><a href="javescript:;">母婴亲子</a></li>
            <li><a href="javescript:;">运动旅行</a></li>
            <li><a href="javescript:;">数码家电</a></li>
            <li><a href="javescript:;">礼品特色</a></li>
          </ul>
          <div class="zhe"></div>
      </div>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    name: "HeaderNav",
    data(){
      return{
        index:0,
        isShow:false
      }
    },
    mounted(){
      this.$nextTick(()=>{
        this.BScroll = new BScroll('.listLeft',{
          scrollX:true,
          click: true,
        })
      })
    },
    methods:{
      //点击切换tab栏
      addActive(event) {
        /*console.log(event.target.dataset.thisIndex)*/
        //event.targrt.dataset
        // 在标签属性中使用data-a定义的属性 通过event.targrt.dataset.a获取到
        this.index = +event.target.dataset.thisIndex
        console.log(this.index)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  
  .header
    position fixed
    left 0
    top 0
    width 100%
    height 146px
    z-index 100
    background-color #fff
    .headerSearch
      padding 7px 15px
      display flex
      flex-flow row nowrap
      align-items center
      z-index 2
      >img
        width 138px
        height 40px
        display inline-block
        background-position center
        margin-right 10px
      .headerIn
        border 1px solid #eee
        display flex
        height 56px
        width 486px
        flex-grow 1
        flex-flow row nowrap
        -webkit-box-align: center
        align-items center
        -webkit-box-pack center
        justify-content center
        font-size 28px
        background-color #ededed
        border-radius 4px
        color #666
        img
          margin-right 5px
          width 28px
          height 28px
          span
            color #666
      .login
        width 76px
        height 42px
        font-size 24px
        color #b4282d
        border 1px solid #b4282d
        border-radius 4px
        text-align center
        line-height 42px
        margin-left 8px
    .headerNav
      width 100%
      height 75px
      background #fff
      position relative
      z-index 2
      .listLeft
        width 100%
        overflow hidden
        >ul
          float left
          padding-right 150px
          display flex
          >li
            display flex
            justify-content center
            align-items center
            box-sizing border-box
            padding 0 16px
            text-align center
            color #333
            font-size 28px
            line-height 60px
            width 150px
            a.active
             color #b4282d
             min-width 90px
             border-bottom 6px solid #b4282d
      .listRight
        display flex
        flex-grow 0
        position absolute
        right 0
        top 0
        justify-content center
        align-items center
        z-index 5
        .img_box
          width 100px
          height 60px
          text-align center
          background #fff
          display flex
          justify-content center
          align-items center
          >img
            width 28px
            height 28px
            transition transform 400ms linear
            
            &.is_show
              transform rotateZ(180deg)
      .listNone
        width 100%
        position absolute
        left 0
        top 0
        background #fff
        z-index 2
        >span
          height 60px
          font-size 28px
          padding-left 30px
          color #000
          display flex
          align-items center
        .listMask
          display flex
          flex-wrap wrap
          justify-content flex-start
          padding-left 15px
          >li
            width 165px
            font-size 28px
            line-height 60px
            box-sizing border-box
            text-align: center
            border 2px solid #d9d9d9
            margin 8px
            border-radius 8px
        .zhe
          width 100%
          height 100%
          background-color #999999
</style>
