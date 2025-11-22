<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div>
      <h2 class="unit__head-name">Iron Havocs</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Iron Havoc",
  composition: [4],
  cost: 135,
  base: 32,
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 7, 7, 3, "-"],
  sergeant: "Iron Havoc Sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 7, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: [],
    ranged_weapons: ["shrapnel cannon", "bolt pistol"],
    wargear: ["krak grenades", "frag grenades"],
  },
  SR: {
    "support unit": "(1)",
    "ferrum occularis": "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "iron warriors"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  options: [
    {
      scentence: "A Iron Havocs may include:",
      variants: [
        { what: "Up to 5 additional Iron Havocs", cost: [25, "pts each"] },
      ],
    },
    {
      scentence:
        "The Iron Havoc Sergeant in this Unit may have one of the following:",
      variants: [
        {
          what: "chainsword",
          cost: [0, "pts"],
        },
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "charnabal sabre",
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
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "lightning claw",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence: "One Iron Havoc in this Unit may have one:",
      variants: [
        {
          what: "legion vexilla",
          cost: [10, "pts"],
        },
      ],
    },

    {
      scentence:
        "Up to two Iron Havocs in this Unit may each have one of the following:",
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
        "Every Model in this Unit may have its shrapnel cannon replaced with one of the following (every Model in this Unit must have the same option selected for it):",
      variants: [
        { what: "autocannon", cost: [10, "pts"] },
        { what: "lascannon", cost: [15, "pts"] },
        { what: "missile launcher", cost: [5, "pts"] },
      ],
    },
  ],
});
</script>