<template>
  <div class="profiles__weapon">
    <h3 v-if="withoutName==false" :id="mweaponData.id" class="profiles-name">
      {{ mweaponData.name }}
    </h3>
     <p v-else :id="mweaponData.id" class="bold first-letter">
      {{ mweaponData.name }}
    </p>
    <!-- таблица для десктопа -->
    <table class="profiles__weapon-table" v-if="windowWidth > 800">
      <thead>
        <tr>
          <th class="small-cell">IM</th>
          <th class="small-cell">AM</th>
          <th class="small-cell">SM</th>
          <th class="small-cell">AP</th>
          <th class="small-cell">D</th>
          <th>Special Rules</th>
          <th class="medium-cell">Traits</th>
          <!-- <th>Faction</th>
          <th>Subfaction</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="first-letter">{{ mweaponData.init_mod }}</td>
          <td class="first-letter">{{ mweaponData.attack_mod }}</td>
          <td class="first-letter">{{ mweaponData.strength }}</td>
          <td>{{ mweaponData.armor_penetration }}</td>
          <td>{{ mweaponData.damage }}</td>
          <td>
            <div class="comma wrap">
              <div
                v-for="(value, key, index) in mweaponData.specail_rules"
                :key="key"
              >
                <a
                  class="first-letter SP"
                  href=""
                  @click.prevent="openModal($event, 'SRmodal')"
                >
                  {{ key }}{{ value }}
                </a>
                <span
                  v-if="
                    index !== Object.keys(mweaponData.specail_rules).length - 1
                  "
                  >,&nbsp;
                </span>
              </div>
            </div>
          </td>
          <td>
            <div
             class="first-letter" 
            >
              {{ mweaponData.traits }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="windowWidth < 800">
      <div class="grid-table first-letter">
        <!-- Первая строка -->
        <div class="grid-table__head cell">I</div>
        <div class="grid-table__head cell">A</div>
        <div class="grid-table__head cell">SM</div>
        <div class="grid-table__head cell">AP</div>
        <div class="grid-table__head cell">D</div>
        <div class="grid-table__head cell">Traits</div>

        <!-- Вторая строка -->

        <div class="cell">{{ mweaponData.init_mod }}</div>
        <div class="cell">{{ mweaponData.attack_mod }}</div>
        <div class="cell">{{ mweaponData.strength }}</div>
        <div class="cell">{{ mweaponData.armor_penetration }}</div>
        <div class="cell">{{ mweaponData.damage }}</div>
        <div class="cell">
          <div >
            {{ mweaponData.traits }}
          </div>
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
            <div
              v-for="(value, key, index) in mweaponData.specail_rules"
              :key="key"
            >
              <a
                class="first-letter spacing"
                href=""
                @click.prevent="openModal($event, 'SRmodal')"
              >
                {{ key }}{{ value }}
              </a>
              <span
                v-if="
                  index !== Object.keys(mweaponData.specail_rules).length - 1
                "
                >,&nbsp;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- модалка -->
    <div
      class="modal-overlay"
      v-if="SRmodal"
      @click.self="closeModal('SRmodal')"
    >
      <div class="modal-content">
        <button
            @click="closeModal('SRmodal')"
            class="close-modal-button-3"
          ></button>
        <h2 class="modal-content__h2 first-letter">
          {{ SRname }} {{ special_rules[SRname]["mod"] }}
        </h2>
        <p class="bold">{{ special_rules[SRname]["brief"] }}</p>
        
        <div v-html="special_rules[SRname]['text']"></div>
        <button @click="closeModal('SRmodal')" class="close-modal-button">Close</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onMounted, onUnmounted, watch, computed } from "vue";
import { special_rules } from "../../../stores/Arrays";
const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);

const SRmodal = ref(false);
const SRname = ref("");

function openModal(event) {
  SRmodal.value = true;
  SRname.value = event.target.textContent.replace(/\(\w+\W*\)/, "");
}
function closeModal(modalName) {
  SRmodal.value = false;
  SRname.value = "";
}
const props = defineProps({
  mweaponData: {
    type: Object,
    required: true,
  },
  withoutName: {
    type:Boolean,
    required: false
  }
});

function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

function checkRule(rule) {
  return special_rules[rule];
}
</script>
