<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="we role"></div>
      <h2 class="unit__head-name">0-1 Excindio Battle Automata</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <IDMPTemplate :stats="stats" />
    <div>
      <div class="unit__additional-rules">
        <p class="bold">Using this Unit</p>
        <p>
          This Unit may be included in Detachments from the Legiones Astartes
          Army List, where the Primary Detachment has the Dark Angels Faction.
          This Unit may not be selected as part of an Allied Detachment.
        </p>
      </div>
      <div class="unit__additional-rules">
        <h4>Artificia Kill-switch</h4>
        <p>
          The Controlling Player of a Model with an artificia kill-switch may
          choose to activate it in the Effects Sub-Phase of any End Phase. When
          activated, that Player may select one friendly Model that has the
          Artificia Type that is within 12" of the Model with the artificia
          kill-switch. The selected Model with the Artificia Type suffers D6+2
          Unsaved Wounds. If this would cause that Model to be Removed as a
          Casualty, then if that Model has any version of the Explodes (X)
          Special Rule, that Special Rule is automatically activated. If a Model
          is Destroyed and Removed from Play due to the activation of an
          artificia kill-switch, then no Player may score any Victory Points for
          that Model being removed from play.
        </p>
      </div>
    </div>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref, reactive } from "vue";
import IDMPTemplate from "../../../../TablesTemplates/IDMPTemplate.vue";
const windowWidth = ref(window.innerWidth);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
const stats = reactive({
  name: "Excindio Battle Automata",
  composition: [1],
  cost: 180,
  base: 60,
  stats: [7, 5, 5, 7, 7, 8, 4, 4, 10, 10, 10, 10, 3, "5+"],
  sergeant: "",
  Sstats: "",
  Dwargear: {
    melee_weapons: ["excindio claws"],
    ranged_weapons: ["combi-bolter", "combi-bolter"],
    wargear: [],
  },
  SR: {
    hatred: "(Infantry, cavalry, walker, automata)",
    "eternal warrior": "(1)",
    "firing protocols": "(3)",
    bulky: "(6)",
    explodes: "(5+)",
    "vengeful rage": "",
  },
  traits: ["[allegiance]"],
  types: ["artifica", "champion"],
  Stypes: [],
  twoProfiles: false,
  options: [
    {
      scentence:
        "This Model may have its two combi-bolters exchanged for two weapons of one of the following types:",
      variants: [
        {
          what: "graviton gun",
          cost: [20, "pts for two"],
        },
        {
          what: "plasma gun",
          cost: [20, "pts for two"],
        },
        {
          what: "irad cleanser",
          cost: [30, "pts for two"],
        },
      ],
    },
    {
      scentence: "This Model may have one of the following:",
      variants: [
        {
          what: "athanax phosphex canister launcher",
          cost: [15, "pts"],
        },
        {
          what: "tyrhenius nerve induction shredder",
          cost: [15, "pts"],
        },
        {
          what: "magaron atomantic pulse cannon",
          cost: [30, "pts"],
        },
        {
          what: "cytheron graviton flux projector",
          cost: [20, "pts"],
        },
      ],
    },
    {
      scentence: "This Model may have up to two:",
      variants: [
        {
          what: "hunter-killer missile",
          cost: [5, "pts each"],
        },
      ],
    },
  ],
});
</script>