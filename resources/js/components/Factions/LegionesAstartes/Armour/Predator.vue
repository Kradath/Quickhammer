<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="armour role"></div> 
      <h2 class="unit__head-name">Predator</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "predator",
  stats: [12, 4, 13, 12, 10, 5, "-"],
  types: ["vehicle"],
  cost: 100,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: ["predator cannon"],
      centerline: [],
      sponson: ["heavy bolter (2)"],
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
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence:
        "This Model may have its Turret Mounted Predator cannon exchanged for one of the following:",
      variants: [
        {
          where: "turret mounted",
          what: "flamestorm cannon",
          cost: [0, "pts"],
        },
        {
          where: "turret mounted",
          what: "executioner plasma destroyer",
          cost: [25, "pts"],
        },
        {
          where: "turret mounted",
          what: "heavy conversion beam cannon",
          cost: [30, "pts"],
        },
        {
          where: "turret mounted",
          what: "magna-melta cannon",
          cost: [20, "pts"],
        },
        {
          where: "turret mounted",
          what: "graviton cannon",
          cost: [20, "pts"],
        },
        {
          where: "turret mounted",
          what: "volkite macro-saker",
          cost: [5, "pts"],
        },
        {
          where: "turret mounted",
          what: "neutron blaster",
          cost: [15, "pts"],
        },
        {
          where: "turret mounted",
          what: "twin lascannon",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have both Sponson Mounted heavy bolters exchanged for one of the following:",
      variants: [
        {
          where: "two sponson mounted",
          what: "heavy bolter",
          cost: [0, "pts"],
        },
        {
          where: "two sponson mounted",
          what: "heavy flamer",
          cost: [0, "pts"],
        },
        {
          where: "two sponson mounted",
          what: "volkite culverin",
          cost: [10, "pts"],
        },
        {
          where: "two sponson mounted",
          what: "lascannon",
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