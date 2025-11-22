<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Salamanders Inductii Squad</h2>
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
  cost: 100,
  base: 32,
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 6, 6, 3, "-"],
  sergeant: "inductii Master",
  Sstats: [7, 5, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    inductii: "",
    vanguard: "(2)",
    "wargear of heroes": "",
  },
  twoProfiles: false,
  invisibleSergeant: true,
  traits: ["[allegiace]", "salamanders"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Salamanders Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
      ],
    },
    {
      scentence: "One Inductii in this Unit may be replaced with an:",
      variants: [{ what: "Inductii master", cost: [15, "pts"] }],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword and bolt pistol exchanged for one:",
      variants: [
        {
          what: "heavy chainsword",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Inductii in this Unit may have its chainsword exchanged for one of the following:",
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
        "For every ten Models in this Unit, one Inductii in this Unit may have its chainsword exchanged for one of the following:",
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
          what: "desintegrator blaster",
          cost: [10, "pts"],
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
      scentence:
        "The Inductii Master in this Unit may have its chainsword and/or bolt pistol exchanged for one of the following:",
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
        "The Inductii Master in this Unit may have its bolt pistol exchanged for one of the following:",
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
      scentence:
        "The Inductii Master in this Unit may have its bolt pistol and chainsword exchanged for one:",
      variants: [
        {
          what: "paired lightning claws",
          cost: [10, "pts"],
        },
      ],
    },

    {
      scentence: "The Inductii Master in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
  ],
});
</script>
