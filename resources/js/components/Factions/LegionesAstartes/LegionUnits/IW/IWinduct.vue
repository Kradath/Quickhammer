<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Iron Warriors Inductii Squad</h2>
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
  cost:90,
  base: 32,
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 8, 6, 5, 3, "-"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: [],
    ranged_weapons: ["bolter", "bolt pistol"],
    wargear: ["frag grenades","krak grenades"],
  },
  SR: {
    "inductii": "",
    "line": "(1)",
    "expendable": "(1)",
    "implacable advance": ""
  },
  twoProfiles: false,
  traits: ["[allegiace]", "iron warriors"],
  Stypes: [],
  types: ["infantry"],
  options: [
    {
      scentence: "A Iron Warriors Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolter exchanged for one:",
      variants: [
        {
          what: "astartes shotgun",
          cost: [2, "pts"],
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

    {
      scentence: "Any Model in this Unit with a bolter may have one of the following selected for it:",
      variants: [{ what: "bayonet", cost: [1, "pts each"] },
      { what: "chain bayonet", cost: [2, "pts each"] }],
    },

  ],
});
</script>
