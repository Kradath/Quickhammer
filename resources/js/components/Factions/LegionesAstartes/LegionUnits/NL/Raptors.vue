<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role fa"></div>
      <h2 class="unit__head-name">Night Raptors Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "night raptor",
  stats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  sergeant: "huntmaster",
  Sstats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  types: ["infantry", "antigrav"],
  Stypes: ["infantry", "sergeant", "antigrav"],
  base: 32,
  cost: 150,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    impact: "(i)",
    fear: "(1)",
    vanguard: "(4)",
    bulky: "(2)",
    "deep strike": "",
  },
  traits: ["[allegiance]", "night lords"],
  options: [
    {
      scentence: "A Night Raptors Squad may include:",
      variants: [
        { what: "Up to 10 additional Raptors", cost: [27, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolt pistol and chainsword exchanged for one:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [10, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "chainblade",
          cost: [5, "pts"],
        },
        {
          what: "chainglaive",
          cost: [5, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "lightning claw",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Night Raptor in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "meltagun",
          cost: [15, "pts"],
        },
        {
          what: "plasma gun",
          cost: [10, "pts"],
        },

        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
    
    
  ],
});
</script>