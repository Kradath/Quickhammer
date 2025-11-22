<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role transport"></div> 
      <h2 class="unit__head-name">Termite</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Termite",
  stats: [6, 4, 12, 12, 10, 5, 12],
  types: ["vehicle", "transport"],
  cost: 80,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ['melta cutters'],
      sponson: [],
      pintle: ["combi-bolter (2)"],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    "light transport": "",
    "deep strike": "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: 'This Model have Access Points on both Sides Facings',
  options: [
    {
      scentence:
        "Both of this Model's combi-bolters may be exchanged for one of the following:",
      variants: [
        {
          where: "two pintle mounted",
          what: "twin volkite charger",
          cost: [10, "pts"],
        },
        {
          where: "two pintle mounted",
          what: "heavy flamer",
          cost: [5, "pts"],
        },
      ],
    },
    
  ],
});
</script>