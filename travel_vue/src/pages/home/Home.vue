<template>
  <div>
    <!-- 首页头部输入框 -->
    <home-header></home-header>
    <!-- 首页轮播图 -->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <!-- 首页图标区域 -->
    <home-icons :itemList="itemList"></home-icons>
    <!-- 首页热点推荐区域 -->
    <home-recommond :recommendList="recommendList"></home-recommond>
    <!-- 首页星期去哪儿区域 -->
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommond from './components/Recommond'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  data () {
    return {
      swiperList: [],
      itemList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommond,
    HomeWeekend
  },
  methods: {
    // 发送获取首页数据的ajax请求
    getHomeInfo () {
      // 此时的api经过配置转发后会被替换为/static/mock
      this.axios.get('/api/index.json').then(this.getHomeInfoSuccess)
    },
    // 获取首页请求数据
    getHomeInfoSuccess (res) {
      res = res.data
      // 如果后端返回的结果正确，且返回的结果补位空
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.itemList = data.itemList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style scoped>

</style>
