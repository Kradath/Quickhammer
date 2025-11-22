<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Siege Breaker</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Siege Breaker",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 9, 9, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "heavy"],
  Stypes: [],
  base: 32,
  cost: 115,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol","phosphex bombs"],
    melee_weapons: ["thunder hammer", "krak grenades"],
    wargear: [
      "frag grenades",
      
      "cognis-signum",
      "augury scanner",
    ],
  },
  SR: {
    none: "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence:
        "This Model may have its bolt pistol exchanged for one item each:",
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
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>