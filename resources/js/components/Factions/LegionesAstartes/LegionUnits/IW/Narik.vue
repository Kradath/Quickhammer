<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Narik Dreygur</h2>
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
  name: "Narik Dreygur",
  composition: [1],
  cost: 115,
  base: 32,
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 9, 8, 8, 9, 2, "5+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ['graviton gauntlet'],
    ranged_weapons: ["bolt pistol"],
    wargear: [
      "cortex controller",
      "frag grenades",
      "krak grenades"
    ],
  },
  SR: {
    "battlesmith": "(1)",
    "feel no pain": "(5+)",
    "master of automata": ""
  },
  traits: ["loyalist", "iron warriors"],
  types: ["infantry","unique","command","heavy"],
  Stypes: [],
  twoProfiles: false,
  options: false
});
</script>