<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Templar Brethren</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Templar Brethren",
  composition: [4],
  cost: 160,
  base: 32,
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 8, 8, 8, 8, 2, "-"],
  sergeant: "Templar Champion",
  Sstats: [7, 5, 4, 4, 4, 2, 4, 3, 9, 8, 8, 8, 2, "-"],
  Dwargear: {
    melee_weapons: ["power sword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["krak grenades", "frag grenades"],
  },
  SR: {
    "templar assault": "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "imperial fists"],
  types: ["infantry"],
  Stypes: ["infantry", "champion", "sergeant"],
  options: [
    {
      scentence: "A Templar Brethren may include:",
      variants: [
        { what: "Up to 5 additional Templar Brethren", cost: [27, "pts each"] },
      ],
    },
    {
      scentence:
        "The Templar Champion in this Unit may have its power sword exchanged for one of the following:",
      variants: [
        {
          what: "solarite power gauntlet",
          cost: [15, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Templar Champion in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "archaeotech pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "combat shield",
          cost: [2, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [10, "pts each"],
        },
      ],
    },
    
    {
      scentence:
        "Up to two Templar Brethren in this Unit may each have one of the following:",
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
      scentence: "One Templar Brethren in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence: "Every Model in the Unit may have:",
      variants: [{ what: "melta bombs", cost: [25, "pts per unit"] }],
    },
  ],
});
</script>