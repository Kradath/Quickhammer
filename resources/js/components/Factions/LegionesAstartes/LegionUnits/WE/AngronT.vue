<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role warlord"></div>
      <h2 class="unit__head-name">Angron Transfigured</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">Blades of the Red Angel</h3>
      <div>
        <div>
          <h4>Eviscerating Slashes</h4>
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
                <td>I</td>
                <td>A</td>
                <td>S</td>
                <td>2</td>
                <td>2</td>
                <td>Reaping Blow(2)</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <!-- таблица для мобилок -->

          <div v-if="windowWidth < 800">
            <div
              class="grid-table"
              :class="{ 'grid-table__one': isClassActive }"
            >
              <!-- Первая строка -->
              <div class="grid-table__head cell">IM</div>
              <div class="grid-table__head cell">AM</div>
              <div class="grid-table__head cell">SM</div>
              <div class="grid-table__head cell">AP</div>
              <div class="grid-table__head cell">D</div>
              <div class="grid-table__head cell">Traits</div>

              <!-- Вторая строка -->
              <div class="cell">I</div>
              <div class="cell">A</div>
              <div class="cell">S</div>
              <div class="cell">2</div>
              <div class="cell">2</div>
              <div class="cell">
                <div class="first-letter">-</div>
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
                  <div>Reaping Blow(2)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4>Crushing Blows</h4>
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
                <td>-2</td>
                <td>4</td>
                <td>+4</td>
                <td>2</td>
                <td>4</td>
                <td>Critical Hit(6+), Armourbane</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
          <!-- таблица для мобилок -->

          <div v-if="windowWidth < 800">
            <div
              class="grid-table"
              :class="{ 'grid-table__one': isClassActive }"
            >
              <!-- Первая строка -->
              <div class="grid-table__head cell">IM</div>
              <div class="grid-table__head cell">AM</div>
              <div class="grid-table__head cell">SM</div>
              <div class="grid-table__head cell">AP</div>
              <div class="grid-table__head cell">D</div>
              <div class="grid-table__head cell">Traits</div>

              <!-- Вторая строка -->
              <div class="cell">-2</div>
              <div class="cell">4</div>
              <div class="cell">+4</div>
              <div class="cell">2</div>
              <div class="cell">4</div>
              <div class="cell">
                <div class="first-letter">-</div>
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
                  <div>Critical Hit(6+), Armourbane</div>
                </div>
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
  name: "Angron Transfigured",
  cost: 600,
  stats: [14, 8, 6, 7, 7, 7, 7, 8, 12, 10, 12, 8, 2, "4+"],
  base: 60,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: [],
    melee_weapons: ["blades of the red angel"],
    wargear: [],
  },
  SR: {
    bulky: "(7)",
    "deep strike": "",
    "eternal warrior": "(2)",
    "fear": "(2)",
    "lord of corruption": "",
  },
  traits: ["traitor", "world eaters", "master of the legion"],
  types: ["paragon", "unique", "antigrav", "malefic"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
