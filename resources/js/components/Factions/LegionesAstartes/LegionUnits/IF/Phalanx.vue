<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Phalanx Warder Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  
  composition: [9],
  cost: 200,
  base: 32,
  name: "Phalanx Warder",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 7, 7, 3, "5+"],
  sergeant: "Phalanx sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "5+"],
  Dwargear: {
    melee_weapons: ["power axe"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["boarding shield", "frag grenades","krak grenades"],
  },
  SR: {
    "phalanx formation": "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "imperial fists", "shield"],
  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],
  options: [
    {
      scentence: "A Phalanx Warder Squad may include:",
      variants: [
        { what: "Up to 10 additional Phalanx Warders", cost: [18, "pts each"] },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Phalanx Warder in this Unit may have one of the following:",
      variants: [
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "plasma gun",
          cost: [10, "pts"],
        },
        {
          what: "meltagun",
          cost: [15, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
        {
          what: "combi-bolter",
          cost: [5, "pts"],
        },
        {
          what: "combi-flamer",
          cost: [10, "pts"],
        },
        {
          what: "combi-melta",
          cost: [10, "pts"],
        },
        {
          what: "combi-plasma",
          cost: [10, "pts"],
        },
        {
          what: "combi-volkite",
          cost: [10, "pts"],
        },
        {
          what: "combi-grenade",
          cost: [10, "pts"],
        },
        {
          what: "combi-desintegrator",
          cost: [10, "pts"],
        },
        {
          what: "combi-grav",
          cost: [10, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "The Warder Sergeant in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Warder Sergeant in this Unit may have its power axe exchanged for one:",
      variants: [
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
        {
          what: "solarite power gauntlet",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Up to two Phalanx Warders in this Unit may each have one of the following:",
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
      scentence: "One Phalanx Warder in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },

    {
      scentence: "Every Model in the Unit may have:",
      variants: [{ what: "melta bombs", cost: [25, "pts per unit"] }],
    },

  ],
});
</script>
