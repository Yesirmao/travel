<template>
	<!-- 实现头部的渐隐渐现效果 -->
	<div>
		<router-link class="header-abs" to="/" tag="div" v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe65b;</div>
		</router-link>
		<router-link class="header-fixed" to="/" tag="div" v-show="!showAbs" :style="opacityStyle">
			{{travelDetail}}
			<div class="iconfont header-fixed-back">&#xe65b;</div>
		</router-link>
	</div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      travelDetail: '景点详情',
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 只要当前页面滚动，就可以获取滚动条距离顶部的距离.当滚动条距离顶部60px时，则让固定的头部显示
      // 当距离小于60时，则不显示
      let top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity	= opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
	@import '~^@/varibles.styl'
	.header-abs
		position: absolute
		top: .2rem
		left: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		border-radius: .4rem
		text-align: center
		background: rgba(0, 0, 0, .3)
		.header-abs-back
			font-size: .4rem
			color: #fff
	.header-fixed
		position: fixed
		top: 0
		left: 0
		right: 0
		overflow: hidden
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		background : $bgColor
		color: #fff
		font-size: .32rem
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>
