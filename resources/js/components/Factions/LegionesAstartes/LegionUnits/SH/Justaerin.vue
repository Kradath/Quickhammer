<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Justaerin Terminator Squad</h2>
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
  name: "Justaerin",
  stats: [6, 5, 4, 4, 5, 2, 4, 4, 10, 8, 7, 7, 2, "4+"],
  sergeant: "",
  Sstats: [],
  types: ["infantry", "heavy"],
  Stypes: [],
  base: 40,
  cost: 275,
  composition: [5],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike combi-bolter"],
    melee_weapons: ["power weapon"],
    wargear: [],
  },
  SR: {
    vanguard: "(4)",
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
  },
  traits: ["[allegiance]", "sons of horus"],
  options: [
    {
      scentence: "A Justaerin Terminator Squad may include:",
      variants: [
        { what: "Up to 5 additional Justaerins", cost: [50, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its banestrike combi-bolter exchanged for one of the following:",
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
        { what: "lightning claw", cost: [5, "pts each"] },
        { what: "carsoran power axe", cost: [5, "pts each"] },
        { what: "power fist", cost: [10, "pts each"] },
        { what: "chainfist", cost: [10, "pts each"] },
        { what: "thunder hammer", cost: [10, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its banestrike combi-bolter and power weapon exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts each"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, one Justaerin Terminator in this Unit may have its banestrike combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "heavy flamer",
          cost: [10, "pts"],
        },
        {
          what: "multi-melta",
          cost: [15, "pts"],
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
  ],
});
</script>
