<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Invictarus Suzerain Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Suzerain",
  composition: [5],
  cost: 175,
  base: 32,
  stats: [7, 5, 4, 4, 4, 2, 4, 3, 9, 9, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["legatine axe"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["krak grenades", "frag grenades", "argyrum pattern boarding shield"],
  },
  SR: {
    "lords of ultramar": "",
  },
  twoProfiles: false,
  traits: ["[allegiance]", "ultramarines","shield"],
  types: ["infantry", "heavy"],
  Stypes: [],
  options: [
    {
      scentence: "A Invictarus Suzerain Squad may include:",
      variants: [
        { what: "Up to 5 additional Suzerains", cost: [30, "pts each"] },
      ],
    },
    
    {
      scentence:
        "For every five Models in this Unit, up to two Models may each have their bolt pistol exchanged for one:",
      variants: [
        {
          what: "plasma pistol",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Legatine axe exchanged for one:",
      variants: [
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
      ],
    },
    
  ],
});
</script>