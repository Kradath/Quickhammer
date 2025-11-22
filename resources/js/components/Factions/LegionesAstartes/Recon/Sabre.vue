<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role recon"></div> 
      <h2 class="unit__head-name">Sabre</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Sabre",
  stats: [16, 4, 12, 11, 10, 4, '-'],
  types: ["vehicle", "rapid"],
  cost: 80,
  composition: 1,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ['anvilus snub autocannon'],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": ['heavy bolter'],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    "outflank": "",
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence:
        "This Model may have its Centreline Mounted Anvilus snub autocannon exchanged for one of the following:",
      variants: [
        {
          where: "Centreline Mounted",
          what: "neutron blaster",
          cost: [10, "pts"],
        },
        {
          where: "Centreline Mounted",
          what: "volkite saker",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have its Hull (Front) Mounted heavy bolter exchanged for one of the following:",
      variants: [
        {
          where: "Hull (Front) Mounted",
          what: "volkite culverin",
          cost: [15, "pts"],
        },
        {
          where: "Hull (Front) Mounted",
          what: "heavy flamer",
          cost: [0, "pts"],
        },
        {
          where: "Hull (Front) Mounted",
          what: "multi-melta",
          cost: [25, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have one of the following:",
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
      scentence: "This Model may have:",
      variants: [
        {
          where: "",
          what: "searchlights",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have up to four:",
      variants: [
        {
          where: "Hull (Front) Mounted",
          what: "sabre missile",
          cost: [5, "pts each"],
        },
      ],
    },
  ],
});
</script>
<style>

</style>