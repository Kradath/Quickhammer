<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Deathwing Companion Detachment</h2>
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
  name: "Deathwing Companion",
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 8, 8, 8, 8, 2, "-"],
  sergeant: "Deathwing Oathbearer",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 3, 9, 8, 8, 8, 2, "5+"],
  Dwargear: {
    melee_weapons: ["calibanite warblade"],
    ranged_weapons: ["bolt pistol", "bolter"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "eternal warrior": "(1)",
    companions: "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "dark angels"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Deathwing Companion Detachment may include:",
      variants: [
        {
          what: "Up to 5 additional Deathwing Companions",
          cost: [30, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Calibanite warblade exchanged for one of the following:",
      variants: [
        {
          what: "power fist",
          cost: [5, "pts"],
        },
        {
          what: "terranic greatsword",
          cost: [5, "pts"],
        },
      ],
    },

    {
      scentence:
        "Any Model in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolter exchanged for one of the following:",

      variants: [
        {
          what: "cytheron pattern aegis",
          cost: [10, "pts each"],
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
      scentence: "Every Model in the Unit may have:",
      variants: [{ what: "melta bombs", cost: [25, "pts per unit"] }],
    },
    {
      scentence: "One Deathwing Companion in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Any Model in this Unit with a bolter may have one of the following selected for it:",
      variants: [
        {
          what: "bayonet",
          cost: [1, "pts each"],
        },
        {
          what: "chain bayonet",
          cost: [2, "pts each"],
        },
      ],
    },
  ],
});
</script>
