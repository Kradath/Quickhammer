<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Locutarus Storm Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Locutarus",
  composition: [4],
  cost: 200,
  base: 32,
  stats: [12, 5, 4, 4, 4, 2, 4, 2, 8, 8, 7, 7, 2, "-"],
  sergeant: "Locutarus Strike Leader",
  Sstats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 2, "-"],
  Dwargear: {
    melee_weapons: ["argean power sword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["krak grenades", "frag grenades"],
  },
  SR: {
    bulky: "(2)",
    "deep strike": "",
    precision: "(6+)",
    "the blade of wisdom": "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "ultramarines"],
  types: ["infantry", "antigrav"],
  Stypes: ["infantry", "champion", "antigrav"],
  options: [
    {
      scentence: "A Praetorian Breacher Squad may include:",
      variants: [
        { what: "Up to 5 additional Locutarus", cost: [38, "pts each"] },
      ],
    },
    {
      scentence:
        "The Locutarus Strike Leader may have its Argean powersword exchanged for one following:",
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
        "The Locutarus Strike Leader may have its bolt pistol exchanged for one of the following:",
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
        "The Locutarus Strike Leader may have one:",
      variants: [
        {
          what: "combat shield",
          cost: [5, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "The Locutarus Strike Leader may have:",
      variants: [
        {
          what: "melta bombs",
          cost: [10, "pts"],
        },
        
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Locutarus in this Unit may have its bolt pistol exchanged for one of the following:",
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
  ],
});
</script>