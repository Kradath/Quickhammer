<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div>
      <h2 class="unit__head-name">Augur Command and Control Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Augur Command and Control Legionary",
  stats: [7, 4, 4, 4, 4, 2, 4, 2, 8, 8, 7, 8, 3, "-"],
  sergeant: "",
  Sstats: [],
  types: ["infantry"],
  Stypes: [],
  base: 32,
  cost: 80,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "support unit": "(2)",
    "battlefield coordinators": "",
  },
  traits: ["[allegiance]", "[legiones astartes]", "smokescreen"],
  options: [
    {
      scentence:
        "One Model in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "meltagun",
          cost: [15, "pts"],
        },
        {
          what: "plasma gun",
          cost: [10, "pts"],
        },
        {
          what: "volkite charger",
          cost: [5, "pts"],
        },
        {
          what: "volkite caliver",
          cost: [10, "pts"],
        },
        {
          what: "rotor cannon",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>