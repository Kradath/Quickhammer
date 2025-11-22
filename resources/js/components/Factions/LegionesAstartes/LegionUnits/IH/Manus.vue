<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Ferrus Manus</h2>
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
  name: "Ferrus Manus",
  stats: [8, 7, 6, 7, 7, 6, 6, 6, 12, 10, 10, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["paragon", "unique"],
  Stypes: [],
  base: 40,
  cost: 465,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["the medusan carapace"],
    melee_weapons: ["forgebreaker", "venom spheres"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the iron hands": "",
    "tempered by war": "",
    bulky: "(5)",
    battlesmith: "(4)",
    "eternal warrior": "(2)",
  },
  traits: ["loyalist", "iron hands", "master of the legion"],
  options: false,
});
</script>
