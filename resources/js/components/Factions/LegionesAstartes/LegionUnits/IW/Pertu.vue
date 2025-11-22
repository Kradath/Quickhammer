<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Perturabo</h2>
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
  name: "Perturabo",
  cost: 425,
  stats: [7, 7, 7, 6, 7, 6, 5, 6, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["the logos array"],
    ranged_weapons: [],
    wargear: ["cortex controller", "cognis-signum"],
  },
  SR: {
    "sire of the iron warriors": "",
    bulky: "(6)",
    battlesmith: "(3)",
    "the breaker": "",
    "eternal warrior": "(2)",
  },
  traits: ["traitor", "iron warriors", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: [
    {
      scentence: "This Model may have:",
      variants: [{ what: "forgebreaker desecrated", cost: [35, "pts each"] }],
    },
  ],
});
</script>
