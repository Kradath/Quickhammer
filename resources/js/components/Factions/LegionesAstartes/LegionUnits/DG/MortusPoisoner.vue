<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Mortus Poisoner Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div></div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Mortus Poisoner",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 7, 7, 3, "-"],
  sergeant: "Poison-master",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  base: 32,
  cost: 70,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol", "rad grenades"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "bitter duty": "",
  },
  traits: ["[allegiance]", "death guard"],
  options: [
    {
      scentence: "A Mortus Poisoner Squad may include:",
      variants: [
        {
          what: "Up to 10 additional Mortus Poisoners",
          cost: [12, "pts each"],
        },
      ],
    },
    {
      scentence: "Any Model in this Unit may have one:",
      variants: [{ what: "chainsword", cost: [2, "pts each"] }],
    },
    {
      scentence:
        "Any model in this Unit with a bolter may have one of the following:",
      variants: [
        { what: "bayonet", cost: [1, "pts each"] },
        { what: "chain bayonet", cost: [2, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        { what: "flamer", cost: [0, "pts"] },
        { what: "alchem flamer", cost: [2, "pts each"] },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Mortus Poisoner in this Unit may have its bolter exchanged for one:",
      variants: [
        {
          what: "heavy alchem flamer",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "One Mortus Poisoner in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Mortus Poisoners in this Unit may each have one item for one of the following:",
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
        "The Poison-master in this Unit may have one of the following:",
      variants: [
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
          what: "power scythe",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence: "The Poison-master may have:",
      variants: [
        {
          what: "phosphex bombs",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "The Poison-master may have:",
      variants: [
        {
          what: "melta bombs",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>