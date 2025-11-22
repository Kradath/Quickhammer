<template>
  <main class="container center unit">

    <!-- голова -->
    <div class="unit__head">
      <div class="role fa"></div> 
      <h2 class="unit__head-name">Fire Raptor</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "fire raptor",
  stats: [18, 4, 12, 12, 12, 6, "-"],
  types: ["vehicle", "stable", "flyer"],
  cost: 220,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ["twin avenger bolt cannon","tempest rocket (4)"],
      sponson: ["gravis heavy bolter battery (2)"],
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
  traits: ["[alegiance]", "[legiones astartes]"],
  access: false,
  options: [
    {
      scentence:
        "This Model may have its two Sponson Mounted Gravis heavy bolter batteries exchanged for two:",
      variants: [
        {
          where: "sponson mounted",
          what: "gravis autocannon battery",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have its four Centreline Mounted tempest rockets all be exchanged for four:",
      variants: [
        {
          where: "centerline mounted",
          what: "hellstrike missile",
          cost: [20, "pts"],
        },
      ],
    },
  
  ],
});
</script>