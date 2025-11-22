<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Camba Diaz</h2>
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
  name: "Camba Diaz",
  composition: [1],
  cost: 120,
  base: 32,
  stats: [7, 6, 5, 4, 4, 3, 5, 3, 9, 8, 8, 8, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["durenda"],
    ranged_weapons: ["bolt pistol"],
    wargear: [
      "frag grenades",
      "krak grenades",
    ],
  },
  SR: {
    "officer of the line": "(2)",
    "the line unbroken": "",
  },
  traits: ["loyalist", "imperial fists", "master of the legion"],
  types: ["infantry", "command", "unique"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>