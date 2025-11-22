<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role command"></div> 
      <h2 class="unit__head-name">Esoterist</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">Anathemata Discipline</h3>
      <div>
        A Model with the Anathemata Discipline gains the following benefits:
        <ul class="unit__options__ul">
          <li class="unit__options__ul-li">The Fear (1) Special Rule.</li>
          <li class="unit__options__ul-li">The Void Darts Psychic Weapon.</li>
          <li class="unit__options__ul-li">
            If the Model has the <span class="bold">Traitor</span> Trait, it can
            use the Breach the Veil Psychic Power
          </li>
          <li class="unit__options__ul-li">
            If the Model has the <span class="bold">Loyalist</span> Trait, it
            can use the Seal the Veil Psychic Reaction.
          </li>
          
          <li class="unit__options__ul-li">The 'Anathemata' Trait.</li>
        </ul>
      </div>
    </div>
    <div class="unit-ability">
      <div class="unit-ability-weapon">
        <h3>Void Darts</h3>
        <!-- таблица для десктопа -->
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
              <td>18</td>
              <td>D6</td>
              <td>5</td>
              <td>4</td>
              <td>1</td>
              <td>Shred(5+), Force(D)</td>
              <td>Psychic</td>
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
            <div class="cell">18</div>
            <div class="cell">D6</div>
            <div class="cell">5</div>
            <div class="cell">4</div>
            <div class="cell">1</div>
            <div class="cell">
              <div class="first-letter">Psychic</div>
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
                <div>Shred(5+), Force(D)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="unit-ability-desc">
        <div class="bold unit-ability-desc__name">
          Breach the Veil (Psychic Power, Blessing)
        </div>
        <div>
          <span class="bold">Trigger:</span> The Active Player may choose to
          Manifest the Breach the Veil Psychic Power at the start of the
          Reserves Sub-Phase of their Movement Phase.
        </div>
        <div>
          <span class="bold">Focus:</span> The Focus of the Power must be a
          Model with the Anathemata Trait and under the Active Player's control.
        </div>
        <div>
          <span class="bold">Target:</span> This Psychic Power does not have a
          Target.
        </div>
        <div>
          <span class="bold">Duration:</span>If successfully Manifested, the
          effects of this Psychic Power last until the end of this Reserves
          Sub-Phase.
        </div>
        <div>
          <span class="bold">Process</span>
          <ul class="unit-ability-desc_ul">
            <li>
              Once the Focus has been decided, make a Manifestation Check.
            </li>
            <li>
              If the Manifestation Check is successful, the Active Player can
              select one Unit from a Daemonic Manifestation Detachment from the
              same Army as the Focus that is in Reserves. Reserve Rolls made for
              that Unit are automatically successful for the duration of this
              Psychic Power.
            </li>
          </ul>

          <div class="bold unit-ability-desc__name">
            Seal the Veil (Psychic Power, Curse)
          </div>
          <div>
            <span class="bold">Trigger:</span> The Reactive Player may choose to
            declare a Seal the Veil Psychic Reaction at the start of Step 3 of
            the Charge Procedure for a Charge declared by the Active Player for
            a Unit which includes any Models with the Malefic Sub-Type.
          </div>
          <div>
            <span class="bold">Cost:</span> The Reactive Player must spend 1
            point of their Reaction Allotment to declare a Seal the Veil Psychic
            Reaction, this cost paid as soon as the declaration is made.
          </div>
          <div>
            <span class="bold">Focus:</span> The Focus of this Psychic Reaction
            must be a Model with the Anathemata Trait and under the Reactive
            Player's Control, and must be a part of the Unit targeted by the
            Charge that triggers this Psychic Reaction.
          </div>
          <div>
            <span class="bold">Target:</span> The Target Unit must be the Unit
            that is making the Charge that triggered the Reaction.
          </div>
          <div>
            <span class="bold">Duration:</span> If successfully Manifested, the
            effects of this Psychic Reaction are resolved immediately.
          </div>

          <div>
            <span class="bold">Process</span>
            <ul class="unit-ability-desc_ul">
              <li>
                Once the Focus and Target Unit have been decided,
the Target Unit’s Controlling Player makes a
Resistance Check for that Unit.
              </li>
              <li>
                If the Resistance Check is failed, then the Target Unit
cannot make a Set-Up Move of more than 1", and
when a Charge Roll is made for that Unit in Step 5 of
the Charge Procedure, the highest Dice is discarded
instead of the lowest.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";
import { defineProps, ref, onMounted, onUnmounted, watch, computed } from "vue";
const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

watch(windowWidth, () => {
  isClassActive.value = isClassActive.value;
});
const stats = reactive({
  name: "Esoterist",
  stats: [7, 5, 5, 4, 4, 3, 5, 4, 7, 8, 10, 8, 2, "5+"],
  sergeant: "",
  Sstats: "",
  types: ["infantry", "command"],
  Stypes: [],
  base: 32,
  cost: 95,
  composition: [1],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["archaeotech pistol"],
    melee_weapons: ["force weapon", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    "anathemata discipline": "",
  },
  traits: ["[allegiance]", "[legiones astartes]", "psyker", "anathemata"],
  options: [
    {
      scentence:
        "This Model may have its bolt pistol exchanged for one item each:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },

    {
      scentence: "This Model may have:",
      variants: [{ what: "melta bombs", cost: [5, "pts"] }],
    },
  ],
});
</script>
<style>
.unit-ability {
  text-align: left;
  margin-left: inherit;
  margin-right: inherit;
}

.unit-ability-desc div {
  margin-top: 1rem;
}
.unit-ability-desc__name {
  background-color: var(--main-red-color);
  color: var(--main-light-color);
}
</style>