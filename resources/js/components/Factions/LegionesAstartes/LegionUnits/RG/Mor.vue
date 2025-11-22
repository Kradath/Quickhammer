<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Mor Deytan Squad</h2>
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
  name: "mor deythan",
  stats: [7, 4, 5, 4, 4, 2, 4, 1, 8, 8, 7, 7, 3, "-"],
  sergeant: "mor deythan shade",
  Sstats: [7, 4, 5, 4, 4, 2, 4, 1, 9, 8, 7, 7, 3, "-"],
  Dwargear: {
    ranged_weapons: ["bolt pistol", "nemesis bolter"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades", "cameleoline"],
  },
  SR: {
    infiltrate: "(8)",
    "fatal strike": "",
    "move through cover": "",
    "support unit": "(1)",
  },
  traits: ["[allegiance]", "raven guard"],
  Stypes: ["infantry", "sergeant", "skirmish"],
  types: ["infantry", "skirmish"],
  twoProfiles: false,
  options: [
    {
      scentence: "A Mor Deytan Squad may include:",
      variants: [
        { what: "Up to 5 additional Mor Deytan", cost: [30, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its nemesis bolter exchanged for one:",
      variants: [
        {
          what: "astartes shotgun",
          cost: [0, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have one of the following selected for it:",
      variants: [
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
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Nemesis bolter exchanged for one of the following:",
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
        "For every three Models in this Unit, one Model in this Unit may have its Nemesis bolter exchanged for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [0, "pts"],
        },
        {
          what: "volkite charger",
          cost: [0, "pts"],
        },
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "plasma gun",
          cost: [10, "pts"],
        },
        {
          what: "melta gun",
          cost: [10, "pts"],
        },
        {
          what: "missile launcher",
          cost: [10, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "The Mor Deythan Shade in this Unit may have:",
      variants: [
        {
          what: "melta bombs",
          cost: [5, "pts"],
        },
        
        
      ],
    },
  ],
});
</script>