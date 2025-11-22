<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="elite role"></div> 
      <h2 class="unit__head-name">Lernaean Terminator Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div></div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Lernaean",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Harrower",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 4, 9, 8, 7, 7, 2, "4+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 40,
  cost: 250,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["volkite charger"],
    melee_weapons: ["power axe"],
    wargear: [],
  },
  SR: {
    line: "(1)",
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "hatred": "(Legiones Astartes)",
  },
  traits: ["[allegiance]", "Alpha Legion"],
  options: [
    {
      scentence: "A Lernaean Terminator Squad may include:",
      variants: [
        { what: "Up to 5 additional Lernaean Terminators", cost: [45, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its volkite charger exchanged for one of the following:",
      variants: [
        {
          what: "combi-bolter",
          cost: [0, "pts"],
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
    {
      scentence:
        "Any Model in this Unit may have its power weapon exchanged for one of the following:",
      variants: [
        {
          what: "power maul",
          cost: [0, "pts"],
        },
        {
          what: "lightning claw",
          cost: [5, "pts"],
        },
        {
          what: "chainfist",
          cost: [10, "pts"],
        },

        {
          what: "power fist",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its volkite charger and power axe exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    
    {
      scentence:
        "For every five Models in this Unit, one Cataphractii Terminator in this Unit may have its volkite charger exchanged for one of the following:",
      variants: [
        {
          what: "heavy flamer",
          cost: [10, "pts"],
        },
        {
          what: "reaper autocannon",
          cost: [15, "pts"],
        },
        {
          what: "conversion beam cannon",
          cost: [15, "pts"],
        },
        {
          what: "plasma blaster",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
