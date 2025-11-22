<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Pyroclast Squad</h2>
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
  cost: 175,
  base: 32,
  name: "Pyroclast",
  stats: [7, 4, 4, 4, 4, 2, 4, 1, 8, 8, 8, 8, 2, "6+"],
  sergeant: "Pyroclast warden",
  Sstats: [7, 4, 4, 4, 4, 2, 4, 2, 9, 8, 8, 8, 2, "6+"],
  Dwargear: {
    melee_weapons: [""],
    ranged_weapons: ["pyroclast flame projector", "bolt pistol"],
    wargear: ["drakenscale", "melta bombs", "frag grenades", "krak grenades"],
  },
  SR: {
    "implacable advance": "",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "salamanders"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Pyroclast Squad may include:",
      variants: [
        { what: "Up to 5 additional Pyroclasts", cost: [30, "pts each"] },
      ],
    },

    {
      scentence:
        "The Pyroclast Warden in this Unit may have one of the following:",
      variants: [
        {
          what: "thunder hammer",
          cost: [25, "pts"],
        },
        {
          what: "power fist",
          cost: [20, "pts"],
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
      ],
    },
  ],
});
</script>
