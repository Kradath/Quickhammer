<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Atramentar Flay-clade</h2>
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
  cost: 170,
  base: 40,
  name: "Atramentar",
  stats: [7, 4, 4, 4, 5, 2, 4, 2, 8, 8, 7, 7, 2, "5+"],
  sergeant: "Atramentar Trucidor",
  Sstats: [7, 4, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "5+"],
  Dwargear: {
    melee_weapons: ["power weapon"],
    ranged_weapons: ["combi-bolter"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    impact: "(1)",
    vanguard: "(3)",
    "deep strike": "",
    "sworn loyality": "",
    "cloaked in murder": "",
  },

  traits: ["[allegiance]", "night lords"],

  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],

  twoProfiles: false,

  options: [
    {
      scentence: "An Atramentar Flay-clade may include:",
      variants: [
        {
          what: "Up to 15 additional Atramentars",
          cost: [35, "pts each"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Atramentar may have its combi-bolter exchanged for one of the following:",
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
          what: "plasma blaster",
          cost: [15, "pts"],
        },
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
          what: "chainglaive",
          cost: [0, "pts"],
        },
        {
          what: "power fist",
          cost: [5, "pts"],
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
          what: "thunder hammer",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its power weapon and combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Atramentar Trucidor in this Unit may have its power weapon exchanged for one:",
      variants: [
        {
          what: "headsman's axe",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
