<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Sigismund</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";
const windowWidth = ref(window.innerWidth);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
const stats = reactive({
  name: "Sigismund",
  composition: [1],
  cost: 250,
  base: 32,
  stats: [7, 7, 4, 4, 4, 4, 5, 5, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["the black sword"],
    wargear: [
      "frag grenades",
      "krak grenades",
    ],
  },
  SR: {
    precision: "(4+)",
    "slayer of kings": "",
    "death's champion": "",
    "eternal warrior": "(1)",
  },
  traits: ["loyalist", "imperial fists", "master of the legion"],
  types: ["infantry", "command", "unique"],
  Stypes: [],
  
  
  twoProfiles: false,
  
  
  
  options: false,
});
</script>