<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Tyrant Siege Terminator Squad</h2>
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
  cost: 300,
  base: 40,
  name: "Tyrant",
  stats: [6, 4, 4, 4, 5, 2, 4, 2, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Siege Master",
  Sstats: [6, 4, 4, 4, 5, 2, 4, 2, 9, 8, 7, 7, 2, "4+"],
  Dwargear: {
    melee_weapons: ["power fist"],
    ranged_weapons: ["combi-bolter", "tyrant rocket launcher"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "firing protocols": "(2)",
    "support unit": "(1)",
  },

  traits: ["[allegiance]", "iron warriors"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],
  
  twoProfiles: false,
  
  options: [
    {
      scentence: "A Tyrant Siege Terminator Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Tyrants",
          cost: [55, "pts each"],
        },
      ],
    },
    {
      scentence: "The Siege Master in this Unit may have one:",
      variants: [
        {
          what: "grenade harness",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence: "Any Model in this Unit may have its combi-bolter and power fist exchanged for one:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [10, "pts each"],
        },
      ],
    },
    {
      scentence: "Any Model in this Unit may have its power fist exchanged for one:",
      variants: [
        {
          what: "chainfist",
          cost: [0, "pts each"],
        },
      ],
    },
    
    {
      scentence:
        "Any Model in this Unit may have its combi-bolter exchanged for one of the following:",
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
      scentence:
        "The Siege Master in this Unit may have one:",
      variants: [
        {
          what: "omni-scope",
          cost: [10, "pts"],
        },
      ],
    },
    
  ],
});
</script>
