<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Dominator Cohort</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [5],
  cost: 255,
  base: 40,
  name: "Dominator",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "4+"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["thunder hammer"],
    ranged_weapons: ["combi-bolter"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    expendable: "(1)",
    hatred: "(automata)",
    "those once honoured": "",
  },

  traits: ["[allegiance]", "iron warriors"],

  Stypes: [],
  types: ["infantry", "heavy"],

  twoProfiles: false,

  options: [
    {
      scentence: "A Dominator Cohort may include:",
      variants: [
        {
          what: "Up to 5 additional Dominators",
          cost: [45, "pts each"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in the Unit, one Dominator may have its combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "heavy-flamer",
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
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its thunder hammerexchanged for one:",
      variants: [
        {
          what: "chainfist",
          cost: [5, "pts"],
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
  ],
});
</script>
