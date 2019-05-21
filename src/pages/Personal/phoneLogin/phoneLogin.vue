<template>
	<div class="phone">
    <div class="phone_header">
      <div class="phone_header_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
    </div>
    <form class="phone_content">
      <section class="phone_shouji">
          <input type="text" placeholder="请输入手机号" maxlength="11" name="phone"
              v-model="phone" v-validate="{required:true, regex:/^1\d{10}$/}"
          >
        <span style="color:red">{{errors.first('phone')}}</span>
      </section>
      <section class="phone_mima">
          <input type="password" placeholder="请输入验证码" name="code" maxlength="6"
              v-model="code" v-validate="{required:true, regex:/^\d{6}$/}"
          >
        <span style="color:red">{{errors.first('code')}}</span>
          <div class="yanzheng"
               :disabled="!isTrue || computedTime>0"
               @click.prevent="sendCode"
          >
            <span>{{computedTime>0? `已发送(${computedTime}s)` :'获取验证码'}}</span>
          </div>
      </section>
    </form>
    <div class="phone_wenti">
      <span class="span1">遇到问题?</span>
      <span class="span2">使用验证码登录</span>
    </div>
    <div class="phone_footer_btn1">
      登录
    </div>
    <div class="phone_footer_btn2" @click="$router.push('/personal')">
      其他登录方式
    </div>
    <div class="zhuce">注册账号 > </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "phoneLogin",
    data(){
      return{
        phone:'',
        code:'',
        computedTime:0
      }
    },
    computed:{
      isTrue(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      sendCode(){
        this.computedTime = 30
        const IntervalId=setInterval(()=>{
          this.computedTime--
          if (this.computedTime<=0){
            clearInterval(IntervalId)
          }
        },1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .phone
    width 100%
    height 100%
    background-color #fff
    .phone_header
      .phone_header_img
        width 100%
        height 100%
        margin 28px 0 0
        display flex
        justify-content center
        img
          width 2.56rem
          height .85333rem
    .phone_content
      margin-top 180px
      .phone_shouji
      .phone_mima
        display block
        width 675px
        height 90px
        margin 30px auto
        position relative
        input
          display block
          width 100%
          height 100%
          outline none
          border 0 none
          border-bottom 1px solid #bdbdbd
          font-size 30px
          line-height 45px
        .yanzheng
          position absolute
          right 15px
          bottom 15px
          width 173px
          height 56px
          line-height 56px
          text-align center
          font-size 28px
          border 1px solid #333
          border-radius  10px
          span
            font-size 24px
            &.fasong
              background-color #999999
    .phone_wenti
      position relative
      width 675px
      margin 30px auto
      font-size 28px
      .span1
        color #7f7f7f
      .span2
        position absolute
        top 0
        right 0
        color #666
    .phone_footer_btn1
      width 675px
      height 90px
      text-align center
      line-height 90px
      border 1px solid #b4282d
      background-color #b4282d
      font-size 28px
      color #fff
      margin 30px auto
      border-radius 5px
    .phone_footer_btn2
      width 675px
      height 90px
      text-align center
      line-height 90px
      border 1px solid #b4282d
      font-size 28px
      color #b4282d
      margin 30px auto
      border-radius 5px
    .zhuce
      width 675px
      height 90px
      text-align center
      line-height 90px
      font-size 28px
      margin auto
      
</style>
