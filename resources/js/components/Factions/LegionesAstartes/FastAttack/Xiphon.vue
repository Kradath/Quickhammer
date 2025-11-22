<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role fa"></div> 
      <h2 class="unit__head-name">Xiphon Interceptor</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "xiphon interceptor",
  stats: [20, 4, 11, 11, 11, 5, "-"],
  types: ["vehicle", "flyer"],
  cost: 120,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ["twin lascannon (2)","rotary missile launcher"],
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
    None: "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "interceptor"],
  access: false,
  options: false
});
</script>