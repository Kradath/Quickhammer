<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role low"></div> 
      <h2 class="unit__head-name">Mastodon Super-Heavy Assault Transport</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Mastodon",
  stats: [10, 4, 14, 14, 14, 20, 42],
  types: ["vehicle", "super-heavy", 'transport'],
  cost: 600,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: ['skyreaper battery'],
      centerline: ['siege melta array'],
      sponson: [],
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
    "assault vehicle":'',
    "mastodon transport bay":'',
    "void shields":'(2)',
  },
  traits: ["[alegiance]", "[legiones astartes]", "smokescreen"],
  access: false,
  options: [
    {
      scentence:
        "This Model must have two items:",
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