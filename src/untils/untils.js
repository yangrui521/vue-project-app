import store from 'store'

export default {
  //存储
  saveInputValue(value){
    store.set('inputValue',value)
  },
  //读取
  getInputValue(){
    store.get('inputValue')
  },
  //移除
  removeInputValue(){
    store.remove('inputValue')
  }
}
