<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Contekar Terminator Squad</h2>
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
  cost: 225,
  base: 40,
  name: "Contekar",
  stats: [7, 5, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "5+"],
  sergeant: "Dissident",
  Sstats: [7, 5, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "5+"],
  Dwargear: {
    melee_weapons: ["chainblade"],
    ranged_weapons: [],
    wargear: ["volkite cavitor"],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "deep strike": "",
    "vanguard": "(3)",
    "fear": "(1)",
  },

  traits: ["[allegiance]", "night lords"],

  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  
  twoProfiles: false,
  
  options: [
    {
      scentence: "A Contekar Terminator Squad may include:",
      variants: [
        {
          what: "Up to 10 additional Contekar Terminators",
          cost: [40, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Dissident in this Unit may have its chainblade exchanged for one:",
      variants: [
        {
          what: "escaton power claw",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its volkite cavitor exchanged for one:",
      variants: [
        {
          what: "heavy flamer",
          cost: [0, "pts"],
        },
      ],
    },
    
  ],
});
</script>
