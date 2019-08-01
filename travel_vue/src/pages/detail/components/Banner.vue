<template>
	<div>
		<!-- 图片区域 -->
			<div class="banner" @click="handleBannerClick">
			<img src="http://img1.qunarzz.com/sight/p0/1907/8d/8da769b8a045ec98a3.img.jpg_600x330_43ca5751.jpg"
			class="banner-img" alt="深圳欢乐谷">
			<div class="banner-info">
				<div class="banner-title">深圳欢乐谷(AAAAA景区)</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe632;</span>
					<span>39</span>
				</div>
			</div>
		</div>
		<!-- 点击图片详情后显示的图片轮播区域 -->
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseGallary"></common-gallary>
	</div>
</template>
<script>
// 本页面实现功能如下：
// 点击图片时，通过handleBannerClick的showGallary属性来控制当前图片区域和点击后的图片区域的切换
// 当点击外部图片触发handleBannerClick时间，使this.showGallary = false，控制下面的轮播组件隐藏，
// 顺便通过父组件将imgs的数据传递给子组件
import CommonGallary from '^common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1907/b5/b50389ea88e2df42a3.water.jpg_r_800x800_05f5f385.jpg',
        'http://img1.qunarzz.com/sight/p0/1907/25/257c315f17d621e2a3.water.jpg_r_800x800_106e5992.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    // 当点击图片时，使轮播图页面显示
    handleBannerClick () {
      this.showGallary = true
    },
    // 通过接收子组件传递上来的时间，控制轮播图的隐藏
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
	.banner
		position: relative
		overflow: hidden
		height: 0
		padding-bottom: 55%
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top,rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
			.banner-title
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				height: .32rem
				line-height: .32rem
				padding: 0 .4rem
				margin-top: .14rem
				border-radius: .2rem
				background: rgb(0, 0, 0, 0, .8)
				font-size: .24rem
				.banner-icon
					font-size: .24rem
</style>
