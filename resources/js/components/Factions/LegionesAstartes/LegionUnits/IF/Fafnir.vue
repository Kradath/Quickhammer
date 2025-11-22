<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Fafnir Raan</h2>
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
  name: "Fafnir",
  composition: [1],
  cost: 175,
  base: 32,
  stats: [7, 6, 4, 4, 4, 4, 5, 4, 9, 8, 8, 8, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["the headsmen and the hunter"],
    wargear: [
      "frag grenades",
      "krak grenades",
      "boarding shield",
      
    ],
  },
  SR: {
    impact: "(A)",
    "shield master": "",
    "executioner's tax": "",
  },
  traits: ["loyalist", "imperial fists", "master of the legion", "shield"],
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  
  
  twoProfiles: false,
  
  
  
  options: false,
});
</script>