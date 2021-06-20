<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar{
  /*水平分布*/
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -1px 2px rgba(100,100,100,0.6);
}

</style>
