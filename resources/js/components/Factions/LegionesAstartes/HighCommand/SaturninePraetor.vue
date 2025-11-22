<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div> 
      <h2 class="unit__head-name">Praetor in Saturnine Terminator Armour</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div>

    </div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Saturnine Praetor",
  stats: [5, 6, 5, 4, 6, 6, 4, 4, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "heavy"],
  Stypes: [],
  base: 40,
  cost: 200,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: [],
    melee_weapons: ["saturnine disruption fist", "saturnine war axe"],
    wargear: ["thermal diffraction field"],
  },
  SR: {
    "bulky": "(4)",
    "implacable advance": "",
    "slow and purposeful": "",
  },
  traits: ["[allegiance]", "[legiones astartes]", "master of the legion"],
  options: [
    {
      scentence: "This Model may have its Saturnine war axe or Saturnine disruption fist exchanged for:",
      variants: [
        { what: "saturnine concussion hammer", cost: [10, "pts"] },
      ],
    },
    {
      scentence: "This Model may take:",
      variants: [{ what: "plasma blaster", cost: [10, "pts"] }],
    },
    {
      scentence: "This Model may take:",
      variants: [{ what: "saturnine teleportation transponder", cost: [60, "pts"] }],
    },
  ],
});
</script>
