<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="hc role"></div>
      <h2 class="unit__head-name">Armillus Dynat</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">The Prince And The Prophet</h3>
      <div>
        <div>
          <h4>The Prince</h4>
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
                <td>3</td>
                <td>1</td>
                <td>Breaching(5+), Thunderstrike</td>
                <td>Power</td>
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
              <div class="cell">3</div>
              <div class="cell">1</div>
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
                  <div>Breaching(5+), Thunderstrike</div>
                </div>
              </div>
            </div>
          </div>
          <p class="bold">Thunderstrike</p>
          <p>
            If three or more Hit Tests made for a Weapon with this Special Rule
            are successful, create a new Strike Group of one attack using this
            Weapon's <span class="bold">The Prophet</span> profile. This Strike
            Group is resolved during the current Initiative Step.
          </p>
        </div>
        <div>
          <h4>The Prophet</h4>
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
                <td>-1</td>
                <td>+3</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
                <td>Power</td>
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
              <div class="cell">-1</div>
              <div class="cell">+3</div>
              <div class="cell">2</div>
              <div class="cell">2</div>
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
                  <div>-</div>
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
  name: "Armillus Dynat",
  stats: [7, 6, 5, 4, 4, 4, 5, 5, 10, 9, 8, 8, 2, "4+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command", "unique"],
  Stypes: [],
  base: 32,
  cost: 185,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["the prince and the prophet"],
    wargear: [
      "frag grenades",
      "krak grenades",
      "venom spheres",
      "phosphex bombs",
    ],
  },
  SR: {
    harrowmaster: "",
  },
  traits: ["[allegiance]", "alpha legion", "master of the legion"],
  options: false,
});
</script>