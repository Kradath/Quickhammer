<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Horus Lupercal</h2>
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
  name: "Horus Lupercal",
  stats: [8, 8, 6, 6, 6, 7, 6, 6, 12, 12, 10, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["paragon", "unique"],
  Stypes: [],
  base: 40,
  cost: 530,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["the warmaster's talon", "worldbreaker"],
    melee_weapons: [],
    wargear: [],
  },
  SR: {
    "sire of sons of horus": "",
    bulky: "(6)",
    "deep strike": "",
    "master of war": "",
    "eternal warrior": "(2)",
  },
  traits: ["traitor", "sons of horus", "master of the legion"],
  options: false,
});
</script>
