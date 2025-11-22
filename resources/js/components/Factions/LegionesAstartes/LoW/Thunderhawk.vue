<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role low"></div> 
      <h2 class="unit__head-name">Thunderhawk Gunship</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Thunderhawk",
  stats: [18, 4, 13, 13, 13, 18, 32],
  types: ["vehicle", "transport", "super-heavy", "flyer"],
  cost: 685,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      centerline: ["turbo laser destructor", "hellstrike missile (6)"],
      turret: ["twin heavy bolter (2)"],
      sponson: ["twin heavy bolter (2)"],
      pintle: [],
      "co-axial": [],
      "hull (front)": ["lascannon (2)"],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    'thunderhawk transport bay': "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: 'If this Model does not have a base, it is considered to have Access Points on all Facings.',
  options: false,
});
</script>