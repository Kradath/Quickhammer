<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Nemesis Destroyer Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Nemesis Destroyer",
  composition: [9],
  cost: 165,
  base: 32,
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 7, 7, 7, 3, "5+"],
  sergeant: "Nemesis Destroyer Sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "5+"],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["mortifier bolter", "bolt pistol"],
    wargear: ["krak grenades", "frag grenades", "rad grenades"],
  },
  SR: {
    none: "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "ultramarines"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  options: [
    {
      scentence: "A Nemesis Destroyer Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Nemesis Destroyers",
          cost: [15, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Nemesis Destroyer Sergeant may have its chainsword exchanged for one of the following:",
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
        "Up to two Nemesis Destroyer in this Unit may each have one of the following:",
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
        "The Nemesis Destroyer Sergeant in this Unit may have:",
      variants: [
        {
          what: "melta bombs",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Nemesis Destroyer Sergeant in this Unit may have:",
      variants: [
        {
          what: "phosphex bombs",
          cost: [10, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "For every 5 Models in this Unit, one Nemesis Destroyer in this Unit may have its mortifier bolter exchanged for one of the following:",
      variants: [
        {
          what: "volkite charger",
          cost: [5, "pts"],
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
          what: "meltagun",
          cost: [15, "pts"],
        },
        {
          what: "graviton gun",
          cost: [15, "pts"],
        },
        {
          what: "lascutter",
          cost: [15, "pts"],
        },
        {
          what: "heavy bolter",
          cost: [10, "pts"],
        },
        {
          what: "destroyer missile launcher",
          cost: [15, "pts"],
        },
      ],
    },
    
  ],
});
</script>