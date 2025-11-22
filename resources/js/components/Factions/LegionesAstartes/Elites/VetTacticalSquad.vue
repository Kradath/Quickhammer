<template>
  <main class="container center unit">
    

    <!-- голова -->
    <div class="unit__head">
      <div class="elite role"></div> 
      <h2 class="unit__head-name">Veteran Tactical Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  name: "veteran",
  stats: [7, 4, 5, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "-"],
  sergeant: "veteran sergeant",
  Sstats: [7, 4, 5, 4, 4, 2, 4, 2, 8, 8, 7, 7, 3, "-"],
  types: ["infantry"],
  Stypes: ["infantry", "sergeant"],
  base: 32,
  cost: 85,
  composition: [4],
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: ["bolter", "bolt pistol"],
    melee_weapons: ["krak grenades"],
    wargear: ["frag grenades"],
  },
  SR: {
    line: "(1)",
  },
  traits: ["[allegiance]", "[legiones astartes]"],
  options: [
    {
      scentence: "A Legion Veteran Tactical Squad may include:",
      variants: [
        { what: "Up to 10 additional Veterans", cost: [15, "pts each"] },
      ],
    },
    {
      scentence:
        "The Sergeant in this Unit may have its bolter and/or bolt pistol exchanged for one of the following:",
      variants: [
        {
          what: "chainsword",
          cost: [0, "pts"],
        },
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
          what: "desintegrator pistol",
          cost: [5, "pts"],
        },
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
        "Any model in this Unit may have its bolter exchanged for one of the following:",
      variants: [
        {
          what: "astartes shotgun",
          cost: [2, "pts"],
        },
        {
          what: "desintegrator rifle",
          cost: [5, "pts"],
        },
        {
          what: "volkite charger",
          cost: [2, "pts"],
        },
        {
          what: "combi-bolter",
          cost: [5, "pts"],
        },
        {
          what: "combi-flamer",
          cost: [10, "pts"],
        },
        {
          what: "combi-melta",
          cost: [10, "pts"],
        },
        {
          what: "combi-plasma",
          cost: [10, "pts"],
        },
        {
          what: "combi-volkite",
          cost: [10, "pts"],
        },
        {
          what: "combi-grenade",
          cost: [10, "pts"],
        },
        {
          what: "combi-desintegrator",
          cost: [10, "pts"],
        },
        {
          what: "combi-grav",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every five Models in this Unit, one Veteran in this Unit may have its bolter exchanged for one item from the Legion Special Weapons list or one item from the Legion Heavy Weapons list or one of the following:",
      variants: [
        { what: "desintegrator blaster", cost: [10, "pts"] },
        { what: "heavy desintegrator", cost: [15, "pts"] },
      ],
    },
    {
      scentence: "The Sergeant in this Unit may have:",
      variants: [{ what: "melta bombs", cost: [10, "pts"] }],
    },
    {
      scentence: "One Veteran in this Unit may have:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
    {
      scentence:
        "Up to two Veterans in this Unit may each have one item for one of the following:",
      variants: [
        {
          what: "nuncio-vox",
          cost: [10, "pts"],
        },
        {
          what: "augury scanner",
          cost: [10, "pts"],
        },
      ],
    },
    {
      scentence:
        "Any model in this Unit with a bolter may have one of the following:",
      variants: [
        { what: "bayonet", cost: [1, "pts each"] },
        { what: "chain bayonet", cost: [2, "pts each"] },
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