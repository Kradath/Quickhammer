<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Dark Emissary in Terminator Armour</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";


const stats = reactive({
  name: "Dark Emissary in TA",
  stats: [7, 5, 5, 4, 5, 5, 5, 4, 10, 10, 9, 8, 2, "5+"],
  sergeant: "",
  Sstats: [],
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 40,
  cost: 120,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["combi-bolter"],
    melee_weapons: ["staff of dark authority"],
    wargear: ["tartaros terminator armour"],
  },
  SR: {
    "eyes of the warmaster": "",
    
  },
  traits: ["traitor", "sons of horus"],
  options: [
    {
      scentence:
        "Tartaros Terminator Armour of this Model may be replaced with one:",
      variants: [{ what: "cataphractii terminator armour", cost: [0, "pts"] }],
    },

    {
      scentence:
        "This Model may have its combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "volkite charger",
          cost: [0, "pts"],
        },
        {
          what: "combi-bolter",
          cost: [5, "pts"],
        },
        {
          what: "combi-flamer",
          cost: [10, "pts"],
        },
        {
          what: "combi-melta",
          cost: [10, "pts"],
        },
        {
          what: "combi-plasma",
          cost: [10, "pts"],
        },
        {
          what: "combi-volkite",
          cost: [10, "pts"],
        },
        {
          what: "combi-grenade",
          cost: [10, "pts"],
        },
        {
          what: "combi-desintegrator",
          cost: [10, "pts"],
        },
        {
          what: "combi-grav",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>