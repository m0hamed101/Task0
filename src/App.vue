<template>
  <div id="app">
    <BaseLayout>
      <router-view /> <!-- This is where page-specific content will be displayed -->
    </BaseLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  
});
</script>


