<template>
    <div v-if="isVisible" class=" px-5 bg-black text-white d-flex justify-content-around align-items-center">
      <div class="flex-grow-1 text-center">
        <p class="mb-0">Sign up and get 20% off your first order. <span class="font-weight-bold" style="text-decoration: underline;">Sign Up Now!</span></p>
      </div>
      <div class="d-none d-md-block">
        <div class="text-end" @click="hideContainer">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 24 24" fill="#fff" style="cursor: pointer;">
            <path d="M10.586 12L2.793 4.207l1.414-1.414L12 10.586l7.793-7.793l1.414 1.414L13.414 12l7.793 7.793l-1.414 1.414L12 13.414l-7.793 7.793l-1.414-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const isVisible = ref(true);
  
  const hideContainer = () => {
    isVisible.value = false; 
    alert('Div is now hidden');
  };
  </script>