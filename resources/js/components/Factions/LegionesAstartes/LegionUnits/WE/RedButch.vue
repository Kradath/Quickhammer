<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Red Butchers</h2>
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
  cost: 250,
  base: 40,
  name: "Red Butcher",
  stats: [6, 5, 4, 4, 5, 2, 4, 2, 12, 10, 6, 4, 2, "4+"],
  sergeant: "Devoured",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 3, 12, 10, 6, 4, 2, "4+"],
  Dwargear: {
    melee_weapons: ["butcher power axes"],
    ranged_weapons: [],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "slow and purposeful": "",
    heedless: "",
    "ravening madmen": "",
    "eternal warrior": "(1)",
  },

  traits: ["[allegiance]", "world eaters"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],

  twoProfiles: false,

  options: [
    {
      scentence: "A Red Butchers may include:",
      variants: [
        {
          what: "Up to 5 additional Red Butchers",
          cost: [45, "pts each"],
        },
      ],
    },
    {
      scentence:
        "If the Devoured in this Unit has had its butcher power axes exchanged for one:",
      variants: [
        { what: "butcher chainfists", cost: [10, "pts"] },
        
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its butcher power axes exchanged for one:",
      variants: [
        { what: "power axe", and:"combi-bolter", cost: [0, "pts"] },
        
      ],
    },
    {
      scentence:
        "If the Devoured in this Unit has had its butcher power axes exchanged for a combi-bolter and power axe, it may have its combi-bolter and/or power axe exchanged for one of the following:",
      variants: [
        {
          what: "power fist",
          cost: [10, "pts"],
        },
        {
          what: "chainfist",
          cost: [5, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "If the Devoured in this Unit has had its butcher power axes exchanged for a combi-bolter and power axe, it may have its combi-bolter exchanged for one of the following:",
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
        "Any Model in this Unit may have its butcher power axes exchanged for one:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Devoured in this Unit may have one:",
      variants: [
        {
          what: "grenade harness",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>
