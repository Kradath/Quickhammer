<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role we"></div> 
      <h2 class="unit__head-name">Saturnine Dreadnought</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "saturnine dreadnought",
  stats: [6, 4, 4, 8, 8, 8, 3, 2, 12, 10, 7, 5, 2, '4+'],
  sergeant: "",
  Sstats: [],
  types: ["walker", "heavy"],
  Stypes: [],
  base: 100,
  cost: 340,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: [
      "desintegrator cannon",
      "heavy plasma bombard",
      "photonic incinerator",
      "photonic incinerator",
    ],
    wargear: ["thermal diffraction field"],
  },
  SR: {
    bulky: "(8)",
    explodes: "(4+)",
  },
  traits: ["[allegiance]", "[legiones astartes]", "smokescreen"],
  options: [
    {
      scentence:
        "This Model may have its heavy plasma bombard exchanged for one of the following:",
      variants: [
        { what: "desintegrator cannon", cost: [10, "pts"] },
        { what: "inversion beamer", cost: [10, "pts"] },
        { what: "graviton pulveriser", cost: [10, "pts"] },
      ],
    },
    {
      scentence:
        "This Model may have its disintegrator cannon exchanged for one of the following:",
      variants: [
        { what: "heavy plasma bombard", cost: [0, "pts"] },
        { what: "inversion beamer", cost: [0, "pts"] },
        { what: "graviton pulveriser", cost: [0, "pts"] },
      ],
    },
    {
      scentence:
        "Both of this Model's photonic incinerators may be exchanged for one of the following pare of weapons:",
      variants: [
        { what: "concussive resonator", cost: [10, "pts"] },
        { what: "heavy particle shredder", cost: [10, "pts"] },
      ],
    },
  ],
});
</script>