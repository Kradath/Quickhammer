<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div> 
      <h2 class="unit__head-name">Deathstorm Drop Pod</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Deathstorm Drop Pod",
  stats: ["-", 2, 12, 12, 12, 4, "-"],
  types: ["vehicle"],
  cost: 90,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: ["deathstorm missile launcher"],
      centerline: [],
      sponson: [],
      pintle: [],
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
    deathstorm: "",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  options: false
});
</script>