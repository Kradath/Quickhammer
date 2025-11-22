<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div> 
      <h2 class="unit__head-name">Assault Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "assault legionary",
  stats: [12, 4, 4, 4, 4, 1, 4, 2, 7, 7, 7, 7, 3, "-"],
  sergeant: "assault sergeant",
  Sstats: [12, 4, 4, 4, 4, 1, 4, 2, 8, 7, 7, 7, 3, "-"],
  types: ["infantry","antigrav"],
  Stypes: ["infantry", "sergeant","antigrav"],
  base: 32,
  cost: 140,
  composition: [9],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolt pistol"],
    melee_weapons: ["chainsword", "krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    bulky: "(2)",
    vanguard: "(2)",
    "deep strike": "",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Legion Assault Squad may include:",
      variants: [
        { what: "Up to 10 additional Assault Legionaries", cost: [12, "pts each"] },
      ],
    },
    {
      scentence:
        "The Sergeant in this Unit may have its chainsword and/or bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "chainaxe",
          cost: [0, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "power fist",
          cost: [15, "pts"],
        },
        {
          what: "lightning claw",
          cost: [10, "pts"],
        },
        {
          what: "thunder hammer",
          cost: [15, "pts"],
        },
      ],
    },
    {
      scentence:
        "The Sergeant in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
    
    {
      scentence:
        "The Assault Sergeant in this Unit may have its bolt pistol and chainsword, or its combat shield and chainsword, exchanged for:",
      variants: [{ what: "paired lightning claws", cost: [10, "pts"] }],
    },
    {
      scentence: "The Assault Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence: "Every Model in this Unit may have its bolt pistol exchanged for:",
      variants: [{ what: "combat shield", cost: [2, "pts"] }],
    },
    {
      scentence: "Any Model in this Unit may have its chainsword exchanged for:",
      variants: [{ what: "chainaxe", cost: [0, "pts"] }],
    },
    {
      scentence:
        "For every five Models in this Unit, one Assault Legionary in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "power sword",
          cost: [10, "pts"],
        },
        {
          what: "power axe",
          cost: [10, "pts"],
        },
        {
          what: "power maul",
          cost: [10, "pts"],
        },
        {
          what: "power lance",
          cost: [10, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Assault Legionary in this Unit may have its chainsword and bolt pistol, or its combat shield and chainsword exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainsword",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, two Assault Legionaries in this Unit may have their chainsword and bolt pistol, or their combat shield and chainsword, exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainaxe",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Assault Legionary in this Unit may have its bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "plasma pistol",
          cost: [5, "pts"],
        },
        {
          what: "hand flamer",
          cost: [5, "pts"],
        },
        {
          what: "volkite serpenta",
          cost: [5, "pts"],
        },
      ],
    },
  ],
});
</script>
<style>
.unit {
  margin-top: 0;
  border: 1px solid black;
  padding: 2rem;
  background-color: whitesmoke;
  width: 100%;
}
.unit__role {
  text-align: left;
  width: 100%;
}

.unit__head {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.unit__head-cost {
  color: #b7410e;
  font-weight: bold;
  align-content: flex-end;
}

.unit__head-name {
  margin: 0;
}

.unit__transport__ul-li,
.unit__options__ul-li {
  list-style-type: disc;
  width: 100%;
}

.unit__options {
  width: 100%;
}
.unit__options__ul {
  display: block;
  padding-left: 1rem;
}
.unit__options-table {
  margin-bottom: 1rem;
}
.unit__options-table tr:nth-child(odd) {
  background-color: rgb(227, 227, 227);
}

.unit__options-table tr:nth-child(even) {
  background-color: #fff;
}
.unit__options-table td:nth-child(even) {
  width: 24%;
  text-align: right;
}

.unit__options__div {
  display: flex;
  justify-content: space-between;
}

.dots-line {
  flex: 1; /* занимает всё пространство между текстами */
  border-bottom: 2px dotted black; /* линия с точками */
  flex-wrap: wrap;
}
</style>