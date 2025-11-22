<template>
  <main>
    <div class="container center">
      <h1>Melee Weapon</h1>
      <!-- <Content /> -->
      <div class="profiles">
        <div class="legiones-top-menu__select">
          <select
            name="r-cathegory"
            v-model="selectedType"
            class="weapon-select"
          >
            <option value="-">-</option>
            <option value="chain">Chain</option>
            <option value="charnabal">Chrnabal</option>
            <option value="force">Force</option>
            <option value="power">Power</option>
            <option value="paragon">Paragon</option>
            <option value="exotic and miscellaneous">
              Exotic and Miscellaneous
            </option>
          </select>
        </div>
        <div v-for="mweapon in displayedWeapons" :key="mweapon.id">
          <MeleeWeaponTemplate :mweaponData="mweapon" />
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
import MeleeWeaponTemplate from "./OneExemplarTemplates/MeleeWeaponTemplate.vue";
import { melee_weapons } from "./../../stores/Arrays";
import { useLazyLoad } from "./composables/LazyLoad.js";


const selectedType = ref("-");

//ниже ипорт лэзилоада
const { 
  displayedItems: displayedWeapons, 
  loading, 
  hasMore, 
  loader // реф для загрузчка
} = useLazyLoad(melee_weapons, selectedType, 10);

</script>
