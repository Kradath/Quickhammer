<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
        <div class="role we"></div> 
      <h2 class="unit__head-name">Deredeo dreadnought</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
    name: "deredeo dreadnought",
    stats: [7, 4, 4, 6, 7, 6, 4, 2, 12, 10, 7, 5, 2, '5+'],
    sergeant: "",
    Sstats: [],
    types: ["walker", "heavy"],
    Stypes: [],
    base: 80,
    cost: 190,
    composition: [1],
    twoProfiles: false,
    Dwargear: {
        ranged_weapons: ["anvilus autocannon battery", "twin heavy bolter","aiolos missile launcher"]
    },
    SR: {
        "bulky": "(7)",
        "explodes": "(5)",
        
    },
    traits: ["[allegiance]", "[legiones astartes]","smokescreen"],
    options: [
        {
            scentence:
                "This model may have its Anvilus autocannon battery exchanged for one of the following:",
            variants: [
                { what: "hellfire plasma cannonade", cost: [15, "pts"] },
                { what: "arachnus heavy lascannon battery", cost: [25, "pts"] },
                { what: "volkite falconet", cost: [0, "pts"] },
            ],
        },
        {
            scentence: "This Model may have its Aiolos missile launcher exchanged for four:",
            variants: [
                { what: "boreas air defence missile", cost: [0, "pts"] },
            ],
        },
        {    
            
            scentence: "This Model may have its twin heavy bolter exchanged for:",
            variants: [
                { what: "twin heavy flamer", cost: [0, "pts"] },
                
            ],
        },
        
    ],
});
</script>