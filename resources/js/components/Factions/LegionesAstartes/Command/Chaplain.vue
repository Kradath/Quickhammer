<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Chaplain</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Chaplain",
  stats: [7, 5, 4, 4, 4, 3, 5, 4, 9, 10, 8, 7, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 80,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["crozius arcanum", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    none: "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence:
        "This Model may have its bolt pistol exchanged for one item each:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },

    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>