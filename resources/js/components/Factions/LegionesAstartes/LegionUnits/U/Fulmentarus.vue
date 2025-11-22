<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Fulmentarus Terminator Squad</h2>
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
  cost: 290,
  base: 40,
  name: "Fulmentarus Terminator",
  stats: [6, 4, 4, 4, 5, 2, 4, 2, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Fulmentarus Sergeant",
  Sstats: [6, 4, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  Dwargear: {
    melee_weapons: [],
    ranged_weapons: ["combi-bolter", "fulmentarus missile array"],
    wargear: ["peritarch targeter"],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "firing protocols": "(2)",
    "support unit": "(1)",
  },

  traits: ["[allegiance]", "ultramarines"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],

  twoProfiles: false,

  options: [
    {
      scentence: "A Fulmentarus Terminator Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Fulmentarus",
          cost: [55, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its peritarch targeter exchanged for one of the following:",
      variants: [
        {
          what: "power sword",
          cost: [0, "pts"],
        },
        {
          what: "power axe",
          cost: [0, "pts"],
        },
        {
          what: "power maul",
          cost: [0, "pts"],
        },
        {
          what: "power lance",
          cost: [0, "pts"],
        },
        {
          what: "power fist",
          cost: [5, "pts"],
        },
        {
          what: "chainfist",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "The Fulmentarus Sergeant in this Unit may have its peritarch targeter exchanged for one:",
      variants: [
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
