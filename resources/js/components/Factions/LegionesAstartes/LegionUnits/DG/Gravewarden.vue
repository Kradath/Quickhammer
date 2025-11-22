<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role ha"></div> 
      <h2 class="unit__head-name">Grave Warden Terminator Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Grave Warden Terminator",
  stats: [6, 4, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Chem-master",
  Sstats: [6, 4, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  types: ["infantry", "heavy"],
  Stypes: ["infantry", "sergeant", "heavy"],
  base: 40,
  cost: 225,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["assault grenade launcher"],
    melee_weapons: ["power fist"],
    wargear: [],
  },
  SR: {
    vanguard: "(3)",
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "death cloud": "",
  },
  traits: ["[allegiance]", "death guard"],
  options: [
    {
      scentence: "A Grave Warden Terminator Squad may include:",
      variants: [
        { what: "Up to 5 additional Grave Warden Terminators", cost: [40, "pts each"] },
      ],
    },
    {
      scentence:
        "The Chem-master in this Unit may have its assault grenade launcher exchanged for one of the following:",
      variants: [
        {
          what: "combi-bolter",
          cost: [0, "pts"],
        },
        {
          what: "combi-flamer",
          cost: [0, "pts"],
        },
        {
          what: "combi-melta",
          cost: [0, "pts"],
        },
        {
          what: "combi-plasma",
          cost: [0, "pts"],
        },
        {
          what: "combi-volkite",
          cost: [0, "pts"],
        },
        {
          what: "combi-grenade",
          cost: [0, "pts"],
        },
        {
          what: "combi-desintegrator",
          cost: [0, "pts"],
        },
        {
          what: "combi-grav",
          cost: [0, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "Any Model in this Unit may have its power fist exchanged for:",
      variants: [{ what: "chainfist", cost: [5, "pts each"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, one Grave Warden in this Unit may have its assault grenade launcher exchanged for one of the following:",
      variants: [
        {
          what: "heavy alchem flamer",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>
