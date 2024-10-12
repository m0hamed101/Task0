<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white my-0 my-lg-2 mx-0 mx-lg-5 px-0 px-lg-5">
    <div class="container-fluid d-flex">
      <span
        class="navbar-toggler navbar-toggler-icon border-0 mx-2"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></span>

      <router-link to="/" class="navbar-brand font-weight-bold">
        <strong>SHOP.CO</strong>
      </router-link>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown" @click="toggleDropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              :class="{ show: isDropdownOpen }"
            >
              Shop
            </a>
            <ul class="dropdown-menu" :class="{ show: isDropdownOpen }">
              <li><a class="dropdown-item" href="#">Men</a></li>
              <li><a class="dropdown-item" href="#">Women</a></li>
              <li><a class="dropdown-item" href="#">Kids</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Accessories</a></li>
              <li><a class="dropdown-item" href="#">Footwear</a></li>
              <li><a class="dropdown-item" href="#">Home & Living</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">On Sale</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">New Arrivals</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Brands</a>
          </li>
        </ul>
      </div>

      <form
        class="d-none d-lg-flex w-50 border-0"
        style="border-radius: 25px; background-color: #F0F0F0;"
      >
        <button class="btn" type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000000"
              d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
            />
          </svg>
        </button>
        <input
          style="border-radius: 25px; background-color: #F0F0F0;"
          class="form-control border-0"
          type="search"
          placeholder="Search for products..."
          aria-label="Search"
        />
      </form>

      <ul class="navbar-nav flex-row m-0 p-0">
        <li class="nav-item mx-1 px-1">
          <router-link to="/cart" class="nav-link">
            <div class="position-relative">
              <svg
                class="m-0 p-0"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#000000"
                  d="M227.07 61.44A4 4 0 0 0 224 60H59.34l-6.68-36.72A4 4 0 0 0 48.73 20H24a4 4 0 0 0 0 8h21.39l6.69 36.8l19.41 106.78A20 20 0 0 0 79 183.85a24 24 0 1 0 30.87 4.15h60.26a24 24 0 1 0 17.87-8H91.17a12 12 0 0 1-11.8-9.85l-4-22.15H196.1a20 20 0 0 0 19.68-16.42l12.16-66.86a4 4 0 0 0-.87-3.28M108 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m96 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16m3.91-73.85A12 12 0 0 1 196.1 140H73.88L60.79 68h158.42Z"
                />
              </svg>
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                {{ cartItemCount }}
              </span>
            </div>
          </router-link>
        </li>

        <li class="nav-item d-lg-none mx-1 px-1">
          <a class="nav-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
              />
            </svg>
          </a>
        </li>

        <li class="nav-item mx-1 px-1">
          <a class="nav-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#000000"
                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.9 7.9 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.93 7.93 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <div class="collapse" id="searchForm">
    <form
      class="d-none d-lg-flex w-50 border-0"
      style="border-radius: 25px; background-color: #F0F0F0;"
    >
      <button class="btn" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#000000"
            d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"
          />
        </svg>
      </button>
      <input
        style="border-radius: 25px; background-color: #F0F0F0;"
        class="form-control border-0"
        type="search"
        placeholder="Search for products..."
        aria-label="Search"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useProductStore } from '@/stores/productStore'; 

export default defineComponent({
  name: 'Navbar',
  setup() {
    const cartStore = useProductStore();
    const isDropdownOpen = ref<boolean>(false);

    const toggleDropdown = (): void => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const cartItemCount = computed<number>(() => cartStore.cart.length);

    return {
      isDropdownOpen,
      toggleDropdown,
      cartItemCount,
    };
  },
});
</script>

<style scoped>
.navbar-nav {
  margin-left: auto;
}

.badge {
  font-size: 0.75rem; 
}
</style>
