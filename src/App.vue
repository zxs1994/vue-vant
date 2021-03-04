<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.fullPath" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.fullPath" />
  </div>
</template>

<style lang="less">
#app {
  max-width: 10rem;
  background: #2c3e50;
  margin: 0 auto;
  min-height: 100vh;
  font-size: 20px;
}

* {
  box-sizing: border-box;
}
</style>
