<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Mortarion</h2>
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
  name: "Mortarion",
  stats: [8, 7, 6, 7, 7, 7, 6, 6, 12, 10, 10, 10, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["paragon", "unique"],
  Stypes: [],
  base: 40,
  cost: 425,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["the lantern"],
    melee_weapons: ["silince"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    "sire of the death guard": "",

    bulky: "(5)",
    fear: "(1)",

    "eternal warrior": "(3)",
    "death cloud": "",
    "shadow of the reaper": "",
    "preternatural resilience": "",
  },
  traits: ["traitor", "death guard", "master of the legion"],
  options: false,
});
</script>
