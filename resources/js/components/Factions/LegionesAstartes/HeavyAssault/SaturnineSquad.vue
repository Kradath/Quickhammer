<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div> 
      <h2 class="unit__head-name">Saturnine Terminator Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Saturnine Terminator",
  stats: [5, 4, 4, 4, 6, 3, 3, 2, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Saturnine Sergeant",
  Sstats: [5, 4, 4, 4, 6, 3, 3, 2, 8, 8, 7, 7, 2, "4+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 50,
  cost: 200,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["plasma bombard"],
    melee_weapons: ["saturnine disruption fist"],
    wargear: ["occulix targeting auspex", "thermal diffraction field"],
  },
  SR: {
    bulky: "(4)",
    explodes: "(6+)",
    "implacable advance": "",
    "slow and purposeful": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Saturnine Terminator Squad may include:",
      variants: [
        {
          what: "Up to 3 additional Saturnine Terminators",
          cost: [60, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Saturnine disruption fist exchanged for one of the following:",
      variants: [
        { what: "plasma bombard", cost: [0, "pts"] },
        { what: "twin heavy desintegrator", cost: [10, "pts"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its plasma bombard exchanged for:",
      variants: [{ what: "twin heavy desintegrator", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Any Model in this Unit with a Saturnine disruption fist may have:",
      variants: [{ what: "particle shredder", cost: [5, "pts"] }],
    },
  ],
});
</script>
