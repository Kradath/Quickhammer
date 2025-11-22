<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Dark Emissary</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Dark Emissary",
  stats: [7, 5, 5, 4, 4, 4, 5, 4, 10, 10, 9, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 32,
  cost: 90,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["staff of dark authority"],
    wargear: [
      "frag grenades",
      "krak grenades",
      
    ],
  },
  SR: {
    "eyes of the warmaster": "",

  },
  traits: ["traitor", "sons of horus"],
  options: [
    
    {
      scentence:
        "This Model may have its bolt pistol axe exchanged for one of the following:",
      variants: [
    {
      what: 'plasma pistol',
      cost: [5, 'pts']
    },
    {
      what: 'hand flamer',
      cost: [5, 'pts']
    },
    {
      what: 'volkite serpenta',
      cost: [5, 'pts']
    },
  ],
    },
    
  ],
});
</script>