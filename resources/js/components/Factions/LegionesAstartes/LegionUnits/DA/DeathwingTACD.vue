<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Terminator Deathwing Companions</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [4],
  cost: 240,
  base: 40,
  name: "Tartaros Companion",
  stats: [7, 5, 4, 4, 5, 2, 4, 3, 8, 8, 8, 8, 2, "5+"],
  sergeant: "Tartaros Oathbearer",
  Sstats: [7, 5, 4, 4, 5, 2, 4, 3, 8, 8, 8, 8, 2, "5+"],
  Dwargear: {
    melee_weapons: ["calibanite warblade"],
    ranged_weapons: ["combi-bolter"],
    wargear: ["tartaros terminator armour"],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "eternal warrior": "(1)",
    companions: "",
  },

  traits: ["[allegiance]", "dark angels"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],

  twoProfiles: false,

  options: [
    {
      scentence:
        "Each Model in this Unit may have its tartaros terminator armour exchanged for:",
      variants: [
        {
          what: "cataphractii terminator armour",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its combi-bolter exchanged for one of the following:",
      variants: [
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
        "Any Model in this Unit may have its combi-bolter and Calibanite warblade exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [5, "pts"] }],
    },
    {
      scentence:
        "Any Model in this Unit may have its Calibanite warblade exchanged for one of the following:",
      variants: [
        { what: "terranic greatsword", cost: [5, "pts"] },
        { what: "power fist", cost: [10, "pts"] },
        { what: "thunder hammer", cost: [10, "pts"] },
      ],
    },
    {
      scentence:
        "The Tartaros Oathbearer in this Unit may have one:",
      variants: [{ what: "grenade harness", cost: [5, "pts"] }],
    },
  ],
});
</script>
