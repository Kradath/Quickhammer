<template>
  <main class="container center">
    
      <h1>Traits</h1>
      <Content />

      <ul class="list-ul" >
        
        <li
          v-for="trait in traits"
          :key="trait.id"
          class="list-li"
        >
        
          <h3 :id="trait.id" class="list-li-name">
            {{ trait.name }} {{ trait.mod }}
          </h3>
          <p>
            <span class="brief">{{ trait.brief }}</span>
            {{ trait.text }}
          </p>
        
        </li>
      </ul>
    
  </main>
</template>
<script setup lang="ts">
import Content from "./ContentTemplate/Content.vue";



</script>