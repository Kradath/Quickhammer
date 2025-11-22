<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Reaver Attack Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "reaver",
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  sergeant: "reaver chieftain",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 3, 9, 8, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  base: 32,
  cost: 135,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["chainaxe", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    precision: "(6+)",
    vanguard: "(3)",
  },
  traits: ["[allegiance]", "sons of horus"],
  options: [
    {
      scentence: "A Reaver Attack Squad may include:",
      variants: [
        { what: "Up to 15 additional Reavers", cost: [22, "pts each"] },
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
        "Any Model in this Unit may have its chainaxe exchanged for one of the following:",
      variants: [
        {
          what: "chainsword",
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
        "For every five Models in this Unit, one Reaver in this Unit may have its chainaxe exchanged for one item from one of the following:",
      variants: [
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "meltagun",
          cost: [15, "pts"],
        },
        {
          what: "plasma gun",
          cost: [10, "pts"],
        },
        {
          what: "volkite charger",
          cost: [5, "pts"],
        },
        {
          what: "volkite caliver",
          cost: [10, "pts"],
        },
        {
          what: "rotor cannon",
          cost: [10, "pts"],
        },
      ],
    },
    
    {
      scentence: "One Reaver in this Unit may have:",
      variants: [
        { what: "legion vexilla", cost: [10, "pts"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainaxe and bolt pistol exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    
    {
      scentence:
        "Up to two Reavers in this Unit may have one of the following:",
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
      scentence: "Reaver Chieftain may have:",
      variants: [
        { what: "melta bombs", cost: [10, "pts"] },
      ],
    },
  ],
});
</script>