<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Centurion with Jump Pack</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div></div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Centurion with Jump Pack",
  stats: [12, 5, 5, 4, 4, 3, 5, 4, 9, 8, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "antigrav"],
  Stypes: [],
  base: 32,
  cost: 100,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "officer of the line": "(2)",
    "bulky": "(2)",
    "deep strike": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence:
        "This Model may have its bolter and/or bolt pistol exchanged for one item each:",
      variants: [
        {
          what: "bolt pistol",
          cost: [0, ""],
        },
        {
          what: "chainsword",
          cost: [0, ""],
        },
        {
          what: "bolter",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "desintegrator pistol",
          cost: [5, "pts"],
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
        {
          what: "combat shield",
          cost: [0, "pts"],
        },
        {
          what: "boarding shield",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "This Model may have its bolter exchanged for one of the following:",
      variants: [
        {
          what: "astartes shotgun",
          cost: [2, "pts"],
        },
        {
          what: "volkite charger",
          cost: [2, "pts"],
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
        "This Model may have its bolter and bolt pistol exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [20, "pts"] }],
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
    {
      scentence: "This Model may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence: "This Model may have one:",
      variants: [{ what: "cyber-familiar", cost: [10, "pts"] }],
    },
  ],
});
</script>