<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Red Hand Destroyer Mortalis Squad</h2>
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
  cost: 85,
  base: 32,
  name: "ravager",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 8, 7, 7, 3, "-"],
  sergeant: "blood bonded",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 3, 8, 8, 7, 7, 3, "-"],
  Dwargear: {
    ranged_weapons: ["bolt pistol", "bolt pistol"],
    melee_weapons: ["chainsword"],
    wargear: ["rad grenades", "frag grenades", "krak grenades"],
  },
  SR: {
    firestorm: "",
    "bearers of the blood hand": "",
    "bitter duty": "",
  },
  traits: ["[allegiance]", "world eaters"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  twoProfiles: false,
  options: [
    {
      scentence: "A Red Hand Destroyer Mortalis Squad may include:",
      variants: [
        { what: "Up to 10 additional Ravagers", cost: [15, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword exchanged for one:",
      variants: [
        {
          what: "barb-hook lash",
          cost: [10, "pts"],
        },
        {
          what: "paired falax blades",
          cost: [10, "pts"],
        },
        {
          what: "excoriator chainaxe",
          cost: [10, "pts"],
        },
        {
          what: "meteor hammer",
          cost: [10, "pts"],
        },
        ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Ravager may have one bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "destroyer missile launcher",
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
        "The Blood Bonded in this Unit may have its chainsword exchanged for one of the following:",
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
      scentence:
        "The Blood Bonded in this Unit may have any of the following items:",
      variants: [
        {
          what: "phosphex bombs",
          cost: [10, "pts"],
        },
        {
          what: "melta bombs",
          cost: [10, "pts"],
        },
        
      ],
    },
  ],
});
</script>