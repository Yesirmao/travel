<template>
<!-- 头部 -->
  <div class="header">
    <div class="header-left">
      <div class="iconfont hleft-icon">&#xe65b;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
      {{city}}
      <span class="iconfont arrow-right">&#xe601;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
@import '~^@/varibles.styl'
.header
  display: flex
  line-height: .88rem
  background: $bgColor
  color: #fff
  padding-top: .2rem
  .header-left
    width: .64rem
    float: left
    .hleft-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    background: #fff
    color: #ccc
    padding-left: .2rem
    margin: .12rem 0 0 .2rem
    border-radius: .1rem
  .header-right
    width: 1.24rem
    float: left
    text-align: center
    color: #fff
    .arrow-right
      margin-left: -.1rem
</style>
