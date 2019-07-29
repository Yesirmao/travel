<template>
  <div>
		<div class="title">{{hotRecommend}}</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img :src="item.imgUrl" class="item-img">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">{{seeDetail}}</button>
				</div>
			</li>
		</ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommond',
  data () {
    return {
      hotRecommend: '热点推荐',
      seeDetail: '查看详情',
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1905/e6/e683c8cf5e97ce03a3.img.jpg_200x200_4769276c.jpg',
        title: '世界之窗',
        desc: '世界之窗 国际啤酒节'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
        title: '小梅沙',
        desc: '深圳小梅沙 海洋世界'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg',
        title: '欢乐谷',
        desc: '深圳欢乐谷'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1907/7a/7a027c49bb8f730aa3.water.jpg_200x200_0051bdbf.jpg',
        title: '华侨城',
        desc: '东部华侨城 大峡谷'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
	@import '~^@/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			min-width: 0
			padding: .1rem
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				background: #ff9300;
				padding: 0 .2rem
				border-radius: .06rem
				margin-top: .16rem
				color: #fff
</style>
