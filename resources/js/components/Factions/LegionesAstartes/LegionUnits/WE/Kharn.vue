<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role hc"></div>
      <h2 class="unit__head-name">Kharn</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />

    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Kharn",
  cost: 175,
  stats: [7, 7, 5, 4, 4, 4, 5, 5, 10, 9, 9, 9, 2, "4+"],
  base: 32,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["plasma pistol"],
    melee_weapons: ["the cutter"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    precision: "(5+)",
    "eternal warrior": "(1)",
    "reaping blow": "(2)",
  },
  traits: ["traitor", "world eaters", "master of the legion"],
  types: ["infatry", "unique", "command"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: [
    
    {
      scentence:
        "If Angron is not included in the same Army as this Model, this Model may have its The Cutter exchanged for one:",
      variants: [
    {
      what: 'gorechild reforged',
      cost: [10, 'pts']
    },
    
  ],
    },
    
  ],
});
</script>
