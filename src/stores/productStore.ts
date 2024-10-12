import { defineStore } from 'pinia';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number; 
  image: string;
  category?: string;
}

interface CartItem extends Product {
  quantity: number;
}

export const useProductStore = defineStore('productStore', {
  state: () => ({
    product: null as Product | null,
    products: [] as Product[], 
    categories: [] as string[], 
    relatedProducts: [] as Product[],
    cart: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[], 
    userCarts: [] as CartItem[], 
    isLoading: false, 
  }),
  actions: {
    async fetchProductById(id: number) {
      try {
        const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
        this.product = response.data;
        await this.fetchRelatedProducts();
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    },

    async fetchProducts(limit = 4) {
      this.isLoading = true;
      try {
        const response = await axios.get<Product[]>(`https://fakestoreapi.com/products?limit=${limit}`);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isLoading = false;
      }
    },

    async fetchRelatedProducts(limit = 4) {
      await this.fetchProducts(limit);
      this.relatedProducts = this.products.filter(product => product.id !== this.product?.id);

      if (this.relatedProducts.length === 0) {
        this.relatedProducts = this.getStaticRelatedProducts();
      }
    },

    getStaticRelatedProducts(): Product[] {
      return [
        { id: 1, title: 'Plain Cotton T-Shirt', price: 20, image: 'https://via.placeholder.com/200' },
        { id: 2, title: 'Oversized Graphic T-Shirt', price: 25, image: 'https://via.placeholder.com/200/FF00FF' },
        { id: 3, title: 'Comfort Fit Polo', price: 30, image: 'https://via.placeholder.com/200/00FFFF' },
        { id: 4, title: 'Striped Crew Neck', price: 18, image: 'https://via.placeholder.com/200/FF0000' },
      ];
    },

    addToCart(product: Product) {
      const existingProduct = this.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCartToLocalStorage(); 
    },

    removeFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId);
      this.saveCartToLocalStorage();
    },

    updateCartQuantity(productId: number, quantity: number) {
      const productInCart = this.cart.find(item => item.id === productId);
      if (productInCart && quantity > 0) {
        productInCart.quantity = quantity;
      } else {
        this.removeFromCart(productId);
      }
      this.saveCartToLocalStorage(); 
    },

    clearCart() {
      this.cart = [];
      this.saveCartToLocalStorage(); 
    },

    getCartTotal(): number {
      return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },

    saveCartToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
  },
});
