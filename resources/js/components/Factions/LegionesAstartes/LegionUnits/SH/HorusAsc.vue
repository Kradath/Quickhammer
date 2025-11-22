<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Horus Ascended</h2>
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
  name: "Horus Ascended",
  stats: [8, 9, 7, 8, 8, 8, 7, 7, 14, 12, 12, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["paragon", "unique"],
  Stypes: [],
  base: 50,
  cost: 850,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["the warmaster's talon", "worldbreaker"],
    melee_weapons: [],
    wargear: [],
  },
  SR: {
    
    bulky: "(6)",
    "deep strike": "",
    "feel no pain": "(5+)",
    "master of war": "",
    "the warmaster ascended": "",
    "eternal warrior": "(3)",
    fear: "(1)",
    "the spreading corruption": "",
  },
  traits: ["traitor", "sons of horus", "master of the legion"],
  options: false,
});
</script>
