<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Sons of Horus Inductii Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 6, 6, 3, "-"],
  sergeant: "",
  Sstats: "",
  types: ["infantry"],
  Stypes: [],
  base: 32,
  cost: 100,
  composition: [10],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol", "chainsword"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    vanguard: "(2)",
    inductii: "",
    "creed of brutality": "",
  },
  traits: ["[allegiance]", "sons of horus"],
  options: [
    {
      scentence: "An Sons Of Horus Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Inductii in this Unit may have its chainsword exchanged for one:",
      variants: [{ what: "chainaxe", cost: [0, "pts"] }],
    },
    {
      scentence:
        "For every four Models in this Unit, one Inductii in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainsword",
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
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every four Models in this Unit, one Inductii in this Unit may have its bolt pistol exchanged for one of the following:",
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
      scentence: "One Inductii in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Inductii in this Unit may each have one item for one of the following:",
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
