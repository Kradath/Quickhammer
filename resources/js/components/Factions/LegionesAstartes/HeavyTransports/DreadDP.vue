<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role ht"></div> 
      <h2 class="unit__head-name">Dradnought Drop Pod</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Dradnought Drop Pod",
  stats: ["-", 2, 12, 12, 12, 5, 7],
  types: ["vehicle", "transport"],
  cost: 100,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: [],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: ["none"],
  },
  SR: {
    "impact reactive doors": "",
    "orbital assault vehicle": "",
    "dreadnought transport": "",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access: "This Model have Access Points on all Facings",
  options: false,
});
</script>