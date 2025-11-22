<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div> 
      <h2 class="unit__head-name">Praetorian Command Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "chosen",
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 2, "-"],
  sergeant: "chosen champion",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 4, 8, 8, 7, 7, 2, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant", "champion"],
  base: 32,
  cost: 130,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    none: "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Praetorian Command Squad may include:",
      variants: [{ what: "Up to 5 additional Chosen", cost: [20, "pts each"] }],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolter exchanged for one of the following:",
      variants: [
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
          what: "astartes shotgun",
          cost: [2, "pts"],
        },
        {
          what: "desintegrator rifle",
          cost: [5, "pts"],
        },
        {
          what: "volkite charger",
          cost: [2, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit whose bolter has been exchanged for an item from the Legion Sergeant Melee Weapons list may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "combat shield",
          cost: [2, "pts"],
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
        "The Chosen Champion in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "desintegrator pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolter and bolt pistol exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence: "One Chosen in this Unit may have:",
      variants: [{ what: "legion standard", cost: [20, "pts"] }],
    },
    {
      scentence:
        "Any model in this Unit with a bolter may have one of the following:",
      variants: [
        { what: "bayonet", cost: [1, "pts each"] },
        { what: "chain bayonet", cost: [2, "pts each"] },
      ],
    },
  ],
});
</script>