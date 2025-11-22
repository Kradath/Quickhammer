<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Garvel Loken</h2>
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
  name: "Garvel Loken",
  stats: [7, 6, 5, 4, 4, 4, 5, 5, 10, 9, 9, 9, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 32,
  cost: 175,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["paragon blade"],
    wargear: [
      "frag grenades",
      "krak grenades",
    ],
  },
  SR: {
    hatred:"(Traitor)",
    "born survivor":""
  },
  traits: ["loyalist", "sons of horus", "master of the legion"],
  options: false,
});
</script>