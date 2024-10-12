<template>
  <div class="container-fluid">
    <Hero_section/>

  <Brands/>


  <new_arrivals :products="products"/>

  <Top_selling :top-selling-products="topSellingProducts"/>

  <Browes_by_Dress_style/>

  <Customer_Reviews_Section/>

</div>

</template>

<script>
import { useProductStore } from '@/stores/productStore';
import Brands from '@/components/Brands.vue';
import Browes_by_Dress_style from '@/components/Browes_by_Dress_style.vue';
import Customer_Reviews_Section from '@/components/Customer_Reviews_Section.vue';
import new_arrivals from '@/components/new_arrivals.vue';
import Top_selling from '@/components/Top_selling.vue';
import Hero_section from '@/components/hero_section.vue';

export default {
  components: {
    Brands,
    new_arrivals,
    Top_selling,
    Browes_by_Dress_style,
    Customer_Reviews_Section,
    Hero_section,
  },
  data() {
    return {
      products: [], 
      topSellingProducts: []
    };
  },
  async created() {
    const productStore = useProductStore();
    await productStore.fetchProducts(); 
    this.products = productStore.products; 
    
    this.topSellingProducts = this.products.slice(0, 4);
  },
};
</script>
