/*
* form表单验证  vee-validate
* */

import Vue from 'vue'
import VeeValidate from 'vee-validate'

import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

/*Validator： 验证器
* localize ：本地  国际化
*
*
* */
VeeValidate.Validator.localize('zh_CN',{
  messages:zh_CN.messages,
  attributes:{
    phone:'手机号',
    code:'验证码',
    name:'用户名',
    pwd:'密码',
    captcha:'验证码'
  }
})

/*自定义验证规则*/
/*VeeValidate.Vslidator.extend('mobal',{
  /!*验证规则的回调*!/
  validate: value =>{
    //调用.test方法 得到的是一个布尔值
    return /^1\d{10}$/.test(value)
  },
  /!*返回信息的回调函数，如果是false 提示错误信息*!/
  getMessage: field =>field + '输入11位手机号'
})*/
