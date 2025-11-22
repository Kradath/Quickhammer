<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role support"></div> 
      <h2 class="unit__head-name">Rapier Battery</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    
    <div class="footnote-text">
      *Rapier Carrier only
    </div>
    <div class="footnote-text">
      **Each Rapier Crew consists of 2 Legionaries and Rapier Carrier
    </div>
    
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "legionary",
  stats: [7, 4, 4, 4, 4, 1, 4, 1, 7, 8, 7, 7, 3, "-"],
  sergeant: "Rapier Carrier",
  Sstats: [7, 1, 4, 4, 6, 2, 1, "-", 1, 1, 1, 1, 3, "-"],
  types: ["infantry", "sergeant"],
  Stypes: ["infantry"],
  base: 32,
  cost: 50,
  composition: [2],
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades", "frag grenades"],
    wargear: [],
  },
  twoProfiles: true,
  DSwargear: {
    ranged_weapons: ["gravis heavy bolter battery"],
    melee_weapons: [],
    wargear: [],
  },
  SR: {
    "rapier crew": "",
    "bulky": "(3*)",
    "slow and purposeful": "",
    "support unit": "(1)",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Rapier Battery may include:",
      variants: [
        { what: "Up to 3 additional Rapier Crews**", cost: [40, "pts each"] },
      ],
    },
    {
      scentence:
        "Each Rapier Carrier in this Unit may have its Gravis heavy bolter battery exchanged for one of the following:",
      variants: [
        {
          what: "laser destroyer",
          cost: [25, "pts"],
        },
        {
          what: "graviton cannon",
          cost: [20, "pts"],
        },
        {
          what: "quad launcher",
          cost: [20, "pts"],
        },
      ],
    },
    {
      scentence:
        "If your Army includes a Siege Breaker Model with the same Faction Trait as the Models in this Unit, any Rapier Carrier with a Quad Launcher in this Unit may also have:",
      variants: [{ what: "phosphex canister shot", cost: [15, "pts each"] }],
    },
  ],
});
</script>