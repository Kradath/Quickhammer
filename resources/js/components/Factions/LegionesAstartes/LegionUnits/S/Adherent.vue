<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Adherents Squad</h2>
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
  cost: 85,
  base: 32,
  name: "Adherent",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 7, 7, 7, 3, "-"],
  sergeant: "Advocate",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["combi-flamer", "bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    vanguard: "(2)",
    "creed of flame": "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "salamanders"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Adherents Squad may include:",
      variants: [
        { what: "Up to 5 additional Adherents", cost: [15, "pts each"] },
      ],
    },

    {
      scentence:
        "The Advocate in this Unit may have its chainsword exchanged for one of the following:",
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
        "For every five Models in this Unit, one Adherent in this Unit may have its combi-flamer exchanged for one:",
      variants: [
        {
          what: "forge-crafted heavy flamer",
          cost: [10, "pts"],
        },
        
      ],
    },
    {
      scentence: "The Advocate in the Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence: "One Adherent in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Adherents in this Unit may each have one of the following:",
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
  ],
});
</script>
