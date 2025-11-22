<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
        <div class="role fa"></div> 
      <h2 class="unit__head-name">Javelin Squadron</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
    name: "javelin",
    stats: [14, 4, 4, 4, 6, 4, 4, 2, 8, 8, 7, 7, 3, "-"],
    sergeant: "",
    Sstats: [],
    types: ["cavalry", "skirmish", "antigrav"],
    Stypes: [],
    base: 60,
    cost: 75,
    composition: [1],
    twoProfiles: false,
    Dwargear: {
        ranged_weapons: ["heavy bolter", "cyclone missile launcher"],

    },
    SR: {
        "bulky": "(5)",
        "deep strike": "",
        "firing protocols": "(3)",
    },
    traits: ["[allegiance]", "[legiones astartes]"],
    options: [
        {
            scentence:
                "This unit may include:",
            variants: [
                { what: "up to 2 additional Javelins", cost: [75, "pts each"] },
            ],
        },
        {
            scentence: "Any Model in this Unit may have its cyclone missile launcher exchanged for two weapons of one of the following types:",
            variants: [
                { what: "heavy flamer", cost: [0, "pts"] },
                { what: "heavy bolter", cost: [0, "pts"] },
                { what: "lascannon", cost: [5, "pts per model"] },
                { what: "volkite culverin", cost: [5, "pts per model"] },
            ],
        },
        
    ],
});
</script>