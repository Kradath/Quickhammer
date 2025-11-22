<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Ezekyle Abaddon</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Ezekyle Abaddon",
  stats: [6, 7, 5, 4, 5, 5, 5, 6, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  base: 40,
  cost: 250,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike combi-bolter", "grenade harness"],
    melee_weapons: ["cthonian power claw"],
    wargear: [],
  },
  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "deep strike": "",
    "master of justaerin": "",
    "eternal warrior": "(1)",
  },
  traits: ["traitor", "sons of horus", "master of the legion"],
  options: [
    {
      scentence:
        "This Model may have its banestrike combi-bolter and grenade harness exchanged for one:",
      variants: [{ what: "paragon blade", cost: [0, "pts"] }],
    },
  ],
});
</script>
