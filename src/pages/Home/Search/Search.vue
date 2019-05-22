<template>
  <div class="pageWrap">
    <div class="wrap">
      <div class="headWrap" v-if="searchData.defaultKeyword">
        <input type="search" :placeholder="searchData.defaultKeyword.keyword"
               class="searchInput" v-model="inputValue"
              @keyup.enter="handle(inputValue)"
        />
        <span class="cancel" @click="clear,$router.go(-1)">取消</span>
      </div>
      <div class="history" v-if="inputValueArr.length>0">
        <span>历史记录:</span>
        <ul >
          <li v-for="(item,index) in inputValueArr" :key="index">
            {{item}}
          </li>
        </ul>
        <button @click="clearHistory">清除历史记录</button>
      </div>
      <transition name="searcResult" v-if="inputValue">
        <div class="recResult" >
          <ul class="recs">
            <li v-for="(item,index) in searchResult" :key="index">{{item}}</li>
          </ul>
        </div>
      </transition>
      
    </div>
    <div class="defaultKeywords" v-if="!inputValue" >
      <span>热门搜索：</span>
      <ul>
        <li v-for="(item,index) in searchData.hotKeywordVOList" :key="index" :class="{on:item.highlight===1}">
          {{item.keyword}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {reqSearchValue} from '../../../api/index'
  import Storage from '../../../untils/untils'
  export default {
    name: "Search",
    data(){
      return{
        inputValue:'',
        inputValueArr:[],
        searchResult:[],
        timer:null
      }
    },
    mounted(){
      this.$store.dispatch('getSearch')
      
      const localStorage = Storage.getInputValue()
      if (localStorage){
        this.inputValueArr = localStorage
      }
      
    },
    computed:{
      ...mapState({
        searchData:state=>state.searchData
      })
    },
     methods:{
       async handle(inputValue){
        if (this.inputValue===''){
          return false
        }
        if (this.inputValue===inputValue){
          this.inputValueArr.push(inputValue)
          //console.log(this.inputValueArr)
          Storage.saveInputValue(this.inputValueArr)
          
          const result = await reqSearchValue(inputValue)
          console.log(result)
          if (result.code==='200'&&result.data){
            let data = result.data
            /*console.log(data)*/
            if (data.length===0){
              this.searchResult=[]
            } else{
              this.searchResult=data
            }
          } else {
            this.searchResult=[]
            console.log('重新输入')
          }
        }
      },
       clear(){
         this.inputValue=''
         this.searchResult=[]
         
       },
       clearHistory(){
         Storage.removeInputValue()
         this.inputValueArr=[]
       }
    },
    watch:{
      inputValue(newVal,oldVal){
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.handle(oldVal)
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .pageWrap
    width 100%
    height 1400px
    background: #f4f4f4
    position relative
    .wrap
      display flex
      flex-direction column
      background: #fff
      .headWrap
        height 88px
        margin-top 10px
        padding 16px 50px
        box-sizing border-box
        z-index 100
        display flex
        justify-content space-between
        align-items center
        .searchInput
          width 580px
          height 60px
          border-radius 10px
          outline none
          border none
          background: no-repeat url("https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png") #eee
          background-size 28px 28px
          background-position 40px 14px
          padding 0 15%
        .cancel
          font-size 30px
          color #000
      .history
        padding 0 20px
        span
          font-size 30px
        ul
          display flex
          flex-wrap wrap
          padding 10px
          li
            height 30px
            font-size 24px
            line-height 30px
            padding 10px
            border 1px #333 solid
            text-align: center
            margin 10px 10px
        button
          position absolute
          right 20px
          top 100px
      .recResult
        padding 20px 50px
        &.searchResult-enter-active
          transition transform 0.5s
        &.searchResult-leave-active
          transition transform 3s
        &.searchResult-enter, &.fade-leave-to
          transform translateY(100px)
        .recs
          li
            font-size 30px
            font-family "Microsoft YaHei UI"
            color #7F7F7F
            line-height 60px
            width 100%
            border-bottom 1px solid #eee
            height 60px
            margin 10px 10px
    
    .defaultKeywords
      position absolute
      margin-top 30px
      padding 20px 0
      background #fff
      width 100%
      height 300px
      span
        font-size 30px
        margin-left 20px
      ul
        margin-top 30px
        display flex
        flex-wrap wrap
        li
          zoom 1
          padding 5px 10px
          border 1px solid #eee
          text-align: center
          height 30px
          line-height 30px
          white-space nowrap
          margin 10px 15px
          &.on
            zoom 1
            color #b4282d
            border #b4282d 1px solid
</style>
