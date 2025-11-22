<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Sons of Horus Chieftain Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "chieftain",
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 2, "5+"],
  sergeant: "",
  Sstats: [],
  types: ["infantry", "heavy"],
  Stypes: [],
  base: 32,
  cost: 155,
  composition: [5],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike bolter", "bolt pistol"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades", "boarding shield"],
  },
  SR: {
    "honour above all": "",
  },
  traits: ["[allegiance]", "sons of horus", "shield"],
  options: [
    {
      scentence: "A Sons of Horus Chieftain Squad may include:",
      variants: [
        { what: "Up to 5 additional Chieftains", cost: [25, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
      ],
    },

    {
      scentence:
        "One Model in this Unit may have its banestrike bolter exchanged for:",
      variants: [{ what: "legion standard", cost: [20, "pts"] }],
    },
  ],
});
</script>