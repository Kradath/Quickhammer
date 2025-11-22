<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Caedes Nex</h2>
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
  name: "Caedes Nex",
  composition: [1],
  cost: 165,
  base: 32,
  stats: [8, 5, 6, 4, 4, 3, 5, 3, 9, 8, 8, 8, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["phaeton"],
    ranged_weapons: ["fulcrum hand cannons"],
    wargear: ["cameleoline", "frag grenades", "krak grenades", "melta bombs"],
  },
  SR: {
    "infiltrate": "(8)",
    "the blood crow": "",
    "precision": "(5+)",
  },
  traits: ["loyalist", "raven guard"],
  types: ["infantry", "unique", "specialist"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>