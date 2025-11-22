<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Morlock Terminator Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Morlock",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 9, 8, 8, 7, 2, "4+"],
  sergeant: "Augmentor",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 3, 10, 8, 8, 7, 2, "4+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 40,
  cost: 165,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["combi-bolter"],
    melee_weapons: ["power weapon"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "eternal warrior": "(1)",
    "fate of the gorgon": "",
  },
  traits: ["loyalist", "iron hands"],
  options: [
    {
      scentence: "A Morlock Terminator Squad may include:",
      variants: [
        {
          what: "Up to 2 additional Gorgon Terminators",
          cost: [50, "pts each"],
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
          what: "graviton gun",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its power weapon exchanged for one of the following:",
      variants: [
        {
          what: "artificer power axe",
          cost: [0, "pts"],
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
      ],
    },
    {
      scentence:
        "The Augmentor in this Unit may have its combi-bolter exchanged for one of the following:",
      variants: [
        { what: "volkite culverin", cost: [10, "pts"] },
        { what: "graviton shredder", cost: [15, "pts"] },
      ],
    },
    {
      scentence:
        "Up to two Morlocks in this Unit may have one of the following:",
      variants: [
        {
          what: "nuncio-vox",
          cost: [10, "pts"],
        },
        {
          what: "augury scanner",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "One Morlock in this Unit may have its combi-bolter exchanged for one:",
      variants: [
        {
          what: "legion standard",
          cost: [20, "pts"],
        },
      ],
    },
  ],
});
</script>
