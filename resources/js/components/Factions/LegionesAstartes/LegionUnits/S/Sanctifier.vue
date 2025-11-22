<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div>
      <h2 class="unit__head-name">Sanctifier Squad</h2>
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
  cost: 90,
  base: 32,
  name: "Sanctifier",
  stats: [7, 5, 4, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "-"],
  sergeant: "Consecrator",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["bolter", "bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    vanguard: "(3)",
    firestorm: "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "salamanders"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Sanctifier Squad may include:",
      variants: [
        { what: "Up to 5 additional Sanctifiers", cost: [16, "pts each"] },
      ],
    },

    {
      scentence:
        "Any Model in this Unit may have its bolter and bolt pistol exchanged for two weapons of one of the following types:",
      variants: [
        {
          what: "bolt pistol",
          cost: [0, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [0, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Sanctifier in this Unit may have its bolter exchanged for one:",
      variants: [
        {
          what: "obsidite rotor cannon",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Sanctifier in this Unit may have its chainsword exchanged for one:",
      variants: [
        {
          what: "chainsword",
          cost: [0, "pts"],
        },
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "lightning claw",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Consecrator in this Unit may have its bolter and bolt pistol exchanged for two weapons of one of the following types:",
      variants: [
        {
          what: "forge-crafted hand flamer",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Consecrator in this Unit may have its chainsword exchanged for one following:",
      variants: [
        {
          what: "chainsword",
          cost: [0, "pts"],
        },
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "lightning claw",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence: "Every Model in the Unit may have:",
      variants: [{ what: "melta bombs", cost: [25, "pts per unit"] }],
    },
    {
      scentence: "One Sanctifier in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Sanctifiers in this Unit may each have one of the following:",
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
  ],
});
</script>
