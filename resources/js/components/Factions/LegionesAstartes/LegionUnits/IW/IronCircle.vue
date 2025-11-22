<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Iron Circle Maniple</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [1],
  cost: 150,
  base: 60,
  name: "Domitar-ferrum",
  stats: [7, 4, 4, 7, 7, 4, 3, 3, 8, 12, 5, 5, 2, "5+"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["graviton crusher"],
    ranged_weapons: ["twin shrapnel cannon"],
    wargear: ["karceri battle shield"],
  },

  SR: {
    "shield of the iron tyrant": "",
    bulky: "(4)",
    "implacable advance": "",
    "impact": "(A)",
    "firestorm": "",
  },

  traits: ["[allegiance]", "iron warriors", "shield"],

  Stypes: [],
  types: ["automata", "heavy"],
  
  twoProfiles: false,
  
  options: [
    {
      scentence: "A Iron Circle Maniple may include:",
      variants: [
        {
          what: "Up to 5 additional Domitar-ferrum",
          cost: [135, "pts each"],
        },
      ],
    },

  ],
});
</script>
