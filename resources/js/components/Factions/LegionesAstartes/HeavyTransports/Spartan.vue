<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role ht"></div> 
      <h2 class="unit__head-name">Spartan</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Spartan",
  stats: [10, 4, 14, 14, 14, 10, 26],
  types: ["vehicle", "transport"],
  cost: 400,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: [],
      sponson: ['lascannon array (2)'],
      pintle: [],
      "co-axial": [],
      "hull (front)": ['twin heavy bolter'],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    "assault vehicle": "",
    "auto-repair": "(4+)",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: 'This Model have Access Points on both Sides Facings and the Front Facing',
  options: [
    {
      scentence:
        "This Model may have its Hull (Front) Mounted twin heavy bolter exchanged for one of the following:",
      variants: [
        {
          where: "Hull (Front) Mounted",
          what: "twin heavy flamer",
          cost: [0, "pts"],
        },
        {
          where: "Hull (Front) Mounted",
          what: "twin lascannon",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have both its Sponson Mounted lascannon arrays exchanged for one of the following:",
      variants: [
        {
          where: "Two Sponson Mounted",
          what: "laser destroyer",
          cost: [0, "pts"],
        },
        {
          where: "Two Sponson Mounted",
          what: "gravis heavy bolter battery",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have one of each of the following:",
      variants: [
        {
          where: "One Hull (Front) mounted",
          what: "hunter-killer missile",
          cost: [5, "pts"],
        },
        {
          where: "",
          what: "searchlights",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>
<style>

</style>