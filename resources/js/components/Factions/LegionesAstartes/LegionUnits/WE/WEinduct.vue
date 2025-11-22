<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role troops"></div>
      <h2 class="unit__head-name">World Eaters Inductii Squad</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div class="unit__additional-rules">
      <h3 class="list-li-name">THE BUTCHER-SURGEON PRIME ADVANTAGE</h3>
      <p>
        If an Apothecary Unit which only includes Models with the World Eaters
        Trait is selected to fill a Prime Force Organisation Slot, the following
        Prime Advantage may be selected.
      </p>
      <p class="bold unit-ability-desc__name">Butcher-Surgeon</p>
      <p>
        All Models in an Apothecary Unit selected to fill a Prime Force
        Organisation Slot with this Prime Advantage gain the Ravening Madmen and
        Exhortation of Butchery Special Rules.
      </p>
      <p class="bold unit-ability-desc__name">Exhortation of Butchery</p>
      <p>
        At the start of the Charge Sub-Phase of their Battle Turn, the
        Controlling Player of a Unit which contains any Models with this Special
        Rule may elect for that Unit to become Lost to the Nails (See Legiones Hereticus World Eaters).
      </p>
    </div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";

const stats = reactive({
  composition: [10],
  cost: 100,
  base: 32,
  name: "inductii",
  stats: [7, 4, 4, 4, 4, 1, 4, 2, 7, 7, 6, 6, 3, "-"],
  sergeant: "",
  Sstats: [],
  Dwargear: {
    melee_weapons: ["chainsword"],
    ranged_weapons: ["bolt pistol"],
    wargear: ["frag grenades", "krak grenades"],
  },
  SR: {
    inductii: "",
    heedless: "",
    impact: "(T)",
    "ravening madmen": "",
    vanguard: "(3)",
  },
  twoProfiles: false,
  traits: ["[allegiace]", "world eaters"],
  Stypes: [],
  types: ["infantry"],
  options: [
    {
      scentence: "A World Eaters Inductii Squad may include:",
      variants: [
        { what: "Up to 10 additional Inductii", cost: [9, "pts each"] },
      ],
    },
    {
      scentence:
        "Any Model in this Unit may have its chainsword and bolt pistol exchanged for one:",
      variants: [
        {
          what: "heavy chainaxe",
          cost: [5, "pts"],
        },
      ],
    },
    {
      scentence:
        "For every four Models in this Unit, one Inductii in this Unit may have its chainsword exchanged for one of the following:",
      variants: [
        {
          what: "heavy chainsword",
          cost: [5, "pts"],
        },
        {
          what: "charnabal sabre",
          cost: [10, "pts"],
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
      ],
    },
    {
      scentence:
        "For every four Models in this Unit, one Inductii in this Unit may have its bolt pistol exchanged for one of the following:",
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
        "Up to two Inductii in this Unit may each have one of the following:",
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
      scentence: "One Inductii in this Unit may have one:",
      variants: [{ what: "legion vexilla", cost: [10, "pts"] }],
    },
  ],
});
</script>
