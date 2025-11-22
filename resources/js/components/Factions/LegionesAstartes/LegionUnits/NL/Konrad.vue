<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Konrad Curze</h2>
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
  name: "Konrad Curze",
  cost: 450,
  stats: [8, 7, 7, 6, 6, 6, 7, 6, 12, 10, 8, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["the widowmakers"],
    melee_weapons: ["mercy and forgiveness"],
    wargear: [],
  },
  SR: {
    "sire of the night lords": "",
    bulky: "(4)",
    "a death long forseen": "",
    fear: "(2)",
    "eternal warrior": "(2)",
  },
  traits: ["traitor", "night lords", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
