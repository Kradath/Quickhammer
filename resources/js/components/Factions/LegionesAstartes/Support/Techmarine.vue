<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div> 
      <h2 class="unit__head-name">Techmarine</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "techmarine",
  stats: [7, 4, 4, 4, 4, 2, 4, 2, 7, 7, 7, 8, 2, "-"],
  sergeant: "",
  Sstats: [],
  types: ["infantry", "specialist"],
  Stypes: [],
  base: 32,
  cost: 50,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["power axe", "servo-arm", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "battlesmith": "(2)",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "This model may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have one:",
      variants: [{ what: "cyber-familiar", cost: [10, "pts"] }],
    },
    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
  ],
});
</script>