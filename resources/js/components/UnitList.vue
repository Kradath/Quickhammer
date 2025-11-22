<template>
  <main>
    <div class="container center first-letter">
      <h1 class="">legiones astartes army list</h1>
      <nav class="nav-rules unit-list">
        <LegionesSelect v-model="selectOption" />
          
        <div class="legions">
          
          <!-- dark angels -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Dark_Angels'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Dark Angels</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/lion-el-jonson"
                  >lion el'Jonson</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/corswain"
                  >corswain</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/marduk-sedras"
                  >marduk sedras</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deathwing-companion"
                  >deathwing companion</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deathwing-companion-in-ta"
                  >deathwing companion in terminator armour</router-link
                >
              </li>
              
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dreadwing-intereptors"
                  >dreadwing intereptors</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/inner-circle-knights-cenobium"
                  >inner circle knights cenobium</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/order-of-broken-claws"
                  >inner circle knights cenobium - order of broken claws</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/excindio-battle-automata"
                  >excindio battle automata</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/firewing-enigmatus-cabal"
                  >firewing enigmatus cabal</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dark-angels-inductii"
                  >dark angels inductii</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'White_Scars'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">White Scars</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/jaghatai-khan"
                  >jaghatai khan</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/qin-xa"
                  >qin xa</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/hibou-khan"
                  >hibou khan</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/stormseer"
                  >stormseer</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/golden-keshig"
                  >golden keshig</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ebon-keshig"
                  >ebon keshig</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kyzagan-assault-speeder"
                  >kyzagan assault speeder</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Space_Wolves'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">space wolves</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/leman-russ"
                  >leman russ</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/hvarl-red-blade"
                  >hvarl red blade</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/geigor-fell-hand"
                  >geigor fell-hand</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/caster-of-runes"
                  >caster of runes</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/wolf-kin-of-russ"
                  >wolf-kin of russ</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/varagyr-wolf-guard-terminator-squad"
                  >varagyr wolf guard terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deathsworn-pack"
                  >deathsworn pack</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/grey-slayer-pack"
                  >grey slayer pack</router-link
                >
              </li>
            </ul>
          </div>

          <!-- fists -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Imperial_Fists'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">imperial fists</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/rogal-dorn"
                  >rogal dorn</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sigismund"
                  >sigismund</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fafnir-raan"
                  >fafnir raan</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/evander-garrius"
                  >evander garrius</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/camba-diaz"
                  >camba diaz</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/alexis-polux"
                  >alexis polux</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/templar-brethren"
                  >templar brethren</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/huscarl-terminator-retinue"
                  >huscarl terminator retinue</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/phalanx-warder-squad"
                  >phalanx warder squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/imperial-fists-inductii-squad"
                  >imperial fists inductii squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/aetos-dios"
                  >Ætos Dios</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Blood_Angels'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">blood angels</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sanguinius"
                  >sanguinius</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/chapter-master-raldoron"
                  >chapter master raldoron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dominion-zephon"
                  >dominion zephon</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/aster-crohne"
                  >aster crohne</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/crimson-paladins"
                  >crimson paladins</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dawnbreaker-cohandus"
                  >dawnbreaker cohandus</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/the-angels-tears"
                  >the angel's tears</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/contemptor-cohandus-dreadnought"
                  >contemptor-cohandus dreadnought</router-link
                >
              </li>
            </ul>
          </div>

          <!-- iron hands -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Iron_Hands'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">iron hands</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ferrus-manus"
                  >ferrus manus</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/shadrak-meduson"
                  >shadrak meduson</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-father"
                  >iron father</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-father-in-artificer-armour"
                  >iron father in artificer armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/gorgon-terminator-squad"
                  >gorgon terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/morlock-terminator-squad"
                  >morlock terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/medusan-immortals-squad"
                  >medusan immortals squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-hands-inductii-squad"
                  >iron hands inductii squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- ultramarines -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Ultramarines'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">ultramarines</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/roboute-guilliman"
                  >roboute guilliman</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/remus-ventanus"
                  >remus ventanus</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/invictarus-suzerain-squad"
                  >invictarus suzerain squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetorian-breacher-squad"
                  >praetorian breacher squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/locutarus-storm-squad"
                  >locutarus storm squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fulmentarus-terminator-squad"
                  >fulmentarus terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/nemesis-destroyer-squad"
                  >nemesis destroyer squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ultramarines-inductii-squad"
                  >ultramarines inductii squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- Salamanders -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Salamanders'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">salamanders</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/vulkan"
                  >vulkan</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/cassian-dracos-reborn"
                  >cassian dracos reborn</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/firedrake-terminator-squad"
                  >firedrake terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/pyroclast-squad"
                  >pyroclast squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/adherents-squad"
                  >adherents squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sanctifier-squad"
                  >sanctifier squad</router-link
                >
              </li>

              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/salamanders-inductii-squad"
                  >salamanders inductii squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- Raven Guard -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Raven_Guard'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">raven guard</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/corvus-corax"
                  >corvus corax</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kaedes-nex"
                  >kaedes nex</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/mor-deythan-squad"
                  >mor deythan squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dark-fury-squad"
                  >dark fury squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deliverers-squad"
                  >deliverers squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/raven-guard-inductii-squad"
                  >raven guard inductii squad</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Emperors_Children'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Emperor's Children</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fulgrim"
                  >fulgrim</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fulgrim-transfigured"
                  >fulgrim transfigured</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/lord-commander-eidolon"
                  >lord commander eidolon</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/captain-lucius"
                  >captain lucius</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/saul-tarvitz"
                  >saul tarvitz</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/phoenix-terminator-squad"
                  >phoenix terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kakophoni-squad"
                  >kakophoni squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- iron warriors -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Iron_Warriors'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">iron warriors</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/perturabo"
                  >perturabo</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/narik-dreygur"
                  >narik dreygur</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/warsmith"
                  >warsmith</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/warsmith-in-artificer-armour"
                  >warsmith in artificer armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tyrant-siege-terminator-squad"
                  >tyrant siege terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-circle-maniple"
                  >iron circle maniple</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dominator-cohort"
                  >dominator cohort</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-havocs"
                  >iron havocs</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/iron-warriors-inductii-squad"
                  >iron warriors inductii squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- night lords -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Night_Lords'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Night Lords</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/konrad-curze"
                  >konrad curze</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sevatar"
                  >sevatar</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/contekar-terminator-squad"
                  >contekar terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/terror-squad"
                  >terror squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/night-raptor-squad"
                  >night raptor squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/atramentar-flay-clade"
                  >atramentar flay-clade</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/night-lord-inductii-squad"
                  >night lord inductii squad</router-link
                >
              </li>
            </ul>
          </div>
          <!-- world eaters -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'World_Eaters'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">world eaters</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/angron"
                  >angron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/angron-transfigured"
                  >angron transfigured</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kharn-the-bloody"
                  >kharn the bloody</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/lotara-sarrin"
                  >lotara sarrin</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/red-butchers"
                  >red butchers</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/rampager-squad"
                  >rampager squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/red-hand-destroyer-mortalis-squad"
                  >red hand destroyer mortalis squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/red-hand-destroyer-assault-squad"
                  >red hand destroyer assault squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/world-eaters-inductii-squad"
                  >world eaters inductii squad</router-link
                >
              </li>
            </ul>
          </div>

          <!-- death guard -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Death_Guard'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Death Guard</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/mortarion"
                  >mortarion</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/calas-typhon"
                  >calas typhon</router-link
                >
              </li>
              <!-- <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/nathaniel-garro"
                  >nathaniel garro</router-link
                >
              </li> -->
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deathshroud-terminator-squad"
                  >deathshroud terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/grave-warden-terminator-squad"
                  >grave warden terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/mortus-poisoner-squad"
                  >mortus poisoner squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/death-guard-inductii-squad"
                  >death guard inductii squad</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Thousand_Sons'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">thousand sons</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/magnus-the-red"
                  >magnus the red</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ahriman"
                  >ahriman</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/magistus-amon"
                  >magistus amon</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/prosperine-sorcerer"
                  >prosperine sorcerer</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sekhmet-terminator-cabal"
                  >sekhmet terminator cabal</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/zhenkhet-occult-cabal"
                  >zhenkhet occult cabal</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/castellax-achea-automata"
                  >castellax-achea automata</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/contemptor-osiron-dreadnought"
                  >contemptor-osiron dreadnought</router-link
                >
              </li>
            </ul>
          </div>

          <!-- sons of horus -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Sons_Of_Horus'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Sons Of Horus</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/horus-lupercal"
                  >horus lupercal</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/horus-ascended"
                  >horus ascended</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ezekyle-abaddon"
                  >ezekyle abaddon</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/little-horus-aximand"
                  >'little' horus aximand</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tybalt-marr"
                  >tybalt marr</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/vheren-ashurahaddon"
                  >vheren ashurahaddon</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/garviel-loken"
                  >garviel loken</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/maloghurst-the-twisted"
                  >maloghurst the twisted</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dark-emissary"
                  >dark emissary</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dark-emissary-in-ta"
                  >dark emissary in terminator armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/justaerin-terminator-squad"
                  >justaerin terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/reaver-attack-squad"
                  >reaver attack squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/reaver-aggressor-squad"
                  >reaver aggressor squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/chieftain-squad"
                  >chieftain squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sons-of-horus-inductii-squad"
                  >Sons of Horus Inductii squad</router-link
                >
              </li>
            </ul>
          </div>

          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Word_Bearers'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">Word Bearers</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/lorgar"
                  >lorgar</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kor-phaeron"
                  >kor phaeron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/erebus"
                  >erebus</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/argel-tal"
                  >argel tal</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/zardu-layak"
                  >zardu layak</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/gal-vorbak"
                  >gal vorbak</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/mhara-gal-dreadnought"
                  >mhara gal dreadnought</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/ashen-circle-squad"
                  >ashen circle squad</router-link
                >
              </li>
            </ul>
          </div>

          <!-- alpha legion -->
          <div
            class="nav-rules_personal-units"
            v-show="selectOption === 'Alpha_Legion'"
          >
            <ul class="nav-rules_ul">
              <h3 class="list-li-name">alpha legion</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/alpharius"
                  >alpharius</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/armillus-dynat"
                  >armillus dynat</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/autilon-skorr"
                  >autilon skorr</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/saboteur"
                  >saboteur</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/exodus"
                  >exodus</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/lernaean-terminator-squad"
                  >lernaean terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/headhunter-kill-team"
                  >headhunter kill team</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/effrit-diruption-cadre"
                  >effrit diruption cadre</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/alpha-legion-inductii-squad"
                  >alpha legion inductii squad</router-link
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="unit-list_two-columns">
          <div class="column">
            <ul class="nav-rules_ul">
              <h3>high command</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetor"
                  >praetor</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetor-with-jp"
                  >praetor with jump pack</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetor-сta"
                  >praetor in cataphractii terminator armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetor-tta"
                  >praetor in tartaros terminator armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetor-saturnine-ta"
                  >praetor in saturnine terminator armour</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>command</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/centurion"
                  >centurion</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/centurion-jp"
                  >centurion with jump pack</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/centurion-cta"
                  >centurion in cataphractii terminator armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/centurion-tta"
                  >centurion in tartaros terminator armour</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/chaplain"
                  >chaplain</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/damocles-command-rhino"
                  >damocles command rhino</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/esoterist"
                  >esoterist</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/herald"
                  >herald</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/legion-champion"
                  >legion champion</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/librarian"
                  >librarian</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/master-of-signals"
                  >master of signals</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/moritat"
                  >moritat</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/optae"
                  >optae</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/optae-jp"
                  >optae with jump pack</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/overseer"
                  >overseer</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praevian"
                  >praevian</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/siege-breaker"
                  >siege breaker</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/vigilator"
                  >vigilator</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>retinues</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetorian-command-squad"
                  >praetorian command squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/praetorian-command-squad-with-jump-packs"
                  >praetorian command squad with jump packs</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/centurion-command-squad"
                  >centurion command squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/augur-command-and-control-squad"
                  >augur command and control squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/cataphractii-terminator-command-squad"
                  >cataphractii terminator command squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tartaros-terminator-command-squad"
                  >tartaros terminator command squad</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>elites</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/seeker-squad"
                  >seeker squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/veteran-assault-squad"
                  >veteran assault squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/veteran-tactical-squad"
                  >veteran tactical squad</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>heavy assault</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/cataphractii-terminator-squad"
                  >cataphractii terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/saturnine-terminator-squad"
                  >saturnine terminator squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tartaros-terminator-squad"
                  >tartaros terminator squad</router-link
                >
              </li>
              
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>troops</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/assault-squad"
                  >assault squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/breacher-squad"
                  >breacher squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/despoiler-squad"
                  >despoiler squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tactical-squad"
                  >tactical squad</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>support</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tactical-support-squad"
                  >tactical support squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/heavy-support-squad"
                  >heavy support squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/rapier-battery"
                  >rapier battery</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/apothecary"
                  >apothecary</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/techmarine"
                  >techmarine</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deathstorm-drop-pod"
                  >deathstorm drop pod</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/araknae-quad-accelerator-platform"
                  >araknae quad accelerator platform</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>war-engines</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/contemptor-dreadnought"
                  >contemptor dreadnought</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/deredeo-dreadnought"
                  >deredeo dreadnought</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/leviathan-dreadnought"
                  >leviathan dreadnought</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/saturnine-dreadnought"
                  >saturnine dreadnought</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>transports</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/rhino"
                  >rhino</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/drop-pod"
                  >drop pod</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/termite"
                  >termite</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>heavy transports</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/land-raider-carrier"
                  >land raider carrier</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/spartan"
                  >spartan</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dreadclaw-drop-pod"
                  >dreadclaw drop pod</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/dreadnought-drop-pod"
                  >dreadnought drop pod</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kharybdis"
                  >kharybdis</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>recon</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/reconnaissance-squad"
                  >reconnaissance squad</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sabre"
                  >sabre</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/outrider-squadron"
                  >outrider squadron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/land-raider-explorator"
                  >land raider explorator</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tarantula-battery"
                  >tarantula battery</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>fast attack</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/xiphon-interceptor"
                  >xiphon interceptor</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/storm-eagle"
                  >storm eagle</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fire-raptor"
                  >fire raptor</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/scimitar-jetbike-squadron"
                  >scimitar jetbike squadron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/javelin-squadron"
                  >javelin squadron</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/land-speeder-squadron"
                  >land speeder squadron</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>armour</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/predator"
                  >predator</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sicaran"
                  >sicaran</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sicaran-venator"
                  >sicaran-venator</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/kratos-assault-tank"
                  >kratos assault tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/vindicator-siege-tank"
                  >vindicator siege tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/scorpius-missile-tank"
                  >scorpius missile tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/arquitor-bombard"
                  >arquitor bombard</router-link
                >
              </li>
            </ul>
          </div>

          <div class="column">
            <ul class="nav-rules_ul">
              <h3>lords of war</h3>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/cerberus-heavy-tank-destroyer"
                  >cerberus heavy tank destroyer</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/typhon-heavy-siege-tank"
                  >typhon heavy siege tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/glaive-super-heavy-special-weapons-tank"
                  >glaive super-heavy special weapons tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/fellblade-super-heavy-battle-tank"
                  >fellblade super-heavy battle tank</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/falchion-super-heavy-tank-destroyer"
                  >falchion super-heavy tank destroyer</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/tunderhawk-gunship"
                  >tunderhawk gunship</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/sokar-stormbird"
                  >sokar-stormbird</router-link
                >
              </li>
              <li>
                <router-link
                  class="nav-rules_ul_li-link"
                  to="/factions/legiones-astartes/unit-list/mastodon-super-heavy-assault-transport"
                  >mastodon super-heavy assault transport</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
     <div> <Stp /> </div>
     <div> <Bb /> </div>
    </div>
  </main>
</template>
<script setup>
import LegionesSelect from "../components/ContentTemplate/LegionesSelect.vue";

import { ref, onMounted, onUnmounted } from "vue";
import Stp from "./ScrollToTop.vue";
import Bb from "./BackButton.vue";
const selectOption = ref("");

function loadSelection() {
  const saved = localStorage.getItem("selectedOption");
  if (saved) {
    selectOption.value = saved;
  }
}

const showButton = ref(false);
function handleScroll() {
  if (window.scrollY > 800) {
    
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}
onMounted(() => {
  loadSelection();

});

</script>
<style>
.nav-rules_ul_li-link {
  color: white;
  text-align: left;
}

.nav-rules_ul_li-link:hover {
  text-decoration: underline;
  
}

.column {
  margin: 0;
  padding: 0;
}

.legions {
  display: flex;
  text-align: start;
  align-items: flex-start;
}
</style>