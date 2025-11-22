<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="armour role"></div> 
      <h2 class="unit__head-name">Sicaran Venator</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "sicaran venator",
  stats: [14, 4, 13, 12, 12, 6, "-"],
  types: ["vehicle"],
  cost: 170,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: ["heavy bolter"],
      centerline: ["neutron beam laser"],
      sponson: ["heavy bolter (2)"],
      pintle: [],
      "co-axial": [],
      "hull (front)": ["heavy bolter"],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    "explodes": "(5+)",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence: "This Model may have both Sponson Mounted heavy bolters exchanged for one of the following:",
      variants: [
        {
          where: 'two sponson mounted',
          what: 'heavy bolter',
          cost: [0, 'pts']
        },
        {
          where: 'two sponson mounted',
          what: 'heavy flamer',
          cost: [0, 'pts']
        },
        {
          where: 'two sponson mounted',
          what: 'volkite culverin',
          cost: [10, 'pts']
        },
        {
          where: 'two sponson mounted',
          what: 'lascannon',
          cost: [20, 'pts']
        },

      ],
    },
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
        
      ],
    },
  ],
});
</script>