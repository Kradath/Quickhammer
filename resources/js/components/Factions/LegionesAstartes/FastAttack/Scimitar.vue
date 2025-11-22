<template>
  <main class="container center unit">

    <!-- голова -->
    <div class="unit__head">
      <div class="role fa"></div> 
      <h2 class="unit__head-name">Scimitar Jetbike Squadron</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "scimitar hunter",
  stats: [16, 4, 4, 4, 4, 2, 4, 1, 7, 8, 7, 7, 3, "-"],
  sergeant: "scimitar sergeant",
  Sstats: [16, 4, 4, 4, 4, 2, 4, 1, 8, 8, 7, 7, 3, "-"],
  types: ["cavalry", "antigrav"],
  Stypes: ["cavalry", "sergeant", "antigrav"],
  base: 60,
  cost: 95,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol", "heavy bolter"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    bulky: "(3)",
    "deep strike": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "This unit may include:",
      variants: [
        { what: "Up to 7 additional Scimitar Hunters", cost: [30, "pts each"] },
      ],
    },
    {
      scentence: "One Scimitar Hunter in this Unit may have:",
      variants: [{ what: "augury scanner", cost: [10, "pts"] }],
    },
    {
      scentence:
        "The Scimitar Sergeant in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "chainsword",
          cost: [0, ""],
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
        "Any Model in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its heavy bolter exchanged for one of the following:",
      variants: [
        {
          what: "volkite culverin",
          cost: [5, "pts"],
        },
        {
          what: "multi-melta",
          cost: [15, "pts"],
        },
        {
          what: "plasma cannon",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>