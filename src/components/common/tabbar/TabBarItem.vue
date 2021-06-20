<template>
  <div class="tab-bar-item" @click="itemClick">
<!--    <img src="../../assets/img/tabbar/shouye.svg" alt="">-->
<!--    <div>-->
<!--      首页-->
<!--    </div>-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    activeColor:{
      type: String,
      default: '#fb76b7' //默认值，如果父组件不传值过来就为默认值
    }
  },
  data(){
    return{
      // isActive:true
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1; //找到this.path就不等于-1 ，$route：哪一个路由处于活跃就是哪一个对象
      // return this.$route.path = this.path          //$route：哪一个路由处于活跃就是哪一个对象
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {} //如果组件处于或与，颜色赋值，否则为默认
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  /*均等化*/
  flex: 1;
  text-align: center;
  font-size: 18px;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
/*.active{*/
/*  color: #fb76b7;*/
/*}*/
</style>
