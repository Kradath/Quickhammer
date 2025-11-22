<template>
  <ul class="unit-types__list-ul">
    <h3 :id="unit_type.id" class="list-li-name">
      {{ unit_type.name }}
    </h3>
    <p>{{ unit_type.desc }}</p>
    <li
      v-for="relate in unit_type.relations"
      :key="relate.id"
      class="unit-types__list-ul-li"
    >
      {{ relate }}
    </li>
  </ul>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  unit_type: {
    type: Object,
    required: true,
  },
});    
</script>