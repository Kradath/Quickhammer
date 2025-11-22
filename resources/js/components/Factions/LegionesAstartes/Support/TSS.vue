<template>
  <main class="container center unit">
   

    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div> 
      <h2 class="unit__head-name">Tactical Support Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "legionary",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 7, 7, 3, "-"],
  sergeant: "sergeant",
  Sstats: [7, 4, 4, 4, 4, 1, 4, 1, 8, 7, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  base: 32,
  cost: 40,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    none: "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Legion Tactical Squad may include:",
      variants: [
        { what: "Up to 5 additional Legionaries", cost: [8, "pts each"] },
      ],
    },
    {
      scentence: "Every Model in this Unit must have one of the following (every Model in this Unit must have the same item selected for it):",
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
    {
      scentence:
        "The Sergeant in this Unit may have one of the following :",
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
      scentence: "The Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence: "One Legionary in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Legionaries in this Unit may each have one item for one of the following:",
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
  ],
});
</script>