<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="command role"></div>
      <h2 class="unit__head-name">Alexis Polux</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">Gambit: Hammerblow</h3>
      <p>
        While a Model with this Special Rule is engaged in a Challenge, its
        Controlling Player can select this Gambit:
      </p>
      <p>
        While this Gambit is selected,
        this Model gains the Hammerblow Weapon Profile and may not choose to
        make attacks with any other Weapon in the Strike Step.
      </p>
      <div>
        <h4>Hammerblow</h4>
        <table class="profiles__weapon-table" v-if="windowWidth > 800">
          <thead>
            <tr>
              <th>IM</th>
              <th>AM</th>
              <th>SM</th>
              <th>AP</th>
              <th>D</th>
              <th>Special Rules</th>
              <th>Traits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>10</td>
              <td>2</td>
              <td>3</td>
              <td>Critical Hit(6+)</td>
              <td>Power</td>
            </tr>
          </tbody>
        </table>
        <!-- таблица для мобилок -->

        <div v-if="windowWidth < 800">
          <div class="grid-table" :class="{ 'grid-table__one': isClassActive }">
            <!-- Первая строка -->
            <div class="grid-table__head cell">IM</div>
            <div class="grid-table__head cell">AM</div>
            <div class="grid-table__head cell">SM</div>
            <div class="grid-table__head cell">AP</div>
            <div class="grid-table__head cell">D</div>
            <div class="grid-table__head cell">Traits</div>

            <!-- Вторая строка -->
            <div class="cell">1</div>
            <div class="cell">1</div>
            <div class="cell">10</div>
            <div class="cell">2</div>
            <div class="cell">3</div>
            <div class="cell">
              <div class="first-letter">Power</div>
            </div>
            <!-- Третья строка -->
            <div
              class="full-span-cell grid-table__head left"
              style="grid-column: span 6"
            >
              Special Rules
            </div>

            <!-- Четвертая строка -->
            <div class="full-span-cell end-cell" style="grid-column: span 6">
              <div class="comma wrap">
                <div>Critical Hit(6+)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  name: "Alexis Polux",
  composition: [1],
  cost: 185,
  base: 32,
  stats: [7, 6, 4, 4, 4, 3, 5, 3, 9, 9, 8, 8, 2, "4+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["solarite power gauntlet"],
    ranged_weapons: ["combi-melta"],
    wargear: ["frag grenades", "krak grenades", "vigil pattern storm shield"],
  },
  SR: {
    "officer of the line": "(2)",
    "deep strike": "",
    hammerblow: "",
    "void commander": "",
  },
  traits: ["loyalist", "imperial fists", "shield"],
  types: ["infantry", "unique", "command", "heavy"],
  Stypes: [],
  twoProfiles: false,
  options: false,
});
</script>