<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role recon"></div> 
      <h2 class="unit__head-name">Outrider Squadron</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "outrider",
  stats: [14, 4, 4, 4, 4, 2, 4, 1, 7, 8, 7, 6, 3, "-"],
  sergeant: "outrider sergeant",
  Sstats: [14, 4, 4, 4, 4, 2, 4, 1, 8, 8, 7, 6, 3, "-"],
  types: ['cavalry'],
  Stypes: ['cavalry', "sergeant"],
  base: '75x25',
  cost: 85,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["twin bolter", "bolt pistol"],
    melee_weapons: ["chainsword","krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    bulky: "(2)",
    vanguard: "(1)",
    "firestorm": "",
    "implacable advance": "",
    "outflank": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Outrider Squadron Squad may include:",
      variants: [
        {
          what: "Up to 7 additional Recon Outriders",
          cost: [20, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Recon Sergeant in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "chainaxe",
          cost: [0, "pts"],
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
        "The Any Model in this Unit may have its bolt pistol exchange for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "All Models in the Unit may have their twin bolter exchanged for one:",
      variants: [{ what: "twin plasma gun", cost: [15, "pts"] }],
    },
    {
      scentence: "Any Model in this Unit may have their chainsword exchanged for one:",
      variants: [{ what: "astartes shotgun", cost: [10, "pts"] }],
    },

    {
      scentence:
        "Up to two Outriders in this Unit may each have one of the following:",
      variants: [
        {
          what: "nuncio-vox",
          cost: [10, "pts"],
        },
        {
          what: "augury scanner",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>