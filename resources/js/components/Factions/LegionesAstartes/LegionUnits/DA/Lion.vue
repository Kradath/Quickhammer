<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Lion El'Jonson</h2>
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
  name: "Lion El'Jonson",
  cost: 460,
  stats: [8, 8, 6, 7, 6, 6, 7, 7, 12, 10, 10, 10, 2, "4+"],
  base: 40,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["the fusil actianeus"],
    melee_weapons: ["the lion sword"],
    wargear: ["frag grenades", "krak grenades","stasis grenades"],
  },
  SR: {
    "sire of the dark angels": "",
    bulky: "(4)",
    "the lion's choler": "",
    "eternal warrior": "(2)",
  },
  traits: ["loyalist", "dark angels", "master of the legion"],
  types: ["paragon", "unique"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: [
    {
      scentence: "This Model may have its The Lion's Sword exhcanged for:",
      variants: [{ what: "the wolf blade", cost: [0, "pts each"] }],
    },
  ],
});
</script>
