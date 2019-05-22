<template>
	<div class="div">
    <TuiJian></TuiJian>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import TuiJian from './tuijian/tuijian'
  export default {
    name: "faxian",
    components:{
      TuiJian
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .div
    height 500px
</style>
