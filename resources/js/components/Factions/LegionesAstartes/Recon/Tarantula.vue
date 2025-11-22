<template>
  <main class="container center unit">
    <!-- голова -->
    <div class="unit__head">
      <div class="role recon"></div>
      <h2 class="unit__head-name">Tarantula Sentry Guns</h2>
      <span class="unit__head-cost">{{ stats.cost }} Pts</span>
    </div>

    <VehicleTemplate :stats="stats" />

    <div class="unit__additional-rules">
      <h3 class="list-li-name">Independent Sentries</h3>
      <div>
        <p class="brief">Tarantulas are deployed and operate individually.</p>
        <div>
          Although included in an army as a Unit that includes multiple Models,
          each Model with this Special Rule is considered to be a separate Unit
          for all other purposes, including Deployment and the scoring of
          Victory Points
        </div>
      </div>
      <h3 class="list-li-name">Automated Fire Protocols</h3>
      <div>
        <p class="brief">
          A Model with this Special Rule may not make Shooting Attacks except as
          part of a Reaction.
        </p>
        <p>
          A Model with this Special Rule may not be selected to make a Shooting
          Attack during the Controlling Player's Shooting Phase and may only
          make the Overwatch Reaction and the Intercept and Automated Fire
          Advanced Reactions.
        </p>
        <p>
          When making a Shooting Attack as part of any of these Advanced
          Reactions, a Model with this Special Rule may attack with any weapons
          it has, not just Defensive Weapons.
        </p>
        <div class="unit-ability-desc">
          <div class="bold unit-ability-desc__name">
            Automated Fire Advanced Reaction
          </div>
          <div>
            <span class="bold">Trigger:</span> The Reactive Player may declare
            the Automated Fire Advanced Reaction in Step 2 of the Move Sub-Phase
            process if an enemy Unit ends a move within 48" of a Unit under the
            Reactive Player's Control that only includes Models with the
            Automated Fire Protocols Special Rule.
          </div>
          <div>
            <span class="bold">Cost:</span> The Automated Fire Advanced Reaction
            has no cost.
          </div>
          <div>
            <span class="bold">Target:</span> The Target Unit is always the Unit
            whose Move triggered the Reaction. The Reactive Player must select
            one Unit under their control that only includes Models with the
            Automated Fire Protocols Special Rule that is within 48" of the
            Target Unit. That Unit is the Reacting Unit.
          </div>
          <div>
            <span class="bold">Process</span>
            <ul class="unit-ability-desc_ul">
              <li>
                Once the Automated Fire Advanced Reaction has been declared, the
                Reactive Player makes a Shooting Attack with the Reacting Unit.
                This Shooting Attack must target the Target Unit of this
                Advanced Reaction.
              </li>
              <li>
                Once the Shooting Attack made as part of this Reaction has been
                completely resolved, including removing any Casualties, the
                Active Player must then completely resolve any remaining
                elements of the Target Unit's movement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { reactive } from "vue";
import VehicleTemplate from "../../../TablesTemplates/VehicleTemplate.vue";

const stats = reactive({
  name: "Tarantula Sentry Gun",
  stats: ["-", 4, 10, 10, 10, 2, "-"],
  types: ["vehicle"],
  cost: 45,
  composition: 2,
  twoProfiles: false,
  Dwargear: {
    ranged_weapons: {
      turret: ["twin heavy bolter"],
      centerline: [],
      sponson: [],
      pintle: [],
      "co-axial": [],
      "hull (front)": [],
      "hull (rear)": [],
      "hull (left)": [],
      "hull (right)": [],
    },
    wargear: [],
  },
  SR: {
    expendable: "(3)",
    infiltrate: "(9)",
    "automated fire protocols": "",
    "independed sentries": "",
  },
  traits: ["[alegiance]", "[legiones astartes]"],
  access: false,
  options: [
    {
      scentence:
        "Any Model in this Unit may have its Turret Mounted twin heavy bolter exchanged for one of the following:",
      variants: [
        {
          where: "turret mounted",
          what: "twin lascannon",
          cost: [20, "pts per model"],
        },
        {
          where: "turret mounted",
          what: "twin volkite culverin",
          cost: [15, "pts per model"],
        },
        {
          where: "turret mounted",
          what: "sentry melta array",
          cost: [25, "pts per model"],
        },
        {
          where: "turret mounted",
          what: "hyperios missile launcher",
          cost: [15, "pts per model"],
        },
        {
          where: "two turret mounted",
          what: "orias frag missile",
          cost: [15, "pts per model"],
        },
      ],
    },
  ],
});
</script>