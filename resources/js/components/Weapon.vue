<template>
    <main>
        <nav class="main-menu center">
        <router-link to="/weapon/range" class="main-menu__button">Range Weapon</router-link>
        <router-link to="/weapon/melee" class="main-menu__button">Melee Weapon</router-link>
        <!-- <router-link to="/factions/Forces-of-the-Omnissiah" class="main-menu__button">Forces of the Omnissiah</router-link> -->
      </nav>
      <div> <Bb /> </div>
    </main>
</template>
<script setup>
  import Bb from "./BackButton.vue";
</script>