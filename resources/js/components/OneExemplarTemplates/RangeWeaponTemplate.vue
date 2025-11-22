<template>
  <div class="">

    <h3 v-if="withoutName==false" :id="rweaponData.id" class="profiles-name">
      {{ rweaponData.name }}
    </h3>
    <p v-else :id="rweaponData.id" class="bold first-letter">
      {{ rweaponData.name }}
    </p>

    <!-- таблица для десктопа -->
    <table class="profiles__weapon-table" v-if="windowWidth > 800">
      <thead>
        <tr>
          <th v-if="isMultiprofile" class="small-cell">Profile</th>
          <th class="small-cell">R</th>
          <th class="small-cell">FP</th>
          <th class="small-cell">RS</th>
          <th class="small-cell">AP</th>
          <th class="small-cell">D</th>
          <th>Special Rules</th>
          <th class="medium-cell">Traits</th>
          <!-- <th>Faction</th>
          <th>Subfaction</th> -->
        </tr>
      </thead>
      <tbody v-for="profile in rweaponData.profiles" :key="profile.id">
        <tr>
          <td v-if="isMultiprofile" class="first-letter">
            {{ profile.subname }}
          </td>
          <td class="first-letter">{{ profile.range }}</td>
          <td>{{ profile.fire_power }}</td>
          <td>{{ profile.strength }}</td>
          <td>{{ profile.armor_penetration }}</td>
          <td>{{ profile.damage }}</td>
          <td>
            <div class="comma wrap">
              <div
                v-for="(value, key, index) in profile.specail_rules"
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
                  v-if="index !== Object.keys(profile.specail_rules).length - 1"
                  >,&nbsp;
                </span>
              </div>
            </div>
          </td>
          <td>
            <div class="first-letter">
              {{ profile.traits }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- таблица для мобилок -->
    <div v-if="windowWidth < 800">
      <div
        class="grid-table"
        :class="{ 'grid-table__one': isClassActive }"
        v-for="profile in rweaponData.profiles"
        :key="profile.id"
      >
        <!-- Первая строка -->
        <div class="full-span-cell grid-table__multiprofile left "
          style="grid-column: span 6" v-if="isMultiprofile">
          {{ profile.subname }}
        </div>
        <div class="grid-table__head cell">R</div>
        <div class="grid-table__head cell">FP</div>
        <div class="grid-table__head cell">RS</div>
        <div class="grid-table__head cell">AP</div>
        <div class="grid-table__head cell">D</div>
        <div class="grid-table__head cell">Traits</div>

        <!-- Вторая строка -->
        
        <div class="cell">{{ profile.range }}</div>
        <div class="cell">{{ profile.fire_power }}</div>
        <div class="cell">{{ profile.strength }}</div>
        <div class="cell">{{ profile.armor_penetration }}</div>
        <div class="cell">{{ profile.damage }}</div>
        <div class="cell">
          <div class="first-letter">{{ profile.traits }}</div>
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
              v-for="(value, key, index) in profile.specail_rules"
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
                v-if="index !== Object.keys(profile.specail_rules).length - 1"
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
import { special_rules } from "../../../stores/Arrays.js";
const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);
const isMultiprofile = computed(() => {
  return (
    props.rweaponData && Object.keys(props.rweaponData.profiles).length > 1
  );
});
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
  rweaponData: {
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

watch(windowWidth, () => {
  isClassActive.value = !isMultiprofile.value || isClassActive.value;
});

function checkRule(rule) {
  return special_rules[rule];
}
</script>
<style>
.profiles-name {
  text-align: left;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.3rem;
  margin-top: 1.1rem;
  margin-bottom: 0;
}
.profiles {
  box-sizing: border-box;
  padding-left: 2rem;
  padding-right: 2rem;
}
.rules-list {
  display: flex;
  flex-direction: column;
}
.profiles-table {
  font-size: 1rem;
}


@media (max-width: 600px) {
  .profiles-table {
    font-size: 0.7rem;
  }
}
.comma {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.wrap {
  flex-wrap: wrap;
}
.SP:hover {
  text-decoration: underline;
}

.grid-table {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Создаем 7 колонок */
}

.cell {
  border: 1px solid #ccc; /* Граница для ячеек */
}

.full-span-cell {
  border: 1px solid #ccc; /* Граница для полной ячейки */
}

.grid-table__head {
  font-weight: bold;
  padding: 4px;
  background-color: var(--table-light-color);
}

.end-cell {
  margin-bottom: 10px;
  padding: 15px;
}

.spacing {
  margin-left: 7px;
}
.grid-table__one {
  grid-template-columns: repeat(6, 1fr);
}

.break {
  word-break: break-all;
}

.left {
  text-align: left;
}

.grid-table__multiprofile {
  color: var(--main-red-color);
  text-transform:capitalize;
  font-weight: bold;
  padding: 5px;
}

.small-cell {
  width: 28px;
}
.medium-cell {
  width: 50px;
}

</style>


