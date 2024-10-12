<template>
  <div class="" style="margin: 0 20px">
    <div class="row mx-5 mt-5">
      <div class="col text-center">
        <h2>TOP SELLING</h2>
      </div>
    </div>


    <div class="d-flex overflow-x-auto justify-content-center ">
      <div v-for="(product) in topSellingProducts" :key="product.id" class="product-card d-flex ">
        <router-link :to="`/product/${product.id}`" class="no-link-style m-3">
          <div class="card m-0 " style="height: 300px; width: 250px;">
            <div class="justify-content-center d-flex" style="border-radius: 25px; height: 300px; overflow: hidden;">

              <div style="width: 70%;">


                <img :src="product.image" :alt="`Image of ${product.title}`" class="card-img-top"
                  style="border-radius: 25px;object-fit: cover;" />
              </div>

            </div>
            <div class="card-body" style="text-align: left;">
              <h6 class="product-title">{{ product.title }}</h6>
              <div>
                <span class="text-warning" v-for="star in Math.floor(product.rating.rate)" :key="star">★</span>
                <span class="text-muted" v-for="star in 5 - Math.floor(product.rating.rate)"
                  :key="star + 'empty'">☆</span>
                {{ product.rating.rate }}
              </div>
              <div>{{ product.price }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>


    <div style="align-items: center; text-align: center">
      <button style="
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: white;
          border-radius: 62px;
          width: 150px;
          height: 40px;
        ">
        View All
      </button>
    </div>
    <div class="d-flex justify-content-center">
      <hr style="width: 80%; margin-top: 50px;" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topSellingProducts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.no-link-style {
  text-decoration: none;
  color: inherit;
}

.no-link-style:hover {
  text-decoration: none;
  color: inherit;
}



.product-link {
  text-decoration: none;
  color: inherit;
}

.card-body h6 {
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-body p {
  font-size: 0.9rem;
}
</style>
