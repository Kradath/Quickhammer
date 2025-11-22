<template>
  <div class="one-exemplar">
    <h3 :id="wargear.id" class="list-li-name">
      {{ wargear.name }}
    </h3>
    <p class="bold">{{ wargear.desc }}</p>
    <div v-html="wargear.text"></div>
    <!-- <div class="first-letter">Faction: {{ wargear.faction }}</div> -->
  </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  wargear: {
    type: Object,
    required: true,
  },
});
</script>