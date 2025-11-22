<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Shadrak Meduson</h2>
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
  name: "Shadrak Meduson",
  stats: [7, 5, 5, 4, 4, 4, 5, 4, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 32,
  cost: 175,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["storm's wrath"],
    melee_weapons: ["albian power gladius"],
    wargear: [
      "frag grenades",
      "krak grenades",
      "servo-arm",
      
    ],
  },
  SR: {
    battlesmith: "(1)",
  },
  traits: ["loyalist", "iron hands", "master of the legion"],
  options: false,
});
</script>