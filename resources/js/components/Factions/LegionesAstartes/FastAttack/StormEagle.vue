<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role fa"></div> 
      <h2 class="unit__head-name">Storm Eagle</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "storm eagle",
  stats: [18, 4, 12, 12, 12, 6, "16"],
  types: ["vehicle", "stable", "transport", "flyer"],
  cost: 200,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ["twin heavy bolter","vengeance launcher", "tempest rocket (4)"],
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
    "assault vehicle":"",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access:'This Model has Access Points on all Facings',
  options: [
    {
      scentence:
        "This Model may have its Centreline Mounted twin heavy bolter exchanged for one of the following:",
      variants: [
        {
          where: "centerline mounted",
          what: "twin multi-melta",
          cost: [15, "pts"],
        },
        {
          where: "centerline mounted",
          what: "missile launcher",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have its four Centreline Mounted tempest rockets exchanged for one of the following:",
      variants: [
        {
          where: "Four centerline mounted",
          what: "hunter-killer missile", 
          cost: [15, "pts"],
        },
        {
          where: "two centerline mounted",
          what: "twin lascannon",
          cost: [30, "pts"],
        },
      ],
    },
  
  ],
});
</script>