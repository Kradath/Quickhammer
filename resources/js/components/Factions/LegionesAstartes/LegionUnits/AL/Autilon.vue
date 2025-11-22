<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Autilon Skorr</h2>
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
  name: "Autilon Skorr",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 9, 8, 8, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "unique", "command"],
  Stypes: [],
  base: 32,
  cost: 135,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["rime-shard", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    
    "consul-delegatus": "",
  },
  traits: ["Traitor", "alpha legion", "master of the legion"],
  options: false
});
</script>