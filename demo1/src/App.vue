<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <cnode-header></cnode-header>
    <router-view></router-view>
  </div>
</template>

<script>
import CnodeHeader from './components/CnodeHeader'
export default {
  data( ) {
    return {
    }
  },
  comments:{
    CnodeHeader
  } 
}
</script>

<style lang="less">
@import './assets/common.less';

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
