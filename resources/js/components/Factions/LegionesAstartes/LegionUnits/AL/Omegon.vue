<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Alpharius</h2>
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
  name: "Alpharius",
  stats: [8, 7, 7, 6, 6, 6, 7, 6, 12, 10, 10, 11, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["paragon", "unique", "light"],
  Stypes: [],
  base: 40,
  cost: 465,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["the hydra's spite"],
    melee_weapons: ["the pale spear", "the pythian scales", "venom spheres"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the aplha legion": "",
    "everywhere and nowhere": "",
    bulky: "(4)",
    "eternal warrior": "(2)",
  },
  traits: [
    "[allegiance]",
    "alpha legion",
    "master of the legion",
    "smokescreen",
  ],
  options: false,
});
</script>
