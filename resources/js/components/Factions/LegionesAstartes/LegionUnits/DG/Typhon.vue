<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div> 
      <h2 class="unit__head-name">Calas Typhon</h2>
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
  name: "Calas Typhon",
  stats: [6, 6, 5, 4, 5, 5, 5, 4, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  base: 40,
  cost: 200,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["slaker"],
    melee_weapons: ["lakrimae"],
    wargear: [],
  },
  SR: {
    bulky: "(2)",
    "implacable advance": "",
    "slow and purposeful": "",
    "eternal warrior": "(1)",
    "death cloud":"",
    "witchblood":"",
  },
  traits: ["traitor", "death guard", "master of the legion", "psyker"],
  options: false
});
</script>
