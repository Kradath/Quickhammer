<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Damocles Command Rhino</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Command Rhino",
  stats: [12, 4, 12, 11, 10, 5, 6],
  types: ["vehicle", "transport"],
  cost: 120,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: [],
      sponson: [],
      pintle: ["bolter (2)"],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: ["command vox relay"],
  },
  SR: {
    "light transport": "",
    "auto-repair": "(5+)",
    "mobile command vehicle": "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: 'This Model have Access Points on both Sides Facings and the Rear Facing',
  options: [
    {
      scentence:
        "Each of this Model's Pintle Mounted bolters may be exchanged for one:",
      variants: [
        {
          where: "pintle mounted",
          what: "combi-bolter",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "One of this Model's Pintle Mounted bolters may be exchanged for one of the following:",
      variants: [
        {
          where: "pintle mounted",
          what: "combi-bolter",
          cost: [5, "pts"],
        },
        {
          where: "pintle mounted",
          what: "combi-flamer",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "combi-melta",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "combi-plasma",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "combi-volkite",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "havoc launcher",
          cost: [5, "pts"],
        },
        {
          where: "pintle mounted",
          what: "heavy bolter",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "heavy flamer",
          cost: [10, "pts"],
        },
        {
          where: "pintle mounted",
          what: "multi-melta",
          cost: [25, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have one of each of th following:",
      variants: [
        {
          where: "One Hull (Front) mounted",
          what: "hunter-killer missile",
          cost: [10, "pts"],
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