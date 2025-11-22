<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Iron Father</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";
const windowWidth = ref(window.innerWidth);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
const stats = reactive({
  name: "Iron Father",
  stats: [6, 6, 5, 4, 5, 5, 5, 5, 10, 9, 9, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "heavy"],
  Stypes: [],
  base: 40,
  cost: 175,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["volkite charger"],
    melee_weapons: ["artificer power axe"],
    wargear: ["servo-arm", "augury scanner", "cortex controller"],
  },
  SR: {
    bulky: "(2)",
    battlesmith: "(2)",
    "feel no pain": "(5+)",
    "implacable advance": "",
    "slow and purposeful": "",
    "lord of automata": "",
  },
  traits: ["[allegiance]", "iron hands", "master of the legion"],
  options: [
    {
      scentence:
        "This Model may have its volkite charger exchanged for one of the following:",
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
        "This Model may have its artificer power axe exchanged for one of the following:",
      variants: [
        {
          what: "paragon blade",
          cost: [15, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have one:",
      variants: [{ what: "cyber-familiar", cost: [10, "pts"] }],
    },
  ],
});
</script>