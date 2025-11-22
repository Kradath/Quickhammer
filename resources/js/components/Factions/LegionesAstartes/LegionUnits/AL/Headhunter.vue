<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="elite role"></div>
      <h2 class="unit__head-name">Headhunter Kill Team</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "headhunter",
  stats: [7, 4, 5, 4, 4, 1, 4, 1, 8, 8, 7, 7, 3, "-"],
  sergeant: "headhunter prime",
  Sstats: [7, 4, 5, 4, 4, 1, 4, 2, 9, 8, 7, 7, 3, "-"],
  types: ["infantry", "skirmish"],
  Stypes: ["infantry", "sergeant", "skirmish"],
  base: 32,
  cost: 125,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike combi-bolter", "bolt pistol"],
    melee_weapons: ["krak grenades", "power dagger"],
    wargear: ["frag grenades"],
  },
  SR: {
    precision: "(4+)",
    hatred: "(Command)",
    infiltrate: "(9)",
  },
  traits: ["[allegiance]", "Alpha Legion", "smokescreen"],
  options: [
    {
      scentence: "A Headhunter Kill Team may include:",
      variants: [
        {
          what: "Up to 5 additional Headhunters",
          cost: [20, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Headhunter Prime in this Unit may have its Power Dagger exchanged for one of the following:",
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
        "The Headhunter Prime in this Unit may have its bolt pistol exchange for one of the following:",
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
        {
          what: "inferno pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its banestrike combi-bolter exchanged for one of the following:",
      variants: [
        {
          what: "combi-bolter",
          cost: [0, "pts"],
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
      scentence:
        "For every five Models in this Unit, one Headhunter in this Unit may have its Banestrike combi-bolter exchanged for one of the following:",
      variants: [
        { what: "heavy bolter", cost: [5, "pts"] },
        { what: "multi-melta", cost: [20, "pts"] },
      ],
    },
    {
      scentence: "Every Model in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>