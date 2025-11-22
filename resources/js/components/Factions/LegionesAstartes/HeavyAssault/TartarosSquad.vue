<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div> 
      <h2 class="unit__head-name">
        Tartaros Terminator Squad
      </h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div></div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Tartaros Terminator",
  stats: [7, 4, 4, 4, 5, 2, 4, 2, 8, 8, 7, 7, 2, "5+"],
  sergeant: "Tartaros Sergeant",
  Sstats: [7, 4, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "5+"],
  types: ["infantry"],
  Stypes: [],
  base: 40,
  cost: 150,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["combi-bolter"],
    melee_weapons: ["power weapon"],
    wargear: [],
  },
  SR: {
    "vanguard": "(3)",
    bulky: "(2)",
    "implacable advance": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Tartaros Terminator Squad may include:",
      variants: [
        { what: "Up to 5 additional Tartaros Terminators", cost: [30, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its combi-bolter exchanged for one of the following:",
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
    {
      scentence:
        "Any Model in this Unit may have its power weapon exchanged for one of the following:",
      variants: [
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
        "Any model in this Unit may have its combi-bolter and power weapon exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, one Tartaros Terminator in this Unit may have its volkite charger exchanged for one of the following:",
      variants: [
        {
          what: "heavy flamer",
          cost: [5, "pts"],
        },
        {
          what: "reaper autocannon",
          cost: [15, "pts"],
        },

        {
          what: "plasma blaster",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "The Tartaros Terminator Sergeant in this Unit may have:",
      variants: [{ what: "grenade harness", cost: [5, "pts"] }],
    },
  ],
});
</script>