<template>
  <main>
    <div class="container center">
      <h1>Wargear</h1>
      <Content />

      <ul class="list-ul">
        <li v-for="wargear in filteredRules" :key="wargear.id" class="list-li">
          <Wargear :wargear="wargear" />
        </li>
        <li>
          <div class="">
            <h3 id="grenades" class="list-li-name">frag grenades</h3>
            <p class="bold">
              Frag grenades can be used to make attacks during the Volley Step.
            </p>
            <div>
              When making Volley Attacks during Step 4 of the Charge Procedure
              with a Unit that includes at least one Model with frag grenades,
              the Controlling Player may choose to make a single attack with a
              frag grenade instead of making a normal Shooting Attack using the
              following profile*:
              <table class="profiles__weapon-table">
                <thead>
                  <tr>
                    <th>R</th>
                    <th>FP</th>
                    <th>RS</th>
                    <th>AP</th>
                    <th>D</th>
                    <th>Special Rules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>1</td>
                    <td>3</td>
                    <td>6</td>
                    <td>1</td>
                    <td>Blast(3")</td>
                  </tr>
                </tbody>
              </table>
              This weapon counts as have Assault trait*
            </div>
            <!-- <div class="first-letter">Faction: legiones astartes</div> -->
          </div>
        </li>
      </ul>
      <div> <Stp /> </div>
      <div> <Bb /> </div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
import { scrollToSection } from "./composables/Scroll";
import Content from "./ContentTemplate/Content.vue";
import Wargear from "./OneExemplarTemplates/WargearTemplate.vue";
import { wargear } from "./../../stores/Arrays.js";
import { sortedRules } from './composables/SortedRules.js';

const filteredRules = computed(() => {
  const rulesArray = Object.values(sortedRules(wargear));
  return rulesArray.filter(
    (rule) => rule.unique != true
  );
});
</script>