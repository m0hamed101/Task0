<template>
  <div class="container product-page">
    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="spinner-border text-primary" role="status">
        <span class="sr-only"></span>
      </div>
    </div>

    <!-- Product Page Content -->
    <div v-else>
      <div class="row">
        <!-- Product Images Section -->
        <div class="col-md-6 d-flex ">
          <div class="thumbnail-list d-flex upper_thumbnail-list d-none d-md-flex">
            <img v-for="(image, index) in productImages" :key="index" :src="image" alt="Thumbnail" class="img-thumbnail"
              @click="selectedImage = image" />
          </div>

          <div>
            <div class="product-images" style="max-width: 300px;">
              <img style="width: 100%;" :src="selectedImage" alt="Product Image" class="img-fluid"
                v-if="productImages.length" />
            </div>

            <div class="thumbnail-list d-flex lower-thumbnail-list d-md-none d-flex">
              <img v-for="(image, index) in productImages" :key="index" :src="image" alt="Thumbnail"
                class="img-thumbnail" @click="selectedImage = image" />
            </div>
          </div>
        </div>

        <!-- Product Details Section -->
        <div class="col-md-6">
          <h2>{{ product.title }}</h2>
          <div>
            <span class="text-warning" v-for="star in Math.floor(product.rating?.rate)" :key="star">★</span>
            <span class="text-muted" v-for="star in 5 - Math.floor(product.rating?.rate)" :key="star + 'empty'">☆</span>
            {{ product.rating.rate }}
          </div>
          <p>
            <span class="price-original text-muted"><del>\${{ product.price }}</del></span>
            <span class="price-discounted">\${{ product.price }}</span>
          </p>
          <p>{{ product.description }}</p>
          <hr>

          <!-- Color Options -->
          <div>Select Colors:</div>
          <div class="colors my-3 d-flex">
            <button v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color.hex }"
              class="color-circle" @click="selectedColor = color.name">
              <div  v-if="selectedColor === color.name" class="text-white">✔</div>
            </button>
          </div>
          <hr>

          
          <strong>Choose Size:</strong>
          <div class="sizes my-3">
            <button style="border: none;" v-for="(size, index) in sizes" :key="index"
              class="rounded-4 px-lg-3 py-lg-2 mx-1"
              :class="{ 'selected-size': selectedSize === size, 'unselected-size': selectedSize !== size }"
              @click="selectedSize = size"
              :style="selectedSize === size ? { backgroundColor: 'black', color: 'white' } : {}">
              {{ size }}
            </button>
          </div>

          <hr>

          <!-- Add to Cart and Quantity Management -->
          <div class="d-flex">
            <div class="item-quantity rounded-5 px-3 m-1 ">
              <button class="border border-0 rounded-5 fw-bold"@click="decreaseQuantity">-</button>
              <span >{{ quantity }}</span>
              <button class="border border-0 rounded-5 fw-bold"@click="increaseQuantity">+</button>
            </div>
            <button class="w-100 bg-dark text-white rounded-5" @click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="container mt-5">
        <h3>Customer Reviews</h3>
        <div class="row">
          <div class="col-12 col-md-6" v-for="(review, index) in productReviews" :key="index">
            <div class="card my-3">
              <div class="card-body">
                <h5 class="card-title">{{ review.username }}</h5>
                <p class="card-text">{{ review.comment }}</p>
                <p class="card-text">
                  <span class="text-warning" v-for="star in review.rating" :key="star">★</span>
                  <span class="text-muted" v-for="star in 5 - review.rating" :key="star + 'empty'">☆</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Suggested Products Section -->
      <div class="row mt-5">
        <div class="col">
          <h4 class="text-center mb-4">You Might Also Like</h4>
          <div class="suggested-products-container overflow-auto">
            <div v-for="(suggestion, index) in store.relatedProducts" :key="index" class="suggested-product">
              <router-link :to="`/product/${suggestion.id}`" class="no-link-style">
                <div class="card" style="height: 300px; width: 250px;">
                  <div class="justify-content-center d-flex"
                    style="border-radius: 25px; height: 300px; overflow: hidden;">

                    <div style="width: 70%;">

                      <img :src="suggestion.image" :alt="`Image of ${suggestion.title}`" class="card-img-top"
                        style="border-radius: 25px; object-fit: cover;" />
                    </div>
                  </div>
                  <div class="card-body text-left">
                    <h6 class="product-title">{{ suggestion.title }}</h6>
                    <div>
                      <span class="text-warning" v-for="star in Math.floor(suggestion.rating.rate)" :key="star">★</span>
                      <span class="text-muted" v-for="star in 5 - Math.floor(suggestion.rating.rate)"
                        :key="star + 'empty'">☆</span>
                    </div>
                    <div>\${{ suggestion.price }}</div>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/productStore';

