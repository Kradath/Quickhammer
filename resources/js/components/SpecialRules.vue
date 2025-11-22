<template>
  <main class="container center">
    <div >
      <h1>Special Rules</h1>
      <Content />

      <ul class="list-ul" >
        
        <li
          v-for="special_rule in filteredRules"
          :key="special_rule.id"
          class="list-li"
        >
        
          
          <SpecialRuleTemplate :special_rule="special_rule" />
        </li>
      </ul>
    </div>
    <div> <Stp /> </div>
    <div> <Bb /> </div>
    
  </main>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import Bb from "./BackButton.vue";
import Content from "./ContentTemplate/Content.vue";
import Stp from "./ScrollToTop.vue";
import SpecialRuleTemplate from "./OneExemplarTemplates/SpecialRuleTemplate.vue";
import { scrollToSection } from "./composables/Scroll";
import { special_rules } from "./../../stores/Arrays.js";
import { sortedRules } from './composables/SortedRules.js';

const filteredRules = computed(() => {
  const rulesArray = Object.values(sortedRules(special_rules));
  return rulesArray.filter(
    (rule) => rule.unique != true
  );
});
</script>



