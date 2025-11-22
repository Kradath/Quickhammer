<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Librarian</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Librarian",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 8, 7, 9, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 85,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["force weapon", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "none": "",
  },
  traits: ["[allegiance]", "[legiones astartes]", "psyker"],
  options: [
    {
      scentence:
        "This Model may have its bolt pistol exchanged for one item each:",
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
      scentence: "This Model may have to two of the following Psychic Disciplines selected for it:",
      variants: [
        {
          what: "biomancy",
          cost: [20, "pts"],
        },
        {
          what: "pyromancy",
          cost: [10, "pts"],
        },
        {
          what: "telekinesis",
          cost: [20, "pts"],
        },
        {
          what: "divination",
          cost: [20, "pts"],
        },
        {
          what: "thaumaturgy",
          cost: [0, "pts"],
        },
        {
          what: "telepathy",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>