<template>
  <main class="container center">
    <div>
      <h1>Unit Types</h1>
      <Content />

      <ul class="list-ul">
        <li v-for="unit_type in sortedRules(unit_types)" :key="unit_type.id" class="list-li">
          <UnitTypeTemplate :unit_type="unit_type" />
        </li>
      </ul>
    </div>
    <div> <Stp /> </div>
    <div> <Bb /> </div>
  </main>
</template>

<script setup>
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
import Content from "./ContentTemplate/Content.vue";
import { scrollToSection } from "./composables/Scroll";
import UnitTypeTemplate from "./OneExemplarTemplates/UnitTypeTemplate.vue";
import { unit_types } from "./../../stores/Arrays.js";
import { sortedRules } from './composables/SortedRules.js';

</script>
<style>
.unit-types__list-ul {
  padding: 0;

}
.unit-types__list-ul-li {
  margin-left: 2rem;
  margin-bottom: 0.5rem;
}
</style>