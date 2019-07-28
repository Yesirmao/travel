<template>
  <!-- 首页轮播 -->
  <!--wrapper高度相对于宽度的百分比，用于解决网速较慢时轮播的抖动问题-->
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!--用于显示轮播图下部选中时的圆点,当swiperOption配置项中的pagination的值为.swiper-pagination时，显示轮播分页-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '01',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/80dbfcab7fbac0a2395c65996c082616.jpg_890x330_09b0d8c7.jpg'
      }, {
        id: '02',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/ca4749bb92e93e2e5bf960c704b095d1.jpg_890x330_d9b4e8f3.jpg'
      }, {
        id: '03',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/245dc5b9a43e4d118084e6d78d7e80ee.jpg_890x330_2b7a1cf9.jpg'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  /*由于样式通过scoped修饰的，因此直接修改分页小圆点的样式则不会生效，因此通过>>>样式穿透来修改wrapper下的分页的样式*/
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
    /*通过设置宽高百分比来解决网速慢情况下页面的抖动问题*/
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 37.07%
    .swiper-img
      width: 100%
</style>
