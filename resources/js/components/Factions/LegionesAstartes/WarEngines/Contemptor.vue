<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
        <div class="role we"></div> 
      <h2 class="unit__head-name">Contemptor Dreadnought</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
    name: "contemptor dreadnought",
    stats: [8, 4, 4, 7, 7, 6, 4, 4, 12, 10, 7, 5, 2, '5+'],
    sergeant: "",
    Sstats: [],
    types: ["walker"],
    Stypes: [],
    base: 60,
    cost: 150,
    composition: [1],
    twoProfiles: false,
    Dwargear: {
        ranged_weapons: ["none"],

    },
    SR: {
        "bulky": "(6)",
        "explodes": "(5+)",
        "implacable advance":"",
        
    },
    traits: ["[allegiance]", "[legiones astartes]","smokescreen"],
    options: [
        {
            scentence:
                "This Model must have two of the following options selected for it (or one paired option):",
            variants: [
                { what: "gravis power fist", and:"combi-bolter", cost: [5, "pts"] },
                { what: "gravis chainfist", and:"combi-bolter", cost: [5, "pts"] },
                { what: "gravis bolt cannon",  cost: [0, "pts"] },
                { what: "gravis melta cannon",  cost: [15, "pts"] },
                { what: "gravis autocannon", cost: [10, "pts"] },
                { what: "gravis plasma cannon", cost: [10, "pts"] },
                { what: "conversion beam cannon", cost: [20, "pts"] },
                { what: "twin volkite culverin", cost: [15, "pts"] },
                { what: "kheres assault cannon", cost: [15, "pts"] },
                { what: "twin lascannon", cost: [15, "pts"] },
                { what: "paired gravis power fists", and:"two combi-bolters", cost: [15, "pts"] },
                { what: "paired gravis chainfists", and:"two combi-bolters", cost: [15, "pts"] },
                
            ],
        },
         {    
            
            scentence: "Each of this Model's combi-bolters may be exchanged for one of the following:",
            variants: [
                { what: "heavy flamer", cost: [5, "pts each"] },
                { what: "plasma blaster", cost: [10, "pts each"] },
                { what: "graviton gun", cost: [10, "pts each"] },
                { what: "meltagun", cost: [15, "pts each"] },
                
            ],
        },
        {    
            
            scentence: "This Model may have one:",
            variants: [
                { what: "havoc launcher", cost: [5, "pts"] },
               
                
            ],
        },
      
        
    ],
});
</script>