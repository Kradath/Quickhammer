<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Maloghurst The Twisted</h2>
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
  name: "Maloghurst The Twisted",
  stats: [7, 5, 5, 4, 4, 4, 5, 4, 10, 9, 9, 10, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 32,
  cost: 140,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["banestrike bolter", "bolt pistol"],
    melee_weapons: ["power sword"],
    wargear: [
      "frag grenades",
      "krak grenades",
      "icon of the warmaster"
    ],
  },
  SR: {
    "slow and purposeful": "",
    "broken in body": ""
  },
  traits: ["traitor", "sons of horus"],
  options: false,
});
</script>