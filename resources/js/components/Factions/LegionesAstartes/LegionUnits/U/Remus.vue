<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Remus Ventanus</h2>
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
  name: "Remus Ventanus",
  composition: [1],
  cost: 175,
  base: 32,
  stats: [7, 5, 5, 4, 4, 4, 5, 3, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["phaeton"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["icon of calth","vox-interlink", "frag grenades", "krak grenades", "melta bombs"],
  },
  SR: {
    "officer of the line": "(2)",
  },
  traits: ["loyalist", "ultramarines"],
  types: ["infantry", "unique", "command"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>