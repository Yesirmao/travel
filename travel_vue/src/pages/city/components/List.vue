<template>
<!-- 城市列表 -->
  <div class="list" ref="wrapper">
		<div>
			<div class="area">
			<div class="title border-topbottom">当前城市</div>
			<div class="button-list">
				<div class="button-wrapper">
					<div class="button">北京</div>
				</div>
			</div>
		</div>
		<div class="area">
			<div class="title border-topbottom">热门城市</div>
			<div class="button-list">
				<div class="button-wrapper" v-for="city of hotCities" :key="city.id">
					<div class="button">{{city.name}}</div>
				</div>
			</div>
		</div>
		<div class="area" v-for="(city, key) of cities" :key="key">
			<div class="title border-topbottom">{{key}}</div>
			<div class="item-list">
				<div class="item border-bottom" v-for="item of city" :key="item.id">
					{{item.name}}
				</div>
			</div>
		</div>
		</div>
	</div>
</template>
<script>
// 引入better-scroll滚动条，其封装的是iscroll
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object
  },
  mounted () {
    // 获取整个城市列表的页面的引用，当页面数据溢出时，生成滚动条，否则不自动生成滚动条
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
	@import '~^@/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc
	.border-bottom
		&:before
			border-color: #ccc
	.list
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		bottom: 0
		right: 0
		.title
			line-height: .54rem
			background: #eee
			padding-left: .2rem
			font-size: .26rem
			color: #666
		.button-list
			overflow: hidden
			padding: .1rem .6rem .1rem .1rem
			.button-wrapper
				float: left
				width: 33.3%
				.button
					margin: .1rem
					padding: .1rem 0
					text-align: center
					border: .02rem solid #ccc
					border-radius: .06rem
		.item-list
			.item
				line-height: .76rem
				padding-left: .2rem
</style>
