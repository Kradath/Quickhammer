<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role low"></div> 
      <h2 class="unit__head-name">Glaive Super-Heavy Special Weapons Tank</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Glaive",
  stats: [10, 4, 14, 13, 12, 18, "-"],
  types: ["vehicle", "super-heavy"],
  cost: 650,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: ['volkite carronade'],
      centerline: [],
      sponson: ["lascannon array (2)"],
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
    None:''
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence: "This Model may have its Hull (Front) Mounted twin heavy bolter exchanged for:",
      variants: [
        {
          where: "One Hull (Front) mounted",
          what: "twin heavy flamer",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have both Sponson Mounted lascannon arrays exchanged for one of the following:",
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
      scentence: "This Model may have one of the following item:",
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