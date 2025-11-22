<template>
  <div class="unit-general">
    <!-- первая таблица для десктопа -->
    <table class="unit-general__table" v-if="windowWidth > 800">
      <thead>
        <tr>
          <th class="unit-general__table-tbody__name">Name</th>
          <th>M</th>
          <th>BS</th>
          <th class="vehicle-armour">Front</th>
          <th class="vehicle-armour">Side</th>
          <th class="vehicle-armour">Rear</th>
          <th>HP</th>
          <th>Transport Capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="unit-general__table-tbody__name first-letter">
            {{ stats.name }}
          </td>
          <td data-label="M">{{ stats.stats[0] }}</td>
          <td data-label="BS">{{ stats.stats[1] }}</td>
          <td data-label="Front">{{ stats.stats[2] }}</td>
          <td data-label="Side">{{ stats.stats[3] }}</td>
          <td data-label="Rear">{{ stats.stats[4] }}</td>
          <td data-label="HP">{{ stats.stats[5] }}</td>
          <td data-label="TC">{{ stats.stats[6] }}</td>
        </tr>
      </tbody>
    </table>

    <!-- тут вторая таблица для мобилок -->
    <div class="unit-vehicle__grid-table" v-if="windowWidth <= 800">
      <div class="row header">
        <div class="cell header-cell">Stat</div>
        <div class="cell header-cell first-letter">{{ stats.name }}</div>
      </div>
      <div class="row">
        <div class="cell label">M</div>
        <div class="cell">{{ stats.stats[0] }}</div>
      </div>
      <div class="row">
        <div class="cell label">BS</div>
        <div class="cell">{{ stats.stats[1] }}</div>
      </div>
      <div class="row">
        <div class="cell label vehicle-armour">Front</div>
        <div class="cell">{{ stats.stats[2] }}</div>
      </div>
      <div class="row">
        <div class="cell label vehicle-armour">Side</div>
        <div class="cell">{{ stats.stats[3] }}</div>
      </div>
      <div class="row">
        <div class="cell label vehicle-armour">Rear</div>
        <div class="cell">{{ stats.stats[4] }}</div>
      </div>
      <div class="row">
        <div class="cell label">HP</div>
        <div class="cell">{{ stats.stats[5] }}</div>
      </div>
      <div class="row">
        <div class="cell label">Transport Capacity</div>
        <div class="cell">{{ stats.stats[6] }}</div>
      </div>
    </div>

    <!-- состав юнита -->
    <div class="unit-general__composition first-letter">
      <p>
        <span class="first-letter unit-general__composition-words"
          >unit composition</span
        ><br />

        {{ stats.name }}: {{ stats.composition }}
      </p>
    </div>

    <!-- все комплектующие -->
    <div class="unit-general__rules">
      <!-- варгир -->
      <div class="unit-general__rules-wargear">
        <h4>Wargear</h4>
        <ul class="unit-general__rules__ul">
          
          <div v-for="(value, key) in stats.Dwargear.ranged_weapons" :key="key">
            <div v-if="isGunExists(key)" class="first-letter">
              <li v-for="(gun, idx) in value" :key="idx">
                {{ key }} mounted

                <span v-if="checkRule(weaponCounter(gun).weapon)">
                  <a
                    class="first-letter"
                    href="#"
                    @click.prevent="openRulesModal('RWmodal', $event)"
                  >
                    {{ weaponCounter(gun).weapon }}
                  </a>
                </span>
                <span v-else>
                  {{ gun }}
                </span>

                <!-- счетчик отдельно -->
                <span v-if="weaponCounter(gun).counter">{{
                  weaponCounter(gun).counter
                }}</span>
              </li>
            </div>
          </div>
          <!-- RWmodal -->
          <div
            class="modal-overlay"
            v-if="isRulesModalOpen['RWmodal']"
            @click.self="closeRulesModal('RWmodal')"
          >
            <div class="modal-content">
              <RangeWeaponTemplate
                :rweaponData="ranged_weapons[isRulesModalOpen['RWMname']]"
              />
              <button @click="closeRulesModal('RWmodal')" class="close-modal-button">Close</button>
            </div>
          </div>
          <!-- Wlist -->
          <li v-for="elem in stats.Dwargear.wargear" :key="elem.id">
            <a
              class="first-letter"
              v-if="checkRule(elem)"
              href=""
              @click.prevent="openRulesModal('Wmodal', $event)"
              >{{ elem }}</a
            >
            <div v-else class="first-letter">{{ elem }}</div>
          </li>
        </ul>

        <!-- Wmodal -->
        <div
          class="modal-overlay"
          v-if="isRulesModalOpen['Wmodal']"
          @click.self="closeRulesModal('Wmodal')"
        >
          <div class="modal-content">
            <WargearTemplate :wargear="wargear[isRulesModalOpen['RWMname']]" />
            <button @click="closeRulesModal('Wmodal')" class="close-modal-button">Close</button>
          </div>
        </div>
      </div>

      <!-- спецправила -->
      <div class="unit-general__rules-special">
        <h4>Special Rules</h4>
        <ul class="unit-general__rules__ul">
          <li v-for="(value, key) in stats.SR" :key="key.id">
            <a
              class="first-letter"
              v-if="checkRule(key)"
              href=""
              @click.prevent="openModal($event, 'SRmodal')"
              >{{ key }}{{ value }}</a
            >
            <div v-else class="first-letter">{{ key }}</div>
          </li>
        </ul>
      </div>

      <!-- SpecialRulesModal -->
      <div
        class="modal-overlay"
        v-if="SRmodal"
        @click.self="closeModal('SRmodal')"
      >
        <div class="modal-content">
          <SpecialRuleTemplate :special_rule="special_rules[SRname]" />
          <button @click="closeModal('SRmodal')" class="close-modal-button">Close</button>
        </div>
      </div>

      <!-- типы юнита -->
      <div class="unit-general__rules-types">
        <h4>Unit Types</h4>
        <ul class="unit-general__rules__ul first-letter">
          <li
            class="unit-general__rules-types__ul-type"
            v-for="(type, index) in stats.types"
                :key="type.id"
                :class="{ 'disc': index === 0 }"
          >
            <a
              class="first-letter"
              v-if="checkRule(type)"
              href=""
              @click.prevent="openRulesModal('UTmodal', $event)"
              >{{ type }}</a
            >
            <div v-else class="first-letter disc">{{ type }}</div>
          </li>
        </ul>

        <!-- UnitTypesModal -->
        <div
          class="modal-overlay"
          v-if="isRulesModalOpen['UTmodal']"
          @click.self="closeRulesModal('UTmodal')"
        >
          <div class="modal-content">
            <UnitTypeTemplate
              :unit_type="unit_types[isRulesModalOpen['RWMname']]"
            />
            <button @click="closeRulesModal('UTmodal')" class="close-modal-button">Close</button>
          </div>
        </div>
      </div>

      <!-- трейты юнита -->
      <div class="unit-general__rules-traits">
        <h4>Traits</h4>
        <ul class="unit-general__rules__ul">
          <li v-for="trait in stats.traits" :key="trait.id">
            <div class="first-letter">{{ trait }}</div>
          </li>
        </ul>
      </div>

      <div class="unit-general__rules-traits" v-if="stats.access != ''">
        <h4>Access Points</h4>
        <div>{{ stats.access }}</div>
      </div>

      <!-- options -->
      <div class="unit__options" v-if="stats.options != false">
        <h4>Options</h4>
        <ul class="unit__options__ul">
          <li
            class="unit__options__ul-li"
            v-for="option in stats.options"
            :key="option.id"
          >
            {{ option.scentence }}
            <table class="unit__options-table">
              <tbody>
                <tr
                  v-for="variant in option.variants"
                  :key="variant.id"
                  class="first-letter"
                >
                  <td>
                    {{ variant.where }}
                    <a
                      class="first-letter"
                      v-if="checkRule(variant.what)"
                      href=""
                      @click.prevent="
                        openRulesModal(searchModal(variant.what), $event)
                      "
                      >{{ variant.what }}</a
                    >
                    <div v-else class="first-letter">{{ variant.what }}</div>
                  </td>
                  <td>+ {{ variant.cost[0] }} {{ variant.cost[1] }}</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </div>
    <div> <Stp /> </div>
    <div> <Bb /> </div>
  </div>
