<script setup>
</script>
<template>
  <main class="container">
    <div class="center">
      <h1>Rules of Horus Heresy</h1>
      <div class="nav-rules">
        <h2>Contents</h2>
        <nav class="nav-rules_two-columns">
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
          </ul>
        </nav>
      </div>

      <div class="core-rules">
        <div>
          <p class="bold">
            This section of the book provides you with all the Rules needed to
            play immersive and detailed Battles with your Citadel Miniatures
            collection.
          </p>
          <p>
            It is recommended that Players take some time to read through and
            understand these Rules before playing their first Battle. However,
            this rulebook is intended as a reference tool so that Players need
            not memorise these Rules before attempting their first Battle, and
            is laid out to make finding key concepts as easy as possible. It
            will take several Battles to fully understand the Rules and best
            practices, but having this rulebook to hand will allow the process
            to be as simple as possible.
          </p>
          <h2 id="core">Core Rules</h2>
          <p>
            The Rules presented in this book are the Core Rules, the basic
            foundation of all other Rules, campaign books and exemplary battles
            that will follow as part of the Warhammer: The Horus Heresy - Age of
            Darkness range. However, to make full use of these Core Rules
            Players will need access to one or more of the Age of Darkness Liber
            books and the Army Lists they present.
          </p>
          <p>
            Future publications will present additional Rules, these are not
            Core Rules and where they differ from the Core Rules the additional
            Rules take precedence to allow us to include Faction specific Rules.
            The Core Rules are divided into a number of sections for ease of
            use. The main sections of the Core Rules are as follows:
          </p>
          <ul>
            <li>
              <span class="bold"
                ><a href="" @click.prevent="scrollToSection('terminology')">
                  Wargaming Terminology
                </a></span
              >
              - This section covers basic terminology and gaming principles, and
              is mostly intended for new Players. Its intent is to provide a
              shared framework for reference when talking about the Age of
              Darkness Rules and to give some context on commonly used terms.
            </li>
            <li>
              <span class="bold"
                ><a href="" @click.prevent="scrollToSection('principles')">
                  The Principles of Combat
                </a></span
              >
              - This section will explain the basic principles of the Age of
              Darkness Rules, such as how to measure, or to roll Dice to take
              Tests or Checks. These are used in all Battles and should be
              understood by all Players before beginning a Battle. Last are the
              advanced principles, the more complex Rules for Reactions,
              Tactical Statuses, Psychic Powers and unusual Model Types. These
              Rules may not be required in all Battles, and Players need only
              understand where to reference them.
            </li>
            <li>
              <span class="bold"
                ><a href="" @click.prevent="scrollToSection('battlerules')">
                  The Rules of Battle
                </a></span
              >
              - This section will explain when to use the various Rules covered
              by the basic and advanced principles as part of a Battle. It
              presents and defines the Turn Sequence, the structure by which
              Battles are resolved. This section may also include additional
              Rules for actions that are undertaken only as part of a specific
              Phase or Sub-Phase.
            </li>
            <li>
              <span class="bold"
                ><a href="" @click.prevent="scrollToSection('BitAoD')">
                  Battles in the Ages of Darkness
                </a></span
              >
              - This section will detail the process of arranging a Battle. The
              Core Rules for selecting an Army are presented here, however,
              Players will need access to one or more of the Age of Darkness
              Liber books and the Army Lists they present to fully use these
              Rules. This section will also present a set of Core Missions to be
              used when resolving Battles.
            </li>
            <li>
              <span class="bold">Armoury of the Age Of Darkness</span> - This
              section will include lists for the
              <router-link to="/special-rules">Special Rules</router-link>,
              <router-link to="/unit-types">Model Types</router-link>,
              <router-link to="/weapon">Weapon</router-link>,
              <router-link to="/wargear">Wargear</router-link> and Core Psychic
              Disciplines List (see on header of this site).
            </li>
          </ul>
          <h3 id="terminology">Wargaming Terminology</h3>
          <ul>
            <li>
              <a href="" @click.prevent="scrollToSection('Player')"> Player </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('Control')">
                Control
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('Model')"> Model </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('Base')"> Base </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('ModelProfile')">
                Model Profile
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('Characteristics')">
                Characteristics
              </a>
            </li>
          </ul>
          <p class="bold">
            This section presents definitions for a number of commonly used
            terms that are specific to the hobby of Wargaming.
          </p>
          <p>
            Key to understanding the Core Rules of the Age of Darkness is a use
            of the proper terminology. Like many long-standing hobbies,
            wargaming, and the Age of Darkness Rules in particular, have
            accumulated a number of specific terms or otherwise familiar words
            whose meaning is slightly different when used in the context of
            wargaming. The following terms will see widespread use throughout
            these Core Rules, and as such are defined here to avoid confusion or
            uncertainty (some terms are dealt with only briefly here, in these
            cases they will be fully explained in the section related more
            specifically to that term). This list is not intended to be
            exhaustive, but rather to ensure that certain basic terms are
            understood to have a fixed meaning in the context of this set of
            Rules.
          </p>
          <h4 id="Player">Player</h4>
          <p>
            A Player is the actual person moving Models and making rolls, the
            Player of the game. Battles will include more than one player, and
            the Rules will often refer to the Active Player (the Player
            currently taking their Player Turn) and the Reactive Player (the
            Player not currently taking their Player Turn, and thus only allowed
            to interact with the game through Reactions) in order to
            differentiate between them. Sometimes the Rules will also refer to
            the Controlling Player, that is the Player that Controls the Unit,
            Model or other game element the Rule is referring to.
          </p>
          <h4 id="Control">Control</h4>
          <p>
            All elements of a Battle, the Armies, Units and Models on the
            Battlefield, fall under the Control of a Player. A Player that
            Controls a Unit or Model is the Player that makes all decisions for
            that Unit or Model, such as how it is moved or what attacks are made
            for it, and Rolls all Dice for that Unit or Model, unless specified
            otherwise by another Rule. By default, all Units and Models selected
            by a Player to be part of their Army are automatically under that
            Player's Control for the duration of a Battle - though some Rules
            can cause the Control of a Model or Unit to change.
          </p>
          <h4 id="Model">Model</h4>
          <p>
            A Model is a single gaming piece - usually representing one warrior
            or war machine on the Battlefield. A Model is the smallest category
            of gaming element referred to by the Rules - with Units composed of
            one or more Models, Detachments composed of one or more Units, and
            Armies composed of one or more Detachments. Some larger Models may
            contain multiple elements arranged on a single Base, but these are
            counted as a single Model as they are still a single playing piece
            that is moved as a single element by the Controlling Player.
          </p>
          <h4 id="Base">Base</h4>
          <p>
            Most Models are supplied with a Base - a plastic or resin support
            upon which they stand. When measuring to or from a Model with a
            Base, a Player must always measure to or from the nearest edge of
            the Base - not to the actual Model itself. Some Models are
            dynamically posed, and can extend over the edge of the Base, but
            this is ignored and any measurements are still made to and from the
            edge of that Model's Base. Models that are not supplied with a Base
            (notably Models with the Vehicle Type) have their own Rules for
            measuring to and from those Models.
          </p>
          <h4 id="ModelProfile">Model Profile</h4>
          <p>
            Sometimes the rules may refer to a Model's Profile, this indicates
            the set of Characteristics assigned to that Model and is represented
            in a short string of values often referred to as that Models
            Profile. As an example, the Model Profile of a Space Marine
            Legionary is presented below:
          </p>
          <!-- первая таблица для десктопа -->
          <table class="unit-general__table" v-if="windowWidth > 800">
            <thead>
              <tr>
                <th class="unit-general__table-tbody__name">Name</th>
                <th>M</th>
                <th>WS</th>
                <th>BS</th>
                <th>S</th>
                <th>T</th>
                <th>W</th>
                <th>I</th>
                <th>A</th>
                <th class="vehicle-armour">LD</th>
                <th class="vehicle-armour">CL</th>
                <th class="vehicle-armour">WP</th>
                <th class="vehicle-armour">IN</th>
                <th>SV</th>
                <th>Inv</th>
                <th>Base</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="unit-general__table-tbody__name first-letter">
                  Legionary
                </td>
                <td data-label="M">7</td>
                <td data-label="WS">4</td>
                <td data-label="BS">4</td>
                <td data-label="S">4</td>
                <td data-label="T">4</td>
                <td data-label="W">1</td>
                <td data-label="I">4</td>
                <td data-label="A">1</td>
                <td data-label="LD">7</td>
                <td data-label="CL">7</td>
                <td data-label="WP">7</td>
                <td data-label="IN">7</td>
                <td data-label="SV">3+</td>
                <td data-label="Inv">-</td>
                <td data-label="Base">32mm</td>
              </tr>
            </tbody>
          </table>

          <!-- тут вторая таблица для мобилок -->
          <div
            class="unit-general__grid-table unit-general__grid-table__one"
            v-if="windowWidth <= 800"
          >
            <div class="row header">
              <div class="cell header-cell">Stat</div>
              <div class="cell header-cell first-letter">Legionary</div>
            </div>
            <div class="row">
              <div class="cell label">M</div>
              <div class="cell">7</div>
            </div>
            <div class="row">
              <div class="cell label">WS</div>
              <div class="cell">4</div>
            </div>
            <div class="row">
              <div class="cell label">BS</div>
              <div class="cell">4</div>
            </div>
            <div class="row">
              <div class="cell label">S</div>
              <div class="cell">4</div>
            </div>
            <div class="row">
              <div class="cell label">T</div>
              <div class="cell">4</div>
            </div>
            <div class="row">
              <div class="cell label">W</div>
              <div class="cell">1</div>
            </div>
            <div class="row">
              <div class="cell label">I</div>
              <div class="cell">4</div>
            </div>
            <div class="row">
              <div class="cell label">A</div>
              <div class="cell">1</div>
            </div>
            <div class="row">
              <div class="cell label">LD</div>
              <div class="cell">7</div>
            </div>
            <div class="row">
              <div class="cell label">CL</div>
              <div class="cell">7</div>
            </div>
            <div class="row">
              <div class="cell label">WP</div>
              <div class="cell">7</div>
            </div>
            <div class="row">
              <div class="cell label">IN</div>
              <div class="cell">7</div>
            </div>
            <div class="row">
              <div class="cell label">Sv</div>
              <div class="cell">3+</div>
            </div>
            <div class="row">
              <div class="cell label">Inv</div>
              <div class="cell">-</div>
            </div>
            <div class="row">
              <div class="cell label">Base</div>
              <div class="cell">32mm</div>
            </div>
          </div>

          <h4 id="Characteristics">Characteristics</h4>
          <p>
            A Characteristic is a specific type of value attached to Models.
            Each Characteristic is expressed as a name, such as ‘Weapon Skill’
            and a linked numerical value, While most Models will have the same
            Characteristics (notably Models with the Vehicle Type have a
            different set of Characteristics to other Models), the values
            attached to those Characteristics will often be different and
            determine how effective that Model is at certain actions in a
            Battle. A full list of Characteristics and the purpose of each is
            presented
            <a
              href=""
              @click.prevent="scrollToSection('characteristics')"
              class="italic"
            >
              there</a
            >.
          </p>
          <h5 id="unit">Unit</h5>
          <p>
            A Unit is a gaming element composed of one or more Models. Players
            will generally utilise Units rather than individual Models to make
            moves or conduct attacks, with all the Models that are part of that
            Unit being part of those moves or attacks. The composition of a
            given Unit is decided by the Controlling Player during Army
            selection, but can be altered during a Battle as Models are Removed
            as Casualties or Models with certain Special Rules or Types join or
            leave existing Units.
          </p>
          <h4>Unit Coherency</h4>
          <p>
            All Models in a Unit must remain within a certain distance of at
            least one other Model that is part of the same Unit. This is
            referred to as being in Unit Coherency, the Rules governing Unit
            Coherency are presented in more detail
            <a
              href=""
              @click.prevent="scrollToSection('coherency')"
              class="italic"
            >
              there</a
            >.
          </p>
          <h4>Unit Profile</h4>
          <p>
            Sometimes the Rules may refer to a Unit Profile, this indicates the
            set of variables that determine what is included in a Unit as well
            as the Points Value of the Unit. A Unit Profile is most often
            presented as a full page which clearly indicates the Unit's Points
            Value, composition, Wargear options and other important
            characteristics.
          </p>
          <p>
            A Unit Profile does not exist in isolation, and each Unit Profile is
            considered part of an Army List - a collection of Unit Profiles that
            defines a single Faction and determines which Units may be included
            in a given Detachment (see Army and Army List).
          </p>
          <h5 id="detach">Detachment</h5>
          <p>
            A Detachment is a gaming element composed of one or more Units. The
            composition of a given Detachment is decided by the Controlling
            Player during Army selection based on the Force Organisation Chart
            being used for that Army. A Detachment's main function is in the
            selection of an Army, and during an individual Battle imposes only
            limited restrictions for the Models and Units that are part of that
            Detachment. Any restrictions imposed on Units during a Battle based
            on the Detachment it was selected as part of will most often be due
            to interactions between Units of different Factions
            <a
              href=""
              @click.prevent="scrollToSection('UoDFoA')"
              class="italic"
            >
              see there</a
            >.
          </p>
          <h4>Force Organisation Chart</h4>
          <p>
            A Force Organisation Chart is used in the selection of an Army,
            allowing a Player to determine which Units may be included in an
            Army. As a tool intended purely for use in Army selection, a Force
            Organisation Chart rarely has any effect on Models or Units that
            were selected as part of it during a Battle. The Rules governing
            Force Organisation Charts and Army selection are presented in more
            detail
            <a href="" @click.prevent="scrollToSection('CASR2')" class="italic">
              there</a
            >.
          </p>
          <h5 id="faction">Faction</h5>
          <p>
            Faction is a type of Trait that refers to the various forces that
            fought during the Horus Heresy. Each Model in an Army must belong to
            one of these Factions. Examples of Factions include: each of the
            Space Marine Legions (Ultramarines, Sons of Horus, etc.), the Legio
            Custodes, the Sisters of Silence and the Mechanicum. A given
            Detachment will usually only include Models from one Faction (though
            an Army may include Models from more than one Faction) and certain
            Special Rules only affect Models with a certain Faction.
          </p>
          <h4>Trait</h4>
          <p>
            A Trait is similar to a Characteristic, in that it is attached to
            specific Models, however a Trait has no numerical value attached to
            it. Unlike Characteristics a Trait has no intrinsic Rules attached
            to it, but other Rules may operate differently when targeting a
            Model with a specific Trait.
          </p>
          <h4>Allegiance</h4>
          <p>
            Allegiance is a type of Trait that defines the two sides of the
            Horus Heresy - Loyalist and Traitor. Each Model in an Army must
            belong to the same Allegiance, and most Battles will pit an Army
            composed of Models with one Allegiance against an Army composed of
            Models of the opposite Allegiance. Furthermore, some Special Rules
            may operate differently when targeting a Model with a certain
            Allegiance.
          </p>
          <h5 id="army">Army</h5>
          <p>
            An Army is a gaming element composed of one or more Detachments. The
            composition of a given Army is decided by the Controlling Player
            during Army selection based on the Army List being used for that
            Army. An Army's main function is in deciding which Models and Units
            may be deployed in a Battle, and during an individual Battle imposes
            only limited restrictions for the Models and Units that are part of
            that Army.
          </p>
          <h4>Army Roster</h4>
          <p>
            An Army Roster is a complete list of all Models, Units and
            Detachments in a given Army. This should include details on any
            selected Wargear, Special Rules, Traits and the Points Value of all
            Models and Units in the Army. An Army Roster may be viewed by any
            Player in a Battle as soon as that Battle is begun and is not
            considered secret unless another Rule requires otherwise.
          </p>
          <h4>Army List</h4>
          <p>
            An Army List is a list of Units and Models that comprise a Faction.
            It is used by a Player to select an Army in conjunction with a Force
            Organisation Chart. The Rules governing Army Lists and Army
            selection are presented in more detail
            <a href="" @click.prevent="scrollToSection('CASR2')" class="italic">
              there</a
            >.
          </p>
          <h4>Points, Points Limits, And Points Value</h4>
          <p>
            Points are used to gauge the relative value of a given Model, Unit,
            Special Rule or item of Wargear. Every Army is selected by expending
            Points from a fixed Points Limit agreed before a Battle (the
            standard Points Limit for a Battle is 3,000 Points) to add Units to
            the Army. Each Army List assigns a fixed Points Value to each Model,
            Unit and option available as part of that Army List, a value which
            is only used as part of selecting an Army. The Points Value of each
            Unit and the total Points Value of the Army must be listed on that
            Army's Army Roster. The total Points Value of an Army can be any
            value equal to or lower than the Points Limit for that Battle - but
            may not be greater than the Points Limit agreed.
          </p>
          <h5 id="dice">Dice</h5>
          <p>
            The term Dice (or rarely 'die' for a single dice, or 'D6' in certain
            older publications) will always refer to one or more six-sided dice
            with a numerical value shown on each face. In all cases, each Dice
            will have a '1', a '2', a '3', a '4', a '5' and a '6' face.
            Sometimes Dice will have a number printed on the face, while
            sometimes the value may be represented by a number of 'pips'. Some
            Dice may replace one of the faces, usually the '1' or '6' face, with
            a decorative symbol - this symbol will always represent the missing
            value. It is good practice to present such Dice to your opponent
            before the Battle and explain which faces use symbols to avoid
            confusion when rolling.
          </p>
          <h4>Scatter Dice</h4>
          <p>
            Some Dice do not have numbers on their faces, but instead show
            arrows and target symbols. These are known as Scatter Dice and are
            used to resolve Scatter Rolls. The Rules for using Scatter Dice and
            making Scatter Rolls are fully explained
            <a
              href=""
              @click.prevent="scrollToSection('ScatterR')"
              class="italic"
            >
              there</a
            >.
          </p>
          <h4>Roll (Re-Roll)</h4>
          <p>
            The term Roll indicates when one or more Dice are to be picked up by
            a Player and rolled onto the Battlefield or other flat surface and
            the results noted to resolve an attack or Special Rule. The result
            of a Roll is determined by reading the uppermost face on the Dice
            after it has come to rest. Each individual action that requires a
            Roll will detail how many Dice are to be Rolled and how the results
            are to be interpreted. Sometimes a Rule may allow for one or more
            Dice to be Re-rolled, this means the Dice indicated may be Rolled
            again after it has come to rest, and the new result replaces the
            first result - no single Dice may ever be Re-rolled more than once.
          </p>
          <h4>Cocked Dice</h4>
          <p>
            Sometimes, when Rolling a Dice, a Dice may come to rest in a
            position which makes it difficult to identify which face is
            uppermost. This is referred to as a Cocked Dice. A Cocked Dice
            should be Re-rolled if the Players cannot reasonably agree as to
            which face is uppermost (this Re-roll does not limit the ability of
            the Dice to be further Re-rolled if a Rule allows it).
          </p>
          <h4>Modifier</h4>
          <p>
            Some Rules will apply a bonus or penalty to the results of a Roll,
            either to an individual Dice or to the total of an entire Roll, or
            to the value of a Characteristic. This bonus or penalty is known as
            a Modifier. Most often a Modifier will take the form of the addition
            or subtraction of a fixed number, but on rare occasions may require
            the multiplication or division of a result. More information on
            Modifiers and how they are applied can be found
            <a href="" @click.prevent="scrollToSection('CaM')" class="italic">
              there</a
            >.
          </p>
          <h5 id="attacks">Attacks</h5>
          <p>
            An attack is a type of Roll that represents Models firing or
            striking at the enemy. Attacks can be both Ranged (when the Models
            are at a distance from one another) or Melee (when the Bases of the
            Models are in contact with each other), and usually require several
            separate Rolls to completely resolve. The intent of an attack is
            normally to remove an enemy Model from the Battlefield, but can also
            have other effects. Attacks and the Rules for making them are
            presented
            <a href="" @click.prevent="scrollToSection('TLoF')" class="italic">
              there</a
            >.
          </p>
          <h5 id="wargear">Wargear</h5>
          <p>
            Wargear represents the Weapons and equipment shown on Models.
            Wargear can be broken down into two types, those that are used to
            make attacks and those that are not. Wargear that is used to make
            attacks is often referred to as a Weapon and has a separate Weapon
            Profile, while Wargear that is not used to make attacks will be
            formatted more like a Special Rule.
          </p>
          <h5 id="measure">Measuring</h5>
          <p>
            In the context of these rules, the term Measuring refers to when a
            Player is required to Measure a distance on the Battlefield, most
            commonly when moving a Model or checking range for an Attack. In the
            Warhammer: The Horus Heresy - Age of Darkness rules, Measuring is
            always done in inches ("). Note that when measuring distance, any
            fractional values are always rounded up to the nearest whole inch.
            So if a distance of 4.3" was measured, it would be rounded up to a
            distance of 5" instead.
          </p>
          <h4>tape measure</h4>
          <p>
            The most common device used to Measure distances in Warhammer: The
            Horus Heresy - Age of Darkness Battles is a Tape Measure, and the
            Rules may sometimes refer to this. In all cases the term Tape
            Measure can be considered to refer to any device or tool used to
            measure distances during a Battle.
          </p>
          <h5 id="blast">Blast Marker</h5>
          <p>
            A Blast Marker is a round Marker of a specific diameter used to
            determine which Models have been hit by certain types of attack and
            other effects. The standard size for a Blast Marker is a 3" diameter
            Marker, but 5" (Large) and 7" (Massive) are also used. Blast Markers
            and the Rules for using them are presented
            <a href="" @click.prevent="scrollToSection('TaBM')" class="italic">
              there</a
            >.
          </p>
          <h4>Template</h4>
          <p>
            A Template is a type of Marker of irregular shape, unlike Blast
            Markers which are always circular. The most common type of Template
            is the teardrop shaped Flame Template, which is used like a Blast
            Marker to determine which Models are hit by certain attacks.
            Templates and the Rules for using them are presented
            <a href="" @click.prevent="scrollToSection('TaBM')" class="italic">
              there</a
            >.
          </p>
          <h5 id="battlefield">Battlefield</h5>
          <p>
            The area on which a Battle is resolved is referred to as the
            Battlefield. For most Battles this will be an area 6 foot (72") wide
            and 4 foot (48") across and a clear delineation should be made to
            show where the Battlefield ends.
          </p>
          <h5 id="battle">Battle</h5>
          <p>
            A Battle is the term used to refer to an encounter between two
            Armies resolved using the Warhammer: The Horus Heresy - Age of
            Darkness Rules. Most Battles will involve two Players and last for
            four Battle Turns, though this can vary.
          </p>
          <h5 id="turn">Turn</h5>
          <p>
            A Battle is split into a number of Turns. Once the last Turn of a
            Battle has been completely resolved, the Battle ends. In general,
            when used without a qualifier, the term Turn refers to Battle Turns.
          </p>
          <h4>Battle Turn</h4>
          <p>
            A Battle Turn is defined as all Players having resolved a single
            Player Turn as the Active Player (thus there are usually two Player
            Turns in each Battle Turn). In general a Battle is measured in
            Battle Turns to allow all Players to have the same number of Player
            Turns as the Active Player and so an equal chance to interact with
            the Mission, accumulate Victory Points and win. In general, Player
            Turns within a Battle Turn will always follow the same order - in
            that one Player will always take the role of the Active Player first
            in each Battle Turn.
          </p>
          <h4>Player Turn</h4>
          <p>
            A Player Turn is defined as one cycle through the Turn Sequence with
            the same Player acting as the Active Player in each phase. Once a
            Player Turn has been completed, a new one is begun with the other
            Player taking the role of Active Player.
          </p>
          <h4>Phases</h4>
          <p>
            All Player Turns are divided into Phases - the main Phases are
            Movement, Shooting and Assault, but each Turn incorporates a Start
            and End Phase. These Phases are resolved in order (Start; Movement;
            Shooting; Assault; End) to form a single Player Turn. In any given
            Phase, one Player will take the role of Active Player and the other
            that of Reactive Player, usually the same Player will take the role
            of Active Player in all Phases of a single Player Turn.
          </p>
          <h5 id="specials">Rules And Special Rules</h5>
          <p>
            The term 'Rule' refers to any instructions that allow Players to
            resolve a Battle, covering all the interactions between Models and
            Units (such as moving, Shooting and making Assaults). All of the
            material in the Principles of Combat, Rules of Battle and Battles in
            the Age of Darkness sections of this book are considered to be
            Rules. Special Rules present advanced Rules that modify how the
            standard Rules work, and can be found in the Armoury of the Age of
            Darkness section. In all cases, Special Rules take precedence over
            Rules where the two present differing instructions.
            <router-link to="/special-rules">Special Rules There.</router-link>
          </p>
          <h5 id="principles">Principles Of Combat</h5>
          <p class="bold">
            The Principles of Combat are the basic Rules of the game, and will
            explain how to undertake all basic and advanced game actions - such
            as attacking or moving.
          </p>
          <p>
            This section contains all of the Rules that govern resolving actions
            in a Battle, from moving and attacking, to Tactical Statuses and
            Reactions. The section that follows,
            <a
              href=""
              @click.prevent="scrollToSection('battlerules')"
              class="italic"
            >
              The Rules of Battle</a
            >, covers when these actions are resolved and in what order as well
            as detailing any unique Rules that occur in the Phases of a Turn.
          </p>
          <p>
            This section is broken down into two discrete parts: Basic
            Principles and Advanced Principles. Basic Principles covers making
            attacks and moving Models, as well as the Model Characteristics and
            Model Types required to resolve such actions. Advanced Principles
            covers Tactical Statuses, Reactions, Psychic Powers and more
            advanced Rules for Models that use the Vehicle Type, and Models that
            use the Flyer Sub-Type.
          </p>
          <h3 id="characteristics">Characteristics</h3>
          <ul>
            <li>
              <a href="" @click.prevent="scrollToSection('CaM')">
                Characteristics and Modifiers
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('MaSToA')">
                Modifiers and Saving Throws or AP
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('MaMCV')">
                Maximum and Minimum Characteristic Values
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('MC')">
                Model Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('CC')">
                Core Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('DC')">
                Damage Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('AC')">
                Advanced Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('ST')">
                Saving Throws
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('DMT')">
                Damage Mitigation Tests
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('VC')">
                Vehicle Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('WC')">
                Wargear Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('WWMC')">
                Weapons With Multiple Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('CTMoC')">
                Characteristics That Modify Other Characteristics
              </a>
            </li>
            <li>
              <a href="" @click.prevent="scrollToSection('Traits')"> Traits </a>
            </li>
          </ul>
          <p class="bold">
            This section presents all of the Rules for recording and
            understanding the Characteristics used to represent Models, Units
            and Weapons.
          </p>
          <p>
            Characteristics are sets of values attached to Models and Wargear
            and determine how effective they are in a Battle. Models and Wargear
            have different sets of Characteristics and some
            <router-link to="/unit-types" class="italic">Types</router-link>
            modify which Characteristics are used by certain Models. Every Model
            and item of Wargear will have a Profile that lists all of the
            Characteristics needed and the numbers associated with those
            Characteristics.
          </p>
          <p>
            All Characteristics are represented by a single number, indicating
            how powerful they are - with higher numbers indicating a greater
            ability and referred to as their 'value'. In some cases this value
            may be shown not as a number, but as another Characteristic - this
            second Characteristic is referred to as the Reference
            Characteristic.
          </p>
          <p class="italic">
            For example, the Strength Modifier Characteristic of a chainsword (a
            Weapon) might be listed as 'S' rather than a number. This indicates
            that the Strength Modifier Characteristic of that Weapon is the same
            as the Strength Characteristic of the Model that has it.
          </p>
          <p>
            In these cases the Current Value of the Reference Characteristic is
            considered the Base Value of the Characteristic whose value is to be
            determined (when the Current Value of the Reference Characteristic
            changes, so too does the Base Value of the Characteristic it
            determines). No Characteristic may have a value less than 0.
          </p>
          <p>
            The value shown for a Characteristic as part of a Model or Wargear
            profile is known as its 'Base Value' - this can be modified during
            gameplay by Special Rules and attacks, this modified value is
            referred to as its 'Current Value'. Certain Characteristics, such as
            Movement and Wounds, will have additional effects when reduced to a
            value of 0. This will be noted and explained in the Rules for that
            Characteristic.
          </p>
          <p>
            The exception to these Rules are a Sub-Type of Characteristic
            referred to as Saving Throws, the most common of these being Armour
            Saves. Saving Throws are represented by a number indicating the
            minimum result needed to succeed on a Test using that Save, and as
            such lower numbers are more valuable. In addition, Saving Throws
            will usually have a '+' symbol after their numerical value to
            distinguish them from other Characteristics.
          </p>
        </div>
        <h4 id="CaM">Characteristics and Modifiers</h4>
        <p>
          Characteristics can be modified by various Rules and Special Rules,
          temporarily altering the Base Value of that Characteristic, with the
          modified value referred to as its Current Value. If no modifiers have
          been applied to a given Characteristic then its Current Value is the
          same as its Base Value. The most common modifiers will add or subtract
          a fixed number from the Characteristics Base Value for a set duration,
          though some modifiers may multiply or divide the Base Value.
        </p>
        <p>
          If a Rule calls for a modifier to be applied to a Characteristic that
          has already been modified, then that modifier is applied to the
          Current Value, not the Base Value. Modifiers that add or subtract a
          fixed value to the Characteristic do so to the Current Value and
          modifiers that multiply or divide the Characteristic multiply or
          divide the Current Value. Where multiple modifiers are applied to a
          Characteristic at the same time, any modifiers that multiply the
          Characteristic and/or modifiers that divide the Characteristic are
          applied first, then any modifiers that add to or subtract from the
          Characteristic are applied last.
        </p>
        <div class="border">
          <h4>Designer's Note</h4>
          <p>
            Where any Rules call for multiple modifiers of different kinds to be
            applied to a value, they are always applied in the following order:
            multiplication then division, then addition and finally subtraction.
          </p>
        </div>
        <p>
          Some modifiers may simply 'set' the Current Value of a Characteristic
          to a specific value instead of modifying the Current Value or Base
          Value. Such modifiers override all other modifiers and are always
          applied last, replacing the modified Current Value with the set value.
        </p>
        <p>
          For example, a Model's Strength Characteristic has a Base Value of 4
          on its Unit Profile.
        </p>
        <ul>
          <li class="italic">
            If this Characteristic has a modifier of '+1' applied to it, its
            Current Value would become 5.
          </li>
          <li class="italic">
            If it had modifiers of both '+3' and '-1' applied to it then its
            Current Value would be 6.
          </li>
          <li class="italic">
            If it had a modifier of 'x2' applied to it then its Current Value
            would be 8.
          </li>
          <li class="italic">
            If it had a modifier of 'x2' and '+1' applied to it then its Current
            Value would be 9.
          </li>
          <li class="italic">
            If a modifier set its value to '2', then its Current Value would be
            2.
          </li>
          <li class="italic">
            If it had a modifier of 'x2' and '+1' applied to it and another
            modifier also set its value to '2', then its Current Value would be
            2
          </li>
        </ul>
        <div class="border">
          <h4 id="MaSToA">Modifiers and Saving Throws or AP</h4>
          <p>
            As the sub-type of Characteristics known as Saving Throws are
            presented and operate differently to other Characteristics, there
            are a number of specific rules and set terminology regarding
            modifying Saving Throws. These Rules are also used when modifying
            the Armour Piercing or AP Characteristic of Weapons:
          </p>
          <ul>
            <li>
              Any modifier that instructs a Payer to 'improve' a Saving Throw or
              AP by one step is instructing a Player to reduce the value of the
              number that represents that Characteristic by 1, which in the case
              of a Saving Throws and AP is beneficial. As an example, if a model
              has an Armour Save Characteristic of '4+' and a Rule instructs the
              Player to Improve the Model's Armour Save by one step, then that
              Model's Armour Save changes from '4+' to '3+'.
            </li>
            <li>
              Any modifier that instructs a Player to 'reduce' a Saving Throw or
              AP by one step is instructing a Player to increase the value of
              the number that represents the Characteristic by 1, which in the
              case of a Saving Throw and AP is detrimental. As an example, if a
              Model has an Armour Save Characteristic of '4+' and a Rule
              instructs the Player to reduce the Model's Armour Save by one
              step, then that Model's Armour Save goes from '4+' to '5+'.
            </li>
            <li>
              A Saving Throw or the AP Characteristic cannot be improved to be
              better than a value of '2+' or '2', if a modifier instructs a
              Player to do so then the value remains at '2+' or '2'.
            </li>
            <li>
              If a modifier instructs a Player to reduce a Saving Throw or the
              AP Characteristic to worse than a value of '6+', then the value of
              that Saving Throw or the AP Characteristic becomes '' - a Saving
              Throw or AP Characteristic may not be reduced to a value worse
              than'-', and if a modifier instructs a Player to do so then the
              value remains at '-'.
            </li>
          </ul>
        </div>
        <p>
          All modifiers are temporary adjustments to the Base Value of a
          Characteristic - although that temporary duration may be defined as an
          entire Battle. In most cases, a modifier will only be in effect for
          one or more Player Turns or Battle Turns as defined by the Rule that
          applies the modifier. Where a modifier has a duration of an entire
          Battle, then it remains in effect until all Turns and all aspects of
          the Battle, including calculating Victory Points and deciding the
          winner, have been resolved. Where a modifier has a duration of a
          Battle Turn, then it remains in effect until all Phases of both Player
          Turns have been completely resolved. Where a modifier has a duration
          of a Player Turn, then it remains in effect until the Effect Sub-Phase
          of the End Phase in that Player Turn has been completely resolved.
          Where a modifier has a duration of a Phase or Sub-Phase then it
          remains in effect until all Steps within that Phase or Sub-Phase have
          been completely resolved.
        </p>
        <p>
          When the duration of a modifier ends, all of the effects of the
          modifier are removed. If it is the only modifier affecting the Model
          then the modified Characteristic will return to its Base Value, unless
          another Rule states otherwise. If more than one modifier is affecting
          the Model and not all of their durations have ended then only the
          effect of the modifier/s which has ended their duration are removed,
          and the Current Value of the Characteristic is adjusted to reflect
          this.
        </p>
        <h4 id="MaMCV">Maximum and Minimum Characteristic Values</h4>
        <p>
          When modifying most Characteristics there are specific limits to the
          degree to which they can be modified. These limits vary depending on
          whether a Player is attempting to increase or decrease the
          Characteristic and the type of Characteristic being modified.
        </p>
        <p>
          In all cases a modifier cannot change the value of a Characteristic to
          a negative value or to a fractional value. If a modifier would adjust
          the value of a Characteristic below 0, then that Characteristic is
          instead changed to a Current Value of 0, while if a modifier would
          leave a Characteristic at a fractional value, then the Current Value
          of the Characteristic is rounded down to the nearest whole integer.
        </p>
        <p>
          However, when increasing a Characteristic it may be increased above
          its Base Value and can be increased to any value, with no upper limit.
          In practice there will be few occasions where an increase above a
          value of 10 applies a substantial benefit to rolls, but it is possible
          for most Characteristics. For certain types of Characteristics, most
          notably Saving Throws, these limits do not apply. In these cases,
          specific Rules will be presented to explain what the limits for those
          Characteristics are.
        </p>
        <h4 id="MC">Model Characteristics</h4>
        <p>
          Most Models use the same set of Core Characteristics, all defined
          below. Some Models have alternative Characteristics - most notably
          Models with the Vehicle Type, the most common of these are defined in
          this section, while rarer examples will be defined as part of the
          Rules that introduce them.
        </p>
        <h4 id="CC">Core Characteristics</h4>
        <p>
          The following Core Characteristics are used to undertake all the most
          common actions that form the Age of Darkness Rules, and will be
          referred to in every Phase and Turn of a Battle. Almost every Model in
          the game uses these Core Characteristics, though Models with certain
          Types may either remove or replace certain of these Characteristics.
        </p>
        <p>
          All Core Characteristics are represented by a single number, and
          higher values always indicate a more powerful ability. During a
          Battle, Core Characteristics are primarily used to resolve Tests.
        </p>
        <ul>
          <li>
            <span class="bold">Movement (M)</span> - The Movement Characteristic
            is primarily used to determine how far a Model can move during the
            Movement Phase, with higher values denoting an ability to move
            further
            <a href="" @click.prevent="scrollToSection('MovU')" class="italic">
              there</a
            >. If a Model's Movement Characteristic is reduced to 0, then the
            Controlling Player may not move, Rush or otherwise change the
            Model's position on the Battlefield regardless of any other Rules
            that may affect it until its Movement is changed to a value greater
            than 0.
          </li>
          <li>
            <span class="bold">Weapon Skill (WS)</span> - The Weapon Skill
            Characteristic is primarily used to determine a Model's ability to
            attack during a Combat in the Assault Phase, with a higher value
            making it both easier for the Model to make attacks and more
            difficult for opponents to do so (see Weapon Skill table on header).
            If a Model's Weapon Skill is reduced to 0 then that Model cannot
            make attacks in a Combat (if the Hit Test could have triggered a
            variable Special Rule, then that Rule is considered to automatically
            fail to activate as part of the Test). Enemy Models whose attacks
            target a Model with Weapon Skill 0, or a Unit whose majority Weapon
            Skill is 0, treat the Target Model as though it had a Weapon Skill
            of '1' to determine the Target Number for any Hit Tests required.
          </li>
          <li>
            <span class="bold">Ballistic Skill (BS)</span> - The Ballistic Skill
            Characteristic is primarily used to determine a Model's ability to
            make attacks during a Shooting Attack, with a higher value making it
            easier to succeed at attacks (see Ballistic Skill table on header).
            If a Model's Ballistic Skill is reduced to 0 then that Model cannot
            make Shooting Attacks, even if no Hit Test is required or it would
            have otherwise automatically succeeded due to the use of a Special
            Rule.
          </li>
          <li>
            <span class="bold">Strength (S)</span> - The Strength Characteristic
            is primarily used to determine the effectiveness of Wound Tests
            inflicted by Melee Weapons, with a higher value making it easier to
            inflict wounds (see To Wound table on header). If a Model's Strength
            Characteristic is reduced to 0 then any Wound Tests made that would
            use that Characteristic or for any Melee Weapon automatically fails
            and no Dice are rolled for it (if the Wound Test could have
            triggered a variable Special Rule, then that Rule is considered to
            automatically fail to activate as part of the Test).
          </li>
          <li>
            <span class="bold">Toughness (T)</span> - The Toughness
            Characteristic is primarily used as part of Wound Tests, with a
            higher value making it harder for attacks to inflict wounds on a
            Target Unit or Model (see To Wound table on header). If a Model is
            reduced to 0 Toughness then all Wound Tests made targeting it are
            automatically successful and no Dice are rolled (if the Wound Test
            could have triggered a variable Special Rule, then that Rule is
            considered to have been automatically activated as part of the
            Test).
          </li>
          <li>
            <span class="bold">Initiative (I)</span> - The Initiative
            Characteristic is primarily used to determine the order in which
            Models make attacks during Combat, with Models with a higher
            Initiative Value making attacks before those with lower values. For
            more details, see the Rules for the Assault Phase on
            <a
              href=""
              @click.prevent="scrollToSection('assaultPhase')"
              class="italic"
            >
              there</a
            >. When a Model's Initiative Characteristic is reduced to 0, then
            that Model will generally be forced to attack after other Models,
            but suffers no other penalty.
          </li>
          <li>
            <span class="bold">Attacks (A)</span> - The Attacks Characteristic
            is primarily used to determine the number of attacks a Model may
            make in a Combat, with the value of the Characteristic indicating
            the number of attacks that can be made
            <a
              href=""
              @click.prevent="scrollToSection('assaultPhase')"
              class="italic"
            >
              see there</a
            >. When a Model's Attacks Characteristic is reduced to 0 then that
            Model may not make any attacks as part of a Combat.
          </li>
        </ul>
        <h4 id="DC">Damage Characteristics</h4>
        <p>
          The following sub-type of Characteristic is used to represent a
          Model's ability to sustain damage without being destroyed. The two
          most common Damage Characteristics are those used to represent this
          for Models with and without the Vehicle Type.
        </p>
        <ul>
          <li>
            <span class="bold">Wounds (W)</span> - The Wounds Characteristic is
            primarily used to determine a Model's capacity for receiving Damage
            during a Battle, with a higher value allowing a Model to sustain
            more damage before it is removed from play. When a Model's Wounds
            Characteristic is reduced to 0 that Model is Removed as a Casualty,
            see
            <a href="" @click.prevent="scrollToSection('DaRaC')" class="italic">
              Destroyed and Removed as Casualties</a
            >.
          </li>
          <li>
            <span class="bold">Hull Points (HP)</span> - The Hull Points
            Characteristic is primarily used to determine a Model with the
            Vehicle Type's capacity for receiving damage during a Battle, with a
            higher value allowing a Model to sustain more damage before it is
            removed from play. When a Model's Hull Points Characteristic is
            reduced to 0 that Model is removed from play as a Casualty, see the
            Rules for
            <a href="" @click.prevent="scrollToSection('RVMaC')" class="italic">
              Removing Vehicle Models as Casualties</a
            >.
          </li>
        </ul>
        <h4 id="AC">Advanced Characteristics</h4>
        <p>
          The following Sub-Type of Characteristics are only used for Models
          with certain Types, and cover the Rules for Tactical Statuses, Psychic
          Powers and other Special Rules. These Characteristics will tend to
          have a higher Base Value than Core Characteristics, though a higher
          value still indicates a more powerful ability, and are meant to set
          the Target Number for Checks rather than Tests
          <a href="" @click.prevent="scrollToSection('RVMaC')" class="italic">
            (see the Rules for Checks)</a
          >.
        </p>
        <ul>
          <li>
            <span class="bold">Leadership (LD)</span> - The Leadership
            Characteristic is primarily used to resolve Checks to determine when
            a Unit will stand its ground or flee. For more details see the
            <a href="" @click.prevent="scrollToSection('CR')" class="italic">
              Combat Resolution Rules</a
            >. When a Model's Leadership Characteristic reaches 0, any Check it
            is used to determine the Target Number for automatically fails with
            no Dice rolled. However, a Unit that includes one or more Models
            with a Leadership of 0 but uses a Model with a higher value to make
            a Panic or Leadership Check suffers no penalties.
          </li>
          <li>
            <span class="bold">Willpower (WP)</span> - The Willpower
            Characteristic is primarily used for Checks made for Psychic Attacks
            or Powers. For more details see the Rules for
            <a href="" @click.prevent="scrollToSection('PsP')" class="italic">
              Psychic Powers</a
            >. When a Model's Willpower Characteristic reaches 0, any Check it
            is used to determine the Target Number for, automatically fails with
            no Dice rolled. However, a Unit that includes one or more Models
            with a Willpower of 0 but uses a Model with a higher value to make a
            Willpower Check suffers no penalties.
          </li>
          <li>
            <span class="bold">Intelligence (IN)</span> - The Intelligence
            Characteristic is primarily used for Checks to activate certain
            Wargear items and Rules. When a Model's Intelligence Characteristic
            reaches 0, any Check it is used to determine the Target Number for
            automatically fails with no Dice rolled. However, a Unit that
            includes one or more Models with an Intelligence of 0 but uses a
            Model with a higher value to make an Intelligence Check suffers no
            penalties.
          </li>
          <li>
            <span class="bold">Cool (CL)</span> - The Cool Characteristic is
            primarily used to resist Statuses. For more details see the Rules
            for
            <a
              href=""
              @click.prevent="scrollToSection('tacticalSt')"
              class="italic"
            >
              Tactical Statuses</a
            >. When a Model's Cool reaches 0, any Check it is used to determine
            the Target Number for automatically fails with no Dice rolled.
            However, a Unit that includes one or more Models with a Cool of 0
            but uses a Model with a higher value to make a Cool Check suffers no
            penalties.
          </li>
        </ul>
        <h4 id="ST">Saving Throws</h4>
        <p>
          Saving Throws are a sub-type of Characteristic not used by all Types.
          Unlike most other types of Characteristics, Saving Throws represented
          by a lower value are better val than Saving Throws represented by a
          higher value. All Saving Throws are recorded as a single number
          followed by a '+' sign.
        </p>
        <ul>
          <li>
            <span class="bold">Armour Save (SAV)</span> - An Armour Save is used
            to attempt to negate wounds suffered by a Model. When a Model's
            Armour Save is at its minimum value of '-', that Model may not make
            Armour Tests.
          </li>
          <li>
            <span class="bold">Invulnerable Save (INV)</span> - An Invulnerable
            Save is used to negate wounds that would normally ignore or bypass
            an Armour Save. When a Model's Invulnerable Save is at its minimum
            value of, that Model may not make Invulnerable Tests.
          </li>
          <li>
            <span class="bold">Cover Save (COV)</span> - A Cover Save is used to
            negate wounds that would normally ignore or bypass an Armour Test.
            Few Models will have a Cover Save Characteristic, but other Rules
            may grant them one temporarily - such as Area Terrain. When a
            Model's Cover Save is at its minimum value of "-", that Model may
            not make Cover Tests.
          </li>
        </ul>
        <div class="border">
          <h4 id="DMT">Damage Mitigation Tests</h4>
          <p>
            Damage Mitigation Tests are similar in execution to Saving Throws,
            but are Special Rules and not Characteristics. As such Damage
            Mitigation Tests, despite their similarities to Saving Throws,
            cannot be modified and are not affected by any Rule that targets a
            Saving Throw.
          </p>
        </div>
        <h4 id="VC">Vehicle Characteristics</h4>
        <p>
          The following Characteristics are specific to Models with the Vehicle
          Type, but otherwise follow all of the established Rules for
          Characteristics.
        </p>
        <ul>
          <li>
            <span class="bold">Armour (Front, Side, Rear)</span> - This
            Characteristic will often be presented with various separate
            Sub-Characteristics, one for each of the
            <a href="" @click.prevent="scrollToSection('FirA')" class="italic">
              Tactical Statuses</a
            >. Each of these Sub-Characteristics is used to determine the effect
            of a Model's armour and how hard it is to defeat. When any Armour
            Sub-Characteristic reaches 0, then any Hit on that facing will
            result in an automatic Penetrating Hit without any Dice being rolled
            (if the Hit could have triggered a variable Special Rule, then that
            Rule is considered to automatically activate as part of the Hit).
          </li>
          <li>
            <span class="bold">Transport Capacity</span> - This Characteristic
            is only used to determine how many Models may Embark upon a Model.
            Most Models with the Vehicle Type will have a Transport Capacity of
            0/-, which simply means that no Models may Embark upon that Model.
          </li>
        </ul>
        <!-- первая таблица для десктопа -->
        <table class="unit-general__table" v-if="windowWidth > 800">
          <thead>
            <tr>
              <th class="unit-general__table-tbody__name">Name</th>
              <th>M</th>
              <th>BS</th>
              <th class="vehicle-armour">Front</th>
              <th class="vehicle-armour">Side</th>
              <th class="vehicle-armour">Rear</th>
              <th>HP</th>
              <th>Transport Capacity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="unit-general__table-tbody__name first-letter">
                Rhino
              </td>
              <td data-label="M">12</td>
              <td data-label="BS">4</td>
              <td data-label="Front">12</td>
              <td data-label="Side">11</td>
              <td data-label="Rear">10</td>
              <td data-label="HP">5</td>
              <td data-label="TC">12</td>
            </tr>
          </tbody>
        </table>

        <!-- тут вторая таблица для мобилок -->
        <div class="unit-vehicle__grid-table" v-if="windowWidth <= 800">
          <div class="row header">
            <div class="cell header-cell">Stat</div>
            <div class="cell header-cell first-letter">Rhino</div>
          </div>
          <div class="row">
            <div class="cell label">M</div>
            <div class="cell">12</div>
          </div>
          <div class="row">
            <div class="cell label">BS</div>
            <div class="cell">4</div>
          </div>
          <div class="row">
            <div class="cell label vehicle-armour">Front</div>
            <div class="cell">12</div>
          </div>
          <div class="row">
            <div class="cell label vehicle-armour">Side</div>
            <div class="cell">11</div>
          </div>
          <div class="row">
            <div class="cell label vehicle-armour">Rear</div>
            <div class="cell">10</div>
          </div>
          <div class="row">
            <div class="cell label">HP</div>
            <div class="cell">5</div>
          </div>
          <div class="row">
            <div class="cell label">Transport Capacity</div>
            <div class="cell">12</div>
          </div>
        </div>
        <h4 id="WC">Wargear Characteristics</h4>
        <p>
          In the same manner as Models, certain types of Wargear also have
          Characteristics. The only type of Wargear item to have Characteristics
          in the Core Rules are Weapons, though in future publications other
          types of Wargear with Characteristics may be introduced.
        </p>
        <p>
          Weapons are split into two main categories: Ranged and Melee, which
          use slightly different sets of Characteristics, all defined as
          follows. Some Weapons may have additional or alternative
          Characteristics - these will be defined as part of the Rules that
          introduce them.
        </p>
        <div class="border">
          <h4 id="WWMC">Weapons With Multiple Characteristics</h4>
          <p>
            Both Ranged Weapons and Melee Weapons may have more than one
            Characteristic Profile associated with them, representing different
            modes of attack or special ammunition. Such Weapons do not count as
            multiple Weapons, but a single Weapon with different options for how
            it can be used. In all cases, when the Rules instruct a Player to
            select a Weapon to make attacks with, a Player that controls a Model
            with a Weapon that has multiple profiles and intends to make attacks
            with that Weapon, must select one of the profiles to use for all
            attacks made as part of that action.
          </p>
          <p>
            Once one profile has been chosen for a Weapon that has multiple
            profiles then that same profile must be used to resolve all attacks
            made with that Weapon as part of the same Shooting Attack or Combat.
            The Controlling Player may not switch to a different profile at any
            point during the Shooting Attack or Combat and does not count the
            remaining profiles as separate Weapons. However, in other Shooting
            Attacks or Combats the Controlling Player is free to select a
            different profile from those available.
          </p>
        </div>
        <p>
          The following Characteristics apply to Ranged Weapons. For more
          details on Ranged Weapon Characteristics and the Rules that govern
          them, see the
          <a
            href=""
            @click.prevent="scrollToSection('shooting')"
            class="italic"
          >
            Rules for Shooting Attacks</a
          >.
        </p>
        <ul>
          <li>
            <span class="bold">Range (R)</span> - This Characteristic determines
            the maximum distance, in inches ("), at which attacks may be made
            with a Weapon. A Weapon with Range 0 or may not make attacks as part
            of a Shooting Attack.
          </li>
          <li>
            <span class="bold">Firepower (FP)</span> - This Characteristic is
            used to determine how many Dice are rolled when making attacks with
            this Weapon. A Weapon with a Firepower Characteristic of 0 may not
            be used to make attacks of any kind.
          </li>
          <li>
            <span class="bold">Ranged Strength (RS)</span> - This Characteristic
            is used only during Wound Tests or Armour Penetration Tests for
            attacks made using ranged Weapons. If a Weapon has a Strength
            Characteristic of '0' or 'then any Wound Tests made for it
            automatically fail and no Dice are rolled (if the Wound Test could
            have triggered a variable Special Rule, then that Rule is considered
            to automatically fail to activate as part of the Test).
          </li>
          <li>
            <span class="bold">Armour Penetration (AP)</span> - This
            Characteristic is used to determine if a Model Hit by attacks made
            with a Weapon may make an Armour Test. Like Saving Throws, lower
            values are more valuable for this Characteristic. When modifying the
            Armour Penetration Characteristic the same Rules are used as those
            for modifying Saving Throws.
          </li>
          <li>
            <span class="bold">Damage (D)</span> - This Characteristic
            determines how the Wounds or Hull Points Characteristic of a Target
            Model that fails a Saving Throw after sustaining a wound from a
            Weapon is modified. A Weapon with a Damage Characteristic of 0
            cannot inflict Damage on a Model, regardless of the Weapon's other
            Characteristics or Special Rules.
          </li>
        </ul>
        <div class="border">
          <h4 id="CTMoC">Characteristics That Modify Other Characteristics</h4>
          <p>
            The Characteristics Initiative Modifier, Strength Modifier, and
            Attacks Modifiers are always used as modifiers to one of the
            Characteristics of a Model. As with other modifiers, if the value
            has a '+', '-' or other mathematical notation and then a number it
            is applied as a modifier to the Model's Characteristic. If the value
            is just a number then it replaces the value of the Model's
            Characteristic, and if the value is a letter then the Characteristic
            noted is not modified and its Current Value is used.
          </p>
          <p>
            For example, a Weapon with an Initiative Modifier Characteristic of
            '+1' would allow the Controlling Player to use the Model's Current
            Initiative Characteristic with a +1 modifier added to it to decide
            the Model's Combat Initiative. A Weapon with an Attacks Modifier
            Characteristic of '3' would allow the Controlling Player to make 3
            attacks for that Model, regardless of the Current Value of the
            Model's Attacks Characteristic. Lastly, a Weapon with a Strength
            Modifier Characteristic of 'S' imposes no modifier to the Model's
            Strength Characteristic and its Current Value would be used.
          </p>
        </div>
        <p>
          The following Characteristics apply to Melee Weapons. For more details
          on Melee Weapon Characteristics and the Rules that govern them, see
          the
          <a href="" @click.prevent="scrollToSection('fight')" class="italic">
            Rules for Melee Attacks</a
          >.
        </p>
        <ul>
          <li>
            <span class="bold">Initiative Modifier (IM)</span> - This
            Characteristic is applied as a modifier to a Model's Initiative
            Characteristic to determine that Model's Combat Initiative. A Weapon
            with an Initiative Modifier of 0 forces the Model attacking with it
            to set their Combat Initiative to a value of 0. Furthermore, a
            Weapon with an Initiative Modifier of '1' imposes no modifier to the
            Initiative Characteristic of a Model.
          </li>
          <li>
            <span class="bold">Attacks Modifier (AM)</span> - This
            Characteristic is applied as a modifier to a Model's Attacks
            Characteristic to determine how many Dice are rolled when making
            attacks with this Weapon. A Weapon with an Attacks Modifier
            Characteristic of 0 may not be used to make attacks during the Fight
            Sub-Phase. Furthermore, a Weapon with an Attacks Modifier of 'A'
            imposes no modifier to the Attacks Characteristic of a Model.
          </li>
          <li>
            <span class="bold">Strength Modifier (SM)</span> - This
            Characteristic is applied as a modifier to a Model's Strength
            Characteristic to determine the Strength used to make Wound Tests in
            Combat. A Weapon with a Strength Modifier Characteristic of 0
            automatically fails any Wound Tests during the Fight Sub-Phase and
            no Dice are rolled (if the Wound Test could have triggered a
            variable Special Rule, then that Rule is considered to automatically
            fail to activate as part of the Test). Furthermore, a Weapon with a
            Strength Modifier of 'S' imposes no modifier to the Strength
            Characteristic of a Model.
          </li>
          <li>
            <span class="bold">Armour Penetration (AP)</span> - This
            Characteristic is used to determine if a Model hit by attacks made
            with a Weapon may make an Armour Test. Like Saving Throws, lower
            values are more valuable for this Characteristic. When modifying the
            Armour Penetration Characteristic the same Rules are used as those
            for modifying Saving Throws.
          </li>
          <li>
            <span class="bold">Damage (D)</span> - This Characteristic
            determines how the Wounds or Hull Points Characteristic of a target
            Model that fails a Saving Throw after sustaining a wound or
            Penetrating Hit from a Weapon are modified. A Weapon with a Damage
            Characteristic of 0 cannot inflict Damage on a Model, regardless of
            the Weapon's other Characteristics or Special Rules.
          </li>
        </ul>
        <h4 id="Traits">Traits</h4>
        <p>
          Traits are a special kind of Characteristic, one which all Models have
          but which confers no inherent Rules or benefit on its own. Instead,
          Traits are used by other Special Rules and effects to target specific
          Models and apply benefits or penalties. The most common Traits are
          those for Allegiance and Faction, which are possessed by almost all
          Models. Allegiance requires that each Model have either the Loyalist
          or Traitor Trait, and most Models will gain one or more Traits based
          on the Army List from which they were selected.
        </p>
        <p>
          For example, a Legionary selected from the Imperial Fists Faction and
          selected as part of a Loyalist Army would have the Loyalist and
          Imperial Fists Traits. On their own these Traits have no effect on the
          Model's Characteristics, Points cost or other features, but Rules that
          target Imperial Fists or Loyalist Models will apply their effects to
          the Model.
        </p>
        <p>
          In addition to Models, Weapons can also have Traits. These are usually
          different to those possessed by Models, but are used for the same
          purposes. Weapons will commonly have Traits that define the type of
          Weapon it is or a specific type of usage. For example, a bolt pistol
          has the following Traits: Assault, Bolt. These identify which 'family'
          of Weapons it belongs to for any Rules that might only affect 'Bolt'
          Weapons and notes that it can be used for attacks where only 'Assault'
          Weapons may be used.
        </p>
        <p>
          While they appear similar to Characteristics, it is important to note
          that Traits never have a 'value' attached to them. Furthermore, Traits
          cannot be modified in any way by another Special Rule or effect during
          a Battle, unless a Rule specifically states it affects a Trait.
        </p>
        <h3 id="modeltypes">Model Types</h3>
        <p>
          All Models must have a Type, which determines how they interact with
          the Core Rules. No Model may have more than one Type, but may have a
          number of Sub-Types in addition to their Type, with Sub-Types
          presenting additional Rules that affect that Model and its Type. In
          all cases, the Type that applies to any given Model will be clearly
          shown on its profile.
        </p>
        <p>
          Each Type or Sub-Type presents a set of Rules, all of which apply to
          any Model with that Type or Sub-Type and take precedence over other
          Rules or Special Rules unless that Rule or Special Rule specifically
          states that it overrides a Model's Type or Sub-Type Rules. The
          following Types and Sub-Types comprise the most commonly used Types in
          these Rules, referred to as the Core Types, other publications may
          present additional Types and Sub-Types as needed.
          <router-link to="/special-rules">Special Rules There.</router-link>
        </p>
        <h3 id="units">Units</h3>
        <p>
          A Unit is a group of Models that are considered a single entity on the
          Battlefield and remain near each other during play. While the Rules
          will often refer to Models, most actions are made with Units rather
          than individual Models. There are several key facts to remember when
          considering the Rules for Units:
        </p>
        <ul>
          <li>
            Units do not have Special Rules or Characteristics - only Models
            have Special Rules or Characteristics.
          </li>
          <li>
            During play Models do not take actions during the various Phases of
            the Turn, Units take actions - however, remember that a Unit can
            consist of a single Model.
          </li>
          <li>
            Just as the Characteristics and Special Rules of a Model may be
            modified during play, so too can the number and Type of Models that
            make up a Unit be modified.
          </li>
          <li>
            Any individual Model on the Battlefield that is not part of another
            Unit is considered a Unit of its own. This means that Models on the
            Battlefield or in Reserve are always part of a Unit.
          </li>
          <li>Units must remain in Unit Coherency during a Battle.</li>
        </ul>
        <p>
          The Models that make up a Unit are decided upon before a Battle
          begins, selected by the Player that controls them as part of the
          <a href="" @click.prevent="scrollToSection('CASR2')" class="italic">
            Army Selection process</a
          >. These Units are listed on each Player's Army Roster and must be
          placed onto the Battlefield or into Reserves as a group as shown on
          the Army Roster and must remain together during the Battle. However,
          during play Models with certain Sub-Types (the Command Sub-Type and
          Specialist Sub-Type) may join and leave Units as the Battle
          progresses, both on the Battlefield and in Reserves.
        </p>
        <div class="border">
          <h4 id="DaRaC">Destroyed and Removed as Casualties</h4>
          <p>
            Throughout these Rules the terms 'Destroyed' and 'Removed as
            Casualties' have been used to refer to Models and Units that have
            been taken out of play by enemy action - usually as the result of a
            Shooting Attack or Combat. Units that are 'Destroyed' or entirely
            'Removed as Casualties' are often used as a means for the Opposing
            Player to score Victory Points and thus win a Battle. The two terms
            can be used interchangeably, but most often the term 'Removed as
            Casualties' is used to refer to the removal of an entire Unit that
            was composed of multiple Models, while 'Destroyed' is more commonly
            used to refer to the removal of a single Model or a Unit that was
            composed of a single large Model, such as a tank.
          </p>
        </div>
        <p>
          There is no fixed maximum number of Models that may be included in a
          Unit, though in general Units that include more than 20 Models are
          rare. All Units have a minimum size of one Model, once reduced to less
          than one Model a Unit ceases to exist - depending on how the last
          Model is removed, this can have different consequences. If the last
          Model in a Unit is removed due to having its Wounds Characteristic
          reduced to 0 or due to moving off of the edge of the Battlefield while
          Routed (see
          <a
            href=""
            @click.prevent="scrollToSection('tacticalSt')"
            class="italic"
          >
            Tactical Statuses</a
          >), then that Unit is considered to have been Destroyed or entirely
          Removed as Casualties. If the last Model in a Unit is otherwise
          removed from play with a Wounds Characteristic of 1 or higher, then
          the Unit is considered to no longer exist, but is not considered
          Destroyed. The exception to this are Units that have entered Reserves
          or Aerial Reserves. As the Models from such Units are removed from the
          Battlefield, but not removed from play such Units are not counted as
          Destroyed and may re-enter play at a later point.
        </p>
        <div class="border">
          <h4>Unit and Types</h4>
          <p>
            In general, the following key Rule applies to most questions
            regarding Model Types and Units:
          </p>
          <p class="bold">
            A given Unit may only include Models of one Type and all Models in a
            Unit must be of the same Type.
          </p>
          <p>
            This applies only to Types and not to Sub-Types - most Units will
            include more Models with different Sub-Types and may do so at no
            penalty.
          </p>
          <p>
            Some Special Rules may allow Models to join or be included in Units
            that do not have the same Type as that Model under specific and
            limited circumstances - wherever this is the case, the Special Rule
            that allows this exception will detail all Rules regarding that
            exception.
          </p>
        </div>
        <h3 id="coherency">Unit Coherency</h3>
        <p>
          To be in Unit Coherency all Models in a Unit must be no more than 2"
          measured horizontally or 6" vertically from at least one other Model
          that is in the same Unit. In addition, all Models in a given Unit must
          form one contiguous group while also maintaining Unit Coherency, and
          even if the Models retain Coherency may not split into separate
          groups. When measuring distance to determine if a Unit is in Unit
          Coherency, all distances are measured Base-to-Base (see
          <a href="" @click.prevent="scrollToSection('WCMW')" class="italic">
            the Rules for Measuring</a
          >).
        </p>
        <div>
          <img src="../pct/coherency.png" alt="когеренция пикча" class="img" />
          <p class="italic">
            The example pictured above shows a Unit of Salamanders in Unit
            Coherency - all of the Models form one contiguous group with no more
            than 2" between each Model and at least one other member of the same
            Unit.
          </p>
        </div>
        <p>
          A Unit must remain in Unit Coherency while on the Battlefield. All
          Models in a Unit that is being moved must end that move in Unit
          Coherency - if they cannot then they may not be moved. When removing
          Models from a Unit, Models may be removed in a manner that means the
          Unit will no longer be in Unit Coherency, however, note this may lead
          to penalties being applied - see the Rules for Out of Coherency below.
        </p>
        <h4>Out of Coherency</h4>
        <p>
          If, at the start of the Controlling Player's Movement Phase, a Unit
          controlled by that Player is not in Unit Coherency, then the
          Controlling Player must move that Unit so that it ends the Phase in
          Unit Coherency. If for any reason the Unit cannot end its Movement in
          Unit Coherency then all Models in the Unit automatically gain the
          Suppressed Status. Likewise, if, at the start of any Shooting or
          Assault Phases, any Unit is not in Unit Coherency, then the
          Controlling Player of that Unit must immediately make a Cool Check for
          the Unit or all Models in the Unit gain the Suppressed Status
          <a
            href=""
            @click.prevent="scrollToSection('tacticalSt')"
            class="italic"
          >
            (see there)</a
          >.
        </p>
        <h3 id="join-leave">Joining and Leaving Units</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('JAU')">
              Joining A Unit
            </a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('LAU')">
              Leaving a Unit
            </a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TSS')">
              The Sole Survivor
            </a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('JoLUiR')">
              Joining or Leaving Units in Reserves
            </a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('UoDFoA')">
              Units of Different Factions or Allegiance
            </a>
          </li>
        </ul>
        <p>
          A Model with the Command or Specialist Sub-Type, or the Paragon Type,
          may join and leave Units during a Battle - this is the only exception
          to the Rule that Models in a Unit must remain part of that Unit. A
          Model that cannot move for any reason, has the Routed Status, is
          Locked in Combat, or that is Embarked on any other Model may not join
          or leave any Unit. A Model may only join a Unit if all Models in the
          Unit it is joining have the same Type as that Model. Joining and
          Leaving a Unit occurs during the Movement Phase and is conducted as
          follows:
        </p>
        <h4 id="JAU">Joining a Unit</h4>
        <p>
          To join a Unit, a Model with the Specialist or Command Sub-Type, or
          the Paragon Type, must be in Unit Coherency with the Unit that it is
          to join at the end of the Move Sub-Phase of the Movement Phase. Then
          the Controlling Player need only declare that it has joined the Unit,
          at which point that Model is considered part of the Unit. There is no
          limit to the number of Models that can join a given Unit in a single
          Phase. If a Unit is joined by one or more Models, it may not Move
          further in the same Phase.
        </p>
        <p>
          A Model that joins a Unit will gain any and all Tactical Statuses
          affecting that Unit - but will not gain the effects of any Special
          Rules possessed by other Models in that Unit. Likewise, if the joining
          Model is under the effects of any Tactical Statuses, then all other
          Models in the Unit it has joined will gain the same Statuses - but
          will not gain any Special Rules possessed by the joining Model.
        </p>
        <h4 id="LAU">Leaving a Unit</h4>
        <p>
          To leave a Unit that it is part of, a Model with the Specialist or
          Command Sub-Type, or the Paragon Type, must remain in Unit Coherency
          with the Unit it is part of until the Unit is selected to move during
          the Move Sub-Phase. When the Unit is selected, the Controlling Player
          may declare that any or all Models in that Unit with the Specialist,
          or Command Sub-Types, or the Paragon Type, may leave the Unit. At this
          point any Models that the Controlling Player wishes to have leave the
          Unit must be moved, and must end that move out of Coherency with the
          Unit that those Models are leaving. If, after moving, the Models
          leaving the Unit are out of Coherency with the Unit they began the
          Phase part of, then they are now treated as a separate Unit - but may
          not be selected in the same Movement Phase to make further moves. If
          multiple Models are leaving the same Unit and any are in Coherency
          with each other after having moved, then those Models must form a new
          Unit. Once any Models that the Controlling Player has declared will
          leave the Unit have moved, then the Unit that was originally selected
          may be moved. Note that if a Model leaves a Unit while under the
          effects of a Tactical Status, it remains under the effect of that
          Status once it has left the Unit.
        </p>
        <div class="border">
          <h4 id="TSS">The Sole Survivor</h4>
          <p>
            When a Unit is joined by a Model that has the Command or Specialist
            Sub-Type, the Paragon Type, or some other means of joining Units,
            they effectively form a single Unit until separated using the Rules
            for Leaving Units described previously. Attacks targeting such a
            Unit treat it as a single Unit for all purposes of allocating and
            resolving Hits and wounds.
          </p>
          <p>
            If a Shooting Attack, Combat or other type of attack, is completely
            resolved, and leaves only Models that had previously joined the
            Unit, then there is no further effect - all the remaining Models
            continue to form a single Unit (even if the removal of Casualties
            would leave them out of Coherency). Any Tactical Statuses which
            affected the Unit before the attack remain in play, and any effects
            or Tactical Statuses imposed by the attack apply to the remaining
            Models as per the normal Rules.
          </p>
          <p>
            In cases where the Destruction or Removal as Casualties of a Unit
            would score a Player Victory Points or otherwise trigger a Special
            Rule, these Rules are triggered on the destruction of a 'Unit' as
            described by its entry on the Controlling Player's Army Roster - not
            the Models that had joined the Unit during play.
          </p>
          <p class="italic">
            For example: A Legion Tactical Squad is joined by a Centurion (which
            has the Command Sub-Type) and an Apothecary (which has the
            Specialist Sub-Type). After these Models have joined the Unit they
            are all considered to be a single Unit for all Rules purposes such
            as being selected to move or Attack. If a Shooting Attack targets
            the Unit then attacks are made as if it were a single Unit, and if
            all of the Legionaries are Removed as Casualties then the Centurion
            and Apothecary continue to form a single Unit and will potentially
            have to make a Panic Check or other Status Checks due to the removal
            of the other Models in the Unit (depending on the number removed,
            see
            <a href="" @click.prevent="scrollToSection('tacticalSt')">
              the Rules for Statuses </a
            >). In this case, when the Shooting Attack removes all of the
            Legionaries as Casualties, leaving the Centurion and Apothecary as a
            single Unit, it does count as having Destroyed a Unit for the
            purposes of scoring Victory Points or triggering Special Rules as
            the Tactical Squad, as recorded on the Controlling Player's Army
            Roster, did not include the Centurion or Apothecary.
          </p>
        </div>
        <h4 id="JoLUiR">Joining or Leaving Units in Reserves</h4>
        <p>
          Whilst a Model with the Specialist or Command Sub-Types or Paragon
          Type is in Reserve the Controlling Player may have it join or leave
          any Unit they control that is also in Reserves during the Start Phase
          of each Turn. The usual restrictions apply to which Units may or may
          not be joined. This must be declared to all other Players and cannot
          be changed until the following Battle Turn. If a Model joins a Unit in
          Reserves then if a Reserves Roll is made to bring the Unit it has
          joined into play, its result counts for any Models that have joined
          that Unit and they are not rolled for separately. Any number of Models
          with the Specialist or Command Sub-Type or Paragon Type may join or
          leave the same or different Units in the Start Phase, and Models with
          either the Specialist or Command Sub-Type or Paragon Type may both
          leave and join Units in the same phase while in Reserves. A Unit that
          has been joined by Models that were not part of it at the start of the
          Battle which enters Reserves remains a single Unit and those Models
          that have joined remain part of the Unit unless the procedure
          described in this Rule is used to remove them.
        </p>
        <div class="unit__additionsl-rules">
          <h4 id="UoDFoA">Units of Different Factions or Allegiance</h4>
          <p>
            If a Unit contains Models with different Faction Traits then all
            Models in that Unit must reduce their Leadership and Cool
            Characteristics by 1. For example, if a Model with the Blood Angels
            Trait joined a Unit consisting of Models with the Imperial Fists
            Trait, then all Models now in that Unit would reduce their
            Leadership and Cool by 1.
          </p>
          <p>
            Models with the Loyalist Trait may never join a Unit that includes
            any Models with the Traitor Trait, and Models with the Traitor Trait
            may never join Units that include any Models with the Loyalist
            Trait.
          </p>
        </div>
        <h3 id="key-actions">Key Actions</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('Measuring')"
              >Measuring</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('THTM')"
              >The Humble Tape Measure</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RD')"
              >Recording Distances</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WCMW')"
              >Who Can Measure When?</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MR')"
              >Measuring Range</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MtDBPotB')"
              >Measuring the Distance Between Points on the Battlefield</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MaaA')"
              >Measuring at an Angle</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TaBM')"
              >Templates and Blast Markers</a
            >
          </li>
        </ul>
        <p class="bold">
          This section contains Rules for measuring distances and making Tests
          or Checks.
        </p>
        <p>
          When resolving a Battle using the Core Rules of the Age of Darkness,
          there are certain basic actions that will be used throughout the
          Battle. For ease of reference and understanding those are detailed
          here.
        </p>
        <div class="unit__additionsl-rules">
          <h4>Designer's Note</h4>
          <p>
            Veteran gamers will find these Rules and terms will be familiar from
            older editions of the Age of Darkness Rules and other Games Workshop
            games, and may consider them too basic for their review. However, it
            is recommended that such veterans still review these Rules and terms
            to ensure that all Players are working under the same basic
            assumptions when resolving a Battle even if the underlying
            assumptions have not changed from earlier iterations. Much effort
            has been made to establish a common 'language' of battle to avoid
            confusion during play and an understanding of the terms in use will
            be a benefit to the entire Horus Heresy community.
          </p>
        </div>
        <h4 id="Measuring">Measuring</h4>
        <p>
          Many actions during a Battle will require a Player to measure
          distances on the Battlefield, most commonly when either moving Models
          across the Battlefield or when checking the range of attacks. In
          almost every case measuring is a simple procedure, requiring a Player
          to use a tape measure to determine the distance between two fixed
          points on the Battlefield. This is done by placing the end of the tape
          measure at one point and then extending the tape measure until it
          reaches the other point, noting the distance shown on the tape at that
          second point. Distances are measured 'flat', meaning that the tape
          measure is held parallel to the surface of the Battlefield and not at
          an angle regardless of the height of Models or other aspects of the
          Battlefield.
        </p>
        <p>
          Note that when measuring distance, any fractional values are always
          rounded up to the nearest whole inch. So if a distance of 4.3" was
          measured, it would be rounded up to a distance of 5" instead.
        </p>
        <div class="border">
          <p>
            The following diagram shows the correct method for measuring the
            distance between two points on the Battlefield:
          </p>
          <div>
            <img src="../pct/measuring.png" alt="измерения" class="img" />
          </div>
          <h4 id="THTM">The Humble Tape Measure</h4>
          <p>
            In all cases, these Rules will assume that measuring is undertaken
            with a tape measure - a small case from which an extendible
            measuring tape can be deployed by hand. The exact make of the tape
            measure is not important, though larger tape measures intended for
            other purposes may be awkward to use during a Battle.
          </p>
          <p>
            Other types of measuring device, such as rulers, uncased tapes or
            connectible rods can all be used as long as they can accurately
            measure distances in inches. In all cases, Players should make their
            opponents aware of the device they intend to use to measure
            distances during play and if any concerns are expressed about the
            accuracy or method, they are addressed and resolved before beginning
            the Battle.
          </p>
        </div>
        <h4 id="RD">Recording Distances</h4>
        <p>
          In the Age of Darkness Rules all distances are measured in inches.
          These distances are often abbreviated in the following manner: X",
          where X is the number of inches. As such a distance of six inches will
          be noted in the Rules as 6". On occasion, Players may encounter larger
          distances recorded as feet instead of inches, in this case the
          distance is abbreviated as: X', where X equals the number of feet. So
          the notation 4' would indicate a distance of four foot, or 48 inches.
        </p>
        <h4 id="WCMW">Who Can Measure When?</h4>
        <p>
          While many Rules will call for specific Players to make measurements
          at set points in the Battle, there is no limit to when or how often
          any Player may measure any on the Battlefield. As such, at any point
          during the Battle any Player may choose to measure the distance
          between any two Models or any two points on the Battlefield without
          reason or a Rule requiring them to do so.
        </p>
        <p>
          A Model is always considered to be in Range of itself - you do not
          need to measure.
        </p>
        <div>
          <img src="../pct/correctMeasuring.png" alt="верно" class="img" />
          <p class="italic">
            The distance between the two Models pictured above is measured
            correctly, checking the distance between the closest points on
            either Models' base.
          </p>
        </div>

        <div>
          <img src="../pct/uncorrectMeasuring.png" alt="не верно" class="img" />
          <p class="italic">
            The distance between the two Models pictured above is measured
            incorrectly. The points from which the distance has been measured
            are not the closest points on either Models' base.
          </p>
        </div>
        <p>
          Where a Model being measured to or from does not have a Base, then
          distances to and from that Model must be measured to the centre mass,
          or hull, of the Model. Models without Bases will almost always be of
          the Vehicle Type, and for such Models the centre mass is defined as
          the edge of the
          <a href="" @click.prevent="scrollToSection('VaD')">hull</a> - not the
          furthest edge of a Weapon barrel, wingtip or other extremity of the
          Model.
        </p>
        <div>
          <img src="../pct/vehicleMeas.png" alt="замеры2" class="img" />
        </div>
        <p>
          Some Markers, such as Objective Markers, will be modelled on Bases of
          varying sizes or represented by solid tokens and these form an
          exception to the regular Rules. When measuring the distance between a
          Marker of any kind and another point Marker or Model, measure from the
          centre of the Marker's Base or the centre of the token used to
          represent the Marker.
        </p>
        <div class="border">
          <h4 id="MR">Measuring Range</h4>
          <p>
            A number of actions will ask Players to measure the Range between
            Models or a Model and a point on the Battlefield. This simply refers
            to measuring a distance equal to the Range Characteristic of a
            Weapon and confirming that a Target Model or point is no further
            from the Attacking Model than the Range Characteristic of the Weapon
            being used as part of the attack. If, when measuring Range, the
            Target Model is equal to or closer to the Attacking Model than the
            Range Characteristic of the Weapon then it is 'In Range. However,
            if, when measuring Range, the Target Model is further than the Range
            Characteristic of the Weapon then it is not 'In Range'
          </p>
        </div>
        <h4 id="MtDBPotB">
          Measuring the Distance Between Points on the Battlefield
        </h4>
        <p>
          When measuring between two points on the Battlefield that are not
          Models, Terrain Pieces or a Marker of some sort, then distances must
          be measured from the exact point. When measuring to the exact point,
          obstructions such as Bases, Impassable Terrain or Areas of Terrain are
          ignored and do not change the position to which any distances are
          measured if they overlap the position of the point in question.
        </p>
        <h4 id="MaaA">Measuring at an Angle</h4>
        <p>
          Some Rules situations will call for a distance to be measured that
          accounts for the difference in height between two Models or points on
          the Battlefield. In such cases then a direct line must be drawn
          between the closest points on the two Models' Bases, or directly
          between two points, ignoring the usual Rule to keep the line of
          measurement parallel with the surface of the Battlefield. This direct
          line must connect the two Models or points by the shortest distance
          possible, ignoring Terrain or other obstacles in the way.
        </p>
        <div><img src="../pct/angle.png" alt="" class="img" /></div>
        <p>
          Other Rules may call for Models to move up or down an arbitrary
          distance referred to as a 'level. This is most usually encountered
          when moving vertically within Terrain intended to represent ruined or
          intact buildings with discrete floors that can hold Models, for moving
          Models from one 'level' to the next. The distance that must be
          accounted for when moving a Model between one 'level' and another is
          3" for each level transitioned from - this does not allow for any
          horizontal movement, only for transitioning directly up or down by one
          level. Note that when measuring for any other purpose than moving
          Models vertically on Terrain, such as when measuring range or checking
          for Unit Coherency, use the straight line measurement only.
        </p>
        <h4 id="TaBM">Templates and Blast Markers</h4>
        <p>
          Some distances are not determined by the use of a tape measure, but
          rather by use of Markers of a fixed size and shape - usually
          representing explosions and other Weapon effects. These are divided
          into two types, circular Blast Markers and teardrop shaped Templates,
          both of which come in a variety of sizes. When such Markers are used,
          Blast Markers are always placed at a distance from the attacking
          Model, and are often Scattered using the Scatter Dice to randomise
          their final position on the Battlefield. In contrast, Templates are
          always placed with the narrow end in contact with the attacking
          Model's Base and the wide end over the target. Templates are not
          Scattered and do not use the Scatter Dice. In all cases, the specific
          Rules for a Weapon or attack will specify which type and size of
          Marker is required and any variation in the Rules needed to place it
          upon the Battlefield.
        </p>
        <p>
          Once placed and its final position determined, all Models whose Bases
          (or hulls if the Model has no Base) are touched by the Marker are
          considered to be 'under' the Marker. When determining which Models are
          touched by the Marker, it should be held parallel to the Battlefield
          above the point that is its final position and viewed firm above to
          give an accurate representation of which Mo it touches. Note that a
          Model's Base or Hull need not completely under the Marker, as long as
          it is touched the Marker it is considered to be under its effects.
        </p>
        <div>
          <img src="../pct/blasthit.png" alt="" class="img" />
          <p class="italic">
            The example pictured above shows a Unit of six Salamanders being
            targeted by a Blast Marker. The Marker is correctly positioned with
            the central hole directly over the base of a Model in the Target
            Unit. In this position a total of four Salamanders are covered
            either wholly or partially by the Blast Marker, with each covered
            Model generating one Hit.
          </p>
        </div>
        <h3 id="los">Line of Sight</h3>
        <p>
          Some Rules will ask Players to determine Line of Sight between two
          Models or a Model and a point on the Battlefield, checking whether one
          Model can 'see' another. Most often this is part of an attack, as a
          Model must have Line of Sight to its target in order to make any
          attack.
        </p>
        <p>
          To determine Line of Sight, use a tape measure or other device to
          determine if an unbroken straight line can be drawn between the first
          Model and its target. If a piece of Terrain, Model with the Vehicle
          Type or other obstruction breaks the line between those two Models
          then there is no Line of Sight, if the line is unobstructed then both
          Models have Line of Sight to each other.
        </p>
        <div>
          <img src="../pct/los.png" alt="" class="img" />
          <p id="italic">
            In the example pictured above, a Salamander is in close proximity to
            two Iron Warriors. The topmost Iron Warrior and the Salamander have
            Line of Sight to each other, as no terrain or other obstruction
            breaks the line between the two Models. However, no Line of Sight
            exists between the lower Iron Warrior and the Salamander, as the
            building breaks the line between the two Models.
          </p>
        </div>
        <p>
          Area Terrain only obstructs Line of Sight if the line passes through
          more than 3" of an Area of Terrain - except for Heavy Area Terrain,
          which always obstructs Line of Sight, and Light Area Terrain, which
          never blocks Line of Sight. Models that do not have the Vehicle Type
          do not obstruct Line of Sight regardless of their size. Models that
          are Embarked on another Model, in Reserves or otherwise not on the
          Battlefield never have Line of Sight to any other Model. Note that if
          a Model has Line of Sight to another Model, then that Model must have
          Line of Sight to the first Model, and that a Model is always
          considered to have Line of Sight to itself and is always considered to
          be in range of itself while it is on the Battlefield.
        </p>
        <p>
          When determining if a Model has Line of Sight to a Unit, it only needs
          to have Line of Sight to one Model that is part of that Unit. This
          does not grant that Model Line of Sight to any other Models in the
          Unit that are otherwise hidden and does not affect how or to which
          Models wounds or Hits can be assigned.
        </p>
        <div class="border">
          <h4>Base to Base Contact</h4>
          <p>
            When the base of a Model is in direct physical contact with the base
            of another Model, this is referred to as being in Base-to-Base
            contact (or sometimes simply as Base contact). This is considered to
            be a distance of 0" in situations where range is important, and
            Models that are in Base-to-Base contact are always considered to
            have Line of Sight to each other, regardless of Terrain or any other
            Rules. If a Model without a Base, such as a Model with the Vehicle
            Type, has its Hull in contact with the base of another Model or the
            Hull of another Model that does not have a Base, this is considered
            to be Base-to-Base contact, even though one or both Models may not
            have a Base.
          </p>
        </div>
        <h3 id="rollingDice">Rolling Dice</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('RMTOD')"
              >Rolling More Than One Dice</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CaLD')"
              >Cocked And Lost Dice</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CDE')"
              >Cocked Dice Examples</a
            >
          </li>
        </ul>
        <p>
          Most actions taken by a Player during an Age of Darkness Battle will
          involve rolling Dice to decide upon the success of that action. When
          the Rules refer to 'Dice' in the context of Battles in the Age of
          Darkness games, this indicates a six-sided Dice, with each side of the
          Dice displaying a different number from 1 to 6 (sometimes the Rules
          will refer to 'Scatter Dice', these are still six-sided dice, but with
          specific symbols instead of numbers - Rules for which are found on
          <a href="" @click.prevent="scrollToSection('scatterDice')">there</a>).
          Sometimes a Player may have standard Dice where a single face replaces
          a single number (usually 1 or 6) with a decorative icon, in these
          cases that icon is read as the missing number and Players should make
          it plain to their opponent when they are using such Dice.
        </p>
        <div><img src="../pct/dices.png" alt="" class="img" /></div>
        <p>
          In all cases the Rules will indicate when and how many Dice are to be
          rolled, as well as which Player must roll those Dice. To roll the
          Dice, the indicated Player simply picks up the noted number of Dice
          and rolls them onto the Battlefield or other flat surface.
        </p>
        <div class="border">
          <h4 id="RMTOD">Rolling More Than One Dice</h4>
          <p>
            When instructed to roll more than one Dice as part of a single Roll,
            the Player that is rolling may choose to Roll all of the Dice at
            once or to Roll them one at a time - though it is recommended that
            when multiple Dice are Rolled for the same Test and requiring the
            same score, that they are rolled all at once for the sake of
            expediency.
          </p>
        </div>
        <p>
          The result of a Roll is determined by reading the uppermost face on
          the Dice after it has come to rest. Each individual action that
          requires a Roll will detail how many Dice are to be Rolled and how the
          results are to be interpreted. Sometimes a Rule may allow for one or
          more Dice to be Re-rolled, this means the Dice indicated may be Rolled
          again and the new result replaces the first result - no single Dice
          may ever be Re-rolled more than once.
        </p>
        <h4 id="CaLD">Cocked And Lost Dice</h4>
        <p>
          Sometimes, when Rolling a Dice, a Dice may come to rest in a position
          which makes it difficult to identify which face is uppermost. This is
          referred to as a Cocked Dice. A Cocked Dice should be rolled again if
          the Players cannot agree as to which face is uppermost (this roll does
          not limit the ability of the Dice to be Re-rolled if a Rule allows
          it).
        </p>
        <p>
          At other times a Dice may be rolled with enough force that it falls
          off of the Battlefield or out of a Dice tray or other rolling area. As
          a standard rule, any Dice which fall outside of the agreed rolling
          area (which is considered to be within the bounds of the Battlefield
          or other pre-agreed area) must be rolled again to determine their
          result. As with Cocked Dice, this roll does not limit the ability of
          the Dice to be Re-rolled if a Rule allows it.
        </p>
        <h4 id="CDE">Cocked Dice Examples</h4>
        <div>
          <img src="../pct/cocked1.png" alt="" class="img" />
          <p class="italic">
            The uppermost face on this Dice is not obvious and more than one
            face could be used to determine the result - it is classed as a
            Cocked Dice and must be Re-rolled.
          </p>
          <img src="../pct/cocked2.png" alt="" class="img" />
          <p class="italic">
            While this Dice is slightly askew, one of its faces is obviously
            uppermost and can be easily read. It is not a Cocked Dice and should
            be used as is to determine the roll's result.
          </p>
        </div>
        <h3 id="scatterDice">Scatter Dice</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('ScatterR')"
              >Scatter Rolls</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ISR')"
              >Indirect Scatter Rolls</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TTsD')"
              >The Three-sided Dice</a
            >
          </li>
        </ul>
        <p>
          Scatter Dice are a special case and use a number of unique Rules when
          rolled. These Dice are used for determining random directions when an
          attack is deviating from the original target point. Primarily this
          occurs as part of a Scatter Roll or an Indirect Scatter Roll.
        </p>
        <h4 id="ScatterR">Scatter Rolls</h4>
        <p>
          A Scatter roll is made by rolling a single Scatter Dice and a single
          standard Dice and requires a target point be designated (For attacks
          using the Blast (X) Special rule this will be the centre point of the
          Blast Marker). Once a Scatter Dice is rolled it must be left in the
          position it rests at and not moved, as the orientation of the Scatter
          Dice is important to interpreting its result. Once rolled the
          uppermost face of the Scatter Dice will either be showing an arrow or
          a 'HIT icon. If it is showing an arrow then the direction in which the
          arrow points as the Dice lays is the 'Direction of Scatter', while if
          it shows the 'HIT" icon the Direction of Scatter is shown by a small
          arrow of chevron included as part of that dice face. The target point
          must then be moved a number of inches equal to the result of the
          standard Dice rolled in the Direction of Scatter decided by the
          Scatter Dice.
        </p>
        <div><img src="../pct/scatter.png" alt="" class="img" /></div>
        <h4 id="ISR">Indirect Scatter Rolls</h4>
        <p>
          An Indirect Scatter roll is made by rolling a single Scatter Dice and
          a single standard Dice and requires a target point be designated (For
          attacks using the Blast (X) Special rule this will be the centre point
          of the Blast Marker). Once a Scatter Dice is rolled it must be left in
          the position it rests at and not moved, as the orientation of the
          Scatter Dice is important to interpreting its result. Once rolled the
          uppermost face of the Scatter Dice will either be showing an arrow or
          a 'HIT" icon. If it is showing an arrow then the direction in which
          the arrow points as the Dice lays is the 'Direction of Scatter', and
          the target point must then be moved a number of inches equal to the
          result of the standard Dice rolled in the Direction of Scatter decided
          by the Scatter Dice. If the Scatter Dice shows the 'HIT' icon then
          there is no Direction of Scatter and the target point is not moved,
          the results of all other Dice rolled are ignored in this case.
        </p>
        <p>
          Some Special Rules may require a Scatter Roll or Indirect Scatter Roll
          be made with a different number of standard Dice to determine the
          distance the target point is moved, or that the target point be moved
          a fixed distance. Such as the Barrage (X) Special Rule, which uses the
          value of X to determine how many dice are rolled to determine the
          distance the target point is moved. This will not change the manner in
          which the Direction of Scatter is determined, only the distance the
          target point is moved.
        </p>
        <div class="border">
          <h4 id="TTsD">The Three-sided Dice</h4>
          <p>
            In some Rules Players may see references to a three-sided Dice, or
            D3, or otherwise be required to generate a number between 1 and 3.
            This does not require a special kind of Dice, instead Players simply
            roll a standard six-sided Dice and use the following table to
            determine its result:
          </p>
          <p>
            When modifying the roll of a Dice intended to represent a
            three-sided Dice in this fashion, apply the modifier to the result
            determined using the table above, not the Dice roll.
          </p>
          <div class="minitable">
            <table class="unit-general__table">
              <thead>
                <tr>
                  <th>Dice Roll</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-2</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>3-4</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>5-6</td>
                  <td>3</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p class="italic">
            For example, if asked to apply a +1 modifier to the roll of a
            three-sided Dice, the Player would roll a six-sided Dice, this roll
            hypothetically resulting in a 4. The table indicates that a roll of
            a '4' would give a result of 2, the modifier would be applied to
            this result, not to the roll, giving a final modified result of 3
            (2+1).
          </p>
        </div>

        <h3 id="Tests">Tests</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('CharT')"
              >Characteristic Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TaAF')"
              >Tests And Automatic Failures</a
            >
          </li>
        </ul>
        <p class="bold">
          A Test is rolling a single Dice with a set Target Number.
        </p>
        <p>
          In order to make a Test, the rolling Player rolls one or more Dice as
          directed by the situation and Rules in play and compares the result of
          each individual Dice to a fixed Target Number. Each Dice whose result
          is equal to or higher than the Target Number has passed the Test and
          is considered to have succeeded at the Test, while each Dice whose
          result is lower than the Target Number is considered to have failed
          the Test.
        </p>
        <p>
          The Target Number for most Tests is usually determined by the Weapon
          Skill, Ballistic Skill or Strength Characteristics of a Model for
          which a Dice is rolled, the exact Target Number and the method by
          which it is determined will be explained by the Rule which calls for
          the Test. Likewise, a 'success' will have different meanings depending
          on the Rule which called for the Test - though in most cases will
          result in Hits or wounds on enemy Models as part of an attack (an
          attack is a specific type of Test used to determine if ranged strikes
          or close combat blows connect with or harm their targets, see the
          <a href="" @click.prevent="scrollToSection('shooting')">Shooting</a>
          and
          <a href="" @click.prevent="scrollToSection('fight')">Combat</a>
          sections). Often, if a Player succeeds at a Test then they will need
          to make one or more additional Tests to resolve the Rule or attack -
          most often resolved as a Hit Test, a Wound Test or a Saving Throw
          (Saving Throws are a type of Test described
          <a href="" @click.prevent="scrollToSection('SavTest')">there</a>), all
          of which are types of Test defined later in these Rules.
        </p>
        <h4 id="CharT">Characteristic Tests</h4>
        <p>
          Some Rules will call for a Characteristic Test, referring to it by the
          name of the Characteristic to be Tested - Strength Test, Initiative
          Test, etc. These Tests follow a set procedure as noted here.
          Characteristic Tests and Characteristic Checks are very different and
          should not be confused in play.
        </p>
        <p>
          A Characteristic Test uses a specific Characteristic as the Target
          Number of the Test, always the Characteristic named when the Test is
          called for. For example, a Strength Test uses a Model's Strength
          Characteristic as the Target Number of the Test. One Dice is rolled
          for each Model required to take the Characteristic Test and the result
          of that Dice roll compared to the Target Number to decide if it was
          successful.
        </p>
        <p>
          Unlike a regular Test, a Characteristic Test is successful if the
          result of the Dice roll is equal to or less than the Target Number and
          is failed if the result of the Dice roll is higher than the Target
          Number.
        </p>
        <p>
          Note that Characteristic Tests cannot be made for the Leadership,
          Cool, Intelligence and Willpower Characteristics - these
          Characteristics use Characteristic Checks instead.
        </p>
        <div class="border">
          <h4 id="TaAF">Tests And Automatic Failures</h4>
          <p>
            When making a Test other than a Characteristic Test, any Dice whose
            final 'natural' result (that is its result before any modifiers are
            applied, but after any Re-rolls have been taken) is a '1' is alway a
            failure, regardless of the Target Number for the Test. For
            Characteristic Tests this is reversed and any Dice whose final
            natural result is a '6' is always a failure, regardless of the
            Target Number for the Characteristic Test.
          </p>
          <p>
            Note that this Rule only applies to Tests and not to other types of
            rolls such as Checks.
          </p>
        </div>
        <h4>Bath Rolling</h4>
        <p>
          Often, Tests will be made for a number of Models at the same time. It
          is perfectly permissible to make each Test individually, rolling one
          Dice at a time to determine its result. However, for large groups of
          Models it is often preferred to roll all of the Dice at once and then
          sort the rolled Dice into those that have failed and those that have
          succeeded - do note that Dice rolled as part of a Test must only be
          rolled as a batch when all of the Dice being rolled have the same
          Target Number and are being rolled for Models which all have the same
          Characteristic values and Weapons. Where groups of Models have
          different Characteristic values, Target Numbers or Weapons the Dice
          rolled for them should be rolled separately so it is easy to see which
          Dice relate to which Model.
        </p>
        <p class="italic">
          For example, when making Shooting Attacks with a Unit of ten
          Legionaries including seven Models with BS 4 and bolters, two Models
          with BS 4 and a plasma gun and one Model with BS 5 and a plasma pistol
          the Dice would need to be rolled in three batches. This means that all
          successes can be easily tied to the Model/Weapon which inflicted them
          for any further Tests needed.
        </p>
        <h3 id="checks">Checks</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('CharC')"
              >Characteristic Checks</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TRoD')"
              >The Rule of Doubles</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MfTaC')"
              >Modifiers for Tests and Checks</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('NaFR')"
              >Natural and Final Results</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MID')"
              >Modifying Individual Dice</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MRT')"
              >Modifying Roll Totals</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MtNoDR')"
              >Modifying the Number of Dice Rolled</a
            >
          </li>
        </ul>
        <p>
          In order to make a Check, the rolling Player rolls two Dice and
          compares the total of the two results against a Target Number. If the
          combined result of the two rolled Dice is equal to or lower than the
          Target Number then the Check has been passed, but if the combined
          result of the two Dice is higher than the Target Number then the Check
          has been failed.
        </p>
        <p>
          The Target Number for most Checks is determined by one of the
          Characteristics of the Model for which the Check is made (only Cool,
          Willpower, Intelligence or Leadership may be used for Characteristic
          Checks), unless stated otherwise the Target Number for a Check will be
          the value of the noted Characteristic, though some Rules may apply
          additional modifiers or use a fixed value instead of a Characteristic.
        </p>
        <h4 id="CharC">Characteristic Checks</h4>
        <p>
          The most common type of Check is the Characteristic Check, often
          separately named for the Characteristic to be checked (e.g.,
          Leadership Check, Intelligence Check, Cool Check or Willpower Check).
        </p>
        <p>
          When a Characteristic Check is made for an individual Model, then the
          Target Number for the Check is always equal to the value of the
          Characteristic of the same name possessed by the Model. For example,
          the Target Number of a Willpower Check made for a Model with Willpower
          7 would be 7.
        </p>
        <p>
          When a Characteristic Check is made for a Unit rather than an
          individual Model, the Target Number for the Check is equal to the
          value of the Characteristic of the same name possessed by the Model
          with the lowest Characteristic of the same name in the Unit. For
          example, the Target Number of a Leadership Check made for a Unit that
          includes Models with Leadership Characteristics of 6, 8 and 10 would
          be 6 - the lowest of the available Characteristic values. Note that if
          the Unit includes a Model with the Sergeant or Command Sub-Types then
          that Model's Characteristic may always be used instead of any other
          Model's.
        </p>
        <p>
          In most cases if a Check is passed then there is no further effect,
          while failure will often result in the Model for which the Check is
          made being affected by the Rule which called for the Check. Unlike
          Tests, Checks must be rolled one at a time and should not be rolled in
          batches in order to avoid confusion over which Dice refer to which
          Check.
        </p>
        <div class="border">
          <h4 id="TRoD">The Rule of Doubles</h4>
          <p>
            When making a Check, any roll that results in a pair of natural '1's
            is considered an automatic success, regardless of the Target Number.
            Likewise, any roll that results in a pair of natural '6's is
            considered an automatic failure, regardless of the Target Number.
          </p>
          <p>
            Note that a natural result is the result before any modifiers are
            applied to either individual Dice or the total, but after any
            Re-rolls or additional Dice have been removed. Furthermore, this
            Rule only applies to Checks and not to any other type of roll.
          </p>
        </div>
        <h4 id="MfTaC">modifiers for tests and checks</h4>
        <p>
          Just as with Characteristics, rolls and their results can be modified
          by various Game and Special Rules, temporarily altering the number of
          Dice rolled, the results of individual Dice or the result of the roll
          when totalled. In all cases a Rule will specifically instruct Players
          on both when to apply a modifier to a roll and what form that modifier
          will take, but a number of specific Rules are used when applying
          modifiers to rolls in different ways.
        </p>
        <div class="border">
          <h4 id="NaFR">natural and final results</h4>
          <p>
            Note that in many places these Rules will refer to the natural
            result of a roll, this indicates the result of a roll before any
            modifiers are applied, but after any Re- rolls are taken. The
            modified, or final, result of a roll is the result after all
            modifiers have been applied and Re-rolls taken.
          </p>
        </div>
        <h4 id="MID">Modifying Individual Dice</h4>
        <p>
          The most common modifiers will add or subtract a fixed number from the
          result of each individual Dice rolled. Such modifiers will either
          reference the specific Type of roll to which they apply or state the
          value of the modifier to be applied, for example:
        </p>
        <p class="italic">
          +1 to all Hit Tests made as part of this attack' or '+1 to all Dice
          rolled as part of this action.'
        </p>
        <p>
          In this case both modifiers instruct the Player to add one to the
          value of each individual Dice that is rolled and note the duration of
          the modifier. Some modifiers may also call for the result of a Dice to
          be divided or multiplied, and these will also specify the type of roll
          to which they apply, though it is rare for these modifiers to be
          applied to Test or Check results and more common for simple rolls. In
          all cases the modifier will also indicate how the result should be
          divided or multiplied, for example:
        </p>
        <p class="italic">
          Halve (divide by 2) the result of the Dice rolled to determine how
          much Damage is inflicted by this attack' or 'Double (multiply by 2)
          the result of the Dice rolled to determine how much Damage is
          inflicted by this attack.
        </p>
        <p>
          In this case both modifiers instruct the Player to divide or multiply
          the result of a single Dice rolled to determine a number and note the
          duration of the modifier.
        </p>
        <p>
          The value of a modifier of this type is applied directly to the result
          of a Dice. As such, a Dice rolled that results in '4' on its uppermost
          face to which a +1 modifier is applied would have its result changed
          to '5. Modifiers of this type cannot modify the result of a Dice to a
          value greater than '6' or less than '1', where a modifier would do so
          it simply changes the result to '1' or '6' as appropriate. Where
          multiple modifiers are applied to the result of a Dice at the same
          time, modifiers that add to the Dice's result are applied first,
          followed by any that reduce it. Furthermore, if the roll could
          potentially trigger a variable
          <router-link to="/special-rules" class="italic"
            >Special Rules</router-link
          >, then only the natural result of the roll is considered for that
          purpose and the modified result may not be used to trigger such Rules.
        </p>
        <h4 id="MRT">Modifying Roll Totals</h4>
        <p>
          Some Rules may require that the total result of a roll, such as a
          Check, be modified, usually by adding or subtracting a fixed value
          from the total to determine the Final Total. Such modifiers will
          either reference the specific type of roll to which they apply or
          state the value of the modifier to be applied, for example:
        </p>
        <p class="italic">
          '-2 to Leadership Checks made in this Battle Turn' or '-2 to the total
          of this roll only'
        </p>
        <p>
          In this case both modifiers instruct the Player to subtract two from
          the total result of all Dice combined after it has been totalled and
          notes when and where the modifier applies.
        </p>
        <p>
          The value of a modifier of this type is not applied to any individual
          Dice, but to the total result of all Dice rolled after it has been
          totalled. As such, if two Dice are rolled for a Check and result in a
          '2' and a '4' and a -2 modifier is to be applied to the roll total,
          then first the Dice would be totalled to '6' and then the modifier
          would be applied, making the Final Total of the roll '4'. Modifiers of
          this type cannot change the Final Total of a roll to less than 0, and
          any modifiers that would do so simply reduce the Final Total to 0
          instead. Where multiple modifiers are applied to the total of a roll
          at the same time, modifiers that add to or subtract from the total
          result of the roll are applied first, then any modifiers that multiply
          the total result and modifiers that divide the total result are
          applied last.
        </p>
        <h4 id="MtNoDR">Modifying the Number of Dice Rolled</h4>
        <p>
          Some modifiers do not change the result of Dice or roll totals, but
          instead change the number of Dice rolled. This has different effects
          for Tests and Checks, but such modifiers will reference the specific
          type of roll to which they apply and state the number of Dice added or
          removed from the roll, for example:
        </p>
        <p class="italic">
          'Make three additional Hit Tests as part of this attack' or 'When
          making any Leadership Checks in this Phase, roll an additional Dice as
          part of that Check.
        </p>
        <p>
          Both of these modifiers add additional Dice to rolls, though both are
          of different types, with the modifier specifying the type of roll and
          duration of the modifier.
        </p>
        <p>
          When modifying a Test, any Dice added are simply rolled as normal and
          their results noted in the same manner as other Dice rolled as part of
          that Test. Similarly, if a modifier to the number of Dice rolled as
          part of a Test is negative, then simply roll that many fewer Dice -
          but note that such a modifier cannot reduce the number of Dice rolled
          below one, and any modifiers that would do so simply reduce the number
          of Dice rolled to one instead. When modifying a Check any additional
          Dice are added to the roll and rolled as normal, but before
          determining the total of the roll Dice must be discarded until only
          two remain - these two are used to determine the Final Total of the
          roll. The Player that rolled may choose which Dice to discard. No
          modifier may remove Dice from a Check, a minimum of two Dice are
          always rolled.
        </p>
        <h3 id="attacksnew">Attacks</h3>
        <p>
          The main means of resolving a Battle is by making attacks. An attack
          is a type of Test commonly referred to as a Hit Test and used to
          inflict Hits upon enemy Models, with the intent of forcing the
          opponent to remove them from the Battle as Casualties. Most attacks
          are made during the Shooting and Assault Phases, but on some occasions
          certain Rules may call for attacks to be made in other Phases of the
          Turn. Likewise, it is normally the Active Player that makes attacks,
          but in certain circumstances the Reactive Player may be called upon to
          make attacks.
        </p>
        <div class="border">
          <h4 id="TLoF">The Logic Of Combat</h4>
          <p>
            The process by which attacks are made, resolved and result in Models
            being Removed as Casualties is, on the surface, very simple.
            However, the use of certain Special Rules or attacks by some Units
            can lead to complexities that make the process less straightforward.
            To aid comprehension of the process and its intent, it is presented
            here as a simplified flowchart:
          </p>
          <ul class="numeric">
            <li><span class="bold">DECLARE ATTACK.</span></li>
            <li>
              <span class="bold">MAKE HIT TESTS.</span> Successes generate Hits
              and misses are discarded.
            </li>
            <li>
              <span class="bold">MAKE WOUND TESTS.</span> Hits are converted to
              wounds or discarded.
            </li>
            <li>
              <span class="bold">MAKE ARMOUR.</span> Wounds are converted to
              Damage or discarded.
            </li>
            <li>
              <span class="bold">APPLY DAMAGE.</span> Damage is applied to a
              Model's Wounds Characteristic.
            </li>
          </ul>
          <p>
            Each of the circles shown on the flowchart is a point at which
            Special Rules and other game effects can change the nature of the
            process. For example, the Breaching (X) Special Rule can change the
            nature of a Hit at the point of making a Wound Test, changing the
            values associated with it, but has no effect at any other point in
            the process and later effects or Rules could undo the changes it has
            made.
          </p>
        </div>
        <p>
          Note that throughout these Rules 'attacks' with a lowercase 'a' is
          used when referring to rolling Dice to Hit opponents, while 'Attacks'
          with a capital 'A' is used only when referring to the Attacks
          Characteristic.
        </p>
        <div class="units__additional-rules">
          <h3 id="hits">Hits</h3>
          <p>
            A 'Hit' is the term used to refer to the result of a successful Hit
            Test before it is allocated, converted into a wound or discarded.
            The following should be noted when dealing with Hits during play:
          </p>
          <ul>
            <li>
              A Hit imposes no penalty or benefit onto a Model or Unit to which
              it is allocated.
            </li>
            <li>
              Whilst under the effect of a Hit a Model or Unit is not restricted
              in any manner outside of the normal Rules of play.
            </li>
            <li>
              A Hit has a Strength value equal to that of the Strength
              Characteristic of the Weapon that inflicted it or as defined by
              the Rule that applied it.
            </li>
            <li>
              A Hit has an AP value equal to that of the AP Characteristic of
              the Weapon that inflicted it or as defined by the Rule that
              applied it.
            </li>
            <li>
              A Hit has a Damage value equal to that of the Damage
              Characteristic of the Weapon that inflicted it or as defined by
              the Rule that applied it.
            </li>
            <li>
              Certain Special Rules applied to Weapons or other attacks may
              apply to a Hit inflicted by that Weapon - such Special Rules will
              state this and explain how and when to apply their effects to
              Hits.
            </li>
            <li>
              The Strength, Damage and AP of a Hit may be modified after it has
              been inflicted in the same manner as other Characteristics.
            </li>
          </ul>
          <p>
            When attacks are made against a Unit that will inflict Hits with
            differing Strength, AP or Damage values, those Hits must be sorted
            into separate groups to make resolving them easier.
          </p>
        </div>
        <h4>Hit Tests</h4>
        <p>
          When making attacks there are two main types of Hit Test: Ranged Hit
          Tests and Melee Hit Tests. Both are used to inflict Hits upon an enemy
          Model by means of a Test, but are resolved with slightly different
          procedures.
        </p>
        <h4>Ranged Hit Tests</h4>
        <p>
          Ranged Hit Tests include all Hit Tests made outside of Combat or at a
          distance further than Base-to-Base Contact Ranged Hit Tests are
          normally part of a Shooting Attack, which is described
          <a href="" @click.prevent="scrollToSection('shooting')">there</a>,
          which details how to select targets. The Rules in this section are
          focussed only on the process of rolling Hit Tests.
        </p>
        <p>
          When making a Ranged Hit Test for any Model, roll a number of Dice
          equal to the Firepower Characteristic of any one Weapon that the Model
          has (or when instructed roll all of the Dice for attacks made using
          the same Ballistic Skill and for identical Weapons - a grouping known
          as a
          <a href="" @click.prevent="scrollToSection('SetFG')">Fire Group</a>).
          These Dice are rolled as a Test, using the Ranged Hit Test Table and
          the attacking Model's Ballistic Skill to determine the Target number
          for the Test.
        </p>
        <div>
          <p class="bold">Ballistic Skill Table</p>
          <p class="italic">This Table You Can See in Header of this Site</p>
          <!-- таблица для десктопа -->
          <table class="unit-general__table" v-if="windowWidth > 800">
            <thead>
              <tr>
                <th>BS</th>
                <th>10</th>
                <th>9</th>
                <th>8</th>
                <th>7</th>
                <th>6</th>
                <th>5</th>
                <th>4</th>
                <th>3</th>
                <th>2</th>
                <th>1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Target Number</td>
                <td>A</td>
                <td>C3+</td>
                <td>C4+</td>
                <td>C5+</td>
                <td>C6+</td>
                <td>2+</td>
                <td>3+</td>
                <td>4+</td>
                <td>5+</td>
                <td>6+</td>
              </tr>
              <tr>
                <td>*Snap Shots</td>
                <td>2+</td>
                <td>3+</td>
                <td>3+</td>
                <td>4+</td>
                <td>4+</td>
                <td>5+</td>
                <td>5+</td>
                <td>6+</td>
                <td>6+</td>
                <td>F</td>
              </tr>
            </tbody>
          </table>

          <!-- таблица для мобилок -->
          <div class="unit-general__grid-table" v-if="windowWidth <= 800">
            <div class="row header">
              <div class="cell header-cell">BS</div>
              <div class="cell header-cell first-letter">Target Number</div>
              <div class="cell header-cell first-letter">*Snap Shots</div>
            </div>
            <div class="row">
              <div class="cell label">10</div>
              <div class="cell">A</div>
              <div class="cell">2+</div>
            </div>
            <div class="row">
              <div class="cell label">9</div>
              <div class="cell">C3+</div>
              <div class="cell">3+</div>
            </div>
            <div class="row">
              <div class="cell label">8</div>
              <div class="cell">C4+</div>
              <div class="cell">3+</div>
            </div>
            <div class="row">
              <div class="cell label">7</div>
              <div class="cell">C5+</div>
              <div class="cell">4+</div>
            </div>
            <div class="row">
              <div class="cell label">6</div>
              <div class="cell">C6+</div>
              <div class="cell">4+</div>
            </div>
            <div class="row">
              <div class="cell label">5</div>
              <div class="cell">2+</div>
              <div class="cell">5+</div>
            </div>
            <div class="row">
              <div class="cell label">4</div>
              <div class="cell">3+</div>
              <div class="cell">5+</div>
            </div>
            <div class="row">
              <div class="cell label">3</div>
              <div class="cell">4+</div>
              <div class="cell">6+</div>
            </div>
            <div class="row">
              <div class="cell label">2</div>
              <div class="cell">5+</div>
              <div class="cell">6+</div>
            </div>
            <div class="row">
              <div class="cell label">1</div>
              <div class="cell">6+</div>
              <div class="cell">F</div>
            </div>
          </div>
          <div>
            <div class="modal-desc bold">
              *Some Rules may require Ranged Hit Tests to be made as Snap Shots,
              such Hit Tests use this row to determine their Target Number.
            </div>
            <div class="modal-text">
              Where a number is shown, that is the Target Number of the Ranged
              Hit Test. For other entries, use the following Rules to resolve
              the Hit Test: F (Fail) - If the table shows an 'F' then no Dice
              are rolled and the Test automatically fails to Hit, applying any
              effects a miss would normally apply to the attacking Model. For
              Weapons with the Rending (X) Special Rule, a result of F does not
              trigger the Rending (X) Special Rule. A (Automatic) - If the table
              shows an 'A' then no Dice are rolled and the Test automatically
              succeeds as if the Dice's natural result had been a '6', applying
              all effects that such a result would normally apply. In addition,
              such an attack also applies all of the effects of a Critical Hit
              (see the Critical Hit (X) Special Rule). CX+ (Critical Hit) - If
              the table shows a 'CX+', then the Target Number of the Ranged Hit
              Test is 2+, but if the roll results in a value equal to or greater
              than the value of 'X' then the Hit gains the effects of the
              Critical Hit (X) Special Rule.
            </div>
          </div>
        </div>
        <h4>Melee Hit Tests</h4>
        <p>
          Melee Hit Tests include all Hit Tests made for Models that are Locked
          in Combat or otherwise in Base-to-Base Contact with the Target. Melee
          Hit Tests are normally part of the Fight Sub-Phase of the Assault
          Phase, which is described
          <a href="" @click.prevent="scrollToSection('fight')">there</a>. The
          Rules in this section are focussed only on the process of rolling
          Melee Hit Tests.
        </p>
        <p>
          When making a Melee Hit Test for any Model, roll a number of Dice
          equal to the Attacks Characteristic of the attacking Model (or when
          instructed roll all of the Dice for attacks made using the same Weapon
          Skill and for identical Weapons - a grouping known as a Strike Group
          -see the Rules for the Assault Phase for more details). These Dice are
          rolled as a Test, using the Melee Hit Table to compare the attacking
          Model's Weapon Skill to the Target Model's Weapon Skill to determine
          the Target number for the Test.
        </p>
        <div>
          <div class="">
            <p class="bold">Weapon Skill Table</p>
            <p class="italic">This Table You Can See in Header of this Site</p>
            <div class="table-container quad-table">
              <div class="attacker-label">Attacker's Weapon Skill</div>
              <div class="table-wrapper">
                <div class="defender-label">Defender's Weapon Skill</div>
                <table class="weapon-skill-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>4+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>2+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                      <td>5+</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>5+</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>3+</td>
                      <td>4+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h3 id="Wounds">Wounds</h3>
        <p>
          Hits inflicted on Models that do not have the Vehicle Type have a
          chance of being converted to wounds. Whenever a Rule inflicts one or
          more Hits upon a Unit or otherwise requires a Unit to take a Hit, the
          following Rules are used to resolve if that Hit is converted to one or
          more wounds.
        </p>
        <p>
          Note that these Rules only apply where a Hit is inflicted, wherever a
          Rule states that a Unit suffers one or more wounds then these Rules
          are not used and that Unit suffers a wound without having first been
          inflicted with a Hit or making a Wound Test.
        </p>
        <div class="border">
          <h4>Wounds</h4>
          <p>
            A 'wound' is the term used to refer to the result of a successful
            Wound Test before any Saving Throws or Damage Mitigation Tests are
            made to discard it or it is converted into Damage. Whilst it is
            similarly named, a 'wound' inflicted as part of an attack is
            separate and not linked to a Model's Wounds Characteristic. The
            following should be noted when dealing with wounds during play:
          </p>
          <ul>
            <li>
              A wound imposes no penalty or benefit onto a Model to which it is
              allocated and whilst under the effect of a wound a Model is not
              restricted in any manner outside of the normal Rules of play.
            </li>
            <li>
              A wound has a Strength value equal to that of the Hit from which
              it was derived or as defined by the Rule that applied it.
            </li>
            <li>
              A wound has an AP value equal to that of the Hit from which it was
              derived or as defined by the Rule that applied it.
            </li>
            <li>
              A wound has a Damage value equal to that of the Hit from which it
              was derived or as defined by the Rule that applied it.
            </li>
            <li>
              Certain Special Rules applied to a Hit may apply to a wound
              derived from it - such Special Rules will state this and explain
              how and when to apply their effects to a wound.
            </li>
            <li>
              The Strength, Damage and AP of a wound may be modified after it
              has been inflicted in the same manner as other Characteristics.
            </li>
          </ul>
          <p>
            When Hits are resolved and inflict wounds on a Unit that have
            differing Strength, AP or Damage values then those wounds must be
            sorted into separate groups to make resolving them easier.
          </p>
        </div>
        <p>
          Models with the Vehicle Type do not have a Toughness or Wounds
          Characteristic and cannot be assigned or allocated wounds and any
          Special Rule that would otherwise inflict wounds has no effect on such
          a Model. If for any reason a Model with the Vehicle Type gains a wound
          then that wound is immediately discarded and has no effect, nor can it
          trigger any other Rules effects. Models with the Vehicle Type that
          suffer Hits resolve them using the Vehicle Damage Procedure as
          detailed <a href="" @click.prevent="scrollToSection('VaD')">there</a>.
          The Vehicle Damage Procedure can result in the creation of Penetrating
          Hits, Penetrating Hits operate in exactly the same manner as wounds -
          except that they must be allocated to Models with the Vehicle Type and
          cannot be allocated to Models that do not have the Vehicle Type.
        </p>
        <h4>Wound Tests</h4>
        <p>
          Once a Unit has one or more Hits inflicted on it, whether a Rule has
          dictated their application or they have been inflicted as part of a
          Shooting Attack or Combat, a Wound Test must be made to resolve those
          Hits. The Rules presented here cover only the process of making Wound
          Tests and resolving their effects.
        </p>
        <p>
          A Wound Test must be made for each Hit inflicted on a Unit, but Wound
          Tests for Hits with different Strengths, AP values or Special Rules
          must be rolled separately so that all Players know which Hit is being
          resolved by a given Wound Test. The order in which differing Wound
          Tests are made is decided by the Player making the attacks.
        </p>
        <p>
          To make a Wound Test, roll a number of Dice equal to the number of
          Hits with the same Strength, AP, Damage and Special Rules that have
          been inflicted on the Model being rolled for. These Dice are rolled as
          a Test, using the Wound Table shown here to compare the Hit's Strength
          and the Model's Toughness to determine a Target Number for the Test.
        </p>
        <div>
          <div>
            <p class="bold">Wound Test Table</p>
            <p class="italic">This Table You Can See in Header of this Site</p>
            <div class="table-container quad-table">
              <div class="attacker-label">Hit's Strength</div>
              <div class="table-wrapper">
                <div class="defender-label">Target's Toughness</div>
                <table class="weapon-skill-table">
                  <thead>
                    <tr>
                      <th></th>
                      <th>1</th>
                      <th>2</th>
                      <th>3</th>
                      <th>4</th>
                      <th>5</th>
                      <th>6</th>
                      <th>7</th>
                      <th>8</th>
                      <th>9</th>
                      <th>10</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                      <td>6+</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                      <td>5+</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>2+</td>
                      <td>3+</td>
                      <td>4+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <h3 id="SavTest">Saving Throws</h3>
        <p>
          Wounds inflicted on a Model will cause Damage, reducing the Model's
          Wounds Characteristic and possibly removing it from play as a
          Casualty. However, before any Damage is inflicted, wounds can be
          negated by means of Saving Throws. A Model may have one Saving Throw
          made for each wound inflicted on it, with a successful Saving Throw
          causing that wound to be discarded - however, only one Saving Throw
          may be made for any given wound that has been inflicted on a Model,
          regardless of how many Saving Throws a Model may have.
        </p>
        <p>
          If a Model has any Saving Throws available they will be listed either
          on that Model's profile as Characteristics or detailed by any Special
          Rules that apply to the Model. A Saving Throw will normally be listed
          as a numerical value followed by a '+' symbol, for example, an Armour
          Save of '4+. The value listed as part of any Saving Throw is the
          Target Number for the associated Test. The various types of Saving
          Throw available are in this section, indicating when they may be made
          and any additional Rules that apply to that type of Saving Throw.
        </p>
        <h3 id="ArmTest">Armour Tests</h3>
        <p class="bold">
          Armour Saves are listed as a Characteristic on each Model's Profile.
        </p>
        <p>
          Once a Model has one or more wounds, the Controlling Player may make
          an Armour Test for that Model if possible. An Armour Test that is
          successful will cause the wound for which it is made to be discarded.
          A Model may not have an Armour Test made for it if:
        </p>
        <ul>
          <li>The Model has an Armour Save Characteristic of '-'.</li>
          <li>
            The AP value of the wound for which the Armour Test is being made is
            equal to or lower than the Model's Armour Save Characteristic.
          </li>
          <li>
            A Special Rule or other effect attached to the wound specifies that
            it ignores Armour Tests or that no Armour Test may be made.
          </li>
          <li>An Armour Test may not be made to discard a Penetrating Hit.</li>
        </ul>
        <p>
          One Armour Test may be made for each wound inflicted on a Model, but
          Armour Tests for wounds with different Strengths, AP, Damage values or
          Special Rules must be rolled separately so that all Players know which
          wound is being affected by a given Armour Test. To make an Armour
          Test, roll a number of Dice equal to the number of wounds with the
          same Strength, AP and Special Rules that have been inflicted on the
          Model being rolled for. These Dice are rolled as a Test, with the
          Model's Armour Save Characteristic as the Target Number. As with other
          Tests, any Dice whose result equals or exceeds the Target Number has
          succeeded. A success causes the wound for which the Test was made to
          be discarded with no further effect, while a failure means the wound
          remains and must be converted into Damage. A Player may choose not to
          make an Armour Test even if one is available, usually with the intent
          of taking a superior Cover or Invulnerable Saving Throw.
        </p>
        <h3 id="CovTest">Cover Tests</h3>
        <p class="bold">
          Cover Saves are granted by Terrain and Special Rules and are not
          listed as a Characteristic on a Model's Profile.
        </p>
        <p>
          If a Model cannot have an Armour Save made for it, or the Controlling
          Player chooses not to make an Armour Test, but has access to a Cover
          Save then that Saving Throw may be made instead of an Armour Test or
          an Invulnerable Test. A Cover Test is resolved in exactly the same
          manner as an Armour Test. Cover Tests are normally provided by certain
          types of
          <a href="" @click.prevent="scrollToSection('bt')" class="italic">
            Battlefield Terrain</a
          >, but may also be granted by certain Special Rules. Note that Cover
          Tests are not affected by the AP value of a wound, however a Model may
          not have a Cover Test made for it if:
        </p>
        <ul>
          <li>
            A Special Rule or other effect attached to the wound specifies that
            it ignores Cover Saves or that no Cover Test may be made.
          </li>
          <li>
            The attack is being made as part of a Combat during the Fight
            Sub-Phase, or a Challenge in the Challenge Sub-Phase.
          </li>
          <li>
            A Cover Test may be taken to discard a Penetrating Hit, if one is
            available to the Model.
          </li>
        </ul>
        <h3 id="InvTest">Invulnerable Tests</h3>
        <p class="bold">
          Invulnerable Saves are listed as a Characteristic on each Model's
          Profile, and can also be applied by Special Rules or Wargear.
        </p>
        <p>
          If a Model cannot have an Armour Test or Cover Test made for it, or
          the Controlling Player chooses not to make an Armour Test or a Cover
          Test, but has access to an Invulnerable Save then that Saving Throw
          may be made instead of an Armour Test or a Cover Test. An Invulnerable
          Test is resolved in exactly the same manner as an Armour Test. Note
          that Invulnerable Tests are not affected by the AP value of a wound,
          however a Model may not have a Invulnerable Test made for it if:
        </p>
        <ul>
          <li>
            A Special Rule or other effect attached to the wound specifies that
            it ignores Invulnerable Tests or that no Invulnerable Test may be
            made.
          </li>
          <li>
            An Invulnerable Test may be taken to discard a Penetrating Hit if
            one is available to the Model.
          </li>
        </ul>
        <p>
          No more than one Saving Throw of any kind may be made for a given
          wound or Penetrating Hit. If more than one type of Saving Throw is
          available then the Controlling Player must select one Saving Throw to
          make, and may not make any other Saving Throws for that wound or
          Penetrating Hit - if multiple wounds of the same value or Penetrating
          Hits are to be resolved then the same type of Saving Throw does not
          have to be used to resolve them, but this may prove easier and quicker
          in practice.
        </p>
        <div class="units__additional-rules">
          <h3 id="DMTest">Damage Mitigation Tests</h3>
          <p>
            Damage Mitigations Tests are similar to Saving Throws, and follow
            all the same Rules for making them - except that a Model may have
            one Saving Throw and one Damage Mitigation Test made for each wound
            inflicted on it. Damage Mitigation Tests are only ever granted to a
            Model by Special Rules and do not appear as a Characteristic, the
            Special Rule that grants a Model a Damage Mitigation Test will
            indicate the Target Number for that Test and will state under what
            circumstances it may be taken.
          </p>
        </div>
        <h4>Resolving Damage</h4>
        <p>
          Once all possible Saving Throws have been made, any remaining wounds
          are considered unsaved wounds. Unsaved wounds reduce the Wounds
          Characteristic of the Model to which they were alue equal to the
          Damage value of the unsaved wound. If that would reduce the Wounds
          Characteristic to 0 then the Model must be Removed as a Casualty and
          any remaining damage is lost it cannot be applied to any other Model
          in the same Unit.
        </p>
        <h4>Removing Models As Casualties</h4>
        <p>
          A Model whose Wounds Characteristic is reduced to 0 or less must be
          Removed as a Casualty by that Model's Controlling Player. The removal
          of Models from a Unit may trigger Tactical Status Checks, see the
          <a
            href=""
            @click.prevent="scrollToSection('tacticalSt')"
            class="italic"
          >
            Tactical Statuses Rules</a
          >.
        </p>
        <div class="border">
          <h4>Removed as Casualty</h4>
          <p>
            A Model Removed as a Casualty is directly removed from the
            Battlefield, without disturbing the position of any other Model or
            Terrain Piece. Once removed from the Battlefield it should be placed
            in a location distinct from Models in Reserves and outside the
            bounds of the Battlefield. Once Removed as a Casualty a Model may
            not be returned to the Battlefield and all Rules or effects
            targeting or originating with that Model end immediately and have no
            further effect. No Rule or effect may draw Line of Sight or Range to
            a Model that has been Removed as a Casualty for any reason. If a
            Model with the Transport Sub-Type is Removed as a Casualty while
            Models are Embarked upon it, then before the Model with the
            Transport Sub-Type is removed all Models Embarked upon it must
            immediately make an
            <a href="" @click.prevent="scrollToSection('ED')" class="italic">
              Emergency Disembarkation</a
            >.
          </p>
          <p>
            A number of Rules, including Tactical Statuses and Victory
            Conditions are triggered by the removal of Models as Casualties, and
            as such all Players should be made aware of any Models that are
            Removed as Casualties. Furthermore, any Player may request to see
            which Models have been Removed as Casualties by any Player at any
            point during the Battle.
          </p>
        </div>
        <h2 id="advancedPrinc">Advanced Principles</h2>
        <p class="bold">
          This section contains all the Rules for resolving more complex
          situations on the Battlefield, such as Tactical Statuses, Psychic
          Powers, Reactions, Vehicles and Terrain.
        </p>
        <p>
          The advanced principles of the Age of Darkness Rules, such as how to
          represent Tactical Statuses and Reactions, or the Rules for more
          complex Models like vehicles, are presented in this section. These
          Rules may not be used in every Battle, or by every Player, but being
          familiar with them will allow Players to understand how they can be
          used both to aid them or to hinder them on the Battlefield.
        </p>
        <h3 id="tacticalSt">Tactical Statuses</h3>
        <p class="bold">
          Tactical Statuses represent the morale of troops on the Battlefield,
          and can be key to controlling the enemy's options during a Battle.
        </p>
        <p>
          In the chaos and confusion of battle, troops can easily become
          demoralised, disoriented or simply terrified by the violence unleashed
          against them. To represent these effects during an Age of Darkness
          Battle, various Statuses can be imposed on the Models that make up a
          Unit, each representing a different brand of Battlefield confusion.
        </p>
        <p>
          A Status is a Rule that does not inflict wounds or Hits upon a Model
          or Unit, and whose effects last until a Check is passed to remove the
          Status. A Status affects all Models in a Unit, and if one Model in a
          Unit gains a Status do all other Models in the same Unit. A Status
          will always be identified as a Status by the Rules that establish and
          describe it, a Rule that does not explicitly state it is a Status is
          not a Status. A Model may be affected by multiple Statuses at the same
          time - except for the Routed Status. If any Models in a Unit gain the
          Routed Status then all Models in the Unit immediately lose all other
          Statuses and their effects end.
        </p>
        <p>
          Each separate Status has its own Rules for how and when it can be
          inflicted upon Models in a Unit, but share a number of other common
          Rules and effects. All Statuses remain in effect until the Controlling
          Player makes a successful Check to remove the Status. In the Statuses
          Sub-Phase of the End Phase, the Active Player may select each Unit
          under their control that includes any Models with one or more
          Statuses, and then makes a Check for each Status that the Unit is
          under the effect of. This is a Cool Check for each Status other than
          Routed, and a Leadership Check for the Routed Status. If that Check is
          failed then the Status being rolled for remains in play for another
          Battle Turn. If the Check is passed then the Status being rolled for
          is removed from all Models in the Unit.
        </p>
        <p>
          Models with the Vehicle Type that do not have a Cool or Leadership
          Characteristic do not make a check to remove Statuses, but can instead
          make a Repair Test in the Statuses Sub-Phase. One Repair Test can be
          made by the Active Player for each Model with the Vehicle Type under
          their control that has one or more Statuses. A Repair Test is made
          with a single Dice and a Target Number of '6', with each successful
          Repair Test allowing the Controlling Player to remove one Status from
          the Model for which the Repair Test was made.
        </p>
        <p>
          The following effects are applied to all Models that are affected by
          any Status, in addition to the specific effects of that Status:
        </p>
        <ul>
          <li>
            A Unit that includes any Models affected by any Status that makes a
            Charge always counts that Charge as Disordered.
          </li>
          <li>
            A Unit that includes any Models with any Status that is Locked in
            Combat makes attacks as normal, but all Models in the Unit must set
            their Combat Initiative to 1, regardless of the Models' Initiative
            Characteristics, Weapons or any other modifiers.
          </li>
          <li>
            A Unit that includes any Models affected by any Status cannot hold,
            claim or contest an Objective.
          </li>
          <li>
            A Unit affected by any Tactical Status may never gain any benefit
            from being Stationary, even if the Models in that Unit do not or are
            unable to move.
          </li>
          <li>
            Models with the Vehicle Type can be affected by all Statuses except
            Routed. As such Models do not have a Cool Characteristic, they
            cannot fail a Cool Check and Statuses can only be applied to them by
            specific Rules or the result of a roll on the Vehicle Damage Table.
            Once a Model with the Vehicle Type has gained a Status, it can only
            be removed by a Model with the Battlesmith (X) Special Rule or
            through Repair Tests.
          </li>
          <li>
            A Unit that includes any Models with a given Status that would gain
            that same Status again suffer no additional effect - the Status
            remains and is neither enhanced nor removed from the Models in that
            Unit.
          </li>
        </ul>
        <div>
          <div>
            <p class="italic">
              Tactical Statuses You Can See in Header of this
            </p>
            <div class="statuses">
              <div class="status">
                <div class="status-head">
                  <p class="bold core-status">Pinned</p>
                  <div class="status-desc">
                    The Pinned Status reflects a Unit that has been forced to
                    take cover in the face of overwhelming firepower or the
                    sudden crack of a sniper's rifle.
                  </div>
                </div>
                <div class="status-text">
                  The Pinned Status is primarily inflicted as part of the
                  effects of the Pinning (X) Special Rule, but may also be
                  applied by specific Special Rules. The following Rules apply
                  to any Unit that includes one or more Models that have the
                  Pinned Status:
                  <ul>
                    <li>
                      The Controlling Player of a Unit that includes any Models
                      that are Pinned may not choose to have that Unit move,
                      Rush or Charge in any Phase and any effect that would
                      force them to move or Charge has no effect.
                    </li>
                    <li>
                      A Unit that includes any Models with the Pinned Status
                      that is Locked in Combat makes any Pile-in Moves as
                      normal, but may not choose to Pursue or Disengage during
                      the
                      <a
                        href=""
                        @click.prevent="scrollToSection('ResS2')"
                        class="italic"
                      >
                        Resolution Sub-phase</a
                      >.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="status">
                <div class="status-head">
                  <p class="bold core-status">Supressed</p>
                  <div class="status-desc">
                    The Suppressed Status reflects a Unit that is distracted and
                    confused by heavy enemy fire, environmental effects or
                    psychological warfare.
                  </div>
                </div>
                <div class="status-text">
                  The Suppressed Status is primarily inflicted as part of the
                  effects of the Suppressive (X) Special Rule, but may also be
                  applied by specific Special Rules. The following Rules apply
                  to any Unit that includes one or more Models that have the
                  Suppressed Status:
                  <ul>
                    <li>
                      The Controlling Player of a Unit that includes any Models
                      that are Suppressed must make all attacks in any Shooting
                      Attacks declared for that Unit as Snap Shots.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="status">
                <div class="status-head">
                  <p class="bold core-status">Stunned</p>
                  <div class="status-desc">
                    The Stunned Status reflects a Unit rendered insensible or
                    stopped in its tracks by the sheer force of an impact,
                    explosion or other battlefield event.
                  </div>
                </div>
                <div class="status-text">
                  The Stunned Status is primarily inflicted as part of the
                  effects of the Stun (X) Special Rule, but may also be applied
                  by specific Special Rules. The following Rules apply to any
                  Unit that includes one or more Models that have the Stunned
                  Status:
                  <ul>
                    <li>
                      The Controlling Player of a Unit that includes any Models
                      that are Stunned may not declare any Reactions for that
                      Unit.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="status">
                <div class="status-head">
                  <p class="bold core-status">Routed</p>
                  <div class="status-desc">
                    The Routed Status reflects a Unit that has suffered such a
                    catastrophic reversal that it must fall back from the front
                    line in order to regroup and recover.
                  </div>
                </div>
                <div class="status-text">
                  The Routed Status can be inflicted by any of the following:
                  <ul>
                    <li>
                      As part of the effects of the Panic (X) Special Rule.
                    </li>
                    <li>
                      If a Unit has had 25% or more of the Models that were part
                      of that Unit at the start of a Shooting Attack Removed as
                      Casualties due to that Shooting Attack, then the
                      Controlling Player must pass a Leadership Check for that
                      Unit or it gains the Routed Status (see the Rules for
                      Panic in the
                      <a
                        href=""
                        @click.prevent="scrollToSection('MorS')"
                        class="italic"
                      >
                        Morale Sub-phase</a
                      >).
                    </li>
                    <li>
                      The Controlling Player of a Unit that loses Combat must
                      take a Leadership Check for that Unit in the Resolution
                      Sub-Phase and if the Check is failed then the Unit gains
                      the Routed Status.
                    </li>
                    <li>
                      Other Rules may also apply the Routed Status, these Rules
                      will specify how and when this occurs.
                    </li>
                  </ul>
                  The following Rules apply to any Unit that includes one or
                  more Models that have the Routed Status:
                  <ul>
                    <li>
                      The Controlling Player of a Unit that includes any Models
                      that are Routed must make all Shooting Attacks for that
                      Unit as Snap Shots.
                    </li>
                    <li>
                      The Controlling Player of a Unit that includes any Models
                      that are Routed may not declare any Reactions for that
                      Unit.
                    </li>
                    <li>
                      A Unit with the Routed Status may not move in the Move
                      Sub-Phase of the Movement Phase - any effect that would
                      force them to move or Rush in the Movement Phase has no
                      effect.
                    </li>
                    <li>
                      In the Rout Sub-Phase of the Movement Phase, a Unit that
                      includes any Models with the Routed Status must Fall Back.
                    </li>
                    <li>
                      Any Models that have the Routed Status and move into
                      contact with any point on the Battlefield Edge that is
                      within the Controlling Player's Deployment Zone stop
                      moving, and any Models that have the Routed Status and
                      begin the Rout Sub-Phase in contact with any point on the
                      Battlefield Edge that is within the Controlling Player's
                      Deployment Zone remain Stationary.
                    </li>
                    <li>
                      If a Unit that includes one or more Models with the Routed
                      Status enters contact with an edge of the Battlefield
                      within the Controlling Player's Deployment Zone as part of
                      a Fall Back Move, a Leadership Check must be made for that
                      Unit once all Models in the Unit have completed their
                      moves. If that Leadership Check is failed, then all Models
                      in the Unit are immediately removed from play as
                      Casualties. However, if that Leadership Check is passed
                      then the Unit remains in play and all Models in the Unit
                      lose the Routed Status, but gain the Suppressed Status.
                    </li>
                    <li>
                      In the Assault Phase Charges may not be declared for a
                      Unit that includes any Models with the Routed Status and
                      any Rule or effect that would otherwise force such a Unit
                      to make a Charge has no effect.
                    </li>
                    <li>
                      A Unit that includes any Models with the Routed Status in
                      the
                      <a
                        href=""
                        @click.prevent="scrollToSection('ResS2')"
                        class="italic"
                      >
                        Resolution Sub-phase</a
                      >
                      of the Assault Phase must always Fall Back at the end of
                      that Sub-Phase.
                    </li>
                  </ul>
                </div>
                <div class="unit__additional-rules">
                  <h4>Designer's Note</h4>
                  <p>
                    Astute readers will have noted that a Unit under the
                    Reactive Player's control that loses Combat and gains the
                    Routed Status will be forced to Fall Back from that Combat
                    and will then have to Fall Back a second time in the
                    Controlling Player's following Movement Phase. This is
                    entirely intentional, and is intended to avoid Units
                    'ping-ponging' in and out of Combat. Players whose Units
                    have been Routed will benefit from the fact that they must
                    halt at the Battlefield Edge, stopping them running to their
                    doom, and the fact that being attacked while Routed does not
                    result in the immediate removal of the Routed Unit, nor stop
                    them from shooting. Furthermore, the various Liber books
                    will present additional options and Wargear that will allow
                    Players the opportunity to mitigate or remove Statuses
                    outside of the Statuses Sub-Phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 id="reactions">Reactions</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('RA')"
              >Reaction Allotments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('BRA')"
              >Base Reaction Allotment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('UR')"
              >Using Reactions</a
            >
          </li>
        </ul>
        <p class="bold">
          Reactions allow the Reactive Player to take limited actions during the
          Active Player's Turn.
        </p>
        <div class="border">
          <h4>Reactions Terminology</h4>
          <p>
            Throughout these Rules the term 'Reactions' is used to indicate
            Reactions of all kinds, including Core Reactions, Advanced
            Reactions, Psychic Reactions and any other type of Reaction
            introduced by other Age of Darkness publications. When a Rule
            affects only one type of Reaction, it will note that specific
            category of Reactions. For example, if a Rule states 'Units may not
            use Reactions', this means all Reactions of any type. If a Rule
            states 'Units may not use Advanced Reactions', it means only
            Advanced Reactions and not any other type of Reaction.
          </p>
        </div>
        <p>
          To represent the fast-paced nature of war during the Horus Heresy, the
          Age of Darkness Rules use Reactions. These are actions that a Player
          may make during the Opposing Player's Turns in an attempt to thwart
          their onslaught and turn the Battle in their favour. Each Turn grants
          only a limited number of Reactions, which must be used wisely to
          secure victory.
        </p>
        <p>
          Reactions may only be used by the Reactive Player - that is the Player
          that is not currently resolving their Player Turn. A Unit controlled
          by a Player currently resolving their Player Turn, the Active Player,
          may never make a Reaction of any kind.
        </p>
        <p>
          Reactions are actions that interrupt the usual flow of play, and can
          be extremely powerful in Battle. As such, there are a number of key
          restrictions with regards to their use. These are covered in the Rules
          presented in this section, but are highlighted here for easy
          reference:
        </p>
        <ul>
          <li>
            The Reactive Player has a Reaction Allotment of 1 in each Turn -
            this may be increased by other Special Rules.
          </li>
          <li>No Unit may make more than one Reaction in any Turn.</li>
          <li>
            A Unit that is Stunned, Routed or Locked in Combat may never make a
            Reaction.
          </li>
        </ul>
        <h4 id="RA">Reaction Allotments</h4>
        <p>
          The Reactive Player may attempt a set number of Reactions in the
          Active Player's Turn - as determined by the Player's Reaction
          Allotment. The Reaction Allotment determines how many Reaction Points
          the Reactive Player will have to spend. A Player must expend 1
          Reaction Point in order to have a Unit under their control make a
          single Reaction and once their Reaction Allotment is reduced to 0 then
          no more Reactions may be made. Reactions can be made in any Phase of
          the Active Player's Turn, and each Reaction will note when and how it
          may be made - there is no limit to the number of Reactions that may be
          made in a given Phase other than the Reactive Player's Reaction
          Allotment. Note that points of Reaction Allotment that are not spent
          in a given Player Turn do not carry over to future Turns and are
          discarded at the end of that Player Turn.
        </p>
        <div class="border">
          <h4 id="BRA">Base Reaction Allotment</h4>
          <p>
            All Players, unless a Special Rule or other effect specifies
            otherwise, have a Base Reaction Allotment of 1. This means that at
            the start of each Player Turn the Reactive Player has 1 Reaction
            Point.
          </p>
          <p>
            In addition to this Base Reaction Allotment, all Players receive
            additional Reaction Allotment Points based on the Points Limit of
            the Battle being resolved (see the
            <a href="" @click.prevent="scrollToSection('ResS2')" class="italic">
              Rules for Army selection</a
            >). Note that the total Points Value of an Army is irrelevant for
            determining this bonus, it is the Points Limit of the Battle that
            determines what bonus Reaction Points a Player gets. To determine
            the number of bonus Reaction Points gained, consult the table below:
          </p>
          <div>
            <table class="unit-general__table">
              <thead>
                <tr>
                  <th>Battle Points Limit</th>
                  <th>Bonus Reaction Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Up to 1,500 Points</td>
                  <td>No bonus</td>
                </tr>
                <tr>
                  <td>1,501-3,500 Points</td>
                  <td>+1 Reaction Point</td>
                </tr>
                <tr>
                  <td>3,501-5,000 Points</td>
                  <td>+2 Reaction Points</td>
                </tr>
                <tr>
                  <td>More than 5,000 Points</td>
                  <td>+3 Reaction Points</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Players may also gain additional bonus Reaction Points from other
            Special Rules presented as part the various Army lists available to
            them. In all cases, these Special Rules will detail how these
            additional Reaction Points are gained and how many Reaction Points
            are gained.
          </p>
        </div>
        <p>
          A Reaction may be made with any Unit controlled by the Reactive
          Player, though in a number of situations a Special Rule or Status may
          deny a Unit the opportunity to react. The most common such Statuses
          where a Unit may not make a Reaction are:
        </p>
        <ul>
          <li>It is Stunned.</li>
          <li>It is Routed.</li>
          <li>It is Locked in Combat.</li>
          <li>It has already made a Reaction in the current Player Turn.</li>
          <li>
            The Controlling Player has no points remaining in their Reaction
            Allotment.
          </li>
          <li>Another Special Rule specifically states they may not.</li>
        </ul>
        <h4 id="UR">Using Reactions</h4>
        <p>
          When making Reactions, all armies, regardless of Faction or size, may
          choose to use any or all of the Core Reactions as presented in this
          rulebook during a Battle. Certain armies may gain access to additional
          Reactions due to Faction rules or Special Rules. No matter how many
          different Reactions an Army has to choose from, it may still only make
          a number of Reactions per Turn equal to its Reaction Allotment. Most
          Reactions may only be played in a specific Phase, and in opposition to
          a specific action taken by the Active Player. In all cases, the Rules
          for each Reaction will detail when and how they are used. A given
          Reaction may be used as many times as a Player wishes, so long as that
          Player has not exhausted their Reaction Allotment for the Phase - but
          no individual Unit may make more than one Reaction in any one Turn.
        </p>
        <p>
          Shooting Attacks made as part of a Reaction may not be made without
          Line of Sight, including with Weapons with the Barrage (X) Special
          Rule or other Weapons or Special Rules that otherwise ignore Line of
          Sight, and models with the Vehicle Type may only attack with Defensive
          Weapons. Shooting Attacks made as part of a Reaction do not cause
          Leadership Checks due to casualties or wounds inflicted upon enemy
          Units, this includes both Leadership Checks due to a Unit having
          suffered 25% casualties or from the Panic (X) Special Rule. Hits or
          wounds inflicted as part of a Shooting Attack made as a Reaction do
          not inflict Status Checks of any kind and cannot inflict any Tactical
          Status on the Target Unit.
        </p>
        <p>
          When making a Shooting Attack as part of a Reaction, the Reacting Unit
          is considered to be Stationary, and may attack with Weapons of any
          type as though Models in that Unit had not moved. A Shooting Attack
          made as part of a Reaction does not limit the actions of the Reacting
          Units in future Turns or Phases regardless of the Weapons used to
          attack with, although any Weapons with the Limited (X) Special Rule or
          special abilities that may only be used once are considered to have
          been expended if used as part of a Reaction. Similarly, Units that
          make moves or undertake other actions as part of a Reaction suffer no
          penalty or drawback in later Phases or Turns for doing so.
        </p>
        <p>
          Any Reaction that allows a Unit to move using its Initiative
          Characteristic rather than its Movement Characteristic to determine
          the distance moved, may not be used by Units that include any Models
          with either no Initiative Characteristic (such as most Models with the
          Vehicle Type) or an Initiative Characteristic of 0. In addition,
          Reactions that allow a Move based on Initiative use the Unit's or
          Model's unmodified Initiative and are not affected by Difficult
          Terrain (but must still take Dangerous Terrain Tests as normal).
        </p>
        <div class="wrapper">
          <div>
            <p class="bold core-status">Movement Fase: Reposition</p>
            <p>
              This Reaction allows the Reactive Player to move a Unit when an
              enemy Unit ends its move within 12".
            </p>
            <div>
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Reposition Reaction in Step 2 of the Move Sub-phase
                process, if an enemy Unit ends a move within 12" and in Line of
                Sight of a Unit under the Reactive Player's Control.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Reposition
                Reaction - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose move triggered the Reaction. Once the cost has been
                paid, the Reactive Player must select one Unit under their
                control that is within 12" and has Line of Sight to the Target
                Unit - that Unit is the Reacting Unit. Process
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once a Reposition Reaction has been declared, the Active
                    Player must completely resolve the Target Unit's movement.
                  </li>
                  <li>
                    Once the Target Unit has finished its move, the Reactive
                    Player may move the Reacting Unit. When making this move,
                    each Model in the Reacting Unit may move a number of inches
                    up to the Base Value of its Initiative Characteristic.
                  </li>
                  <li>
                    Once the Reacting Unit has completed this move, the Movement
                    Phase continues as normal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status">Shooting Phase: Return Fire</p>
            <p>
              This Reaction allows the Reactive Player to make a Shooting Attack
              for a Unit that is the target of an enemy Shooting Attack.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Return Fire Reaction in the Shooting Phase, during
                Step 3 of the Shooting Attack sequence of any Shooting Attack
                made by the Active Player.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Return Fire
                Reaction - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Target Unit is always the
                Unit whose Shooting Attack triggered the Reaction. The Reacting
                Unit is always the Unit that was the target of the Shooting
                Attack that triggered the Reaction.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once a Return Fire Reaction has been declared, the Active
                    Player must resolve all remaining Steps of the Shooting
                    Attack process as normal, up to the start of Step 11.
                  </li>
                  <li>
                    Before resolving Step 11, the Reactive Player makes a
                    Shooting Attack with the Reacting Unit (including with any
                    Models that have been reduced to 0 Wounds and before any
                    Panic Checks are taken) targeting only the Target Unit.
                  </li>
                  <li>
                    Once the Shooting Attack made as part of this Reaction has
                    been completely resolved, including removing any Casualties,
                    the Players must then finish resolving Step 11 of the
                    original Shooting Attack that triggered the Reaction.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status">Assault Phase: Overwatch</p>
            <p>
              This Reaction allows the Reactive Player to make more powerful
              Volley Attacks.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare an Overwatch Reaction during Step 4 of the Charge
                process of any Charge declared by the Active Player.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare an Overwatch
                Reaction - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> For an Overwatch Reaction, the
                Target Unit is always the Unit whose Charge triggered the
                Reaction. The Reacting Unit is always the Unit that was declared
                as the target of the Charge that triggered this Reaction.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once an Overwatch Reaction has been declared, and once the
                    Active Player has resolved any Volley Attacks they choose to
                    make, the Reactive Player may choose to have the Reacting
                    Unit make a Shooting Attack instead of a Volley Attack.
                  </li>
                  <li>
                    This Shooting Attack must target the Target Unit and is made
                    at full Ballistic Skill, not as Snap Shots, and may be made
                    using any Ranged Weapon. No Cover Tests or Shrouded Damage
                    Mitigation Tests may be taken against wounds inflicted as
                    part of an Overwatch Reaction.
                  </li>
                  <li>
                    Once the Shooting Attack made as part of this Reaction has
                    been fully resolved, the Players must move to Step 5 of the
                    Charge Process as normal. However, if, once this Shooting
                    Attack has been fully resolved, all Models in the Target
                    Unit or Reacting Unit have been Removed as Casualties then
                    the Charge process is ended immediately and the Active
                    Player may select another Unit to resolve a Charge for.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status">Death or Glory</p>
            <p>
              This Advanced Reaction allows a Unit that a Vehicle has moved
              through to attack the Vehicle.
            </p>
            <div>
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Death or Glory Reaction whenever the Active Player
                moves through an enemy Unit with a Model that has the Vehicle
                Type.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Death or Glory
                Reaction - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> For a Death or Glory Reaction,
                the Target Model is always the enemy Model with the Vehicle Type
                that triggered this Reaction. The Unit that was being moved
                through by the Target Unit is considered the Reacting Unit.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once declared, the Target Model must temporarily halt its
                    move in Base Contact with one or more Models from the
                    Reacting Unit.
                  </li>
                  <li>
                    The Reactive Player must nominate any one Model in the
                    Reacting Unit, referred to hereafter as the Attacking Model.
                    The Attacking Model does not have to be in Base Contact with
                    the Target Model. The Attacking Model may not have the
                    Vehicle Type.
                  </li>
                  <li>
                    The Attacking Model may attack with either a Melee or Ranged
                    Weapon, making a number of attacks equal to the Firepower of
                    the selected Ranged Weapon or the Attacks Characteristic of
                    the Attacking Model, modified by the selected Melee Weapon's
                    Attacks Modifier Characteristic. Whatever form the attack
                    takes, all attacks automatically hit and any Armour
                    Penetration Tests are resolved against the Target Model's
                    Front Armour.
                  </li>
                  <li>
                    If the attack causes the Target Model to be Removed as a
                    Casualty or inflicts the Pinned Status, then the Attacking
                    Model remains in play - otherwise it is immediately Removed
                    as a Casualty with no Saving Throws or Damage Mitigation
                    Tests of any kind allowed. If the Target Model is Removed as
                    a Casualty then no Hits are inflicted due to it moving
                    through an enemy Unit. If it remains in play then such Hits
                    are inflicted as normal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 class="bold core-status">Intercept</h4>
            <p>
              This Advanced Reaction allows a Unit to attack Units moving into
              play from Reserves.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare an Intercept Reaction whenever the Active Player brings
                a Unit into play from Reserves or Aerial Reserves. The
                declaration is made as soon as the last Model from the Unit is
                placed on the Battlefield and has made any moves it is permitted
                to make when it enters play.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare an Intercept
                Reaction - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Unit entering play from
                Reserves or Aerial Reserves is always the Target Unit of this
                Reaction. After declaring this Reaction, the Reactive Player
                must select one Unit under their control, this Unit must be able
                to draw a Line of Sight to at least one Model in the Target
                Unit. The selected Unit is the Reacting Unit.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once an Intercept Reaction has been declared, the Reactive
                    Player may make a Shooting Attack for the Reacting Unit,
                    targeting only the Target Unit. All attacks made as part of
                    this Shooting Attack must be made as Snap Shots and Models
                    with the Vehicle Type may only attack with Defensive
                    Weapons.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status">Evade</p>
            <p>
              This Advanced Reaction allows a Unit to attempt to avoid an enemy
              Charge by moving.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare an Evade Reaction at the end of Step 4 of a Charge
                declared by the Active Player that targets a Unit entirely
                composed of Models with the Light Sub-Type or Cavalry Type.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare an Evade Reaction -
                this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Unit that is the target of
                the Charge that triggered this Reaction is the Reacting Unit,
                while the Unit making that Charge is the Charging Unit. Process
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    After all Volley Attacks have been made by both the Reacting
                    Unit and the Charging Unit, the Reactive Player may make a
                    move for each Model in the Reacting Unit.
                  </li>
                  <li>
                    Each Model in the Reacting Unit may be moved a number of
                    inches equal to its Initiative Characteristic and must end
                    the Move in Unit Coherency with another Model from the same
                    Unit.
                  </li>
                  <li>
                    If this move would leave all Models in the Reacting Unit
                    outside of the Charging Unit's maximum possible Charge Range
                    then the Charge has failed and no Combat is resolved.
                    Otherwise, the Charge proceeds as normal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status" id="nullify">Nullify</p>
            <p>
              This Advanced Reaction allows the Reactive Player to attempt a
              Willpower Check to negate a Psychic Curse. Note that Nullify is
              both an Advanced Reaction and a Psychic Reaction.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Nullify Psychic Reaction when they fail a Resistance
                Check made to negate a Psychic Curse manifested by the Active
                Player.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Nullify Reaction
                - this cost paid as soon as the declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Unit that is the target of
                the Psychic Curse that triggered this Reaction is always the
                Target Unit. Once this Reaction has been declared, the Reactive
                Player must nominate a Model under their control with the Psyker
                Trait that has a Line of Sight to either any one Model in the
                Target Unit or to the Focus of the Psychic Curse. The Model
                selected is the Reacting Model and the Unit that includes it is
                considered to be the Unit that has made this Reaction.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once the Reacting Model has been selected, the Reactive
                    Player subtracts the Willpower Characteristic of the Psychic
                    Curse's Focus from the Willpower Characteristic of the
                    Reacting Model. The result is the Power modifier, which may
                    be negative if the Psychic Curse's Focus' Willpower is high.
                  </li>
                  <li>
                    The Reactive Player must then make a Willpower Check for the
                    Reacting Model, applying the Power modifier to the result of
                    that Check.
                  </li>
                  <li>
                    If the Check is passed then the Psychic Curse whose
                    declaration triggered this Reaction automatically fails to
                    manifest and may not be re-attempted this Turn. If the Check
                    fails then the Psychic Curse is resolved as normal.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <p class="bold core-status" id="HerIn">Heroic Intervention</p>
            <p>
              This Advanced Reaction allows the Reactive Player to declare
              Challenges.
            </p>
            <div class="unit-ability-desc">
              <p>
                <span class="bold">Trigger:</span> The Reactive Player may
                declare a Heroic Intervention Reaction if, in Step 1 of the
                Challenge Sub-Phase, the Active Player chooses to pass and
                declare no Challenge for a selected Combat.
              </p>
              <p>
                <span class="bold">Cost:</span> The Reactive Player must spend 1
                point of their Reaction Allotment to declare a Heroic
                Intervention Reaction - this cost paid as soon as the
                declaration is made.
              </p>
              <p>
                <span class="bold">Target:</span> The Combat in which the Active
                Player chose not to declare a Challenge, triggering this
                Reaction, is the Target Combat.
              </p>
              <div>
                <span class="bold">Process:</span>
                <ul class="unit-ability-desc_ul">
                  <li>
                    Once this Reaction is declared the Reactive Player may
                    choose to declare a Challenge, selecting one eligible Model
                    under their control in the Target Combat to be the
                    Challenger.
                  </li>
                  <li>
                    The Active Player may then select one eligible Model under
                    their control in the same Combat to accept the Challenge.
                    The Model selected is then considered the Challenged.
                  </li>
                  <li>
                    If the Active Player chooses not to select an eligible Model
                    to accept the Challenge, then the Reactive Player must
                    select one enemy Model from the same Combat which was
                    eligible to accept the Challenge (if any such Model exists)
                    and apply the
                    <a
                      href=""
                      @click.prevent="scrollToSection('TDS')"
                      class="italic"
                    >
                      Disgraced Status</a
                    >
                    to that Model . The Active Player must then select another
                    eligible Combat as per the normal Challenge Sub-Phase Rules.
                  </li>
                  <li>
                    If, for any reason, the Active Player cannot select an
                    eligible Model (for example, if a Special Rule prohibits an
                    otherwise eligible Model from accepting the Challenge), then
                    no Challenge occurs and the Challenge Sub-Phase continues as
                    normal, with the Reactive Player scoring no Combat
                    Resolution Points as a result of this Reaction. If the
                    Active Player selects an eligible Model to take part in the
                    Challenge, then the Challenge is resolved using the normal
                    Rules.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 id="psychicAbil">Psychic Abilities</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('TP')">Trait:Psyker</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PsW')"
              >Psychic Weapons</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PsP')"
              >Psychic Powers</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PsR')"
              >Psychic Reactions</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RBaC')"
              >Resolving Blessings and Curses</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MPB')"
              >Manifesting Psychic Blessings</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MPC')"
              >Manifesting Psychic Curses</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PotW')"
              >Perils of the warp</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('APotW')"
              >Applying Perils of the Warp</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TPotWt')"
              >The Perils of the Warp Table</a
            >
          </li>
        </ul>
        <p class="bold">
          These Rules allow Players to make use of the eldritch powers of
          Psykers on the Battlefield, both to attack the enemy with warp-spawned
          fury and to conjure more subtle powers and effects to help allies and
          hinder the foe.
        </p>
        <p>
          In Horus Heresy Battles certain Models may make use of various psychic
          abilities to attack the enemy and confound their plans. These psychic
          abilities are broken down into separate categories which, while they
          all share a similar theme, use different Rules to determine how they
          work in play. These distinct types of psychic ability are: Psychic
          Weapons, Psychic Powers and Psychic Reactions.
        </p>
        <p>
          <span class="bold"> Psychic Weapons</span> will use the existing Rules
          for attacking the enemy, being resolved as either Shooting or Melee
          Attacks, and occur during the Shooting and Assault Phases as do other
          attacks.<span class="bold"> Psychic Powers</span> represent any
          psychic effect that is not presented as a Weapon and resolved as an
          attack. Psychic Powers are resolved during one of the existing Phases,
          and have their own unique Rules, each of which is explained as part of
          that power.<span class="bold"> Psychic Reactions</span> represent
          similar abilities to Psychic Powers, however they are used as
          Reactions during the opposing Player's Turn. In all cases, to use a
          Psychic Weapon, Power or Reaction, a Model must possess the Psyker
          Trait.
        </p>
        <div class="border">
          <h4 id="TP">Trait:Psyker</h4>
          <p>
            Many of the Rules for psychic abilities will only be usable by a
            'Psyker'. A Psyker is any Model that has the Psyker Trait on their
            profile. As with all Traits, the Psyker Trait grants no Rules to a
            Model in and of itself, nor does it grant any Psychic Weapons,
            Powers or Reactions, it simply allows a Model to make use of Rules
            that require a Psyker in order to function, or as a trigger for
            Rules that target Psykers. For a Model to gain one or more Psychic
            Weapons, Powers or Reactions, they must either be listed on their
            profile or selected as options during Army Selection.
          </p>
        </div>
        <h4 id="PsW">Psychic Weapons</h4>
        <p class="bold">
          Psychic Weapons are Weapons that can only be used to attack by
          Psykers.
        </p>
        <p>
          A Model must have the Psyker Trait in order to make attacks with a
          Psychic Weapon. In these Rules they are treated exactly as other
          Weapons, with the same Characteristics as any other attack, and can be
          both ranged and melee. The only difference between Psychic Weapons and
          other Weapons is that they are not normally represented by a physical
          component on a Model. Psychic Weapons will have the Psychic Trait to
          identify them. Note that some other Weapons make use of the Psyker
          Trait, but as they do not have the Psychic Trait are not Psychic
          Weapons per se.
        </p>
        <p>
          If a Weapon has the Psychic Trait then a Model must also have the
          Psyker Trait in order to make attacks with that Weapon. A Psyker may
          make Shooting Attacks using any ranged Psychic Weapon available to it
          (or more than one if that Model has a Rule that allows more than one
          Weapon to be used during a Shooting Attack), or during the Assault
          Phase a Psyker may attack using a Psychic Weapon with the Melee Type.
          In close combat, a Psychic Weapon with the Melee Type does count for
          deciding if a Model has more than one Weapon, and obeys all of the
          usual restrictions. However, a Psychic Weapon can never be destroyed
          or otherwise removed from a Model unless a Rule specifically targets a
          Psychic Weapon.
        </p>
        <p>
          Unless otherwise stated there are no additional requirements, Tests or
          Checks needed to make an attack using a Psychic Weapon - other than
          the Psyker Trait. However, many Psychic Weapons may have additional
          Special Rules that require a Test or Check in order to make an attack.
          In all cases, the Rules for this will be covered by the Special Rule
          itself.
        </p>
        <h4 id="PsP">Psychic Powers</h4>
        <p class="bold">
          Psychic Powers are special actions that can be used by Psykers to aid
          their allies and hinder the enemy.
        </p>
        <p>
          Psychic Powers are psychic abilities that can achieve many diverse
          ends, from simple destruction to the subtle subversion of the enemy,
          and are represented in a form more akin to Special Rules in order to
          represent the many effects a trained battle psyker can produce.
          Psychic Powers are never presented as Weapons Profiles and are not
          used to make attacks (though they can inflict Hits, wounds or Damage).
          Psychic Powers are broken down into two distinct categories: Blessings
          and Curses. Blessings are Psychic Powers that affect either the Psyker
          itself or another friendly Unit, while Curses are Psychic Powers that
          target an enemy Unit.
        </p>
        <p>
          Unlike Psychic Weapons, which are used as part of a normal Shooting
          Attack or Combat, using Psychic Powers is a separate action that
          requires its own Rules. The following Rules are the most important
          ones to note:
        </p>
        <ul>
          <li>
            The Controlling Player may not use more than one Psychic Power for a
            Unit under their control that includes one or more Models with the
            Psyker Trait in their Player Turn, and no more than one Psychic
            Reaction in the Opposing Player's Player Turn (note that Psychic
            Weapons and Psychic Gambits are not counted for these limits). If a
            Model leaves a Unit for which a Psychic Power has been used then
            both the original Unit and the new one created by the Model leaving
            are restricted from using further Psychic Powers or Psychic
            Reactions in that Player Turn.
          </li>
          <li>
            Using a Psychic Power or Psychic Reaction does not stop a Model or
            Unit from moving, making Shooting Attacks or conducting Charges and
            Combat - unless the Psychic Power or Psychic Reaction itself states
            otherwise.
          </li>
          <li>
            A Model or Unit that is In Reserves, Embarked on another Model or
            otherwise not in play or on the Battlefield may not use Psychic
            Powers or Psychic Reactions of any kind.
          </li>
          <li>
            Any ongoing effect of a Psychic Power or Psychic Reaction is
            immediately cancelled and ceases having any effect once the Model or
            Unit that used it either leaves play and enters Reserves, Embarks
            upon another Model or is removed from play as a Casualty (this does
            not include any Wounds lost due to Hits or wounds inflicted by a
            Psychic Power or Psychic Reaction).
          </li>
        </ul>
        <h4 id="PsR">Psychic Reactions</h4>
        <p class="bold">
          Psychic Reactions are special actions that can be used by Psykers
          during the Opposing Player's Turn.
        </p>
        <p>
          Psychic Reactions are Psychic Powers that can only be used as a
          Reaction in the Opposing Player's Player Turn. They follow all of the
          Rules noted for Psychic Powers as well as the
          <a
            href=""
            @click.prevent="scrollToSection('reactions')"
            class="italic"
          >
            Rules for Reactions</a
          >
          - the most obvious of these restrictions is that Psychic Reactions can
          only be used when the Controlling Player is the Reactive Player. As
          with other types of Reaction, a Psychic Reaction may only be used when
          'triggered' by an action taken by the Active Player and will require 1
          or more Reaction Points be spent before they can be resolved. Each
          Psychic Reaction will list when it may be used and what costs must be
          paid for that use.
        </p>
        <p>
          Much like Psychic Powers, a Psychic Reaction can be a Blessing or a
          Curse. However, some Psychic Reactions may not use the Rules for
          Blessings or Curses and simply apply an effect that requires a
          'Psyker' in a different manner. In such cases, the Psychic Reaction
          will present all the Rules needed to apply it in play. For an example
          of such a Psychic Reaction, see
          <a href="" @click.prevent="scrollToSection('nullify')" class="italic">
            Nullify</a
          >.
        </p>
        <h4 id="RBaC">Resolving Blessings and Curses</h4>
        <p class="bold">
          The following Rules explain how to resolve a Psychic Power or Psychic
          Reaction that is a Blessing or a Curse.
        </p>
        <p>
          Each Psychic Power or Psychic Reaction that is resolved as a Blessing
          or a Curse will note when and in what Phase or Sub-Phase it may be
          used, as well as how to select a target for the power. However, the
          process of activating the effects of a Blessing or Curse, regardless
          of whether it is used as a Psychic Power or a Psychic Reaction is
          referred to as Manifesting a Curse or Blessing and follows a fixed
          procedure.
        </p>
        <h4 id="MPB">Manifesting Psychic Blessings</h4>
        <p>
          In order to Manifest a Psychic Blessing, the Controlling Player must
          first declare the use of the Psychic Power or Reaction and identify
          the Model that is using the Psychic Power or Psychic Reaction - known
          as the Focus. Then the Focus' Controlling Player must make the target
          known to all Players, using the Rules provided as part of that Psychic
          Power or Psychic Reaction. The target of a Blessing must always be a
          friendly Model or Unit - a Blessing may not be used to target a
          non-friendly Model or Unit and such Models never gain any benefit from
          the Blessing even if otherwise caught within its area of effect.
        </p>
        <p>
          Once the target for the Blessing has been selected, the Controlling
          Player must make a Willpower Check- known as the Manifestation Check.
          The Target Number for this Check is the Current Value of the Willpower
          Characteristic of the Focus. If the Psychic Power or Psychic Reaction
          is being used by a Unit rather than a specific Model, then the
          Controlling Player must nominate one Model in the Unit to be the
          Focus. If more than one Unit is affected by the Psychic Power or
          Psychic Reaction then no additional Checks are made. If the Willpower
          Check is passed then all Target Units are affected. If it is failed
          then none are affected.
        </p>
        <p>
          If the Willpower Check is successful then the effects of the Psychic
          Power or Reaction are applied as noted in its Rules. If the Willpower
          Check is failed then the effects of the Psychic Power or Psychic
          Reaction are not applied. Some Psychic Powers or Psychic Reactions may
          list additional effects that must be applied if the Willpower Check is
          failed when manifesting a Blessing.
        </p>
        <p>
          Note that if the Willpower Check is failed then this is still counted
          as having used a Psychic Power or Psychic Reaction, and no Model in
          that Unit may use any further Psychic Powers or Psychic Reactions in
          the same Player Turn.
        </p>
        <h4 id="MPC">Manifesting Psychic Curses</h4>
        <p>
          In order to Manifest a Psychic Curse, the Player must first declare
          the use of the Psychic Power or Reaction and identify the Model that
          is using the Psychic Power or Psychic Reaction - known as the Focus.
          Then the Focus' Controlling Player must make the target known to all
          Players, using the Rules provided as part of that Psychic Power or
          Psychic Reaction. The target of a Curse must always be an enemy Model
          or Unit - a Curse may not be used to target a friendly Model or Unit.
        </p>
        <p>
          Once the target for the Curse has been selected, the Controlling
          Player of the Target Unit must make a Willpower Check for the Unit -
          known as the Resistance Check. If the Target Unit consists of a single
          Model then the Target Number for the Check is the Current Value of the
          Willpower Characteristic of that Model. If the Target Unit contains
          more than one Model then the current Willpower of the Model with the
          lowest Willpower Characteristic is used - unless the Unit includes one
          or more Models with the Sergeant Sub-Type, Command Sub-Type or Paragon
          Type, in which case the Controlling Player may select one of these
          Models and use the current Willpower Characteristic of that Model as
          the Target Number for the Check. If more than one Unit is targeted by
          the Psychic Power or Psychic Reaction, then a separate Willpower Check
          is made for each Unit, with those for which the check is failed being
          affected and those for which the check is passed not being affected.
        </p>
        <p>
          If the Willpower Check is successful then the Psychic Power or Psychic
          Reaction is considered to have failed and it has no further effect. If
          the Willpower Check is failed then the effects of the Psychic Power or
          Psychic Reaction are applied as noted in the Rules for that Psychic
          Power or Psychic Reaction. Some Psychic Powers or Psychic Reactions
          may list additional effects that must be applied even if the Check
          made for the Target Unit succeeds. These will be noted in the Rules
          for that Psychic Power or Psychic Reaction.
        </p>
        <p>
          Note that if the Willpower Check for the Target Unit succeeds then
          this is still counted as having used a Psychic Power or Psychic
          Reaction, and no Model in the Unit that used the Psychic Power or
          Psychic Reaction may use any further Psychic Powers or Psychic
          Reactions in the same Player Turn.
        </p>
        <h4 id="PotW">Perils of the Warp</h4>
        <p class="bold">
          When rolling doubles to manifest a Psychic Power or Psychic Reaction,
          Perils of the Warp can trigger and inflict Statuses or Wounds on the
          Focus.
        </p>
        <p>
          Common to all forms of psychic ability is the possibility of the
          Warp's power rebelling and wreaking havoc on the Psyker and their
          allies. This is represented by the Perils of the Warp Special Rule.
          The effects of the Perils of the Warp Special Rule are applied to the
          Unit that includes the Focus of the Psychic Power or Reaction if a
          Willpower Check made as a Manifestation Check or Resistance Check for
          a Psychic Power or Psychic Reaction results in 'doubles'. In this
          case, doubles refers to a natural, unmodified result where both Dice
          rolled as part of the Check and selected to determine the final result
          show the same number on their uppermost face. Where other Rules
          specify that a Unit should have the effects of Perils of the Warp
          applied to it, that rule will detail how and when this will occur.
        </p>
        <p>
          Note that both Resistance and Manifestation Checks both automatically
          succeed on a result of two '1's and automatically fail on a result of
          two '6's. However, this does not stop them from also triggering Perils
          of the Warp. A Manifestation Check or Resistance Check that rolls a
          double 1 or 6 does trigger Perils of the Warp unless another Rule
          specifically states otherwise.
        </p>
        <h4 id="APotW">Applying Perils of the Warp</h4>
        <p>
          If a Unit is instructed to suffer the effects of Perils of the Warp,
          then the following Rules are used to determine what effects that Unit
          suffers.
        </p>
        <p>
          If the Perils of the Warp are caused by a Player having rolled a
          result of doubles on a Willpower Check result made as a Manifestation
          or Resistance Check, using the number shown on both Dice of the
          Check's result with the Perils of the Warp Table to determine the
          effect.
        </p>
        <p class="italic">
          For example, a Player rolls two Dice for a Manifestation Check, with
          both Dice showing '4's and a final result of 8 for the Check. The
          Check is successful, but as doubles were rolled the Unit that includes
          the Power's Focus suffers Perils of the Warp - as two '4's were
          rolled, the Controlling Player of the Focus checks the entry on the
          Perils of the Warp Table for a '4' and must apply Etheric Feedback to
          the Unit that includes the Focus.
        </p>
        <p>
          For Perils of the Warp not caused by Willpower Checks, roll a Dice and
          compare the result of that roll to the table.
        </p>
        <p class="italic">
          For example, a Special Rule requires a Player to apply Perils of the
          Warp to a Unit, but not as the result of a Check. That Player rolls a
          single Dice, resulting in a '6' and must then check the entry for a
          '6' on the Perils of the Warp Table and must apply Warp Rupture to the
          Unit targeted by the Special Rule.
        </p>

        <h4 id="TPotWt">The Perils of the Warp Table</h4>
        <p>
          If a Unit is instructed to suffer the effects of Perils of the Warp,
          consult the table below.
        </p>
        <div>
          <table class="unit-general__table">
            <tbody>
              <tr>
                <td>1 or 6</td>
                <td>
                  <span class="bold">WARP RUPTURE:</span> The Unit suffers a
                  number of wounds which ignore all Armour Saves, Cover Saves
                  and Damage Mitigation Rolls. Invulnerable Saves may be taken
                  against these wounds as normal and they are allocated as if
                  they were inflicted by a Shooting Attack. The number of wounds
                  inflicted is 13 minus the Willpower Characteristic of the
                  Model in the Unit with the lowest Willpower Characteristic. If
                  the Unit includes any Models with the Sergeant Sub-Type,
                  Command Sub-Type or the Paragon Type then the Willpower
                  Characteristic of one of those Models chosen by the Unit's
                  Controlling Player may be used instead.
                </td>
              </tr>
              <tr>
                <td>2,3,4,5</td>
                <td>
                  <span class="bold">ÆTHERIC FEEDBACK:</span> The Unit gains the
                  Stunned Status.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="italic">
          Full List of Psychic Disciplines You Can See in Header of this Site
        </p>

        <h3 id="vehicles">Vehicles</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('VaU')"
              >Vehicles and Units</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VaTS')"
              >Vehicles and Tactical Statuses</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RepT')">Repair Tests</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VaST')"
              >Vehicles and Saving Throws</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VitMP')"
              >Vehicles in the Movement Phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VaR')"
              >Vehicles and Rushing</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VaT')"
              >Vehicles and Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MTOU')"
              >Moving Through Other Units</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VitSP')"
              >Vehicles in the Shooting Phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AMTU')"
              >Attacking Multiple Target Units</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DWaBW')"
              >Defensive Weapons and Battle Weapons</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VFAaWM')"
              >Vehicle Firing Arcs and Weapon Mounts</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FirA')">Firing Arcs</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WeapM')"
              >Weapon Mounts</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VaD')"
              >Vehicles and Damages</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TaBW')"
              >Templates and Blast Weapons</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('APT')"
              >Armour Penetration Test</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RD')"
              >Resolving Damage</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RVMaC')"
              >Removing Vehicle Models as Casualties</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WV')"
              >Wrecked Vehicles</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VitAP')"
              >Vehicles in the Assault Phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CtV')"
              >Charging the Vehicle</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AViC')"
              >Attacking Vehicles in Combat</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CR')"
              >Combat Resolution</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VehicleST')"
              >Vehicle Sub-types</a
            >
          </li>
        </ul>
        <p class="bold">
          These Rules cover how to move, attack with and resolve attacks that
          target Vehicles.
        </p>
        <p>
          Vehicles are a Model Type that does not operate in the same manner as
          other Models, thus warranting their own Rules. This section details
          the Rules common to the Vehicle Type, before going into more detail as
          to the various Sub-Types unique to Vehicles.
        </p>
        <h4 id="VaU">Vehicles and Units</h4>
        <p class="bold">
          Vehicles always form a Unit of one Model and cannot be joined by other
          Models.
        </p>
        <p>
          A Model with the Vehicle Type always operates as a Unit of a single
          Model and may never join, be joined by other Models or otherwise be
          incorporated into Units with other Models of any Type. Unlike other
          Rules, this Rule is not overridden by Special Rules and if any Rule or
          Special Rule would force a Model with the Vehicle Type to join or
          otherwise be part of a Unit then that Rule or Special Rule is ignored.
        </p>
        <h4 id="VaTS">vehicles and tactical statuses</h4>
        <p class="bold">
          Vehicles can gain some Statuses, but can only remove them with Repair
          Tests or through the Battlesmith Special Rule.
        </p>
        <p>
          Models with the Vehicle Type can be affected by all Statuses except
          Routed. As such Models do not have a Cool Characteristic they cannot
          fail a Cool Check and Statuses can only be applied to them by specific
          Rules or the result of a roll on the Vehicle Damage Table.
          Furthermore, as Models with the Vehicle Type do not have a Cool
          Characteristic, they can only remove Statuses by means of the
          Battlesmith (X) Special Rule or a Repair Test made in the Statuses
          Sub-Phase.
        </p>
        <h4 id="RepT">Repair Tests</h4>
        <p>
          One Repair Test can be made by the Active Player for each Model with
          the Vehicle Type under their control in the Statuses Sub-Phase. A
          Repair Test is made by rolling a single Dice and with a Target Number
          of '6'. Some Special Rules may allow more Dice to be rolled for a
          given Model with the Vehicle Type or change the Target Number, any
          such Special Rules will note their effects and how they are to be
          applied. Each successful Repair Test allows the Controlling Player to
          remove one Status from the Model for which the Repair Test was made.
        </p>
        <h4 id="VaST">vehicles and saving throws</h4>
        <p class="bold">
          Vehicles can only use Invulnerable Saves or Cover Saves.
        </p>
        <p>
          A Model with the Vehicle Type cannot gain or use Armour Saves. They
          can gain and make use of Invulnerable Saves or Cover Saves. Damage
          Mitigation Tests are not Saving Throws and may be taken as normal.
        </p>
        <h4 id="VitMP">Vehicles in the movement phase</h4>
        <p class="bold">
          Vehicles move in the same manner as other Models, with exceptions for
          Terrain and moving through other Units.
        </p>
        <p>
          As with all other Models in the Horus Heresy - Age of Darkness Rules,
          Vehicles have a Movement Characteristic which defines the maximum
          number of inches they may move on the Battlefield. In most situations
          Vehicles are moved in exactly the same manner as other Models (see
          <a href="" @click.prevent="scrollToSection('MovU')" class="italic">
            there</a
          >) and can end a move facing in any direction. However, unlike other
          Models, Vehicles may not move vertically in Terrain or on Terrain
          Pieces in order to ascend levels.
        </p>
        <div class="border">
          <h4 id="VaR">vehicles and rushing</h4>
          <p>
            Models with the Vehicle Type do not have an Initiative
            Characteristic and as such may not Rush. Vehicles with the Rapid
            Sub-Type are an exception to this and may Rush.
          </p>
        </div>
        <p>
          Due to the rules for
          <a href="" @click.prevent="scrollToSection('FirA')" class="italic">
            Arcs of Fire</a
          >
          it is important to be clear on which direction a Model with the
          Vehicle Type is facing, as this can affect both which enemy Units can
          be attacked by that Model and how enemy Models attack it. As such,
          Models with the Vehicle Type can choose to Pivot around the central
          point of their hull in the Movement Phase, which does not count as
          Moving. When selected during the Movement Phase a Unit consisting of a
          Model with the Vehicle Type may choose to Pivot instead of Moving -
          that Model may then be turned to face any direction as long as it does
          not end the pivot within 1" of any enemy Model. A Pivot does not count
          as Moving and the Model with the Vehicle Type is considered to have
          remained Stationary.
        </p>
        <h4 id="VaT">vehicles and Terrain</h4>
        <p class="bold">
          Models with the Vehicle Type are affected by the Terrain Rules in the
          same manner as all other Models, with a few exceptions.
        </p>
        <p>
          Models with the Vehicle Type may not move vertically in Terrain or on
          Terrain Pieces in order to ascend levels.
        </p>
        <p>
          Models with the Vehicle Type do not suffer wounds from failed
          Dangerous Terrain Tests. If a Dangerous Terrain Test is failed for a
          Model with the Vehicle Type, then that Model suffers 1 Point of Damage
          (no Armour Penetration Test is made). No Saving Throws or Damage
          Mitigation Tests of any kind may be made against this Damage.
        </p>
        <h4 id="MTOU">moving through other units</h4>
        <p>
          Models without the Vehicle Type do not impede, restrict or limit the
          distance a Model with the Vehicle Type may move. This means that,
          unlike other Models, Models with the Vehicle Type may move through
          other Units that are composed of Models that do not have the Vehicle
          Type.
        </p>
        <p>
          In order to count as having 'moved through' a Unit, the path of travel
          taken by the Model with the Vehicle Type must cross the base of at
          least one Model from a Unit. However, a Model with the Vehicle Type
          may not end its move on top of any Model or in Base Contact with any
          Model in the Movement Phase. Furthermore, a Model with the Vehicle
          Type may not move through other Models with the Vehicle Type or
          through Terrain Features.
        </p>
        <p>
          If a Model with the Vehicle Type moves through a friendly Unit
          composed of Models that do not have the Vehicle Type then this has no
          effect, and the Models in the Unit moved through are not moved or
          otherwise affected. If a Model with the Vehicle Type moves through an
          enemy Unit composed of Models that do not have the Vehicle Type then
          once the Model with the Vehicle Type has finished its move and its
          final location decided, each enemy Unit composed of Models that do not
          have the Vehicle Type that was moved through takes D6 Strength 6 Hits
          with an AP of '-', allocated by the Target Unit's Controlling Player.
          Note that such a move may trigger the Death or Glory Advanced
          Reaction.
        </p>
        <p>
          Moving through other Units does not impede or limit a Model with the
          Vehicle Type from attacking in other Phases, Disembarking or Embarking
          Units or performing any other game action.
        </p>
        <h4 id="VitSP">Vehicles in the shooting phase</h4>
        <p class="bold">
          Vehicles can attack with all of their Weapons, targeting different
          enemy Units, but are limited by the fire arcs of their Weapons when
          selecting targets.
        </p>
        <p>
          When a Model with the Vehicle Type is used to make a
          <a href="" @click.prevent="scrollToSection('ShootA')" class="italic">
            Shooting Attack</a
          >, it uses the Ballistic Skill Characteristic shown on its profile and
          makes any attacks with the same Rules as any other Model, but with a
          few adjustments:
        </p>
        <ul>
          <li>
            A Model with the Vehicle Type may attack with all Weapons the Model
            has as part of a Shooting Attack as long as those Weapons are in
            Range and Line of Sight of the Target Unit.
          </li>
          <li>
            A Model with the Vehicle Type that is selected to make a Shooting
            Attack by the Active Player may have its Weapons divided between
            different targets, making more than one Shooting Attack (though each
            Weapon may be used in only one Shooting Attack in a given Phase).
          </li>
          <li>
            Each Weapon that a Model with the Vehicle Type has is limited in the
            arc from which a Target for that Weapon may be selected.*
          </li>
        </ul>
        <p class="italic">
          *If a Weapon from a Model with the Vehicle Type will be used as part
          of a Shooting Attack and that Weapon is found to be out of arc before
          any attacks are made - in that the selected Target Model is not within
          the bounds of that Fire Arc - then that Weapon may not be used to
          attack as part of that Shooting Attack. However, remember that a given
          Weapon may only make attacks as part of a single Shooting Attack in
          the Shooting Phase.
        </p>
        <h4 id="AMTU">Attacking Multiple Target Units</h4>
        <p>
          In the Shooting Phase, when the Active Player selects a Unit composed
          of a single Model with the Vehicle Type with which to make a Shooting
          Attack, they may choose to divide that Model's Weapons between
          multiple Shooting Attacks at different targets.
        </p>
        <p>
          If the Active Player chooses to make more than one Shooting Attack for
          that Model targeting different enemy Units, then all of the attacks
          made in each of those Shooting Attacks must be made as Snap Shots.
          Furthermore, each Shooting Attack made must target a different Unit
          than all of the other Shooting Attacks made for the attacking Model in
          this Shooting Phase.
        </p>
        <p>
          To make multiple Shooting Attacks with the same Model that has the
          Vehicle Type, the Active Player must follow these steps:
        </p>
        <ul>
          <li>
            When the Active Player selects a Unit composed of a single Model
            with the Vehicle Type, the Active Player must declare if they will
            make multiple Shooting Attacks with all Attacks made as Snap Shots,
            or a single Shooting Attack without penalty. No targets are declared
            in this Step.
          </li>
          <li>
            If the Active Player chooses to make multiple Shooting Attacks as
            Snap Shots, then they must now declare the Target Unit for the first
            Shooting Attack, along with which Weapons will be used in that
            Shooting Attack. If the Active Player chooses not to make multiple
            Shooting Attacks then the Shooting Attack process continues
            normally.
          </li>
          <li>
            If the Active Player has chosen to make multiple Shooting Attacks,
            once the first Shooting Attack is completely resolved, with all
            attacks made as Snap Shots, then one or more additional Shooting
            Attacks may be made. Each additional Shooting Attack may only use
            Weapons which have not yet been used to make attacks in any Shooting
            Attack in that Shooting Phase and must target a different Unit than
            all previous Shooting Attacks made for the attacking Model in that
            Shooting Phase. All attacks made in any additional Shooting Attack
            must be made as Snap Shots.
          </li>
        </ul>
        <p>
          Additional Shooting Attacks may continue to be made until either all
          Weapons available to the attacking Model have been used to attack or
          the Active Player chooses to stop making Shooting Attacks.
        </p>
        <h4 id="DWaBW">Defensive Weapons and battle weapons</h4>
        <p>
          All Weapons that a Model with the Vehicle Type has will be either
          Defensive Weapons or Battle Weapons. Throughout these Rules, when a
          rule refers to 'all Weapons' or simply 'Weapons' without any further
          qualifiers, then this means that both Battle and Defensive Weapons may
          be used. When a Shooting Attack is limited to only Defensive Weapons
          or non-Defensive Weapons (Battle Weapons), it will specifically state
          this.
        </p>
        <p>
          <span class="bold">Defensive Weapons</span> - All Weapons on a Model
          with the Vehicle Type that have a Strength Characteristic of 6 or less
          are Defensive Weapons. Other Weapons may also be specifically
          designated as Defensive Weapons on their profile. When a Player
          chooses to have a Model with the Vehicle Type attack multiple
          different Units in the same Shooting Phase, Defensive Weapons do not
          have to make their attacks as Snap Shots.
        </p>
        <p>
          <span class="bold">Battle Weapons</span> - All Weapons on a Model with
          the Vehicle Type that have a Strength greater than 6 and that are not
          Pintle Mounted or otherwise designated specifically as Defensive
          Weapons are Battle Weapons.
        </p>
        <h4 id="VFAaWM">vehicle firing arcs and weapon mounts</h4>
        <p>
          Unlike most Models, which can make Shooting Attacks at any target to
          which they can draw Line of Sight, Models with the Vehicle Type are
          more restricted in how they can target an enemy. Each of the Weapons
          that a Model with the Vehicle Type has may only be used to attack
          targets in one or more Firing Arcs - specific zones from which targets
          may be selected if they are within Line of Sight. The various Arcs of
          Fire in Horus Heresy - Age of Darkness are detailed as follows:
        </p>
        <h4 id="FirA">Firing Arcs</h4>

        <div>
          <p>
            <span class="bold">Hull(Arc)</span> - The Hull Firing Arc is divided
            into four sections: Front, Rear, Left and Right - with most Weapons
            capable of firing into only one of those divisions, as shown on a
            given Model's profile. To determine the Hull Arcs of any Model with
            the Vehicle Type, draw two imaginary lines through the corners of
            the Model as shown in the diagram below.
          </p>
          <img src="../pct/hullarc.png" alt="" class="img" />
        </div>
        <div>
          <p>
            <span class="bold">Centreline</span> - The Centreline Arc is
            determined by drawing two imaginary lines along the sides of the
            Model's hull extending out past the front of the Model as shown in
            the diagram below. The space between the two lines is the Centreline
            Arc. Unless otherwise noted the Centreline Arc always extends from
            the Model's front, but if specified in the Model's profile, it can
            instead/also extend from the Model's rear.
          </p>

          <img src="../pct/centerlinearc.png" alt="" class="img" />
        </div>
        <div>
          <p>
            <span class="bold">Sponson</span> - The Sponson Firing Arc is
            determined by drawing an imaginary line along the centre of the
            Model, from front to rear, as shown in the diagram below. The left
            hand side is the Left Sponson Arc and the right hand side is the
            Right Sponson Arc, with Sponson Weapons only capable of attacking
            targets in the Firing Arc that they are physically in. Unless
            otherwise specified, any Model with Sponson Weapons will have one
            left sponson and one right sponson.
          </p>
          <img src="../pct/sponsonarc.png" alt="" class="img" />
        </div>
        <h4 id="WeapM">Weapon Mounts</h4>
        <p>
          A Model's profile will note what type of mount a Weapon has, with each
          type of mount allowing a Vehicle to fire those Weapons into one or
          more Firing Arcs as shown:
        </p>
        <p>
          <span class="bold">Hull (Arc) Mounted</span> - Hull (Arc) Mounted
          Weapons will always specify a single Firing Arc and may only attack
          targets in that Firing Arc. The different Hull arcs are: Front, Rear,
          Left and Right. Some Units may specify Side as an arc - this means
          both Left and Right arcs.
        </p>
        <p class="italic">
          For example, a Land Raider Carrier has a Hull (Front) Mounted twin
          heavy bolter - this Weapon may only attack targets in the Front Firing
          Arc.
        </p>
        <p>
          <span class="bold">Turret Mounted</span> - Turret Mounted Weapons may
          attack targets in any Hull arc (Front, Left, Right or Rear) without
          restriction.
        </p>
        <p>
          <span class="bold">Centreline Mounted</span> - Centreline Mounted
          Weapons may only attack targets in the Centreline Firing Arc.
        </p>
        <p>
          <span class="bold">Sponson Mounted</span> - Sponson Mounted Weapons
          are usually in pairs, one on each side of a Vehicle (the Model's
          profile will note if this is not the case) and may attack targets in
          the appropriate Sponson Firing Arc (either left or right). Sponson
          Mounted Weapons are always counted as Defensive Weapons regardless of
          the Weapon's Characteristics.
        </p>
        <p>
          <span class="bold">Pintle Mounted</span> - Pintle Mounted Weapons may
          attack targets in any Firing Arc without restriction, and are always
          counted as Defensive Weapons and as having the Assault Trait
          regardless of the Weapon's Characteristics.
        </p>
        <p>
          <span class="bold">Co-axial (X) Mounted</span> - Co-axial Mounted
          Weapons will be linked to another Weapon, specified by the value of X
          attached to the Mount Rule. A Co-axial Mounted Weapon may only attack
          targets in the same Firing Arcs as the Weapon to which it is linked.
          Furthermore, a Co-axial Mounted Weapon must always be used to attack
          the same target as the Weapon to which it is linked - if it cannot
          then it may not be used to attack.
        </p>
        <h4 id="VaD">Vehicles and damages</h4>
        <p>
          Shooting Attacks may target Models with the Vehicle Type, determining
          Line of Sight, Range and making Hit Tests as normal. However, when
          determining if a Model can draw Line of Sight to or determining the
          Range to a Model with the Vehicle Type, Line of Sight and Range must
          be determined from the Base edge of the attacking Model to the hull of
          the Model with the Vehicle Type - not including wings, gun barrels or
          other projections from the main bulk of the Model.
        </p>
        <div><img src="../pct/vehiclelos.png" alt="" class="img" /></div>
        <p>
          Once Line of Sight and Range have been established, the Player making
          the attack must determine which Armour Facing (Front, Side or Rear)
          will be the target of the attack. To determine which Facing an attack
          targets, draw two imaginary lines through the corners of the Vehicle
          to show its Facings and then draw a direct line from the attacking
          Model to the Target Model, with the point where the line touches the
          Target Model determining the Facing targeted by the attack.
        </p>
        <div><img src="../pct/facings.png" alt="" class="img" /></div>
        <p class="italic">
          In the example pictured above, one Salamander can only draw Line of
          Sight to the right Side Facing of the Iron Warriors Spartan and must
          attack that facing. However, the other Salamander can draw Line of
          Sight to both the right Side and Rear Facings. The Player Controlling
          the Spartan chooses which Facing will be the target of the attack and
          in this case chooses the Side.
        </p>
        <p>
          If an attack could target two or more different Facings of a Target
          Model (if the line drawn strikes the Target Model at an intersection
          between two facings, for example), the Controlling Player of the Model
          with the Vehicle Type must choose which Facing will be the target of
          any attacks. An attack may only ever target a single Facing. In most
          cases all Hits inflicted by an Attack will target the same Facing, but
          where an attack results in Hits on more than one Facing these must be
          resolved separately against the Armour Value of that Facing (see
          <a href="" @click.prevent="scrollToSection('SplitFG')"
            >Splitting Fire Groups</a
          >
          for more details).
        </p>
        <p>
          In any situation where a Model is hit by a Weapon or attack which
          fires indirectly or does not otherwise require Line of Sight to its
          target, Hits are always resolved against the Side Armour Value. The
          direction a turret is facing on a Model that is the target of an
          attack has no bearing on what arc of that Model is targeted.
        </p>
        <h4 id="TaBW">templates and blast weapons</h4>
        <p>
          If a Model with the Vehicle Type is even partially under a Template or
          Blast Marker, it is hit on the Facing that the attacking Model draws a
          Line of Sight to. If the Line of Sight could be drawn to multiple
          Facings, then the Hit is resolved against the Side Armour.
        </p>
        <div class="border">
          <h4 id="APT">armour penetration test</h4>
          <p>
            When a Model with the Vehicle Type suffers a Hit, no Wound Test is
            made, instead that Hit must then be resolved with an Armour
            Penetration Test, with one such Test made for each Hit inflicted on
            the Model with the Vehicle Type.
          </p>
          <p>
            To make an Armour Penetration Test, roll a single Dice and add the
            Strength of the Hit to the result of that Dice roll. Compare that
            total to the Armour Value of the Facing targeted by the Hit:
          </p>
          <ul>
            <li>
              If the total is less than the Armour Value of the targeted Facing,
              the Hit has no effect and is discarded.
            </li>
            <li>
              If the total is equal to the Armour Value of the targeted Facing,
              the Hit inflicts a Glancing Hit.
            </li>
            <li>
              If the total is greater than the Armour Value of the targeted
              Facing, the Hit inflicts a Penetrating Hit.
            </li>
          </ul>
        </div>
        <h4 id="RD">resolving damage</h4>
        <p>
          Once all Armour Penetration Tests have been resolved, the following
          effects are applied to the Model based on the results:
        </p>
        <p>
          <span class="bold">Glancing Hits</span> - A Glancing Hit inflicts no
          Damage, however for each Glancing Hit, the attacking Player must roll
          once on the Vehicle Damage Table (see below) in Step 11 of the
          Shooting Attack process or Step 10 of the Initiative Step process
          (Players may find it useful to place a marker to remind them of this).
        </p>
        <p>
          <span class="bold">Penetrating Hits</span> - For each Penetrating Hit
          result, the target Unit suffers 1 Penetrating Hit. If available, any
          Saving Throws or Damage Mitigation Rolls may be made to discard the
          Penetrating Hit in the appropriate Step of the attack process. If not
          discarded due to a Saving Throw or Damage Mitigation Roll the Model
          will lose a number of Hull Points equal to the Damage Characteristic
          of the Penetrating Hit, which is decided by the Characteristics of the
          Weapon used to inflict the Penetrating Hit in the same manner as
          wounds.
        </p>
        <p class="bold">Vehicle Damage Table</p>
        <div class="vd-table">
          <table class="unit-general__table">
            <thead>
              <tr>
                <th>Dice</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1-2</td>
                <td>Impaled Sensors: Stunned Status</td>
              </tr>
              <tr>
                <td>3-4</td>
                <td>Broken Motors: Pinned Status</td>
              </tr>
              <tr>
                <td>5-6</td>
                <td>Weapons Damaged: Supressed Status</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 id="RVMaC">Removing vehicle models as casualties</h4>
        <p>
          When a Model with the Vehicle Type is reduced to 0 Hull Points, that
          Model is Removed as a Casualty in the same manner as other Models.
          However, Players may choose to use the optional Wrecked Vehicles
          Special Rule to represent the broken hulks of destroyed vehicles.
        </p>
        <div class="border">
          <h4 id="WV">wrecked vehicles</h4>
          <p>
            A Vehicle that is reduced to 0 Hull Points is Removed as a Casualty,
            which means the Model itself is removed from the Battlefield. Some
            Players may wish to leave the Model on the Battlefield to represent
            a wreck. If both Players agree to use the Wrecked Vehicles Special
            Rule then the following Rules apply:
          </p>
          <p>
            <span class="bold">Wrecked Vehicles:</span> When a Model with the
            Vehicle Type is Removed as a Casualty then the Model is replaced
            with a Wreck. If the Model also has the Explodes (X) Special Rule
            and that Special Rule is triggered, it is not replaced with a Wreck.
          </p>
          <p>
            <span class="bold">Wreck</span> - A Wreck is a type of Area Terrain
            that counts as both Difficult and Dangerous Terrain and grants a 6+
            Cover Save. For Rules that target it, a Wreck is counted as Light
            Area Terrain.
          </p>
        </div>
        <h4 id="VitAP">vehicles in the assault phase</h4>
        <p class="bold">
          Vehicles cannot Charge or make attacks in Combat, but can be Charged
          and attacked by enemy Units.
        </p>
        <p>
          Models with the Vehicle Type must abide by a number of restrictions in
          the Assault Phase, which are listed below:
        </p>
        <ul>
          <li>
            A Model with the Vehicle Type may not have a Charge declared for it.
          </li>
          <li>
            A Model with the Vehicle Type may not make attacks during the Fight
            Sub-Phase.
          </li>
          <li>
            A Model with the Vehicle Type cannot lock enemy Units in Combat and
            cannot be Locked in Combat by an enemy Unit.
          </li>
        </ul>
        <p>
          Those exceptions to this Rule will specifically note this in the Rules
          for that Sub-Type of Vehicle.
        </p>
        <h4 id="CtV">charging the vehicle</h4>
        <p>
          A Unit may declare a Charge targeting a Unit that includes a Model
          with the Vehicle Type during the Charge Sub-Phase. The Charge Move is
          conducted in the same way as for Charging other enemy Units. Models
          with the Vehicle Type may make Reactions to a Charge declared for an
          enemy Unit as normal and may make attacks in Step 4 (Make Volley
          Attacks) of the Charge Procedure if they have any appropriate Weapons.
        </p>
        <h4 id="AViC">Attacking Vehicles in Combat</h4>
        <p>
          When a Model resolves a Hit Test in Combat targeting a Model with the
          Vehicle Type, the target Model is treated as having a Weapon Skill
          Characteristic of 1. Any Hits scored against a Model with the Vehicle
          Type in a Combat are resolved against the Model's Rear Armour
          regardless of the positions of Models in Combat. These Hits do not
          result in Wound Tests, but must be resolved using
          <a href="" @click.prevent="scrollToSection('APT')"
            >Armour Penetration Tests</a
          >.
        </p>
        <h4 id="CR">Combat Resolution</h4>
        <p>
          A Combat that includes one or more Models with the Vehicle Type is
          resolved as normal - though unless other Models are present, it is
          likely that a Model with the Vehicle Type will lose a Combat as it
          does not attack.
        </p>
        <p>
          The Controlling Player of a Unit that includes Models with the Vehicle
          Type may only choose to
          <a href="" @click.prevent="scrollToSection('AftermathO')">Hold</a>
          with that Unit at the end of any Combat (though this does not limit
          other friendly Units in the same Combat). In the following Movement
          Phase a Model with the Vehicle Type may Move as normal and is not
          considered to be Locked in Combat.
        </p>
        <p>
          Units that still have Models in Base Contact with a Model with the
          Vehicle Type during their Controlling Player's Assault Phase may
          attack it again, just as if they were Locked in Combat, but do not
          count as having Charged.
        </p>
        <h4 id="VehicleST">vehicle sub-types</h4>
        <ul>
          <li class="bold">Rapid</li>
          <li class="bold">Stable</li>
          <li class="bold">Super-heavy</li>
          <li class="bold">Flyer</li>
          <li class="bold">Transport</li>
        </ul>
        <p class="italic">
          You Can Look at These Sub-types in More Detail
          <router-link to="/unit-types" class="bold">Here</router-link>
        </p>

        <h3 id="flyers">Flyers</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('TFSt')"
              >The Flyer Sub-type</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RFaC')"
              >Removing Flyers as Casualties</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FaC')"
              >Flyers and Characteristics</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FCA')"
              >Flyer Combat Assignments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('EoFiAR')"
              >Embarking on Flyers in Areal Reserves</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ARCAP')"
              >Advanced Reaction: Combat Air Patrol</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CADM')"
              >Combat Assigment: Drop Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CAEM')"
              >Combat Assigment: Extraction Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CASM')"
              >Combat Assigment: Strike Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CASR')"
              >Combat Assigment: Strafing Run</a
            >
          </li>
        </ul>
        <p class="bold">
          The Rules in this section explain how to use aircraft in Age of
          Darkness Battles.
        </p>
        <p>
          Models with the Flyer Sub-Type do not operate in the same manner as
          other Models, thus warranting their own Rules specific to Models with
          the Flyer Sub-Type. Unlike most Models with the Vehicle Type, the
          Rules for Models with the Flyer Sub-Type are substantially different
          to those for other Models and operate outside the bounds of the Core
          Rules. These Rules are intended to represent high-speed aerial units
          such as scramjet powered fighters, orbital drop shuttles and bombers,
          which would not linger in combat airspace over the area represented by
          the Battlefield. This section details all the Rules specific to the
          Flyer Sub-Type and their use in a Horus Heresy Battle.
        </p>
        <h4 id="TFSt">the flyer sub-type</h4>
        <p>
          The following Rules are exceptions to the Core Rules that always apply
          to a Model with the Flyer Sub-Type at all times during a Horus Heresy
          Battle:
        </p>
        <ul>
          <li>
            Whilst on the Battlefield, a Model with the Flyer Sub-Type does not
            block Line of Sight or the Movement of any Model.
          </li>
          <li>
            When moving a Model with the Flyer Sub-Type, ignore all Terrain
            effects and Rules. However, a Model with the Flyer Sub-Type may
            still not end a move in or on Impassable Terrain, a Terrain Feature
            or a Building.
          </li>
          <li>
            No Model of any kind may join a Unit that includes a Model with the
            Flyer Sub-Type.
          </li>
          <li>
            A Model with the Flyer Sub-Type can never gain any Tactical Statuses
            and ignores any Rules that would force it to do so.
          </li>
          <li>
            A Model with the Flyer Sub-Type may never be Locked in Combat or
            attacked in any way during the Assault Phase and may not be targeted
            by attacks made using a Melee Weapon.
          </li>
          <li>
            A Model with the Flyer Sub-Type may never make a Reaction of any
            kind, unless that Reaction specifically states it may be made by
            Models with the Flyer Sub-Type - but can be targeted by Reactions.
          </li>
          <li>
            When a Player is instructed to roll on the Vehicle Damage Table for
            a Model with this Sub-Type, no roll is made. Instead, the Model
            loses a single Hull Point.
          </li>
        </ul>
        <h4 id="RFaC">Removing Flyers as Casualties</h4>
        <p>
          When a Model with the Flyer Sub-Type has its Hull Points reduced to 0,
          or is otherwise Removed as a Casualty, it is removed from the
          Battlefield with no further effect.
        </p>
        <h4 id="FaC">Flyers and Characteristics</h4>
        <p>
          Flyers use the same Characteristics used by other Models with the
          Vehicle Type. However, all Models with the Flyer Sub-Type use only a
          single value for their Armour Characteristic - this value is used to
          resolve all Armour Penetration Hits inflicted on them regardless of
          which Facing is attacked.
        </p>
        <h4 id="FCA">Flyer Combat Assignments</h4>
        <p>
          Unlike other Models, which are placed on the Battlefield and move
          across it, Models with the Flyer Sub-Type are capable of speeds which
          make it difficult for them to stay within the bounds of the
          Battlefield for long. As such they are not deployed like other Models
          and do not move or make attacks in the same manner as other Models.
          Instead, Models with the Flyer Sub-Type must have a Combat Assignment
          selected for them that will bring them onto the Battlefield to
          accomplish specific goals before returning to Aerial Reserves.
        </p>
        <p>
          As such, all Models with the Flyer Sub-Type must always begin any
          Battle in a special type of Reserves referred to as Aerial Reserves.
          Aerial Reserves operate in exactly the same fashion as Reserves, with
          the exception that only Rules that specifically reference Aerial
          Reserves can allow Models to enter or leave Aerial Reserves or
          otherwise modify or affect Models in Aerial Reserves or any Reserv
          Rolls made for them.
        </p>
        <h4 id="">Extended Combat Airspace</h4>
        <p>
          As the battle progresses pilots on both sides find themselves
          increasingly pushed from safe airspace and into contested zones in
          order to press the attack on the foe. Such pilots can only hope that
          by that point their allies on the ground have disabled or destroyed
          enemy anti-aircraft installations.
        </p>
        <p>
          From the Start of Battle Turn Two and for the remainder of the Battle,
          when any Combat Assignment for a Model with the Flyer Sub-Type states
          that a Model may be placed on the edge of the Battlefield within its
          Controlling Player’s Deployment Zone, it is ignored. Instead, the
          Controlling Player of a Model with the Flyer Sub-Type that is assigned
          a Drop Mission, Extraction Mission, Strike Mission or Strafing Run may
          place the Model at any point on the Battlefield Edge – even within
          another Player’s Deployment Zone. After the Model is placed on the
          Battlefield Edge the Combat Assignment continues as normal.
        </p>
        <div class="border">
          <h4 id="EoFiAR">embarking on flyers in areal reserves</h4>
          <p>
            In the Start Phase of any Turn, a Unit that is in Reserves may be
            Embarked upon a Model in Aerial Reserves that has Model with the
            Transport Sub-Type and must not exceed the Transport Capacity of
            that Model. The Embarking the Flyer Sub-Type. A Unit Embarked in
            this manner must be comprised of Models capable of Embarking on the
            Unit may be joined by any number of Models with the Specialist or
            Command Sub-Types or the Paragon Type - as long as the total number
            of Models Embarked does not exceed the Transport Capacity of the
            Model with the Transport Sub-Type they are Embarking upon.
          </p>
          <p>
            Once Embarked, the Unit must remain Embarked until the Model with
            the Transport Sub-Type undertakes a Combat Assignment allowing the
            Unit to Disembark on the Battlefield. If the Model with the
            Transport Sub-Type later returns to Aerial Reserves a new Unit may
            be Embarked upon that Model from Reserves. If a Model with the Flyer
            and Transport Sub-Types enters Aerial Reserves from the Battlefield
            with a Unit Embarked upon it then that Unit must remain Embarked and
            cannot Disembark, nor can Models with the Specialist or Command
            Sub-Types or the Paragon Type that have joined the Embarked Unit
            leave it.
          </p>
        </div>
        <p>
          Aerial Reserves are rolled for during the Movement Phase as part of
          the Reserves Sub-Phase, starting on the First Turn of the Battle. For
          a Model with the Flyer Sub-Type that has not previously been brought
          into play, this Reserves roll has a Target Number of 3+. This Target
          Number increases by 1 (to a maximum of 6+) each time that Model
          returns to Aerial Reserves after having been deployed onto the
          Battlefield.
        </p>
        <p>
          The Controlling Player of a Model that is returned to Aerial Reserves
          may choose to instead remove that Model from the Battle, as long as
          that Model has no other Models Embarked upon it. A Model removed from
          the Battle in this manner is not considered destroyed and no opposing
          Player may score Victory Points for its removal, but the removed Model
          may take no further part in the Battle and may not be returned to the
          Battlefield for any reason.
        </p>
        <p>
          Once a Reserves Test has been passed for a Model, the Controlling
          Player MUST assign it a Combat Assignment before ending the Reserves
          Sub-Phase and declare that Combat Assignment to the Opposing Player.
          The Combat Assignments that may be selected for a Model with the Flyer
          Sub-Type are listed here, though other publications may present
          additional Missions:
        </p>
        <p>
          <span class="bold">Drop Mission</span> - The goal of a Drop Mission is
          to land the Model with the Flyer Sub-Type and allow any Embarked Units
          to Disembark, before the Model with the Flyer Sub-Type returns to
          Aerial Reserves.
        </p>
        <p>
          <span class="bold">Extraction Mission</span> - The goal of an
          Extraction Mission is to remove a friendly Unit from a dangerous
          position, allowing them to recover from Tactical Statuses and be
          returned to the Battlefield in a subsequent Turn on a Drop Mission.
        </p>
        <p>
          <span class="bold">Strike Mission</span> - The goal of a Strike
          Mission is to make Shooting Attacks while presenting a minimal target
          to enemy Units, and then return to Aerial Reserves.
        </p>
        <p>
          <span class="bold">Strafing Run</span> - The goal of a Strafing Run is
          to maximise Shooting Attacks at the cost of presenting an easier
          target to enemy attacks, before returning to Aerial Reserves.
        </p>
        <h4 id="ARCAP">advanced reaction: combat air patrol</h4>
        <p class="italic">
          This Reaction Include in Full List of Reaction in Header of this Site
        </p>
        <div class="wrapper">
          <p>
            This Advanced Reaction allows a Unit composed entirely of Models
            with the Interceptor Trait that is in Aerial Reserves to attack
            enemy Flyers moving into play from Reserves.
          </p>
          <div class="unit-ability-desc">
            <div>
              <span class="bold">Trigger:</span> The Reactive Player may declare
              a Combat Air Patrol Advanced Reaction whenever the Active Player
              brings a Unit into play from Aerial Reserves.
            </div>
            <div>
              <span class="bold">Cost:</span> The Reactive Player must spend 1
              point of their Reaction Allotment to declare a Combat Air Patrol
              Advanced Reaction - this cost paid as soon as the declaration is
              made.
            </div>
            <div>
              <span class="bold">Target:</span> For a Combat Air Patrol Advanced
              Reaction, the Target Model is always the enemy Model that was
              brought into play from Aerial Reserves and triggered this
              Reaction.
            </div>
            <div>
              <span class="bold">Process:</span>
              <ul class="unit-ability-desc_ul">
                <li>
                  Once declared, the Reactive Player must select one Unit under
                  their control that is in Aerial Reserves and is composed
                  entirely of Models with the Interceptor Trait. This Unit is
                  hereafter referred to as the 'Reacting Unit. A Unit including
                  Models with the Flyer Sub-Type may be selected as the Reacting
                  Unit.
                </li>
                <li>
                  Once the Target Model has completed the Move associated with
                  its Combat Assignment, but before any Units have Disembarked
                  from the Target Model, the Reactive Player may place the
                  Reacting Unit anywhere on the Battlefield Edge and then move
                  it up a number of inches equal to its Movement Characteristic
                  straight forwards without turning.
                </li>
                <li>
                  Once this move is complete, the Reactive Player may make a
                  single Shooting Attack with the Reacting Unit that must target
                  the Target Unit, counting all Ranged Weapons Models in the
                  Reacting Unit have as Defensive Weapons.
                </li>
                <li>
                  Once this Shooting Attack has been completely resolved, the
                  Reacting Unit is removed from play and returned to Aerial
                  Reserves.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <h4 id="CADM">Combat Assigment: Drop Mission</h4>
        <p>
          Once assigned a Drop Mission in the Reserves Sub-Phase, a Model must
          be immediately placed onto the Battlefield by its Controlling Player.
          The Model may be placed anywhere along the edge of the Battlefield
          Edge that is within the Controlling Player's Deployment Zone. This
          deployment can trigger the Intercept Advanced Reaction, but any
          attacks made at the Model are made as Snap Shots. If the Model is
          Removed from Play by a Shooting Attack made as part of an Intercept
          Advanced Reaction, in addition to making an Emergency Disembarkation,
          the Controlling Player of any Embarked Units must roll one Dice for
          each Model in each Embarked Unit. For each result of 1, that Unit
          suffers a wound with an AP Characteristic of 2 and a Damage
          Characteristic of 2. No Cover Save or Damage Mitigation Rolls may be
          made to discard this wound, but Invulnerable Saves may still be made.
        </p>
        <p>
          In the Movement Phase, a Model with a Drop Mission can be selected and
          must then move up to a number of inches equal to its Movement
          Characteristic straight forwards without turning. At this point a
          Combat Air Patrol can be declared by the Reactive Player. Once any
          Combat Air Patrol Reactions have been resolved, any Units Embarked on
          a Model that has been assigned a Drop Mission may Disembark as normal.
          Note that the Model assigned the Drop Mission uses the edge of its
          Base as an Access Point.
        </p>
        <p>
          In the Shooting Phase, a Model that has been assigned a Drop Mission
          may make Shooting Attacks, but may only attack with Defensive Weapons.
          At the end of the Controlling Player's Shooting Phase, the Model
          assigned a Drop Mission is removed from play and returned to Aerial
          Reserves.
        </p>
        <h4 id="CAEM">Combat Assigment: Extraction Mission</h4>
        <p>
          A Model assigned an Extraction Mission must have the Transport
          Sub-Type and may not have any Units Embarked upon it when assigned an
          Extraction Mission. Once assigned an Extraction Mission in the
          Reserves Sub-Phase, a Model must be immediately placed onto the
          Battlefield by its Controlling Player. The Model may be placed
          anywhere along the Battlefield Edge that is within the Controlling
          Player's Deployment Zone. This deployment can trigger the Intercept
          Advanced Reaction, but any attacks made at the Model are made as Snap
          Shots.
        </p>
        <p>
          In the Movement Phase, a Model with an Extraction Mission can be
          selected and must then move up to a number of inches equal to its
          Movement Characteristic straight forwards without turning. At this
          point a Combat Air Patrol can be declared by the Reactive Player. Once
          any Combat Air Patrol Reactions have been resolved, an eligible Unit
          that has all of its Models within 2" may Embark upon the Model
          performing the Extraction Mission, even if that Unit has a Tactical
          Status that would prevent it from being able to Embark. Note that the
          Model assigned the Extraction Mission uses the edge of its flying base
          as an Access Point.
        </p>
        <p>
          In the Shooting Phase, a Model that has been assigned an Extraction
          Mission may make Shooting Attacks, but may only attack with Defensive
          Weapons. At the end of the Controlling Player's Shooting Phase, the
          Model assigned an Extraction Mission is removed from play and returned
          to Aerial Reserves. Any Units Embarked upon the Model assigned an
          Extraction Mission remain Embarked while this Model is in Aerial
          Reserves, but any Tactical Statuses the Models in the Embarked Unit
          have are removed.
        </p>
        <h4 id="CASM">Combat Assigment: Strike Mission</h4>
        <p>
          Once assigned a Strike Mission in the Reserves Sub-Phase, a Model must
          be immediately placed onto the Battlefield by its Controlling Player.
          The Model may be placed anywhere along the Battlefield Edge that is
          within the Controlling Player's Deployment Zone. This deployment can
          trigger the Intercept Advanced Reaction, but attacks made at the Model
          are made as Snap Shots.
        </p>
        <p>
          In the Movement Phase, a Model with a Strike Mission can be selected
          and must then move up to a number of inches equal to its Movement
          Characteristic straight forwards without turning. At this point a
          Combat Air Patrol can be declared by the Reactive Player. A Unit
          Embarked on a Model that has been assigned a Strike Mission may not
          Disembark, nor may any Unit Embark upon the Model assigned a Strike
          Mission.
        </p>
        <p>
          In the Shooting Phase, a Model that has been assigned a Strike Mission
          may make Shooting Attacks, but may only attack with Weapons that have
          the Centreline Arc of Fire or the 'Guided Missile' Trait. Attacks made
          with a Weapon that has the Centreline Arc of Fire must be made as Snap
          Shots unless another Rule or Special Rule dictates otherwise. At the
          end of the Controlling Player's Shooting Phase, the Model assigned a
          Strike Mission is removed from play and returned to Aerial Reserves.
        </p>
        <h4 id="CASR">Combat Assigment: Strafing Run</h4>
        <p>
          Once assigned a Strafing Run in the Reserves Sub-Phase, a Model must
          be immediately placed onto the Battlefield by its Controlling Player.
          The Model may be placed anywhere along the edge of the Battlefield
          Edge that is within the Controlling Player's Deployment Zone. This
          deployment can trigger the Intercept Advanced Reaction, but any
          attacks are not resolved as Snap Shots unless another Rule or Special
          Rule dictates otherwise.
        </p>
        <p>
          In the Movement Phase, a Model assigned a Strafing Run can be selected
          and must then move up to a number of inches equal to no more than half
          its Movement Characteristic in any direction. At this point a Combat
          Air Patrol can be declared by the Reactive Player. A Unit Embarked on
          a Model that has been assigned a Strafing Run may not Disembark, nor
          may any Unit Embark on a Model that has been assigned a Strafing Run.
        </p>
        <p>
          In the Shooting Phase, a Model that has been assigned a Strafing Run
          may make Shooting Attacks with any Weapons it has. At the end of the
          Controlling Player's Shooting Phase, the Model assigned a Strafing Run
          is removed from play and returned to Aerial Reserves.
        </p>
        <h3 id="transports">Transports</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('EaD')"
              >Embarking and Disembarking</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Embarking')"
              >Embarking</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AccessP')"
              >Access Points</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Disembarking')"
              >Disembarking</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PDM')"
              >Placing Disembarking Models</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DaSoC')"
              >Disembarkation and Shooting or Charging</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('EDaR')"
              >Embarking, Disembarking and Reactions</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ED')"
              >Emergency Disembarkation</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TSCaP')"
              >Transports, Specialists, Command and Paragon</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RTaC')"
              >Removing Transports as Casualties</a
            >
          </li>
        </ul>
        <p class="bold">
          Some Models are capable of carrying other Models across the
          Battlefield - these Rules explain how this works.
        </p>
        <p>
          Models with the Transport Sub-Type can 'move' other Models,
          representing those Models being carried by the Model with the
          Transport Sub-Type. This requires the use of a number of Rules to
          explain how Models 'get into' other Models, what while 'on board'
          another Model and how they leave the Model carrying them, all of which
          are explained in this section.
        </p>
        <p>
          All Models with the Transport Sub-Type are bound by a set of Rules
          regarding how they operate:
        </p>
        <ul>
          <li>
            All Models with the Transport Sub-Type have a Transport Capacity
            Characteristic, which determines the maximum number of Models that
            can Embark upon it - one Model per point of Transport Capacity,
            unless another Rule states otherwise.
          </li>
          <li>
            Only Models with the Infantry or Paragon Type may Embark or
            Disembark upon a Model with the Transport Sub-Type.
          </li>
          <li>
            A Unit may only Embark on a Model with the Transport Sub-Type if all
            Models in the Embarking Unit have the same Faction Trait as the
            Model with the Transport Sub-Type.
          </li>
          <li>
            A Model with the Transport Sub-Type may only have a single Unit
            Embarked upon it at any one time (Models with the Specialist or
            Command Sub-Types or Paragon Type that have joined a Unit are
            considered part of that Unit and may Embark alongside it).
          </li>
          <li>
            A Unit may not be partially Embarked on a Model with the Transport
            Sub-Type - either all or no Models in a Unit may be Embarked on a
            given Model.
          </li>
          <li>
            If a Unit with the Transport Sub-Type has a Unit Embarked upon it,
            the Embarked Unit is not considered part of the same Unit. The two
            remain separate Units for all purposes.
          </li>
        </ul>
        <h4 id="EaD">embarking and disembarking</h4>
        <p>
          The main function of the Transport Sub-Type is to allow other Units to
          Embark or Disembark from a Model that has that Sub-Type. Embarking is
          the Rules term for when a Unit is removed from play to represent it
          boarding or otherwise getting onto another Model that then carries it,
          while Disembarking is the Rules term for when that Unit re-enters play
          by getting off of the Model that was carrying it.
        </p>
        <p>
          Units can usually only Embark or Disembark during the Movement Phase,
          and no Unit may both Embark and Disembark in the same Movement Phase.
          However, if a Model with the Transport Sub-Type is Removed as a
          Casualty while a Unit is Embarked upon it, then the Embarked Unit must
          attempt an Emergency Disembarkation even if it had Embarked in the
          same Phase.
        </p>
        <p>
          When Embarked upon a Model with the Transport Sub-Type, there are a
          number of Rules that apply to the Embarked Unit:
        </p>
        <ul>
          <li>
            A Unit Embarked on a Model with the Transport Sub-Type may not be
            targeted by any attack, Special Rule or other effect. They are
            treated as if they had been removed from play temporarily.
          </li>
          <li>
            No Model in a Unit that is Embarked upon another Model may make an
            attack, Reaction or otherwise take an action.
          </li>
          <li>
            All effects generated by a Model, such as the effects of the Fear
            (X) Special Rule, cease to have any further effe when that Model is
            Embarked upon another Model.
          </li>
          <li>
            If a Unit that has a Status Embarks upon a Model with the Transport
            Sub-Type then the Model with the Transport Sub-Type is not affected
            by that Status - but the Embarked Unit retains the Status and may
            not have any Checks made to remove it until the Unit Disembarks.
          </li>
          <li>
            Any attacks, Statuses or other effects that apply to a Model with
            the Transport Sub-Type have no effect on a Unit Embarked upon it.
          </li>
        </ul>
        <h4 id="Embarking">embarking</h4>
        <p class="bold"></p>
        <p>
          When selected during the Move Sub-Phase of the Movement Phase, the
          Controlling Player may have a Unit Embark on a friendly Model that has
          the Transport Sub-Type. The Model upon which the Unit is attempting to
          Embark must have a Transport Capacity high enough for all Models in
          the Unit to Embark - if the Transport Capacity is not high enough then
          any attempt to Embark is automatically unsuccessful.
        </p>
        <p>
          To Embark upon a Model with the Transport Sub-Type, a Unit must end or
          begin the Move Sub-Phase with all Models in the Unit within 2" of any
          point on a Facing on that Model that has an Access Point.
        </p>
        <h4 id="AccessP">access points</h4>
        <p>
          Each Model with the Transport Sub-Type will have a number of Access
          Points defined in its entry. These are the doors, ramps and hatches
          that passengers use to get in and out of the Vehicle. All Access
          Points are defined as being within a specific Facing, corresponding to
          one of the four Armour Facings that most Models with the Vehicle Type
          have - for example, a Rhino has one Rear Access Point, and Access
          Points on both Side Facings. An Access Point must be physically
          represented on the noted Armour Facing, and when Models are Embarking
          or Disembarking using that Access Point they count all points on that
          Armour Facing as an Access Point. Where a Model has two Side Access
          Points, this indicates one Access Point on each Side Facing. If a
          Model has an Access Point on only one Side Facing, then this will be
          noted as Side (Left) Access Point or Side (Right) Access Point to
          indicate which Facing the Access Point is present on.
        </p>
        <p>
          Models that do not have the Vehicle Type but that do have the
          Transport Sub-Type and a Base, count the entirety of the edge of their
          Base as an Access Point, regardless of the facing of any Access Points
          they have. Likewise, Models with the Flyer Sub-Type that are mounted
          on Flying Bases also count the entirety of the edge of their Base as
          an Access Point.
        </p>
        <p>
          If any Models in the Embarking Unit are more than 2" from a Facing on
          the Transport Model that has an Access Point, then no Models can
          Embark and the Unit remains in play. If all Models in the Embarking
          Unit are within 2" of a Facing on the Model with the Transport
          Sub-Type that has an Access Point, then all Models in the Unit are
          removed from the Battlefield. Players may find it useful to mark or
          otherwise note which Unit has Embarked on which Model with the
          Transport Sub-Type and this information should be declared to all
          Players.
        </p>
        <p>
          The entire process of Embarkation is resolved during the activation of
          the Embarking Unit during the Move Sub-Phase, and as such does not
          interfere with the activation and movement of the Model the Unit
          Embarks on. A Model may have Units Embark on it after it has been
          activated and moved, and also may be activated (if it has not already
          been activated) and then moved during the Move Sub-Phase after another
          Unit has Embarked on it.
        </p>
        <h4 id="Disembarking">disembarking</h4>
        <p class="bold">
          Disembarking covers the Rules for moving Units 'out' of Transports.
        </p>
        <p>
          During the Move Sub-Phase of the Movement Phase, when a Player selects
          a Model with the Transport Sub-Type that they control, the Player may
          choose to Disembark a Unit Embarked upon that Model (as long as that
          Unit did not Embark in the same Movement Phase). A Unit may only
          Disembark before the Model it is Embarked upon has moved or after it
          has finished moving, not part way through a Unit's move. Once a Unit
          has Disembarked from a Model that has moved in that Move Sub-Phase,
          the Model it was Embarked upon may not move any further that same
          Phase. Conversely, a Model that has not yet moved, but from which a
          Unit has Disembarked, may still move as normal.
        </p>
        <h4 id="PDM">placing disembarking models</h4>
        <p>
          When a Unit Disembarks, place the Models one at a time, using the
          following method:
        </p>
        <ul class="numeric">
          <li>
            The Controlling Player of the Disembarking Unit selects one Model
            from that Unit and places it in Base Contact with any point on a
            Facing on the Model upon which they are Embarked that has an Access
            Point. If a Model has no listed Access Points, but has a Base, then
            the edge of its Base is considered an Access Point. When
            Disembarking, a Model's Base cannot be placed within 1" of an enemy
            Model or within Impassable Terrain. If there is no other location
            for the Disembarking Model to be placed then it is instead Removed
            as a Casualty.
          </li>
          <li>
            Once a Disembarking Model has been placed, the Controlling Player
            may make a normal move for that Model. Models and Units that make a
            normal move as part of the Disembarkation process may not be
            selected and moved again in that Movement Phase. If the Controlling
            Player chooses not to make a normal move then the Models in the Unit
            which has Disembarked do not count as being Stationary, are
            considered to have moved and can trigger Reactions that trigger from
            an enemy Unit making a move. Dangerous Terrain Tests should be taken
            as normal and other types of Terrain affect a Model's Movement
            Characteristic as normal.
          </li>
          <li>
            Repeat this process for each Model in the Unit. At the end of the
            Disembarkation, all Models in the Disembarking Unit must be in Unit
            Coherency. If, for any reason, any Models from the Unit that is
            Disembarking are not in Unit Coherency after having Disembarked,
            then those Models are Removed as Casualties.
          </li>
        </ul>
        <h4 id="DaSoC">disembarkation and shooting or Charging</h4>
        <p>
          After Disembarking, Units may be used to make Shooting Attacks in the
          Controlling Player's subsequent Shooting Phase, but count as having
          moved that Turn, and have a Charge declared for them in the
          Controlling Player's subsequent Assault Phase. Note that, unless the
          Model from which a Unit Disembarked has the Assault Vehicle Special
          Rule, all Charges declared for Units that have Disembarked in the same
          Player Turn must be resolved as Disordered Charges.
        </p>
        <h4 id="EDaR">embarking, disembarking and reactions</h4>
        <p>
          A Unit making a Reaction that allows the Unit to be moved may Embark
          upon a friendly Model with the Transport Sub-Type, but must follow all
          of the restrictions noted in the Rules for Embarking. However, as a
          Unit Embarked on another Model is considered to no longer be on the
          Battlefield, an Embarked Unit may not make a Reaction - and thus a
          Reaction may never be used to allow a Unit to Disembark. The only
          exception to this is a Reaction made for another Unit which forces a
          Target Model to have all Units Embarked upon it to make an Emergency
          Disembarkation.
        </p>
        <h4 id="ED">emergency disembarkation</h4>
        <p>
          Some Rules will instruct a Player to have a Unit make an Emergency
          Disembarkation. This is done using the following procedure:
        </p>
        <ul class="numeric">
          <li>
            The Controlling Player of the Unit making an Emergency
            Disembarkation selects one Model from that Unit and places it
            anywhere in Base Contact with the hull or Base of the Model it was
            Embarked upon. When Disembarking, a Model's Base cannot be placed
            within 1" of an enemy Model or within Impassable Terrain. If there
            is no other location for the Disembarking Model to be placed then it
            is instead Removed as a Casualty.
          </li>
          <li>
            Once a Disembarking Model has been placed, it remains in contact
            with the Model with the Transport Sub-Type that it was Embarked upon
            and may not be moved, then the next Model in the Unit making an
            Emergency Disembarkation must be placed. Models placed after the
            first must be placed in Base Contact with the hull or the Base of
            the Model it was Embarked upon if possible.
          </li>
          <li>
            If any Models making an Emergency Disembarkation after the first
            cannot be placed in contact with the hull or Base of the Model on
            which they were Embarked then they may instead by placed in Base
            Contact with another Model from the same Unit that has already been
            placed as part of the Emergency Disembarkation.
          </li>
          <li>
            Repeat this process until all Models from the Unit making an
            Emergency Disembarkation have been placed on the Battlefield -
            unlike a regular Disembarkation they do not need to be in Unit
            Coherency. Any Model making an Emergency Disembarkation that cannot
            be placed on the Battlefield using the Rules presented here must
            instead be Removed as a Casualty.
          </li>
          <li>
            Once all Models from a Unit making an Emergency Disembarkation have
            been placed on the Battlefield then a Cool Check must immediately be
            made for that Unit. If this Check is failed then the Unit that made
            the Emergency Disembarkation gains the Pinned Status.
          </li>
        </ul>
        <h4 id="TSCaP">transports, specialists, command and paragon</h4>
        <p>
          If a Unit that includes Models with the Specialist and/or Command
          Sub-Types or the Paragon Type is Embarked on a Model with the
          Transport Sub-Type, then those Models may not leave that Unit while it
          is Embarked or on the Turn in which the Unit Disembarks or makes an
          Emergency Disembarkation. Nor may a Model with the Specialist or
          Command Sub-Type or the Paragon Type Embark on a Model with the
          Transport Sub-Type that already has a Unit Embarked upon it with the
          intent of 'joining' the Unit. No Model may join or leave a Unit that
          is Embarked on another Model.
        </p>
        <h4 id="RTaC">removing transports as casualties</h4>
        <p>
          If a Model with the Transport Sub-Type that has a Unit Embarked upon
          it must be Removed as a Casualty, then before the Model is removed
          from the Battlefield the Unit Embarked upon it must first make an
          Emergency Disembarkation. This Emergency Disembarkation is made before
          any other effects - such as the Model it was Embarked upon causing
          Hits or wounds due to its destruction, however, no damage from the
          attack that caused the Model with the Transport Sub-Type to be Removed
          as a Casualty is transferred to the Unit Embarked upon it. Once all
          Models in the Unit Embarked on the Model have made an Emergency
          Disembarkation and any other effects have been resolved, the Model
          with the Transport Sub-Type is removed from play.
        </p>
        <h3 id="bt">Terrain</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('TL')">Terrain Levels</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WDYTCA')"
              >What Does Your Terrain Count As?</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TerT')"
              >Terrain Types</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('OT')">Open Terrain</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TerP')"
              >Terrain Pieces</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AT')">Area Terrain</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DifT')"
              >Difficult Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MIDT')"
              >Moving Into Difficult Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MWDT')"
              >Moving Within Difficult Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CTDT')"
              >Charging Through Difficult Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DanT')"
              >Dangerous Terrain</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DanTT')"
              >Dangerous Terrain Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ImpT')"
              >Impassable Terrain</a
            >
          </li>
        </ul>
        <p class="bold">
          This section contains the Rules you'll need to represent Terrain on
          the Battlefield.
        </p>
        <p>
          Battlefield Terrain is the Rules term for any area of the Battlefield
          that is intended to represent a Terrain Feature, such as an area of
          woods, a hill or ruined building. Such areas are physically
          represented by a Model, but they are not counted as Models for the
          purposes of these Rules. All Terrain is uncontrolled by any Player, it
          does not move or Attack, though some Areas of Terrain can be damaged
          or Removed as Casualties.
        </p>
        <p>
          As such, the following Rules apply to all Areas of Terrain or Terrain
          pieces:
        </p>
        <ul>
          <li>Terrain is never controlled by any Player.</li>
          <li>Terrain may not make attacks of any kind.</li>
        </ul>
        <div class="border">
          <h4 id="TL">terrain levels</h4>
          <p>
            Some Terrain may be described as having levels. This indicates that
            that Terrain has one or more discrete floors or platforms that are
            elevated from the base surface of the Battlefield and are large
            enough for one or more Models to be positioned on them. The surface
            of the Battlefield is never considered a level (or can be thought of
            as level 0 Terrain or 'Ground Level'), even where it undulates or
            otherwise rises above the base level of the gaming surface. Other
            elements of Terrain that include discrete levels should be noted and
            defined by the players at the start of the Battle, indicating what
            level each is.
          </p>
          <p>
            Levels should be numbered, indicating how many 'steps' up from the
            base level of the Battlefield they are. The Rules always consider
            the vertical distance required to Move from one level to another
            immediately above or below the current level to be 3". For example,
            a platform one step up from the base surface of the Battlefield
            would be level one, the platform above that would be level two, etc.
          </p>
          <p>
            Most attacks with a range greater than 0 can target other levels of
            Terrain freely, measuring range and determining Line of Sight as per
            the standard rules. However, if an attack using the Blast (X) or
            Template Special Rule is used to attack a Model on a level of
            Terrain above the base surface of the Battlefield, it may only
            affect Models on a single level. If an attack using
          </p>
          <p>
            If a weapon with both the Barrage (X) Special Rule and the Blast (X)
            Special Rule is used to attack a Model on a level of Terrain above
            the base surface of the Battlefield, it may only affect Models on a
            single level. However, the level the attack hits is decided by the
            final position of the hole at the centre of the Blast Marker after
            any Scatter Rolls have been made. The attack must always target the
            uppermost level that wholly occludes the hole at the centre of the
            blast marker - only Models that are on that level suffer Hits due to
            this attack. If more than one level occludes the hole, then the
            uppermost floor is the one targeted by the attack. If, at the end of
            Step 3 of the Shooting Attack procedure, before any Hit Tests are
            made, an attack that only includes weapons that have both the
            Barrage (X) and Blast (X) Special Rules is unable to target a level
            that includes any enemy Models from the target Unit, then the
            Attacking Player may choose to return to Step 1 and select a
            different Target Unit or end the Shooting Attack.
          </p>
        </div>
        <h4 id="WDYTCA">what does your terrain count as?</h4>
        <p>
          These Rules present Terrain simply as Rules and without reference to
          specific examples of what those Rules apply to. Due to the wide
          variety of Terrain in use by Players, it would be extremely difficult
          for us to indicate which Rules apply to which pieces of scratch built
          Terrain possessed by the average Player without creating some amount
          of confusion. As such, these Rules leave the task of defining what
          each piece of Terrain in a Player's collection counts as to the
          Players themselves. The only Rule we apply is that the Players must
          decide and make known to all Players what each piece of Terrain on the
          Battlefield counts as before any Models or Objectives are deployed.
          Where Missions or organised play formats require a pre- set Terrain
          layout, what each piece of Terrain counts as should be defined by the
          Mission Rules or the organisers of the event.
        </p>
        <h4 id="TerT">terrain types</h4>
        <p>
          The Horus Heresy - Age of Darkness Rules feature several main types of
          Battlefield Terrain: Open Terrain, Terrain Pieces, Area Terrain,
          Difficult Terrain, Dangerous Terrain, Impassable Terrain and
          Buildings.
        </p>
        <h4 id="OT">open terrain</h4>
        <p class="bold">Open Terrain imposes neither penalty or benefit.</p>
        <p>
          Open Terrain is the Rules term used to refer to any area of the
          Battlefield that has no Terrain, offering neither penalty or benefit
          to any Player or Model that occupies it. No additional Rules are
          needed for Open Terrain and, unless otherwise specified, Special Rules
          and abilities that affect Terrain do not affect Open Terrain. If the
          Battlefield incorporates distinct plateaus of raised Open Terrain that
          sit above the main area of the Battlefield then it is left to Players
          to agree and designate if these form a separate level.
        </p>
        <h4 id="TerP">terrain Pieces</h4>
        <p class="bold">Terrain Pieces block Line of Sight.</p>
        <p>
          Terrain Pieces are physically represented by a Model, but do not have
          Profiles or Characteristics - they may not be targeted by attacks or
          affected by any Rule or other effect unless a Special Rule specifies
          otherwise. Some Terrain Pieces may have Bases, but these are ignored
          for the purposes of measuring distances or adjudicating the placement
          of Models - other Models may be placed on top of a Terrain Piece Base,
          and never count as being in Base Contact with a Terrain Piece.
        </p>
        <p>
          Some Terrain Pieces may have additional Special Rules - in all cases
          these will be detailed by the Special Rule itself.
        </p>
        <h4 id="AT">area terrain</h4>
        <p class="bold">Area Terrain grants Cover Saves.</p>
        <p>
          A zone of closely packed Terrain is considered Area Terrain. Any Area
          Terrain on the Battlefield must have a clearly delineated zone which
          it covers, as agreed by all Players. As with Terrain Pieces, some Area
          Terrain may have a Base, but these are ignored for the purposes of
          measuring distances or adjudicating the placement of Models - other
          Models may be placed on top of an Area Terrain Base, and never count
          as being in Base Contact with Area Terrain. When placing a zone of
          Area Terrain, the Players must define a boundary for that zone of Area
          Terrain. This can be the Base, if the zone has one, or any other clear
          boundary point that shows where the Area Terrain begins and ends.
        </p>
        <p>
          Any Model that is within the boundary of a zone of Area Terrain is
          eligible for a
          <a href="" @click.prevent="scrollToSection('CovTest')">Cover Save</a>
          and all zones of Area Terrain are also considered Difficult Terrain.
          The Cover Save provided by a given zone of Area Terrain is determined
          by its class, either Light Area Terrain, Medium Area Terrain or Heavy
          Area Terrain, as noted below:
        </p>
        <ul>
          <li>
            <span class="bold">Light Area Terrain</span> - provides a 6+ Cover
            Save to all Models within its boundaries.
          </li>
          <li>
            <span class="bold">Medium Area Terrain</span> - provides a 5+ Cover
            Save to all Models within its boundaries.
          </li>
          <li>
            <span class="bold">Heavy Area Terrain</span> - provides a 4+ Cover
            Save to all Models within its boundaries.
          </li>
        </ul>
        <p>
          Medium Area Terrain blocks Line of Sight if that Line of Sight passes
          through more than 3" of an Area of Terrain. Heavy Area Terrain always
          blocks Line of Sight, Models within Heavy Area Terrain cannot ever
          draw Line of Sight to any other Models and Models outside of Heavy
          Area Terrain cannot draw Line of Sight to Models within Heavy Area
          Terrain. Line of Sight can never be drawn through Heavy Area Terrain,
          regardless of the distance covered by the Terrain. Light Area Terrain
          does not block Line of Sight.
        </p>
        <p>
          Some Areas of Terrain may include multiple levels, such as ruins with
          more than one floor upon which Models can be placed. These follow all
          of the usual Rules for Terrain levels, and the floors are all
          considered as being within the same Area of Terrain - with the
          exception that Weapons with the Blast (X) and Barrage Special Rules
          are only required to attack the uppermost floor if the Target Model or
          point on the Battlefield is on one of the numbered floors or on the
          Battlefield surface directly under the first Terrain level. This is
          intended to stop attacks targeting Models distant from any levels
          within an Area of Terrain being unfairly protected from attack by
          Weapons with the Barrage Special Rule.
        </p>
        <h4 id="DifT">difficult terrain</h4>
        <p class="bold">
          Difficult Terrain slows down Models moving through it.
        </p>
        <p>
          Tangled or otherwise restrictive Terrain is considered Difficult
          Terrain. Note that an Area of Difficult Terrain does not grant a Cover
          Save unless it is within a zone of Area Terrain.
        </p>
        <h4 id="MIDT">moving into difficult terrain</h4>
        <p>
          If a Unit starts a Move outside any Area of Difficult Terrain, but
          includes Models that could potentially enter an Area of Difficult
          Terrain, the Player must declare if they want their Unit to enter any
          Area of Difficult Terrain as part of their move. If the Controlling
          Player chooses not to enter any area of Difficult Terrain the Unit
          moves as normal, but no Models in the Unit may enter any area of
          Difficult Terrain. If the Controlling Player chooses for any Model in
          the Unit to enter any area of Difficult Terrain, then a modifier of -2
          is applied to the Movement Characteristic of those Models only for the
          duration of that Movement Phase. If the application of this modifier
          would leave the Unit unable to reach an area of Difficult Terrain it
          is still applied, even if the Controlling Player alters the Unit's
          movement and no longer intends it to enter Difficult Terrain.
        </p>
        <h4 id="MWDT">Moving within Difficult Terrain</h4>
        <p>
          If any Models in a Unit start their move within an Area of Difficult
          Terrain, then those Models must reduce their Movement Characteristic
          by -2 during that Movement Phase.
        </p>
        <h4>Charging through Difficult Terrain</h4>
        <p>
          Difficult Terrain has no effect on either Set-up Moves or Charge
          Moves, and no penalty to the distance moved is applied to these types
          of move.
        </p>
        <div><img src="../pct/chargeTerrain.png" alt="" class="img" /></div>
        <h4 id="DanT">dangerous terrain</h4>
        <p class="bold">Dangerous Terrain can inflict wounds on Models.</p>
        <p>
          Dangerous Terrain follows all the Rules for Difficult Terrain and, in
          addition, any Model that enters, leaves or moves through an Area of
          Dangerous Terrain must make a Dangerous Terrain Test. This Test must
          be made immediately when a Model moves into an Area of Dangerous
          Terrain or begins a move while within an Area of Dangerous Terrain.
        </p>
        <h4 id="DanTT">Dangerous Terrain Tests</h4>
        <p>
          To take a Dangerous Terrain Test, the Player controlling a Model that
          has moved into or through an Area of Dangerous Terrain must roll a
          Dice. On a result of '1', that Model suffers a wound with an AP of 2
          and a Damage Characteristic of 1. No Armour Save, Cover Save or Damage
          Mitigation Roll may be made to discard this wound, but Invulnerable
          Saves may still be made.
        </p>
        <p>
          Once a Dangerous Terrain Test has been made for a given Model in a
          Phase, then no further Dangerous Terrain Tests are taken for that same
          Model in the same Phase, regardless of whether it enters further Areas
          of Dangerous Terrain.
        </p>
        <h4 id="ImpT">Impassable terrain</h4>
        <p class="bold">Models may not move into or onto Impassable Terrain.</p>
        <p>
          Unless noted otherwise in their Special Rules, Models cannot enter,
          cross, move into or move through Impassable Terrain - they must go
          around. The exception to this Rule include Models with the Antigrav or
          Flyer Sub-Types which may move over, but not end their move in,
          Impassable Terrain.
        </p>
        <h3 id="Buildings">Buildings</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('BAV')"
              >Building Armour Values</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('BitHH')"
              >Buildings in the Horus Heresy</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('BaW')"
              >Buildings and Weapons</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AtB')"
              >Attacking Buildings</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Battlements')"
              >Battlements</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VictP')"
              >Victory Points</a
            >
          </li>
        </ul>
        <p class="bold">
          Buildings are similar to immobile Transport Vehicles.
        </p>
        <p>
          Buildings are a special Type of Model, and are bound by the following
          Rules:
        </p>
        <ul>
          <li>Buildings are not, and cannot be, controlled by any Player.</li>
          <li>Buildings may be targeted by Shooting Attacks and Charges.</li>
          <li>
            Buildings have the Armour, Transport Capacity and Hull Points
            Characteristics.
          </li>
          <li>
            Buildings may never be moved by either Player, and no Rule, Special
            Rule or other effect can move or re-deploy a Building.
          </li>
          <li>
            All Glancing Hits inflicted on a Building inflict 1 point of Damage
            and no roll on the Vehicle Damage Table is ever made for a Building.
          </li>
          <li>
            Buildings are all considered to have the Transport Sub-Type and any
            Player may Embark a Unit onto a Building, but only one Unit may be
            Embarked on a Building at any one time.
          </li>
        </ul>
        <h4 id="BAV">Building Armour Values</h4>
        <p>
          All Buildings are treated as having only one Facing, and thus have
          only a single value for Armour, which is used against all attacks, no
          matter their point of origin.
        </p>
        <h4 id="BitHH">buildings in the horus heresy</h4>
        <p>
          Buildings are not selected as part of any Army, they are treated as a
          type of Terrain. The following profiles can be used to represent
          Buildings in the Age of Darkness - Players must reach an agreement on
          which Terrain Models represent Buildings and which profile will be
          used for them before any Battle is begun.
        </p>
        <div>
          <table class="unit-general__table">
            <thead>
              <tr>
                <th></th>
                <th>Armour</th>
                <th>Hull Points</th>
                <th>Transport Capacity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small Building</td>
                <td>8</td>
                <td>8</td>
                <td>6</td>
              </tr>
              <tr>
                <td>Medium Building</td>
                <td>11</td>
                <td>10</td>
                <td>12</td>
              </tr>
              <tr>
                <td>Large Building</td>
                <td>13</td>
                <td>12</td>
                <td>22</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h4 id="BaW">Buildings and Weapons</h4>
        <p>
          Normally a Building has no Weapons, however if both Players agree then
          a Building may be granted one or more Weapons. These Weapons must be
          clearly shown on the Building and assigned a Fire Arc using the Rules
          for Vehicle Fire Arcs. A Player that has at least one friendly Unit
          Embarked within a Building may attack with those Weapons, using the
          majority Ballistic Skill of the Embarked Unit for any Hit Tests.
        </p>
        <h4 id="AtB">Attacking Buildings</h4>
        <p>
          When determining if a Building can be targeted by a Shooting Attack or
          Charged and fought in Combat, or affected by a Special Rule, treat the
          Building as a Vehicle unless it is specifically stated otherwise. When
          attacking a Building, make Hit Tests and Armour Penetration Tests as
          if it were a Vehicle. In Combat, Buildings are hit automatically and
          treated as having a Movement Characteristic of '0' and can be attacked
          with Weapons that have the Detonation Special Rule.
        </p>
        <p>
          If a Building suffers a Glancing Hit then that Building suffers 1
          point of Damage, regardless of the Damage Characteristic of the Hit.
          If a Building suffers a Penetrating Hit, then that Building suffers
          Damage equal to the Damage Characteristic of the Hit.
        </p>
        <p>
          When a Building has its Hull Points Characteristic reduced to 0, it is
          Removed as a Casualty and replaced by a zone of Medium Area Terrain
          that is also Difficult Terrain granting a 5+ Cover Save that covers
          the same area as the Building previously occupied. Any Unit Embarked
          on a Building that is Removed as a Casualty must immediately Disembark
          before the Building is removed and must take a Panic Check once the
          Building has been Removed as a Casualty.
        </p>
        <h4 id="Battlements">Battlements</h4>
        <p>
          The roof spaces of many Buildings are identified as Battlements.
          Whilst all Battlements are built on top of a Building, Battlements are
          not themselves treated as Buildings. Battlements are treated as a zone
          of Medium Area Terrain that grants a 5+ Cover Save and count as an
          Access Point for the Building they serve as the roof for.
        </p>
        <h4 id="VictP">Victory Points</h4>
        <p>
          Unless otherwise agreed by all Players, or stated by a Mission Special
          Rule, no Victory Points are ever scored when a Building is Removed as
          a Casualty.
        </p>
        <div class="border">
          <h4>designer's note</h4>
          <p>
            The Building Rules presented here are intended to be low impact,
            allowing for a basic use of generic buildings as scenery pieces
            rather than representing dedicated military fortifications. Future
            publications will offer more comprehensive Rules for urban warfare
            and the use of more formidable military fortifications as part of a
            Battle.
          </p>
        </div>
        <h2 id="battlerules">The Rules Of Battle</h2>
        <p>
          The structure of a Battle is detailed in this section. It includes the
          sequence of actions that Players will need to follow in order to
          properly resolve a Battle and organises those actions into Turns and
          Phases. The Rules of Battle details the sequence of actions in a Turn
          and then a separate section for each Phase.
        </p>
        <h3 id="turnSeq">Turn Sequence</h3>
        <p class="bold">
          This section details how a Battle is divided into Turns and the Phases
          that make up those Turns.
        </p>
        <p>
          Every Battle is organised into a number of Battle Turns, usually four.
          Each Battle Turn includes two Player Turns, one for each Player in the
          Battle during which that Player moves and attacks with the Units under
          their control. The Turn Sequence is the order in which the various
          Phases of each Player Turn are taken and dictates when certain actions
          may be taken and by which Units.
        </p>
        <p>The following is the Turn Sequence in full:</p>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('startPhase')"
              >THE START PHASE</a
            >
            <ul class="numeric">
              <li>The Effects Sub-Phase</li>
            </ul>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('movePhase')"
              >THE MOVEMENT PHASE</a
            >
            <ul class="numeric">
              <li>The Reserves Sub-Phase</li>
              <li>The Move Sub-Phase</li>
              <li>The Rout Sub-Phase</li>
            </ul>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('shooting')"
              >THE SHOOTING PHASE</a
            >
            <ul class="numeric">
              <li>The Attack Sub-Phase</li>
              <li>The Morale Sub-Phase</li>
            </ul>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('assaultPhase')"
              >THE ASSAULT PHASE</a
            >
            <ul class="numeric">
              <li>The Charge Sub-Phase</li>
              <li>The Challenge Sub-Phase</li>
              <li>The Fight Sub-Phase</li>
              <li>The Resolution Sub-Phase</li>
            </ul>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('end')">THE END PHASE</a>
            <ul class="numeric">
              <li>The Effects Sub-Phase</li>
              <li>The Statuses Sub-Phase</li>
              <li>The Victory Sub-Phase</li>
            </ul>
          </li>
        </ul>
        <p>
          In any Battle, play will begin with a Player taking the first Player
          Turn, during which they are considered the Active Player. Which Player
          takes the first Player Turn is decided by the Mission being used.
          After that Turn is complete, the Opposing Player will become the
          Active Player and complete a Player Turn. That is considered one
          Battle Turn, and once complete either another Battle Turn will be
          begun or the Battle will end, as dictated by the Mission being used.
        </p>
        <p>
          The following Rules will define each phase of the Turn in order,
          showing what actions are taken in each Phase and explaining any Rules
          that are used only in that Phase.
        </p>
        <div class="unit__additional-ru">
          <h4>a note of player terminology</h4>
          <p>
            It is important to note that whichever Player is currently taking
            their Player Turn is the Active Player, with the other Player
            referred to as either the Reactive Player or the Opposing Player.
            Should a Rule simply state 'Player' without qualifier then it is
            referring to the Active Player.
          </p>
        </div>
        <h3 id="startPhase">Start Phase</h3>
        <p class="bold">
          The Start Phase is the first Phase of any Player Turn.
        </p>
        <p>
          The first Phase of each Player Turn is the Start Phase. This Phase is
          used to adjudicate the start and end of certain effects and Rules.
        </p>
        <h4>The effects sub-phase</h4>
        <p class="bold">
          Effects which begin or end 'at the start of the Turn' begin or end in
          this Sub-Phase.
        </p>
        <p>
          All Rules whose effects either begin or end at the 'start of a
          Player's Player Turn' start or end in this Sub-Phase. The effects of
          those Rules will either end in this Sub-Phase and have no further
          effect on any Model or start in this Sub-Phase and only apply their
          effects once it has ended.
        </p>
        <p>
          If the removal or application of any effects triggered by this
          Sub-Phase require any Tests or Checks then those are made in this
          Sub-Phase as instructed by the Rule that applies them. The Active
          Player decides the order in which any such Tests or Checks are made.
        </p>
        <p>
          Once all Sub-Phases of the Start Phase have been resolved, the Active
          Player must begin the Movement Phase.
        </p>
        <h3 id="movePhase">Movement Phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('ResSP')"
              >Reserves Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('EPFR')"
              >Entering Play From Reserves</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MovS')"
              >Move Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MovVS')"
              >Moved Vs Stationary</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MovU')">Moving Units</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('LinoM')"
              >Line of Movement</a
            >
          </li>
          <li><a href="" @click.prevent="scrollToSection('Rush')">Rush</a></li>
          <li>
            <a href="" @click.prevent="scrollToSection('WobMS')"
              >Wobbly Model Syndrome</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RoutS')"
              >Rout Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FalB')">Falling Back</a>
          </li>
        </ul>
        <p class="bold">
          The Movement Phase is where the Active Player moves their Units, and
          also where Reserves are rolled for and brought into play.
        </p>
        <p>
          The Movement Phase is where Models make moves, Rush or make Fall Back
          Moves. Note that some moves (such as Charge Moves) may occur in other
          Phases as detailed by the Rules for those Phases and moves. The
          Movement Phase is also where Reserves are rolled for and brought into
          play.
        </p>
        <h4 id="ResSP">reserves sub-phase</h4>
        <p class="bold">
          Reserves Tests are made in this Sub-Phase, and Units enter the
          Battlefield from Reserves.
        </p>
        <p>
          In the Reserves Sub-Phase, the Active Player must make a Reserves Test
          for each Unit under their control that is in Reserves or Aerial
          Reserves.
        </p>
        <p>
          A Reserves Test is made by selecting one Unit that is in Reserves or
          Aerial Reserves and rolling a single Dice as a Test with a Target
          Number of 3+. Some Rules may apply modifiers to this Test as per the
          normal Rules for modifying Tests. If the Test is successful then the
          Active Player may choose to either leave the Unit that was selected in
          Reserves or to immediately bring it into play from Reserves or Aerial
          Reserves. If the Test is failed then the selected Unit must remain in
          Reserves or Aerial Reserves. Note that a single Reserves Test is made
          for Units that include Models on which other Models are Embarked - a
          separate Test is not made for the Transport Sub-Type Model and the
          Embarked Unit.
        </p>
        <p>
          The Active Player must continue to make Reserves Tests until either
          all Units under their control in Reserves or Aerial Reserves have had
          a Reserves Test made for them, or there are no Units under their
          control in Reserves or Aerial Reserves. Once all Tests have been made
          and any Units eligible have entered play, the Reserves Sub-Phase ends
          and the Move Sub-Phase begins.
        </p>
        <div class="border">
          <h4 id="EPFR">entering play from reserves</h4>
          <p>
            If a successful Reserves Roll is made for a Unit in Reserves and the
            Controlling Player chooses to bring that Unit into play, the
            following procedure is used to deploy that Unit onto the
            Battlefield.
          </p>
          <p>
            The Controlling Player must select a point along the edge of the
            Battlefield that is within the Deployment Zone for that Player as
            defined by the Mission in use. Some Rules may allow the selection of
            a point outside that Player's Deployment Zone, this will always be
            specified by the Rule in question.
          </p>
          <p>
            One Model from the Unit entering play, selected by the Unit's
            Controlling Player, is placed at the selected point on the
            Battlefield Edge. That Model may then be moved using the same Rules
            for moving found in the Move Sub-Phase.
          </p>
          <p>
            Once that Model has been moved, each other Model in the Unit
            entering play must be placed and Moved in the same manner and in an
            order chosen by the Unit's Controlling Player. All Models after the
            first must end their Move in Unit Coherency - if for any reason a
            Model's Move cannot be ended in Unit Coherency then that Model must
            immediately be Removed as a Casualty.
          </p>
          <p>
            The Unit's Controlling Player continues to place and move Models
            until all Models in the Unit have entered play.
          </p>
          <p>
            A Unit that enters play from Reserves in this manner may not move in
            the Move Sub-Phase of the same Movement Phase, but may act as normal
            in the Shooting and Assault Phases of the same Player Turn. Entering
            play from Reserves is considered to be moving for Rules that are
            affected by a Unit having moved, even if the Models in the Unit that
            is entering play do not move after being placed. When moving as part
            of entering play from Reserves, Models in a Unit may
            <a href="" @click.prevent="scrollToSection('Rush')">Rush</a> but if
            any Models in the Unit do so then the entire Unit is treated as if
            it had Rushed.
          </p>
        </div>
        <h4 id="MovS">move sub-phase</h4>
        <p class="bold">
          The Active Player may move each of their Units in this Sub-Phase.
        </p>
        <p>
          During the Move Sub-Phase, the Active Player may choose to move any of
          the Units under their control. There are a number of Rules and
          situations that make a Unit ineligible to move during the Move
          Sub-Phase, the most common of which are:
        </p>
        <ul>
          <li>
            A Unit may not move in the Move Sub-Phase if it entered play from
            Reserves in the same Player Turn.
          </li>
          <li>
            A Unit may not move in the Move Sub-Phase if it has the Pinned
            Status.
          </li>
          <li>
            A Unit may not move in the Move Sub-Phase if it has the Routed
            Status and will instead move during the Rout Sub-Phase.
          </li>
          <li>
            A Unit may not move in the Move Sub-Phase if it is Locked in Combat.
          </li>
          <li>
            A Unit may not move in the Move Sub-Phase if any Model in the Unit
            has a Movement Characteristic of 0 or '-'.
          </li>
        </ul>
        <p>
          Other Rules may also restrict a Unit from being moved during the Move
          Sub-Phase, in all cases these Rules will specifically state this. The
          Controlling Player may also choose not to move a Unit that would
          otherwise be eligible to move.
        </p>
        <p>
          Units that cannot move or whose Controlling Player chooses not to
          move, other than to
          <a href="" @click.prevent="scrollToSection('VitMP')">Pivot</a>, are
          considered to be Stationary. Different Rules will offer both benefits
          and penalties to Units that have been moved and those that have been
          left Stationary. Players will have to balance the needs of their
          strategy in determining when each will be more beneficial to them.
        </p>
        <div class="border">
          <h4 id="MovVS">moved vs stationary</h4>
          <p>
            In order to have moved, one or more Models in a Unit must end the
            Movement Phase in a different position than that which they started
            the Phase. A Model cannot be 'moved' in such a fashion that it ends
            its 'move' in the same position as it began the move. In cases where
            the distance a Model has been moved is important to a Rule, only the
            distance between that Model's position at the start of the Movement
            Phase and its position at the end of the Movement Phase is counted.
            When determining this distance, if the direct line between a Model's
            starting position and current position passes through an Area of
            Impassable Terrain or other obstacle through which a Model cannot
            move, then count the distance of the Model's path of movement around
            the obstacle rather than the direct line between its start and end
            positions. If, when a Player has the option of moving a Unit, they
            choose not to move any of the Models in that Unit, and no Models in
            the Unit otherwise change position on the Battlefield, other than to
            pivot in place, then that Unit is considered to be Stationary.
          </p>
        </div>
        <p>
          In order to move the Units under their control, the Active Player must
          follow this procedure to resolve the Move Sub-Phase:
        </p>
        <ul class="numeric">
          <li>
            <span class="bold">Select Unit.</span> The Active Player must select
            a Unit under their control that has not yet been selected or Moved
            during that Move Sub-Phase.
          </li>
          <li>
            <span class="bold">Move Unit.</span> Once a Unit has been selected,
            the Controlling Player may move the Unit. If the Controlling Player
            does not move the Unit then it is counted as having remained
            Stationary. If the Unit is to move, then that move is made at this
            point. If it is to remain Stationary then the Players must move to
            Step 3.
          </li>
          <li>
            <span class="bold">Select New Unit.</span> Once the selected Unit
            has either been moved or has remained Stationary, another Unit must
            be selected using the same criteria as the first.
          </li>
        </ul>
        <h4 id="MovU">moving units</h4>
        <p>
          When the Active Player selects a Unit during the Move Sub-Phase and
          moves that Unit, then each Model in that Unit may be re-positioned to
          a new location on the Battlefield. This new location must be equal to
          or less than a number of inches equal to its Movement Characteristic
          from its position when the Unit was selected. When moving Models that
          are part of the same Unit, the Controlling Player must, if possible,
          end the moves of those Models so that each Model in the Unit is in
          <a href="" @click.prevent="scrollToSection('coherency')"
            >Unit Coherency</a
          >. If for any reason a Unit cannot end its move in Unit Coherency then
          the Unit automatically gains the Suppressed Status.
        </p>
        <p>When moving a Unit, no Model in the Unit being moved may:</p>
        <ul>
          <li>End its move in Impassable Terrain.</li>
          <li>End its move within 1" of an enemy Model.</li>
          <li>
            End its move within 1" of a friendly Model that is Locked in Combat.
          </li>
          <li>End its move outside the bounds of the Battlefield</li>
          <li>End its move on top of any other Model.</li>
        </ul>
        <p>
          If a Unit includes Models with different Movement Characteristics,
          this does not modify the Unit's move- but the Unit must still end its
          move in Unit Coherency if at all possible. This may mean that some
          Models in the Unit must move less than their Movement Characteristic
          in order to ensure the Unit maintains Unit Coherency. If no Models in
          a Unit change position on the Battlefield, other than to pivot in
          place, then that Unit does not count as having moved and has remained
          Stationary.
        </p>
        <div class="border">
          <h4 id="LinoM">line of movement</h4>
          <p>
            Each move is intended to simulate the warriors represented by Models
            actually moving across the Battlefield - for game purposes, it is
            often not important to show exactly what path this 'movement' has
            actually followed. However, in certain circumstances it will be
            important to show that a Model's move has not taken it through an
            obstacle that would either reduce the distance that can be moved or
            block a move entirely. The Opposing Player can at any time request
            that the Active Player show the Line of Movement for a given Model
            to ensure it has not moved incorrectly.
          </p>
          <p>
            To determine the Line of Movement simply trace, or use a flexible
            tape measure or other device, the path from the Model's starting
            position when the Unit was selected to be moved, to its final
            position at the end of the move. This Line of Movement need not be a
            straight line, but may not cross any of the following:
          </p>
          <ul>
            <li>An Area of Impassable Terrain.</li>
            <li>
              The Base or structure of a Terrain Piece (this does not include
              Area Terrain that has a Base).
            </li>
            <li>The Hull of a Model with the Vehicle Type.</li>
            <li>Any area within 1" of an enemy Model.</li>
            <li>Any area within 1" of any Model that is Locked in Combat.</li>
            <li>Any area that is outside the bounds of the Battlefield.</li>
          </ul>
          <p>
            The Line of Movement is allowed to cross an Area of Difficult or
            Dangerous Terrain, but if any portion of a Model's Line of Movement
            passes through such an Area of Terrain then the Movement
            Characteristic of that Model is reduced by -2 until the end of that
            Move Sub-Phase, reducing the distance it can be moved as part of
            that move.
          </p>
          <p>
            Note that when following a specific Line of Movement in order to
            avoid obstacles, Players must measure the length of the line traced
            to determine the total distance moved. This may mean that the Model
            cannot move as far as if it was simply re-positioned. However, if
            when simply re-positioned, a straight line drawn between the start
            and end points of a Model's move would cross any obstacle or Area of
            Terrain, then a Line of Movement must be established to determine
            the actual distance that can be moved and no Player may opt to
            ignore the obstacles.
          </p>
        </div>
        <h4 id="Rush">rush</h4>
        <p class="bold">
          A Unit that makes a Rush may not make Shooting Attacks or Charge, but
          moves further.
        </p>
        <p>
          When the Active Player selects a Unit under their control to move in
          the Move Sub-Phase, they may declare that the Unit will Rush. A Unit
          that Rushes may not make Shooting Attacks in the Shooting Phase of the
          same Player Turn or have a Charge declared for it in the Assault Phase
          of the same Player Turn. All Models in a Unit that Rushes add the
          value of that Model's Initiative Characteristic to the value of its
          Movement Characteristic when determining how many inches a Model that
          Rushes may move.
        </p>
        <p>
          Note that a Player may only choose to have a Unit Rush when Moving
          that Unit during the Move Sub-Phase or Reserves Sub-Phase of a Player
          Turn where they are the Active Player. Units may not Rush as part of
          any Reaction that allows them to make a Move, or have a Rush declared
          for them in any Phase or Sub-Phase other than the Move Sub-Phase or
          Reserves Sub-Phase.
        </p>
        <div class="border">
          <h4 id="WobMS">wobbly model syndrome</h4>
          <p>
            Sometimes, a particular piece of Terrain may make it hard to place a
            Model exactly where you want. In cases like this, it is perfectly
            acceptable to leave the Model in a safer position, as long as both
            Players have agreed and know its 'actual' location.
          </p>
        </div>
        <h4 id="RoutS">rout sub-phase</h4>
        <p class="bold">All Fall Back Moves are made in this Sub-Phase.</p>
        <p>
          Certain Rules, such as the Routed Status, may require Units to move
          during the Rout Sub-Phase. Unlike moves made during the Move
          Sub-Phase, those made during the Rout Sub-Phase will require a Unit to
          be moved in a specific manner and rarely allow the Controlling Player
          to move them as they will. The Active Player may not choose to move a
          Unit during the Rout Sub-Phase, but rather various Rules and Special
          Rules will require the Active Player to move certain Units during this
          Sub-Phase.
        </p>
        <p>
          The most common type of move made during the Rout Sub-Phase is when a
          Unit Falls Back, which is described as follows. Other Rules may
          present other types of move to be made in the Rout Sub-Phase, in such
          a case the Rule will present all Rules required to make such a move.
        </p>
        <h4 id="FalB">falling back</h4>
        <p>
          A Unit with the Routed Status may not be moved during the Move
          Sub-Phase, but must instead make a Fall Back Move during the Rout
          Sub-Phase. Other Rules may also require a Unit to make a Fall Back
          Move, those Rules will detail when such a move must be made.
        </p>
        <p>
          To make a Fall Back Move, the Controlling Player of the Unit that is
          falling back moves each Model in the Unit a distance equal to the
          total of the Current Value of the Model's Initiative Characteristic
          added to the result of a Dice roll (roll one Dice once for all Models
          in the same Unit and add the same result to each Model's individual
          Initiative Characteristic) directly towards the nearest point on the
          Battlefield Edge that is within that Player's Deployment Zone. If the
          Mission in use does not define a Deployment Zone for that Player, then
          Models move towards the closest Battlefield Edge instead.
        </p>
        <p>
          Models making a Fall Back Move have the distance they move reduced as
          normal by Terrain and, unlike in a normal move, must move around
          obstacles or obstructions in a specific manner. When a Unit's path is
          obstructed while making a Fall Back Move, the Controlling Player must
          always determine a Line of Movement that allows the Model to move as
          far as possible towards the target point on the Battlefield Edge. The
          Controlling Player must end the move of any Model in Unit Coherency if
          possible, but all Models must move the full distance possible which
          may force the Controlling Player to place Models so that they are no
          longer in Unit Coherency. Note that a Unit that ends its move out of
          Unit Coherency while it has the Routed Status never gains the
          Suppressed Status. Models making a Fall Back Move may not end that
          move within 1" of any enemy Model. If no other Line of Movement, other
          than one that would leave a Model making a Fall Back Move within 1" of
          an enemy Model, is available then the Model making a Fall Back Move
          must end that move early at the furthest point it can reach in the
          direction of the Battlefield Edge whilst also remaining at least 1"
          from any enemy Model.
        </p>
        <p>
          If any Model in a Unit that is Falling Back moves into Base Contact
          with any point on the Battlefield Edge within the Controlling Player's
          Deployment Zone, then that Model must end its movement at the point
          where it entered contact with the Battlefield Edge. Once all Models in
          a Unit that includes one or more Models which have entered contact
          with a Battlefield Edge that is within the Controlling Player's
          Deployment Zone as part of a Fall Back Move have finished their moves,
          a Leadership Check must be made for that Unit. If that Leadership
          Check is failed, then all Models in the Unit are immediately Removed
          as Casualties. However, if that Leadership Check is passed then the
          Unit remains in play and all Models in the Unit lose the Routed
          Status, but gain the Suppressed Status.
        </p>
        <h3 id="shooting">Shooting Phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('AttS')"
              >Attack Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ShootA')"
              >Shooting Attacks</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelTU')"
              >Select Target Unit</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CheckT')"
              >Check Target</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DecW')"
              >Declare Weapons</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SetFG')"
              >Set Fire Groups</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SetFGtR')"
              >Select Fire Group To Resolve</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeHT')"
              >Make Hit Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SplitFG')"
              >Splitting Fire Groups</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeWT')"
              >Make Wound Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelTM')"
              >Select Target Model</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DNUTM')"
              >Unlikely Target Models</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MSTaDMT')"
              >Make Saving Throws and Damage Mitigation Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelNFG')"
              >Select Next Fire Group</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RemC')"
              >Remove Casualties</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MorS')"
              >Morale Sub-phase</a
            >
          </li>
        </ul>
        <p class="bold">
          The Shooting Phase is where the Active Player makes Shooting Attacks
          with their Units.
        </p>
        <p>
          In the Shooting Phase, the Active Player may choose to make a Shooting
          Attack for each of their Units, resolving each attack in turn before
          moving to the next. Any potential Statuses inflicted by attacks made
          by any Player are also resolved in this Phase after all Shooting
          Attacks have been made.
        </p>
        <h4 id="AttS">attack sub-phase</h4>
        <p class="bold">
          Shooting Attacks are made by the Active Player in the Attack
          Sub-Phase.
        </p>
        <p>
          During the Attack Sub-Phase, the Active Player may choose to make
          Shooting Attacks with any of the Units under their control. There are
          a number of Rules and situations that make a Unit ineligible to make a
          Shooting Attack during the Attack Sub-Phase, the most common of which
          are:
        </p>
        <ul>
          <li>
            A Unit may not make a Shooting Attack in the Attack Sub-Phase if it
            made a Rush in the Move Sub-Phase of the same Player Turn.
          </li>
          <li>
            A Unit may not make a Shooting Attack in the Attack Sub-Phase if it
            is Locked in Combat.
          </li>
          <li>
            A Unit may not make a Shooting Attack in the Attack Sub-Phase if it
            is Embarked upon another Model.
          </li>
        </ul>
        <p>
          Other Rules may also restrict a Unit from making a Shooting Attack
          during the Attack Sub-Phase - in all cases these Rules will
          specifically state this. The Active Player may also choose not to make
          a Shooting Attack with a Unit that would otherwise be eligible to do
          so.
        </p>
        <p>
          During the Attack Sub-Phase, the Active Player must select each of the
          Units under their control that are on the Battlefield. For each
          eligible Unit, once it is selected, the Controlling Player must choose
          to either make a Shooting Attack for that Unit using the Rules
          provided as follows, or to have that Unit make no Shooting Attack in
          the current Player Turn. Once all Units under the Active Player's
          control have been selected and either had a Shooting Attack made with
          them or had the Controlling Player choose not to do so, the Attack
          Sub-Phase ends and the Morale Sub-Phase begins.
        </p>
        <h4 id="ShootA">shooting attacks</h4>
        <p class="bold">
          A Shooting Attack is the process by which a Unit makes a coordinated
          series of attacks targeting an enemy Unit.
        </p>
        <p>
          In order to make a Shooting Attack for a Unit that has been selected
          during the Attack Sub-Phase, as part of a Reaction or for any other
          Rule or Sub-Phase that requires a Shooting Attack to be made, the
          following procedure must be followed:
        </p>
        <ul class="numeric">
          <li class="bold">Select Target Unit.</li>
          <li class="bold">Check Target.</li>
          <li class="bold">Declare Weapons.</li>
          <li class="bold">Set Fire Groups.</li>
          <li class="bold">Select Fire Group To Resolve.</li>
          <li class="bold">Make Hit Tests.</li>
          <li class="bold">Make Wound Tests.</li>
          <li class="bold">Select Target Model.</li>
          <li class="bold">Make Saving Throws and Damage Mitigation Tests.</li>
          <li class="bold">Select Next Fire Group.</li>
          <li class="bold">Remove Casualties.</li>
        </ul>
        <h4 id="SelTU">1. Select Target Unit</h4>
        <p>
          The Attacking Player must select one enemy Unit to be the target of
          the Shooting Attack. The Unit selected as the target may not be a Unit
          that is Embarked on another Model (but may be a Model with a Unit
          Embarked on it), a Unit in Reserves or otherwise removed from play, or
          any Unit that is part of a Combat.
        </p>

        <h4 id="CheckT">2. Check Target</h4>
        <p>
          In order for the Shooting Attack to be made, at least one Model in the
          Attacking Unit must be able to draw a Line of Sight to one or more
          Models in the Target Unit. Only Models in the Attacking Unit that have
          Line of Sight to at least one Model in the Target Unit may make
          attacks as part of the Shooting Attack (see the Rules for determining
          <a href="" @click.prevent="scrollToSection('los')">Line of Sight</a>).
          If no Model in the Attacking Unit has a valid Line of Sight to any
          Model in the Target Unit then no Shooting Attack may be made and the
          Attacking Player must choose to either return to Step 1 and select a
          different Target Unit or end the Shooting Attack. Note that some
          Shooting Attacks, such as those made as part of the Return Fire or
          Overwatch Reaction, may not allow a different target to be selected.
          In such a case, the Attacking Player must choose to end the Shooting
          Attack if no valid Line of Sight can be drawn by any Model in the
          Attacking Unit.
        </p>
        <p>
          When determining Line of Sight to a Model with the Vehicle Type, the
          Armour Facing that is being targeted must be determined in this Step.
          The Armour Facing being targeted is always the facing that is in Line
          of Sight for the majority of Models in the Attacking Unit. If more
          than one Armour Facing is in Line of Sight for a majority of the
          Attacking Unit, then the Controlling Player of the Target Unit may
          choose which of the eligible Armour Facings is the target.
        </p>

        <h4 id="DecW">3. Declare Weapons</h4>
        <p>
          Once a Target Unit has been selected, the Attacking Player must
          declare which Weapons will be used to make attacks as part of that
          Shooting Attack. Each Model in the Attacking Unit may have attacks
          made for it with one Weapon available to that Model (some Models may
          have Types or Special Rules that allow attacks to be made for them
          with more than one Weapon). If a Weapon has more than one profile,
          then attacks using different profiles must be declared separately as
          if they were different Weapons, but the Controlling Player may only
          use one of the profiles available for a given Weapon to make attacks
          in any Shooting Attack, and the Controlling Player must specify which
          Models from the Attacking Unit are using which profile for each
          affected Weapon.
        </p>
        <p>
          Only Weapons that are within range of at least one Model in the Target
          Unit to which the Model that has the Weapon also has a valid Line of
          Sight may be declared for use as part of a Shooting Attack. A Model is
          'in range' with a Weapon if the distance between the attacking Model
          and a Model in the Target Unit to which it can draw a valid Line of
          Sight is equal to or less than the Range Characteristic of that
          Weapon. If a Model has no Weapons that are both in range and Line of
          Sight of a Model in the Target Unit then no attacks may be made for
          that Model. If no Models in the Attacking Unit are in range of at
          least one Model in the Target Unit then the Shooting Attack cannot be
          made, but the Attacking Player may choose to return to Step 1 and
          select a different Target Unit or end the Shooting Attack.
        </p>

        <h4 id="SetFG">4. Set Fire Groups</h4>
        <p>
          The Attacking Player must establish one or more Fire Groups in this
          Step. Each Fire Group is comprised of all of the attacks made with
          Weapons of the same name. So, a Unit for which a Shooting Attack is
          made that has attacks made for it with bolters, bolt pistols and
          plasma guns must divide its attacks into three Fire Groups - one for
          each of the Weapons used. As established in the previous Step, all
          attacks in a Fire Group must be in Range and Line of Sight of at least
          one Model in the Target Unit. Furthermore, if a Weapon used to make
          any attacks has more than profile, then attacks using different
          profiles must form different Fire Groups even though they are made
          with the same Weapon. Lastly, if the Attacking Unit includes Models
          with different Ballistic Skill Characteristics, then Fire Groups must
          be further divided so that no Fire Group includes attacks made by
          Models with different Ballistic Skill Characteristics.
        </p>
        <p>
          When making Hit Tests, all attacks in a Fire Group are rolled at the
          same time and their results kept separate from those of other Fire
          Groups. In all cases, the Player making the Shooting Attack decides in
          which order the Fire Groups comprising a Shooting Attack are resolved,
          but all attacks in a given Fire Group must be resolved in the
          appropriate steps of this process before another Fire Group may be
          selected.
        </p>

        <h4 id="SetFGtR">5. Select Fire Group To Resolve</h4>
        <p>
          Once all Fire Groups have been set, the Attacking Player selects one
          Fire Group. That Fire Group will be resolved before the effects of any
          other Fire Groups are resolved. Once a Fire Group has been selected,
          move to the next Step.
        </p>

        <h4 id="MakeHT">6. Make Hit Tests</h4>
        <p>
          Once a Fire Group has been selected, the Player making the Shooting
          Attack totals the Firepower Characteristics of all Weapons in that
          group. That total determines the number of Hit Tests that must be made
          for that Fire Group. These Tests are made by the Player making the
          Shooting Attack in this Step, using the Rules found
          <a href="" @click.prevent="scrollToSection('shooting')">there</a>.
        </p>
        <p>
          Once all Hit Tests have been made for a Fire Group, the successes are
          placed to one side and the failures are discarded. All Hits (successes
          generated by Hit Tests) remain in the Fire Groups that generate them -
          if all Hit Tests made for a Fire Group fail to generate any successes
          then that Fire Group is discarded and the Attacking Player must return
          to Step 5 and select a new Fire Group to resolve. Once all Hit Tests
          for the selected Fire Group have been resolved, move to the next step.
        </p>
        <div class="border">
          <h4>Designer's Note: Batch Rolling</h4>
          <p>
            In many cases, a number of Tests will need to be made that have
            identical Target Numbers and potential results. In such cases, it is
            entirely proper for all of those Dice to be rolled at once and then
            sorted into successes and failures - a practice known as batch
            rolling or 'fast dicing. It is up to the Player that is rolling to
            decide if they wish to roll each Test one at a time or to batch
            roll.
          </p>
        </div>
        <div class="border">
          <h4 id="SplitFG">splitting fire groups</h4>
          <p>
            Sometimes, a Hit, wound or Unsaved Wound will gain a bonus to one of
            its Characteristics or gain a Special Rule depending on the results
            of a Hit Test or Wound Test (for example, due to the Breaching (X)
            Special Rule). At the end of the Step in which this occurs, the
            Attacking Player must split that Fire Group into separate Fire
            Groups, one for unmodified Hits, wounds or Unsaved Wounds and a new
            Fire Group for the modified Hits, wounds or Unsaved Wounds. The Fire
            Group which includes modified Hits, wounds or Unsaved Wounds is
            placed to one side and the Attacking Player should continue to
            resolve the Fire Group that contains any unmodified Hits, wounds or
            Unsaved Wounds. If no unmodified Hits, wounds or Unsaved Wounds
            remain in that Fire Group then the Attacking Player must instead
            continue to resolve the Fire Group for modified Hits, wounds or
            Unsaved Wounds from the Step where it was set aside. In all cases,
            where a Fire Group has been set aside after Step 5 and the Attacking
            Player is instructed to select a new Fire Group to resolve, they
            must first select a Fire Group that has been put aside before
            selecting any other Fire Group to resolve.
          </p>
        </div>

        <h4 id="MakeWT">7. Make Wound Tests</h4>
        <p>
          Once all Hit Tests for the selected Fire Group have been resolved, the
          Attacking Player totals the Hits in that Fire Group. That total
          determines the number of Wound Tests that must be made for the
          selected Fire Group. These Tests are then made by the Attacking
          Player. Note that to determine the Target Number for a Wound Test
          targeting a Unit that includes more than one Model, use the Toughness
          Characteristic that is in the majority in the Target Unit by counting
          the number of Models with each different value - the Bulky (X) Special
          Rule and Type of a Model have no effect on whether a Toughness
          Characteristic is in the majority, it is decided simply by the number
          of Models with a given Toughness Characteristic in the Unit. If two or
          more Toughness Characteristics are tied for majority, use the highest
          of these tied Characteristics.
        </p>
        <p>
          If the Shooting Attack is targeting a Unit of Models with the Vehicle
          Type then no Wound Tests are made. Instead an Armour Penetration Test
          is made in this Step for each Hit, using the Rules detailed
          <a href="" @click.prevent="scrollToSection('APT')">there</a>. If the
          Unit includes more than one Model then all Armour Penetration Tests
          are resolved using the Armour Facing determined as the Target in Step
          1. Any Armour Penetration Tests that result in a Penetrating Hit are
          considered successes and placed to one side until Step 8, while any
          that result in a Glancing Hit are placed aside until Step 11. Any
          Armour Penetration Tests that result in neither a Penetrating or
          Glancing Hit are considered failures and discarded.
        </p>
        <p>
          Once all Wound Tests have been made for the selected Fire Group, the
          successes are placed to one side and the failures are discarded. All
          wounds (successes generated by Wound Tests) remain in the Fire Groups
          that generate them - if all Wound Tests made for a Fire Group fail to
          generate any successes then that Fire Group is discarded and the
          Attacking Player must return to Step 5 and select a new Fire Group to
          resolve. Once all Wound Tests for the selected Fire Group have been
          resolved, move to the next Step.
        </p>

        <h4 id="SelTM">8. Select Target Model</h4>
        <p>
          Once the total number of wounds or Penetrating Hits generated by the
          current Fire Group has been decided, the Player that controls the
          Target Unit must select the initial Target Model.
        </p>
        <p>
          The Target Model may be any Model in the Target Unit - it does not
          have to be in Line of Sight or in range of any given Model in the
          Attacking Unit. If any eligible Model has already had its Wounds
          Characteristic or Hull Points Characteristic negatively modified
          (sometimes referred to as having ‘already lost Wounds’) but has not
          been removed from the Unit, then such a Model must be selected as the
          Target Model unless it also has the Paragon Type or the Command
          Sub-Type.. Note that if a Fire Group being resolved includes wounds,
          then the Target Model selected may not have the Vehicle Type, while if
          the Fire Group being resolved includes Penetrating Hits then the
          Target Model selected must have the Vehicle Type - if an appropriate
          Target Model cannot be selected then all remaining wounds or
          Penetrating Hits in the Fire Group are discarded. If a Fire Group
          includes both wounds and Penetrating Hits, then separate Target Models
          must be selected for each.
        </p>
        <p>
          Once a Target Model has been selected, the Players must move to Step
          9.
        </p>
        <div class="border">
          <h4 id="DNUTM">Designer's Note: Unlikely Target Models</h4>
          <p>
            The choice to allow the Target Model selected to be out of Line or
            Sight or range of certain Models may lead to situations where a
            Player can select a Model as the Target Model when there appears to
            be no practical way for it to have been hit. This is intentional,
            and a choice made for two reasons. Firstly and foremostly, it is
            simple and does not require us to track which Hits or wounds were
            caused by which specific Model, speeding up the process of resolving
            a Shooting Attack. Secondly, while Models remain in place during the
            Shooting Phase, the actual warriors they represent are constantly in
            motion - moving between shooting positions and to aid or cover their
            squad mates. We can assume within the narrative of the Battle, if
            not the exact position of the Models, that any number of
            explanations exist for how an unlikely Model becomes the target of
            enemy attacks.
          </p>
        </div>

        <h4 id="MSTaDMT">9. Make Saving Throws and Damage Mitigation Tests</h4>
        <p>
          In this step wounds and Penetrating Hits are applied to the Target
          Model from the Current Fire Group one at a time until either all
          wounds or Penetrating Hits in the Fire Group have been applied or the
          Target Model is removed from the unit as a Casualty.
        </p>
        <p>
          To apply a wound or Penetrating Hit, first determine if the Target
          Model may take a Saving Throw - note that a Model may attempt only one
          Saving Throw per wound applied, no matter how many may be available.
          If a Saving Throw is available, the Player controlling the Target
          Model may attempt one Saving Throw per wound or Penetrating Hit
          applied, and if the Saving Throw is successful, the wound or
          Penetrating Hit is discarded. If the Saving Throw is failed then the
          Player controlling the Target Model may attempt a Damage Mitigation
          Test, if any are available. If a Damage Mitigation Test is successful
          then the wound or Penetrating Hit is discarded, and if it is failed
          then an Unsaved wound or Unsaved Penetrating Hit is generated and
          applied to the Target Model.
        </p>
        <p>
          Wounds or Penetrating Hits that are applied and not discarded due to a
          successful Saving Throw or Damage Mitigation Test are referred to as
          Unsaved Wounds or Penetrating Hits. When applied, the Target Model
          must reduce its Wounds Characteristic or Hull Points Characteristic by
          an amount equal to the Damage Characteristic of the Unsaved Wound or
          Penetrating Hit (which is derived from the Weapon for which the Fire
          Group was created, but may have been modified by certain Special
          Rules). If the Target Model's Wounds Characteristic or Hull Points
          Characteristic is reduced to 0 or less then it is removed from the
          Unit as a Casualty and placed to one side (do not remove it from play
          until Step 11) and a new Target Model must be selected using the same
          process as when selecting the initial Target Model. If the Target
          Model's Wounds Characteristic or Hull Points Characteristic is not
          reduced to 0 or less then the Model remains in play and another wound
          or Penetrating Hit is applied to it, following the same procedure as
          the first.
        </p>
        <div class="border">
          <h4>Designer's Note: Batch Rolling Armour Saves</h4>
          <p>
            As with Hit Tests and Wound Tests, in most cases the Target Unit
            will be composed of Models that all have the same Saving Throws and
            Damage Mitigation Tests. Rather than applying wounds or Penetrating
            Hits one at a time, the Player that controls the Target Unit can
            simply make a Saving Throw for each wound or Penetrating Hit and
            then remove eligible Models. If Players choose to use this faster
            process then they may want to note any Models with different
            Wargear, such as banners or special Weapons, that would make them
            more valuable and roll any Saving Throws separately.
          </p>
        </div>
        <p>
          The Player that controls the Target Unit continues to allocate wounds
          or Penetrating Hits in this manner until either all Eligible Target
          Models in the Unit have been removed from the Target Unit as
          Casualties or there are no more wounds or Penetrating Hits remaining
          in the Fire Group. If there are any Fire Groups that have not yet been
          resolved and Models remain in the Target Unit then the Players move to
          Step 10, or if there are no more Fire Groups to resolve or all Models
          in the Target Unit have been Removed as Casualties then the Players
          must instead move to Step 11.
        </p>

        <h4 id="SelNFG">10. Select Next Fire Group</h4>
        <p>
          If more Fire Groups remain after one has been fully resolved then the
          Attacking Player must select a new Fire Group to resolve and return to
          Step 6.
        </p>

        <h4 id="RemC">11. Remove Casualties</h4>
        In this Step, all Models removed from the Target Unit as Casualties must
        be removed from play. If the number or type of Models removed would
        trigger a
        <a href="" @click.prevent="scrollToSection('MakePC')">Panic Check</a> or
        other Checks in the Morale Sub-Phase then a Marker should be placed by
        the Unit to indicate this. Models with the Vehicle Type that have
        suffered Glancing Hits should have one roll made for them on the Vehicle
        Damage Table for each Glancing Hit suffered in this Step.

        <h4 id="MorS">Morale Sub-phase</h4>
        <p class="bold">
          All Checks made to see if Units gain Statuses are made in this
          Sub-Phase by both the Reactive and Active Players.
        </p>
        <p>
          Once all Shooting Attacks have been resolved, any Checks required by
          either the Active or Reactive Player to decide if Statuses are applied
          to a Unit are made in this Sub-Phase. The following are the most
          common situations that require a Check to be made due to the results
          of a Shooting Attack:
        </p>
        <ul>
          <li>
            <span class="bold">Out of Coherency:</span> If the removal of Models
            as Casualties has left any Unit Out of Coherency, then a Cool Check
            must be made for that Unit by its Controlling Player. If this Check
            is failed then all Models in the Target Unit gain the Suppressed
            Status.
          </li>
          <li>
            <span class="bold">Panic:</span> If the number of Models removed
            from any Unit during any Shooting Attack was equal to 25% or more of
            the total number of Models in that Unit at the start of that
            Shooting Attack then a Leadership Check must be made for the Unit in
            this Sub-Phase. If this Check is failed then all Models in the
            Target Unit gain the Routed Status.
          </li>
        </ul>
        <p>
          There may be other Special Rules that, if Hits or wounds are inflicted
          on Models in the Target Unit, require other Checks to be made in order
          to avoid further Statuses being inflicted upon the Unit. The
          requirements and nature of such Checks will be detailed by the Special
          Rules in question.
        </p>
        <p>
          No Unit may have more than one Check made for it for a given Status in
          the Morale Sub-Phase, but can have different Checks made for it for
          multiple different Statuses. If more than one Rule would apply the
          same Status, then a single Check, chosen by the Active Player, is made
          and all others are ignored. If multiple Checks must be made for
          different Statuses affecting a single Unit, then checks to avoid
          gaining Routed are made first (and if failed, all other Checks are
          ignored and no further Statuses are gained) and then other Checks are
          made in an order chosen by the Active Player.
        </p>
        <p>
          The effects of any Statuses gained are applied at the end of this
          Sub-Phase and have no effect on attacks made during the Attack
          Sub-Phase.
        </p>
        <h3 id="assaultPhase">Assault Phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('AssT')"
              >Assault Terminology</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ChargeS')"
              >Charge Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ChargeP')"
              >Charge Procedure</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ChargeaS')"
              >Charged and Statuses</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DecT2')"
              >Declare Target</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CLoSaMCR')"
              >Check Line of Sight and Maximum Charge Range</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MSUM')"
              >Make Set Up Move</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SUMD')"
              >Set Up Move Distance</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DisCharge')"
              >Disordered Charge</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeVA')"
              >Make Volley Attacks</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DNVAatOR')"
              >Designer's Note: Volley Attacks and the Overwatch Reaction</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeCM')"
              >Make Charge Move</a
            >
          </li>
        </ul>
        <p class="bold">
          The Assault Phase is where the Active Player resolves Charges for the
          Units under their control and where both Players resolve Combats.
        </p>
        <div class="border">
          <h4 id="AssT">assault terminology</h4>
          <p>
            Throughout the Rules for the Assault Phase, there are several terms
            that are used repeatedly and bear explanation before any of those
            Rules are presented. These terms are as follows:
          </p>
          <p>
            <span class="bold">Assault</span> - The term 'Assault' or 'making an
            Assault' refers to the entire sequence that must be followed when a
            Player selects a Unit during the Assault Phase - beginning with a
            Charge and ending when a winner for the resulting Combat has been
            declared.
          </p>
          <p>
            <span class="bold">Combat</span> - A Combat is a referenbat is a
            reference to two or more Units conducting an ongoing struggle, where
            at least one Model from each Unit is in Base-to-Base Contact.
            Outside of the Assault Phase, a Combat is considered one entity and
            no other Unit may move through it or end a move within 1" of any
            Model in the Combat. No Unit in a Combat may be the target of any
            Shooting Attack.
          </p>
          <p>
            <span class="bold">Locked in Combat</span> - If the Assault Sequence
            ends and at least one Target Unit has neither been forced to Fall
            Back or been entirely Removed as Casualties, then the Units involved
            remain in place with at least one Model from each Unit in Base-to-
            Base Contact with an enemy Model. These Units are 'Locked in Combat'
            and may not be selected or moved in the Movement Phase or selected
            to make Shooting Attacks in the Shooting Phase. They may be selected
            during the Fight and Challenge Sub-Phases of the Assault Phase by
            the Active Player, but may not make a Charge or otherwise be
            selected in the Charge Sub-Phase.
          </p>
          <p>
            <span class="bold">Charge</span> - A 'Charge' is a special type of
            multi-stage move made during the Assault Sequence. Unlike a normal
            move, Models moved as part of any Step of a Charge may end the move
            in Base Contact with an enemy Model.
          </p>
        </div>
        <p>The Assault Phase is composed of the following Sub-Phases:</p>
        <ul>
          <li class="bold">Charge Sub-Phase.</li>
          <li class="bold">Challenge Sub-Phase.</li>
          <li class="bold">Fight Sub-Phase.</li>
          <li class="bold">Resolution Sub-Phase.</li>
        </ul>
        <p>
          Starting with the Charge Sub-Phase, each Sub-Phase must be completed
          in turn before proceeding to the next. The following Rules cover what
          to do in each Sub-Phase of the Assault Phase.
        </p>
        <h4 id="ChargeS">Charge Sub-phase</h4>
        <p class="bold">
          The Active Player may declare Charges in this Sub-Phase.
        </p>
        <p>
          During the Charge Sub-Phase, the Active Player may make Charge Moves
          with the Units under their control. However, there are a number of
          Rules and situations that make a Unit ineligible to make a Charge Move
          during the Charge Sub-Phase - the most common of which are:
        </p>
        <ul>
          <li>
            A Unit may not make a Charge Move in the Charge Sub-Phase if it
            Rushed in the Move Sub-Phase of the same Player Turn.
          </li>
          <li>
            A Unit may not make a Charge Move in the Charge Sub-Phase if it is
            Locked in Combat.
          </li>
          <li>
            A Unit may not make a Charge Move in the Charge Sub-Phase if it is
            Embarked upon another Model.
          </li>
          <li>
            A Unit that includes any Models with the Pinned or Routed Statuses
            may not make a Charge Move.
          </li>
        </ul>
        <p>
          Other Rules may also restrict a Unit from making a Charge Move during
          the Charge Sub-Phase - in all cases these Rules will specifically
          state this. The Controlling Player may also choose not to make a
          Charge Move with a Unit that would otherwise be eligible to do so.
        </p>
        <p>
          During the Charge Sub-Phase, the Active Player must select each of the
          Units under their control that are on the Battlefield and eligible to
          make a Charge Move in any order. For each eligible Unit, once it is
          selected, the Controlling Player must choose to either make a Charge
          Move for that Unit using the Rules that follow, or to declare that the
          selected Unit will make no Charge Move in the current Player Turn.
          Once all Units have been selected and either had a Charge Move made
          with them or had the Controlling Player choose not to do so, the
          Charge Sub-Phase ends and the Challenge Sub-Phase begins.
        </p>
        <p>To make a Charge Move, a Player must follow this procedure:</p>
        <h4 id="ChargeP">Charge Procedure</h4>
        <ul class="numeric">
          <li class="bold">Declare Target.</li>
          <li class="bold">Check Line of Sight and Maximum Charge Range.</li>
          <li class="bold">Make Set-up Move.</li>
          <li class="bold">Make Volley Attacks.</li>
          <li class="bold">Make Charge Move.</li>
        </ul>
        <div class="border">
          <h4 id="ChargeaS">Charged And Statuses</h4>
          <p>
            A Unit that includes Models with any Status may selected as the
            Target Unit for a Charge. A Charge targeting a Unit that includes
            Models with any Statuses is conducted as normal - except that a Unit
            that includes Models with any Status will suffer penalties in the
            Fight Sub-Phase if the Charge is successful (see
            <a href="" @click.prevent="scrollToSection('tacticalSt')"
              >the Rules for Statuses</a
            >).
          </p>
          <p>
            A Unit that includes any Models with the Pinned or Routed Statuses
            may not have a Charge declared for it, but a Unit that includes any
            Models with the Stunned or Suppressed Statuses can have a Charge
            declared for it. A Charge declared for a Unit that includes any
            Models with the Stunned or Suppressed Tactical Statuses is conducted
            as a Disordered Charge - and a Unit that includes Models with any
            Statuses will suffer additional penalties in the Fight Sub-Phase if
            the Charge is successful (see the
            <a href="" @click.prevent="scrollToSection('tacticalSt')"
              >the Rules for Tactical Statuses</a
            >).
          </p>
        </div>
        <p>
          As part of the Rules for conducting a Charge, the term 'Charging Unit'
          will be used to refer to the Unit whose Models will be making a
          Charge, while the term 'Charging Player' will be used to identify the
          Player that controls the Charging Unit. The term 'Target Unit' will be
          used to refer to the Unit that is selected as the Target for the
          Charge.
        </p>
        <h4 id="DecT2">1. Declare Target</h4>
        <p>
          Once the Charging Player has selected a Unit with which to conduct a
          Charge, this Step begins. In this Step, a Target Unit must be
          nominated by the Charging Player. The Target Unit that is nominated
          must be an enemy Unit. Once a Target Unit has been nominated, move to
          Step 2.
        </p>
        <h4 id="CLoSaMCR">2. Check Line of Sight and Maximum Charge Range</h4>
        <p>
          Once a Target Unit has been declared, first check that at least one
          Model in the Charging Unit has a valid Line of Sight to one or more
          Models in the Target Unit (see the Rules for
          <a href="" @click.prevent="scrollToSection('los')">Line of Sight</a>).
          If not then the Charging Player must return to Step 1 and select a new
          target or end the Charge process.
        </p>
        <p>
          If a valid Line of Sight exists to at least one Model in the Target
          Unit, the Charging Player must check the distance between the two
          closest Models in the Charging Unit and Target Unit that are in Line
          of Sight of each other. If that distance is equal to or less than 12"
          then the Players must move to Step 3. If the distance is greater than
          12" then the Charge cannot proceed and the Charging Player must either
          return to Step 1 and select a new target or end the Charge process for
          this Unit with no Charge made.
        </p>
        <h4 id="MSUM">3. make set up move</h4>
        <p>
          If the Charging Unit is within 12" of the Target Unit and can draw a
          valid Line of Sight then the Charging Player may choose to make a
          Set-up Move for the Charging Unit. A Set-up Move is the first of two
          possible moves made as part of a Charge and allows all Models in the
          Charging Unit to move a set distance directly towards the Target Unit.
          The distance moved in a Set-up Move by any given Model is decided by
          adding that Model's Initiative Characteristic to its Movement
          Characteristic and checking the Set-up Move Distance Table.
        </p>

        <div class="border">
          <h4 id="SUMD">set up move distance</h4>
          <p>
            To determine how far a Model must move as part of a Set-up Move, add
            the Current Value of the Model's Initiative Characteristic to the
            Current Value of that Model's Movement Characteristic and check the
            table below. Note that when making a Set-up Move the Model moving
            must move the maximum possible distance, or move until it enters
            Base Contact with a Model from the Target Unit.
          </p>
          <div class="minitable">
            <table class="unit-general__table">
              <thead>
                <tr>
                  <th>I+M</th>
                  <th>Move</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-6</td>
                  <td>1"</td>
                </tr>
                <tr>
                  <td>7-9</td>
                  <td>2"</td>
                </tr>
                <tr>
                  <td>10-11</td>
                  <td>3"</td>
                </tr>
                <tr>
                  <td>12-13</td>
                  <td>4"</td>
                </tr>
                <tr>
                  <td>14-19</td>
                  <td>5"</td>
                </tr>
                <tr>
                  <td>20+</td>
                  <td>6"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p>
          To make a Set-up Move, first determine the initial Model from the Unit
          making a Set-up Move. The initial Model is always the Model nearest to
          the Target Unit (as measured by the shortest possible route, going
          around Impassable Terrain, friendly Models and enemy Models in other
          Units).
        </p>
        <p>
          Once the initial Model has been determined, the Controlling Player
          moves that Model towards the nearest enemy Model in the Target Unit,
          using the shortest possible route and moving the maximum possible
          distance. A Set-up Move is not modified by Difficult Terrain, but
          rolls for Dangerous Terrain must still be made. If the Model is
          Removed as a Casualty by a Dangerous Terrain Test, the Controlling
          Player of the Unit making a Set-up Move must determine a new initial
          Model to move. Models making a Set-up Move may move within any
          distance of any enemy Model without penalty or restriction and may end
          the move in Base Contact with an enemy Model. However, no Model making
          a Set-up Move may move into Base Contact with an enemy from a Unit
          other than the Target Unit.
        </p>
        <p>
          After moving the first Model in the Unit, the remaining Models making
          a Set-up Move may be moved in any order, moving each Model as close to
          an enemy Model in the Target Unit as possible. However, Models making
          a Set-up Move must end that move in Unit Coherency with another Model
          from the same Unit that has already moved. If it is not possible to
          move and maintain Unit Coherency, Models making a Set-up Move must be
          moved as close as possible to another Model in the same Unit that has
          already moved instead.
        </p>
        <p>
          Once the Charging Player has either made a Set-up Move for all Models
          in the Charging Unit or chosen not to make a Set-up Move for any
          Models in that Unit, Step 3 ends. If any Models from the Charging Unit
          are now in Base Contact with any Models from the Target Unit then the
          Charge is complete and all further Steps are skipped (note this means
          that neither Volley Attacks or Overwatch Reactions may be made by the
          Target Unit). If no Models from the Charging Unit end this Step in
          Base Contact with any Model from the Target Unit then proceed to Step
          4.
        </p>
        <div class="border">
          <h4 id="DisCharge">disordered charge</h4>
          <p>
            In certain situations, a Charge may be deemed to be Disordered. A
            Unit making a Disordered Charge may not make a Set-up Move or Volley
            Attack (the Target Unit may still make a Volley Attack).
            Furthermore, a Unit making a Disordered Charge may never gain any
            bonus granted by Special Rules that require the Unit or Model to
            have successfully Charged an enemy Unit, nor may any Model in a Unit
            making a Disordered Charge attempt to Manifest a Psychic Blessing or
            Curse.
          </p>
          <p>
            Any Unit that has Disembarked from another Model in the same Turn as
            it has a Charge declared for it must make a Disordered Charge.
            Likewise, any Unit which includes Models with the Stunned or
            Suppressed Statuses that has a Charge declared for it must make a
            Disordered Charge.
          </p>
        </div>
        <h4 id="MakeVA">4. make volley attacks</h4>
        <p>
          Once any Set-up Move has been made (or the Charging Player has chosen
          not to make one), both the Charging Unit and/or the Target Unit may
          make Volley Attacks. Note that if the Target Unit is Locked in Combat
          with other Units, then neither Unit may make Volley Attacks or
          Overwatch Reactions. Units that include any Models with a Tactical
          Status may make Volley Attacks as normal. However, Units that include
          any Models with the Routed or Stunned Tactical Statuses may not have
          Overwatch Reactions declared for them.
        </p>
        <p>
          If Volley Attacks are made, then the Unit making a Volley Attack may
          make a Shooting Attack. This Shooting Attack uses all the Rules
          presented in the Rules for
          <a href="" @click.prevent="scrollToSection('shooting')"
            >Shooting Attacks</a
          >, except that only Weapons with the Assault Trait may be used and
          that all attacks are made as Snap Shots.
        </p>
        <p>
          The Charging Unit is used to make the first Shooting Attack, followed
          by the Target Unit. Although, either or both Players may opt not to
          make a Volley Attack for the Unit they control. The target of a
          Shooting Attack made in this Step must be either the Charging Unit or
          the Target Unit and no attack made as part of a Volley Attack may
          inflict any Statuses.
        </p>
        <p>
          Once all Volley Attacks have been made move to Step 5- unless all
          Models in the Charging Unit or the Target Unit have been Removed as
          Casualties. If this happens, the Charge process is ended immediately
          and the Active Player may select another Unit to resolve a Charge for.
        </p>
        <div class="border">
          <h4 id="DNVAatOR">
            Designer's Note: Volley Attacks and the Overwatch Reaction
          </h4>
          <p>
            The Overwatch Reaction may be declared as part of the Make Volley
            Attacks Step of the Charge procedure. If it is declared for the
            Target Unit, then it is not made in addition to a Volley Attack.
            Instead, it simply allows the Player controlling the Target Unit to
            use any Weapon in the Target Unit rather than just Weapons with the
            'Assault' Trait and to attack at full BS rather than as Snap Shots.
            Consider this Reaction an upgrade to the standard Volley Attack
            rather than a separate attack - one representing a few scattered
            shots made from the hip, while the other an organised attempt to set
            a firing line in the face of an enemy charge.
          </p>
        </div>
        <h4 id="MakeCM">5. make charge move</h4>
        <p>
          After all Volley Attacks and Overwatch Reactions have been resolved,
          the Charging Player must make a Charge Move. To make a Charge Move,
          the Charging Player must first make a Charge Roll, rolling two Dice
          and discarding the Dice which, once rolled, has the lowest result. The
          value of the remaining Dice is the result of the Charge Roll.
        </p>
        <p>
          If the Charge Roll's result is less than the distance between the
          closest Models in the Charging Unit and Target Unit that can draw Line
          of Sight to each other, then the Charge Roll is failed and no Charge
          Move is made. If no Charge Move is made then the Charging Unit must
          have a Cool Check made for it. If the Check is passed then there is no
          further effect, while if the Check is failed then all Models in the
          Charging Unit gain the Stunned Status.
        </p>
        <p>
          If the Charge Roll's result is equal to or greater than the distance
          between the closest Models in the Charging Unit and Target Unit that
          can draw Line of Sight to each other, then the Charge Roll has
          succeeded and a Charge Move is made. Unlike a Set-up Move, the Player
          controlling the Charging Unit may not choose not to make a Charge Move
          if the Charge Roll was successful. To make a Charge Move, first
          determine the initial Charger from the Charging Unit. The initial
          Charger is always the Model nearest to the Target Unit (as measured by
          the shortest possible route, going around Impassable Terrain, friendly
          Models and enemy Models in other Units).
        </p>
        <p>
          Once the initial Charger has been determined, the Controlling Player
          moves that Model towards the nearest enemy Model in the Unit being
          Charged, using the shortest possible route and moving up to a number
          of inches equal to the result of the Charge roll.
        </p>
        <p>
          A Charge Move is not modified by Difficult Terrain, but rolls for
          Dangerous Terrain must still be made for each Model that makes a
          Charge Move through Dangerous Terrain. Any Dangerous Terrain rolls
          must be made as soon as the Model has finished moving and before the
          next Model in the Unit is moved. If the Model is Removed as a Casualty
          by a Dangerous Terrain Test, the Controlling Player of the Charging
          Unit must determine a new initial Charger to move. Models making a
          Charge Move may move within any distance of any enemy Model without
          penalty or restriction and may end the move in Base Contact with an
          enemy Model.
        </p>
        <p>
          The initial Charger may not move into Base Contact with an enemy Model
          from a Unit other than the Target Unit, unless it is impossible for
          the initial Charger to contact an enemy Model from the Target Unit
          without also contacting an enemy Model from another Unit. After moving
          the first Model in the Unit, the Charging Player can move the
          remaining Models in any order, moving each Charging Model as close to
          an enemy Model in the Target Unit as possible. However, a Charging
          Model must end its Charge Move in Unit Coherency with another Model
          from the same Unit that has already moved. If it is not possible for a
          Charging Model to move and maintain Unit Coherency, move it as close
          as possible to another Model in its own Unit that has already moved
          instead. No Charging Model may move into Base Contact with an enemy
          Model from a Unit other than the Target Unit, unless it is impossible
          for that Model to contact an enemy Model from the Target Unit or
          retain Coherency with its own Unit without also contacting an enemy
          Model from another Unit.
        </p>
        <p>
          Once all Models in the Charging Unit have been moved, if at least one
          Model from the Charging Unit is in Base Contact with a Model from the
          Target Unit, then the two Units are Locked in Combat. However, if for
          any reason no Models in the Charging Unit end their Charge Move in
          Base Contact with an enemy Model then the Charge is considered to have
          failed and the Charging Unit is not Locked in Combat. If the Charge
          fails then the Charging Player must immediately make a Cool Check for
          the Charging Unit. If this Check is passed then there is no further
          effect. If this Check is failed then all Models in the Charging Unit
          gain the Stunned Status.
        </p>
        <p>
          In either case, this ends the Charge sequence for the current Unit and
          the Active Player should select another eligible Unit and resolve any
          Charges for that Unit from Step 1.
        </p>
        <h3 id="challenge">Challenge Sub-phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('DNHI')"
              >Heroic Intervention</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ChalP')"
              >Challenge Procedure</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DeclC')"
              >Declare Challenge</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TDS')"
              >The Disgreced Status</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FaceO')">Face-Off</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CoreG')"
              >Core Gambits</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Focus')">Focus</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CombIn')"
              >Combat Initiative</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('OutSup')"
              >Outside Support</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Strike')">Strike</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WinaC')"
              >Winning a Challenge</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CEaaD')"
              >Challenge Ends as a Draw</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Glory')">Glory</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RtCaCtU')"
              >Returning the Challenger and Challenged to Units</a
            >
          </li>
        </ul>
        <p class="bold">
          The Challenge Sub-Phase is where commanders and champions fight single
          combat Challenges.
        </p>
        <p>
          During the Challenge Sub-Phase, the Active Player may declare
          Challenges for eligible Models under their control. In order to be
          eligible for a Challenge to be declared for a Model, the following
          conditions must all be met:
        </p>
        <ul>
          <li>
            The Model must have the Paragon Type or Test the Foe Command or
            Champion Sub-Type or a Special Rule that otherwise allows it to take
            part in a Challenge.
          </li>
          <li>
            The Model must be Locked in Combat with at least one enemy Unit that
            includes an enemy Model eligible to take part in a Challenge.
          </li>
          <li>The Model must not be under the effects of the Routed Status.</li>
        </ul>
        <p>
          Other Rules may also restrict a Model from being eligible to take part
          in a Challenge - in all cases these Rules will specifically state
          this. The Controlling Player may also choose not to declare a
          Challenge for a Model that would otherwise be eligible to do so.
        </p>
        <div class="border">
          <h4 id="DNHI">Designer's Note: Heroic Intervention</h4>
          <p>
            Players may notice that these Rules allow only the Active Player to
            declare Challenges. However, this does not mean that if the Active
            Player chooses not to issue a Challenge that the Reactive Player has
            no option to force a confrontation. The Reactive Player can use the
            <a href="" @click.prevent="scrollToSection('HerIn')"
              >Heroic Intervention Reaction</a
            >
            to issue a Challenge even if the Active Player chooses not to.
          </p>
        </div>
        <p>
          During the Challenge Sub-Phase, the Active Player must select each
          Combat on the Battlefield, that includes one or more Units under their
          control and both a friendly and enemy Model eligible to take part in a
          Challenge, in any order. For each eligible Combat, once it is
          selected, the Active Player must follow the Challenge Procedure as
          follows - either issuing a Challenge and immediately resolving it, or
          choosing not to issue a Challenge and selecting the next Combat. Once
          all Combats have been selected and either had a Challenge declared for
          it and resolved or had the Controlling Player choose not to do so, the
          Challenge Sub-Phase ends and the Fight Sub-Phase begins.
        </p>
        <p>
          To Declare and Resolve a Challenge, the Active Player must follow
          these steps:
        </p>
        <h4 id="ChalP">challenge procedure</h4>
        <ul class="numeric">
          <li class="bold">Declare Challenge.</li>
          <li class="bold">Face-Off.</li>
          <li class="bold">Focus.</li>
          <li class="bold">Strike.</li>
          <li class="bold">Glory.</li>
        </ul>

        <h4 id="DeclC">1. Declare Challenge.</h4>
        <p>
          The Declare Challenge Step of the Challenge procedure starts when the
          Active Player selects a Combat that includes a Model under their
          control that is eligible to take part in a Challenge and at least one
          enemy Model that is also eligible to take part in a Challenge. A
          Combat may not be selected if it does not contain both a friendly and
          an enemy Model that is currently eligible to take part in a Challenge.
        </p>
        <p>
          Once a Combat is selected in this Step, then the Active Player must
          then choose to either issue a Challenge for that Combat or to pass and
          select another Combat using the criteria noted above. If no further
          Combats that include both an eligible friendly and enemy Model exist
          then the Challenge Sub-Phase ends and the Fight Sub-Phase begins.
        </p>
        <p>
          If a Player chooses to declare a Challenge for the selected Combat,
          that Player must then select one Model under their control in that
          Combat that is eligible to take part in a Challenge, that Model is
          considered the Challenger. The Opposing Player may then select one
          eligible Model under their control in the Combat to accept the
          Challenge. If the Opposing Player cannot or chooses not to select an
          eligible Model to accept the Challenge, then the Player which issued
          the Challenge must select one enemy Model from the same Combat which
          was eligible to accept the Challenge (if any such Model exists) and
          apply the Disgraced Status to that Model (no other Models in the same
          Unit gain the Status). The Active Player must then immediately select
          another eligible Combat as detailed above.
        </p>
        <div class="border">
          <h4 id="TDS">the disgreced status</h4>
          <p>
            A Model with the Disgraced Status has its Weapon Skill and
            Leadership Characteristics halved for the duration of the Assault
            Phase in which the Status is gained. All effects that would normally
            apply to a Unit that includes a Model with a Status affect any
            Models in the same Unit as a Model with the Disgraced Status -
            including being reduced to a Combat Initiative of 1. Unlike other
            Statuses, the Disgraced Status is automatically removed in the End
            Phase of the same Player Turn in which it was inflicted with no
            Check needed to remove it. Note that Models that would be unaffected
            by other Statuses are also unaffected by the Disgraced Status and
            the Disgraced Status can be removed before the End Phase by other
            Rules and effects that can remove Statuses.
          </p>
          <p>
            A Unit that includes Models with the Routed Status can include
            Models that have the Disgraced Status.
          </p>
        </div>
        <p>
          If the Opposing Player selects an eligible Model to take part in the
          Challenge, then that Model is considered the Challenged. Both the
          Challenger and Challenged are immediately removed from the Combat and
          placed in Base-to-Base Contact with each other before proceeding to
          Step 2 of the Challenge Sub-Phase.
        </p>
        <p>
          Any Models placed to one side as part of a Challenge should be placed
          out of the way of other Combats, Units and Models. For the duration of
          the Challenge Sub-Phase, they are considered to be out of play in the
          same manner as Units Embarked on another Model until the Resolution
          Sub-Phase when they are returned to the Unit they were originally part
          of. If removing the Challenger and Challenged Models would leave no
          other Models from the Units those Models were part of in Base Contact,
          then the Players must make
          <a href="" @click.prevent="scrollToSection('PileM')">Pile-in Moves</a
          >. Starting with the Active Player, all Models in both Units that are
          not taking part in the Challenge must make a Pile-in Move before
          moving to the next Step of the Challenge Process, Note that if at
          least one Model from each Unit remains in Base Contact with an enemy
          Model after the Challenger and Challenged are removed, then no Pile-in
          Move is made.
        </p>

        <h4 id="FaceO">2. Face-Off</h4>
        <p>
          Once a Challenge has been accepted and the Challenger and Challenged
          have been moved to one side, the Controlling Player of each Model may
          select one
          <a href="" @click.prevent="scrollToSection('CoreG')">Gambit</a> that
          will be applied to the Model under their control in the Challenge. In
          the first round of any Challenge, the Controlling Player of the
          Challenger selects the first Gambit. In every Round of a Challenge
          after the first, the Player that has Challenge Advantage selects the
          first Gambit.
        </p>
        <p>
          Once a Player has selected a Gambit, that Player applies any of its
          benefits or limitations before the Opposing Player selects a Gambit.
          However, if the selected Gambits' effects are contradictory then the
          Gambit selected by the Player with Challenge Advantage takes
          precedence, or if no Player has Challenge Advantage then the Gambit
          selected by the Active Player takes precedence. Note that once a
          Gambit has been selected, no other Models in the Challenge may select
          the same Gambit in the same Face-Off Step (if the Challenge lasts for
          more than one pass through the Challenge process, choices made in one
          Face-Off Step do not limit choices in any additional Face-Off Steps).
          Once all Models have had a single Gambit selected, or their
          Controlling Player has chosen not to select a Gambit, the Face-Off
          Step ends and Players move to the Focus Step.
        </p>
        <p>
          The following Gambits are available to all Models in a Challenge -
          note that some Factions or Unique Models may have access to additional
          Gambits specific to that Faction or Model.
        </p>
        <div>
          <h4 id="CoreG">core gambits</h4>
          <p>
            <span class="bold">Seize the Initiative</span> - If this Gambit is
            selected, then the Controlling Player may roll an additional Dice in
            the Focus Step and discard the Dice with the lowest result before
            determining the total.
          </p>
          <p>
            <span class="bold">Flurry of Blows</span>
            - If this Gambit is selected, then the Model controlled by the
            Player that selected this Gambit gains a bonus of +D3 to its Current
            Attacks Characteristic in the Strike Step, but any Hits inflicted by
            these attacks have their Damage Characteristic set to '1' and this
            may not be modified by any Special Rule (including Shred (X) or
            Critical Hit (X)).
          </p>
          <p>
            <span class="bold">Test the Foe</span>
            - If this Gambit is selected, then the Model for which it is
            selected gains no benefit in the Focus or Strike Steps, but if it is
            not Removed as a Casualty, the Controlling Player automatically
            gains Challenge Advantage at the start of the next Face-Off Step of
            the Challenge.
          </p>
          <p>
            <span class="bold">Guard Up</span>
            - If this Gambit is selected, the Model for which it was selected
            gains a bonus of +1 to their Weapon Skill Characteristic in the
            Strike Step, but may only make a single Attack regardless of their
            Attacks Characteristic. In the Strike Step, each attack made by the
            enemy Model that fails to Hit grants the Player that selected this
            Gambit a bonus of +1 to the next Focus Roll made if the Challenge is
            continued.
          </p>
          <p>
            <span class="bold">Taunt and Bait</span>
            - If this Gambit is selected, then the Model controlled by the
            Player that selected this Gambit has its Weapon Skill and Attacks
            Characteristics reduced to be equal to those of the enemy Model (or
            if their Characteristics were already equal, by an additional -1) in
            the Strike Step. However, for each time a Player has selected this
            Gambit in the current Challenge, they gain +1 Combat Resolution
            Point if they win that Challenge.
          </p>
          <p>
            <span class="bold">Grandstand</span>
            - If this Gambit is selected, then the Controlling Player must roll
            an additional Dice in the Focus Step and discard the Dice with the
            highest result before determining the total and the Model gains no
            bonus to the Focus Roll from Outside Support. However, in the Strike
            Step, the Model under that Player's control gains a bonus to their
            Attacks Characteristic equal to the Outside Support bonus they would
            normally have claimed in the Focus Step.
          </p>
          <p>
            <span class="bold">Feint and Riposte</span>
            - This Gambit may only be selected by the Player choosing the first
            Gambit in the Face-Off Step. Once selected, the Player that selected
            this Gambit may name any one other Gambit (including Faction
            Specific Gambits that the Player does not have access to) and the
            Opposing Player may not select that Gambit in this Face-Off Step.
          </p>
          <p>
            <span class="bold">Withdraw</span>
            - If this Gambit is selected, the Model for which it was selected
            may only make a single Attack regardless of their Attacks
            Characteristic during the Strike Step. However, in the Glory Step, a
            Player that has selected this Gambit may choose to end the
            Challenge, with no Combat Resolution Points scored by either Player,
            as long as the Model under their control has not been Removed as a
            Casualty during the Strike Step.
          </p>
          <p>
            <span class="bold">Finishing Blow</span>
            - If this Gambit is selected, then the Controlling Player must roll
            an additional Dice in the Focus Step and discard the Dice with the
            highest result before determining the total of that Focus Roll.
            However, a Model for which the Finishing Blow Gambit has been
            selected gains a bonus of +1 to the Strength and Damage
            Characteristics of all Hits inflicted in the Strike Step.
          </p>
        </div>

        <h4 id="Focus">3. Focus</h4>
        <p>
          At the start of the Focus Step, each Player must declare which Weapon
          the Model under their control will use to make attacks with in the
          Challenge. Each Player may select only one Weapon that the Model under
          their control has, and the Reactive Player must select a Weapon first.
        </p>
        <p>
          Once all Players have selected a Weapon for the Model under their
          control, a Focus Roll must be made for each Model by its Controlling
          Player. To make a Focus Roll, the Controlling Player of a Model rolls
          a Dice and adds any modifiers that apply from the list below:
        </p>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('CombIn')"
              >The Combat Initiative</a
            >
            score of each Model is added to the result of the Focus Roll made
            for that Model.
          </li>
          <li>A Model with the Heavy Sub-Type suffers a -1 modifier.</li>
          <li>
            A Model that has a current Wounds Characteristic lower than its base
            Wounds Characteristic suffers a -1 modifier for each point of
            difference between the Base Value and the Current Value.
          </li>
          <li>
            If a Model, or its chosen Weapon, has the Duellist’s Edge (X)
            Special Rule, it gains a positive modifier equal to the value of X.
          </li>
          <li>A Model with the Light Sub-Type gains a +1 modifier.</li>
          <li>
            A Model may gain a positive modifier from
            <a href="" @click.prevent="scrollToSection('OutSup')"
              >Outside Support</a
            >.
          </li>
        </ul>
        <div class="border">
          <h4 id="CombIn">Combat Initiative</h4>
          <p>
            Combat Initiative for a given Model is always equal to the Current
            Value of the Model's Initiative Characteristic modified by the
            Combat Initiative Characteristic of the Weapon being used. Where a
            Weapon's Initiative Modifier Characteristic is a positive or
            negative modifier (i.e., prefaced with a '+', or 'x' symbol), then
            it is combined with the Model's current Initiative Characteristic to
            determine that Model's Combat Initiative score. Where the Initiative
            Modifier Characteristic of a Weapon is a fixed value (with no symbol
            prefacing the number) then it replaces the current Initiative
            Characteristic of the Model to determine its Combat Initiative
            score. If a Weapon has an Initiative Modifier Characteristic of '1'
            then it applies no modifier to the Initiative Characteristic of the
            Model.
          </p>
          <p class="bold">For example:</p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of +2 has a Combat
            Initiative score of 6 (4+2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of -1 has a Combat
            Initiative score of 3 (4-1).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of x2 has a Combat
            Initiative score of 8 (4x2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of 2 has a Combat
            Initiative score of 2 (4 replaced by 2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of 'I' has a Combat
            Initiative score of 4 (4 unmodified).
          </p>
        </div>
        <p>
          Once both Players have rolled and totalled the results of the Focus
          Roll and all modifiers, the two totals are compared. The Player with
          the higher total gains Challenge Advantage and the Model under their
          control will attack first in the Strike Step and gains a bonus of +1
          to its Attacks Characteristic during that Strike Step only (if the
          Challenge is continued for additional Strike Steps, this bonus does
          not carry over). If the result of the Focus Roll is a tie, with both
          Players' total result the same, then both Players must make a new
          Focus Roll, doing so until one Player's total result is higher than
          that of the Opposing Player.
        </p>
        <p>
          Once the Focus Rolls have been made and Challenge Advantage decided,
          the Players must move to the Strike Step.
        </p>
        <h4 id="OutSup">outside support</h4>
        <p>
          A Player may claim an Outside Support bonus during the Focus Step if
          there are other Models under their control in the Combat from which
          the Challenger and Challenged were selected.
        </p>
        <p>
          For every five friendly Models in the same Combat as that from which
          the Challenger and Challenged were selected (from any Units Locked in
          that Combat), the Model gains a +1 bonus to the Focus Roll.
        </p>
        <p>
          Only Models that are Engaged may be counted, and Models affected by
          the Pinned, Stunned, Routed or Suppressed Statuses may not be counted.
          Models with the Vehicle or Automata Types may not be counted, while
          Models with the Walker Type count as five Models each for the purposes
          of this Rule.
        </p>
        <p>
          If one Player that has a Model Engaged in a Challenge controls other
          Models in the same Combat, but the other does not (i.e., that Player
          has only the Model Engaged in the Challenge under their control in
          that Combat), then a different procedure is used to calculate the
          Outside Support bonus. In such a case, the Player that controls Models
          other than the ones Engaged in the Challenge gains a bonus of +2 to
          the Focus Roll for each five Models, or fraction thereof, in the
          Combat under their control that are not Engaged in the Challenge.
          These Models do not need to be Engaged in order to be counted and may
          be counted even if they are affected by the Pinned, Stunned, Routed or
          Suppressed Statuses. However, Models with the Vehicle or Automata
          Types are still not counted.
        </p>

        <h4 id="Strike">4. Strike</h4>
        <p>
          Once the Focus Roll has been made and Challenge Advantage decided, the
          Player must make attacks in the Strike Step. The order in which Models
          attack is decided by which Player has Challenge Advantage - Initiative
          and Special Rules do not have any effect. Each Model's attacks will
          form a single
          <a href="" @click.prevent="scrollToSection('SetSG')">Strike Group</a>,
          but certain Special Rules may require that Strike Group be split
          during the Strike Step. All Strike Groups generated for the Player
          with Challenge Advantage must be resolved before any Strike Groups
          generated for the remaining Models are resolved.
        </p>
        <p>
          The Model with Challenge Advantage makes all of their attacks first,
          before the Opposing Model makes their own attacks. When making
          attacks, both Players must adhere to the following process:
        </p>
        <ul class="numeric">
          <li>
            <span class="bold">Make Hit Tests: </span>The attacking Player makes
            a number of Hit Tests equal to the Attacks Characteristic of the
            Model under their control, plus any modifiers from the Weapon
            selected or gained from Gambits or the Focus Roll. The Target Number
            for these Hit Tests is determined using the Weapon Skill of the
            opposing Model in the Challenge, not the majority Characteristic of
            the Unit that Model was part of.
          </li>
          <li>
            <span class="bold">Make Wound Tests: </span>Once all Hit Tests have
            been made, any successes generate Hits and a Wound Test must be made
            for each Hit by the attacking Player. The Target Number for these
            Wound Tests is determined using the Toughness of the opposing Model
            in the Challenge, not the majority Characteristic of the Unit that
            Model was part of. If the opposing Model has an Armour
            Characteristic instead of Toughness, then an Armour Penetration Test
            is made instead of a Wound Test. Any Armour Penetration Tests are
            made using the highest Armour Value of the opposing Model.
          </li>
          <li>
            <span class="bold"
              >Opposing Player makes Saving Throws and/or Damage Mitigation
              Tests:</span
            >: Once all Wound Tests have been made, any successes generate
            wounds. The Opposing Player may make one Saving Throw for each
            wound, if a Saving Throw can be made, with each successful Saving
            Throw causing one wound to be discarded. If any wounds remain after
            Saving Throws have been made the Opposing Player may take one Damage
            Mitigation Test per remaining wound, if a Damage Mitigation Test is
            available. Each successful Damage Mitigation Test causes one wound
            to be discarded.
          </li>
          <li>
            <span class="bold">Apply Damage from Unsaved Wounds: </span>Any
            wounds not discarded through Saving Throws or Damage Mitigation
            Tests become Unsaved Wounds. For each Unsaved Wound, the opposing
            Model must reduce its Wounds or Hull Points Characteristic by an
            amount equal to the Damage Characteristic of the Weapon used by the
            Model that inflicted the Unsaved Wound. If a Model's Wounds or Hull
            Points Characteristic is reduced to 0 or less then it is Removed as
            a Casualty.
          </li>
        </ul>
        <h4 id="WinaC">Winning a Challenge</h4>
        <p>
          If a Model engaged in a Challenge is Removed as a Casualty, then the
          Player controlling the remaining Model is the winner of that
          Challenge. When either or both Models are Removed as Casualties during
          a Challenge then the Players must move to the Glory Step immediately.
        </p>
        <h4 id="CEaaD">Challenge Ends as a Draw</h4>
        <p>
          If, after all attacks have been made for all Models engaged in the
          Challenge, neither the Challenger nor the Challenged has been Removed
          as a Casualty then the Challenge is a draw. The Controlling Player of
          the Model with Challenge Advantage may choose to either return to the
          Step 2 of the Challenge procedure and repeat steps 2,3 and 4 of that
          procedure again or to move to the Glory Step.
        </p>
        <p>
          In a given Challenge there is no limit to the number of times Steps 2,
          3 and 4 of the Challenge procedure may be repeated due to the
          Challenge being continued.
        </p>

        <h4 id="Glory">5. Glory</h4>
        <p>
          If, when the Glory Step is begun, either Model involved in the
          Challenge has been Removed as a Casualty then the Controlling Player
          of the remaining Model is the winner of the Challenge and gains a
          number of Combat Resolution Points equal to the Wounds Characteristic
          of the Model Removed as a Casualty (not the number of wounds
          inflicted, but the Base Wounds Characteristic) - this value is
          increased by +1 if the Model Removed as a Casualty had the Paragon
          Type or the Command Sub-Type.
        </p>
        <p>
          If neither Model has been Removed as a Casualty when the Glory Step is
          begun, then the Controlling Player of the Model that inflicted the
          most wounds on the other Model in this Challenge is the winner and
          gains a number of Combat Resolution Points equal to the number of
          wounds inflicted. The Controlling Player of the Model that is not the
          winner gains no Combat Resolution Points even though the Model has not
          been Removed as a Casualty.
        </p>
        <p>
          If neither Model was Removed as a Casualty and no wounds were
          inflicted, both Models were Removed as Casualties or both Players
          inflicted the same number of wounds, then the Challenge is a draw and
          neither Player gains Combat Resolution.
        </p>
        <p>
          Once the winner of the Challenge has been decided, the Players must
          return to Step 1 and select a new Combat to declare Challenges for (or
          if no eligible Combats remain, end the Challenge Sub-Phase and start
          the Fight Sub-Phase).
        </p>

        <div class="border">
          <h4 id="RtCaCtU">returning the challenger and challenged to units</h4>
          <p>
            Any Models which made attacks as part of the Challenge Sub-Phase,
            but are not Removed as Casualties must remain to one side until the
            Resolution Sub-Phase - after any Combats have been resolved in the
            Fight Sub-Phase. In Step 1 of the Resolution Sub-Phase, all Models
            that made attacks as part of the Challenge Sub-Phase are returned to
            the Unit that they were originally part of. They may be placed
            anywhere as long as they are in Unit Coherency with at least one
            other Model from the same Unit and must be Engaged with an enemy
            Unit if at all possible.
          </p>
          <p>
            If the Unit the Model was originally part of has been entirely
            Removed as Casualties during the Fight Sub-Phase then the Model must
            be placed in Base Contact with any enemy Model in the Unit that it
            was Locked in Combat with at the start of the Challenge Sub-Phase.
            In such a case, the Model returned to play is considered to remain
            Locked in the same Combat, retaining any Combat Resolution modifiers
            inflicted in both the Challenge Sub-Phase and Fight Sub-Phase. The
            Combat is then resolved as normal.
          </p>
          <p>
            Note that this means that Models that make attacks in the Challenge
            Sub-Phase will not be able to make attacks of kind during the
            following Fight Sub-Phase, nor may wounds be allocated to them
            during that Fight Sub-Phase. In some cases this may result in a Unit
            being 'Locked in Combat' but with no enemy Models to target with
            attacks during the Fight Sub-Phase. In such a case, no attacks are
            made during the Fight Sub-Phase, and those Models that remain on the
            Battlefield as part of that Combat may not make Pile-in Moves or
            otherwise move. After any Models that were Engaged in a Challenge
            are returned to their Units, the Combat is then resolved as normal –
            applying both any Combat Resolution Points from the Challenge as
            well as any applied due to the composition of the Unit, such as
            outnumbering or vexilla.
          </p>
          <div>
            <img src="../pct/challenge.png" alt="" class="img" />
          </div>
          <p class="italic">
            In the example pictured above, two Models, one Iron Warrior from
            Unit A and one Salamander from Unit B, have been removed to take
            part in a Challenge and must now be returned to the Units they were
            part of. The Models must be place in Unit Coherency with their Unit
            and must be Engaged Model for the Unit they were in Combat with if
            possible. No Model being returned to its Unit may be placed in base
            contact with any Model from Unit C.
          </p>
          <p class="italic">
            The Iron Warrior is returned to position 1, while the Salamander is
            returned to position 2. Both are in Coherency with at least one
            Model from their Unit and Engaged with an enemy Model. They are not
            required to be in base contact with another Model returned from the
            Challenge, nor in the same position they occupied before being
            removed to fight the Challenge.
          </p>
        </div>
        <h3 id="fight">Fight Sub-phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('FightS')"
              >Fight Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DetCU')"
              >Determine Combat Units</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DWaSIS')"
              >Declare Weapons and Set Initiative Steps</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TBCCW')"
              >The Basic Close Combat Weapon</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CombatI')"
              >Combat Initiative</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ResFIS')"
              >Resolve First Initiative Step</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('CRIS')"
              >Continue Resolving Initiative Steps</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeFPM')"
              >Make Final Pile-in Moves</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PileM')"
              >Pile-in Moves</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ResaIS')"
              >Resolving an Initiative Step</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DNSaCIS')"
              >Designer's Note: Statuses and Combat Initiative Score</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DecC')"
              >Declare Combatants</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MPMfC')"
              >Make Pile-in Moves for Combatants</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DecAM')"
              >Declare Angaged Models</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Engaged')">Engaged</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SetSG')"
              >Set Strike Groups</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SplitSG')"
              >Splitting Strike Groups</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakeWT')"
              >Make Wound Tests</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SSGaTM')"
              >Select Strike Group and Target Model</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MSTaDMR2')"
              >Make Saving Throws and Damage Mitigation Rolls</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DNUTM2')"
              >Designer's Note: Unlikely Target Models</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelNSG')"
              >Select Next Strike Group</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('RemC2')"
              >Remove Casualties</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ResS2')"
              >Resolution Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Massacres')"
              >Massacres</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('TCRP')"
              >Total Combat Resolution Points</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DecW')"
              >Declare Winner</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('MakePC')"
              >Make Panic Checks</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('Aftermath')"
              >Aftermath</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AftermathO')"
              >Aftermath Options</a
            >
          </li>
        </ul>
        <p class="bold">
          In the Fight Sub-Phase, Combats are resolved and Models make melee
          attacks.
        </p>
        <p>
          In the Fight Sub-Phase, the Active Player will select each Combat on
          the Battlefield in an order of their choosing and resolve a round of
          Combat. A round of Combat is a single pass through the Initiative
          Steps order, allowing all Models in the Units Locked in that Combat to
          make attacks. Only Units that begin the Fight Sub-Phase Locked in
          Combat may make attacks during the Fight Sub-Phase. If a Unit that was
          not Locked in Combat at the start of the Fight Sub-Phase becomes part
          of a Combat by any means, then the Models in that Unit may not make
          attacks as part of any Combat in the same Fight Sub-Phase.
        </p>
        <p>
          Once the Fight Sub-Phase has begun, the Active Player must select each
          Combat on the Battlefield, one at a time and in an order of the Active
          Player's choosing. For each Combat, once it is selected, the Players
          must resolve a round of Combat. Once that round of Combat has been
          resolved, the next Combat must be selected. Once all Combats have been
          selected once and a round of Combat resolved for it, the Fight
          Sub-Phase ends and the Resolution Sub-Phase begins.
        </p>
        <ul class="numeric">
          <li class="bold">Determine Combat Units.</li>
          <li class="bold">Declare Weapons and Set Initiative Steps.</li>
          <li class="bold">Resolve First Initiative Step.</li>
          <li class="bold">Continue Resolving Initiative Steps.</li>
          <li class="bold">Make Final Pile-in Moves.</li>
        </ul>
        <div class="border">
          <h4 id="FightS">fight sub-phase</h4>
          <p>
            <span class="bold">Combat Round</span> - A Combat Round is a single
            pass through all Initiative Steps used in a given Combat. In each
            Fight Sub-Phase a given Combat resolves a single Combat Round, and
            if any Models remain Locked in Combat then further Combat Rounds are
            resolved in later Player Turns.
          </p>
          <p>
            <span class="bold">Initiative Step</span> - A Combat Round is made
            up of Initiative Steps, each of which has a value assigned to it to
            show the order in which they are resolved. In each Initiative Step,
            Models whose Combat Initiative score is equal to the value of the
            Initiative Step may make attacks. Initiative Steps are always
            resolved in descending order, from highest to lowest. As such,
            Initiative Step 10 is resolved before Initiative Step 9. Models
            removed from Combat before the Initiative Step in which they can
            attack lose the opportunity to make attacks.
          </p>
          <p>
            <span class="bold">Combat Initiative Score</span> - A Model's Combat
            Initiative score is the combined value of that Model's current
            Initiative Characteristic and the Initiative Modifier Characteristic
            of the Weapon used to make attacks for that Model. It determines in
            which Initiative Step attacks may be made for that Model.
          </p>
        </div>
        <h4 id="DetCU">1. determine combat units</h4>
        <p>
          The first Step in resolving a Combat is to determine which Units are a
          part of that Combat. Where a Unit under the 1. Active Player's control
          has one or more Models in Base Contact with an enemy Model, it is
          considered to be Locked in Combat with the Unit that Model is part of.
          These two Units that are Locked in Combat form one Combat in the Fight
          Sub-Phase. If Models from a Unit under the Active Player's control are
          in Base Contact with Models from more than one enemy Unit, then that
          Unit is considered to be Locked in Combat with all of those enemy
          Units, forming a single Combat. Likewise, if more than one Unit under
          the Active Player's control has Models in Base Contact with Models
          from the same enemy Unit, then those Units are Locked in Combat and
          form a single Combat. The Players should determine which Units will be
          included in the selected Combat using these guidelines before moving
          to Step 2.
        </p>
        <div><img src="../pct/combat.png" alt="" class="img" /></div>
        <p class="italic">
          The example pictured above shows five Units at the start of the Fight
          Sub-Phase. These five Units are engaged in two distinct Combats.
          Marked in green are an Iron Warriors Tactical Squad and a Salamanders
          Tactical Squad. At least one Model from each of these Units is Engaged
          with an enemy Model from the other Unit and so these Units are Locked
          in Combat. Marked in yellow are an Iron Warriors Saturnine Terminator
          Squad and a Salamanders Tactical Support Squad. At least one Model
          from each of these Units is Engaged with an enemy Model from the other
          Unit and so these Units are Locked in Combat. No Models from the Units
          marked in green is engaged with any enemy Model marked in yellow and
          thus these two groups form separate Combats despite their proximity.
          Finally, an Iron Warriors Tactical Squad is marked in red, no Models
          from this Unit are Engaged with any enemy Model and so this Unit is
          not Locked in Combat.
        </p>
        <p>
          Note that any given Unit may only make attacks in one Combat per
          Assault Phase. If for any reason a Unit that has already made attacks
          as part of a Combat in the current Assault Phase is later included in
          another Combat, then the Models in that Unit may not make attacks when
          resolving that Combat.
        </p>
        <h4 id="DWaSIS">2. declare weapons and set initiative steps</h4>
        <p>
          Once all Units involved in the current Combat have been determined,
          the Player that controls each Unit must declare which Weapons will be
          used to make attacks for Models in that Unit. First, the Reactive
          Player must declare Weapons for all of the Models under their control
          in the Combat, and then the Active Player declares Weapons for all of
          the Models under their control in the combat. Each Model may have a
          single Melee Weapon selected by its Controlling Player, and all
          attacks made in this Combat for that Model must use the selected
          Weapon. If a Model has no Melee Weapons then all attacks for that
          Model must be made using the basic close combat weapon profile.
        </p>
        <div class="border">
          <h4 id="TBCCW">The Basic Close Combat Weapon</h4>
          <p>
            The basic close combat weapon represents a warrior kicking, punching
            and otherwise using their raw physical prowess and improvised
            weapons to inflict harm on the enemy. It may only be used when a
            Model has no Melee Weapons. A basic close combat weapon has the
            following profile:
          </p>
          <table class="profiles__weapon-table" v-if="windowWidth > 800">
            <thead>
              <tr>
                <th>IM</th>
                <th>AM</th>
                <th>SM</th>
                <th>AP</th>
                <th>D</th>
                <th>Special Rules</th>
                <th>Traits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>A</td>
                <td>S</td>
                <td>-</td>
                <td>1</td>
                <td>None</td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <!-- таблица для мобилок -->

          <div v-if="windowWidth < 800">
            <div
              class="grid-table"
              :class="{ 'grid-table__one': isClassActive }"
            >
              <!-- Первая строка -->
              <div class="grid-table__head cell">IM</div>
              <div class="grid-table__head cell">AM</div>
              <div class="grid-table__head cell">SM</div>
              <div class="grid-table__head cell">AP</div>
              <div class="grid-table__head cell">D</div>
              <div class="grid-table__head cell">Traits</div>

              <!-- Вторая строка -->
              <div class="cell">I</div>
              <div class="cell">A</div>
              <div class="cell">S</div>
              <div class="cell">-</div>
              <div class="cell">1</div>
              <div class="cell">
                <div class="first-letter"></div>
              </div>
              <!-- Третья строка -->
              <div
                class="full-span-cell grid-table__head left"
                style="grid-column: span 6"
              >
                Special Rules
              </div>

              <!-- Четвертая строка -->
              <div class="full-span-cell end-cell" style="grid-column: span 6">
                <div class="comma wrap">
                  <div>None</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          Once Weapons have been declared, Players should note the Initiative
          Steps that will be used in this Combat Round and which Models will
          make attacks in those Steps. To determine the number of Initiative
          Steps required in a Combat Round, first determine the Combat
          Initiative score of all Models in the Combat. Each Combat Round will
          include one Initiative Step for each Combat Initiative score among the
          Models making attacks as part of a Combat.
        </p>
        <p class="italic">
          For example, the Active Player controls a Unit that includes 9 Models
          with a Combat Initiative score of 4 and 1 Model with a Combat
          Initiative score of 1, while the Opposing Player controls a Unit that
          includes 5 Models with a Combat Initiative score of 5. The Round of
          Combat will include 3 Initiative Steps: an Initiative Step 5 first,
          then an Initiative Step 4 and then an Initiative Step 1 last.
        </p>
        <p>
          In each Combat Round, the Initiative Steps are resolved in order from
          highest value to lowest. Any Models that are Removed as Casualties
          before the Initiative Step in which they attack, cannot attack.
        </p>
        <div class="border">
          <h4 id="CombatI">combat initiative</h4>
          <p>
            Combat Initiative for a given Model is always equal to the Current
            Value of the Model's Initiative Characteristic modified by the
            Combat Initiative Characteristic of the Weapon being used. Where a
            Weapon's Initiative Modifier Characteristic is a positive or
            negative modifier (i.e., prefaced with a '+', ' or 'x' symbol), then
            it is combined with the Model's current Initiative Characteristic to
            determine that Model's Combat Initiative score. Where the Initiative
            Modifier Characteristic of a Weapon is a fixed value (with no symbol
            prefacing the number) then it replaces the current Initiative
            Characteristic of the Model to determine its Combat Initiative
            score. If a Weapon has an Initiative Modifier Characteristic of 'I'
            then it applies no modifier to the Initiative Characteristic of the
            Model.
          </p>
          <p class="span">For example:</p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of +2 has a Combat
            Initiative score of 6 (4+2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of -1 has a Combat
            Initiative score of 3 (4-1).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of x2 has a Combat
            Initiative score of 8 (4x2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of 2 has a Combat
            Initiative score of 2 (4 replaced by 2).
          </p>
          <p>
            A Model with a current Initiative Characteristic of 4 and a Weapon
            with an Initiative Modifier Characteristic of '1' has a Combat
            Initiative score of 4 (4 unmodified).
          </p>
        </div>
        <h4 id="ResFIS">3. resolve first initiative step</h4>
        <p>
          Once Initiative Steps have been determined, the first must be
          resolved. The first Initiative Step is always the one representing the
          highest Combat Initiative score. In each Initiative Step, those Models
          with the same Combat Initiative score as that Initiative Step will
          make attacks and then any Hits, wounds and Unsaved Wounds generated by
          those attacks will be resolved.The
          <a href="" @click.prevent="scrollToSection('ResaIS')">Rules</a> fully
          explain how to resolve an Initiative Step.
        </p>
        <h4 id="CRIS">4. continue resolving initiative steps</h4>
        <p>
          Once the first Initiative Step has been resolved, the remaining
          Initiative Steps (if there are more than one) are resolved one at a
          time. In all Combat Rounds, Initiative Steps are resolved starting
          with the one representing the highest Combat Initiative score and then
          in descending order. Each Initiative Step must be fully resolved using
          the
          <a href="" @click.prevent="scrollToSection('ResaIS')">Rules</a> before
          proceeding to the next.
        </p>
        <p>
          This Step is repeated until all Initiative Steps have been resolved.
          When no more Initiative Steps remain, the Players must move to Step 5.
        </p>
        <h4 id="MakeFPM">5. make final pile-in moves</h4>
        <p>
          Once all Initiative Steps for this Combat Round have been resolved,
          any Models from a Unit that is part of the Combat being resolved, but
          that are not in Base Contact with an enemy Model from a Unit that is
          part of the same Combat, must make a Pile-in Move.
        </p>
        <p>
          Once any Pile-in Moves have been made, the Combat Round for the
          selected Combat is complete.
        </p>
        <div class="unit__addiional-rules">
          <h4 id="PileM">pile-in moves</h4>
          <p>
            When a Model is required to make a Pile-in Move, the Model's
            Controlling Player must attempt to move the Model into Base Contact
            with an eligible enemy Model. The distance moved for a Pile-in Move
            is always equal to the current Initiative Characteristic of the
            Model making the Pile-in Move. If a Model that is required to make a
            Pile-in Move cannot end that move in Base Contact with an eligible
            target, then it must end the move as close as possible to an
            eligible target.
          </p>
          <p>
            Eligible targets for a Pile-in Move must be one of the following:
          </p>
          <ul>
            <li>
              Any enemy Model from the same Combat, if the Model making the
              Pile-in Move is Locked in Combat.
            </li>
            <li>
              Any enemy Model from a Unit that was the target of a Charge made
              for the Model making the Pile-in Move.
            </li>
            <li>
              Any enemy Model from a Unit that has had a Charge declared for it
              which targets the Unit that includes the Model making the Pile-in
              Move.
            </li>
          </ul>
          <p>
            If there are no eligible Models then no Pile-in Move is made and the
            Model remains in its current position. Models making a Pile-in Move
            may move within any distance of any enemy Model without penalty or
            restriction and may end the move in Base Contact with an enemy
            Model. Pile-in Moves are not modified by Difficult Terrain, but
            Dangerous Terrain Tests are made as normal.
          </p>
        </div>
        <h4 id="ResaIS">Resolving an Initiative Step</h4>
        <p class="bold">
          Initiative Steps are where attacks are made in Combat and will be the
          focus of the Fight Sub-Phase.
        </p>
        <p>
          Each Initiative Step is a self-contained stage which allows a set
          number of Models from Units Locked in the same Combat to make attacks.
          In each Initiative Step, only the Models with the same Combat
          Initiative score as the value attached to that Initiative Step may
          make attacks - for example, in Initiative Step 4 only Models with a
          Combat Initiative score of 4 could make attacks. To complete each
          Initiative Step, the Player must follow the procedure shown below:
        </p>
        <p>
          In all cases, each Initiative Step is resolved by following these
          Steps:
        </p>
        <ul class="numeric">
          <li class="bold">Declare Combatants.</li>
          <li class="bold">Make Pile-in Moves for Combatants.</li>
          <li class="bold">Declare Engaged Models.</li>
          <li class="bold">Set Strike Groups.</li>
          <li class="bold">Make Hit Tests.</li>
          <li class="bold">Make Wound Tests.</li>
          <li class="bold">Select Strike Group and Target Model.</li>
          <li class="bold">Make Saving Throws and Damage Mitigation Rolls.</li>
          <li class="bold">Select Next Strike Group.</li>
          <li class="bold">Remove Casualties.</li>
        </ul>
        <div class="border">
          <h4 id="DNSaCIS">
            Designer's Note: Statuses and Combat Initiative Score
          </h4>
          <p>
            A Model affected by any Status always makes attacks in Initiative
            Step 1, regardless of the Model's Combat Initiative score. This may
            not be changed by modifiers to Initiative, Combat Initiative score
            or by other Rules which modify the Initiative Step in which a Model
            may attack. This means that in most Combats, a Model affected by any
            Status will almost always attack last, if they survive that long...
          </p>
        </div>
        <h4 id="DecC">1. declare combatants</h4>
        <p>
          The first Step of any Initiative Step is to declare which Models will
          make attacks in that Initiative Step. Starting with the Active Player,
          both Players must indicate which of the Models under their control are
          eligible to make attacks in that Initiative Step. These Models are
          hereafter referred to as 'Combatants'.
        </p>
        <h4>2. make pile-in moves for combatants</h4>
        <p>
          In this Step, all Combatants that are not in Base Contact with an
          enemy Model must make a Pile-in Move. The Active Player makes Pile-in
          Moves for all Combatants under their control first, followed by the
          Reactive Player.
        </p>
        <h4 id="DecAM">3. declare angaged models</h4>
        <p>
          To make attacks in a given Initiative Step, a Combatant must be
          Engaged with at least one enemy Model in the same Combat. Starting
          with the Active Player, both Players must indicate which of the
          Combatants under their control are Engaged and will be making attacks.
        </p>
        <div class="border">
          <h4 id="Engaged">engaged</h4>
          <p>A Model is Engaged if either:</p>
          <ul>
            <li>
              That Model is in Base Contact with an enemy Model in the same
              Combat.
            </li>
            <li>
              That Model is no more than 2" from another Model in the same Unit
              which is in Base Contact with an enemy Model.
            </li>
          </ul>
        </div>
        <p>
          If the Models that are eligible to attack in a given Initiative Step
          are Engaged with Models from more than one enemy Unit, then the
          Controlling Player must also declare which enemy Unit will be the
          target of each Model that has more than one potential target. In such
          cases a specific Model is not declared as a target, just the enemy
          Unit - however, an enemy Unit may only be selected as a target for a
          Model that is Engaged with at least one Model from that Unit.
        </p>
        <h4 id="SetSG">4. set strike groups</h4>
        <p>
          All Players making attacks in the Initiative Step must establish one
          or more Strike Groups. Each Strike Group is comprised of all of the
          attacks made with Weapons of the same name by Combatants under a given
          Player's control. So, in an Initiative Step in which a Player intends
          to make attacks with both chainswords and power swords, that Player
          would have to divide the attacks made by Combatants under their
          control into two Strike Groups: one for chainswords and one for power
          swords.
        </p>
        <p>
          If a Weapon used to make any attacks has more than one profile, then
          attacks using different profiles must form different Strike Groups
          even though they are made with the same Weapon. Lastly, if the
          Combatants include Models with different Weapon Skill Characteristics,
          then Strike Groups must be further divided so that no Strike Group
          includes attacks made by Combatants with different Weapon Skill
          Characteristics.
        </p>
        <p>
          In a Combat where attacks in a given Strike Group are to be directed
          against two different enemy Units, then that Strike Group must be
          split. A separate Strike Group must be formed for attacks directed
          against each enemy Unit, so that no Strike Group contains attacks
          targeting more than one Unit. Note that Models which have joined a
          Unit, such as those with the Command or Specialist Sub-Types, are not
          considered separate Units for this purpose.
        </p>
        <h4 id="">5. Make hit tests</h4>
        <p>
          When making Hit Tests, all attacks in a Strike Group are rolled at the
          same time and their results kept separate from those of other Strike
          Groups. In all cases, the Active Player decides in which order the
          Strike Groups in an Initiative Step are resolved, but all attacks in a
          given Strike Group must be resolved before another Strike Group may be
          selected.
        </p>
        <div class="border">
          <h4>Designer's Note: Batch Rolling</h4>
          <p>
            In many cases, a number of Tests will need to be made that have
            identical Target Numbers and potential results. In such cases, it is
            entirely proper for all of those Dice to be rolled at once and then
            sorted into successes and failures - a practice known as batch
            rolling or 'fast dicing. It is up to the Player that is rolling to
            decide if they wish to roll each Test one at a time or to batch
            roll.
          </p>
        </div>
        <p>
          Once all Hit Tests have been made for a Strike Group, the successes
          are placed to one side and the failures are discarded. All Hits
          (successes generated by Hit Tests) remain in the Strike Groups that
          generate them - if a Strike Group results in no successes then that
          Strike Group is discarded and the Active Player must select another
          Strike Group to resolve. Once all Hit Tests for the selected Strike
          Group have been resolved, the Active Player must select another Strike
          Group to resolve, if Hit Tests have been resolved for all Strike
          Groups in this Initiative Step then the Players must move to the next
          Step.
        </p>
        <div class="border">
          <h4 id="SplitSG">splitting strike groups</h4>
          <p>
            Sometimes a Hit, wound or Unsaved Wound will gain a bonus to one of
            its Characteristics or gain a Special Rule depending on the results
            of a Hit Test or Wound Test (for example, due to the Breaching (X)
            Special Rule). At the end of the Step in which this occurs, the
            Player making the attacks must split that Strike Group into separate
            Strike Groups, one for unmodified Hits, wounds or Unsaved Wounds and
            a new Strike Group for the Modified Hits, wounds or Unsaved Wounds.
            The Strike Group which includes modified Hits, wounds or Unsaved
            Wounds is placed to one side and the Player making the attacks
            should continue to resolve the Strike Group that contains any
            Unmodified Hits, wounds or Unsaved Wounds. If no Unmodified Hits,
            wounds or Unsaved Wounds remain in that Strike Group then the Player
            making the attacks must instead continue to resolve the Strike Group
            for modified Hits, wounds or Unsaved Wounds from the Step where it
            was set aside. In all cases, where a Strike Group has been set aside
            after Step 5 and the Player resolving the attacks is instructed to
            select a new Strike Group to resolve, they must first select the put
            aside Strike Group before selecting any other Strike Group to
            resolve.
          </p>
        </div>
        <h4 id="MakeWT">6. make wound tests</h4>
        <p>
          Once all Hit Tests for all Strike Groups have been resolved, Wound
          Tests must be resolved for all Strike Groups. First, the Active Player
          selects a Strike Group. Then, the Player that controls the Models
          whose attacks comprise that Strike Group totals the Hits remaining in
          that Strike group, with the total determining the number of Wound
          Tests that must be made for that Strike Group. These Tests are made by
          the Player that controls the Models whose attacks make up that Strike
          Group.
        </p>
        <p>
          Note that to determine the Target Number for a Wound Test targeting a
          Unit that includes more than one Model, use the Toughness
          Characteristic that is in the majority in the Target Unit by counting
          the number of Models with each different value - the Bulky (X) Special
          Rule and Type of a Model have no effect on whether a Toughness
          Characteristic is in the majority, it is decided simply by the number
          of Models with a given Toughness Characteristic in the Unit. If two or
          more Toughness Characteristics are tied for majority, use the highest
          of these tied Characteristics.
        </p>
        <p>
          If the attacks in this Strike Group are targeting a Model with the
          Vehicle Type then no Wound Tests are made. Instead, an Armour
          Penetration Test is made for each Hit using the Rules detailed
          <a href="" @click.prevent="scrollToSection('APT')">there</a>. Note
          that during the Fight Sub-Phase, all Armour Penetration Tests for
          attacks targeting a Model with the Vehicle Type are made targeting the
          Rear Armour facing without regard to the placement of Models on the
          Battlefield. Any Armour Penetration Tests that result in a Penetrating
          Hit are considered successes and placed to one side until Step 7,
          while any that result in a Glancing Hit are placed aside until Step
          10. Any Armour Penetration Tests that result in neither a Penetrating
          or Glancing Hit are considered failures and discarded.
        </p>
        <p>
          Once all Wound Tests have been made for the selected Strike Group, the
          successes are placed to one side and the failures are discarded. All
          wounds (successes generated by Wound Tests) remain in the Strike
          Groups that generate them - if a Strike Group results in no successes
          then that Strike Group is discarded and the Active Player selects a
          new Strike Group to resolve. Once all Wound Tests for all Strike
          Groups have been resolved, move to the next step.
        </p>
        <h4 id="SSGaTM">7. Select Strike Group and Target Model</h4>
        <p>
          With all Wound Tests or Armour Penetration Tests resolved, the
          remaining Strike Groups must be divided into two sets - one for each
          Player, with each Player claiming those Strike Groups that target a
          Unit under their control. The Active Player must then select a Strike
          Group they have claimed. If the Active Player has claimed no Strike
          Groups or has already resolved all Strike Groups they had claimed,
          then the Opposing Player must select a Strike Group which they have
          claimed. If there are no Strike Groups to select then skip to Step 10
          of the Initiative Step procedure. Once a Strike Group has been
          selected, the Player that claimed it must select an initial Target
          Model.
        </p>
        <p>
          The Player that selects the initial Target Model, may select any Model
          in the Target Unit (the selected Model does not have to be a Combatant
          in the current Initiative Step). If any eligible Model has already had
          its Wounds or Hull Points Characteristic negatively modified
          (sometimes referred to as having already lost wounds') but has not
          been removed from the Unit, then that Model must be selected as the
          Target Model unless it also has the Command Sub-Type. Note that if the
          Attacking Player has inflicted only wounds, then the Target Model may
          not have the Vehicle Type, while if the Attacking Player has inflicted
          only Penetrating Hits then the Target Model must have the Vehicle Type
          - if an appropriate Target Model cannot be selected then all remaining
          wounds or Penetrating Hits are discarded. If the Attacking Player has
          inflicted both wounds and Penetrating Hits, then separate Target
          Models must be selected for them. If there is no eligible Model that
          may be selected as the Target Model then all remaining wounds or
          Penetrating Hits in the current Strike Group are discarded and a new
          Strike Group must be selected using the same Rules as those used to
          select the first.
        </p>
        <h4 id="MSTaDMR2">8. make saving throws and damage mitigation rolls</h4>
        <p>
          Once a Target Model has been selected, wounds or Penetrating Hits are
          applied to that Model from the Current Strike Group one at a time
          until either all wounds or Penetrating Hits in the Strike Group have
          been applied or the Target Model is Removed as a Casualty from the
          Unit.
        </p>
        <p>
          To apply a wound or Penetrating Hit, first determine if the Target
          Model may take a Saving Throw - note that a Model may attempt only one
          Saving Throw per wound applied, no matter how many may be available.
          If a Saving Throw is available, the Player controlling the Target
          Model may attempt one Saving Throw per wound or Penetrating Hit
          applied, and if the Saving Throw is successful the wound or
          Penetrating Hit is discarded. If the Saving Throw is failed, then the
          Player controlling the Target Model may attempt a Damage Mitigation
          Test, if any are available. If a Damage Mitigation Test is successful
          then the wound or Penetrating Hit is discarded, and if it is failed
          then an Unsaved Wound or Unsaved Penetrating Hit is generated and
          applied to the Target Model.
        </p>
        <p>
          Wounds or Penetrating Hits that are applied and not discarded due to a
          successful Saving Throw or Damage Mitigation Test are referred to as
          Unsaved Wounds or Unsaved Penetrating Hits. When applied, the Target
          Model must reduce its Wounds or Hull Points Characteristic by an
          amount equal to the Damage Characteristic of the Unsaved Wound or
          Penetrating Hit. If the Target Model's Wounds or Hull Points
          Characteristic is reduced to 0 or less then it is Removed as a
          Casualty from the Unit and placed to one side (do not remove it from
          play until Step 10) and a new Target Model must be selected using the
          same process as when selecting the initial Target Model. If the Target
          Model's Wounds or Hull Points Characteristic is not reduced to 0 or
          less then the Model remains in play and another wound or Penetrating
          Hit is applied to it, following the same procedure as the first.
        </p>
        <div class="border">
          <h4 id="DNUTM2">Designer's Note: Unlikely Target Models</h4>
          <p>
            The choice to allow the Target Model selected to be any Model in the
            Target Unit may lead to situations where a Player can select a Model
            as the Target Model when there appears to be no practical way for it
            to have been struck. This is intentional, and a choice made for two
            reasons. First and foremostly, it is simple and does not require
            Players to track which Hits or wounds were caused by which specific
            Model, speeding up the process of resolving attacks. Secondly, while
            Models remain in place during the Fight Sub-Phase, the actual
            warriors they represent are constantly in motion - pushing to and
            fro in the melee and exchanging blows with any enemies that come
            within reach. We can assume within the narrative of the Battle, if
            not the exact position of the Models, that any number of
            explanations exist for how an unlikely Model becomes the target of
            enemy attacks.
          </p>
        </div>
        <div class="border">
          <h4>Designer's Note: Batch Rolling Armour Saves</h4>
          <p>
            As with Hit Tests and Wound Tests, in most cases the Target Unit
            will be composed of Models that all have the same Saving Throws and
            Damage Mitigation Tests. Rather than applying wounds or Penetrating
            Hits one at a time, the Player that controls the Target Unit can
            simply make a Saving Throw for each wound or Penetrating Hit and
            then remove eligible Models. If Players choose to use this faster
            process then they may want to note any Models with different
            Wargear, such as banners or special Weapons, that would make them
            more valuable and roll any Saving Throws for those Models
            separately.
          </p>
        </div>
        <p>
          Wounds or Penetrating Hits continue to be allocated from the selected
          Strike Group in this manner until either all Eligible Target Models
          have been Removed as Casualties or there are no more wounds or
          Penetrating Hits remaining in the Strike Group. If there are any
          Strike Groups generated in this Initiative Step that have not yet been
          resolved then the Players move to Step 9, or if there are no more
          Strike Groups to resolve then the Players must instead move to Step
          10.
        </p>
        <h4 id="SelNSG">9. Select Next Strike Group</h4>
        <p>
          If more Strike Groups remain after one has been fully resolved then
          the Players must return to Step 7.
        </p>
        <h4 id="RemC2">10. remove casualties</h4>
        <p>
          Once all Strike Groups in the current Initiative Step have been fully
          resolved, all Models Removed as Casualties must be removed from play.
          Models with the Vehicle that have suffered Glancing Hits should have
          one roll made for them on the Vehicle Damage Table for each Glancing
          Hit in this Step. The number of Models removed should be noted for the
          Resolution Sub-Phase, ideally by placing a Dice or Marker to indicate
          this.
        </p>
        <p>
          Once all Casualties have been removed from play, the Initiative Step
          is complete and if there are more Initiative Steps in the Combat to
          resolve, the next one should be begun. If no more Initiative Steps
          remain to resolve, then the next Combat is begun or if no more Combats
          remain to resolve, then the Resolution Sub-Phase begins.
        </p>
        <p>
          If, once all Casualties have been removed from play, all enemy Models
          have been Removed as Casualties and only Models from a single side
          remain, that Combat is declared a Total Victory and those Units that
          remain are no longer considered Locked in Combat. See the Rules for
          <a href="" @click.prevent="scrollToSection('Massacres')">Massacres</a
          >.
        </p>
        <h4 id="ResS2">resolution sub-phase</h4>
        <p class="bold">
          In the Resolution Sub-Phase, all Combats that had a Combat Round
          fought for them must go through the Combat Resolution process. This
          will determine if the Units remain Locked in Combat or if the Units
          leave Combat.
        </p>
        <p>
          In the Resolution Sub-Phase, the first Step is to return any Models
          removed from their Units to take part in Challenges to the Unit they
          were part of. The Rules for doing so are detailed
          <a href="" @click.prevent="scrollToSection('challenge')">there</a>.
          Once all Models from Challenges have been returned to their Units, the
          Active Player must select each Combat for which a Combat Round was
          fought in that Assault Phase. The Combats may be selected in an order
          of the Active Player's choosing. Once selected, the Players must
          resolve the Combat Resolution process for that Combat, and once
          complete the Active Player selects another eligible Combat. The
          Resolution Sub-Phase ends when all Combats for which a Round of Combat
          was fought have been through the Combat Resolution process.
        </p>
        <div class="border">
          <h4 id="Massacres">massacres</h4>
          <p>
            Sometimes, a Combat Round may result in all Models under one
            Player's control being Removed as Casualties, leaving the surviving
            Units no longer Locked in Combat. This is referred to as a Massacre.
            Any Unit or Units that remain after a Massacre may be selected
            during the Resolution Sub-Phase, but do not use the normal Combat
            Resolution process and instead skip to Step 4 and must Consolidate.
          </p>
          <p>
            Note that it is not considered a Massacre if all Models that are
            part of a Unit in the Fight Sub-Phase are Removed as Casualties, but
            a Model that was taking part in a Challenge is 'returned' to that
            Unit at the start of the Resolution Sub-Phase. In such a case the
            Combat Resolution Process is resolved as normal, retaining all
            Combat Resolution Points scored as a result of Casualties inflicted
            during the Fight Sub-Phase and Challenge Sub-Phase.
          </p>
        </div>
        <p>The Combat Resolution process consists of the following Steps:</p>
        <ul class="numeric">
          <li class="bold">Total Combat Resolution Points.</li>
          <li class="bold">Declare Winner.</li>
          <li class="bold">Make Panic Checks.</li>
          <li class="bold">Aftermath.</li>
        </ul>
        <h4 id="TCRP">1. total combat resolution points</h4>
        <p>
          For the selected Combat, each Player should total the Combat
          Resolution Points scored by all Units under their control in that
          Combat. Combat Resolution Points are scored for the following:
        </p>
        <ul>
          <li>
            1 Combat Resolution Point is scored for each enemy Model Removed as
            a Casualty in that Combat during the Fight Sub-Phase.
          </li>
          <li>
            The Player who currently controls the most Models in the selected
            Combat scores 1 Combat Resolution Point.
          </li>
          <li>
            The result of Challenges may grant
            <a href="" @click.prevent="scrollToSection('Glory')"
              >Combat Resolution Points</a
            >.
          </li>
          <li>
            Certain Wargear items and Special Rules may also allow a Player to
            score additional Combat Resolution Points.
          </li>
        </ul>
        <p>
          Note that in a Combat where either Player controls more than one Unit,
          a single total of Combat Resolution Points is determined, with all
          Units under that Player's control contributing towards it. This single
          total will decide the fate of all Units that Player controls in the
          Combat rather than determining a separate total for each Unit.
        </p>
        <h4 id="DecW">2. Declare Winner</h4>
        <p>
          Once Combat Resolution Point Totals have been determined for all
          Players that control one or more Units in the selected Combat, the
          winner is declared. The Player that has scored the highest total of
          Combat Resolution Points is the winner and the Opposing Player is the
          loser. If two or more Players have scored the same number of Combat
          Resolution Points then the Combat is a tie and there is no winner or
          loser.
        </p>
        <p>
          If a winning Player is declared then proceed to Step 3, if the Combat
          was declared a tie then proceed to Step 4.
        </p>
        <h4 id="MakePC">3. make panic checks</h4>
        <p>
          The Player that loses a Combat must make a single Leadership Check.
          The Check uses the majority Leadership of the Unit under that Player's
          control in the Combat. If the Player controls more than one Unit in
          the same Combat then they must select one Unit and use the Leadership
          Characteristic of the majority of Models in that Unit for the Check.
          If any Unit under the losing Player's control includes one or more
          Models with the Command Sub-Type or Sergeant Sub-Type then the
          Leadership Characteristic of any such Model may be used for the Check
          instead. In addition, the difference between the Combat Resolution
          Points totals of the winning Player and the losing Player is applied
          as a negative modifier to the Leadership Characteristic being used to
          make this Leadership Check.
        </p>
        <p>
          If the Leadership Check is failed then all Models in the Combat under
          the control of the Player that lost the Combat gain the Routed Status.
          If the Check is passed, there is no further effect. If all the Models
          under the losing Player's control in the Combat already have the
          Routed Status then no Leadership Check should be made, and the Models
          remain under the effects of the Routed Status.
        </p>
        <p>
          Once the losing Player has resolved this Leadership Check, proceed to
          Step 4.
        </p>
        <h4 id="Aftermath">4. aftermath</h4>
        <p>
          In this Step, the Players must select an option for each Unit under
          their control in the Combat. Each Unit may have a different option
          selected for it, but Units will have the options available to them
          limited depending on whether the Controlling Player won or lost the
          Combat and the choices made for other Units. The losing Player must
          declare which options they have selected for all Units under their
          control in the Combat before the winning Player makes any choices. If
          the Combat resulted in a draw, then the Active Player may choose which
          Player selects options first. The options available are as follows:
        </p>
        <ul>
          <li>
            A Unit that includes any Models with the Routed Status must Fall
            Back.
          </li>
          <li>
            Any Unit that does not include any Models with the Routed Status may
            choose to Hold, Disengage* or Fall Back.
          </li>
          <li>
            If all enemy Units are Falling Back or Disengaging, the Player that
            won the Combat may choose to have any Unit under their control in
            the Combat Pursue, Gun Down or Consolidate.
          </li>
        </ul>
        <p class="italic">
          *Disengage may only be selected if the Unit for which it is chosen has
          lost the Combat, not if that Unit won or drew the Combat.
        </p>
        <h4 id="AftermathO">aftermath options</h4>
        <p>
          <span class="bold">Hold</span> - All Models in a Unit that Holds must
          make an immediate Pile-in Move and if any of its Models are in Base
          Contact with an enemy Model, the Unit remains Locked in Combat.
        </p>
        <p>
          <span class="bold">Disengage</span> - A Unit that Disengages must make
          an immediate Disengage Move. To make a Disengage Move, the Controlling
          Player of the Unit must move each Model in the Unit a distance equal
          to the Model's Movement Characteristic. This move can be made in any
          direction, as long as each Model moving is moving away from any enemy
          Models that are part of the Combat the Model is Disengaging from. If
          the Model cannot move without moving closer to such an enemy Model
          then a Disengage Move may not be made for the Unit that Model belongs
          to and the Unit must instead Hold (see above). Each Model moved must
          end its move in Unit Coherency with at least one other Model from the
          same Unit and may not end the move in Base Contact with any enemy
          Model. If, for any reason, a Unit ends a Disengage Move with any
          Models in that Unit out of Unit Coherency or in Base Contact with an
          enemy Model, then all Models in the Unit gain the Routed Status.
        </p>
        <p>
          Models making a Disengage move can freely move through all enemy
          Models that are Locked in the same Combat. This is an exception to the
          normal Rules for moving that state a Model cannot move through any
          area within 1" of an enemy Model or any Model Locked in Combat. If any
          Models making a Disengage Move from a Combat would end their move less
          than 2" from an enemy Model still Locked in that Combat, extend the
          Disengage move by the minimum amount needed for that Model to end its
          Move more than 2" from any enemy Model. Models making a Disengage Move
          have the distance they Move reduced as normal by Terrain and must take
          Dangerous Terrain Tests as normal.
        </p>
        <p>
          <span class="bold">Fall Back</span> - All Models in the Unit gain the
          Routed Status if they did not already have it. Units with the Routed
          Status must then make an immediate
          <a href="" @click.prevent="scrollToSection('FalB')">Fall Back Move</a
          >.
        </p>
        <p>
          <span class="bold">Consolidate</span> - All Models in the Unit may
          move a number of inches equal to their Initiative Characteristic in
          any direction, but must end this move in Unit Coherency and at least
          2" from any enemy Model. The distance moved as part of the Consolidate
          option cannot be modified by Terrain-but Dangerous Terrain Tests are
          made as normal.
        </p>
        <p>
          <span class="bold">Gun Down</span> - The Unit may make a Shooting
          Attack targeting any one enemy Unit that has Fallen Back from the
          selected Combat. This attack is considered a Volley Attack for Rules
          that affect such attacks and attacks may only be made in this Shooting
          Attack using Weapons with the Assault Trait.
        </p>
        <p>
          <span class="bold">Pursue</span> - Roll a single Dice for each Unit
          that has been chosen to Pursue. Each Model in a Pursuing Unit must
          move a number of inches equal to their Initiative Characteristic,
          added to the result of the Dice rolled for the Unit that Model is part
          of, directly towards the nearest enemy Model from a Unit that has made
          a Fall Back Move from the selected Combat. If any Model from the Unit
          that is Pursuing ends its move in Base Contact with an enemy Model,
          then it is considered to have made a successful Charge and is Locked
          in Combat with the Unit that includes that enemy Model.
        </p>
        <div>
          <img src="../pct/pursue.png" alt="" class="img" />
          <p class="italic">
            In the example pictured above the Unit marked in green has beaten
            the Unit marked in yellow. The yellow marked Unit has Fallen Back,
            while the green marked Unit will Pursue. The red marked Unit was not
            a part of the Combat. All Models in the green marked Unit must move
            directly towards Models in the yellow marked Unit when making their
            Pursue Move and cannot move towards Models in the red Marked Unit
            even though it is closer.
          </p>
        </div>
        <h3 id="end">The End Phase</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('TES2')"
              >The Effects Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('StatS')"
              >Statuses Sub-phase</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('VicS')"
              >Victory Sub-phase</a
            >
          </li>
        </ul>
        <p class="bold">The End Phase is the last Phase of any Player Turn.</p>
        <p>
          This Phase is used to adjudicate the start and end of certain effects
          and Rules. When the End Phase has been completed, the Player Turn
          ends. If this is the second Player Turn of this Battle Turn then the
          Battle Turn also ends (each Battle Turn consisting of two Player
          Turns, one for each Player). The Players must now begin a new Player
          Turn, with the current Reactive Player now taking the role of Active
          Player and the current Active Player taking the role of Reactive
          Player.
        </p>
        <p>
          Players must continue to take Turns until the number of Battle Turns
          specified in the Mission being played has been reached, in which case
          the Battle ends.
        </p>
        <h4 id="TES2">the effects sub-phase</h4>
        <p class="bold">
          Effects which begin or end 'at the end of the Turn' begin or end in
          this Sub-Phase.
        </p>
        <p>
          All Rules whose effects either begin or end at the 'End of a Player's
          Player Turn' start or end in this Sub-Phase. The effects of those
          Rules will either end in this Sub-Phase and have no further effect on
          any Model or start in this Sub-Phase and only apply their effects once
          it has ended.
        </p>
        <p>
          If the removal or application of any effects triggered by this
          Sub-Phase require any Tests or Checks then those are made in this
          Sub-Phase as instructed by the Rule that applies them. The Active
          Player decides the order in which any such Tests or Checks are made.
        </p>
        <p>
          Additionally, in this Sub-Phase, if the Reactive Player has any
          unspent Reaction Points then they must all be discarded and never
          'carry over' to another Turn.
        </p>
        <h4 id="StatS">statuses sub-phase</h4>
        <p class="bold">
          In this Sub-Phase, the Active Player makes Checks to remove Statuses
          from their Units.
        </p>
        <p>
          In this Sub-Phase, any Checks to remove ongoing Statuses suffered by
          Units under the Active Player's control are made. The Active Player
          must select any one Unit under their control that has one or more
          Statuses and make any Checks or Repair Tests allowed to remove those
          Statuses. Once all Checks or Repair Tests allowed for the selected
          Unit have been resolved, the Active Player must select another Unit
          under their control that has one or more Statuses and continue this
          process until all Units under their control that have one or more
          Statuses have had any required Checks or Repair Tests made for them.
        </p>
        <h4 id="VicS">victory sub-phase</h4>
        <p class="bold">
          In this Sub-Phase, the Active Player scores Victory points from
          certain Objectives
        </p>
        <p>
          In this Sub-Phase, certain Mission specific Rules, such as controlling
          objectives, will allow the Active Player to score Victory Points in
          this Sub-Phase. In all cases, the specific Mission Special Rules will
          state what conditions must be fulfilled to score Victory Points during
          the Victory Sub-Phase and how many Victory Points are scored.
        </p>
        <h2 id="BitAoD">Battles in the Age of Darkness</h2>

        <h3 id="prepearing">Prepearing for battle</h3>
        <p class="bold">
          This section provides advice for engaging with the Age of Darkness
          hobby and examples for collecting armies in the Age of Darkness.
        </p>
        <h4>models of play</h4>
        <p>
          Over the following pages, you'll find an array of different Rules and
          guidelines to suit all hobbyists, from collectors who play occasional
          games, enthusiastic newcomers playing games with unknown opponents,
          groups of hobbyists who regularly meet up with their friends, to
          veteran gamers who have spent years honing their forces for
          competitive matches.
        </p>
        <p>
          The Core Rules are everybody's starting point but, as everyone enjoys
          the Warhammer hobby in different ways, this section of the book
          introduces a variety of ways to approach your games, as well as the
          various themes and narrative campaigns that are presented in other
          Horus Heresy publications. Each offers an alternative experience, but
          it's important to note that elements of each can be mixed and matched
          to create whatever kind of gaming experience you want - they are a
          toolbox, providing inspiration and options to get the Dice rolling and
          allow you to play with your collection of Citadel and Forge World
          miniatures on the tabletop.
        </p>
        <p>
          You will also find a guide to building Battlefields, the Rules for
          creating your Army, and the Core Mission Packs which make up the
          standard mode of play. So, whether you are looking to wage war in one
          of the myriad deadly environments of the galaxy, play a team game, or
          fight Battles as part of an escalating narrative campaign, there are
          numerous ways of playing to enable you to do so.
        </p>
        <p>A galaxy of war awaits you!</p>
        <div class="border">
          <h4>Designer's Note: The Changing Face of War</h4>
          <p>
            Veteran Players may note a few key differences from older iterations
            of the venerable Force Organisation concept. These are worth noting
            to avoid confusion, the key differences are:
          </p>
          <ul>
            <li>
              <span class="bold">No Compulsory Slots</span> - You are no longer
              forced to select certain Units in a Detachment, but may instead
              only select those you want - as long as each Detachment includes
              at least one Unit.
            </li>
            <li>
              <span class="bold">
                No Vehicle Squadrons or Dreadnought Talons</span
              >
              - Each Dreadnought or Vehicle Unit now consists of only a single
              Model, but it is now easier to tailor your list to include more
              Armour or War-engine Slots.
            </li>
            <li>
              <span class="bold">No Dedicated Transports</span> - Now Transports
              have their own Battlefield Role and are not limited on which Units
              they can transport.
            </li>
            <li>
              <span class="bold">Retinue Units</span> - These are now a separate
              Unit rather than being part of the commander's choice.
            </li>
            <li>
              <span class="bold">Variable Detachments </span> - The number of
              Detachments available is now determined by Command and High
              Command Choices.
            </li>
            <li>
              <span class="bold"> Prime Slots</span> - These offer benefits for
              filling certain Slots and encourage more balanced Army building.
            </li>
          </ul>
          <p>
            Overall, the changes are intended to make it easier to build Armies
            the way a Player wants and to add a certain level of 'game' to the
            process of Army building. Selecting an Army should be a core part of
            the hobby, something built of hard choices and meaningful options,
            but not forcing Players to use one build or feel like they have done
            it wrong. Hopefully, we've made these things more true this edition.
          </p>
        </div>
        <h3 id="armies">Armies in the Age of Darkness</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('CASR2')"
              >Crusade Army Selection Rules</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SPL')"
              >Set Points Limit</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelM')"
              >Select Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SAALaFfPD')"
              >Select Allegiance, Army List and Faction for Primary
              Detachment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('FFOSitPD')"
              >Fill Force Organisation Slots in the Primary Detachment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SaFAD')"
              >Select and Fill Additional Detachment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ComAR')"
              >Complete Army Roster</a
            >
          </li>
        </ul>
        <p class="bold">
          This section details how to select a balanced Army for use in the
          various Horus Heresy: Age of Darkness Mission Packs. Note that to use
          this section you will need one or more of the Liber books which
          contain Army lists and Faction Rules.
        </p>
        <p>
          The great Battles of the Horus Heresy were not fought between
          disorganised mobs of warriors, but between the marshalled strength of
          the Space Marine Legions, the Imperial Army and other forces loyal
          either to the Emperor or his treacherous son, Horus. Likewise, the
          collection of Forge World and Citadel miniatures you use to resolve
          Battles of the Horus Heresy - Age of Darkness will need to be
          organised into cohesive forces in order to properly represent the
          engagements of this devastating conflict. These forces are called
          Armies. In a game the Horus Heresy - Age of Darkness, each Player will
          control a single Army. Each Army is selected by the Player that
          controls it to suit both their tactical and aesthetic preferences.
          While Players can choose to simply make use of whichever Models in
          their collection they feel are appropriate, most Missions require that
          each Player taking part in a Battle control an Army selected using the
          Crusade Army Selection Rules. The Crusade Army Selection Rules require
          all Armies be selected in a fixed manner and to a maximum Points Value
          dictated by the Mission in use, ensuring that Battles offer a fair
          challenge to all Players involved. The Crusade Army Selection Rules
          require the use of one or more Army Lists - these can be found in the
          various Liber books and at least one of these books will be required
          to use these Rules.
        </p>
        <h4 id="CASR2">crusade army selection rules</h4>
        <p>
          When selecting an Army using the Crusade Army Selection Rules, the
          following process must be followed by all Players. Each Step should be
          completed in order before moving on to the next.
        </p>
        <ul class="numeric">
          <li class="bold">Set Points Limit.</li>
          <li class="bold">Select Mission.</li>
          <li class="bold">
            Select Allegiance, Army List and Faction for Primary Detachment.
          </li>
          <li class="bold">
            Fill Force Organisation Slots in the Primary Detachment.
          </li>
          <li class="bold">Select and Fill Additional Detachments.</li>
          <li class="bold">Complete Army Roster.</li>
        </ul>
        <p>
          These Rules assume that Players select an Army for a specific Battle,
          doing so as part of an event where they plan to resolve that Battle.
          However, some Players may prefer to select an Army with no specific
          event or opponent in mind, and have that Army and roster ready for
          play once an event is arranged. In such cases simply omit Step 2 from
          the process, it is further advised that when selecting 'general use'
          Armies, that a Points Limit of 3,000 Points be used as this will be
          applicable to most missions.
        </p>
        <p>
          In all cases, Army Lists and the details of the choices made in their
          selection are not secret and should be made available to other players
          once the Battle has begun. However, unless all Players involved agree,
          all Armies should be fully selected and play started before the
          Players exchange Army lists. No Player should gain advantage by
          reviewing their opponent's Army List before selecting their own Army.
        </p>
        <h4 id="SPL">set points limit</h4>
        <p>
          Once the Players have arranged a Battle, they must set a Points Limit
          which will apply to all Armies involved in the Battle. The default
          Points Limit for Battles in the Age of Darkness is 3,000 Points, but
          Players may select any Points Limit that is agreeable to all Players.
          Note that Points Limits of less than 2,000 or more than 4,000 fall
          outside the intended scope of play of the Core Rules and may prove
          unbalanced. The total Points Value of all Units and options selected
          in an Army may not exceed the Points Limit.
        </p>
        <h4 id="SelM">select mission</h4>
        <p>
          Once a Points Limit has been set, the Players must select or randomly
          determine a Mission to be used for the Battle. The Core Mission Pack
          is considered ideal for most games, but a number of other Mission
          Packs are presented in the various Age of Darkness publications and
          any may be selected. Each Mission Pack will have a means of randomly
          determining a Mission to be played, or Players may simply roll off to
          determine which of them will select a Mission to be used. Once
          determined, the Mission selected must be declared to all Players.
        </p>
        <h4 id="SAALaFfPD">
          select allegiance, army list and faction for primary detachment
        </h4>
        <p>
          Once a Points Limit has been set and Mission decided, each Player must
          declare several key attributes for the Primary Detachment of the Army
          they will select. These should be done in the following order:
        </p>
        <p>
          <span class="bold">Allegiance</span> - Each Player must declare an
          Allegiance for their Army, which will affect the Primary Detachment
          and all other Detachments in the Army. The Allegiance chosen must be
          either Traitor or Loyalist and ideally each Player should declare a
          different Allegiance, so that each Battle includes at least one Player
          of each Allegiance.
        </p>
        <p>
          When selecting Units for Detachments in later steps, these Units must
          have the same Allegiance Trait (Loyalist or Traitor) as the Allegiance
          declared in this Step. If a Model or Unit selected as part of a
          Detachment does not have an Allegiance Trait (Loyalist or Traitor) or
          has a placeholder Trait such as 'Allegiance', then once selected it
          gains the Allegiance Trait declared for the Army in this Step.
        </p>
        <p>
          Various Rules will make Units, Army Lists and options available to
          Armies based on the Allegiance chosen for them. These Rules will
          detail which options are available or unavailable to Armies of
          specific Allegiances.
        </p>
        <p>
          <span class="bold">Army List</span> - Once Allegiance has been
          declared for the Army as a whole, an Army List must be selected for
          the Army's Primary Detachment. All Units selected for the Primary
          Detachment and any Apex, Auxiliary or Warlord Detachments must be
          selected from this Army List. However, Units selected for Allied
          Detachments or Lord of War Detachments may be selected from other Army
          Lists (the Rules for these Detachments will determine which Army Lists
          may be used).
        </p>
        <p>
          <span class="bold">Faction</span> - An Army's Faction is determined by
          the Army List selected for the Primary Detachment. For example, an
          Army whose Primary Detachment is selected from the Legiones Astartes
          Army List and uses the Blood Angels Legion Rules would have the
          Faction Blood Angels, while an Army whose Primary Detachment is
          selected from the Mechanicum Army list would have the Faction
          Mechanicum. An Army's Faction will determine whether certain Units can
          be included as part of it and may be referenced by other Rules. As
          with Allegiance, Faction is often represented by a Trait, however
          simply being selected in a Detachment that has a certain Faction does
          not grant that Trait, it must either be on that Unit's profile or
          granted by another Special Rule.
        </p>
        <h4 id="FFOSitPD">
          fill force organisation slots in the primary detachment
        </h4>
        <p>
          Once Allegiance, Faction and Army List are decided, Units must be
          selected to fill Force Organisation Slots in the Crusade Primary
          Detachment Force Organisation Chart, using the Rules for Selecting
          Units found
          <a href="" @click.prevent="scrollToSection('SelUfDet')">there</a>.
          When selecting Units for a Primary Detachment, the Player is required
          to fill only one Force Organisation Slot of their choice (all
          Detachments must include a minimum of one Unit), and if they wish may
          choose not to select any other Units in that Detachment. However, the
          selection of Units as part of the Primary Detachment will heavily
          affect which other Detachments will be available in the Army and
          should be carefully considered.
        </p>
        <h4 id="SaFAD">select and fill additional detachment</h4>
        <p>
          The Units selected as part of the Primary Detachment may allow the
          Player to select additional Auxt additional Auxiliary or Apex
          Detachments. Furthermore, any Army may include one or more Allied
          Detachments as well as a single Lord of War Detachment and/or a
          Warlord Detachment regardless of which Units are included in the
          Primary Detachment.
        </p>
        <p>
          These Detachments are filled in the same manner as a Primary
          Detachment. Some Auxiliary or Apex Detachments may have requirements
          that must be met before they can be selected, or grant bonuses if
          selected. In all cases, such requirements or bonuses will be listed in
          the Rules for that Detachment.
        </p>
        <h4 id="ComAR">complete army roster</h4>
        <p>
          The Player should continue selecting and filling additional
          Detachments until either they cannot select further Detachments or
          they have used up all of the Points allowed by the Points Limit set.
          Note that an Army selected using the Crusade Army Selection must
          adhere to the following Rules:
        </p>
        <ul>
          <li>
            The total Points Value of all Units included in the Army must be
            equal to or less than the Points Limit set in Step 1.
          </li>
          <li>Each Detachment in the Army must include at least one Unit.</li>
        </ul>
        <p>
          Once complete, all Units and the options selected for that Unit must
          be listed on an Army Roster.
        </p>
        <h3 id="detach-type">Detachment Types</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('PrimDet')"
              >Primary Detachment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ADtaA')"
              >Adding Detachments to an Army</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AuxDet')"
              >Auxilary Detachment</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ApDet')"
              >Apex Detachments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('AlDet')"
              >Allied Detachments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('LOWDet')"
              >Lord of War Detachments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('WarDet')"
              >Warlord Detachments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('LOWaWar')"
              >Warlords and Lords of War</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SelUfDet')"
              >Selecting Units for Detachments</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PrimSl')"
              >Prime Slots</a
            >
          </li>
        </ul>
        <p>
          The following Rules detail the various types of Detachment available
          in a Horus Heresy Army and how they are used when selecting an Army.
        </p>
        <h4 id="PrimDet">primary detachment</h4>
        <p class="bold">
          All Armies must include one, and no more than one, Primary Detachment.
        </p>
        <p>
          Every Army must include a single Primary Detachment - and may never
          include more than one. Each High Command Force Organisation Slot
          filled in the Primary Detachment allows the Controlling Player to
          select one Apex or Auxiliary Detachment to be added to the Army.
          Likewise, each Command Force Organisation Slot filled in the Primary
          Detachment allows the Controlling Player to select one Auxiliary
          Detachment to be added to the Army. If multiple Command Force
          Organisation Slots are filled, then multiple Auxiliary Detachments may
          be added to the Army - these may be multiple instances of the same
          Auxiliary Detachment or different Auxiliary Detachments as the Player
          desires. Apex and Auxiliary Detachments added to the Army in this
          manner are linked to the Primary Detachment and must use the same Army
          List to select any Units that are selected to fill Force Organisation
          Slots in those Detachments. Players may choose not to add additional
          Detachments when eligible to do so.
        </p>
        <div class="border">
          <h4 id="ADtaA">adding dtachments to an army</h4>
          <p>
            All Armies start with only a Primary Detachment. In order to add
            Auxiliary and Apex Detachments to an Army, the Player must select
            Command and High Command Choices as part of the Primary Detachment.
            Each High Command Choice allows one Apex or Auxiliary Detachment to
            be added to the Army, while each Command Choice allows one Auxiliary
            Detachment to be added to the Army.
          </p>
        </div>
        <h4 id="AuxDet">auxilary detachment</h4>
        <p class="bold">
          An Army can include any number of Auxiliary Detachments, depending on
          the number and type of Command Choices selected.
        </p>
        <p>
          An Army may include any number of Auxiliary Detachments. The number
          available in any Army is determined by the number of Command Force
          Organisation Slots that have been filled, with each such Slot filled
          allowing a single Auxiliary Detachment to be taken. A Player may also
          choose to include an Auxiliary Detachment for one or more of the High
          Command Force Organisation Slots available to them, gaining one
          Auxiliary Detachment for each High Command Slot selected, but any High
          Command Slots selected in this manner no longer grant the Player an
          Apex Detachment. All Auxiliary Detachments are linked to other
          Detachments, usually either Primary or Allied Detachments, which
          determines which Army List and Faction must be used by the Auxiliary
          Detachment.
        </p>
        <h4 id="ApDet">apex detachments</h4>
        <p class="bold">
          An Army can include any number of Apex Detachments, depending on the
          number and type of High Command Choices selected.
        </p>
        <p>
          An Army may include any number of Apex Detachments. The number
          available in any Army is determined by the number of High Command
          Force Organisation Slots that have been filled, with each such Slot
          filled allowing a single Apex Detachment to be taken. Any High Command
          Force Organisation Slots that were optionally used to include an
          additional Auxiliary Detachment in the Army do not also allow an Apex
          Detachment to be included - for each High Command Slot the Controlling
          Player may include one Apex Detachment or one Auxiliary Detachment,
          not both. All Apex Detachments are linked to other Detachments,
          usually Primary Detachments, which determines which Army List and
          Faction must be used by the Apex Detachment. Each High Command Force
          Organisation Slot filled in an Apex Detachment allows the Controlling
          Player to select an additional Apex Detachment or Auxiliary Detachment
          to be linked to the Primary Detachment. Furthermore, each Command
          Force Organisation Slot filled in an Apex Detachment allows the
          Controlling Player to select an additional Auxiliary Detachment to be
          linked to the Primary Detachment.
        </p>
        <h4 id="AlDet">allied detachments</h4>
        <p class="bold">
          Armies do not have to include an Allied Detachment and can include
          more than one, but no more than 50% of the Points Limit may be spent
          on allied Units and all Allied Detachments must be a different Faction
          than the Primary Detachment.
        </p>
        <p>
          An Army does not have to include an Allied Detachment, but may include
          any number of Allied Detachments the Controlling Player chooses - as
          long as the total Points Value of all Units selected in all Allied
          Detachments combined is no more than 50% (rounded up to the nearest
          whole number) of the Points Limit set for a Battle. All Units selected
          to fill Force Organisation Slots in an Allied Detachment must be
          selected from a different Faction than that used for the Primary
          Detachment. If more than one Allied Detachment is included in an Army,
          then all Allied Detachments in the Army must be of a different Faction
          than the Primary Detachment, but may be the same as other Allied
          Detachments.
        </p>
        <p>
          Each Command Force Organisation Slot filled in an Allied Detachment
          allows the Controlling Player to select one Auxiliary Detachment to be
          added to the Army. If multiple Command Force Organisation Slots are
          filled, then multiple Auxiliary Detachments may be added to the Army -
          these may be multiple instances of the same Auxiliary Detachment or
          different Auxiliary Detachments as the Player desires. Auxiliary
          Detachments added to the Army when selecting Command Choices for an
          Allied Detachment remain separate Detachments, but are linked to that
          Allied Detachment that allowed their selection and must use the same
          Army List to select any Units that are selected to fill Force
          Organisation Slots. Players may choose not to add additional
          Detachments when eligible to do so.
        </p>
        <h4 id="LOWDet">lord of war detachments</h4>
        <p class="bold">
          An Army may include one Lord of War Detachment, it may be of any
          Faction.
        </p>
        <p>
          An Army does not have to include a Lord of War Detachment and may not
          include more than one such Detachment. Units selected to fill Force
          Organisation Slots in a Lord of War Detachment may be selected from
          any Army List or Faction, but all Units in the Detachment must be
          selected from the same Army List or Faction. The total Points Value of
          all Units selected as part of a Lord of War Detachment and any Units
          selected in other Detachments that have the Warlord Battlefield Role
          must be no more than 25% (rounded up to the nearest whole number) of
          the Points Limit set for a Battle.
        </p>
        <h4 id="WarDet">warlord detachments</h4>
        <p class="bold">
          An Army may include one Warlord Detachment, it must be of the same
          Faction as the Primary Detachment.
        </p>
        <p>
          An Army does not have to include a Warlord Detachment and may not
          include more than one such Detachment. Units selected to fill Slots in
          a Warlord Detachment must be selected from the same Army List and
          Faction as that used for the Primary Detachment. A Warlord Detachment
          may only be selected for an Army if the Points Limit set for that Army
          is 3,000 Points or more. The total Points Value of all Units selected
          with the Warlord Battlefield Role and any Units selected in other
          Detachments that have the Lord of War Battlefield Role must be no more
          than 25% (rounded up to the nearest whole number) of the Points Limit
          set for a Battle. A Warlord Detachment must always include at least
          one Model with the Paragon Type.
        </p>
        <div class="border">
          <h4 id="LOWaWar">warlords and lords of war</h4>
          <p>
            Warlord and Lord of War Units are among some of the most powerful
            Units a Player can bring to the Battlefield, as such there are
            certain limits placed on them to keep Battles fun and engaging for
            all Players. In this case, the total Points Value of all Units with
            the Warlord or Lord of War Battlefield Role in an Army combined
            cannot exceed 25% of the Points Limit set for the Battle. Note this
            limit applies to the total Points Value of all such Units, it is not
            a separate allowance for Lord of War and one for Warlords, it is a
            single allowance of 25% for both types of Unit.
          </p>
          <p class="italic">
            For example, an Army with a Points Limit of 3,000 Points could spend
            up to a total of 750 Points on Units with the Warlord and/or Lord of
            War Battlefield Roles. This Army could include a Warlord Unit worth
            400 Points and a Lord of War Unit worth 300 Points (a total of 700
            Points, less than 25% of the Army Limit of 3,000), but could not
            include a Warlord Unit worth 500 Points and a Lord of War Unit also
            worth 500 Points (this would be a total of 1,000 Points, which is
            more than 25% of the Army Limit of 3,000).
          </p>
          <p>
            Further note that an Army with a Points Limit of less than 3,000
            points may not include any Units with the Warlord Battlefield Role,
            regardless of the points cost of that Unit. Armies with a Points
            Limit of less than 3,000 points may include Units with the Lord of
            War Battlefield Role, but such Units must have a combined points
            cost that is less than 25% of the Army's Points Limit.
          </p>
        </div>
        <h4 id="SelUfDet">selecting units for detachments</h4>
        <p>
          When selecting Units to fill Detachments, Players must follow certain
          Rules and conditions. These basic Rules apply to all types of
          Detachments when using the Crusade Army Selection process. Certain
          types of Detachment may have additional Rules and restrictions - those
          will be presented separately. Each Detachment is composed of a number
          of Force Organisation Slots, and each Force Organisation Slot may be
          filled by a Unit from the Army List selected for the Primary
          Detachment. The Battlefield Role of the Unit selected must match that
          of the Force Organisation Slot.
        </p>

        <div class="border detach-p">
          <h4>Crusade Primary Detachment</h4>
          <div class="detach-string-p">
            <div class="role hc"></div>
            <div class="role"></div>
            <div class="role"></div>
            <div class="role"></div>
          </div>
          <div class="detach-string-p">
            <div class="role-p command-p"></div>
            <div class="role command"></div>
            <div class="role command"></div>
            <div class="role"></div>
          </div>
          <div class="detach-string-p">
            <div class="role-p troops-p"></div>
            <div class="role troops"></div>
            <div class="role troops"></div>
            <div class="role troops"></div>
          </div>
          <div class="detach-string-p">
            <div class="role transport"></div>
            <div class="role transport"></div>
            <div class="role transport"></div>
            <div class="role transport"></div>
          </div>
          <p></p>
        </div>
        <p>
          This is composed of one High Command Slot, three Command Slots, four
          Troops Slots and four Transport Slots. A Player selecting Units to
          fill this Detachment may choose to fill any or none of the Slots as
          they choose, but may only select Units matching the Slots available.
          For example, a Player selecting Units for a Crusade Primary Detachment
          cannot select Units whose profile lists them as Armour, as there are
          no Force Organisation Slots with the Armour Battlefield Role in this
          Detachment. However, that Player could select between one and four
          Units whose profile lists them as Troops Choices - the Unit selected
          would not need to be the same Unit, or have the same options, but must
          be a Troops Unit.
        </p>
        <p>
          Each Unit selected as part of a Detachment will fill a Force
          Organisation Slot - that Force Organisation Slot is then full and no
          more Units may be selected using it. In addition to filling up Force
          Organisation Slots in a Detachment, each Unit selected will also use
          up Points from the Army's Points Limit. Each Unit Profile will list a
          basic Points Value for the Unit, as well as a number of options which
          may be selected at a further cost in Points. Once Army selection is
          completed, the total Points Value of all selected Units must be equal
          to or lower than the Points Limit for that Battle. While it is not
          required, Players may find it beneficial to keep a running total of
          the Points Value of selected Units while selecting an Army in order to
          avoid spending too many Points.
        </p>
        <p>
          Once each Force Organisation Slot in a Detachment has had a Unit
          selected to fill it, or the Army's Points Limit is reached, no further
          Units may be selected for that Detachment. A Player may also choose to
          simply leave some Force Organisation Slots empty, either to save
          Points or because they do not wish to fill them. Once a Player has
          finished selecting Units for a Detachment, they may, if they have not
          yet reached the Points Limit for the Army, select another Detachment
          to fill - if the Army includes any other Detachments. If the Army
          includes no other Detachments, all Force Organisation Slots in all
          available Detachments have been filled or the Army's Points Limit has
          been reached then no further Units may be selected and the Army
          Selection process is complete.
        </p>
        <div class="border">
          <h4 id="PrimSl">prime slots</h4>
          <div class="prime-desc">
            <p>
              Some Force Organisation Slots in a Detachment may be marked by:
            </p>
            <img src="../pct/primeslot.png" alt="" class="prime-slot prim" />
          </div>
          <p>
            The Force Organisation Slots marked in this fashion are ‘Prime’
            Slots. Prime Slots retain the Battlefield Role indicated, but if
            selected and filled with a Unit they offer an additional benefit.
            For each Prime Slot filled in a Detachment, the Controlling Player
            may select one Prime Advantage from the options shown below (future
            publications may add additional options for some Armies). Some Prime
            Advantages add benefits to the Detachment that includes the Prime
            Slot, while others add benefits to the Unit selected to fill the
            Prime Slot. In all cases, the Prime Advantage will state what
            benefits it provides and where they are applied. If the Unit chosen
            to fill the Prime Slot includes any Models with the Unique Sub-Type,
            then the only Prime Advantages that may be selected are Special
            Assignment or Logistical Benefit.
          </p>
          <p class="bold">Core Prime Traits</p>
          <ul>
            <li>
              <span class="bold">Master Sergeant</span> - One Model in the Unit
              selected to fill the Prime Slot that has the Sergeant Sub-Type
              gains +1 to its Attacks, Weapon Skill and Leadership
              Characteristics and the Champion Sub-Type (if it already has the
              Champion Sub-Type it instead increases its Leadership by an
              additional +1). This Advantage may only be selected once per
              Detachment.
            </li>
            <li>
              <span class="bold">Combat Veterans</span> - All Models in the Unit
              selected to fill the Prime Slot gain a bonus of +1 to their
              Leadership, Cool, Intelligence and Willpower Characteristics to a
              maximum of 10 (this includes only Models selected as part of the
              Unit, not Models that later join the Unit either before or during
              a Battle).
            </li>
            <li>
              <span class="bold">Paragon of Battle</span> - One Model in the
              Unit selected to fill the Prime Slot that has the Command Sub-Type
              gains a bonus of +1 to its Attacks, Weapon Skill and Ballistic
              Skill Characteristics.
            </li>
            <li>
              <span class="bold">Special Assignment</span> - This Prime
              Advantage may only be selected for a Command Slot. A Command Slot
              for which this Prime Advantage is selected may be filled by a High
              Command Unit, but remains a Command Slot. Moreover, no additional
              Detachments of any kind may be selected due to this Slot
              regardless of their Battlefield Role or any Special Rules that the
              Unit selected to fill the Slot may have.
            </li>
            <li>
              <span class="bold">Logistical Benefit</span> - Add one additional
              Force Organisation Slot to the Detachment that includes the Prime
              Slot, this Slot may be of any Battlefield Role other than High
              Command, Command, Warlord or Lord of War. This Advantage may only
              be selected once per Detachment.
            </li>
          </ul>
          <h4>Designer's Note:</h4>
          <p>
            More veteran readers may note that Prime Slots are similar in
            appearance to what was once called 'Compulsory Choices' Despite that
            similarity the two have little in common - this edition of the Horus
            Heresy game does not form of Compulsory Choices that force Players
            to take certain Units. Instead, Prime Slots offer bonuses feature
            any to those players that choose to fill them and select more
            'standard' forces.
          </p>
        </div>
        <h3 id="CrusFOC">The Crusade Force Organisation Chart</h3>

        <p>
          The Crusade Force Organisation Chart lists all of the potential Core
          Detachments that may be taken in an Army - though depending on a
          Player's choice not all of these Detachments will be available. Future
          publications may add more Detachments to those potentially available,
          these are not considered Core Detachments and may be limited to Armies
          of a certain Faction or other limitations. In all cases, where new
          Detachments are added then the Rules for how they may be included in
          an Army will be presented alongside them.
        </p>
        <div><img src="../pct/FOC.png" alt="" class="img" /></div>
        <p>
          As shown, an Army selected using the Crusade Force Organisation Chart
          must include a Primary Detachment and may number of Auxiliary
          Detachments or Apex Detachments - the number of Auxiliary of Apex
          Detachments available to a given Army is determined by the number of
          Command and High Command Force Organisation Slots filled in any number
          of Allied Detachments and up to one Lord of War Detachment. It may
          also include any Detachment in the Army.
        </p>
        <div class="border">
          <h4 id="">Battlefield Roles</h4>
          <div class="prime-desc">
            <img src="../icons/warlord.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Warlord</span> - The eighteen Primarchs and a
              few other powerful warlords. No Army may spend more than 25% of
              its Points Limit on Units with either the Warlord or Lord of War
              Battlefield Role.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/hc.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">High Command</span> - The highest ranked
              officers of an Army.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/command.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Command</span> - The line officers of an Army.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/retune.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Retune</span> - Warriors whose task is to guard
              the Army's officers.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/elite.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Elites</span> - The most deadly of warriors
              available to an Army.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/we.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">War-engine</span> - The Dreadnoughts of the
              Legiones Astartes and other similar war engines.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/troops.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Troops</span> - The line troops that hold
              ground and allow generals to claim victory.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/support.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Support</span> - The line troops that hold
              ground and allow generals to claim victory.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/low.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Lord of War</span> - The largest and most
              powerful Units available to any Army. No Army may spend more than
              25% of its Points Limit on Units with either the Lord of War or
              Warlord Battlefield Role.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/transport.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Transport</span> - Units dedicated to ferrying
              more vulnerable Units across the Battlefield.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/ha.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Heavy Assault</span> - Heavy assault Units used
              to break the enemy lines.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/ht.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Heavy Transport</span> - The heaviest and most
              well-protected transports available to an Army.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/armour.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Armour</span> - Armoured vehicles capable of
              carrying the most powerful Weapons onto the field.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/recon.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Recon</span> - Light infantry and cavalry
              intended to harass, pursue and track the foe.
            </p>
          </div>
          <div class="prime-desc">
            <img src="../icons/fa.png" alt="" class="prime-slot" />
            <p>
              <span class="bold">Fast Attack</span> - Fast Units capable of
              striking the enemy and withdrawing at speed.
            </p>
          </div>
        </div>
        <p>
          The different types of Detachment available in the Crusade Force
          Organisation Chart all have a number of Rules that apply only to that
          type of Detachment. Understanding these Rules and the role each
          Detachment Type plays when selecting an Army is crucial to assembling
          a force that is both powerful and flexible on the Battlefield.
        </p>
        <h2 id="battlesInAo">Battles in The Age of Darkness</h2>
        <p class="bold">
          This section includes the Core Mission Pack for Players to use.
        </p>
        <p>
          This section will guide you through the process of selecting,
          preparing for and playing an Age of Darkness Mission - a specific
          format of Battle intended to replicate the savage battles of the Horus
          Heresy. These missions are for Battles with two Players, using Armies
          of 3,000 points in size selected using the
          <a href="" @click.prevent="scrollToSection('CrusFOC')"
            >Crusade Force Organisation chart</a
          >. The Missions presented here are organised into a 'pack', a small
          group of Missions that follow a similar theme, usually presenting
          between 2-4 Missions. A Mission Pack is intended to provide some
          variety within a specific theme, allowing Players to select a type of
          challenge but retaining some uncertainty as to the specific goal of
          the Mission they will end up playing.
        </p>
        <p>
          The Missions presented in this Mission Pack are the standard format
          for Horus Heresy - Age of Darkness Battles, and are perfect for use as
          one-off Battles as well as part of a longer campaign. Other
          publications will present both additional Mission Packs (following
          this same format), as well as variant styles of play that incorporate
          additional Rules. Players may also choose to modify these missions to
          accommodate more Players, larger Armies or other conditions of their
          choice, but if any modifications are made, they should be agreed by
          all Players involved before beginning.
        </p>
        <p>
          When arranging to play an Age of Darkness Battle, Players should first
          decide on which Mission Pack they will use (where more than one is
          available). Each Mission Pack will detail how to select an individual
          Mission and how to set up and resolve the Battle.
        </p>
        <p>
          In this rulebook, the Core Missions are presented as a baseline play
          experience. These Missions are focussed on capturing and controlling
          objectives. They will suit balanced Armies and can be considered the
          standard mode of play, with opportunities to leverage both the sheer
          power of elite Units as well as the tactical value of support Units.
        </p>
        <h3 id="coreM">Core Mission Pack</h3>
        <ul>
          <li>
            <a href="" @click.prevent="scrollToSection('BUTCM')"
              >Battles Using the Core Missions</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SCM')"
              >Select Core Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SELARM')"
              >Select Armies</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PREPTB')"
              >Prepare the Battlefield</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('ROLLO')">Roll-offs</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DEPO')"
              >Deploy Objectives</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SELDEPM')"
              >Select Deployment Map</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DECMR')"
              >Declare Mission Reserves</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DEPARM')"
              >Deploy Armies</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DEPLOY')">Deployment</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('PLCM')"
              >Play Core Mission</a
            >
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('SUD')">Sudden Death</a>
          </li>
          <li>
            <a href="" @click.prevent="scrollToSection('DECV')"
              >Decide Victor</a
            >
          </li>
        </ul>
        <p class="bold">
          The Core Missions focus on capturing and controlling objectives and
          provide a well-balanced gaming experience for any Army.
        </p>
        <p>
          The Core Missions are intended to be used as the standard Play
          experience. These missions are balanced for both competitive and
          casual play alike, and allow Players to make full use of the tactical
          options presented in the Warhammer: The Horus Heresy Rules.
        </p>
        <h4>How to Use Core Missions</h4>
        <p>
          The following Rules will allow Players to make use of the Core
          Missions when playing Battles, from selecting Armies through to
          resolving the end result of the Mission.
        </p>
        <h4 id="BUTCM">battles using the core missions</h4>
        <p>
          Regardless of whether using the Core Missions for standalone Battles
          or as part of a campaign, all Players must follow these Steps in order
          to resolve a Core Mission. Each of these Steps should be completed in
          the sequence they are presented in, with each Step being fully
          completed before moving on to the next.
        </p>
        <p class="bold">Core Mission Sequence</p>
        <ul class="numeric">
          <li class="bold">Select Core Mission.</li>
          <li class="bold">Select Armies.</li>
          <li class="bold">Prepare the Battlefield.</li>
          <li class="bold">Select Deployment Map.</li>
          <li class="bold">Deploy Objectives.</li>
          <li class="bold">Declare Mission Reserves.</li>
          <li class="bold">Deploy Armies.</li>
          <li class="bold">Play Core Mission.</li>
          <li class="bold">Decide Victor.</li>
        </ul>
        <h4 id="SCM">select core mission</h4>
        <p>
          The first Step in resolving a Core Mission is to select a Mission for
          the Battle. The Players may either select one of the Core Missions
          that both Players agree on or roll a single Dice to decide which Core
          Mission will be played.
        </p>
        <p class="italic">
          Missions and Deployments You Can See on Header of this Site
        </p>

        <h4 id="SELARM">Select Armies</h4>
        <p>
          The second Step in resolving a Core Mission is for all Players to
          create an Army Roster, a list of all Models, Units and options to be
          included in their Army. All Armies for use in a Core Mission must use
          a Points Limit of 3,000 Points. Once Army Rosters have been completed
          by all Players taking part in the Battle, those Army Rosters are then
          available for any Player to review, excepting only any options where a
          Special Rule specifically requires a choice to be kept secret from
          another Player. A Player may not choose to amend their own Army Roster
          after having reviewed that of any of their opponents.
        </p>
        <h4 id="PREPTB">prepare the battlefield</h4>
        <p>
          At the start of Step 3, the Players must set up an area to be used as
          the Battlefield. This should be a flat area '4' x '6' in size. Players
          may also require additional space to place accessories, Dice, Reserves
          and any Models removed from play. Once an area for the Battlefield has
          been set aside, the Players must place Terrain on the Battlefield.
        </p>
        <p>
          Before placing Terrain, the Players must decide what Terrain will be
          available to be placed for this Battle. When playing a Core Mission,
          the following is suggested as an appropriate amount of Terrain for
          use, though Players may instead choose to use an amount of Terrain
          appropriate to their collection and preference:
        </p>
        <p>
          <span class="bold">Area Terrain</span> - - Two large zones of Area
          Terrain of up to an approximate footprint of 10" x 10" and four
          smaller zones of specific Area Terrain with a footprint of
          approximately 6" x 6". In all cases Players should decide whether each
          individual zone of Area Terrain is Light, Medium or Heavy before
          moving to the next step.
        </p>
        <div class="border">
          <h4 id="ROLLO">roll-offs</h4>
          <p>
            A roll-off is a simple method to decide which Player gets to pick an
            option. To conduct a roll-off, both Players roll a single Dice and
            the Player whose Dice has the higher result wins. If the Dice show
            the same result, then re-roll them until one Player has a higher
            result than the other.
          </p>
        </div>
        <p>
          <span class="bold">Terrain Features</span> - Six Terrain Features,
          none that occupies an area larger than 4" x 4". These may be either
          Impassable Terrain that blocks Line of Sight, or Buildings of a small
          or medium size that begin the Battle controlled by neither Player. If
          desired, Buildings may be replaced with Medium or Heavy Area Terrain
          of the same footprint, representing ruins.
        </p>
        <p>
          Once Terrain has been assembled, the Players should roll off. The
          player that wins the roll-off then chooses a piece of Terrain and
          places it anywhere on the Battlefield, after which the Opposing Player
          chooses a piece of undeployed Terrain and places it anywhere on the
          Battlefield. The Players continue to alternate placing Terrain until
          all available Terrain has been placed onto the Battlefield.
        </p>
        <p>
          When placing Terrain onto the Battlefield, no piece of Terrain may be
          placed so that it overlaps with the Base or footprint of another
          piece, nor in any position that would cause any part of the Terrain
          piece to be outside the boundary of the Battlefield. If there are
          pieces of Terrain that cannot be placed due to these restrictions,
          then those pieces of Terrain must be discarded and are not used as
          part of the Battle - if possible, the Player attempting to place that
          piece of Terrain may choose a different Terrain piece to place.
        </p>
        <h4 id="DEPO">deploy objectives</h4>
        <p>
          In the fourth Step the Players must set up all Objectives required for
          the Mission that was selected in Step 1. Each Mission will give
          specific Rules for how Objectives must be set up.
        </p>
        <h4 id="SELDEPM">select deployment map</h4>
        <p>
          At the start of Step 5, a Deployment Map must be selected, this will
          dictate which Deployment Zones are to be used in Step 7. The Players
          may either select one of the core Deployment Maps that both Players
          agree on, or roll a single Dice on the table below to decide which
          core Deployment Map will be used.
        </p>

        <!-- <p class="bold">core deployment maps</p>
        <div class="minitable">
          <table class="unit-general__table">
            <thead>
              <tr>
                <th>Dice Roll</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Search and Destroy</td>
              </tr>
              <tr>
                <td>2-3</td>
                <td>Hammer and Anvil</td>
              </tr>
              <tr>
                <td>4-6</td>
                <td>Dawn of War</td>
              </tr>
            </tbody>
          </table>
        </div> -->
        <p>
          Once the Deployment Map Type has been determined, the Players must
          allocate one specific Deployment Zone to each Player. All of the Core
          Deployment Maps list a Deployment Zone A and a Deployment Zone B -
          both Players must roll a single Dice, with the Player that rolls the
          highest using Deployment Zone A and the Player that rolls lowest using
          Deployment Zone B. If the result of the roll is a tie, then the
          Players must roll again until one Player rolls higher than the other.
        </p>
        <h4 id="DECMR">declare mission reserves</h4>
        <p>
          In this Step both Players should roll off. The Player that loses the
          roll-off must then declare if they intend to place any of their Units
          into Reserves. Once these Units have been noted on that Player's Army
          Roster, the Player that won the roll-off must declare if they intend
          to place any Units into Reserves. Note that all Players must deploy at
          least one Unit onto the Battlefield at the start of play, unless
          another Special Rule states otherwise.
        </p>
        <p>
          During Step 7, further Units may only be added to Reserves if there is
          no position where the controlling Player can legitimately deploy them
          according to the deployment Rules of the Core Mission being played.
          Where this is the case, those Units that cannot be deployed are placed
          immediately into Reserves.
        </p>
        <h4 id="DEPARM">deploy armies</h4>
        <p>
          In this Step both Players should roll off. The Player that loses the
          roll-off must then deploy all Units in their Army that were not placed
          in Reserves in Step 6 to the Deployment Zone allocated to them in Step
          5. If there is no position where the Controlling Player can
          legitimately deploy one or more of their Units within the required
          Deployment Zone, those Units must be placed into Reserves instead - if
          the Reserves Mission Special Rule is not in use, then those Units are
          placed to one side and cannot be used in the Mission, but do not count
          as having been Removed as Casualties.
        </p>
        <div class="border">
          <h4 id="DEPLOY">deployment</h4>
          <p>
            The Mission Rules will often refer to 'deploying' Models, Units and
            Armies. When told to deploy a Model, Unit or Army, a Player must
            place all Models indicated onto the Battlefield within the bounds of
            their Deployment Zone. Models that are a part of a Unit must be
            placed in Unit Coherency. If any Models in a Unit cannot be placed
            on the Battlefield in Unit Coherency with at least one other Model
            from the same Unit then all Models in that Unit must be placed into
            Reserves instead.
          </p>
          <p>
            When deploying multiple Units, either at the start of play or from
            Reserves, Players may choose to have Units Embarked upon other
            Models that are also being deployed as long as they would normally
            be able to Embark upon that Model. Likewise, when deploying multiple
            Units, Models that are eligible to join other Units that are being
            deployed may do so before being deployed. Models may be deployed
            into Difficult or Dangerous Terrain. If deployed into Dangerous
            Terrain, no Dangerous Terrain Tests are made until the Unit moves
            after having been deployed.
          </p>
          <p>
            Models may never be deployed in Impassable Terrain, on an Objective
            or outside the bounds of the Battlefield or the Controlling Player's
            Deployment Zone. Furthermore, Models may never be deployed within 2"
            of any enemy Model. If a Model or Unit being deployed from Reserves
            cannot be placed at least 2" from an enemy Model, then all Models
            from the deploying Unit that are within 2" of an enemy Model once
            deployed are immediately Removed as Casualties.
          </p>
        </div>
        <h4 id="PLCM">play core mission</h4>
        <p>
          The Player that deployed first in Step 7 takes the first Player Turn.
        </p>
        <p>
          All Core Missions are played for four Battle Turns. At the end of the
          fourth Battle Turn, this Step ends and the Battle ends.
        </p>
        <div class="border">
          <h4 id="SUD">sudden death</h4>
          <p>
            If, at the end of any Battle Turn, any Player has no Models on the
            Battlefield, the Battle immediately ends regardless of the number of
            Turns that have been played. Models that are in Reserves do not
            count as being 'on the Battlefield', however Models in a Unit that
            includes any Models with the Routed Tactical Status, or Embarked in
            a Model with the Transport Sub-Type or in a Building or
            Fortification, do.
          </p>
          <p>
            If a Battle is ended due to the Sudden Death Rule then the victor is
            still decided by Victory Points scored up to that point in the
            Battle, but the Player that still has Models on the Battlefield
            scores an additional 3 Victory Points.
          </p>
        </div>
        <h4 id="DECV">decide victor</h4>
        <p>
          Once all four Battle Turns have been completed, the victor is decided
          by the number of Victory Points each Player has scored.
        </p>
        <p>
          Victory Points are scored either by the Primary Objective or by
          Secondary Objectives, these offer different tactical challenges to
          Players and in general Primary Objectives will offer the most reward.
        </p>
        <h2>The End</h2>
        <div><Stp /></div>
        <div><Bb /></div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
import { scrollToSection } from "./composables/Scroll";
const elems = ref([]);
function collectElemHeaders() {
  elems.value = Array.from(document.querySelectorAll("h3"));
}
const windowWidth = ref(window.innerWidth);
function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  collectElemHeaders();
  window.addEventListener("resize", updateWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>
<style >
.prime-desc {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.prim {
  margin-left: 10px;
  box-sizing: border-box;
}

.prime-slot {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.core-rules {
  padding-left: 7%;
  padding-right: 7%;
  box-sizing: border-box;
}
.core-rules li {
  list-style-type: disc;
  box-sizing: border-box;
  margin-top: 7px;
  margin-bottom: 7px;
}

.core-rules h4 {
  text-transform: capitalize;
}

.core-rules h3,
.core-rules h5 {
  background-color: var(--main-text-color);
  color: white;
  text-align: left;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 1.2rem;
}

.numeric li {
  list-style-type: decimal;
}
</style>