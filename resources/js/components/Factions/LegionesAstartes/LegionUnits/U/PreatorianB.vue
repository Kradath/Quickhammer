<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Praetorian Breacher Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Praetorian",
  composition: [4],
  cost: 115,
  base: 32,
  stats: [7, 4, 4, 4, 4, 2, 4, 2, 7, 8, 7, 7, 3, "5+"],
  sergeant: "Praetorian Primus",
  Sstats: [7, 4, 4, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "5+"],
  Dwargear: {
    melee_weapons: ["power sword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["krak grenades", "frag grenades", "boarding shield"],
  },
  SR: {
    "none": "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "ultramarines","shield"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  options: [
    {
      scentence: "A Praetorian Breacher Squad may include:",
      variants: [
        { what: "Up to 5 additional Praetorians", cost: [18, "pts each"] },
      ],
    },
    {
      scentence:
        "Up to two Praetorians in this Unit may each have one of the following:",
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
      scentence: "One Praetorian in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "The Praetorian Primus in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Praetorian Primus in this Unit may exchange its power sword for one of the following:",
      variants: [
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "legatine axe",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Praetorian in this Unit may have its power sword exchanged for one:",
      variants: [
        
        {
          what: "legatine axe",
          cost: [5, "pts"],
        },
      ],
    },
    
  ],
});
</script>