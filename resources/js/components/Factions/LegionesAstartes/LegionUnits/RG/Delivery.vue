<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">0-1 Deliverers Squad</h2>
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
  cost: 215,
  base: 40,
  name: "Deliverer",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "4+"],
  sergeant: "Deliverer Chieftain",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "4+"],
  Dwargear: {
    melee_weapons: ["power weapon"],
    ranged_weapons: ["combi-bolter"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "vanguard": "(3)",
    "deep strike": "",
    "corax shame": "",
  },

  traits: ["[allegiance]", "raven guard"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],

  twoProfiles: false,

  options: [
    {
      scentence: "A Deliverers Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Deliverers",
          cost: [40, "pts each"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Model in this Unit may have its combi-bolter exchanged for one of the following:",
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
      ],
    },
    {
      scentence: "Any Model in this Unit may have its power weapon exchanged for one of the following:",
      variants: [
        {
          what: "power fist",
          cost: [10, "pts"],
        },
        {
          what: "chainfist",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "Any Model in this Unit may have its combibolter exchanged for one of the following:",
      variants: [
    {
      what: 'combi-bolter',
      cost: [5, 'pts']
    },
    {
      what: 'combi-flamer',
      cost: [10, 'pts']
    },
    {
      what: 'combi-melta',
      cost: [10, 'pts']
    },
    {
      what: 'combi-plasma',
      cost: [10, 'pts']
    },
    {
      what: 'combi-volkite',
      cost: [10, 'pts']
    },
    {
      what: 'combi-grenade',
      cost: [10, 'pts']
    },
    {
      what: 'combi-desintegrator',
      cost: [10, 'pts']
    },
    {
      what: 'combi-grav',
      cost: [10, 'pts']
    },
  ],
    },
    {
      scentence: "Any Model in this Unit may have its combi-bolter and power weapon exchanged for one:",
      variants: [
        {
          what: "paired raven's talons",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
