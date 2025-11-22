<template>
  <main class="center container">
    <h1>Faction Rules</h1>
    <div class="legiones-top-menu">
      <LegionesSelect v-model="selectOption" />
      <router-link
        to="/factions/legiones-astartes/unit-list"
        class="legiones-top-menu__units-link legiones-icon"
      ></router-link>
    </div>

    <nav class="nav-rules">
      <h2 class="nav-rules_h2">Contents</h2>
      <ul class="nav-rules_ul">
        <li :id="'rule-' + elem.id" v-for="elem in elems" :key="elem.id">
          <a
            class="nav-rules_ul_li-a"
            :href="'#' + elem.id"
            @click.prevent="scrollToSection(elem.id)"
          >
            {{ elem.innerHTML }}
          </a>
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#DA'"
            @click.prevent="scrollToSection('DA')"
            v-show="selectOption === 'Dark_Angels'"
            >Dark Angels</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#WS'"
            @click.prevent="scrollToSection('WS')"
            v-show="selectOption === 'White_Scars'"
            >White Scars</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#SW'"
            @click.prevent="scrollToSection('SW')"
            v-show="selectOption === 'Space_Wolves'"
            >Space Wolves</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#IF'"
            @click.prevent="scrollToSection('IF')"
            v-show="selectOption === 'Imperial_Fists'"
            >Imperial Fists</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#BA'"
            @click.prevent="scrollToSection('BA')"
            v-show="selectOption === 'Blood_Angels'"
            >Blood_Angels</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#IH'"
            @click.prevent="scrollToSection('IH')"
            v-show="selectOption === 'Iron_Hands'"
            >Iron Hands</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#U'"
            @click.prevent="scrollToSection('U')"
            v-show="selectOption === 'Ultramarines'"
            >Ultramarines</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#S'"
            @click.prevent="scrollToSection('S')"
            v-show="selectOption === 'Salamanders'"
            >Salamanders</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#RG'"
            @click.prevent="scrollToSection('RG')"
            v-show="selectOption === 'Raven_Guard'"
            >Raven Guard</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#EC'"
            @click.prevent="scrollToSection('EC')"
            v-show="selectOption === 'Emperors_Children'"
            >Emperors Children</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#IW'"
            @click.prevent="scrollToSection('IW')"
            v-show="selectOption === 'Iron_Warriors'"
            >Iron Warriors</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#NL'"
            @click.prevent="scrollToSection('NL')"
            v-show="selectOption === 'Night_Lords'"
            >Night Lords</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#WE'"
            @click.prevent="scrollToSection('WE')"
            v-show="selectOption === 'World_Eaters'"
            >World Eaters</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#DG'"
            @click.prevent="scrollToSection('DG')"
            v-show="selectOption === 'Death_Guard'"
            >Death Guard</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#TS'"
            @click.prevent="scrollToSection('TS')"
            v-show="selectOption === 'Thousand_Sons'"
            >Thousand Sons</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#SH'"
            @click.prevent="scrollToSection('SH')"
            v-show="selectOption === 'Sons_Of_Horus'"
            >Sons Of Horus</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#WB'"
            @click.prevent="scrollToSection('WB')"
            v-show="selectOption === 'Word_Bearers'"
            >Word Bearers</a
          >
        </li>
        <li>
          <a
            class="nav-rules_ul_li-a"
            :href="'#AL'"
            @click.prevent="scrollToSection('AL')"
            v-show="selectOption === 'Alpha_Legion'"
            >Alpha Legion</a
          >
        </li>
      </ul>
    </nav>

    <div class="core-rules">
      <div>
        <h3 id="bulding">Building a Space Marine Army</h3>
        <p>
          Every Unit from the Legiones Astartes Army List will have an
          Allegiance, represented by a Trait on its Unit Profile. For Units
          which are not specific to a particular Allegiance, this will be
          represented by
          <span class="bold">[Allegiance]</span>. When you add such a Unit to
          your Army, this Trait is replaced with either
          <span class="bold">'Loyalist'</span> or
          <span class="bold">'Traitor'</span>, based on which Allegiance you
          have selected for your Army.
        </p>
        <p>
          Some Units within this Army List will have either the Loyalist or
          Traitor Trait on their Unit Profile. Such Units cannot select which
          Allegiance they have, and can only be selected in an Army with the
          appropriate Allegiance.
        </p>

        <h3 id="AatLa">Allegiance and the Legiones Astartes</h3>
        <p>
          Allegiance and the Legiones Astartes This volume presents those
          Legions of which the majority chose to turn against the Emperor;
          however, that does not mean they can only be used to represent armies
          of the Traitor Allegiance. Factions both large and small within each
          of the Legions chose to defy their Primarchs and fight for the
          allegiance they deemed the true destiny of the Imperium and, as such,
          Players should feel free to use this volume to create armies from
          those Legions that historically betrayed the Emperor, but that have
          chosen to follow the Loyalist Allegiance.
        </p>
        <p>
          Every Unit from the Legiones Astartes Army List will also have a
          Faction represented by a Trait on its Unit Profile. For Units which
          are not specific to a Legion or other Organisation this will be
          represented by
          <span class="bold">[Legiones Astartes]</span> . When you add such a
          Unit to your army, you must select one of the following Faction Traits
          to replace this with (this replaces all instances of the
          <span class="bold">[Legiones Astartes]</span> Trait on that Unit
          Profile while it is part of your Army):
        </p>

        <ul class="factions-main__general-ul">
          <li>Dark Angels</li>
          <li>White Scars</li>
          <li>Space Wolves</li>
          <li>Imperial Fists</li>
          <li>Blood Angels</li>
          <li>Iron Hands</li>
          <li>Ultramarines</li>
          <li>Salamanders</li>
          <li>Raven Guard</li>
          <li>Emperor's Children</li>
          <li>Iron Warriors</li>
          <li>Night Lords</li>
          <li>World Eaters</li>
          <li>Death Guard</li>
          <li>Thousand Sons</li>
          <li>Sons Of Horus</li>
          <li>Word Bearers</li>
          <li>Alpha Legion</li>
        </ul>
        <div class="border">
          <h4 id="reactionPoint" class="">Additional Reaction Point</h4>
          <p>
            If an Army's Primary Detachment is from the Legiones Astartes Army
            List, the Controlling Player gains one additional Reaction Point if
            that Detachment or a Warlord Detachment from the same Army List
            includes any Models with the Master of the Legion Trait.
          </p>
        </div>
        <p>
          Future publications may also provide other options for replacing the
          [Legiones Astartes] Trait on Units.
        </p>
        <p>
          Units which are specific to a certain Legion (such as each Legion's
          Primarch) will already have the appropriate Faction Trait, and this
          may not be replaced.
        </p>
        <p>
          All Units selected as part of a given Detachment must have the same
          Faction Trait unless another Rule or Special Rule states otherwise.
        </p>
        <div class="border">
          <h3 id="legions" class="list-li-name">Legions</h3>
          <p>
            This book contains additional Rules for nine of the Legiones
            Astartes. Each Legion's Rules are presented in their own section and
            contain the following elements:
          </p>
          <h4>RITES OF WAR</h4>
          <p>
            Each Legion will present a series of themed special Rules for Units
            of that Faction, including a Legion Tactica, as well as new Advanced
            Reactions and Gambits available to Units of that Legion.
          </p>
          <h4>ARMOURY</h4>
          <p>
            Each Legion will have an Armoury section, detailing additional
            Wargear available to Units from that Legion.
          </p>
          <h4>UNIT PROFILES</h4>
          <p>
            Each Legion will also have a section detailing Units available only
            to that Legion, including notable Unique characters including that
            Legion's Primarch.
          </p>
        </div>
        <p>
          Each time you select a Faction Trait from the list above, you must
          then select a Rite of War to use for all Units from your Army that
          have that Trait. Each Legion will have one or more Rites of War
          included in this book, and additional ones will be available in future
          publications.
        </p>
        <h3 id="auxilary">Legiones Aastartes Auxilary Detachments</h3>
        <p>
          An army can include any number of Auxiliary Detachments, depending on
          the number and type of Command Choices selected.
        </p>
        <p>
          In addition to the Auxiliary Detachments presented in the Age of
          Darkness Rulebook, armies which make use of the Legiones Astartes Army
          List have access to a number of additional Auxiliary Detachments.
          These follow all the standard Rules for Auxiliary Detachments, but may
          have certain restrictions upon which Unit is used to fill the Command
          Force Organisation Slot which allows their selection. Additionally,
          certain Auxiliary Detachments allow Units to be selected from an Army
          List which is different to that used to fill the Primary, Allied or
          Apex Detachment to which they are linked. In this case, when an
          Auxiliary Detachment specifies which Army List Units selected for it
          are drawn from, this overrules the usual restrictions upon Army Lists
          presented in the Crusade Army Selection Rules.
        </p>
        <div class="border detach">
          <h4>Daemonic Manifestation [Auxillary Detachment]</h4>
          <p>
            When an Esoterist Unit with the Traitor Allegiance is selected to
            fill a Command Force Organisation Slot, then the Player may choose
            to add one Daemonic Manifestation Auxiliary Detachment to the Army
            instead of the options available in the Crusade Force Organisation
            Chart.
          </p>
          <div class="detach-string">
            <div class="role ha"></div>
            <div class="role ha"></div>
            <div class="role ha"></div>
          </div>
          <p>
            Heavy Assault Slots in this Detachment may only be used to select
            Ruinstorm Daemon Brute Units from the Daemons of the Ruinstorm Army
            List.
          </p>
        </div>
        <div class="border detach">
          <h4>Veteran Cadre [Auxillary Detachment]</h4>
          <p>
            When a Legion Champion Unit is selected to fill a Command Force
            Organisation Slot, then the Player may choose to add one Veteran
            Cadre Auxiliary Detachment to the Army instead of the options
            available in the Crusade Force Organisation Chart.
          </p>
          <div class="detach-string">
            <div class="role retune"></div>
            <div class="role elite"></div>
            <div class="role ht"></div>
          </div>
          <p></p>
        </div>
        <div class="border detach">
          <h4>Apotecarion Delegation [Auxillary Detachment]</h4>
          <div class="detach-string">
            <div class="role-p support-p"></div>
            <div class="role support"></div>
            <div class="role support"></div>
          </div>
          <div class="detach-string">
            <div class="role support"></div>
            <div class="role support"></div>
            <div class="role support"></div>
          </div>
          <p>
            Support Slots in this Detachment may only be used to select
            Apothecary Units.
          </p>
        </div>
        <div class="border detach">
          <h4>Techmarine Covenant [Auxillary Detachment]</h4>
          <div class="detach-string">
            <div class="role-p support-p"></div>
            <div class="role support"></div>
            <div class="role support"></div>
          </div>
          <div class="detach-string">
            <div class="role support"></div>
            <div class="role support"></div>
            <div class="role support"></div>
          </div>
          <p>
            Support Slots in this Detachment may only be used to select
            Techmarine Units.
          </p>
        </div>
        <div class="border detach">
          <h4>Storm Battery [Auxillary Detachment]</h4>
          <p>
            When a Siege Breaker Unit is selected to fill a Command Force
            Organisation Slot, then the Player may choose to add one Storm
            Battery Auxiliary Detachment to the Army instead of the options
            available in the Crusade Force Organisation Chart.
          </p>
          <div class="detach-string">
            <div class="role support"></div>
            <div class="role support"></div>
            <div class="role armour"></div>
            <div class="role armour"></div>
          </div>
          <p>
            Support Slots in this Detachment may only be used to select Rapier
            Battery Units. Armour Slots in this Detachment may only be used to
            select Arquitor Bombard or Vindicator Siege Tank Units.
          </p>
        </div>
        <div class="border detach">
          <h4>Recon Demi-Company [Auxillary Detachment]</h4>
          <p>
            When a Vigilator Unit is selected to fill a Command Force
            Organisation Slot, then the Player may choose to add one Recon
            Demi-company Auxiliary Detachment to the Army instead of the options
            available in the Crusade Force Organisation Chart.
          </p>
          <div class="detach-string">
            <div class="role-p recon-p"></div>
            <div class="role recon"></div>
            <div class="role recon"></div>
            <div class="role fa"></div>
          </div>
          <p>
            Recon Slots in this Detachment may only be used to select
            Reconnaissance Squad Units.
          </p>
        </div>
        <div class="border detach">
          <h4>Linebreaker Echelon [Apex Detachment]</h4>
          <p></p>
          <div class="detach-string">
            <div class="role-p ha-p"></div>
            <div class="role ha"></div>
            <div class="role retune"></div>
            <div class="role we"></div>
          </div>
          <p>
            When a Linebreaker Echelon Apex Detachment is selected for an Army,
            the Controlling Player must select one of the following words:
            'Saturnine', 'Cataphractii' or 'Tartaros'. Retinue and Heavy Assault
            Slots in this Detachment may only be used to select Units whose Unit
            Name includes the selected word.
          </p>
        </div>
        <div class="border detach">
          <h4>Maelstrom Sentry Battery [Auxillary Detachment]</h4>
          <p>
            When a Master of Signals Unit is selected to fill a Command Force
            Organisation Slot, then the Player may choose to add one Maelstrom
            Sentry Battery Auxiliary Detachment to the Army instead of the
            options available in the Crusade Force Organisation Chart.
          </p>
          <div class="detach-string">
            <div class="role support"></div>
            <div class="role support"></div>
          </div>
          <div class="detach-string">
            <div class="role recon"></div>
            <div class="role recon"></div>
            <div class="role recon"></div>
          </div>
          <p>
            Support Slots in this Detachment may only be used to select Araknae
            Quad Accelerator Platform Units, and Recon Slots in this Detachment
            may only be ced to select Tarantula Battery Units.
          </p>
        </div>

        <h3 id="APA">Additional Prime Advantage</h3>
        <p>
          The following Prime Advantage is available to Detachments using the
          Legiones Astartes Army List in an Army with the Traitor Allegiance.
        </p>
        <div class="border">
          <h4>Corrupted Legions</h4>
          <p>
            If a Unit from the Legiones Astartes Army List with the Traitor
            Allegiance is selected to fill a Prime Slot, the Controlling Player
            can select the following Prime Advantage:
          </p>
          <p class="bold">True Believers</p>
          <p>
            All Models in the Unit selected to fill the Prime Slot gain the
            Malefic Sub-Type.
          </p>
          <p class="bold">Malefic</p>
          <p>
            The following Rules apply to all Models with the Malefic Sub-Type:
          </p>
          <ul class="unit-list">
            <li>
              When a Unit composed entirely of Models with the Malefic Sub-Type
              would gain a Tactical Status of any kind, that Tactical Status is
              not applied to the Models in the Unit, but instead the Unit
              suffers D3 automatic wounds with an AP of 2, a Damage of 1 against
              which no Saving Throws of any kind may be made. Once these wounds
              are resolved, no Tactical Status is applied to any Model in the
              Unit.
            </li>
            <li>
              Models with the Malefic Sub-Type are not affected by Special Rules
              that negatively modify their Leadership, Cool, Willpower or
              Intelligence Characteristics.
            </li>
            <li>
              No Model that does not also have the Malefic Sub-Type may join or
              be joined by a Unit that includes one or more Models with the
              Malefic Sub-Type.
            </li>
          </ul>
        </div>
        <h3 id="decurions">Legiones Decurion</h3>
        <p>
          A Legiones Decurion may be selected as an upgrade for some Models with
          the Vehicle Type selected from the Legiones Astartes Army List. Each
          Legiones Decurion upgrade will specify which Models it may be selected
          as an upgrade for. No Unit may have more than one Legiones Decurion
          upgrade selected for it.
        </p>
        <p>
          Each Legiones Decurion upgrade must be paid for at a cost in Points,
          as indicated in the entry for that Legiones Decurion upgrade. Once
          upgraded, that Model gains a number of new Special Rules and/or items
          of additional Wargear.
        </p>
        <p>
          All Legiones Decurion upgrades must be visually represented on the
          upgraded Model by a suitable Model placed in an otherwise empty cupola
          or hatch.
        </p>
        <div>
          <h4>Decurion Defensor</h4>
          <p>
            This upgrade may be selected for any of the following Units from the
            Legiones Astartes Army List. A Model with this upgrade must also
            have a Pintle Mounted Weapon (excluding a Pintle Mounted havoc
            launcher):
          </p>
          <ul class="unit-list">
            <li>+20 points for Predator</li>
            <li>
              +20 points for Sicaran (Models with twin accelerator autocannon or
              punisher rotary cannon)
            </li>
            <li>+30 points for Kratos Assault Tank</li>
          </ul>
          <p>A Model with this upgrade gains the Point Defence Special Rule.</p>
          <div class="border">
            <p class="bold">Point Defence</p>
            <p>
              When a Model with this Special Rule is the Target of a Charge,
              during Step 4 of the Charge Procedure, a Model with this Special
              Rule may make an additional Volley Attack. This additional Volley
              Attack is made as a separate Shooting Attack after resolving its
              first Volley Attack and the Controlling Player must select only
              one Pintle Mounted Weapon to make attacks as part of this second
              Volley Attack. If any Models are Removed as a Casualty as a result
              of this Model's Shooting Attacks as part of this Volley Attack,
              the Charging Unit subtracts 1 from the result of any Charge Rolls
              made during this Phase.
            </p>
          </div>
        </div>
        <div>
          <h4>Decurion Locus</h4>
          <p>
            This upgrade may be purchased for any of the following Units from
            the Legiones Astartes Army List:
          </p>
          <ul class="unit-list">
            <li>+30 points for Predator</li>
            <li>
              +30 points for Sicaran (Models with twin accelerator autocannon or
              punisher rotary cannon)
            </li>
            <li>+40 points for Kratos Assault Tank</li>
          </ul>
          <p>
            A Model with this upgrade has an augury scanner and gains the Locus
            Strike Special Rule.
          </p>
          <div class="border">
            <p class="bold">Locus Strike</p>
            <p>
              When making a Return Fire Reaction for a Model with this Special
              Rule, any Turret Mounted Weapons are treated as Defensive Weapons
              regardless of their Characteristics. If the Turret Mounted Weapon
              on a Model with this Special Rule is already a Defensive Weapon,
              the Controlling Player of that Model can instead add +1 to Hit
              Tests made for that Weapon's Fire Group when making that Reaction.
            </p>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Dark_Angels'">
        <h2 id="DA">Dark Angels</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>
            <div>
              <p>
                Any Model with the Command, Champion or Sergeant Sub-Type and
                the Dark Angels Trait may have its power sword exchanged for one
                Calibanite warblade for +5 Points per Model.
              </p>
              <MeleeWeaponTemplate
                :mweaponData="mweapons['calibanite warblade']"
                :withoutName="true"
              />
              <p>
                Any Model with the Command or Champion Sub-Type and the Dark
                Angels Trait may have its power fist exchanged for one Terranic
                greatsword for Free.
              </p>
              <MeleeWeaponTemplate
                :mweaponData="mweapons['terranic greatsword']"
                :withoutName="true"
              />
              <p>
                The following item is added to the Legion Special Weapons list
                when selecting Wargear options for a Model with the Dark Angels
                Trait for 15 points:
              </p>
              <RangeWeaponTemplate
                :rweaponData="rweapons['plasma repeater']"
                :withoutName="true"
              />
            </div>
            <div>
              <h5>Paladin of the Hekatonystika</h5>
              <p>
                If a Centurion in Terminator Armour that has the Dark Angels
                Trait is selected to fill a Prime Force Organisation Slot, the
                Paladin of the Hekatonystika Prime Advantage can be selected for
                it. If this Prime Advantage is selected for a Centurion in
                Terminator Armour, its power weapon is exchanged for a Terranic
                greatsword for Free instead of its bolter.
              </p>
              <p>
                If a Centurion or Centurion with Jump Pack that has the Dark
                Angels Trait is selected to fill a Prime Force Organisation
                Slot, the following Prime Advantage can be selected:
              </p>

              <p class="bold">Paladin of the Hekatonystika</p>
              <p>
                This Prime Advantage can only be selected once per Army. One
                Model in the Unit selected to fill a Prime Force Organisation
                Slot with this Prime Advantage gains the following benefits:
              </p>
              <ul>
                <li>
                  Has its Base Weapon Skill Characteristic modified by +1.
                </li>
                <li>
                  Must have its bolter exchanged for a Terranic greatsword for
                  Free.
                </li>
                <li>
                  Gains the Order Exemplars Special Rule (see Inner Circle
                  Kights Cenobium Profile)
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5>Rite of War: Legiones Astartes Dark Angels</h5>
            <h4>Legion Tactica: The Angels of Death</h4>
            <p>
              All Models with the Dark Angels Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>

            <p>
              Models with this Special Rule may never have their Leadership
              Characteristic modified to less than 6. Additionally, any variant
              of the Fear (X) Special Rule may only reduce the Leadership,
              Willpower, Cool and Intelligence Characteristics of any Model with
              this Special Rule by a maximum of 1, regardless of the value of X.
            </p>
            <h4>Gambit: Sword of the Order</h4>
            <p>
              When selecting a Gambit, the Controlling Player of a Model with
              the Dark Angels Trait can select Sword of the Order instead of any
              others available to that Model:
            </p>
            <p class="bold">
              This Gambit may be chosen when using sword Weapons in Challenges.
            </p>
            <p>
              If this Gambit is selected, then as long as the Model under this
              Player's control is declared to be using a chainsword, power
              sword, force sword, paragon blade or Weapon with the Sword of the
              Order Trait, in Step 3 of the Challenge Sub-Phase, that Weapon's
              Attacks Modifier Characteristic is modified by -1 and it gains the
              Critical Hit (6+) Special Rule, or improves the value of X of an
              existing version of Critical Hit (X) it already possessed by +1.
            </p>
            <h4>Additional Detachments</h4>
            <p>
              An Army that has a Primary Detachment with the Dark Angels Faction
              may select the following Auxiliary Detachments using the standard
              Rules for the selection of such Detachments as prese nted in the
              Age of Darkness Core Rules:
            </p>
            <div class="border detach">
              <h4>Ironwing Gauntlet [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role ht"></div>
                <div class="role ht"></div>
                <div class="role armour"></div>
                <div class="role armour"></div>
              </div>
              <p></p>
            </div>
            <div class="border detach">
              <h4>Deathwing Cadre [Apex Detachment]</h4>
              <div class="detach-string">
                <div class="role-p support-p"></div>
                <div class="role support"></div>
                <div class="role support"></div>
              </div>
              <p>
                Support Slots in this Detachment may only be used to select
                Dreadwing lnteremptor Units or Rapier Battery Units.
              </p>
            </div>
            <div class="border detach">
              <h4>Stormwing Muster [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p troops-p"></div>
                <div class="role-p troops-p"></div>
                <div class="role transport"></div>
                <div class="role transport"></div>
              </div>
              <p></p>
            </div>
            <div class="border detach">
              <h4>Ravenwing Lance [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p fa-p"></div>
                <div class="role fa"></div>
                <div class="role recon"></div>
                <div class="role recon"></div>
              </div>
              <p>
                Recon Slots in this Detachment may only be used to select
                Outrider Squadron Units.
              </p>
            </div>
            <div class="border detach">
              <h4>Deathwing Conclave [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p retune-p"></div>
                <div class="role elite"></div>
                <div class="role ha"></div>
              </div>
              <p></p>
            </div>
            <div class="border detach">
              <h4>Firewing Echelon [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p recon-p"></div>
                <div class="role recon"></div>
                <div class="role elite"></div>
                <div class="role elite"></div>
              </div>
              <p>
                Elite Slots in this Detachment may only be used to select Seeker
                Squad Units.
              </p>
            </div>
            <h4>Advanced Reaction: Vengeance of the First Legion</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the Dark Angels Trait can spend Reaction Points to make the
              following Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction allows the Controlling Player to choose to repeat
              the Fight Sub-Phase.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span> Once per Battle, the Reactive
                Player may declare the Vengeance of the First Legion Advanced
                Reaction after the last Initiative Step of a Combat that
                includes a Unit under that Player's control which only includes
                Models with the Dark Angels Trait has been resolved, but before
                the Make Final Pile-in Moves Step.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare the Vengeance of
                the First Legion Advanced Reaction, this cost paid as soon as
                the declaration is made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always a
                Unit in that Combat which only includes Models with the Dark
                Angels Trait. That Unit is the Reacting Unit.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul numeric">
                  <li>
                    Instead of Proceeding to the Make Final Pile-in Moves Step
                    of that Combat, the Players must return to Step 1 of that
                    Combat and resolve it a second time, discarding any Combat
                    Resolution Points gained during the first round (but not
                    Combat Resolution Points scored from any Challenges during
                    that Combat).
                  </li>
                  <li>
                    Models in the Reacting Unit gain the Shred (6+) Special Rule
                    on any Weapons they have with the Sword of the Order Trait.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'White_Scars'">
        <h2 id="WS">White Scars</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Space_Wolves'">
        <h2 id="SW">Space Wolves</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Imperial_Fists'">
        <h2 id="IF">Imperial Fists</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>
            <RangeWeaponTemplate
              :rweaponData="rweapons['iliastus assault cannon']"
              :withoutName="true"
            />
            <p>
              The following item is added to the Legion Heavy Weapons list when
              selecting Wargear options for a Model with the Imperial Fists
              Trait, with Heavy Support Squads that make use of this option
              referred to as Iliastus Support Squads:
            </p>
            <ul>
              <li>+20 points for Iliastus assault cannon</li>
            </ul>
            <p>
              The following item is added to the Legion Sponson Weapons list
              when selecting Wargear options for a Model with the Imperial Fists
              Trait:
            </p>
            <ul>
              <li>
                +30 points for Two Sponson Mounted Iliastus assault cannon
              </li>
            </ul>
            <p>
              The following item is added to the Legion Pintle Weapons list when
              selecting Wargear options for a Model with the Imperial Fists
              Trait:
            </p>
            <ul>
              <li>+20 points for Pintle Mounted Iliastus assault cannon</li>
            </ul>
            <p>
              Any Model with the Command, Champion or Sergeant Sub-Type and the
              Imperial Fists Trait may have its power fist exchanged for one
              Solarite power gauntlet for +5 Points per Model.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['solarite power gauntlet']"
              :withoutName="true"
            />

            <p class="bold">Vigil Pattern Storm Shield</p>

            <ul>
              <li>
                Any Model with the Command Sub-Type and the Imperial Fists Trait
                may have its boarding shield or a combi-bolter exchanged for one
                Vigil pattern storm shield for +5 Points per Model or its combat
                shield exchanged for one Vigil pattern storm shield for +10
                Point per Model.
              </li>
              <li>
                Any Model with the Im perial Fists Trait in a Tartaros
                Tem1inator Command Squad or Tartaros Terminator Squad may have
                its combi-bolter exchanged for one Vigil pattern storm shield
                for +5 Points per Model.
              </li>
              <li>
                Any Model with the Imperial Fists Trait in a Cataphractii
                Terminator Command Squad or Cataphractii Terminator Squad may
                have its combi-bolter exchanged for one Vigil pattern storm
                shield for Free.
              </li>
            </ul>
            <p>
              A Model with a Vigil pattern storm shield has a 4+ Invulnerable
              Save. In addition, it gains the Shield Trait and the Heavy
              Sub-Type.
            </p>

            <h5>Castellan</h5>
            <p>
              If a Centurion Model that has the Imperial Fists Trait is selected
              to fill a Prime Force Organisation Slot, the following Prime
              Advantage can be selected:
            </p>
            <p class="bold">Castellan</p>
            <p>
              A Model selected to fill a Prime Force Organisation Slot with this
              Prime Advantage:
            </p>
            <ul class="numeric">
              <li>Gains an augury scanner</li>
              <li>
                Cannot select any of the Centurion's listed options and instead
                must have their bolter exchanged for one of the following
                options for Free:
                <ul>
                  <li class="disc">Heavy Bolter</li>
                  <li class="disc">Autocannon</li>
                  <li class="disc">Iliastus Assault Cannon</li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h4>Decurion Saggitar</h4>
            <p></p>
            <ul class="unit-list">
              <li>+30 points for Predator</li>
              <li>
                +30 points for Sicaran (Models with twin accelerator autocannon
                or punisher rotary cannon)
              </li>
              <li>+30 points for Kratos Assault Tank</li>
            </ul>
            <p>
              A Model with this upgrade gains a Pintle Mounted Iliastus assault
              cannon and an augury scanner. Additionally, the Pintle Mounted
              Iliastus assault cannon gains the Skyfire and the Precision (6+)
              Special Rules.
            </p>
          </div>
          <div>
            <h5>Rite of War: Legiones Astartes Imperial Fists</h5>
            <h4>Legion Tactica: Fire Discipline</h4>
            <p>
              All Models with the Imperial Fists Trait (excluding Models with
              the Vehicle Type) are subject to the following Special Rule:
            </p>
            <p>
              When making a Shooting Attack for a Unit that only includes Models
              with this Special Rule, add +1 to the result of Hit Tests made for
              attacks in any Fire Groups that include more than five Dice or
              attacks and that have the Bolt or Auto Trait.
            </p>
            <h4>Gambit: A Wall Unyielding</h4>
            <p>
              When selecting a Gambit, the Controlling Player of a Model with
              the Imperial Fists Trait can select A Wall Unyielding instead of
              any others available to that Model:
            </p>
            <p>
              While this Gambit is selected, the Controlling Player does not add
              their Combat Initiative to the result of the Focus Roll, but gains
              the Eternal Warrior(1) Special Rule for the duration of the Strike
              Step.
            </p>
            <h4>Additional Detachment</h4>
            <p>
              An Army that has a Primary Detachment with the Imperial Fists
              Faction may select the following Detachment:
            </p>
            <div class="border detach">
              <h4>Siege Gauntlet [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role troops-p"></div>
                <div class="role troops"></div>
                <div class="role ha"></div>
                <div class="role support"></div>
              </div>
              <p>
                Troops Slots in this Detachment may only be used to select
                Breacher Squad Units.
              </p>
            </div>

            <h4>Advanced Reaction: Bastion of Fire</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the Imperial Fists Trait can spend Reaction Points to make the
              following Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction allows the Reacting Unit to make a Shooting Attack
              targeting an Enemy Unit that Moves within range.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span> Once per Battle, the Reactive
                Player may declare the Bastion of Fire Advanced Reaction in
                <Tooltip word="Step 2" :tooltip-text="moveSteps" /> of the Move
                Sub-Phase process, if an enemy Unit ends a move within 10" and
                in Line of Sight of a Unit under the Reactive Player's control
                capable of making a Shooting Attack with at least one Weapon it
                has targeting that Unit. The Reacting Unit must be a Unit under
                the Reactive Player's Control that only includes Models with the
                Imperial Fis ts Trait that does not have the Vehicle Type.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare the Bastion of Fire
                Advanced Reaction, this cost paid as soon as the declaration is
                made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Move triggered the Reaction.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="numeric">
                  <li>
                    Once the Bastion of Fire Advanced Reaction has been
                    declared, the Reactive Player makes a Shooting Attack with
                    the Reacting Unit, targeting only the Target Unit.
                  </li>
                  <li>
                    Once the Shooting Attack made as part of this Reaction has
                    been completely resolved, including removing any Casualties,
                    the Active Player must then proceed with the remainder of
                    their Movement Phase.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Blood_Angels'">
        <h2 id="BA">Blood Angels</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Iron_Hands'">
        <h2 id="IH">Iron Hands</h2>
        <div>
          <h5>Weapon and Wargear</h5>

          <div>
            <p>
              Any Model with the Command or Champion Sub-Type and the Iron Hands
              Trait may have its plasma pistol exchanged for one graviton pistol
              for +5 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['graviton pistol']"
              :withoutName="true"
            />
          </div>
          <div>
            <p>
              The following items are added to the Legion Special Weapons list
              when selecting Wargear options for a Model with the Iron Hands
              Trait:
            </p>
            <ul>
              <li>Graviton Gun (+10 Points)</li>
              <li>Graviton Shredder (+15 Points)</li>
            </ul>
            <RangeWeaponTemplate
              :rweaponData="rweapons['graviton shredder']"
              :withoutName="true"
            />
          </div>
          <div>
            <p class="bold">Armatus Necrotechnika</p>
            <p>
              Any Model with the Iron Hands Trait and the Vehicle Type may have
              Armatus Necrotechnika selected for it for +10 Points per Model.
            </p>
            <p>
              A Model with Armatus Necrotechnika gains the Auto-Repair (5+)
              Special Rule. Additionally, if any Models were Removed as
              Casualties from a Unit that has any Models within 6" of a Model
              with Armatus Necrotechnika during the same Turn as a Repair Roll
              is made for that Model, the Controlling Player can add 1 to the
              result of the Repair Roll.
            </p>
          </div>
          <div>
            <p class="bold">Gorgon Terminator Armour</p>
            <p>
              The following Models can have Gorgon Terminator Armour selected
              for them for +30 Points per Model:
            </p>
            <ul>
              <li>Iron Father</li>
              <li>Tartaros Praetor</li>
              <li>Tartaros Centurion</li>
              <li>Tartaros Warmonger</li>
              <li>Tartaros Librarian</li>
              <li>Tartaros Esoterist</li>
              <li>Tartaros Legion Champion</li>
              <li>Tartaros Chaplain</li>
              <li>Tartaros Herald</li>
              <li>Tartaros Siege Breaker</li>
              <li>Tartaros Forge Lord</li>
              <li>Tartaros Primus Medicae</li>
              <li>Tartaros Delegatus</li>
              <li>Tartaros Mortificator</li>
            </ul>
            <p>
              A Model with Gorgon Terminator Armour gains the Heavy Sub-Type and
              the Feel No Pain (5+) Special Rule and the Gorgon pattern
              Terminator Armour Wargear:
            </p>
            <div class="unit__additional-rules">
              <h4>Gorgon Pattern Terminator Armour</h4>
              <div>
                <p class="brief">
                  Successful Armour Tests and Invulnerable Tests may inflict
                  Tactical Statuses on enemy Models.
                </p>
                <div>
                  At the end of Step 4 of the Assault Phase, if any Models with
                  Gorgon pattern Terminator armour passed at least one Armour or
                  Invulnerable Test against wounds caused by Shooting Attacks in
                  the same Assault Phase, the Unit which inflicted those wounds
                  must make a Cool Check. If the Check is failed, the Unit gains
                  the Suppressed Status.
                </div>
              </div>
            </div>
          </div>
          <div>
            <h5>The Iron-clad</h5>
            <p>
              If a Unit which only includes Models with the Iron Hands Trait and
              the Command Battlefield Role is selected to fill a Prime Force
              Organisation Slot, the following Prime Advantage can be selected:
            </p>

            <p class="bold">The Iron-clad</p>
            <p>
              This Prime Advantage can only be selected once per Army. Add one
              additional War Engine Battlefield Role Slot to the Detachment that
              includes the Prime Force Organisation Slot with this Prime
              Advantage. A Unit that is selected to fill that Slot gains the
              Champion Sub-Type if it did not already have it.
            </p>
          </div>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Iron Hands</h5>
          <h4>Legion Tactica: The Gorgon's Scales</h4>
          <p>
            All Models with the Iron Hands Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rule:
          </p>

          <p>
            The Ranged Strength of attacks made as part of a Shooting Attack are
            modified by -1 when resolving Wound Tests against a Unit that
            includes only Models with this Special Rule.
          </p>
          <h4>Gambit: Legion of One</h4>
          <p>
            When selecting a Gambit, the Controlling Player of a Model with the
            Iron Hands Trait can select Legion of One instead of any others
            available to that Model:
          </p>
          <p>
            When this Gambit is selected, the Model it is selected for gains
            double the normal bonus to their Focus Roll they would normally gain
            from Outside Support. In addition, when this Gambit is selected,
            their opponent can only ever gain a maximum bonus of +2 from Outside
            Support.
          </p>
          <h4>Additional Detachments</h4>
          <p>
            An Army that has a Primary Detachment with the Iron Hands Faction
            may select the following Detachments:
          </p>
          <div class="border detach">
            <h4>Spearhead Phalanx [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role ht"></div>
              <div class="role armour"></div>
              <div class="role ha"></div>
            </div>
            <p>
              Heavy Transport Slots in this Detachment may only be used to
              select Land Raider Carrier or Spartan Units.
            </p>
          </div>
          <div class="border detach">
            <h4>Medusan Vanguard [Apex Detachment]</h4>
            <div class="detach-string">
              <div class="role-p command-p"></div>
              <div class="role ha"></div>
              <div class="role ha"></div>
            </div>
            <div class="detach-string">
              <div class="role support"></div>
              <div class="role we"></div>
            </div>
            <p>
              The Command Slot in this Detachment may only be used to select a
              Praevian Unit. This Detachment may only be selected if your army
              also includes an Iron Father or Ferrus Manus Unit.
            </p>
          </div>
          <h4>Advanced Reaction: Spite Of The Gorgon</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Iron Hands Trait can spend Reaction Points to make the Spite Of
            The Gorgon Advanced Reaction:
          </p>
          <p class="bold">
            This Reaction allows the Reacting Unit to make a Shooting Attack
            targeting a Unit that makes a Charge.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> Once per Battle, the Reactive
              Player may declare the Spite of the Gorgon Advanced Reaction at
              the start of
              <Tooltip word="Step 3" :tooltip-text="chargeSteps" /> of the
              Charge process of any Charge declared by the Active Player that
              targets a Unit under the Reactive Player's Control that only
              includes Models with the Iron Hands Trait.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare the Spite of the
              Gorgon Advanced Reaction, this cost paid as soon as the
              declaration is made.
            </div>
            <div>
              <span class="bold">Target:</span> The Target Unit is always the
              Unit whose Charge triggered the Advanced Reaction. The Reacting
              Unit is always the Unit that was declared as the target of the
              Charge that triggered this Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul numeric">
                <li>
                  Once the Spite of the Gorgon Advanced Reaction has been
                  declared, the Reactive Player makes a Shooting Attack with the
                  Reacting Unit.
                </li>
                <li>
                  This Shooting Attack must target the Target Unit and is made
                  at full Ballistic Skill, not as Snap Shots, and may be made
                  using any Ranged Weapon. Until this Shooting Attack is
                  resolved, Weapons selected for it have their Firepower
                  Characteristic modified by +1 and gain the Overload (1)
                  Special Rule. If that Weapon already has the Overload (X)
                  Special Rule, improve the value of X on that Special Rule by
                  +1.
                </li>
                <li>
                  After resolving this Shooting Attack, the Active Player
                  proceeds with
                  <Tooltip word="Step 3" :tooltip-text="chargeSteps" /> of that
                  Charge as normal. The Reactive Player may not make Volley
                  Attacks during
                  <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of that
                  Charge, even if the Active Player chooses to do so.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Ultramarines'">
        <h2 id="U">Ultramarines</h2>
        <div>
          <h5>Weapon and Wargear</h5>

          <div>
            <p>
              Any Model with the Command, Champion or Sergeant Sub-Type and the
              Ultramarines Trait may have its power axe exchanged for one
              Legatine axe for +5 Points per Model.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['legatine axe']"
              :withoutName="true"
            />
          </div>
          <div>
            <p>
              Any Model with the Command or Champion Sub-Type and the
              Ultramarines Trait have one Argyrum pattern boarding shield
              selected for it for +15 Points per Model.
            </p>
            <p class="bold">Argyrum Pattern Boarding Shield</p>
            <p>
              A Model with a Argyrum pattern boarding shield has a 5+
              Invulnerable Save, increasing to a 4+ Invulnerable Save against
              Wounds inflicted by Melee Weapons. In addition, it gains the
              Shield Trait and the Heavy Sub-Type.
            </p>
          </div>
          <div>
            <h5>Logisticae</h5>
            <p>
              If a Unit which only includes Models with the Ultramarines Trait
              that have the Command Battlefield Role is selected to fill a Prime
              Force Organisation Slot, the following Prime Advantage can be
              selected:
            </p>

            <p class="bold">Logisticae</p>
            <p>
              Add one additional Transport or Heavy Transport Battlefield Role
              Slot to the Detachment that includes the Prime Force Organisation
              Slot with this Prime Advantage. Modify the Transport Capacity of a
              Unit that is selected to fill that Slot by +2.
            </p>
          </div>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Ultramarines</h5>
          <h4>Legion Tactica: Tactical Flexibility</h4>
          <p>
            All Models with the Ultramarines Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rule:
          </p>
          <p>
            Once per Tum, when declaring a Reaction for a Unit that only
            contains Models with this Special Rule, the Controlling Player may
            choose to activate the Tactical Flexibility Special Rule. When they
            do, modify the Reaction Point cost of that Reaction by -1, to a
            minimum of 0
          </p>
          <h4>Gambit: Aegis of Wisdom</h4>
          <p>
            When this Gambit is selected, the Controlling Player gains no
            Outside Support bonus to their Focus Roll, but instead adds a +l
            modifier to their Focus Roll for every friendly Model with both the
            Command Sub-Type and the Ultramarines Trait on the battlefield,
            excluding the Model for which this Gambit was selected.
          </p>
          <h4>Additional Detachment</h4>
          <p></p>
          <div class="border detach">
            <h4>Primus Demi-Company [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role-p command-p"></div>
              <div class="role troops"></div>
              <div class="role troops"></div>
            </div>
            <div class="detach-string">
              <div class="role support"></div>
              <div class="role fa"></div>
            </div>
            <p>
              The Command Slot in this Detachment may only be used to select an
              Optae Unit.
            </p>
          </div>

          <h4>Advanced Reaction: Retribution Strike</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Ultramarines Trait can spend Reaction Points to make the
            Retribution Strike Advanced Reaction:
          </p>
          <p class="bold">
            This Reaction allows a Unit to return fire in response to an enemy
            Shooting Attack directed at a friendly Unit.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> Once per Battle, the Reactive
              Player may declare the Retribution Strike Advanced Reaction in the
              Shooting Phase, during
              <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
              Shooting Attack sequence of any Shooting Attack made by the Active
              Player that targets a Unit that only includes Models with the
              Ultramarines Trait.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare the Retribution
              Strike Advanced Reaction, this cost paid as soon as the
              declaration is made.
            </div>
            <div>
              <span class="bold">Target:</span> For the Retribution Strike
              Reaction, the Target Unit is always the Unit whose Shooting Attack
              triggered the Reaction. The Reactive Player can select which Unit
              is the Reacting Unit, however the Unit must meet the following
              criteria:
            </div>
            <ul>
              <li>
                It is not the target of the enemy Shooting Attack that triggered
                this Reaction
              </li>
              <li>
                At least one Model in the Unit has Line of Sight to the enemy
                Unit that triggered this Reaction.
              </li>
              <li>It is eligible to make a Reaction.</li>
              <li>It is eligible to make a Shooting Attack.</li>
              <li>
                It is entirely composed of Models with the Ultramarines Trait.
              </li>
            </ul>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul numeric">
                <li>
                  Once the Reacting Unit has been selected, the Active Player
                  must then resolve all remaining Steps of the Shooting Attack
                  process as normal, up to the start of
                  <Tooltip word="Step 11" :tooltip-text="shootSteps" />.
                </li>
                <li>
                  Before resolving Step 11, the Reactive Player makes a Shooting
                  Attack with the Reacting Unit, targeting only the Target Unit.
                </li>
                <li>
                  Once this Shooting Attack has been completely resolved,
                  including removing any Casualties, the Players must then
                  finish resolving Step 11 of the original Shooting Attack that
                  triggered the Reaction.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Salamanders'">
        <h2 id="S">Salamanders</h2>
        <div>
          <h5>Weapon and Wargear</h5>

          <div>
            <p>
              Any Model with the Command or Champion Sub-Type and the
              Salamanders Trait may have Drakenscale selected for it for +10
              Points per Model.
            </p>
            <div class="border">
              <p class="bold">Drakenscale</p>
              <p>
                Wounds with the Flame, Plasma, Melta or Volkite Trait allocated
                to a Model with Drakenscale have their Damage Characteristic set
                to 1.
              </p>
            </div>

            <p>
              Any Model with the Command, Champion, Specialist or Sergeant
              Sub-Type and the Salamanders Trait may have their power weapon
              exchanged for one of the following for +5 Points per Model:
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted power sword']"
              :withoutName="true"
            />
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted power axe']"
              :withoutName="true"
            />
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted power maul']"
              :withoutName="true"
            />
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted power lance']"
              :withoutName="true"
            />
            <p>
              Any Model with the Command, Champion, Specialist or Sergeant
              Sub-Type and the Salamanders Trait may have its power fist
              exchanged for one forge-crafted power fist for +10 Points per
              Model.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted power fist']"
              :withoutName="true"
            />
            <p>
              Any Model with the Command, Champion or Specialist Sub-Type and
              the Salamanders Trait may have its thunder hammer exchanged for
              one forge-crafted thunder hammer for +10 Points per Model.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['forge-crafted thunder hammer']"
              :withoutName="true"
            />
            <p>
              Any Model with the Sergeant Sub-Type and the Salamanders Trait may
              have its hand flamer exchanged for one forge-crafted hand flamer
              for +5 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['forge-crafted hand flamer']"
              :withoutName="true"
            />
            <p>
              Any Model with the Sergeant Sub-Type and the Salamanders Trait may
              have its flamer exchanged for one forge-crafted flamer for +10
              Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['forge-crafted flamer']"
              :withoutName="true"
            />
            <p>
              Any Model with the Sergeant Sub-Type and the Salamanders Trait may
              have its heavy flamer exchanged for one forge-crafted heavy flamer
              for +10 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['forge-crafted heavy flamer']"
              :withoutName="true"
            />
          </div>
          <div>
            <h5>Duty Before Death</h5>
            <p>
              If a Unit which only includes Models with the Salamanders Trait
              that has the Troops Battlefield Role is selected to fill a Prime
              Force Organisation Slot, the following Prime Advantage can be
              selected:
            </p>

            <p class="bold">Duty Before Death</p>
            <p>
              Models in a Unit selected to fill a Prime Force Organisation Slot
              with this Prime Advantage gain the Feel No Pain (6+)Special Rule.
            </p>
          </div>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Salamanders</h5>
          <h4>Legion Tactica: Promethean Endurance and Blood of Fire</h4>
          <p>
            All Models with the Salamanders Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rules:
          </p>
          <p class="bold">Promethean Endurance</p>
          <p>
            Wound Tests that have an unmodified result ofl or 2 that target any
            Unit that includes only Models with this Special Rule are never
            successful regardless of the Strength Characteristic of a Hit or any
            Special Rules that set the Target Number for Wound Tests. This
            Special Rule has no effect on Armour Penetration Tests.
          </p>
          <p class="bold">Blood of Fire</p>
          <p>
            A Unit made up entirely of Models with this Special Rule is
            unaffected by any variant of the Panic (X) Special Rule on Weapons
            with the Flame Trait.
          </p>
          <h4>Gambit: Duty is Sacrifice</h4>
          <p>
            When selecting a Gambit, the Controlling Player of a Model with the
            Salamanders Trait can select Legion of One instead of any others
            available to that Model:
          </p>
          <p>
            If this Gambit is selected, the Controlling Player can add a bonus
            of 1, 2 or 3 to their Focus Roll. In the Apply Damage from Unsaved
            Wounds Step of the opponent's Strike Step, the Model this Gambit was
            selected for suffers a number of wounds, each with an AP Charac
            teristic of 5 and a Damage Characteristic of 1, equal to the bonus
            to the Focus Roll applied by this Gambit, against which only Armour
            Saves, Invulnerable Saves and Damage Mitigation rolls can be taken
            as normal.
          </p>
          <h4>Additional Detachment: Immolation Covenant</h4>
          <p>
            An Army that has a Primary Detachment with the Salamanders Faction
            may select the following Detachment:
          </p>
          <div class="border detach">
            <h4>Immolation Covenant [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role-p support-p"></div>
              <div class="role support"></div>
              <div class="role armour"></div>
              <div class="role armour"></div>
            </div>
            <p>
              Armour Slots in this Detachment may only be used to select
              Predator or Vindicator Units.
            </p>
          </div>

          <h4>Advanced Reaction: Selfless Burden</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Salamanders Trait can spend Reaction Points to make the Selfless
            Burden Advanced Reaction:
          </p>
          <p class="bold">
            This Reaction allows the Reacting Unit to increase certain
            Characteristics during the Assault Phase.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> Once per Battle, the Reactive
              Player may declare the Selfless Burden Advanced Reaction at the
              start of <Tooltip word="Step 3" :tooltip-text="chargeSteps" /> of
              a Charge declared by the Active Player, targeting a Unit under
              their control which only includes Models with the Salamanders
              Trait that do not have the Vehicle Type.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare the Selfless Burden
              Advanced Reaction, this cost paid as soon as the declaration is
              made.
            </div>
            <div>
              <span class="bold">Target:</span> For a Selfless Burden Advanced
              Reaction, the Reacting Unit is always the Unit that is the target
              of the Charge that triggered this Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul numeric">
                <li>
                  All Models in the Reacting Unit have their Weapon Skill,
                  Strength and Attacks Characteristics modified by +1 until the
                  end of the current Assault Phase.
                </li>
                <li>
                  In the following Statuses Sub-Phase, the Reactive Player must
                  roll a D6 for each Model in the Reacting Unit. For each result
                  ofl, the Reacting Unit suffers 1 automatic wound with a Damage
                  Characteristic ofl, an AP of "-", against which Saving Throws
                  and Damage Mitigation Rolls may be taken.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Raven_Guard'">
        <h2 id="RG">Raven Guard</h2>
        <div>
          <h5>Weapon and Wargear</h5>

          <div>
            <ul>
              <li>
                Any Model with the Command Sub-Type and the Raven Guard Trait
                may have its lightning claw exchanged for one Raven's Talon for
                Free.
              </li>
              <li>
                Any Model with the Command Sub-Type and the Raven Guard Trait
                may have its paired lightning claws exchanged for one paired
                Raven's Talons for Free.
              </li>
            </ul>

            <MeleeWeaponTemplate
              :mweaponData="mweapons[`raven's talons`]"
              :withoutName="true"
            />
            <MeleeWeaponTemplate
              :mweaponData="mweapons[`paired raven's talons`]"
              :withoutName="true"
            />
          </div>
          <div>
            <p class="bold">Corvid Pattern Jump Pack</p>
            <p>
              Any Model from the following list with the Raven Guard Trait may
              have one Corvid pattern jump pack selected for it for +10 Points
              per Model.
            </p>
            <ul>
              <li>Praetor with Jump Pack</li>
              <li>Centurion with Jump Pack</li>
              <li>Optae with Jump Pack</li>
              <li>Moritat</li>
            </ul>
            <p>
              A Model with a Corvid pattern jump pack has their Movement
              Characteristic set to 14 and replaces any instance of the Bulky
              (X) Special Rule with Bulky (3). Each time a Dangerous Terrain
              Test is made for a Model with a Corvid pattern jump pack, that
              Test is automatically passed.
            </p>
          </div>

          
          <div>
            <h5>Wraiths</h5>
            <p>
              If a Unit which only includes Models with the Raven Guard Trait
              that has the Troops Battlefield Role is selected to fill a Prime
              Force Organisation Slot, the following Prime Advantage can be
              selected:
            </p>

            <p class="bold">Wraiths</p>
            <p>
              Models in a Unit selected to fill a Prime Force Organisation Slot
              with this Prime Advantage gain the Wraiths Special Rule.
            </p>
            <p>
              <span class="bold">Wraiths: </span>After the Controlling Player
              makes a Rush Move with a Unit that includes only Models with this
              Special Rule, they may also choose to make a Willpower Check for
              that Unit. If the Willpower Check is successful, any Charges
              targeting the selected Unit in the Assault Phase of the following
              Player Tum are Disordered. If the Willpower Check is failed, the
              selected Unit instead gains the Stunned Tactical Status.
            </p>
          </div>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Raven Guard</h5>
          <h4>Legion Tactica: Shadow Walkers</h4>
          <p>
            All Models with the Raven Guard Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rule:
          </p>

          <p>
            When a Unit that includes only Models with this Special Rule is the
            target of a Shooting Attack, all at tacks must be made as Snap Shots
            when the distance between the closest Model in the attacking Unit
            and the Target Unit is 18" or greater.
          </p>
          <h4>Gambit: Decapitation Strike</h4>
          <p>
            When selecting a Gambit, the Controlling Player of a Model with the
            Raven Guard Trait can select Legion of One instead of any others
            available to that Model:
          </p>
          <p>
            This Gambit may be elected once per Challange. When selected, no
            Focus Roll is made, instead the Controlling Player of the Model for
            which this Gambit has been selected makes a single attack at the end
            of the Focus Step. If the Hit Test and Wound Test made for this
            attack are both successful (i.e., they meet the required Target
            Number), the Controlling Player of the Model with this Gambit may
            then make the remainder of the attacks the Model that this Gambit is
            selected for is eligible to make in the current Strike Step, minus
            the single attack already made. If either the Hit Test or Wound Test
            made for the initial attack are not successful, the Model for which
            this Gambit is selected may make no further attacks during this
            Strike Step.
          </p>
          <h4>Additional Detachments</h4>
          <p>
            An Army that has a Primary Detachment with the Raven Guard Faction
            may select the following Detachments:
          </p>
          <div class="border detach">
            <h4>Decapitation Cadre [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role recon"></div>
              <div class="role recon"></div>
              <div class="role elite"></div>
              <div class="role elite"></div>
            </div>
            <p>
              Recon Slots in this Detachment may only be used to select Recon
              naissance Squad Unit. Elites Slots in this Detachment may only be
              used to select Veteran Assault Squad or Dark Fury Squad Units.
            </p>
          </div>

          <h4>Advanced Reaction: Shadow Veil</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Raven Guard Trait can spend Reaction Points to make the Shadow
            Veil Advanced Reaction:
          </p>
          <p class="bold">
            This Ruction allows the Reacting Unit to make a Move when it is
            Targeted by a Shooting Attack and gain a Damage Mitigation Roll for
            the duration of the Shooting Phase.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> Once per Battle, the Reactive
              Player may declare the Shadow Veil Advanced Reaction when the
              Active Player targets a Unit under their control which only
              includes Models with the Raven Guard Trait, that do not have the
              Vehicle Type, with a Shooting Attack.
            </div>
            <div>
              <span class="bold">Cost:</span>
              The Reactive Player must spend 1 point of their Reaction Allotment
              to declare the Shadow Veil Advanced Reaction, this cost paid as
              soon as the declaration is made.
            </div>
            <div>
              <span class="bold">Target:</span> For a Shadow Veil Advanced
              Reaction, the Reacting Unit is always the Unit that is the target
              of the Shooting Attack that triggered this Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul numeric">
                <li>
                  All Models in the Reacting Unit may be moved a distance equal
                  to their Initiative Characteristic using the normal Rules for
                  Movement, but may not inc rease this distance by choosing to
                  Rush. If no Model in the Target Unit is determined to be
                  within Line of Sight and/or Range of any Model in the
                  Attacking Unit once this move is resolved, the Active Player
                  may not select an alternative target for that Attacking Unit
                  during the current Shooting Phase.
                </li>
                <li>
                  Once the Reacting Player has resolved this Move, all Models in
                  the Reacting Unit gain the Shrouded (5+) Special Rule for the
                  remainder of the current Shooting Phase and the Active Player
                  may move to
                  <Tooltip word="Step 2" :tooltip-text="shootSteps" /> of the
                  Shooting Attack sequence.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Emperors_Children'">
        <h2 id="EC">Emperors Children</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Iron_Warriors'">
        <h2 id="IW">Iron Warriors</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>

            <p>
              Any Model with the Iron Warriors Trait and the Command or Champion
              Sub-Type may have a thunder hammer exchanged for a graviton
              crusher for Free.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['graviton crusher']"
              :withoutName="true"
            />
            <p>
              In any Unit entirely composed of Models with the Iron Warriors
              Trait, every Model in that Unit may have its bolt pistol exchanged
              for one shrapnel pistol for +2 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['shrapnel pistol']"
              :withoutName="true"
            />
            <p>
              In any Unit entirely composed of Models with the Iron Warriors
              Trait, every Model in that Unit may have its bolter exchanged for
              one shrapnel bolter for +3 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['shrapnel bolter']"
              :withoutName="true"
            />
            <p>
              The following item is added to the Legion Officer Wargear list and
              Legion Sergeant Melee Weapons list when selecting Wargear options
              for a Model with the Iron Warriors Trait for +15 Points:
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['graviton mace']"
              :withoutName="true"
            />
            <p>
              The following item is added to the Legion Heavy Weapons list when
              selecting Wargear options for a Model with the Iron Warriors Trait
              for +15 Points:
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['shrapnel cannon']"
              :withoutName="true"
            />
            <p>
              The following item is added to the Legion Sponson Weapons list
              when selecting Wargear options for a Model with the Iron Warriors
              Trait:
            </p>
            <ul>
              <li>+15 points for Two Sponson Mounted shrapnel cannon</li>
            </ul>
            <p>
              The following item is added to the Legion Pintle Weapons list when
              selecting Wargear options for a Model with the Iron Warriors
              Trait:
            </p>
            <ul>
              <li>+15 points for Pintle Mounted shrapnel cannon</li>
            </ul>

            <h5>The Unfavoured</h5>
            <p>
              If a Unit that has the Iron Warriors Trait that includes only
              Models with the Infantry Type is selected to fill a Prime Force
              Orga ni sation Slot, the following Prime Advantage can be
              selected:
            </p>
            <p class="bold">The Unfavoured</p>
            <p>
              All Models in the Unit selected to fill a Prime Force Organisation
              Slot with this Prime Advantage gain the Expendable (1) Special
              Rule.
            </p>
          </div>

          <div>
            <h5>Rite of War: Legiones Astartes Iron Warriors</h5>
            <h4>Legion Tactica: The Bitter End</h4>
            <p>
              All Models with the Iron Warriors Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>
            <p>
              If the Controlling Player is making a Leadership Check or Cool
              Check for a Unit that includes a majority of Models with this
              Special Rule, they may ignore negative modifiers applied by the
              Panic(X), Pinning(X), Stun(X) or Suppressive(X) Special Rules.
            </p>
            <h4>Gambit: Spiteful Demise</h4>
            <p>
              When this Gambit is selected, if this Model loses its last Wound
              during the following Strike Step, the Controll in Player may
              choose to immediately inflict a single automatic Hit on the
              opposing Model, resolved as if it was made with the following
              Weapon:
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['spiteful demise']"
              :withoutName="true"
            />

            <h4>Additional Detachments</h4>
            <p>
              An Army that has a Primary Detachment with the Iron Warriors
              Faction may select the following Detachment:
            </p>
            <div class="border detach">
              <h4>The Ironfire Cohort [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p armour-p"></div>
                <div class="role armour"></div>
                <div class="role support"></div>
                <div class="role support"></div>
              </div>
              <p>
                Armour Slots in this Detachment must be filled with Arquitor
                Bombard Units.
              </p>
            </div>
            <div class="border detach">
              <h4>The Hammer of Olympia [Apex Detachment]</h4>
              <div class="detach-string">
                <div class="role-p ha-p"></div>
                <div class="role ha"></div>
                <div class="role ht"></div>
              </div>
              <div class="detach-string">
                <div class="role-p troops-p"></div>
                <div class="role troops"></div>
              </div>
              <p>
                This Detachment may only be selected if your Army also contains
                a Warsmith or Perturabo Unit.
              </p>
            </div>

            <h4>Advanced Reaction: Bitter Fury</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the Iron Warriors Trait can spend Reaction Points to make the
              following Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction allows the Reacting Unit to make an improved
              Shooting Attack in the manner of Return Fire.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span> Once per Battle, the Reactive
                Player may declare the Bitter Fury advanced Reaction in the
                Shooting Phase, during
                <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
                Shooting Attack sequence of any Shooting Attack made by the
                Active Plaver that Targets a Unit which only includes Models
                with the Iron Warriors Trait.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Bitter Fury
                Advanced Reaction, this cost paid as soon as the declaration is
                made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Shooting Attack triggered the Reaction. The Reacting
                Unit is always the Unit that was the target of the Shooting
                Attack that triggered the Reaction.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="numeric">
                  <li>
                    Once the Bitter Fury Advanced Reaction has been declared,
                    the Active Player must resolve all remaining Steps of the
                    Shooting Attack process as normal, up to the start of
                    <Tooltip word="Step 11" :tooltip-text="shootSteps" />.
                  </li>
                  <li>
                    Before resolving
                    <Tooltip word="Step 11" :tooltip-text="shootSteps" />, the
                    Reactive Player makes a Shooting Attack with the Reacting
                    Unit (including with any Models that have been reduced to 0
                    Wounds) targeting only the Target Unit. While making this
                    Shooting Attack, Weapons selected for it have their
                    Firepower Characteristic modified by +1 and gain the
                    Overload (1) Special Rule. If that Weapon already has the
                    Overload (X) Special Rule, improve the value of X on that
                    Special Rule by +1.
                  </li>
                  <li>
                    Once the Shooting Attack made as part of this Reaction has
                    been completely resolved, including removing any Casualties,
                    the Active Player must then finish resolving
                    <Tooltip word="Step 11" :tooltip-text="shootSteps" /> of the
                    original Shooting Attack that triggered the Reaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Night_Lords'">
        <h2 id="NL">Night Lords</h2>
        <div>
          <h5>Weapon and Wargear</h5>

          <p>
            Any Model with the Command or Champion Sub-Type and the Night Lords
            Trait may have Trophies of Judgement selected for it for +10 Points
            per Model.
          </p>
          <div class="border">
            <p class="bold">Trophies of Judgement</p>
            <p>
              A Model with Trophies of Judgement has the Fear (1) Special Rule.
            </p>
          </div>
          <p>
            Any Model with the Night Lords Trait and the Command, Champion or
            Sergeant Sub-Type may have a power weapon exchanged for a
            chainglaive for +5 Points per Model.
          </p>
          <MeleeWeaponTemplate
            :mweaponData="mweapons['chainglaive']"
            :withoutName="true"
          />
          <p>
            Any Model with the Night Lords Trait and the Command Sub-Type may
            have a power weapon exchanged for a headsman's axe for +10 Points
            per Model.
          </p>
          <MeleeWeaponTemplate
            :mweaponData="mweapons[`headsman's axe`]"
            :withoutName="true"
          />
          <p>
            The following item is added to the Legion Officer Wargear list when
            selecting Wargear options for a Model with the Night Lords Trait for
            +25 Points:
          </p>
          <MeleeWeaponTemplate
            :mweaponData="mweapons['escaton power claw']"
            :withoutName="true"
          />

          <h5>Atramentar</h5>
          <p>
            If a Centurion in Terminator Armour Cataphractii Command Squad,
            Tartaros Command Squad, Cataphractii Terminator Squad or Tartaros
            Termiator Squad Unit that has the Night Lords Trait is selected to
            fill a Prime Force Organisation Slot, the following Prime Advantage
            can be selected:
          </p>

          <p class="bold">Atramentar</p>
          <p>
            Models in a Unit selected to fill a Prime Force Organisation Slot
            with this Prime Advantage gain the Deep Strike and Impact (1)
            Special Rules.
          </p>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Night Lords</h5>
          <h4>Legion Tactica: A Talent for Murder</h4>
          <p>
            All Models with the Night Lords Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rule:
          </p>

          <p>
            When Locked in Combat with any Units which contain at least one
            Model which has any Tactical Statuses, Models in that Combat with
            this Special Rule gain an additional modifier of +1 to their Weapon
            Skill Characteristic until the end of the Phase.
          </p>
          <h4>Gambit: Nostraman Courage</h4>
          <p class="bold">
            This Gambit allows the Controlling Player to switch the Model that
            fights in a Challenge.
          </p>
          <p>
            This Gambit may only be selected once per Challenge. If selected, at
            the Start of the Focus Step, this Model's Controlling Player may
            immediately return the Model to their Unit as if it was the
            Resolution Sub-Phase. If the Controlling Player chooses to do this,
            they must select another Model from this Unit (this can be a Model
            that is not normally eligible to take part in a Challenge). That
            Model is removed from the Unit and becomes the Challenger or
            Challenged Model in place of the original Challenger or Challenged
            Model that was returned to the Unit.
          </p>

          <h4>Additional Detachments</h4>
          <p>
            An Army that has a Primary Detachment with the Night Lords Faction
            may Select the following Detachments:
          </p>
          <div class="border detach">
            <h4>Terror Assault [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role-p troops-p"></div>
              <div class="role troops"></div>
              <div class="role fa"></div>
              <div class="role fa"></div>
            </div>
            <p>
              Troops Slots in this Detachment must be filled with Terror Squad
              Units.
            </p>
          </div>
          <div class="border detach">
            <h4>Atramentar Hunt[Apex Detachment]</h4>
            <div class="detach-string">
              <div class="role-p retune-p"></div>
              <div class="role-p ha-p"></div>
              <div class="role-p ha-p"></div>
            </div>
            <ul>
              <li>
                Retinue Slots in this Detachment must be filled with
                Cataphractii Command Squad Units or Tartaros Command Squad
                Units.
              </li>
              <li>
                Heavy Assault Slots in this Detachment must be filled with
                Cataphractii Terminator Squad Units or Tartaros Terminator Squad
                Units.
              </li>
              <li>
                The only Prime Advantage that can be selected for Battlefield
                Role Slots in this Detachment is the Atramentar Prime Advantage.
              </li>
            </ul>
          </div>
          <h4>Advanced Reaction: Better Part of Valour</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Night Lords Trait can spend Reaction Points to make the Better
            Part of Valour Advanced Reaction:
          </p>
          <p class="bold">
            This Reaction allows a Unit to Fall Back when it is the Target of a
            Charge.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span>
              The Reactive Player may declare a Better Part of Valour Advanced
              Reaction during
              <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of the
              Charge process of any Charge declared by the Active Player that
              targets a Unit which only includes Models with the Night Lords
              Trait.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare a Better Part of
              Valour Advanced Reaction, this cost paid as soon as the
              declaration is made.
            </div>
            <div>
              <span class="bold">Target:</span> The Target Unit is always the
              Unit whose Charge triggered the Reaction. The Reacting Unit is
              always the Unit that was declared as the target of the Charge that
              triggered this Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul">
                <li>
                  Once this Reaction is declared, the Reacting Unit must
                  immediately make a Fall Back Move as if it was affected by the
                  Routed Tactical Status.
                </li>
                <li>
                  Once this Fall Back Move is completed, the Reacting Unit does
                  not gain the Routed Tactical Status.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'World_Eaters'">
        <h2 id="WE">World Eaters</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>
            <p class="bold">Blades of the Fighting Pits</p>
            <p>
              In any Unit entirely composed of Models with the World Eaters
              Trait, any Model may have its chainsword exchanged for one
              chainaxe for free.
            </p>

            <div>
              <p class="bold">Caedere Weapon</p>
              <p>
                Any Model with the Command, Champion, Specialist or Sergeant
                Sub-Type may have its power weapon exchanged for one Caedere
                weapon for +10 Points per Model.
              </p>

              <MeleeWeaponTemplate
                :mweaponData="mweapons['meteor hammer']"
                :withoutName="true"
              />
              <MeleeWeaponTemplate
                :mweaponData="mweapons['excoriator chainaxe']"
                :withoutName="true"
              />
              <MeleeWeaponTemplate
                :mweaponData="mweapons['paired falax blades']"
                :withoutName="true"
              />
              <MeleeWeaponTemplate
                :mweaponData="mweapons['barb-hook lash']"
                :withoutName="true"
              />
            </div>

            <h5>Chain-bonded</h5>
            <p>
              If a Unit which only includes Models with the World Eaters Trait
              that has the Command Battlefield Role is selected to fill a Prime
              Force Organisation Slot, the following Prime Advantage can be
              selected:
            </p>

            <p class="bold">Chain-bonded</p>
            <p>
              This Prime Advantage can only be selected once per Army. When this
              Prime Advantage is selected, the Controlling Player must select
              another Unit which only includes Models with the World Eaters
              Trait that has the Command Battlefield Role from their Army. One
              Model in the selected Unit and one Model in the Unit selected to
              fill a Prime Force Organisation Slot with this Prime Advantage
              both gain the Chain-brothers Special Rule.
            </p>
            <p>
              <span class="bold">Chain-brothers:</span> While a Model with this
              Special Rule is within Unit Coherency of the other Model from your
              Army with this Special Rule, that Model gains a bonus of +1 to Hit
              Tests made in the Assault Phase. If a Model that is engaged in a
              Challenge is in the same Combat as the other Model from your Army
              with this Special Rule, that Model is treated as being in Unit
              Coherency with that other Model for the purposes of this Special
              Rule.
            </p>
          </div>
          <div>
            <h5>Rite of War: Legiones Astartes World Eaters</h5>
            <h4>Legion Tactica: Violence Incarnate</h4>
            <p>
              All Models with the World Eaters Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>

            <p>
              On any Turn in which they made a Charge Move, Models with this
              Special Rule modify their Attacks Characteristic by +1 until the
              end of the Phase.
            </p>
            <h4>Gambit: Violent Overkill</h4>
            <p>
              If this Gambit is selected, then when this Model makes attacks
              during the Strike Step, if the other Model involved in the
              Challenge is Removed as a Casualty, any remaining wounds must
              instead be allocated to other eligible enemy Models in the same
              Combat, using the normal Rules.
            </p>
            <h4>Additional Detachment</h4>
            <p>
              An Army that has a Primary Detachment with the World Eaters
              Faction may select the following Detachments:
            </p>
            <div class="border detach">
              <h4>Berserker Cadre [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p troops-p"></div>
                <div class="role ha"></div>
                <div class="role ha"></div>
                <div class="role ha"></div>
              </div>
              <p>
                Heavy Assault Slots in this Detachment may not be used to select
                Rampager Squad Units.
              </p>
            </div>

            <h4>Advanced Reaction: Brutal Tide</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the World Eaters Trait can spend Reaction Points to make the
              Brutal Tide Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction allows the Reacting Unit to make a Charge towards a
              Unit that Targets them with a Shooting Attack.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span>
                Once per Battle, the Reactive Player may declare the Brutal Tide
                Advanced Reaction during
                <Tooltip word="Step 4" :tooltip-text="shootSteps" /> of a
                Shooting Attack declared by the Active Player that targets a
                Unit which only includes Models with the World Eaters Trait and
                does not have the Vehicle Type.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Brutal Tide
                Advanced Reaction, this cost paid as soon as the declaration is
                made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Shooting Attack triggered the Reaction. The Reacting
                Unit is always the Unit that was declared as the target of the
                Shooting Attack that triggered this Reaction.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul numeric">
                  <li>
                    For the duration of the current Shooting Phase, all Models
                    in the Reacting Unit gain the Eternal Warrior (1) Special
                    Rule.
                  </li>
                  <li>
                    Immediately after
                    <Tooltip word="Step 11" :tooltip-text="shootSteps" /> of the
                    Shooting Attack that triggered this Reaction is resolved,
                    the Reactive Player must make a Charge Roll for the Reacting
                    Unit.
                  </li>
                  <li>
                    If the result of the Charge Roll would be enough to move any
                    Model from the Reacting Unit into Base Contact with a Model
                    from the Target Unit, then a Charge Move is made and the
                    Units are Locked in Combat. Models in the Reacting Unit gain
                    any bonuses for any Special Rules that would apply to that
                    Unit as a result of a successful Charge.
                  </li>
                  <li>
                    If the result of the Charge Roll would not bring any Model
                    from the Reacting Unit into contact with a Model from the
                    Target Unit, then no Charge Move is made.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h5>Rite of War: Legiones Hereticus World Eaters</h5>
            <p>
              This Rite of War can only be selected for an Army with the Traitor
              Allegiance.
            </p>
            <h4>Legion Tactica: The Nails' Bite</h4>
            <p>
              All Models with the World Eaters Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>
            <p>
              When a Unit entirely composed of Models with this Special Rule
              fails a Leadership Check, that Unit's Controlling Player can
              choose for that Unit to become Lost to the Nails.
            </p>
            <p class="bold">Lost to the Nails</p>
            <p>
              When a Unit becomes Lost to the Nails, all Tactical Statuses
              affecting it are removed. In addition, while a Unit is Lost to the
              Nails:
            </p>
            <ul>
              <li>
                Models in that Unit may add +1" to the distance of any Set-up
                Move.
              </li>
              <li>
                Modify the Attacks Characteristic of Models in that Unit by +1.
              </li>
              <li>
                Models in that Unit are considered to have a Leadership, Cool
                and Willpower Characteristic of 10 (unless it would normally be
                higher).
              </li>
              <li>
                If, at the start of the Controlling Player's Charge Sub- Phase,
                the Unit is within 12" of any enemy Models, that Unit must make
                a Charge Move. If more than one enemy Unit is within 12", the
                Controlling Player of this Unit must select the closest enemy
                Unit as the Target Unit for that Charge.
              </li>
            </ul>
            <p>
              At the start of the Controlling Player's Charge Sub-Phase, if
              there are no enemy Units within 12" of a Unit that is Lost to the
              Nails, that Unit is no longer Lost to the Nails.
            </p>

            <h4>Gambit: Brutal Dismemberment</h4>
            <p>
              While this Gambit is selected, if the enemy Model is Removed as a
              Casualty during the Strike Step, during the subsequent Glory Step,
              the Controlling Player gains 2 additional Combat Resolution
              Points.
            </p>
            <h4>Additional Detachment</h4>
            <p>
              An Army that has a Primary Detachment with the World Eaters
              Faction may select the following Detachments:
            </p>
            <div class="border detach">
              <h4>Sons of Bodt [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role-p support-p"></div>
                <div class="role-p support-p"></div>
              </div>
              <div class="detach-string">
                <div class="role troops"></div>
                <div class="role troops"></div>
                <div class="role troops"></div>
              </div>
              <p>
                Support Slots in this Detachment may not be used to select
                Apothecary Squad Units.
              </p>
            </div>

            <h4>Advanced Reaction: Furious Charge</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the World Eaters Trait can spend Reaction Points to make the
              Furious Charge Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction allows the Reacting Unit to become Lost to the Nails
              after the Volley Step of a Charge.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span>
                The Reactive Player may declare a Furious Charge Advanced
                Reaction at the end of
                <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of a
                Charge declared by the Active Player that targets a Unit which
                only includes Models with the World Eaters Trait if any Models
                in the Target Unit were Removed as Casualties as a result of
                Volley Attacks.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Furious Charge
                Advanced Reaction, this cost paid as soon as the declaration is
                made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Charge triggered the Reaction. The Reacting Unit is
                always the Unit that was declared as the target of the Charge
                that triggered this Reaction.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul numeric">
                  <li>
                    Once this Reaction is declared, the Target Unit becomes Lost
                    to the Nails.
                  </li>
                  <li>
                    The Reactive Player must then make a Charge Roll for the
                    Reacting Unit.
                  </li>
                  <li>
                    If the result of the Charge Roll would be enough to move any
                    Model from the Reacting Unit into Base contact with a Model
                    from the Target Unit, then a Charge Move is made and the
                    Units are Locked in Combat. Models in the Reacting Unit gain
                    any bonuses for any Special Rules that would apply to that
                    Unit as a result of a successful Charge.
                  </li>
                  <li>
                    If the result of the Charge Roll would not bring any Model
                    from the Reacting Unit into contact with a Model from the
                    Target Unit, then no Charge Move is made and the Players
                    proceed to
                    <Tooltip word="Step 5" :tooltip-text="chargeSteps" /> of the
                    Charge process.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Death_Guard'">
        <h2 id="DG">Death Guard</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>

            <div>
              <p>
                Any Model with the Command, Champion, Specialist or Sergeant
                Sub-Type may have its power weapon exchanged for one power
                scythe for +10 Points per Model or its power fist exchanged for
                one power scythe for +5 Points.
              </p>
              <MeleeWeaponTemplate
                :mweaponData="mweapons['power scythe']"
                :withoutName="true"
              />
            </div>
            <div>
              <p>
                The following item is added to the Legion Officer Wargear list
                and Legion Pistols list when selecting Wargear options for a
                Model with the Death Guard Trait for +5 Points per model:
              </p>

              <RangeWeaponTemplate
                :rweaponData="rweapons['alchem caster']"
                :withoutName="true"
              />
            </div>
            <div>
              <p>
                The following item is added to the Legion Combi-weapons list
                when selecting Wargear options for a Model with the Death Guard
                Trait for +10 Points per model:
              </p>

              <RangeWeaponTemplate
                :rweaponData="rweapons['alchem combi-flamer']"
                :withoutName="true"
              />
            </div>
            <div>
              <p>
                The following item is added to the Legion Special Weapons list
                when selecting Wargear options for a Model with the Death Guard
                Trait for +5 Points per model:
              </p>

              <RangeWeaponTemplate
                :rweaponData="rweapons['alchem flamer']"
                :withoutName="true"
              />
            </div>
            <div>
              <p>
                The following item is added to the Legion Heavy Weapons list
                when selecting Wargear options for a Model with the Death Guard
                Trait for +10 Points per model:
              </p>

              <RangeWeaponTemplate
                :rweaponData="rweapons['heavy alchem flamer']"
                :withoutName="true"
              />
            </div>
            <div>
              <p>
                The following item is added to the Legion Sponson Weapons list
                when selecting Wargear options for a Model with the Death Guard
                Trait for +10 Points per model:
              </p>
              <ul>
                <li>
                  Two Sponson Mounted
                  <span class="bold">Heavy Alchem Flamers</span>
                </li>
              </ul>
            </div>
            <div>
              <p>
                The following item is added to the Legion Pintle Weapons list
                when selecting Wargear options for a Model with the Death Guard
                Trait for +15 Points per model:
              </p>
              <ul>
                <li>
                  Pintle Mounted <span class="bold">Heavy Alchem Flamer</span>
                </li>
              </ul>
            </div>
            <h5>Unnatural Resilience</h5>
            <p>
              If a Centurion Model with the Death Guard Trait or a Cataphractii
              Centurion Model with the Death Guard Trait is selected to fill a
              Prime Force Organisation Slot, the following Prime Advantage can
              be selected:
            </p>

            <p class="bold">Unnatural Resilience</p>
            <p>
              This Prime Advantage can only be selected once per Army. A Model
              selected to fill a Prime Force Organisation Slot with this Prime
              Advantage:
            </p>
            <ul>
              <li>Has its Base Wounds Characteristic modified by +1.</li>
              <li>Gains the Eternal Warrior (2) Special Rule.</li>
            </ul>
          </div>
          <div>
            <h5>Rite of War: Legiones Astartes Death Guard</h5>
            <h4>Legion Tactica: Remorseless Advance</h4>
            <p>
              All Models with the Death Guard Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>

            <p>
              A Model with this Special Rule that has moved no more than 4" in
              the Movement Phase and did not Rush may still benefit from any
              variant of the Heavy (X) Special Rule on any Weapons that they
              have. Additionally, the Controlling Player of a Model with this
              Special Rule may ignore negative modifiers to the Movement
              Characteristic of that Model as a result of moving in Difficult
              Terrain.
            </p>
            <h4>Gambit: Steadfast Resilience</h4>
            <p>
              When selecting a Gambit, the Controlling Player of a Model with
              the Death Guard Trait can select Steadfast Resilience instead of
              any others available to that Model:
            </p>
            <p>
              If this Gambit is selected, then the Toughness Characteristic of
              the Model it is selected for is replaced with the Base Weapon
              Skill Characteristic of the opposing Model for the duration of the
              following Strike Step.
            </p>
            <h4>Additional Detachment</h4>
            <p>
              An Army that has a Primary Detachment with the Death Guard Faction
              may select the following Detachments:
            </p>
            <div class="border detach">
              <h4>Reaping Host [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role troops-p"></div>
                <div class="role troops"></div>
                <div class="role support"></div>
                <div class="role ha"></div>
              </div>
              <p>
                Troops Slots in this Detachment may not be used to select
                Assault Squad Units.
              </p>
            </div>

            <h4>Advanced Reaction: Barbaran Endurance</h4>
            <p>
              The Controlling Player of any Units that include only Models with
              the Death Guard Trait can spend Reaction Points to make the
              Barbaran Endurance Advanced Reaction:
            </p>
            <p class="bold">
              This Reaction grants the Reacting Unit a Damage Mitigation Roll
              and allows them to recover from Tactical Statuses.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span> Once per Battle, the Reactive
                Player may declare the Barbaran Endurance Advanced Reaction
                during <Tooltip word="Step 4" :tooltip-text="shootSteps" /> of
                any Shooting Attack declared by the Active Player during the
                Shooting Phase that Targets a Unit which only includes Models
                with the Death Guard Trait that do not have the Vehicle Type.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare the Barbaran
                Endurance Advanced Reaction, this cost paid as soon as the
                declaration is made.
              </div>
              <div>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Shooting Attack triggered the Reaction. The Reacting
                Unit is always the Unit that was declared as the target of the
                Shooting Attack that triggered this Reaction.
              </div>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul numeric">
                  <li>
                    All Models in the Reacting Unit immediately recover from any
                    Tactical Statuses.
                  </li>
                  <li>
                    For the duration of the current Shooting Phase, all Models
                    in the Reacting Unit gain the Feel No Pain (5+) Special
                    Rule.
                  </li>
                  <li>
                    For the duration of the current Shooting Phase, the Reacting
                    Player automatically passes any Cool Checks or Leadership
                    Checks made for the Reacting Unit.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Thousand_Sons'">
        <h2 id="TS">Thousand Sons</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Sons_Of_Horus'">
        <h2 id="SH">Sons Of Horus</h2>
        <div>
          <div>
            <h5>Weapon and Wargear</h5>

            <div>
              <ul>
                <li>
                  Any Model with the Sons of Horus Trait and the Command or
                  Champion Sub-Type may have its bolter exchanged for one
                  banestrike bolter for +5 Points per Model.
                </li>
                <li>
                  Any Model with the Sons of Horus Trait and the Command or
                  Champion Sub-Type may have its combi-bolter exchanged for one
                  banestrike combi-bolter for +5 Points per Model.
                </li>
                <li>
                  Any Model in a Seeker Squad Units with the Sons of Horus Trait
                  may have its kraken bolter exchanged for one banestrike bolter
                  for Free.
                </li>
                <li>
                  Any Model in a Veteran Tactical Squad Units with the Sons of
                  Horus Trait may have its bolter exchanged for one banestrike
                  bolter for +5 Points per Model.
                </li>
              </ul>

              <RangeWeaponTemplate
                :rweaponData="rweapons['banestrike bolter']"
                :withoutName="true"
              />
              <RangeWeaponTemplate
                :rweaponData="rweapons['banestrike combi-bolter']"
                :withoutName="true"
              />
              <p>
                Any Model with the Sons of Horus Trait may have its power axe
                exchanged for one Carsoran power axe for +5 Points per Model or
                one Carsoran power tabar for +10 Points per Model.
              </p>
              <MeleeWeaponTemplate
                :mweaponData="mweapons['carsoran power axe']"
                :withoutName="true"
              />
              <MeleeWeaponTemplate
                :mweaponData="mweapons['carsoran power tabar']"
                :withoutName="true"
              />
            </div>

            <h5>Martial Supremacy</h5>
            <p>
              If a Unit which only includes Models with the Sons of Horus Trait
              and the Elites Battlefield Role is selected to fill a Prime Force
              Organisation Slot, the following Prime Advantage can be selected:
            </p>

            <p class="bold">Martial Supremacy</p>
            <p>
              One Model in the Unit selected to fill a Prime Force Organisation
              Slot with this Prime Advantage gains the Champion Sub-Type and the
              Duellist's Edge (1) Special Rule.
            </p>
          </div>
          <div>
            <h4>Decurion Lanius</h4>
            <p>
              This upgrade may be purchased for any of the following Units from
              the Legiones Astartes Army List with the Sons of Horus Trait, and
              which do not have any Pintle Mounted Weapons:
            </p>
            <ul class="unit-list">
              <li>+25 points for Predator</li>
              <li>
                +25 points for Sicaran (Models with twin accelerator autocannon
                or punisher rotary cannon)
              </li>
              <li>+30 points for Kratos Assault Tank</li>
            </ul>
            <p>
              A Model with this upgrade has a Pintle Mounted Banestrike bolt
              cannon and gains the Brutal Enforcement Special Rule.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['banestrike bolt cannon']"
              :withoutName="true"
            />
            <div class="border">
              <h4>Brutal Enforcement</h4>
              <p class="bold">
                A Model with this Special Rule may target a friendly Unit with a
                Shooting Attack and the targeted Unit loses the Routed Tactical
                Status.
              </p>
              <p>
                At the start of the Move Sub-Phase, the Controlling Player of a
                Model with this Special Rule can select one Unit from their Army
                with the Routed Tactical Status that is within 12" of the Model
                with this Special Rule. If they do, the Model with this Special
                Rule immediately makes a Shooting Attack, targeting that Unit,
                using only its Banestrike bolt cannon. This Shooting Attack does
                not cause any Leadership Checks. Once this Shooting Attack has
                been resolved, the Target Unit loses the Routed Tactical Status.
              </p>
            </div>
          </div>
          <div>
            <h5>Rite of War: Legiones Astartes Sons of Horus</h5>
            <h4>Legion Tactica: Death Dealers</h4>
            <p>
              All Models with the Sons of Horus Trait (excluding Models with the
              Vehicle Type) are subject to the following Special Rule:
            </p>

            <p>
              When a Model with this Special Rule makes Volley Attacks, it is
              not required to fire Snap Shots.
            </p>
            <h4>Gambit: Merciless Strike</h4>

            <p>
              This Gambit can only be selected during the first Face Off Step of
              a Challenge involving this Model. While this Gambit is selected,
              any Weapon this Model uses during this Challenge gains the Phage
              (T) Special Rule for the duration of this Strike Step.
            </p>

            <h4>Additional Detachment</h4>
            <p>
              An Army that has a Primary Detachment with the Sons of Horus
              Faction may select the following Detachment:
            </p>
            <div class="border detach">
              <h4>Supremacy Cadre [Auxillary Detachment]</h4>
              <div class="detach-string">
                <div class="role troops-p"></div>
                <div class="role troops-p"></div>
                <div class="role ha"></div>
                <div class="role elite"></div>
              </div>
              <p></p>
            </div>

            <h4>Advanced Reaction: Warrior Pride</h4>

            <p class="bold">
              This Reaction allows the Reacting Unit to ignore Challenges from
              an opponent with a lower Weapon Skill Characteristic.
            </p>
            <div class="unit-ability-desc">
              <div>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Warrior Pride Advanced Reaction when a Unit made up of
                Models with the Sons of Horus Trait is in Combat with an enemy
                Unit and the Active Player selects a Model to be the Challenger.
              </div>
              <div>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Warrior Pride
                Advanced Reaction, this cost paid as soon as the declaration is
                made.
              </div>
              <div>
                <span class="bold">Target:</span> For a Warrior Pride Advanced
                Reaction, the Target Unit is always the Unit that includes the
                enemy Model that is selected as the Challenger. The Reacting
                Unit is the Unit that includes any Models with the Sons of Horus
                Trait that could be selected as the Challenged.
              </div>
              <div>
                <span class="bold">Process:</span>
                If the Challenger's Base Weapon Skill Characteristic is lower
                than the Base Weapon Skill Characteristic of all Models in the
                Reacting Unit that would be eligible to accept the Challenge,
                the Reactive Player can choose not to accept the Challenge. If
                they do so, the Challenge Sub- Phase ends immediately and that
                Model does not gain the Disgraced Tactical Status.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectOption === 'Word_Bearers'">
        <h2 id="WB">Word Bearers</h2>
        <div>Soon!</div>
      </div>
      <div v-show="selectOption === 'Alpha_Legion'">
        <h2 id="AL">Alpha Legion</h2>
        <div>
          <h5>Weapon and Wargear</h5>
          <div>
            <p>
              Any Model with the Alpha Legion Trait and the Command or Champion
              Sub-Type may be given venom spheres for +5 Points per Model.
            </p>
            <RangeWeaponTemplate
              :rweaponData="rweapons['venom spheres']"
              :withoutName="true"
            />
          </div>
          <div>
            <p>
              The following items are added to the Legion Combi-weapons list
              when selecting Wargear options for a Model with the Alpha Legion
              Trait:
            </p>
            <ul>
              <li>Banestrike Bolter (+5 points)</li>
              <li>Banestrike Combi-Bolter (+10 points)</li>
            </ul>
            <RangeWeaponTemplate
              :rweaponData="rweapons['banestrike bolter']"
              :withoutName="true"
            />
            <RangeWeaponTemplate
              :rweaponData="rweapons['banestrike combi-bolter']"
              :withoutName="true"
            />
          </div>
          <div>
            <p>
              Any Model with the Alpha Legion Trait and the Command, Champion or
              Sergeant Sub-Type may have its power weapon exchanged for one
              power dagger for Free.
            </p>
            <MeleeWeaponTemplate
              :mweaponData="mweapons['power dagger']"
              :withoutName="true"
            />
          </div>
          <h5>Rewards of Treachery</h5>
          <p>
            If a Unit which only includes Models with the Alpha Legion Trait
            that has the Command Battlefield Role is selected to fill a Prime
            Force Organisation Slot, the following Prime Advantage can be
            selected:
          </p>

          <p class="bold">Revards of Treachery</p>
          <p>
            Add one additional Battlefield Role Slot to the Detachment that
            includes the Unit selected to fill a Prime Force Organisation Slot
            with this Prime Advantage. This Slot may be of any Battlefield Role
            other than High Command, Command, Warlord or Lord of War (note that
            a Detachment may gain more than one additional Force Organisation
            Slot if this option is selected for multiple Units in the same
            Detachment).
          </p>
          <p>Each Unit selected to fill such a Slot must:</p>
          <ul>
            <li>Be from the Legiones Astartes Army List.</li>
            <li>
              Not have the Alpha Legion Faction Trait on their Unit Profile.
            </li>
            <li>Not include any Models that have the Unique Sub-Type.</li>
          </ul>
          <p>
            All Models in any of these Units have their Faction Trait replaced
            with 'Alpha Legion'.
          </p>
        </div>
        <div>
          <h5>Rite of War: Legiones Astartes Alpha Legion</h5>
          <h4>Legion Tactica: Lies and Obfuscation</h4>
          <p>
            All Models with the Alpha Legion Trait (excluding Models with the
            Vehicle Type) are subject to the following Special Rule:
          </p>

          <p>
            A Model with this Special Rule is always considered to be 2" further
            away than it actually is when measuring range to it from any enemy
            Model for the purpose of resolving a Shooting Attack, Charge or any
            Reaction declared by an enemy Model or Unit (this is cumulative with
            any other modifiers to range imposed by Special Rules).
          </p>
          <h4>Gambit: I Am Alpharius</h4>
          <p>
            When selecting a Gambit, the Controlling Player of a Model with the
            Alpha Legion Trait can select I Am Alpharius instead of any others
            available to that Model.
          </p>
          <p>
            This Gambit can only be selected during the first Face-Off Step of a
            Challenge involving this Model. If this Gambit is selected, then the
            opposing Model in the Challenge sets their Combat Initiative to 'l'
            until the end of this Strike Step.
          </p>
          <h4>Additional Detachments</h4>
          <p>
            An Army that has a Primary Detachment with the Alpha Legion Faction
            may Select the following Detachment:
          </p>
          <div class="border detach">
            <h4>Headhunter Leviathal [Auxillary Detachment]</h4>
            <div class="detach-string">
              <div class="role-p recon-p"></div>
              <div class="role-p recon-p"></div>
              <div class="role elite"></div>
              <div class="role elite"></div>
            </div>
            <p>
              Elite Slots in this Detachment may only be used to select Seeker
              Squad Units or Headhunter Kill Team Units
            </p>
          </div>
          <h4>Advanced Reaction: Smoke And Mirrors</h4>
          <p>
            The Controlling Player of any Units that include only Models with
            the Alpha Legion Trait can spend Reaction Points to make the Smoke
            And Mirrors Advanced Reaction:
          </p>
          <p class="bold">
            This Reaction changes the Target Number of Precision Hit Tests made
            against the Reacting Unit.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> The Reactive Player may declare
              a Smoke and Mirrors Advanced Reaction in the Shooting Phase,
              during <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
              Shooting Attack sequence of any Shooting Attack made by the Active
              Player that targets a Unit that includes only Models with the
              Alpha Legion Trait.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare a Smoke and Mirrors
              Advanced Reaction, this cost paid as soon as the declaration is
              made.
            </div>
            <div>
              <span class="bold">Target:</span> The Target Unit is always the
              Unit whose Shooting Attack triggered the Reaction. The Reacting
              Unit is always the Unit that was the target of the Shooting Attack
              that triggered the Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul">
                <li>
                  Once this Reaction is declared, until the Target Unit's
                  Shooting Attack has been resolved, Shooting Attacks with the
                  Precision (X) Special Rule can only be inflicted on a Hit Test
                  result of 6+.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- RWmodal -->
    <div
      class="modal-overlay"
      v-if="isRulesModalOpen['RWmodal']"
      @click.self="closeRulesModal('RWmodal')"
    >
      <div class="modal-content">
        <RangeWeaponTemplate
          :rweaponData="ranged_weapons[isRulesModalOpen['RWMname']]"
        />
        <button class="close-modal-button" @click="closeRulesModal('RWmodal')">
          Close
        </button>
      </div>
    </div>
    <!-- MWmodal-->
    <div
      class="modal-overlay"
      v-if="isRulesModalOpen['MWmodal']"
      @click.self="closeRulesModal('MWmodal')"
    >
      <div class="modal-content">
        <MeleeWeaponTemplate
          :mweaponData="melee_weapons[isRulesModalOpen['RWMname']]"
        />
        <button class="close-modal-button" @click="closeRulesModal('MWmodal')">
          Close
        </button>
      </div>
    </div>

    <div><Stp /></div>
    <div><Bb /></div>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, computed, ref, watch, reactive } from "vue";
import {
  special_rules,
  ranged_weapons,
  wargear,
  unit_types,
  melee_weapons,
} from "../../stores/Arrays.js";
import RangeWeaponTemplate from "./OneExemplarTemplates/RangeWeaponTemplate.vue";
import MeleeWeaponTemplate from "./OneExemplarTemplates/MeleeWeaponTemplate.vue";
import WargearTemplate from "./OneExemplarTemplates/WargearTemplate.vue";
import SpecialRuleTemplate from "./OneExemplarTemplates/SpecialRuleTemplate.vue";
import UnitTypeTemplate from "./OneExemplarTemplates/UnitTypeTemplate.vue";
import Content from "./ContentTemplate/Content.vue";
import LegionesSelect from "./ContentTemplate/LegionesSelect.vue";
import { scrollToSection } from "./composables/Scroll";
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
import Tooltip from "./textModals/Tooltip.vue";
const moveSteps = ref(`1. Select Unit<br>2. Move Unit<br>3. Select New Unit`);
const shootSteps = ref(
  `1. Select Target Unit.<br>
    2. Check Target.<br>
    3. Declare Weapons.<br>
    4. Set Fire Groups.<br>
    5. Select Fire Group To Resolve.<br>
    6. Make Hit Tests.<br>
    7. Make Wound Tests.<br>
    8. Select Target Model.<br>
    9. Make Saving Throws and Damage Mitigation Tests.<br>
    10. Select Next Fire Group.<br>
    11. Remove Casualties<br>`
);
const chargeSteps = ref(
  `1. Declare Target.<br>
    2. Check Line of Sight and Maximum Charge Range.<br>
    3. Make Set-up Move.<br>
    4. Make Volley Attacks.<br>
    5. Make Charge Move.<br>`
);
const challangeSteps = ref(
  `1. Declare Challenge.<br>
    2. Face-Off.<br>
    3. Focus.<br>
    4. Strike.<br>
    5. Glory.<br>`
);

// Реактивные переменные
const selectOption = ref("");
const elems = ref([]);
const rweapons = ref(ranged_weapons);
const mweapons = ref(melee_weapons);
// Функции
function loadSelection() {
  const saved = localStorage.getItem("selectedOption");
  if (saved) {
    selectOption.value = saved;
  }
}

const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);
const props = defineProps({
  stats: {
    type: Object,
    required: true,
  },
});
const SRmodal = ref(false);
const SRname = ref("");
function openModal(event) {
  SRmodal.value = true;
  SRname.value = event.target.textContent.replace(/\(\w+\W*\)/, "");
}
function closeModal(modalName) {
  SRmodal.value = false;
  SRname.value = "";
}

const isRulesModalOpen = reactive({
  RWmodal: false,
  MWmodal: false,
  Wmodal: false,
  UTmodal: false,
  PowerWeaponModal: false,
  FragModal: false,
  RWMname: "",
});
function openRulesModal(modalName, event) {
  isRulesModalOpen[modalName] = true;
  isRulesModalOpen["RWMname"] = event.target.textContent.replace(
    /\(\w+\W*\)/,
    ""
  );
}
function closeRulesModal(modalName) {
  isRulesModalOpen[modalName] = false;
  isRulesModalOpen["RWMname"] = "";
}

function searchModal(rule) {
  if (ranged_weapons[rule]) {
    return "RWmodal";
  } else if (wargear[rule]) {
    return "Wmodal";
  } else if (melee_weapons[rule]) {
    return "MWmodal";
  } else {
    return false;
  }
}

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

function collectElemHeaders() {
  elems.value = Array.from(document.querySelectorAll("h3"));
}

// Вызов функций при монтировании компонента
onMounted(() => {
  loadSelection();
  collectElemHeaders();
  window.addEventListener("resize", updateWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<style>
.legiones-top-menu {
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  width: 100%;
  height: 3rem;
  justify-content: space-between;
  font-size: 1.2rem;
  padding-right: 1rem;
  padding-left: 0.5rem;
  margin-bottom: 10px;
}

.legiones-top-menu__select {
  display: flex;
  align-items: flex-start;
}

.legiones-top-menu__units-link {
  background-color: var(--main-light-color);
  border-radius: 3px;
  width: 50px;
  height: 50px;
  font-weight: bold;
  border: 1px solid black;
}

.factions-main__general {
  box-sizing: border-box;
  padding-left: 35px;
  padding-right: 35px;
  background-color: var(--main-light-color);
  border: 1px solid black;
}

.legiones-icon {
  background-image: url(../icons/unit-icon.svg);
}
</style>