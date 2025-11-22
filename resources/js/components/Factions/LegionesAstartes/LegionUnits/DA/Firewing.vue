<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">Firewing Enigmatus Cabal</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [3],
  cost: 90,
  base: 32,
  name: "firewing enigmatii",
  stats: [12, 5, 4, 4, 4, 2, 4, 3, 8, 8, 7, 7, 3, "-"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["calibanite charge-blade"],
    ranged_weapons: ["needle pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "outflank": "",
    "bulky": "(2)",
    "deep strike": "",
    "vanguard": "(2)",
    "marked for death": "(1)",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "dark angels", "smokescreen"],
  Stypes: [],
  types: ["infantry", "champion", "antigrav"],
  options: [
    {
      scentence: "One Model in this Unit may have one:",
      variants: [
        { what: "enigmatus missile launcher", cost: [15, "pts"] },
      ],
    },
    
  ],
});
</script>
