<template>
<!-- 城市搜索框 -->
  <div class="search">
		<input class="input-search" type="text" placeholder="输入城市名或拼音">
	</div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
	@import '~^@/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.input-search
			box-sizing: border-box
			padding: 0 .1rem
			width: 100%
			height: .62rem
			line-height: .62rem
			border-radius: .06rem
			text-align: center
			color: #666
</style>
