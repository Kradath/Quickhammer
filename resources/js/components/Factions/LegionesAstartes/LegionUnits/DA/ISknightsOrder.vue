<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role elite"></div>
      <h2 class="unit__head-name">
        Inner Circle Knights Cenomium - Order of The Broken Claws
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
  composition: [4],
  cost: 285,
  base: 40,
  name: "Order Cenobite",
  stats: [6, 5, 4, 4, 5, 2, 4, 3, 8, 8, 7, 7, 2, "4+"],
  sergeant: "Order Preceptor",
  Sstats: [6, 6, 4, 4, 5, 2, 4, 3, 9, 8, 7, 7, 2, "4+"],
  Dwargear: {
    melee_weapons: ["terranic greatsword"],
    ranged_weapons: ["plasma caster"],
    wargear: [],
  },
  DSwargear: {
    ranged_weapons: ["plasma caster", "grenade harness"],
    melee_weapons: ["terranic greatsword"],
    wargear: [],
  },

  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "order of the broken claws": "",
  },

  traits: ["[allegiance]", "dark angels"],

  Stypes: ["infantry", "sergeant", "heavy"],
  types: ["infantry", "heavy"],

  twoProfiles: true,

  options: [
    {
      scentence: "Inner Circle Knights Cenomium may include:",
      variants: [
        {
          what: "Up to 5 additional Order Cenobites",
          cost: [50, "pts each"],
        },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its Terranic greatsword exchanged for one:",
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
