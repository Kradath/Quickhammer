<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Angron</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />

    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Angron",
  cost: 450,
  stats: [8, 8, 6, 6, 6, 6, 6, 6, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["the spite furnace"],
    melee_weapons: ["gorefather and gorechild"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the world eaters": "",
    bulky: "(4)",
    impact: "(S)",
    "eternal warrior": "(2)",
    "lord of the red sands": "",
  },
  traits: ["traitor", "world eaters", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
