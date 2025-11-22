<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div> 
      <h2 class="unit__head-name">Despoiler Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "despoiler legionary",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 7, 7, 3, "-"],
  sergeant: "despoiler sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 7, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  base: 32,
  cost: 100,
  composition: [9],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    line: "(2)",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Legion Despoiler Squad may include:",
      variants: [
        { what: "Up to 10 additional Despoiler Legionaries", cost: [10, "pts each"] },
      ],
    },
    {
      scentence:
        "The Sergeant in this Unit may have its chainsword and/or bolt pistol exchanged for one of the following:",
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
        "The Sergeant in this Unit may have its bolt pistol exchanged for one of the following:",
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
        "The Despoiler Sergeant in this Unit may have its chainsword and bolt pistol exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence: "The Despoiler Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, one Despoiler Legionary in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainsword",
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
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Despoiler Legionary in this Unit may have its bolt pistol exchanged for one of the following:",
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
      scentence: "One Legionary in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Legionaries in this Unit may each have one item for one of the following:",
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
