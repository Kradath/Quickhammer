<template><button @click="goBack" class="back-btn"></button></template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
function goBack() {
  const current = route.path || "/";
  let parent = current.replace(/\/[^/]+\/?$/, "/");
  
  if (!parent || parent === "") parent = "/";
  router.push(parent);
}
</script> 

