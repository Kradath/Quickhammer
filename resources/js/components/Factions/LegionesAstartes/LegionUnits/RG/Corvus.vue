<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Corvus Corax</h2>
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
  name: "Corvus Corax",
  cost: 440,
  stats: [16, 7, 6, 6, 6, 6, 6, 6, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["wrath and justice"],
    melee_weapons: ["the corvidine talons", "talionis"],
    wargear: ["cameleoline", "frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the raven guard": "",
    bulky: "(6)",
    "the shadowed lord": "",
    "eternal warrior": "(2)",
    "deep strike": "",
  },
  traits: ["loyalist", "raven guard", "master of the legion"],
  types: ["paragon", "unique", "antigrav"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
