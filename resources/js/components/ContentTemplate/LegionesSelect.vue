<template>
  <div class="legiones-top-menu__select">
    
    <select
      name="legiones"
      v-model="model"
      
      class="faction_select"
    ><option value="-">Legiones Astartes</option>
      <optgroup label="Loyalists">
        <option value="Dark_Angels">I Dark Angels</option>
        <!-- <option value="White_Scars">V White Scars</option>
        <option value="Space_Wolves">VI Space Wolves</option> -->
        <option value="Imperial_Fists">VII Imperial Fists</option>
        <!-- <option value="Blood_Angels">IX Blood Angels</option> -->
        <option value="Iron_Hands">X Iron Hands</option>
        <option value="Ultramarines">XIII Ultramarines</option>
        <option value="Salamanders">XVIII Salamanders</option>
        <option value="Raven_Guard">XIX Raven Guard</option>
      </optgroup>
      <optgroup label="Traitors">
        <!-- <option value="Emperors_Children">III Emperor's Children</option> -->
        <option value="Iron_Warriors">IV Iron Warriors</option>
        <option value="Night_Lords">VIII Night Lords</option>
        <option value="World_Eaters">XII World Eaters</option>
        <option value="Death_Guard">XIV Death Guard</option>
        <!-- <option value="Thousand_Sons">XV Thousand Sons</option> -->
        <option value="Sons_Of_Horus">XVI Sons Of Horus</option>
        <!-- <option value="Word_Bearers">XVII Word Bearers</option> -->
        <option value="Alpha_Legion">XX Alpha Legion</option>
      </optgroup>
    </select>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (val: string) => {
    emit('update:modelValue', val);
    localStorage.setItem("selectedOption", val); // сохраняем сразу при изменении
  }
});


</script>