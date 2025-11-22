<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="armour role"></div> 
      <h2 class="unit__head-name">Kratos Assault Tank</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "kratos assaut tank",
  stats: [8, 4, 14, 14, 14, 10, "-"],
  types: ["vehicle", "stable"],
  cost: 280,
  composition: 1,
  Dwargear: {
    ranged_weapons: {
      turret: ["kratos battlecannon"],
      "co-axial": ["autocannon"],
      centerline: [],
      sponson: [],
      pintle: [],
      
      "hull (front)": [],
      "hull (rear)": [],
      "hull (front, left)": ["heavy bolter"],
      "hull (front, right)": ["heavy bolter"],
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
        "This Model for its Kratos Battlecannon may have:",
      variants: [
        {
          where: "",
          what: "flashburn shells",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have its Turret Mounted Kratos battlecannon exchanged for one of the following:",
      variants: [
        {
          where: "turret mounted",
          what: "volkite cardanelle",
          cost: [0, "pts"],
        },
        {
          where: "turret mounted",
          what: "melta blast-gun",
          cost: [30, "pts"],
        },

      ],
    },
    {
      scentence: "This Model may have its Hull (Front, Left) Mounted heavy bolter and its Hull (Front, Right) Mounted heavy bolter exchanged for one of the following:",
      variants: [
        {
          where: "hull (front, right) and hull (front, left)",
          what: "volkite caliver",
          cost: [5, "pts"],
        },
        {
          where: "hull (front, right) and hull (front, left)",
          what: "autocannon",
          cost: [10, "pts"],
        },
        {
          where: "hull (front, right) and hull (front, left)",
          what: "lascannon",
          cost: [25, "pts"],
        },


      ],
    },
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
          where: 'pintle mounted',
          what: 'combi-bolter',
          cost: [5, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'combi-flamer',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'combi-melta',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'combi-plasma',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'combi-volkite',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'havoc launcher',
          cost: [5, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'heavy bolter',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'heavy flamer',
          cost: [10, 'pts']
        },
        {
          where: 'pintle mounted',
          what: 'multi-melta',
          cost: [25, 'pts']
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