</template>
<script setup>
import {
  onMounted,
  onUnmounted,
  defineProps,
  computed,
  ref,
  watch,
  reactive,
} from "vue";
import {
  special_rules,
  ranged_weapons,
  wargear,
  unit_types,
  melee_weapons,
} from "../../../stores/Arrays.js";
import Stp from "../ScrollToTop.vue";
import Bb from "../BackButton.vue";
import RangeWeaponTemplate from "../OneExemplarTemplates/RangeWeaponTemplate.vue";
import MeleeWeaponTemplate from "../OneExemplarTemplates/MeleeWeaponTemplate.vue";
import WargearTemplate from "../OneExemplarTemplates/WargearTemplate.vue";
import SpecialRuleTemplate from "../OneExemplarTemplates/SpecialRuleTemplate.vue";
import UnitTypeTemplate from "../OneExemplarTemplates/UnitTypeTemplate.vue";
const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);
const props = defineProps({
  stats: {
    type: Object,
    required: true,
  },
});
const SRmodal = ref(false);
const SRname = ref("");
function openModal(event) {
  SRmodal.value = true;
  SRname.value = event.target.textContent.replace(/\([\w+\d*]\W*\)/, "");
}
function closeModal(modalName) {
  SRmodal.value = false;
  SRname.value = "";
}

