<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="armour role"></div> 
      <h2 class="unit__head-name">Arquitor Bombard</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "arquitor bombard",
  stats: [8, 4, 13, 12, 10, 6, "-"],
  types: ["vehicle"],
  cost: 150,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: [],
      centerline: ["morbus bombard"],
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
      scentence: "If your Army includes a Siege Breaker Model with the same Faction Trait as this Model, this Model's Centreline Mounted Morbus bombard may also have:",
      variants: [
        {
          where: "",
          what: "phosphex shells",
          cost: [20, "pts"],
        },
        
      ],
    },
    {
      scentence: "This Model may have its Centreline Mounted Morbus bombard exchanged for one of the following:",
      variants: [
        {
          where: "centerline mounted",
          what: "graviton-charge cannon",
          cost: [15, "pts"],
        },
        {
          where: "centerline mounted",
          what: "spicula rocket system",
          cost: [15, "pts"],
        },
        
      ],
    },
    {
      scentence: "This Model may have both Sponson Mounted heavy bolters exchanged for one of the following:",
      variants: [
        {
          where: 'two sponson mounted',
          what: 'autocannon',
          cost: [10, 'pts']
        },
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