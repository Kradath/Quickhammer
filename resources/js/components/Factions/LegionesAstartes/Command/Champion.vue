<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Legion Champion</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Legion Champion",
  stats: [7, 6, 5, 4, 4, 3, 5, 5, 8, 8, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 105,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["volkite serpenta"],
    melee_weapons: ["paragon blade", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "never back down": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "This Model may have its volkite serpenta exchanged for one:",
      variants: [{ what: "combi-melta", cost: [10, "pts"] }],
    },
    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
    {
      scentence:
        "This Model with a bolter may have one of the following selected for it:",
      variants: [
        { what: "bayonet", cost: [1, "pts"] },
        { what: "chain bayonet", cost: [2, "pts"] },
      ],
    },
  ],
});
</script>