<template>
  <div class="unit-general">
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
            {{ stats.name }}
          </td>
          <td data-label="M">{{ stats.stats[0] }}</td>
          <td data-label="WS">{{ stats.stats[1] }}</td>
          <td data-label="BS">{{ stats.stats[2] }}</td>
          <td data-label="S">{{ stats.stats[3] }}</td>
          <td data-label="T">{{ stats.stats[4] }}</td>
          <td data-label="W">{{ stats.stats[5] }}</td>
          <td data-label="I">{{ stats.stats[6] }}</td>
          <td data-label="A">{{ stats.stats[7] }}</td>
          <td data-label="LD">{{ stats.stats[8] }}</td>
          <td data-label="CL">{{ stats.stats[9] }}</td>
          <td data-label="WP">{{ stats.stats[10] }}</td>
          <td data-label="IN">{{ stats.stats[11] }}</td>
          <td data-label="SV">{{ stats.stats[12] }}+</td>
          <td data-label="Inv">{{ stats.stats[13] }}</td>
          <td data-label="Base">{{ stats.base }}mm</td>
        </tr>
        <tr v-if="isSergeant" class="sergeant">
          <td class="unit-general__table-tbody__name first-letter">
            {{ stats.sergeant }}
          </td>
          <td data-label="M">{{ stats.Sstats[0] }}</td>
          <td data-label="WS">{{ stats.Sstats[1] }}</td>
          <td data-label="BS">{{ stats.Sstats[2] }}</td>
          <td data-label="S">{{ stats.Sstats[3] }}</td>
          <td data-label="T">{{ stats.Sstats[4] }}</td>
          <td data-label="W">{{ stats.Sstats[5] }}</td>
          <td data-label="I">{{ stats.Sstats[6] }}</td>
          <td data-label="A">{{ stats.Sstats[7] }}</td>
          <td data-label="LD">{{ stats.Sstats[8] }}</td>
          <td data-label="CL">{{ stats.Sstats[9] }}</td>
          <td data-label="WP">{{ stats.Sstats[10] }}</td>
          <td data-label="IN">{{ stats.Sstats[11] }}</td>
          <td data-label="SV">{{ stats.Sstats[12] }}+</td>
          <td data-label="Inv">{{ stats.Sstats[13] }}</td>
          <td data-label="Base">{{ stats.base }}mm</td>
        </tr>
      </tbody>
    </table>

    <!-- тут вторая таблица для мобилок -->
    <div
      class="unit-general__grid-table"
      :class="{ 'unit-general__grid-table__one': isClassActive }"
      v-if="windowWidth <= 800"
    >
      <div class="row header">
        <div class="cell header-cell">Stat</div>
        <div class="cell header-cell first-letter">{{ stats.name }}</div>
        <div class="cell header-cell first-letter sergeant" v-if="isSergeant">
          {{ stats.sergeant }}
        </div>
      </div>
      <div class="row">
        <div class="cell label">M</div>
        <div class="cell">{{ stats.stats[0] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[0] }}</div>
      </div>
      <div class="row">
        <div class="cell label">WS</div>
        <div class="cell">{{ stats.stats[1] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[1] }}</div>
      </div>
      <div class="row">
        <div class="cell label">BS</div>
        <div class="cell">{{ stats.stats[2] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[2] }}</div>
      </div>
      <div class="row">
        <div class="cell label">S</div>
        <div class="cell">{{ stats.stats[3] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[3] }}</div>
      </div>
      <div class="row">
        <div class="cell label">T</div>
        <div class="cell">{{ stats.stats[4] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[4] }}</div>
      </div>
      <div class="row">
        <div class="cell label">W</div>
        <div class="cell">{{ stats.stats[5] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[5] }}</div>
      </div>
      <div class="row">
        <div class="cell label">I</div>
        <div class="cell">{{ stats.stats[6] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[6] }}</div>
      </div>
      <div class="row">
        <div class="cell label">A</div>
        <div class="cell">{{ stats.stats[7] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[7] }}</div>
      </div>
      <div class="row">
        <div class="cell label">LD</div>
        <div class="cell">{{ stats.stats[8] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[8] }}</div>
      </div>
      <div class="row">
        <div class="cell label">CL</div>
        <div class="cell">{{ stats.stats[9] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[9] }}</div>
      </div>
      <div class="row">
        <div class="cell label">WP</div>
        <div class="cell">{{ stats.stats[10] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[10] }}</div>
      </div>
      <div class="row">
        <div class="cell label">IN</div>
        <div class="cell">{{ stats.stats[11] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[11] }}</div>
      </div>
      <div class="row">
        <div class="cell label">Sv</div>
        <div class="cell">{{ stats.stats[12] }}+</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[12] }}+</div>
      </div>
      <div class="row">
        <div class="cell label">Inv</div>
        <div class="cell">{{ stats.stats[13] }}</div>
        <div class="cell" v-if="isSergeant">{{ stats.Sstats[13] }}</div>
      </div>
      <div class="row">
        <div class="cell label">Base</div>
        <div class="cell">{{ stats.base }}mm</div>
        <div class="cell" v-if="isSergeant">{{ stats.base }}mm</div>
      </div>
    </div>

    <!-- состав юнита -->
    <div class="unit-general__composition first-letter">
      <p>
        <span class="first-letter unit-general__composition-words"
          >unit composition</span
        ><br />
        <span v-if="isSergeant && invisibleSergeant">{{ stats.sergeant }} [1],</span>
        {{ stats.name }} [{{ stats.composition[0]
        }}<span v-if="stats.composition[1]">-{{ stats.composition[1] }}</span
        >]
      </p>
    </div>

    <!-- все комплектующие -->
    <div class="unit-general__rules">
      <!-- варгир -->
      <div
        class="unit-general__rules-wargear"
        v-if="stats.twoProfiles == false"
      >
        <h4>Wargear</h4>
        <ul class="unit-general__rules__ul">
          <!-- RWlist -->
          <li
            v-for="ranged_weapon in stats.Dwargear.ranged_weapons"
            :key="ranged_weapon.id"
          >
            <a
              class="first-letter"
              v-if="checkRule(ranged_weapon)"
              href=""
              @click.prevent="
                openRulesModal(searchModal(ranged_weapon), $event)
              "
              >{{ ranged_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="ranged_weapon == 'lascutter'"
              href=""
              @click.prevent="openRulesModal('LascutterModal', $event)"
              >{{ ranged_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="ranged_weapon == `the warmaster's talon`"
              href=""
              @click.prevent="openRulesModal('warmastersTalonModal', $event)"
              >{{ ranged_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="ranged_weapon == 'fulcrum hand cannons'"
              href=""
              @click.prevent="openRulesModal('FulcrumModal', $event)"
              >{{ ranged_weapon }}</a
            >
            <div v-else class="first-letter">{{ ranged_weapon }}</div>
          </li>

          <!-- MWlist -->
          <li
            v-for="melee_weapon in stats.Dwargear.melee_weapons"
            :key="melee_weapon.id"
          >
            <a
              class="first-letter"
              v-if="checkRule(melee_weapon)"
              href=""
              @click.prevent="openRulesModal(searchModal(melee_weapon), $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == 'power weapon'"
              href=""
              @click.prevent="openRulesModal('PowerWeaponModal', $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == 'caedere weapon'"
              href=""
              @click.prevent="openRulesModal('CaedereWeaponModal', $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == 'force weapon'"
              href=""
              @click.prevent="openRulesModal('ForceWeaponModal', $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == `the warmaster's talon`"
              href=""
              @click.prevent="openRulesModal('warmastersTalonModal', $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == `the logos array`"
              href=""
              @click.prevent="openRulesModal('LogosArray', $event)"
              >{{ melee_weapon }}</a
            >
            <a
              class="first-letter"
              v-else-if="melee_weapon == `calibanite charge-blade`"
              href=""
              @click.prevent="openRulesModal('Chargeblade', $event)"
              >{{ melee_weapon }}</a
            >

            <div v-else class="first-letter">{{ melee_weapon }}</div>
          </li>

          <!-- Wlist -->
          <li v-for="elem in stats.Dwargear.wargear" :key="elem.id">
            <a
              class="first-letter"
              v-if="checkRule(elem)"
              href=""
              @click.prevent="openRulesModal(searchModal(elem), $event)"
              >{{ elem }}</a
            >
            <a
              class="first-letter"
              v-else-if="elem == 'frag grenades'"
              href=""
              @click.prevent="openRulesModal('FragModal', $event)"
              >{{ elem }}</a
            >
            <div v-else class="first-letter">{{ elem }}</div>
          </li>
        </ul>
      </div>
      <!-- wargear -->
      <div class="unit-general__rules-wargear" v-if="stats.twoProfiles">
        <h4>Wargear</h4>
        <ul class="unit-general__rules__ul">
          <li>
            <span class="first-letter">{{ stats.sergeant }}:</span>
            <ul>
              <li
                class="disc"
                v-for="ranged_weapon in stats.DSwargear.ranged_weapons"
                :key="ranged_weapon.id"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(ranged_weapon)"
                  href=""
                  @click.prevent="openRulesModal('RWmodal', $event)"
                  >{{ ranged_weapon }}</a
                >
                <div v-else class="first-letter">{{ ranged_weapon }}</div>
              </li>
              <li
                class="disc"
                v-for="melee_weapon in stats.DSwargear.melee_weapons"
                :key="melee_weapon.id"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(melee_weapon)"
                  href=""
                  @click.prevent="openRulesModal('MWmodal', $event)"
                  >{{ melee_weapon }}</a
                >
                <div v-else class="first-letter">{{ melee_weapon }}</div>
              </li>

              <li
                class="disc"
                v-for="elem in stats.DSwargear.wargear"
                :key="elem.id"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(elem)"
                  href=""
                  @click.prevent="openRulesModal('Wmodal', $event)"
                  >{{ elem }}</a
                >
                <div v-else class="first-letter">{{ elem }}</div>
              </li>
            </ul>
          </li>
          <li>
            <span class="first-letter">{{ stats.name }}:</span>
            <ul>
              <li
                class="disc"
                v-for="ranged_weapon in stats.Dwargear.ranged_weapons"
                :key="ranged_weapon.id"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(ranged_weapon)"
                  href=""
                  @click.prevent="openRulesModal('RWmodal', $event)"
                  >{{ ranged_weapon }}</a
                >
                <div v-else class="first-letter">{{ ranged_weapon }}</div>
              </li>
              <li
                v-for="melee_weapon in stats.Dwargear.melee_weapons"
                :key="melee_weapon.id"
                class="disc"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(melee_weapon)"
                  href=""
                  @click.prevent="openRulesModal('MWmodal', $event)"
                  >{{ melee_weapon }}</a
                >
                <div v-else class="first-letter">{{ melee_weapon }}</div>
              </li>

              <li
                class="disc"
                v-for="elem in stats.Dwargear.wargear"
                :key="elem.id"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(elem)"
                  href=""
                  @click.prevent="openRulesModal('Wmodal', $event)"
                  >{{ elem }}</a
                >
                <div v-else class="first-letter">{{ elem }}</div>
              </li>
            </ul>
          </li>
        </ul>
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
          <button
            class="close-modal-button"
            @click="closeRulesModal('RWmodal')"
          >
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
          <button
            class="close-modal-button"
            @click="closeRulesModal('MWmodal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- PowerWeaponModal-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['PowerWeaponModal']"
        @click.self="closeRulesModal('PowerWeaponModal')"
      >
        <div class="modal-content">
          <MeleeWeaponTemplate :mweaponData="melee_weapons['power sword']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['power axe']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['power maul']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['power lance']" />
          <button
            class="close-modal-button"
            @click="closeRulesModal('PowerWeaponModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- CaedereWeaponModal-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['CaedereWeaponModal']"
        @click.self="closeRulesModal('CaedereWeaponModal')"
      >
        <div class="modal-content">
          <MeleeWeaponTemplate :mweaponData="melee_weapons['meteor hammer']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['excoriator chainaxe']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['paired falax blades']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['barb-hook lash']" />
          <button
            class="close-modal-button"
            @click="closeRulesModal('CaedereWeaponModal')"
          >
            Close
          </button>
        </div>
      </div>
      
      <!-- ForceWeaponModal-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['ForceWeaponModal']"
        @click.self="closeRulesModal('ForceWeaponModal')"
      >
        <div class="modal-content">
          <MeleeWeaponTemplate :mweaponData="melee_weapons['force sword']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['force axe']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['force maul']" />
          <MeleeWeaponTemplate :mweaponData="melee_weapons['force staff']" />
          <button
            class="close-modal-button"
            @click="closeRulesModal('ForceWeaponModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- LascutterModal-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['LascutterModal']"
        @click.self="closeRulesModal('LascutterModal')"
      >
        <div class="modal-content">
          <RangeWeaponTemplate
            :rweaponData="ranged_weapons['lascutter (range)']"
          />
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['lascutter (melee)']"
          />

          <button
            class="close-modal-button"
            @click="closeRulesModal('LascutterModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- FulcrumModal-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['FulcrumModal']"
        @click.self="closeRulesModal('FulcrumModal')"
      >
        <div class="modal-content">
          <RangeWeaponTemplate
            :rweaponData="ranged_weapons['fulcrum hand cannons (ranged)']"
          />
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['fulcrum hand cannons (melee)']"
          />

          <button
            class="close-modal-button"
            @click="closeRulesModal('FulcrumModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- warmastersTalon-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['warmastersTalonModal']"
        @click.self="closeRulesModal('warmastersTalonModal')"
      >
        <div class="modal-content">
          <RangeWeaponTemplate
            :rweaponData="ranged_weapons['the warmasters talon (range)']"
          />
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['the warmasters talon (melee)']"
          />

          <button
            class="close-modal-button"
            @click="closeRulesModal('warmastersTalonModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- logosArray-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['LogosArray']"
        @click.self="closeRulesModal('LogosArray')"
      >
        <div class="modal-content">
          <RangeWeaponTemplate
            :rweaponData="ranged_weapons['the logos array (range)']"
          />
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['the logos array (melee)']"
          />

          <button
            class="close-modal-button"
            @click="closeRulesModal('LogosArray')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- Chargeblade-->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['Chargeblade']"
        @click.self="closeRulesModal('Chargeblade')"
      >
        <div class="modal-content">
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['calibanite charge-blade (uncharged)']"
          />
          <MeleeWeaponTemplate
            :mweaponData="melee_weapons['calibanite charge-blade (charged)']"
          />

          <button
            class="close-modal-button"
            @click="closeRulesModal('Chargeblade')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- Wmodal -->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['Wmodal']"
        @click.self="closeRulesModal('Wmodal')"
      >
        <div class="modal-content">
          <WargearTemplate :wargear="wargear[isRulesModalOpen['RWMname']]" />
          <button class="close-modal-button" @click="closeRulesModal('Wmodal')">
            Close
          </button>
        </div>
      </div>
      <!-- FragModal -->
      <div
        class="modal-overlay"
        v-if="isRulesModalOpen['FragModal']"
        @click.self="closeRulesModal('FragModal')"
      >
        <div class="modal-content">
          <div class="">
            <h3 id="grenades" class="list-li-name">frag grenades</h3>
            <p class="bold">
              Frag grenades can be used to make attacks during the Volley Step.
            </p>
            <div>
              When making Volley Attacks during Step 4 of the Charge Procedure
              with a Unit that includes at least one Model with frag grenades,
              the Controlling Player may choose to make a single attack with a
              frag grenade instead of making a normal Shooting Attack using the
              following profile*:
              <table class="profiles__weapon-table">
                <thead>
                  <tr>
                    <th>R</th>
                    <th>FP</th>
                    <th>RS</th>
                    <th>AP</th>
                    <th>D</th>
                    <th>Special Rules</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>1</td>
                    <td>3</td>
                    <td>6</td>
                    <td>1</td>
                    <td>Blast(3")</td>
                  </tr>
                </tbody>
              </table>
              This weapon counts as have Assault trait*
            </div>
            
          </div>
          <button
            class="close-modal-button"
            @click="closeRulesModal('FragModal')"
          >
            Close
          </button>
        </div>
      </div>
      <!-- спецправила -->
      <div class="unit-general__rules-special">
        <h4>Special Rules</h4>
        <ul class="unit-general__rules__ul">
          <li v-for="(value, key) in stats.SR" :key="key.id">
            <a
              class="first-letter"
              v-if="checkRule(key)"
              href=""
              @click.prevent="openModal($event, 'SRmodal')"
              >{{ key }}{{ value }}</a
            >
            <div v-else class="first-letter">{{ key }}</div>
          </li>
        </ul>
      </div>
      <!-- SpecialRulesModal -->
      <div
        class="modal-overlay"
        v-if="SRmodal"
        @click.self="closeModal('SRmodal')"
      >
        
        <div class="modal-content">
          <button
            @click="closeModal('SRmodal')"
            class="close-modal-button-3"
          ></button>
          <SpecialRuleTemplate :special_rule="special_rules[SRname]" />
          <button class="close-modal-button" @click="closeModal('SRmodal')">
            Close
          </button>
          
        </div>
      </div>

      <!-- типы юнита -->
      <div class="unit-general__rules-types">
        <h4>Unit Types</h4>
        <ul class="unit-general__rules__ul first-letter">
          <li v-if="isSergeant">
            {{ stats.sergeant }}:
            <ul>
              <li
                class="unit-general__rules-types__ul-type first-letter"
                v-for="(Stype, index) in stats.Stypes"
                :class="{ 'disc': index === 0 }"
                :key="Stype.id"
              >
                <a
                  class="first-letter"
                  
                  v-if="checkRule(Stype)"
                  href=""
                  @click.prevent="openRulesModal('UTmodal', $event)"
                  
                  >{{ Stype }}</a
                >
                <div v-else class="first-letter">{{ Stype }}</div>
              </li>
            </ul>
          </li>
          <li>
            {{ stats.name }}:
            <ul class="unit-general__rules-types__ul-type">
              <li
                class="unit-general__rules-types__ul-type"
                v-for="(type, index) in stats.types"
                :key="type.id"
                :class="{ 'disc': index === 0 }"
              >
                <a
                  class="first-letter"
                  v-if="checkRule(type)"
                  href=""
                  @click.prevent="openRulesModal('UTmodal', $event)"
                  >{{ type }}</a
                >
                <div v-else class="first-letter">{{ type }}</div>
              </li>
            </ul>
          </li>
        </ul>

        <!-- UnitTypesModal -->
        <div
          class="modal-overlay"
          v-if="isRulesModalOpen['UTmodal']"
          @click.self="closeRulesModal('UTmodal')"
        >
          <div class="modal-content">
            <UnitTypeTemplate
              :unit_type="unit_types[isRulesModalOpen['RWMname']]"
            />
            <button
              class="close-modal-button"
              @click="closeRulesModal('UTmodal')"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <!-- трейты юнита -->
      <div class="unit-general__rules-traits">
        <h4>Traits</h4>
        <ul class="unit-general__rules__ul">
          <li v-for="trait in stats.traits" :key="trait.id">
            <div class="first-letter">{{ trait }}</div>
          </li>
        </ul>
      </div>

      <!-- options -->
      <div class="unit__options" v-if="stats.options != false">
        <h4>Options</h4>
        <ul class="unit__options__ul">
          <li
            class="unit__options__ul-li"
            v-for="option in stats.options"
            :key="option.id"
          >
            {{ option.scentence }}
            <table class="unit__options-table">
              <tbody>
                <tr v-for="variant in option.variants" :key="variant.id">
                  <td>
                    <div v-if="checkRule(variant.what)">
                      <a
                        class="first-letter"
                        href=""
                        @click.prevent="
                          openRulesModal(searchModal(variant.what), $event)
                        "
                        >{{ variant.what }}</a
                      >
                      <span v-if="'and' in variant">
                        and
                        <a
                          class="first-letter"
                          href=""
                          v-if="checkRule(variant.and)"
                          @click.prevent="
                            openRulesModal(searchModal(variant.and), $event)
                          "
                          >{{ variant.and }}</a
                        >
                        <span v-else class="first-letter">{{
                          variant.and
                        }}</span></span
                      >
                    </div>
                    <a
                      class="first-letter"
                      v-else-if="variant.what == 'lascutter'"
                      href=""
                      @click.prevent="openRulesModal('LascutterModal', $event)"
                      >{{ variant.what }}</a
                    >
                    <div v-else class="first-letter">{{ variant.what }}</div>
                  </td>
                  <td>+ {{ variant.cost[0] }} {{ variant.cost[1] }}</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </div>
    </div>
    <div><Stp /></div>
    <div><Bb /></div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, computed, ref, watch, reactive } from "vue";
import {
  special_rules,
  ranged_weapons,
  wargear,
  unit_types,
  melee_weapons,
} from "../../../stores/Arrays.js";
import RangeWeaponTemplate from "../OneExemplarTemplates/RangeWeaponTemplate.vue";
import MeleeWeaponTemplate from "../OneExemplarTemplates/MeleeWeaponTemplate.vue";
import WargearTemplate from "../OneExemplarTemplates/WargearTemplate.vue";
import SpecialRuleTemplate from "../OneExemplarTemplates/SpecialRuleTemplate.vue";
import UnitTypeTemplate from "../OneExemplarTemplates/UnitTypeTemplate.vue";
import Stp from "../ScrollToTop.vue";
import Bb from "../BackButton.vue";
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
  console.log()
  SRname.value = event.target.textContent.replace(/\([\w+\s*\w*\W*\s*]*\)/, "");
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
  warmastersTalon: false,
  LogosArray: false,
  Chargeblade: false,
  CaedereWeaponModal: false,
  FulcrumModal: false,
});
function openRulesModal(modalName, event) {
  isRulesModalOpen[modalName] = true;
  isRulesModalOpen["RWMname"] = event.target.textContent.replace(
    /\(\w+\s*\w*\W*\)/,
    ""
  );
}
function closeRulesModal(modalName) {
  isRulesModalOpen[modalName] = false;
  isRulesModalOpen["RWMname"] = "";
}



function checkRule(rule) {
  if (special_rules[rule]) {
    return special_rules[rule];
  } else if (ranged_weapons[rule]) {
    return ranged_weapons[rule];
  } else if (wargear[rule]) {
    return wargear[rule];
  } else if (melee_weapons[rule]) {
    return melee_weapons[rule];
  } else if (unit_types[rule]) {
    return unit_types[rule];
  } else {
    return false;
  }
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

const isSergeant = computed(() => {
  return props.stats && props.stats["sergeant"] !== "";
});

const invisibleSergeant = computed(() => {
  return props.stats && props.stats["invisibleSergeant"] !== true;
});

function updateWidth() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", updateWidth);
  isClassActive.value = !isSergeant.value || isClassActive.value;
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

watch(windowWidth, () => {
  isClassActive.value = !isSergeant.value || isClassActive.value;
});
</script>
<style >
.close-modal-button {
  display: block;
  width: 60px;
  height: 30px;
  margin: auto;
  margin-top: 20px;
}
</style>