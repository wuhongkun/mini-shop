<template>
  <div class="recommend">
    <div v-for="items in recommends" class="recommend-item">
      <a :href="items.link">
        <img :src="items.image" alt="">
        <div>{{items.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    /* 水平分布 */
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 14px;
    padding: 10px 0 25px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item{
    flex: 1;
  }

  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 4px;
  }

</style>
