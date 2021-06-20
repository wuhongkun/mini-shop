<template>
  <!--  swiper最外面的哪个框-->
  <swiper>
    <!--  swiper-item每一张图片的组件-->
    <swiper-item v-for="items in banners">
      <a :href="items.link">
        <img :src="items.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "@/components/common/swiper/Swiper";
import SwiperItem from "@/components/common/swiper/SwiperItem";
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type: Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
