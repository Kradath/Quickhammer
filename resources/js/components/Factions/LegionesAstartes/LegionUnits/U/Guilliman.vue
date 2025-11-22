<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Roboute Guilliman</h2>
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
  name: "Guilliman",
  cost: 465,
  stats: [8, 7, 6, 6, 6, 6, 6, 6, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["the arbitrator"],
    melee_weapons: ["the gladius incandor","the hand of dominion"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the ultramarines": "",
    bulky: "(4)",
    "calculating swordsman": "",
    "eternal warrior": "(2)",
  },
  traits: ["loyalist", "ultramarines", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
