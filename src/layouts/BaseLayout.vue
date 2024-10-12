<template>
    <div>
        <Auth_Alert/>
      <Nav/>
      
      <main>
        <router-view />
      </main>
      
      <Footer/>
    </div>
  </template>
  
  <script setup>
import Auth_Alert from '@/components/Auth_Alert.vue';
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';

 
  </script>
  