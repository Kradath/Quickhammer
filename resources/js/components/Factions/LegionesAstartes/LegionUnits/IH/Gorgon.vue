<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div>
      <h2 class="unit__head-name">Gorgon Terminator Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Gorgon Terminator",
  stats: [7, 4, 4, 4, 5, 2, 4, 3, 8, 7, 9, 7, 2, "5+"],
  sergeant: "Gorgon Hammerbearer",
  Sstats: [7, 4, 4, 4, 5, 2, 4, 3, 8, 8, 9, 8, 2, "5+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 40,
  cost: 200,
  composition: [4],
  twoProfiles: true,
  Dwargear: {
    ranged_weapons: ["combi-bolter"],
    melee_weapons: ["artificer power axe"],
    wargear: ["gorgon pattern terminator armour"],
  },
  DSwargear: {
    ranged_weapons: ["combi-bolter", "grenade harness"],
    melee_weapons: ["thunder hammer"],
    wargear: ["gorgon pattern terminator armour"],
  },
  SR: {
    vanguard: "(3)",
    bulky: "(2)",
    "implacable advance": "",
    "feel no pain": "(5+)",
  },
  traits: ["[allegiace]", "iron hands"],
  options: [
    {
      scentence: "A Gorgon Terminator Squad may include:",
      variants: [
        {
          what: "Up to 5 additional Gorgon Terminators",
          cost: [35, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "combi-flamer",
          cost: [10, "pts"],
        },
        {
          what: "combi-melta",
          cost: [10, "pts"],
        },
        {
          what: "combi-plasma",
          cost: [10, "pts"],
        },
        {
          what: "combi-volkite",
          cost: [10, "pts"],
        },
        {
          what: "combi-grenade",
          cost: [10, "pts"],
        },
        {
          what: "combi-desintegrator",
          cost: [10, "pts"],
        },
        {
          what: "combi-grav",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its artificer power axe exchanged for one of the following:",
      variants: [
        {
          what: "lightning claw",
          cost: [5, "pts"],
        },
        {
          what: "chainfist",
          cost: [10, "pts"],
        },

        {
          what: "power fist",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its comb-bolter and artificer power axe exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence: "The Cataphractii Terminator in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "For every tree Models in this Unit, one Gorgon Terminator in this Unit may have its combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "heavy flamer",
          cost: [5, "pts"],
        },
        {
          what: "graviton gun",
          cost: [10, "pts"],
        },
        {
          what: "graviton shredder",
          cost: [15, "pts"],
        },
        {
          what: "reaper autocannon",
          cost: [15, "pts"],
        },

        {
          what: "plasma blaster",
          cost: [10, "pts"],
        },
      ],
    },
  ],
});
</script>
