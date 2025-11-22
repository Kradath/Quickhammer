<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Vigilator</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Vigilator",
  stats: [7, 4, 7, 4, 4, 3, 5, 3, 9, 8, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 95,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol", "nemesis rifle"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    infiltrate: "(9)",
  },
  traits: ["[allegiance]", "[legiones astartes]", 'smokescreen'],
  options: false
});
</script>