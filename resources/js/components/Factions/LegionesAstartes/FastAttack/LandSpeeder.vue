<template>
  <main class="container center unit">

    <!-- голова -->
    <div class="unit__head">
        <div class="role fa"></div> 
      <h2 class="unit__head-name">Land Speeder Squadron</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
    name: "land speeder",
    stats: [16, 4, 4, 4, 5, 3, 4, 2, 8, 8, 7, 7, 3, "-"],
    sergeant: "",
    Sstats: [],
    types: ["cavalry", "skirmish", "antigrav"],
    Stypes: [],
    base: 60,
    cost: 50,
    composition: [1],
    twoProfiles: false,
    Dwargear: {
        ranged_weapons: ["heavy bolter"],
        wargear: ["augury scanner"],

    },
    SR: {
        "bulky": "(4)",
        "deep strike": "",
        "firing protocols": "(2)",
    },
    traits: ["[allegiance]", "[legiones astartes]"],
    options: [
        {
            scentence: "This Unit may include:",
            variants: [
                { what: "Up to 4 additional Land Speeders", cost: [50, "pts each"] },
            ],
        },
        {
            scentence:
                "Any Model in this Unit may have its heavy bolter exchanged for one of the following:",
            variants: [
                { what: "heavy flamer", cost: [0, "pts"] },
                { what: "havoc launcher", cost: [5, "pts"] },
                { what: "multi-melta", cost: [20, "pts"] },
                { what: "volkite culverin", cost: [5, "pts"] },
                { what: "plasma cannon", cost: [10, "pts"] },
                { what: "graviton gun", cost: [10, "pts"] },

            ],
        },
        {
            scentence:
                "Any Model in this Unit may have its augury scanner exchanged for one of the following:",
            variants: [
                { what: "heavy flamer", cost: [0, "pts"] },
                { what: "heavy bolter", cost: [0, "pts"] },
                { what: "havoc launcher", cost: [0, "pts"] },
                { what: "multi-melta", cost: [20, "pts"] },
                { what: "volkite culverin", cost: [5, "pts"] },
                { what: "plasma cannon", cost: [10, "pts"] },
                { what: "graviton gun", cost: [10, "pts"] },
            ],

        },
        {
            scentence: "Any Model in this Unit may have up to two:",
            variants: [
                { what: "hunter-killer missile", cost: [5, "pts each"] }],
        },

    ],
});
</script>