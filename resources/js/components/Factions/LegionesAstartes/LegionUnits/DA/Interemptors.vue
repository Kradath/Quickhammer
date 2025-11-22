<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div>
      <h2 class="unit__head-name">Dreadwing Interemptors</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [4],
  cost: 125,
  base: 32,
  name: "Interemptor",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 8, 7, 7, 3, "-"],
  sergeant: "Interemptors Preafectus",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 9, 8, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: [],
    ranged_weapons: ["bolt pistol", "plasma burner"],
    wargear: ["frag grenades", "krak grenades", "rad grenades"],
  },
  SR: {
    "support unit": "(1)",
    "bitter duty": "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "dark angels"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Dreadwing Interemptors may include:",
      variants: [
        { what: "Up to 5 additional Interemptors", cost: [20, "pts each"] },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Interemptor's plasma burner may be exchanged for one of the following:",
      variants: [
        {
          what: "destroyer missile launcher (+ stasis missiles)",
          cost: [15, "pts"],
        },
        {
          what: "plasma incinerator",
          cost: [15, "pts"],
        },
      ],
    },
   
    {
      scentence: "One Interemptor in this Unit may have one:",
      variants: [
        {
          what: "legion vexilla",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Up to two Interemptors in this Unit may each have one of the following:",
      variants: [
        {
          what: "nuncio-vox",
          cost: [10, "pts"],
        },
        {
          what: "augury scanner",
          cost: [10, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "The Interemptor Praefectus in this Unit may have any of the following selected for it:",
      variants: [
        {
          what: "melta bombs",
          cost: [10, "pts"],
        },
        {
          what: "phosphex bombs",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
