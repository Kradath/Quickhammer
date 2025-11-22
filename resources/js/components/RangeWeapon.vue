<template>
  <main>
    <div class="container center">
      <h1>Ranged Weapon</h1>
      <div class="profiles">
        <div class="legiones-top-menu__select">
          <select
            name="r-cathegory"
            v-model="selectedType"
            class="weapon-select"
          >
            <option value="-">-</option>
            <option value="artillery">Artillery</option>
            <option value="archaeotech">Archaeotech</option>
            <option value="auto">Auto</option>
            <option value="bolt">Bolt</option>
            <option value="combi">Combi</option>
            <option value="conversion">Conversion</option>
            <option value="desintegrator">Desintegrator</option>
            <option value="graviton">Graviton</option>
            <option value="flame">Flame</option>
            <option value="las">Las</option>
            <option value="melta">Melta</option>
            <option value="missile">Missile</option>
            <option value="particle">Particle</option>
            <option value="phosphex">Phosphex</option>
            <option value="plasma">Plasma</option>
            <option value="rad">Rad</option>
            <option value="sonic">Sonic</option>
            <option value="volkite">Volkite</option>
            <option value="exotic and miscellaneous">
              Exotic and Miscellaneous
            </option>
          </select>
        </div>
        <div v-for="rweapon in displayedWeapons" :key="rweapon.id">
          <RangeWeaponTemplate :rweaponData="rweapon" />
        </div>
        <div ref="loader" v-if="hasMore && !loading" class="loader">
          Загрузка...
        </div>
        <div v-if="loading" class="loading">Загружаем...</div>
      </div>

      <div><Stp /></div>
      <div><Bb /></div>
    </div>
  </main>
</template>
<script setup>

import { ref } from "vue";
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
import RangeWeaponTemplate from "./OneExemplarTemplates/RangeWeaponTemplate.vue";
import { ranged_weapons } from "./../../stores/Arrays";
import { useLazyLoad } from "./composables/LazyLoad.js";

const selectedType = ref("-");

//ниже ипорт лэзилоада
const { 
  displayedItems: displayedWeapons, 
  loading, 
  hasMore, 
  loader // реф для загрузчка
} = useLazyLoad(ranged_weapons, selectedType, 10);

</script>
<style >
table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  border: 1px solid black; 
  padding: 8px; 
}

.profiles {
  margin-top: 0;
  border: 1px solid black;
  background-color: whitesmoke;
  width: 100%;
  padding-bottom: 30px;
}
</style>