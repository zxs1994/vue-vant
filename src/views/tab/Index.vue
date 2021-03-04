<template>
  <div class='Index'>
    <router-view />
    <van-tabbar route >
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/page1" icon="search">page1</van-tabbar-item>
      <van-tabbar-item replace to="page" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item replace icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  name: 'Index',
  data() {
    return {
      
    }
  },
  methods: {
    onChange(index) {
      console.log(index)
    },
  },
  created() {
    
  }
}
</script>
<style lang='less' scoped>
  .Index {
    padding-bottom: 60px; 
  }
</style>