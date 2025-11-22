<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Death Guard Inductii Squad</h2>
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
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 6, 6, 3, "-"],
  sergeant: "",
  Sstats: "",
  types: ["infantry"],
  Stypes: [],
  base: 32,
  cost: 90,
  composition: [10],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    line: "(1)",
    inductii: "",
    "fury of the legion": "",
    "barbaran resilience": "",
  },
  traits: ["[allegiance]", "death guard"],
  options: [
    {
      scentence: "An Death Guard Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Inductii in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "alchem flamer",
          cost: [5, "pts"],
        },
        {
          what: "rotor cannon",
          cost: [10, "pts"],
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
