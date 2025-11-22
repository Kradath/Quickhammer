<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="elite role"></div>
      <h2 class="unit__head-name">Exodus</h2>
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
  name: "Exodus",
  stats: [7, 4, 8, 4, 4, 3, 5, 2, 9, 10, 7, 7, 3, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "light"],
  Stypes: [],
  base: 32,
  cost: 165,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol", "the instrument", "venom spheres"],
    melee_weapons: ["krak grenades", "power dagger"],
    wargear: ["frag grenades"],
  },
  SR: {
    infiltrate: "(9)",
    shrouded: "(5+)",
    "lone killer": "",
    precision: "(4+)",
    "support unit": "(1)",
  },
  traits: ["[allegiance]", "alpha legion", "smokescreen"],
  options: false,
});
</script>