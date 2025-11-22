<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Breacher Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "breacher legionary",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 7, 7, 3, "5+"],
  sergeant: "breacher sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 7, 7, 7, 3, "5+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 32,
  cost: 140,
  composition: [9],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["boarding shield", "frag grenades"],
  },
  SR: {
    line: "(1)",
  },
  traits: ["[allegiance]", "[legiones astartes]", "shield"],
  options: [
    {
      scentence: "A Legion Breacher Squad may include:",
      variants: [
        {
          what: "Up to 10 additional Breacher Legionaries",
          cost: [12, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Breacher Sergeant in this Unit may have its bolter exchanged for one item from one of the following:",
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
        "The Breacher Sergeant in this Unit may have its bolt pistol exchanged for one of the following:",
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
      scentence: "The Breacher Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence: "One Breacher Legionary in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Breacher Legionaries in this Unit may each have one item for one of the following:",
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
        "For every five Models in this Unit, one Breacher Legionary in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        { what: "graviton gun", cost: [10, "pts each"] },
        { what: "lascutter", cost: [10, "pts each"] },
      ],
    },
  ],
});
</script>
