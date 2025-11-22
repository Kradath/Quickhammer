<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="elite role"></div> 
      <h2 class="unit__head-name">Veteran Assault Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "assault veteran",
  stats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  sergeant: "assault veteran sergeant",
  Sstats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  types: ["infantry","antigrav"],
  Stypes: ["infantry", "sergeant","antigrav"],
  base: 32,
  cost: 120,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    bulky: "(2)",
    vanguard: "(3)",
    "deep strike": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Assault Veteran Squad may include:",
      variants: [
        { what: "Up to 5 additional Assault Veterans", cost: [22, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword exchanged for one of the following:",
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
        "Any Model in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "combat shield",
          cost: [2, "pts"],
        },
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
        "The Veteran Assault Sergeant in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "desintegrator pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Assault Veteran in this Unit may have its bolt pistol exchanged for:",
      variants: [
        {
          what: "desintegrator pistol",
          cost: [5, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "Any Model in this Unit may have its bolt pistol and chainsword exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts each"] }],
    },
    {
      scentence: "The Veteran Assault Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, two Assault Veterans in this Unit may have their chainsword exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainsword",
          cost: [5, "pts"],
        },
        {
          what: "heavy chainaxe",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>
