<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role ht"></div> 
      <h2 class="unit__head-name">Dreadclaw</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Dreadclaw",
  stats: [15, 2, 12, 12, 12, 5, 12],
  types: ["vehicle", "transport", "flyer"],
  cost: 115,
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
    wargear: ['None'],
  },
  SR: {
    "drop transport": "",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access: "This Model have Access Points on all Facings",
  options: false,
});
</script>