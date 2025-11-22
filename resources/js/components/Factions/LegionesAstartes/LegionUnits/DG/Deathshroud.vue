<template>
  <main class="container center unit">


    <!-- голова -->
    <div class="unit__head">
      <div class="role retune"></div> 
      <h2 class="unit__head-name">
        Deathshroud Terminator Squad
      </h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "Deathshroud Terminator",
  stats: [7, 5, 4, 4, 5, 2, 4, 3, 10, 9, 7, 7, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry"],
  Stypes: [],
  base: 40,
  cost: 100,
  composition: [2],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["alchem caster"],
    melee_weapons: ["power scythe"],
    wargear: [],
  },
  SR: {
    "eternal warrior": "(1)",
    bulky: "(2)",
    "implacable advance": "",
  },
  traits: ["[allegiance]", "death guard"],
  options: [
    {
      scentence: "A Deathshroud Terminator Squad may include:",
      variants: [
        { what: "Up to 8 additional Deathshroud Terminators", cost: [45, "pts each"] },
      ],
    },
    {
      scentence: "Any Model in this Unit may have one of each of the following selected for it:",
      variants: [{ what: "grenade harness", cost: [5, "pts"] },
      { what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>