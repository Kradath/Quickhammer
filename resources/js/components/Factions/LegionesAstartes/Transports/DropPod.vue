<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role transport"></div> 
      <h2 class="unit__head-name">Drop Pod</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Drop Pod",
  stats: ["-", 2, 12, 12, 12, 4, 10],
  types: ["vehicle", "transport"],
  cost: 50,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: [],
      sponson: [],
      pintle: ['combi-bolter'],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    "impact reactive doors": "",
    "orbital assault vehicle": "",
    'light transport': "",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access: 'This Model have Access Points on all Facings',
  options: false
});
</script>