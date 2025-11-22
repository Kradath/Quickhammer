<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Huscarl Terminator Retinue</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [4],
  cost: 275,
  base: 40,
  name: "Huscarl Terminator",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Huscarl Terminator Sergeant",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "4+"],
  Dwargear: {
    melee_weapons: ["power weapon"],
    ranged_weapons: [],
    wargear: ["vigil pattern storm shield"],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "eternal warrior": "(1)",
    "deep strike": "",
  },

  traits: ["[allegiance]", "imperial fists", "shield"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],
  
  twoProfiles: false,
  
  options: [
    {
      scentence: "A Huscarl Terminator Retinue may include:",
      variants: [
        {
          what: "Up to 5 additional Huscarl Terminators",
          cost: [50, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its power weapon exchanged for one:",
      variants: [
        {
          what: "solarite power gauntlet",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Huscarl Sergeant may have one:",
      variants: [
        {
          what: "grenade harness",
          cost: [5, "pts"],
        },
      ],
    },
    
  ],
});
</script>
