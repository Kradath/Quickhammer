<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Saboteur</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
   
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Saboteur",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 8, 8, 7, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "specialist", "skirmish"],
  Stypes: [],
  base: 32,
  cost: 95,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike shotgun", "venom spheres", "bolt pistol"],
    melee_weapons: ["krak grenades", "melta bombs", "power dagger"],
    wargear: ["frag grenades"],
  },
  SR: {
    infiltrate: "(6)",
    "false colours": "",
  },
  traits: ["[allegiance]", "alpha legion", "smokescreen"],
  options: [
    {
      scentence:
        "This Model may have its bolt pistol exchanged for one of the following:",
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
  ],
});
</script>