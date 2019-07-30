<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo () {
      this.axios.get('/api/city.json').then(this.getCityInfoSuccess)
    },
    getCityInfoSuccess (res) {
      var result = res.data
      if (result.ret && result.data) {
        this.hotCities = result.data.hotCities
        this.cities = result.data.cities
      }
    }
  },
  mounted () {
    // 获取city数据
    this.getCityInfo()
  }
}
</script>
<style lang="stylus" scoped>
</style>
