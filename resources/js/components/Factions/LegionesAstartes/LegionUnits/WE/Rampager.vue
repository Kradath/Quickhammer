<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Rampager Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "rampager",
  stats: [7, 5, 4, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "-"],
  sergeant: "rampager champion",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 3, 9, 8, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "champion", "sergeant"],
  base: 32,
  cost: 135,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: [],
    melee_weapons: ["caedere weapon"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    impact: "(S)",
    vanguard: "(3)",
  },
  traits: ["[allegiance]", "world eaters"],
  options: [
    {
      scentence: "A Rampager Squad may include:",
      variants: [
        { what: "Up to 10 additional Rampagers", cost: [22, "pts each"] },
      ],
    },
    {
      scentence: "Any Model in this Unit may have one:",
      variants: [
        { what: "bolt pistol", cost: [0, "pts"] },
      ],
    },
    {
      scentence:
        "The Rampager Champion in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "The Rampager Champion in this Unit may have its Caedere weapon exchanged for one of the following:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        
      ],
    },
  ],
});
</script>