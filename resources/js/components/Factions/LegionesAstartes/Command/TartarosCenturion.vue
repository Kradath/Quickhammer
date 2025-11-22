<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">
        Centurion in Tartaros Terminator Armour
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
  name: "Tartaros Centurion",
  stats: [7, 5, 5, 4, 5, 4, 5, 4, 9, 8, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 40,
  cost: 100,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["combi-bolter"],
    melee_weapons: ["power weapon"],
    wargear: [],
  },
  SR: {
    "officer of the line": "(2)",
    bulky: "(2)",
    "implacable advance": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence:
        "This Model may have its combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "volkite charger",
          cost: [5, "pts"],
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
        "This Model may have its power weapon exchanged for one of the following:",
      variants: [
        {
          what: "paragon blade",
          cost: [15, "pts"],
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
        "This Model may have its combi-bolter and power weapon exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [5, "pts"] }],
    },
  ],
});
</script>