export default {
  data() {
    return {
      selectedImage: null,
      selectedColor: null,
      selectedSize: null,
      quantity: 1,
      colors: [
        { name: 'red', hex: '#4F4631' },
        { name: 'blue', hex: '#314F4A' },
        { name: 'black', hex: '#31344F' },
      ],
      sizes: ['Small', 'Medium', 'Large', 'X-Large'],
      productReviews: [
        { username: 'John Doe', rating: 5, comment: "Amazing quality!" },
        { username: 'Jane Smith', rating: 4, comment: "Good fit, but color faded." },
        { username: 'Alex Johnson', rating: 3, comment: "Average, not worth the price." }
      ],
      loading: true,
    };
  },
  computed: {
    product() {
      return this.store.product || {};
    },
    productImages() {
      return this.product.image ? [this.product.image] : ['https://via.placeholder.com/450'];
    },
    store() {
      return useProductStore();
    }
  },
  methods: {
    increaseQuantity() {
      this.quantity++;
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    addToCart() {
      if (!this.selectedColor || !this.selectedSize) {
        alert("Please select a color and a size before adding to cart.");
        return;
      }

      const productData = {
        id: this.product.id,
        title: this.product.title,
        image: this.selectedImage,
        price: this.product.price,
        color: this.selectedColor,
        size: this.selectedSize,
        quantity: this.quantity,
      };

      this.store.addToCart(productData);
      alert(`Added to cart: ${this.product.title}, Color: ${this.selectedColor}, Size: ${this.selectedSize}, Quantity: ${this.quantity}`);
    },
    addToWishlist() {
      alert(`Added to wishlist: ${this.product.title}`);
    }
  },
  async created() {
    const route = useRoute();
    const id = route.params.id;
    const store = useProductStore();
    this.store = store;

    await store.fetchProductById(id);

    this.selectedImage = this.productImages[0] || 'https://via.placeholder.com/450';
    this.loading = false;
  }
};
</script>

<style scoped>
.product-page {
  padding: 20px;
}

.main-img {
  width: 80%;
  height: auto;
}

.thumbnail-list img {
  width: 70px;
  height: 70px;
  margin-right: 10px;
  cursor: pointer;
}

.thumbnail-list img:hover {
  border: 2px solid #000;
}

.price-original {
  font-size: 1.2rem;
}

.price-discounted {
  font-size: 1.5rem;
  font-weight: bold;
}

.text-warning {
  color: #ffc107;
}

.no-link-style {
  text-decoration: none;
  color: inherit;
}

.no-link-style:hover {
  text-decoration: none;
  color: inherit;
}

.product-card {
  flex: 0 0 auto;
}

.card-body h6 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.colors .color-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
  cursor: pointer;
}

.item-quantity {
  background-color:#f0f0f0;
  display: flex;
  align-items: center;
}

.item-quantity button {
  width: 40px;
  height: 40px;
}

.item-quantity span {
  padding: 0 10px;
}

.suggested-products-container {
  display: flex;
  overflow-x: auto;
  padding: 10px;
  gap: 10px;
}

.suggested-product {
  flex: 0 0 auto;
  margin-right: 10px;
}
</style>
