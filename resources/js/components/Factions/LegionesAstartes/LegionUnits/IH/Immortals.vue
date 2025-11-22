<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Medusan Immortals Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "immortal",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 10, 7, 7, 3, "5+"],
  sergeant: "immortal sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 9, 10, 7, 7, 3, "5+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 32,
  cost: 95,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["boarding shield", "frag grenades"],
  },
  SR: {
    "feel no pain": "(5+)",
    "implacable advance": "",
    expendable: "(2)",
  },
  traits: ["[allegiace]", "Iron Hands", "Shield"],
  options: [
    {
      scentence: "A Medusan Immortal Squad may include:",
      variants: [
        { what: "Up to 15 additional Immortals", cost: [15, "pts each"] },
      ],
    },
    {
      scentence:
        "The Immortal Sergeant in this Unit may have its bolter exchanged for one item from or one of the following:",
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
        "The Immortal Sergeant in this Unit may have its bolt pistol exchanged for one of the following:",
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
      scentence: "The Immortal Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },

    {
      scentence: "Any Model in this Unit meay have its bolter exchanged for one if the following:",
      variants: [{ what: "chainsword", cost: [0, "pts"] },
      { what: "volkite charger", cost: [2, "pts"] }],
    },
    
    {
      scentence:
        "For every five Models in this Unit, one Immortal in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        { what: "graviton gun", cost: [10, "pts each"] },
         { what: "graviton shredder", cost: [15, "pts each"] },
        { what: "lascutter", cost: [10, "pts each"] },
        { what: "flamer", cost: [5, "pts each"] },
        { what: "meltagun", cost: [15, "pts each"] },
      ],
    },
  ],
});
</script>
