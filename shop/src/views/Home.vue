<template>
  <div class="home">
    <SlideBanner />
    <BestProductList />
    <FeaturedProductsList />
  </div>
</template>

<script>
import SlideBanner from "@/components/home/SlideBanner.vue";
import BestProductList from "@/components/home/BestProductList.vue";
import FeaturedProductsList from "@/components/home/FeaturedProductsList.vue";

export default {
  name: "home",
  components : {
    SlideBanner,
    BestProductList,
    FeaturedProductsList
  }
};
</script>
