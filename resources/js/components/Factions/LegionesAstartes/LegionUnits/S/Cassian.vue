<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role hc"></div>
      <h2 class="unit__head-name">Cassian Dracos Reborn</h2>
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
  name: "Cassian",
  cost: 220,
  stats: [6, 5, 5, 7, 7, 8, 3, 4, 12, 12, 6, 8, 2, "4+"],
  base: 60,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["forge-crafted heavy flamer","forge-crafted heavy flamer"],
    melee_weapons: ["paired gravis power fists"],
    wargear: [],
  },
  SR: {
    bulky: "(6)",
    explodes: "(5+)",
    "implacable advance": "",
    "battlesmith": "(1)",
    "drakenscale armour": "",
    "whispers of isstvan": "",
  },
  traits: ["loyalist", "salamanders", "smokecreen", "cybertheurgist"],
  types: ["walker", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
