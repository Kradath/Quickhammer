<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';
import Main from './Main.vue';
</script>
<template>
  <div>
    
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style scoped>
  main {
    margin: 2% auto;
    
  }
</style>