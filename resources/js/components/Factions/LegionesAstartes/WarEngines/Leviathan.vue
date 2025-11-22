<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role we"></div> 
      <h2 class="unit__head-name">Leviathan Dreadnought</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "leviathan dreadnought",
  stats: [6, 4, 4, 8, 8, 7, 4, 4, 12, 10, 7, 5, 2, '5+'],
  sergeant: "",
  Sstats: [],
  types: ["walker", "heavy"],
  Stypes: [],
  base: 80,
  cost: 220,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: [
      "twin heavy flamer",
      "twin heavy flamer",
    ],
  },
  SR: {
    bulky: "(7)",
    explodes: "(5+)",
    "implacable advance": "",
  },
  traits: ["[allegiance]", "[legiones astartes]", "smokescreen"],
  options: [
    {
      scentence:
        "This Model must have two of the following options selected for it (or one paired option):",
      variants: [
        {
          what: "leviathan siege claw",
          and: "meltagun",
          cost: [0, "pts each"],
        },
        {
          what: "leviathan siege drill",
          and: "meltagun",
          cost: [5, "pts each"],
        },
        { what: "grav-flux bombard", cost: [10, "pts each"] },
        { what: "leviathan storm cannon", cost: [15, "pts each"] },
        { what: "cyclonic melta lance", cost: [20, "pts each"] },
        {
          what: "paired leviathan siege claws",
          and: "two meltaguns",
          cost: [5, "pts"],
        },
        {
          what: "paired leviathan siege drills",
          and: "two meltaguns",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence: "Both of this Model's heavy flamers may be exchanged for two:",
      variants: [{ what: "volkite caliver", cost: [15, "pts"] }],
    },
    {
      scentence: "This Model may have:",
      variants: [{ what: "phosphex discharger", cost: [20, "pts"] }],
    },
  ],
});
</script>