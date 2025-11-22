<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Terror Squad</h2>
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
  cost: 115,
  base: 32,
  name: "Executioner",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 8, 8, 7, 7, 3, "-"],
  sergeant: "Headsman",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 3, 9, 8, 7, 7, 3, "-"],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    hatred: "(Infantry)",
    fear: "(1)",
    vanguard: "(2)",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "night lords"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "A Terror Squad may include:",
      variants: [
        { what: "Up to 10 additional Executioners", cost: [18, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "chainblade",
          cost: [5, "pts"],
        },
        {
          what: "bolter",
          cost: [0, "pts"],
        },
        {
          what: "volkite charger",
          cost: [2, "pts"],
        },
        {
          what: "rotor cannon",
          cost: [5, "pts"],
        },

        {
          what: "flamer",
          cost: [5, "pts"],
        },
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "chainglaive",
          cost: [5, "pts"],
        },
      ],
    },
    

    {
      scentence:
        "The Headsman in this Unit may have its chainsword exchanged for one:",
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
        "The Headsman in this Unit may have its bolt pistol exchanged for one:",
      variants: [
        {
          what: "desintegrator pistol",
          cost: [10, "pts"],
        },
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
      scentence: "One Executioner in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },

    {
      scentence: "Any model in this Unit with a bolter may have one of the following:",
      variants: [
        { what: "bayonet", cost: [1, "pts each"] },
        { what: "chain bayonet", cost: [2, "pts each"] },
      ],
    },
  ],
});
</script>