const isRulesModalOpen = reactive({
  RWmodal: false,
  MWmodal: false,
  Wmodal: false,
  UTmodal: false,
  RWMname: "",
});
function openRulesModal(modalName, event) {
  isRulesModalOpen[modalName] = true;
  isRulesModalOpen["RWMname"] = event.target.textContent.replace(/\([\w+\d*]\W*\)/, "");
}
//проверка по регулярке
function weaponCounter(str) {
  const regex = /\s\(\d\)/; 
  const match = str.match(regex); 

  if (match) {
    // отделяем часть строки если есть совпадение
    return {
      weapon: str.slice(0, -match[0].length), 
      counter: match[0], 
    };
  } else {
    return {
      weapon: str, 
      counter: "", 
    };
  }
}

function closeRulesModal(modalName) {
  isRulesModalOpen[modalName] = false;
  isRulesModalOpen["RWMname"] = "";
}

function checkRule(rule) {
  if (special_rules[rule]) {
    return special_rules[rule];
  } else if (ranged_weapons[rule]) {
    return ranged_weapons[rule];
  } else if (wargear[rule]) {
    return wargear[rule];
  } else if (melee_weapons[rule]) {
    return melee_weapons[rule];
  } else if (unit_types[rule]) {
    return unit_types[rule];
  } else {
    return false;
  }
}

function searchModal(rule) {
  if (ranged_weapons[rule]) {
    return "RWmodal";
  } else if (wargear[rule]) {
    return "Wmodal";
  } else if (melee_weapons[rule]) {
    return "MWmodal";
  } else {
    return false;
  }
}

function isGunExists(what) {
  const arr = props.stats.Dwargear.ranged_weapons[what];
  return Array.isArray(arr) && arr.length > 0;
}

function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
  isClassActive.value = isClassActive.value;
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

watch(windowWidth, () => {
  isClassActive.value = isClassActive.value;
});
</script>
<style>
.vehicle-armour {
  background-color: #d9ae8d;
}
</style>