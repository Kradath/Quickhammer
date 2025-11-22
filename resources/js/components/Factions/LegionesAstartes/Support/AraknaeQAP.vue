<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div> 
      <h2 class="unit__head-name">Araknae Quad Accelerator Platform</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Araknae Quad Accelerator Platform",
  stats: ["-", 4, 12, 12, 12, 5, "-"],
  types: ["vehicle"],
  cost: 125,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: ["quad accelerator autocannon"],
      centerline: [],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: ["atomantic pavise"],
  },
  SR: {
    "gun emplacement": "",
    explodes: "(4+)",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access:'',
  options: false,
});
</script>