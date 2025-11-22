<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Warsmith</h2>
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
  name: "Warsmith",
  composition: [1],
  cost: 165,
  base: 40,
  stats: [6, 6, 5, 4, 5, 5, 5, 5, 10, 9, 9, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["graviton crusher"],
    ranged_weapons: ["combi-grav"],
    wargear: [
      "servo-arm",
      "cortex controller",
      "cognis-signum",
    ],
  },
  SR: {
    "implacable advance": "",
    "slow and purposeful": "",
    "bulky": "(2)",
    "battlesmith": "(2)",
  },
  traits: ["[allegiance]", "iron warriors", "master of the legion"],
  types: ["infantry", "command", "heavy"],
  Stypes: [],
  twoProfiles: false,
  options: [{
      scentence: "This Model may have:",
      variants: [{ what: "cyber-familiar", cost: [10, "pts"] }],
    },]
});
</script>