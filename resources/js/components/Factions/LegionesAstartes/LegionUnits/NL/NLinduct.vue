<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Night Lords Inductii Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [10],
  cost: 100,
  base: 32,
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 6, 6, 3, "-"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["killer's blade"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    inductii: "",
    vanguard: "(2)",
    "unscrupulous murderers": "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "night lords"],
  Stypes: [],
  types: ["infantry"],
  options: [
    {
      scentence: "A Night Lords Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
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
      scentence:
        "Up to two Inductii in this Unit may each have one of the following:",
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
      scentence: "One Inductii in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
  ],
});
</script>
