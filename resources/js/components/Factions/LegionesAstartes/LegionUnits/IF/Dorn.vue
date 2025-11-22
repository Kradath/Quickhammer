<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Rogal Dorn</h2>
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
  name: "Rogal Dorn",
  cost: 435,
  stats: [8, 7, 6, 6, 6, 6, 6, 6, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["the voice of terra"],
    melee_weapons: ["storm's teeth"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the imperial fists": "",
    bulky: "(4)",
    "bulwark of the imperium": "",
    "eternal warrior": "(2)",
  },
  traits: ["loyalist", "imperial fists", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
