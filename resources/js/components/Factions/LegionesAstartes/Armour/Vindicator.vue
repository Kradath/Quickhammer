<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="armour role"></div> 
      <h2 class="unit__head-name">Vindicator Siege Tank</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "vindicator",
  stats: [10, 4, 13, 13, 10, 6, "-"],
  types: ["vehicle"],
  cost: 140,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ["demolisher cannon"],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": ["combi-bolter"],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    None: "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence:
        "This Model may have Centerline Mounted demolisher cannon exchanged for:",
      variants: [
        {
          where: "centerlinte mounted",
          what: "magna laser destroyer",
          cost: [20, "pts"],
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
      scentence:
        "This Model may have one of each of the following:",
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
        {
          where: "",
          what: "dozer blade",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>