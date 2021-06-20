<template>
  <div id="app">
<!--    底部tabbar-->
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
    </div>
</template>


<script>
  import MainTabBar from "@/components/context/MainTabBar/MainTabBar";
  export default {
    name:'APP',
    components:{
      MainTabBar
    }
  }

</script>

<style>
  @import "assets/css/base.css";
</style>
