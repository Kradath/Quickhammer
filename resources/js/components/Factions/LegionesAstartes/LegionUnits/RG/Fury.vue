<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Dark Fury Squad</h2>
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
  cost: 175,
  base: 32,
  name: "dark fury",
  stats: [14, 5, 4, 4, 4, 2, 4, 3, 8, 7, 7, 7, 3, "-"],
  sergeant: "chooser of the slain",
  Sstats: [14, 5, 4, 4, 4, 2, 4, 3, 9, 7, 7, 7, 3, "-"],
  Dwargear: {
    ranged_weapons: [],
    melee_weapons: ["paired raven's talons"],
    wargear: ["frag grenades", "krak grenades", "corvid pattern jump pack"],
  },
  SR: {
    bulky: "(3)",
    "deep strike": "",
    "precision": "",
  },
  traits: ["[allegiance]", "raven guard"],
  Stypes: ["infantry", "sergeant", "antigrav"],
  types: ["infantry", "antigrav"],
  twoProfiles: false,
  options: [
    {
      scentence: "A Dark Fury Squad may include:",
      variants: [
        { what: "Up to 5 additional Dark Furies", cost: [30, "pts each"] },
      ],
    },
    {
      scentence:
        "If th is Unit has 10 Mode ls, one Dark Fury may be replaced with a:",
      variants: [
        {
          what: "chooser of the slain",
          cost: [5, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "Any Chooser of the Slain in this Unit may have:",
      variants: [
        {
          what: "melta bombs",
          cost: [10, "pts each"],
        },
        
      ],
    },
       
  ],
});
</script>