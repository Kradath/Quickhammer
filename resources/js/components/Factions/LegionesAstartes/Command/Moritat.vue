<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Moritat</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "moritat",
  stats: [12, 4, 6, 4, 4, 3, 5, 3, 8, 9, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "specialist", "antigrav"],
  Stypes: [],
  base: 32,
  cost: 95,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["overcharged volkite serpenta", "overcharged volkite serpenta"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades", 'rad grenades'],
  },
  SR: {
    "bulky": "(2)",
    "deep strike": "",
    "firestorm": "",
    "bitter duty": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence:
        "This Model may have both its overcharged volkite serpentas exchanged for two:",
      variants: [
        {
          what: "overcharged plasma pistol",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>