<template>
    <div class="one-exemplar">
        <h3 :id="special_rule.id" class="list-li-name">
            {{ special_rule.name }} {{ special_rule.mod }}
          </h3>
          <div>
            <p class="brief">{{ special_rule.brief }}</p>
            <div v-html="special_rule.text"></div>
          </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, ref } from "vue";
const props = defineProps({
  special_rule: {
    type: Object,
    required: true,
  },
});    
</script>