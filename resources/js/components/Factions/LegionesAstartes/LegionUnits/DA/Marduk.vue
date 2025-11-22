<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Marduk Sedras</h2>
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
  name: "Marduk Sedras",
  composition: [1],
  cost: 225,
  base: 40,
  stats: [6, 6, 5, 4, 5, 5, 5, 5, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["the death of worlds"],
    ranged_weapons: ["plasma burner"],
    wargear: [
      "phosphex bombs",
    ],
  },
  SR: {
    "ancient of war": "",
    "implacable advance": "",
    "slow and purposeful": "",
    "bulky": "(2)",
  },
  traits: ["loyalist", "dark angels", "master of the legion"],
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>