<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="recon role"></div>
      <h2 class="unit__head-name">Effrit Disruption Cadre</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "disruptor",
  stats: [7, 4, 5, 4, 4, 2, 4, 2, 8, 8, 7, 8, 3, "-"],
  sergeant: "principal",
  Sstats: [7, 4, 5, 4, 4, 2, 4, 2, 9, 8, 7, 8, 3, "-"],
  types: ["infantry", "skirmish"],
  Stypes: ["infantry", "sergeant", "skirmish"],
  base: 32,
  cost: 145,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike shotgun", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "hydra's wail": "",
    infiltrate: "(8)",
  },
  traits: ["[allegiance]", "Alpha Legion", "smokescreen"],
  options: [
    {
      scentence: "A Effrit Disruption Cadre may include:",
      variants: [
        {
          what: "Up to 5 additional Disruptors",
          cost: [25, "pts each"],
        },
      ],
    },
    {
      scentence:
        "The Principal in this Unit may have one item from one of the following:",
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
        "Any Model in this Unit may have its banestrike shotgun exchanged for one:",
      variants: [
        {
          what: "nemesis bolter",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have one:",
      variants: [
        {
          what: "power dagger",
          cost: [5, "pts each"],
        },
      ],
    },
    {
      scentence: "Every Model in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [25, "pts"] }],
    },
  ],
});
</script>