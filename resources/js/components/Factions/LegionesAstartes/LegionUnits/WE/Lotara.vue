<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div>
      <h2 class="unit__head-name">Lotara</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">Shadow of the Conqueror</h3>
      <p>
        If a Model with this Special Rule is included in the Primary Detachment
        of this Army and is on the Battlefield, in the Effects Sub-Phase of the
        Start Phase, the Controlling Player of the Model with this Special Rule
        can make an Intelligence Check for that Model. If that Check is
        successful, the Controlling Player can select one of the following
        options:
      </p>
      <ul class="unit-list">
        <li>
          <span class="bold">Coordinate: </span>Once during this Turn, before
          making a Reserves Test for a Unit in Aerial Reserves, the Controlling
          Player can modify the result of that Reserves Test by +1
        </li>
        <li>
          <span class="bold">Annihilate: </span>Once during their opponent's
          next Movement Phase, the Controlling Player can make the Guns of the
          Conqueror Advanced Reaction.
        </li>
      </ul>
      <div class="bold unit-ability-desc__name">Guns of the Conqueror Advanced Reaction</div>
      <div class="unit-ability-desc">
        <div>
          <span class="bold">Trigger:</span>
          The Reactive Player may declare a Guns of the Conqueror Advanced
          Reaction in Step-2 of the Move Sub-Phase process, if an enemy Unit
          ends a move within 24" and Line of Sight of any Model in a Unit under
          the Reactive Player's Control that includes a Model with this Special
          Rule.
        </div>
        <div>
          <span class="bold">Cost:</span> The Reactive Player must spend 3
          Points of their Reaction Allotment to declare a Guns of the Conqueror
          Advanced Reaction. If this Reaction is declared, the Unit that
          includes the Model with this Special Rule is considered to be the
          Reacting Unit.
        </div>
        <div>
          <span class="bold">Target:</span> The Target Unit is always the Unit
          whose Move triggered the Reaction.
        </div>
        <p>
          <span class="bold">Process:</span> Once the Guns of the Conqueror
          Advanced Reaction has been declared, the Reactive Player makes a
          Shooting Attack targeting the Target Unit, using the following
          profile. The Hit Test for this Shooting Attack is automatically
          unsuccessful.
        </p>
        <table class="profiles__weapon-table" v-if="windowWidth > 800">
          <thead>
            <tr>
              <th>R</th>
              <th>FP</th>
              <th>RS</th>
              <th>AP</th>
              <th>D</th>
              <th>Special Rules</th>
              <th>Traits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>24</td>
              <td>1</td>
              <td>10</td>
              <td>3</td>
              <td>3</td>
              <td>Breaching(5+), Barrage(2), Blast(7")</td>
              <td>Assault</td>
            </tr>
          </tbody>
        </table>
        <!-- таблица для мобилок -->

        <div v-if="windowWidth < 800">
          <div class="grid-table" :class="{ 'grid-table__one': isClassActive }">
            <!-- Первая строка -->
            <div class="grid-table__head cell">R</div>
            <div class="grid-table__head cell">FP</div>
            <div class="grid-table__head cell">RS</div>
            <div class="grid-table__head cell">AP</div>
            <div class="grid-table__head cell">D</div>
            <div class="grid-table__head cell">Traits</div>

            <!-- Вторая строка -->
            <div class="cell">24</div>
            <div class="cell">1</div>
            <div class="cell">10</div>
            <div class="cell">3</div>
            <div class="cell">3</div>
            <div class="cell">
              <div class="first-letter">Assault</div>
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
                <div>Breaching(5+), Barrage(2), Blast(7")</div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Once the Shooting Attack made as part of this Reaction has been
          completely resolved, including removing any Casualties, the Active
          Player must then completely resolve any remaining elements of the
          Target Unit's movement.
        </p>
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
  name: "Lotara",
  cost: 85,
  stats: [6, 3, 3, 3, 3, 2, 3, 2, 9, 9, 8, 8, 6, "5+"],
  base: 32,
  sergeant: "",
  Sstats: "",
  Dwargear: {
    ranged_weapons: ["fleet service pistol"],
    melee_weapons: ["the conqueror's bite"],
    wargear: [],
  },
  SR: {
    "shadow of the conqueror": "",
    "level-headed": "",
  },
  traits: ["traitor", "world eaters"],
  types: ["infatry", "unique", "sergeant", "specialist"],
  Stypes: [],
  composition: [1],
  twoProfiles: false,
  options: false,
});
</script>
