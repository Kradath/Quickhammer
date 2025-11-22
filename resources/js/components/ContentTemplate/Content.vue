<template>
  <nav class="nav-rules">
    <h2 class="nav-rules_h2">Contents</h2>
    <div class="nav-rules_two-columns">
      <ul class="nav-rules_ul">
        <li
          :id="'rule-' + elem.id"
          v-for="elem in elems"
          :key="elem.id"
          class="nav-rules_ul-li"
        >
          <a
            class="nav-rules_ul_li-a"
            :href="'#' + elem.id"
            @click.prevent="scrollToSection(elem.id)"
          >
            {{ elem.innerHTML }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { scrollToSection } from "../composables/Scroll";

const elems = ref([]);

const collectElemHeaders = () => {
  elems.value = document.querySelectorAll("h3");
};

onMounted(() => {
  collectElemHeaders();
});
</script>
<style>
  
</style>