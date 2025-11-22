<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Evander Garrius</h2>
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
  name: "Evander",
  composition: [1],
  cost: 175,
  base: 40,
  stats: [6, 6, 5, 4, 5, 4, 5, 4, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["subjugator"],
    ranged_weapons: ["incineratus"],
    wargear: [
      "the tyrant's regalia",
    ],
  },
  SR: {
    "implacable advance": "",
    "slow and purposeful": "",
    "bulky": "(2)",
  },
  traits: ["loyalist", "imperial fists", "master of the legion"],
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>