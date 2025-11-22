<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">Ultramarines Inductii Squad</h2>
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
  cost: 90,
  base: 32,
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 7, 6, 6, 3, "-"],
  sergeant: "evocatus intendant",
  Sstats: [7, 4, 5, 4, 4, 1, 4, 2, 7, 7, 6, 6, 3, "-"],
  Dwargear: {
    melee_weapons: [],
    ranged_weapons: ["bolter", "bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    inductii: "",
    line: "(1)",
    "certainty and resolve": "",
  },
  twoProfiles: false,
  invisibleSergeant: true,
  traits: ["[allegiace]", "ultramarines"],
  Stypes: ["infantry", "sergeant"],
  types: ["infantry"],
  options: [
    {
      scentence: "One Inductii in this Unit may be replaced with an:",
      variants: [{ what: "Evocatus Intendant", cost: [15, "pts"] }],
    },
    {
      scentence:
        "Up to two Inductii in this Unit may each have their bolter exchanged for one  of the following:",
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
        "Any Model in this Unit with a bolter may have one of the following selected for it:",
      variants: [
        { what: "bayonet", cost: [1, "pts each"] },
        { what: "chain bayonet", cost: [2, "pts each"] },
      ],
    },
    {
      scentence:
        "The Evocatus Intendant in this Unit may have its bolter and/or bolt pistol exchanged for one item each of the following:",
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
        "The Evocatus Intendant in this Unit may have its bolt pistol exchanged for one:",
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
        "The Evocatus Intendant in this Unit may have its bolter exchanged for one:",
      variants: [
        {
          what: "combi-bolter",
          cost: [5, "pts"],
        },
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
      scentence: "The Evocatus Intendant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
  ],
});
</script>
