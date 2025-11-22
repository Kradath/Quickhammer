<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div> 
      <h2 class="unit__head-name">Cataphracii Terminator Command Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "cataphractii chosen",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  sergeant: "cataphractii chosen champion",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 4, 8, 8, 7, 7, 2, "4+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "champion", "heavy"],
  base: 40,
  cost: 140,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["volkite charger"],
    melee_weapons: ["power weapon"],
    wargear: [],
  },
  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Cataphractii Terminator Command Squad may include:",
      variants: [
        { what: "Up to 9 additional Cataphractii Chosens", cost: [40, "pts each"] },
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
        "Any Model in this Unit may have its volkite charger and power weapon exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence: "The Cataphractii Chosen Champion in this Unit may have one:",
      variants: [{ what: "grenade harness", cost: [5, "pts"] }],
    },
    {
      scentence:
        "One Cataphractii Chosen in this Unit may have its volkite charger exchanged for one:",
      variants: [{ what: "legion standard", cost: [20, "pts"] }],
    },
  ],
});
</script>