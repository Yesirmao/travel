<template>
  <div class="banner">
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
</template>
<script>
export default {
  name: 'DetailBanner'
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
