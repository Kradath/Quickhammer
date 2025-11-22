<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role recon"></div> 
      <h2 class="unit__head-name">Reconnaissance Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "recon legionary",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 7, 7, 3, "-"],
  sergeant: "recon sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 7, 7, 7, 3, "-"],
  types: ["infantry", "skirmish"],
  Stypes: ["infantry", "sergeant", "skirmish"],
  base: 32,
  cost: 110,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["astartes shotgun", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    infiltrate: "(9)",
    "move through cover": "",
    "support unit": "(2)",
  },
  traits: ["[allegiance]", "[legiones astartes]", "smokeskreen"],
  options: [
    {
      scentence: "A Reconnaissance Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Recon Legionaries",
          cost: [17, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Recon Sergeant in this Unit may have its Astartes Shotgun and/or bolt pistol exchange for one of the following:",
      variants: [
        {
          what: "chainsword",
          cost: [0, "pts"],
        },
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
        "The Recon Sergeant in this Unit may have its bolt pistol exchange for one of the following:",
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
        "Any model in this Unit may have its Astartes Shotgun exchange for one:",
      variants: [{ what: "nemesis bolter", cost: [5, "pts"] }],
    },
    {
      scentence: "The Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },

    {
      scentence:
        "Up to two Recon Legionaries in this Unit may each have one item for one of the following:",
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