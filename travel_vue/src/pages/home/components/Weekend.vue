<template>
  <div>
		<div class="title">{{goWhere}}</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      goWhere: '周末去哪儿',
      seeDetail: '查看详情',
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg',
        title: '深圳周边游',
        desc: '远离城市喧嚣，开启周边新假期'
      }, {
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '清远周边游',
        desc: '享受生活，享受温泉，放松身心，顺便还可以"叫鸡".人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }, {
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/b8/5d599bbdcf8b57.jpg_r_640x214_2ee055e3.jpg',
        title: '欢乐长隆',
        desc: '欢乐长隆，长隆海洋公园，享受周末，度假休闲好去处'
      }, {
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg',
        title: '深圳必打卡',
        desc: '来到深圳，这里是必打卡之处，您轻松休闲的好去处'
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
	.item-img-wrapper
		overflow: hidden
		height: 0
		padding-bottom: 33.9%
	.item-img
		width: 100%
	.item-info
		padding: .1rem
		.item-title
			line-height: .48rem
			font-size: .28rem
			color: #212121
			ellipsis()
		.item-desc
			line-height: .42rem
			font-size: .24rem
			color: #616161
			ellipsis()
</style>
