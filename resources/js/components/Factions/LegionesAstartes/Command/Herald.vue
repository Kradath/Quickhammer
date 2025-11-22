<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Herald</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />

  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Herald",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 9, 9, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 100,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["power weapon", "krak grenades"],
    wargear: ["icon of allegiance", "frag grenades"],
  },
  SR: {
    fear: "(1)",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "This Model may have its power weapon exchanged for one:",
      variants: [{ what: "power fist", cost: [10, "pts"] }],
    },
    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>