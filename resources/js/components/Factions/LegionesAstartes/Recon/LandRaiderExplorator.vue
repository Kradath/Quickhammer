<template>
  <main class="container center unit">
  

    <!-- голова -->
    <div class="unit__head">
      <div class="role recon"></div> 
      <h2 class="unit__head-name">Land Raider Explorator</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Land Raider Explorator",
  stats: [12, 4, 14, 14, 14, 8, 10],
  types: ["vehicle", "transport"],
  cost: 220,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: [],
      sponson: ["twin lascannon (2)"],
      pintle: [],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: ["dozer blade"],
  },
  SR: {
    outflank: "",
    "auto-repair": "(5+)",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: "This Model have Access Points on both Sides Facings",
  options: [
    {
      scentence: "This Model may have one of the following:",
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
      scentence: "This Model may have one of the following:",
      variants: [
        {
          where: "Hull (Front) Mounted",
          what: "twin heavy flamer",
          cost: [10, "pts"],
        },
        {
          where: "Hull (Front) Mounted",
          what: "twin heavy bolter",
          cost: [10, "pts"],
        },
        {
          where: "Hull (Front) Mounted",
          what: "twin lascannon",
          cost: [20, "pts"],
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