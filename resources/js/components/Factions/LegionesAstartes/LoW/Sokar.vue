<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role low"></div> 
      <h2 class="unit__head-name">Sokar Stormbird</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Sokar",
  stats: [16, 4, 14, 14, 14, 22, 52],
  types: ["vehicle", "transport", "super-heavy", "flyer"],
  cost: 850,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      centerline: ["hellstrike missile (6)"],
      turret: [],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": ["twin heavy bolter"],
      "hull (left)": ["twin lascannon (2)"],
      "hull (right)": ["twin lascannon (2)"],
    },
    wargear: [],
  },
  SR: {
    'thunderhawk transport bay': "",
    'void shields': "(2)",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access: 'If this Model does not have a base, it is considered to have Access Points on all Facings.',
  options: [
    {
      scentence: "Any of this Model's Hull (Left) Mounted twin lascannon may each be exchanged for:",
      variants: [
        {
          where: "Hull (Left) Mounted",
          what: "gravis heavy bolter battery",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence: "Any of this Model's Hull (Right) Mounted twin lascannon may each be exchanged for:",
      variants: [
        {
          where: "Hull (Right) Mounted",
          what: "gravis heavy bolter battery",
          cost: [0, "pts"],
        },
      ],
    },
    
  ],
});
</script>