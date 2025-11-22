<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Firedrake Terminator Squad</h2>
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
  cost: 250,
  base: 40,
  name: "Firedrake",
  stats: [6, 5, 4, 4, 5, 2, 4, 2, 9, 8, 8, 8, 2, "4+"],
  sergeant: "Firedrake Master",
  Sstats: [6, 5, 4, 4, 5, 2, 4, 2, 9, 8, 8, 8, 2, "4+"],
  Dwargear: {
    melee_weapons: ["forge-crafted thunder hammer"],
    ranged_weapons: [],
    wargear: ["drakenscale"],
  },
  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    vanguard: "(4)",
  },
  traits: ["[allegiance]", "salamanders", "shield"],
  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],
  twoProfiles: false,
  options: [
    {
      scentence: "A Firedrake Terminator Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Firedrake Terminators",
          cost: [45, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its forge-crafted thunder hammer exchanged for one of the following:",
      variants: [
        {
          what: "power sword",
          cost: [0, "pts"],
        },
        {
          what: "power axe",
          cost: [0, "pts"],
        },
        {
          what: "power maul",
          cost: [0, "pts"],
        },
        {
          what: "power lance",
          cost: [0, "pts"],
        },
        {
          what: "power fist",
          cost: [0, "pts"],
        },
        {
          what: "chainfist",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Drakenscale exchanged for one of the following (any Model that has its Drakenscale exchanged for any Wargear option loses the Shield Trait):",
      variants: [
        {
          what: "combi-bolter",
          cost: [0, "pts"],
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
      scentence: "One Firedrake in this Unit may have its Drakenscale exchanged for one (any Model that has its Drakenscale exchanged for any Wargear option loses the Shield Trait):",
      variants: [
        {
          what: "forge-crafted heavy flamer",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
