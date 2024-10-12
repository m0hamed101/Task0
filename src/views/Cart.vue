<template>
  <div class="cart-container">
    <div class="cart-items">
      <h2 class="cart-title">YOUR CART</h2>
      <div class="cartContaner">
        <div class="align-items-center d-flex" v-for="(item, index) in cartItems" :key="index">
          <div class="d-flex w-100">
            <div class="item-image">
              <img :src="item.image" alt="product image" class="w-100">

            </div>
            <div class="item-details">
              <div class="d-flex justify-content-between">
                <h4>{{ item.title }}</h4>
                <button @click="removeItem(item.id)" class="remove-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#ff0000"
                      d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17" />
                  </svg>
                </button>
              </div>
              <p>{{ item.description }}</p>
              
                <div>Color: {{ item.color }}</div>
                <div>Size: {{ item.size }}</div>
                <div class="d-flex justify-content-between">
                <div class="item-price">{{ item.price }}</div>
                <div class="item-quantity">
                  <button @click="decreaseQuantity(item.id)">-</button>
                  <span class="">{{ item.quantity }}</span>
                  <button @click="increaseQuantity(item.id)">+</button>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <hr style="width: 80%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side: Order Summary -->
    <div class="order-summary">
      <h2>Order Summary</h2>
      <div class="summary-row">
        <span>Subtotal</span>
        <span class="total">{{ calculateSubtotal() }}</span>
      </div>
      <div class="summary-row">
        <span>Discount (10%)</span>
        <span class="text-danger total">-{{ calculateDiscount() }}</span>
      </div>
      <div class="summary-row">
        <span>Delivery Fee</span>
        <span class="total">$15</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span class="total">{{ calculateTotal() }}</span>
      </div>

      <div class="promo-code px-2">
        <div style="background-color: #f0f0f0;" class="rounded-5 px-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#000000" d="M7.5 6A1.5 1.5 0 1 0 9 7.5A1.5 1.5 0 0 0 7.5 6m13.62 4.71l-8.41-8.42A1 1 0 0 0 12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 .29.71l8.42 8.41a3 3 0 0 0 4.24 0L21.12 15a3 3 0 0 0 0-4.24Zm-1.41 2.82l-6.18 6.17a1 1 0 0 1-1.41 0L4 11.59V4h7.59l8.12 8.12a1 1 0 0 1 .29.71a1 1 0 0 1-.29.7"/></svg>
          <input class="rounded-5" v-model="promoCode" type="text" placeholder="Promo Code" style="background-color: #f0f0f0;">
        </div>
        <button @click="applyPromo" class="rounded-5" style="width: 120px;">Apply</button>
      </div>

      <button class="checkout-btn text-white bg-dark">Go to Checkout</button>
    </div>
  </div>
</template>

<script>
import { useProductStore } from '@/stores/productStore';

export default {
  data() {
    return {
      promoCode: '',
    };
  },
  computed: {
    cartItems() {
      const productStore = useProductStore();
      return productStore.cart; 
    },
  },
  methods: {
    increaseQuantity(productId) {
      const productStore = useProductStore();
      productStore.updateCartQuantity(productId, productStore.cart.find(item => item.id === productId).quantity + 1);
    },
    decreaseQuantity(productId) {
      const productStore = useProductStore();
      const currentItem = productStore.cart.find(item => item.id === productId);
      if (currentItem && currentItem.quantity > 1) {
        productStore.updateCartQuantity(productId, currentItem.quantity - 1);
      }
    },
    removeItem(productId) {
      const productStore = useProductStore();
      productStore.removeFromCart(productId);
    },
    calculateSubtotal() {
      const productStore = useProductStore();
      return productStore.getCartTotal().toFixed(2);
    },
    calculateDiscount() {
      return (this.calculateSubtotal() * 0.1).toFixed(2);
    },
    calculateTotal() {
      return (this.calculateSubtotal() - this.calculateDiscount() + 15).toFixed(2); // Adding $15 delivery fee
    },
    applyPromo() {
      alert(`Promo code ${this.promoCode} applied!`);
    },
  },
};
</script>

<style scoped>
.cart-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.cart-items {
  width: 100%;
}

.cart-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.cart-item {
  margin-bottom: 20px;
}

.cartContaner {
  border: 1px solid gainsboro;
  padding: 12px;
  border-radius: 25px;
  margin-bottom: 20px;
}

.item-image {
  width: 100px;
  height:100%;
  object-fit: cover;
  margin-right: 20px;
}

.item-details {
  flex: 1;
}

.item-details h4 {
  font-size: 16px;
  font-weight: bold;
}

.item-details p {
  font-size: 14px;
  color: #888;
}

.item-price {
  font-size: 16px;
  font-weight: bold;
  margin-top: 5px;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.item-quantity button {
  background-color: #f0f0f0;
  border: none;
  border-radius: 25px;
  padding: 5px 10px;
  cursor: pointer;
  width: 30px;
}

.remove-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.order-summary {
  width: 100%;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  margin-top: 20px;
}

.order-summary h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.summary-row.total {
  font-weight: bold;
}

.promo-code {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.promo-code input {
  width: 70%;
  padding: 10px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
}

.promo-code button {
  padding: 10px;
  border: none;
  background-color: #000;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.checkout-btn {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 25px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
}

.checkout-btn:hover {
  background-color: #333;
}

/* Responsive Styles */
@media (min-width: 768px) {
  .cart-container {
    flex-direction: row;
  }

  .cart-items {
    width: 60%;
  }

  .order-summary {
    width: 30%;
    margin-left: 20px;
  }
}

@media (max-width: 600px) {
  .item-image {
    width: 50px;
    height: 50px;
  }

  .item-details h4 {
    font-size: 14px;
  }

  .item-price {
    font-size: 14px;
  }
}
</style>
