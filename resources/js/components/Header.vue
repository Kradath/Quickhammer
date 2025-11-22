<template>
  <header class="header center">
    <h1><router-link to="/" class="h1-header">Quickhammer</router-link></h1>
    <h4 class="header-desc">Rules of Horus Heresy 3rd Edition</h4>
    <div class="header-tables first-line">
      <button
        class="header-tables_button range-icon"
        @click="openModal('modal1')"
      ></button>
      <button
        class="header-tables_button melee-icon"
        @click="openModal('modal2')"
      ></button>
      <button
        class="header-tables_button wound-icon"
        @click="openModal('modal3')"
      ></button>
      <button
        class="header-tables_button statuses-icon"
        @click="openModal('modal4')"
      ></button>
    </div>
    <div class="header-tables second-line">
      <button
        class="header-tables_button gambits-icon"
        @click="openModal('modal5')"
      ></button>
      <button
        class="header-tables_button reactions-icon"
        @click="openModal('modal6')"
      ></button>
      <button
        class="header-tables_button psychic-icon"
        @click="openModal('modal8')"
      ></button>
      <button
        class="header-tables_button missions-icon"
        @click="openModal('modal7')"
      ></button>
    </div>
    <div class="modals">
      <!-- Ballistic -->
      <div
        v-if="isModalOpen.modal1"
        class="modal-overlay"
        @click.self="closeModal('modal1')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">Ballistic Skill Table</h2>
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
          <button @click="closeModal('modal1')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal1')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
      <!-- weapon -->
      <div
        v-if="isModalOpen.modal2"
        class="modal-overlay"
        @click.self="closeModal('modal2')"
      >
        <div class="modal-content quad-table">
          <h2 class="modal-content__h2 center">Weapon Skill Table</h2>
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
          <button @click="closeModal('modal2')" class="close-modal-button">
            Close
          </button>
        </div>
      </div>
      <!-- to wound -->
      <div
        v-if="isModalOpen.modal3"
        class="modal-overlay"
        @click.self="closeModal('modal3')"
      >
        <div class="modal-content quad-table">
          <h2 class="modal-content__h2">Wound Test Table</h2>
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
          <button @click="closeModal('modal3')" class="close-modal-button">
            Close
          </button>
        </div>
      </div>
      <!-- statuses -->
      <div
        v-if="isModalOpen.modal4"
        class="modal-overlay"
        @click.self="closeModal('modal4')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">
            Vehicle Damage Table and Tactical Statuses
          </h2>
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
          <div class="statuses">
            <div class="status">
              <div class="status-head">
                <h4>Stunned</h4>
                <div class="status-desc">
                  The Stunned Status reflects a Unit rendered insensible or
                  stopped in its tracks by the sheer force of an impact,
                  explosion or other battlefield event.
                </div>
              </div>
              <div class="status-text">
                The Stunned Status is primarily inflicted as part of the effects
                of the Stun (X) Special Rule, but may also be applied by
                specific Special Rules. The following Rules apply to any Unit
                that includes one or more Models that have the Stunned Status:
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
                <h4>Pinned</h4>
                <div class="status-desc">
                  The Pinned Status reflects a Unit that has been forced to take
                  cover in the face of overwhelming firepower or the sudden
                  crack of a sniper's rifle.
                </div>
              </div>
              <div class="status-text">
                The Pinned Status is primarily inflicted as part of the effects
                of the Pinning (X) Special Rule, but may also be applied by
                specific Special Rules. The following Rules apply to any Unit
                that includes one or more Models that have the Pinned Status:
                <ul>
                  <li>
                    The Controlling Player of a Unit that includes any Models
                    that are Pinned may not choose to have that Unit move, Rush
                    or Charge in any Phase and any effect that would force them
                    to move or Charge has no effect.
                  </li>
                  <li>
                    A Unit that includes any Models with the Pinned Status that
                    is Locked in Combat makes any Pile-in Moves as normal, but
                    may not choose to Pursue or Disengage during the Resolution
                    Sub-Phase.
                  </li>
                </ul>
              </div>
            </div>
            <div class="status">
              <div class="status-head">
                <h4>Supressed</h4>
                <div class="status-desc">
                  The Suppressed Status reflects a Unit that is distracted and
                  confused by heavy enemy fire, environmental effects or
                  psychological warfare.
                </div>
              </div>
              <div class="status-text">
                The Suppressed Status is primarily inflicted as part of the
                effects of the Suppressive (X) Special Rule, but may also be
                applied by specific Special Rules. The following Rules apply to
                any Unit that includes one or more Models that have the
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
                <h4>Routed</h4>
                <div class="status-desc">
                  The Routed Status reflects a Unit that has suffered such a
                  catastrophic reversal that it must fall back from the front
                  line in order to regroup and recover.
                </div>
              </div>
              <div class="status-text">
                The Routed Status can be inflicted by any of the following:
                <ul>
                  <li>As part of the effects of the Panic (X) Special Rule.</li>
                  <li>
                    If a Unit has had 25% or more of the Models that were part
                    of that Unit at the start of a Shooting Attack Removed as
                    Casualties due to that Shooting Attack, then the Controlling
                    Player must pass a Leadership Check for that Unit or it
                    gains the Routed Status (see the Rules for Panic in the
                    Morale Sub-Phase).
                  </li>
                  <li>
                    The Controlling Player of a Unit that loses Combat must take
                    a Leadership Check for that Unit in the Resolution Sub-Phase
                    and if the Check is failed then the Unit gains the Routed
                    Status.
                  </li>
                  <li>
                    Other Rules may also apply the Routed Status, these Rules
                    will specify how and when this occurs.
                  </li>
                </ul>
                The following Rules apply to any Unit that includes one or more
                Models that have the Routed Status:
                <ul>
                  <li>
                    The Controlling Player of a Unit that includes any Models
                    that are Routed must make all Shooting Attacks for that Unit
                    as Snap Shots.
                  </li>
                  <li>
                    The Controlling Player of a Unit that includes any Models
                    that are Routed may not declare any Reactions for that Unit.
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
                    Any Models that have the Routed Status and move into contact
                    with any point on the Battlefield Edge that is within the
                    Controlling Player's Deployment Zone stop moving, and any
                    Models that have the Routed Status and begin the Rout
                    Sub-Phase in contact with any point on the Battlefield Edge
                    that is within the Controlling Player's Deployment Zone
                    remain Stationary.
                  </li>
                  <li>
                    If a Unit that includes one or more Models with the Routed
                    Status enters contact with an edge of the Battlefield within
                    the Controlling Player's Deployment Zone as part of a Fall
                    Back Move, a Leadership Check must be made for that Unit
                    once all Models in the Unit have completed their moves. If
                    that Leadership Check is failed, then all Models in the Unit
                    are immediately removed from play as Casualties. However, if
                    that Leadership Check is passed then the Unit remains in
                    play and all Models in the Unit lose the Routed Status, but
                    gain the Suppressed Status.
                  </li>
                  <li>
                    In the Assault Phase Charges may not be declared for a Unit
                    that includes any Models with the Routed Status and any Rule
                    or effect that would otherwise force such a Unit to make a
                    Charge has no effect.
                  </li>
                  <li>
                    A Unit that includes any Models with the Routed Status in
                    the Resolution Sub-Phase of the Assault Phase must always
                    Fall Back at the end of that Sub-Phase.
                  </li>
                </ul>
              </div>
              <div class="unit__additional-rules">
                <h4>Designer's Note</h4>
                <p>
                  Astute readers will have noted that a Unit under the Reactive
                  Player's control that loses Combat and gains the Routed Status
                  will be forced to Fall Back from that Combat and will then
                  have to Fall Back a second time in the Controlling Player's
                  following Movement Phase. This is entirely intentional, and is
                  intended to avoid Units 'ping-ponging' in and out of Combat.
                  Players whose Units have been Routed will benefit from the
                  fact that they must halt at the Battlefield Edge, stopping
                  them running to their doom, and the fact that being attacked
                  while Routed does not result in the immediate removal of the
                  Routed Unit, nor stop them from shooting. Furthermore, the
                  various Liber books will present additional options and
                  Wargear that will allow Players the opportunity to mitigate or
                  remove Statuses outside of the Statuses Sub-Phase.
                </p>
              </div>
            </div>
          </div>
          <button @click="closeModal('modal4')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal4')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
      <!-- Gambits -->
      <div
        v-if="isModalOpen.modal5"
        class="modal-overlay"
        @click.self="closeModal('modal5')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">
            Challenge Mods, Gambits and SUM Table
          </h2>
          <h4>Set Up Move Distance</h4>
          <div class="setUpMove">
            <table class="unit-general__table">
              
              <tbody>
                <tr>
                  <th>I+M</th>
                  <td>1-6</td>
                  <td>7-9</td>
                  <td>10-11</td>
                  <td>12-13</td>
                  <td>14-19</td>
                  <td>20+</td>
                </tr>
                <tr>
                  <th>Move</th>
                  <td>1"</td>
                  <td>2"</td>
                  <td>3"</td>
                  <td>4"</td>
                  <td>5"</td>
                  <td>6"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="gambits">
            <div class="unit__additional-rules">
              <h4>Challange Modificators</h4>
              <ul>
                <li>
                  The Initiative score of each Model is added to the result of
                  the Focus Roll.
                </li>
                <li>A Model with the Heavy Sub-Type suffers a -1 modifier.</li>
                <li>A Model suffers a -1 modifier for each lost Wound.</li>
                <li>
                  The Duellist's Edge (X) Special Rule grants a positive
                  modifier equal to the value of X.
                </li>
                <li>A Model with the Light Sub-Type gains a +1 modifier.</li>
                <li>
                  A Model may gain a positive modifier from Outside Support
                </li>
              </ul>
            </div>
            <div>
              <h4>Gambits</h4>
              <p>
                <span class="bold">Seize the Initiative</span> - If this Gambit
                is selected, then the Controlling Player may roll an additional
                Dice in the Focus Step and discard the Dice with the lowest
                result before determining the total.
              </p>
              <p>
                <span class="bold">Flurry of Blows</span>
                - If this Gambit is selected, then the Model controlled by the
                Player that selected this Gambit gains a bonus of +D3 to its
                Current Attacks Characteristic in the Strike Step, but any Hits
                inflicted by these attacks have their Damage Characteristic set
                to '1' and this may not be modified by any Special Rule
                (including Shred (X) or Critical Hit (X)).
              </p>
              <p>
                <span class="bold">Test the Foe</span>
                - If this Gambit is selected, then the Model for which it is
                selected gains no benefit in the Focus or Strike Steps, but if
                it is not Removed as a Casualty, the Controlling Player
                automatically gains Challenge Advantage at the start of the next
                Face-Off Step of the Challenge.
              </p>
              <p>
                <span class="bold">Guard Up</span>
                - If this Gambit is selected, the Model for which it was
                selected gains a bonus of +1 to their Weapon Skill
                Characteristic in the Strike Step, but may only make a single
                Attack regardless of their Attacks Characteristic. In the Strike
                Step, each attack made by the enemy Model that fails to Hit
                grants the Player that selected this Gambit a bonus of +1 to the
                next Focus Roll made if the Challenge is continued.
              </p>
              <p>
                <span class="bold">Taunt and Bait</span>
                - If this Gambit is selected, then the Model controlled by the
                Player that selected this Gambit has its Weapon Skill and
                Attacks Characteristics reduced to be equal to those of the
                enemy Model (or if their Characteristics were already equal, by
                an additional -1) in the Strike Step. However, for each time a
                Player has selected this Gambit in the current Challenge, they
                gain +1 Combat Resolution Point if they win that Challenge.
              </p>
              <p>
                <span class="bold">Grandstand</span>
                - If this Gambit is selected, then the Controlling Player must
                roll an additional Dice in the Focus Step and discard the Dice
                with the highest result before determining the total and the
                Model gains no bonus to the Focus Roll from Outside Support.
                However, in the Strike Step, the Model under that Player's
                control gains a bonus to their Attacks Characteristic equal to
                the Outside Support bonus they would normally have claimed in
                the Focus Step.
              </p>
              <p>
                <span class="bold">Feint and Riposte</span>
                - This Gambit may only be selected by the Player choosing the
                first Gambit in the Face-Off Step. Once selected, the Player
                that selected this Gambit may name any one other Gambit
                (including Faction Specific Gambits that the Player does not
                have access to) and the Opposing Player may not select that
                Gambit in this Face-Off Step.
              </p>
              <p>
                <span class="bold">Withdraw</span>
                - If this Gambit is selected, the Model for which it was
                selected may only make a single Attack regardless of their
                Attacks Characteristic during the Strike Step. However, in the
                Glory Step, a Player that has selected this Gambit may choose to
                end the Challenge, with no Combat Resolution Points scored by
                either Player, as long as the Model under their control has not
                been Removed as a Casualty during the Strike Step.
              </p>
              <p>
                <span class="bold">Finishing Blow</span>
                - If this Gambit is selected, then the Controlling Player must
                roll an additional Dice in the Focus Step and discard the Dice
                with the highest result before determining the total of that
                Focus Roll. However, a Model for which the Finishing Blow Gambit
                has been selected gains a bonus of +1 to the Strength and Damage
                Characteristics of all Hits inflicted in the Strike Step.
              </p>
            </div>
          </div>

          <button @click="closeModal('modal5')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal5')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
      <!-- reactions -->
      <div
        v-if="isModalOpen.modal6"
        class="modal-overlay"
        @click.self="closeModal('modal6')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">Reactions</h2>
          <div class="reactions">
            <div>
              <h4 class="list-li-name">Movement Phase: Reposition</h4>
              <p>
                This Reaction allows the Reactive Player to move a Unit when an
                enemy Unit ends its move within 12".
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Reposition Reaction in
                  <Tooltip word="Step 2" :tooltip-text="moveSteps" /> of the
                  Move Sub-phase process, if an enemy Unit ends a move within
                  12" and in Line of Sight of a Unit under the Reactive Player's
                  Control.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Reposition
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Target Unit is always
                  the Unit whose move triggered the Reaction. Once the cost has
                  been paid, the Reactive Player must select one Unit under
                  their control that is within 12" and has Line of Sight to the
                  Target Unit - that Unit is the Reacting Unit.
                </div>
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
                      each Model in the Reacting Unit may move a number of
                      inches up to the Base Value of its Initiative
                      Characteristic.
                    </li>
                    <li>
                      Once the Reacting Unit has completed this move, the
                      Movement Phase continues as normal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Shooting Phase: Return Fire</h4>
              <p>
                This Reaction allows the Reactive Player to make a Shooting
                Attack for a Unit that is the target of an enemy Shooting
                Attack.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Return Fire Reaction in the Shooting Phase, during
                  <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
                  Shooting Attack sequence of any Shooting Attack made by the
                  Active Player.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Return Fire
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Target Unit is always
                  the Unit whose Shooting Attack triggered the Reaction. The
                  Reacting Unit is always the Unit that was the target of the
                  Shooting Attack that triggered the Reaction.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once a Return Fire Reaction has been declared, the Active
                      Player must resolve all remaining Steps of the Shooting
                      Attack process as normal, up to the start of
                      <Tooltip word="Step 11" :tooltip-text="shootSteps" />.
                    </li>
                    <li>
                      Before resolving
                      <Tooltip word="Step 11" :tooltip-text="shootSteps" />, the
                      Reactive Player makes a Shooting Attack with the Reacting
                      Unit (including with any Models that have been reduced to
                      0 Wounds and before any Panic Checks are taken) targeting
                      only the Target Unit.
                    </li>
                    <li>
                      Once the Shooting Attack made as part of this Reaction has
                      been completely resolved, including removing any
                      Casualties, the Players must then finish resolving
                      <Tooltip word="Step 11" :tooltip-text="shootSteps" />
                      of the original Shooting Attack that triggered the
                      Reaction.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Assault Phase: Overwatch</h4>
              <p>
                This Reaction allows the Reactive Player to make more powerful
                Volley Attacks.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare an Overwatch Reaction during
                  <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of the
                  Charge process of any Charge declared by the Active Player.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare an Overwatch
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> For an Overwatch Reaction,
                  the Target Unit is always the Unit whose Charge triggered the
                  Reaction. The Reacting Unit is always the Unit that was
                  declared as the target of the Charge that triggered this
                  Reaction.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once an Overwatch Reaction has been declared, and once the
                      Active Player has resolved any Volley Attacks they choose
                      to make, the Reactive Player may choose to have the
                      Reacting Unit make a Shooting Attack instead of a Volley
                      Attack.
                    </li>
                    <li>
                      This Shooting Attack must target the Target Unit and is
                      made at full Ballistic Skill, not as Snap Shots, and may
                      be made using any Ranged Weapon. No Cover Tests or
                      Shrouded Damage Mitigation Tests may be taken against
                      wounds inflicted as part of an Overwatch Reaction.
                    </li>
                    <li>
                      Once the Shooting Attack made as part of this Reaction has
                      been fully resolved, the Players must move to
                      <Tooltip word="Step 5" :tooltip-text="chargeSteps" /> of
                      the Charge Process as normal. However, if, once this
                      Shooting Attack has been fully resolved, all Models in the
                      Target Unit or Reacting Unit have been Removed as
                      Casualties then the Charge process is ended immediately
                      and the Active Player may select another Unit to resolve a
                      Charge for.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Death or Glory</h4>
              <p>
                This Advanced Reaction allows a Unit that a Vehicle has moved
                through to attack the Vehicle.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Death or Glory Reaction whenever the Active Player
                  moves through an enemy Unit with a Model that has the Vehicle
                  Type.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Death or
                  Glory Reaction - this cost paid as soon as the declaration is
                  made.
                </div>
                <div>
                  <span class="bold">Target:</span> For a Death or Glory
                  Reaction, the Target Model is always the enemy Model with the
                  Vehicle Type that triggered this Reaction. The Unit that was
                  being moved through by the Target Unit is considered the
                  Reacting Unit.
                </div>
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
                      Reacting Unit, referred to hereafter as the Attacking
                      Model. The Attacking Model does not have to be in Base
                      Contact with the Target Model. The Attacking Model may not
                      have the Vehicle Type.
                    </li>
                    <li>
                      The Attacking Model may attack with either a Melee or
                      Ranged Weapon, making a number of attacks equal to the
                      Firepower of the selected Ranged Weapon or the Attacks
                      Characteristic of the Attacking Model, modified by the
                      selected Melee Weapon's Attacks Modifier Characteristic.
                      Whatever form the attack takes, all attacks automatically
                      hit and any Armour Penetration Tests are resolved against
                      the Target Model's Front Armour.
                    </li>
                    <li>
                      If the attack causes the Target Model to be Removed as a
                      Casualty or inflicts the Pinned Status, then the Attacking
                      Model remains in play - otherwise it is immediately
                      Removed as a Casualty with no Saving Throws or Damage
                      Mitigation Tests of any kind allowed. If the Target Model
                      is Removed as a Casualty then no Hits are inflicted due to
                      it moving through an enemy Unit. If it remains in play
                      then such Hits are inflicted as normal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Intercept</h4>
              <p>
                This Advanced Reaction allows a Unit to attack Units moving into
                play from Reserves.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare an Intercept Reaction whenever the Active Player
                  brings a Unit into play from Reserves or Aerial Reserves. The
                  declaration is made as soon as the last Model from the Unit is
                  placed on the Battlefield and has made any moves it is
                  permitted to make when it enters play.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare an Intercept
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Unit entering play from
                  Reserves or Aerial Reserves is always the Target Unit of this
                  Reaction. After declaring this Reaction, the Reactive Player
                  must select one Unit under their control, this Unit must be
                  able to draw a Line of Sight to at least one Model in the
                  Target Unit. The selected Unit is the Reacting Unit.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once an Intercept Reaction has been declared, the Reactive
                      Player may make a Shooting Attack for the Reacting Unit,
                      targeting only the Target Unit. All attacks made as part
                      of this Shooting Attack must be made as Snap Shots and
                      Models with the Vehicle Type may only attack with
                      Defensive Weapons.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Evade</h4>
              <p>
                This Advanced Reaction allows a Unit to attempt to avoid an
                enemy Charge by moving.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare an Evade Reaction at the end of
                  <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of a
                  Charge declared by the Active Player that targets a Unit
                  entirely composed of Models with the Light Sub-Type or Cavalry
                  Type.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare an Evade
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Unit that is the target
                  of the Charge that triggered this Reaction is the Reacting
                  Unit, while the Unit making that Charge is the Charging Unit.
                  Process
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      After all Volley Attacks have been made by both the
                      Reacting Unit and the Charging Unit, the Reactive Player
                      may make a move for each Model in the Reacting Unit.
                    </li>
                    <li>
                      Each Model in the Reacting Unit may be moved a number of
                      inches equal to its Initiative Characteristic and must end
                      the Move in Unit Coherency with another Model from the
                      same Unit.
                    </li>
                    <li>
                      If this move would leave all Models in the Reacting Unit
                      outside of the Charging Unit's maximum possible Charge
                      Range then the Charge has failed and no Combat is
                      resolved. Otherwise, the Charge proceeds as normal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Nullify</h4>
              <p>
                This Advanced Reaction allows the Reactive Player to attempt a
                Willpower Check to negate a Psychic Curse. Note that Nullify is
                both an Advanced Reaction and a Psychic Reaction.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Nullify Psychic Reaction when they fail a Resistance
                  Check made to negate a Psychic Curse manifested by the Active
                  Player.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Nullify
                  Reaction - this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Unit that is the target
                  of the Psychic Curse that triggered this Reaction is always
                  the Target Unit. Once this Reaction has been declared, the
                  Reactive Player must nominate a Model under their control with
                  the Psyker Trait that has a Line of Sight to either any one
                  Model in the Target Unit or to the Focus of the Psychic Curse.
                  The Model selected is the Reacting Model and the Unit that
                  includes it is considered to be the Unit that has made this
                  Reaction.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once the Reacting Model has been selected, the Reactive
                      Player subtracts the Willpower Characteristic of the
                      Psychic Curse's Focus from the Willpower Characteristic of
                      the Reacting Model. The result is the Power modifier,
                      which may be negative if the Psychic Curse's Focus'
                      Willpower is high.
                    </li>
                    <li>
                      The Reactive Player must then make a Willpower Check for
                      the Reacting Model, applying the Power modifier to the
                      result of that Check.
                    </li>
                    <li>
                      If the Check is passed then the Psychic Curse whose
                      declaration triggered this Reaction automatically fails to
                      manifest and may not be re-attempted this Turn. If the
                      Check fails then the Psychic Curse is resolved as normal.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Heroic Intervention</h4>
              <p>
                This Advanced Reaction allows the Reactive Player to declare
                Challenges.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Heroic Intervention Reaction if, in
                  <Tooltip word="Step 1" :tooltip-text="challangeSteps" /> of
                  the Challenge Sub-Phase, the Active Player chooses to pass and
                  declare no Challenge for a selected Combat.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Heroic
                  Intervention Reaction - this cost paid as soon as the
                  declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Combat in which the
                  Active Player chose not to declare a Challenge, triggering
                  this Reaction, is the Target Combat.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once this Reaction is declared the Reactive Player may
                      choose to declare a Challenge, selecting one eligible
                      Model under their control in the Target Combat to be the
                      Challenger.
                    </li>
                    <li>
                      The Active Player may then select one eligible Model under
                      their control in the same Combat to accept the Challenge.
                      The Model selected is then considered the Challenged.
                    </li>
                    <li>
                      If the Active Player chooses not to select an eligible
                      Model to accept the Challenge, then the Reactive Player
                      must select one enemy Model from the same Combat which was
                      eligible to accept the Challenge (if any such Model
                      exists) and apply the Disgraced Status to that Model. The
                      Active Player must then select another eligible Combat as
                      per the normal Challenge Sub-Phase Rules.
                    </li>
                    <li>
                      If, for any reason, the Active Player cannot select an
                      eligible Model (for example, if a Special Rule prohibits
                      an otherwise eligible Model from accepting the Challenge),
                      then no Challenge occurs and the Challenge Sub-Phase
                      continues as normal, with the Reactive Player scoring no
                      Combat Resolution Points as a result of this Reaction. If
                      the Active Player selects an eligible Model to take part
                      in the Challenge, then the Challenge is resolved using the
                      normal Rules.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Combat Air Patrol</h4>
              <p>
                This Advanced Reaction allows a Unit composed entirely of Models
                with the Interceptor Trait that is in Aerial Reserves to attack
                enemy Flyers moving into play from Reserves.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Combat Air Patrol Advanced Reaction whenever the
                  Active Player brings a Unit into play from Aerial Reserves.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Combat Air
                  Patrol Advanced Reaction - this cost paid as soon as the
                  declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> For a Combat Air Patrol
                  Advanced Reaction, the Target Model is always the enemy Model
                  that was brought into play from Aerial Reserves and triggered
                  this Reaction.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once declared, the Reactive Player must select one Unit
                      under their control that is in Aerial Reserves and is
                      composed entirely of Models with the Interceptor Trait.
                      This Unit is hereafter referred to as the 'Reacting Unit.
                      A Unit including Models with the Flyer Sub-Type may be
                      selected as the Reacting Unit.
                    </li>
                    <li>
                      Once the Target Model has completed the Move associated
                      with its Combat Assignment, but before any Units have
                      Disembarked from the Target Model, the Reactive Player may
                      place the Reacting Unit anywhere on the Battlefield Edge
                      and then move it up a number of inches equal to its
                      Movement Characteristic straight forwards without turning.
                    </li>
                    <li>
                      Once this move is complete, the Reactive Player may make a
                      single Shooting Attack with the Reacting Unit that must
                      target the Target Unit, counting all Ranged Weapons Models
                      in the Reacting Unit have as Defensive Weapons.
                    </li>
                    <li>
                      Once this Shooting Attack has been completely resolved,
                      the Reacting Unit is removed from play and returned to
                      Aerial Reserves.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Medic!</h4>
              <p>
                This Reaction allows the Reactive Player to make Recovery Tests
                for a Unit that is the target of a Shooting Attack if the Target
                Unit has a Medic.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Medic! Advanced Reaction in
                  <Tooltip word="Step 9" :tooltip-text="shootSteps" /> of any
                  Shooting Attack if the Target Unit of the Shooting Attack
                  includes one or more Models with the Medic (X) Special Rule.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Medic!
                  Reaction, this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> The Target Unit is always
                  the Unit which is the target of the Shooting Attack that
                  triggered the Reaction. Once the cost has been paid, the
                  Reactive Player must select one eligible Unit under their
                  control that is a target of that Shooting Attack. That Unit is
                  the Reacting Unit.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      Once a Medic! Advanced Reaction has been declared, the
                      Active Player continues resolving that Shooting Attack.
                    </li>
                    <li>
                      In Step 11 of that Shooting Attack, the Reactive Player
                      may make one Recovery Test for each Model in the Target
                      Unit that is allocated an Unsaved Wound - but no more than
                      one Recovery Test may be made for any single Model.
                      However, no Recovery Tests may be made for any Model in
                      the Target Unit that has the Medic (X) Special Rule.
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h4 class="list-li-name">Shieldwall!</h4>
                <p>
                  This Reaction allows the Reactive Player to gain a bonus to
                  the Toughness Characteristic of Models in a Unit targeted by a
                  Shooting Attack or Volley Attack if the majority of those
                  Models have the Shield Trait.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Reactive Player may
                    declare a Shieldwall! Reaction in the Shooting Phase, at the
                    start of
                    <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
                    Shooting Attack sequence of any Shooting Attack made by the
                    Active Player, or at the start of
                    <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of a
                    Charge declared by the Active Player.
                  </div>
                  <div>
                    <span class="bold">Cost:</span> The Reactive Player must
                    spend 1 point of their Reaction Allotment to declare a
                    Shieldwall! Reaction, this cost paid as soon as the
                    declaration is made.
                  </div>
                  <div>
                    <span class="bold">Target:</span> For a Shieldwall!
                    Reaction, the Reacting Unit is always the unit that was the
                    target of the Shooting Attack or Charge that triggered the
                    Reaction. This Unit must include a majority of Models with
                    the 'Shield' Trait at the point when the Reaction is
                    declared.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        The Active Player continues to resolve this Shooting
                        Attack as normal.
                      </li>
                      <li>
                        All Models in the Unit for which this Advanced Reaction
                        is declared have their Toughness Characteristic modified
                        by +1 for the duration of the Phase in which this
                        Reaction was declared.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 class="list-li-name">Smokescreen</h4>
              <p>
                This Reaction allows the Reactive Player to gain Shrouded Damage
                Mitigation Rolls for a Model with the Smokescreen Trait.
              </p>
              <div class="unit-ability-desc">
                <div>
                  <span class="bold">Trigger:</span> The Reactive Player may
                  declare a Smokescreen Reaction in the Shooting Phase, at the
                  start of
                  <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of the
                  Shooting Attack sequence of any Shooting Attack made by the
                  Active Player.
                </div>
                <div>
                  <span class="bold">Cost:</span> The Reactive Player must spend
                  1 point of their Reaction Allotment to declare a Smokescreen
                  Reaction, this cost paid as soon as the declaration is made.
                </div>
                <div>
                  <span class="bold">Target:</span> For a Smokescreen Reaction,
                  the Reacting Unit is always the Unit that was the target of
                  the Shooting Attack that triggered the Reaction. This Unit
                  must include a majority of Models with the Smokescreen Trait
                  at the point when the Reaction is declared.
                </div>
                <div>
                  <span class="bold">Process:</span>
                  <ul class="unit-ability-desc_ul">
                    <li>
                      The Active Player continues to resolve this Shooting
                      Attack as normal.
                    </li>
                    <li>
                      All Models in the Unit for which this Reaction was
                      declared gain a 5+ Shrouded Damage Mitigation Test against
                      any wounds, Penetrating Hits or Glancing Hits inflicted
                      during any Shooting Attack made in the same Phase in which
                      this Reaction was declared.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button @click="closeModal('modal6')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal6')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
      <!-- missions -->
      <div
        v-if="isModalOpen.modal7"
        class="modal-overlay"
        @click.self="closeModal('modal7')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">Missions and Deplyments</h2>
          <div class="missions center">
            <div>
              <h4>Primary and Secondary Objectives</h4>
              <div>
                To score Victory Points from an Objective Marker, it must be
                'Controlled'. In order to Control an Objective Marker, a Player
                must have at least one Model from any Unit under their control
                within 3" of the Objective Marker. Any of the following
                situations will stop a Unit from being eligible to Control an
                Objective Marker:
                <ul>
                  <li>
                    If any Model in the Unit is affected by the Stunned,
                    Suppressed, Pinned or Routed Statuses then that Unit may not
                    Control an Objective Marker.
                  </li>
                  <li>
                    If a Unit is Locked in Combat then it may not Control an
                    Objective Marker.
                  </li>
                  <li>
                    If a Unit is Embarked on another Model then it may not
                    Control an Objective Marker.
                  </li>
                  <li>
                    If a Unit includes any Models with the Vehicle, Cavalry or
                    Automata Type then it may not Control an Objective Marker.
                  </li>
                </ul>

                In any Core Mission, the following Secondary Objectives will
                always be in play, but the exact variant in use may vary in each
                Mission. In all cases, the Mission will list which variants of
                these Secondary Objectives are in use for that Mission.
                Secondary Objectives are a series of optional conditions which,
                if met, award the Player additional Victory Points.
                <ul>
                  <li>
                    <span class="">Slay the Warlord (X):</span> If an enemy High
                    Command Choice is Removed as a Casualty for any reason
                    before the end of the Battle, the Opposing Player scores
                    Victory Points. The number of Victory Points scored is equal
                    to the value of X attached to this Secondary Objective (this
                    may only be scored once per Battle, regardless of the number
                    of qualifying Units Removed as Casualties).
                  </li>
                  <li>
                    <span class="">Giant Killer (X):</span> If an enemy Lord of
                    War or Warlord Choice is Removed as a Casualty for any
                    reason, then the Opposing Player scores Victory Points. The
                    number of Victory Points scored is equal to the value of X
                    attached to this Secondary Objective (this may only be
                    scored once per Battle, regardless of the number of
                    qualifying Units Removed as Casualties).
                  </li>
                  <li>
                    <span class="">Last Man Standing (X):</span> If, at the end
                    of the Battle, a Player has more Units that include no
                    Models with the Routed Status on the Battlefield than all
                    Opposing Players combined, then that Player scores Victory
                    Points. The number of Victory Points scored is equal to the
                    value of X attached to this Secondary Objective. This
                    Secondary Objective cannot be scored if the Battle ends due
                    to the Sudden Death Rule.
                  </li>
                  <li>
                    <span class="">First Strike (X):</span> If a Player causes
                    one or more enemy Units to have all of their remaining
                    Models Removed as Casualties (Units that Fall Back off the
                    Battlefield count for this purpose) in their first Player
                    Turn as the Active Player, then that Player scores Victory
                    Points. The number of Victory Points scored is equal to the
                    value of X attached to this Secondary Objective.
                  </li>
                </ul>
              </div>
              <h3>Mission Special Rules</h3>
              <p>
                The Core Missions make use of a number of Mission Special Rules.
                These are Special Rules that only apply during a Mission that
                lists them and supersede certain aspects of the Core Rules or
                add new options to play. The Mission Special Rules used in the
                Core Missions are detailed here.
              </p>
              <p class="bold">Sieze the Initiative</p>
              <p>
                When this Mission Special Rule is in use, before beginning the
                First Turn of the Battle, the Player that is not taking the
                first Player Turn may choose to roll a Dice. If the result of
                this Dice roll is 6 or more, then that Player takes the First
                Player Turn instead.
              </p>
              <p class="bold">Counter Offensive</p>
              <p>
                When this Mission Special Rule is in use, if at the start of the
                last Battle Turn of the Battle a Player has only half or less
                the number of Victory Points currently scored by the Opposing
                Player, then that Player may declare a Counter Offensive. If
                they choose to do so, then all Victory Points scored by that
                Player in the last Battle Turn for controlling an Objective or
                by means of the Vanguard (X) Special Rule are doubled. The
                number of Victory Points scored is doubled after any modifiers
                have been applied to the value of an Objective.
              </p>
              <p class="bold">Reserves</p>
              <p>
                Various Rules will allow or require Players to place Units in
                Reserves. Reserves is an area outside of the bounds of the
                Battlefield - Models that are in Reserves may not be selected or
                attacked during any Player's Turn, but do not count as having
                been Removed as Casualties. Models that are in Reserves should
                be kept near the Battlefield, but separate from any Models
                Removed as Casualties and must be made known to all other
                Players in the game.
              </p>
              <p>
                While Units are in Reserves, the Controlling Player may freely
                declare that Units in Reserves have Embarked upon another
                friendly Unit that is in Reserves if the Unit would normally be
                capable of doing so. Likewise, Models in Reserves that are
                capable of joining or leaving Units may join or leave a friendly
                Unit that is also in Reserves freely by means of the Controlling
                Player declaring it is so. Entering Battle From Reserves In the
                Reserves Sub-Phase of the Active Player's Movement Phase, each
                Unit that the Active Player has in Reserves must take a Reserves
                Test. Entering Reserves from the Battlefield A Unit may only
                enter Reserves from the Battlefield if a Special Rule allows it
                to do so. Where this is the case, the Special Rule in question
                will detail how this is accomplished. The only Core Rules that
                allow Models to enter Reserves from the Battlefield are those
                for Models with the Flyer Sub-Type. In general Models may not
                move 'off of the Battlefield', and moving to the Battlefield
                Edge does not allow a Unit to enter Reserves.
              </p>
            </div>
            <div>
              <h4>1. The Heart of Battle</h4>
              <p>
                In order to claim victory in The Heart of Battle, Players must
                capture a single high value central Objective Marker, or
                dominate surrounding lesser value Objective Markers to
                accumulate Victory Points each Turn.
              </p>
              <h3>Victory Conditions: The Storm's Centre</h3>
              Primary Mission Objectives
              <ul>
                <li>Capture Objective Markers</li>
              </ul>
              Secondary Missions:
              <ul>
                <li>Slay the Warlord (3)</li>
                <li>Giant Killer (3)</li>
                <li>Last Man Standing (3)</li>
                <li>First Strike (3)</li>
              </ul>
              <p>
                This Core Mission uses a single Objective Marker with a value of
                '3', placed at the centre of the Battlefield, and two Objective
                Markers with a value of '1' placed away from the centre of the
                Battlefield. In the Victory Sub-Phase of each Player's turn as
                the Active Player they may score Victory Points if they Control
                any Objective Markers (Players may also score Victory Points
                from the Core Mission Secondary Objectives).
              </p>
              <p>
                At the end of Battle Turn Four, the Player with the highest
                total of Victory Points is the winner.
              </p>
              <h3>Objective Markers</h3>
              <p>
                A single Objective Marker with a value of '3' and two Objective
                Markers with a value of '1' must be placed for this Core
                Mission.
              </p>
              <p>
                In Step 4 of the Core Mission process, a single Objective Marker
                with a value of '3' must be placed at the centre point of the
                Battlefield. If the Objective Marker cannot be placed at the
                exact centre of the Battlefield, due to the presence of
                Impassable Terrain or another obstacle, then the Players must
                select a mutually agreed upon point on the Battlefield as close
                to the centre of the Battlefield as possible, whilst also being
                outside of any Area of Impassable Terrain and clear of any
                obstacles, to place the Objective Marker.
              </p>
              <p>
                In addition to the central Objective Marker, the Players must
                also place two Objective Markers with a value of 1. To place
                these Objective Markers the Players must first roll off. The
                Player that wins must then place one Objective Marker with a
                value of '1' anywhere on the Battlefield that is at least 12"
                away from the central Objective Marker and at least 6" away from
                any Battlefield edge. Once the Objective Marker with a value of
                '1' has been placed, the Player that lost the roll-off must then
                place a second such Objective Marker anywhere on the Battlefield
                that is at least 12" away from the central Objective Marker and
                at least 6" away from any Battlefield Edge or the other
                Objective Marker.
              </p>
              <h3>Mission Special Rules</h3>
              <p>
                This Mission uses the Reserves, Counter Offensive and Seize the
                Initiative Mission Special Rules.
              </p>
            </div>

            <div>
              <h4>2. The Crucible of War</h4>
              <p>
                In order to claim victory in The Crucible of War, Players must
                capture any of four Objective Markers to accumulate Victory
                Points.
              </p>
              <h3>Victory Conditions: Vital Ground</h3>
              Primary Mission Objectives
              <ul>
                <li>Capture Objective Markers</li>
              </ul>
              Secondary Missions:
              <ul>
                <li>Slay the Warlord (2)</li>
                <li>Giant Killer (2)</li>
                <li>Last Man Standing (2)</li>
                <li>First Strike (4)</li>
              </ul>
              <p>
                This Core Mission uses four Objective Markers with a value of
                '2', placed in the middle of the Battlefield. In the Victory
                Sub-Phase of each Player's turn as the Active Player they may
                score Victory Points if they Control any Objective Marker
                (Players may also score Victory Points from the Core Mission
                Secondary Objectives).
              </p>
              <p>
                At the end of Battle Turn Four, the Player with the highest
                total of Victory Points is the winner.
              </p>
              <h3>Objective Markers</h3>
              <p>
                Four Objective Markers with a value of '2' must be placed for
                this Core Mission.
              </p>
              <p>
                In Step 4 of the Core Mission Process four Objective Markers,
                each with a value of '2', must be placed in a fixed area of the
                Battlefield. To place these Objective Markers the Players must
                first roll off. The Player that wins must then place one
                Objective Marker anywhere on the Battlefield that is at least
                12" away from any Battlefield edge. Once the first Objective
                Marker has been placed, the Player that lost the roll-off must
                then place a second Objective Marker anywhere on the Battlefield
                that is at least 12" away from any Battlefield Edge or any other
                Objective Marker. The Players then alternate placing a second
                Objective Marker each using the same restrictions.
              </p>
              <h3>Mission Special Rules</h3>
              <p>
                This Mission uses the Reserves, Counter Offensive and Seize the
                Initiative Mission Special Rules.
              </p>
            </div>
            <div>
              <h4>3. Take And Hold</h4>
              <p>
                In order to claim victory in Take and Hold, Players must hold
                Objectives in the middle of the Battlefield, exploiting the
                limited value of those Objectives to confound the foe.
              </p>
              <h3>Victory Conditions: Vital Ground</h3>
              Primary Mission Objectives
              <ul>
                <li>Capture Objective Markers</li>
              </ul>
              Secondary Missions:
              <ul>
                <li>Slay the Warlord (2)</li>
                <li>Giant Killer (4)</li>
                <li>Last Man Standing (4)</li>
                <li>First Strike (2)</li>
              </ul>
              <p>
                This Core Mission uses two Objectives with a value of '3',
                placed in the middle of the Battlefield. In the Victory Sub-
                Phase of each player's turn as the Active Player they may score
                Victory Points if they Control any Objective Marker (Players may
                also score Victory Points from the Core Mission Secondary
                Objectives).
              </p>
              <p>
                At the end of Battle Turn Four, the Player with the highest
                total of Victory Points is the winner.
              </p>
              <h3>Objective Markers</h3>
              <p>
                Two Objective Markers with a value of '3' must be placed for
                this Core Mission.
              </p>
              <p>
                In Step 4 of the Core Mission Process two Objective Markers,
                each with a value of '3', must be placed in a fixed area of the
                Battlefield. To place these Objective Markers the Players must
                first roll off. The Player that wins must then place one
                Objective Marker anywhere on the Battlefield that is at least
                12" away from any Battlefield edge. Once the first Objective
                Marker has been placed, the Player that lost the roll-off must
                then place a second Objective Marker anywhere on the Battlefield
                that is at least 12" away from any Battlefield edge and at least
                18" away from the other Objective Marker.
              </p>

              <h3>Mission Special Rules</h3>
              <p>
                This Mission uses the Reserves, Seize the Initiative, Counter
                Offensive and Window of Opportunity Special Rules.
              </p>
              <div class="unit__additional-rules">
                <p class="bold">Window of Opportunity</p>
                <p>
                  In a Mission using this Special Rule, whenever a Player scores
                  Victory Points for controlling an Objective Marker in the
                  Victory Sub-Phase, the value of that Objective Marker is
                  reduced by 1, to a minimum of 0. When an Objective Marker is
                  reduced to a value of 0, it is immediately removed from play
                  and can no longer be controlled or scored from.
                </p>
              </div>
            </div>
          </div>
          <div class="deployments">
            <h3>Deployments</h3>
            <h4>1. Search and Destroy</h4>
            <img src="../pct/first.png" alt="" class="deployment" />
            <h4>2. Hammer And Anvil</h4>
            <img src="../pct/second.png" alt="" class="deployment" />
            <h4>3. Dawn Of War</h4>
            <img src="../pct/third.png" alt="" class="deployment" />
          </div>
          <button @click="closeModal('modal7')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal7')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
      <!-- Psychic -->
      <div
        v-if="isModalOpen.modal8"
        class="modal-overlay"
        @click.self="closeModal('modal8')"
      >
        <div class="modal-content">
          <h2 class="modal-content__h2">Psychic Disciplines</h2>
          <div>
            <h4>Perils of the Warp</h4>
            <table class="unit-general__table">
              <tbody>
                <tr>
                  <td>1 or 6</td>
                  <td>
                    <span class="bold">WARP RUPTURE:</span> The Unit suffers a
                    number of wounds which ignore all Armour Saves, Cover Saves
                    and Damage Mitigation Rolls. Invulnerable Saves may be taken
                    against these wounds as normal and they are allocated as if
                    they were inflicted by a Shooting Attack. The number of
                    wounds inflicted is 13 minus the Willpower Characteristic of
                    the Model in the Unit with the lowest Willpower
                    Characteristic. If the Unit includes any Models with the
                    Sergeant Sub-Type, Command Sub-Type or the Paragon Type then
                    the Willpower Characteristic of one of those Models chosen
                    by the Unit's Controlling Player may be used instead.
                  </td>
                </tr>
                <tr>
                  <td>2,3,4,5</td>
                  <td>
                    <span class="bold">ÆTHERIC FEEDBACK:</span> The Unit gains
                    the Stunned Status.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- psychic__powers -->
          <div class="psychic">
            <!-- Biomancy -->
            <div>
              <h4>Biomancy</h4>
              A Model with the Biomancy Discipline gains the following benefits:
              <ul>
                <li>The Impact (Strength) Special Rule</li>
                <li>The Biomantic Rage Psychic Power</li>
                <li>The Biomantic Slam Psychic Weapon</li>
                <li>The 'Biomancer' Trait</li>
              </ul>
              <div>
                <h3 class="list-li-name">
                  Biomantic Rage (Psychic Power, Blessing)
                </h3>
                <p>
                  This Power is used in the Charge Sub-Phase to add a bonus to a
                  Unit's Strength and Toughness.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Active Player may
                    choose to Manifest the Biomantic Rage Psychic Power in the
                    Charge Sub-Phase, at
                    <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of the
                    Charge process before any Unit makes a Volley Attack.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of the Power must
                    be a Model with the Biomancer Trait under the Active
                    Player's control, and must be either part of the Unit making
                    a Charge or within 18" and with Line of Sight to one or more
                    Models in that Unit.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be
                    the Unit currently selected and in the process of making a
                    Charge.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Power last until the
                    end of the current Assault Phase.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, make a
                        Manifestation Check.
                      </li>
                      <li>
                        If the Manifestation Check is successful, then no Volley
                        Attack may be made for the Target Unit, but all Models
                        in the Target Unit gain a bonus of +2 to their Strength
                        and Toughness Characteristics.
                      </li>
                      <li>
                        If the Manifestation Check fails then there is no
                        further effect.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="unit-ability-weapon">
                <h3>Biomantic Slam</h3>
                <!-- таблица для десктопа -->
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
                      <td>-3</td>
                      <td>1</td>
                      <td>12</td>
                      <td>2</td>
                      <td>2</td>
                      <td>Armourbane, Force(D)</td>
                      <td>Psychic, Melee</td>
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
                    <div class="cell">-3</div>
                    <div class="cell">1</div>
                    <div class="cell">12</div>
                    <div class="cell">2</div>
                    <div class="cell">2</div>
                    <div class="cell">
                      <div class="first-letter">Psychic</div>
                    </div>
                    <!-- Третья строка -->
                    <div
                      class="full-span-cell grid-table__head left"
                      style="grid-column: span 6"
                    >
                      Special Rules
                    </div>

                    <!-- Четвертая строка -->
                    <div
                      class="full-span-cell end-cell"
                      style="grid-column: span 6"
                    >
                      <div class="comma wrap">
                        <div>Armourbane, Force(D)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Pyromancy -->
            <div>
              <h4>Pyromancy</h4>
              A Model with the Biomancy Discipline gains the following benefits:
              <ul>
                <li>The Explodes (4+) Special Rule</li>
                <li>The Wildfire Psychic Weapon</li>
                <li>The Conflagration Psychic Weapon</li>
                <li>The 'Pyromancer' Trait</li>
              </ul>
              <div class="unit-ability-weapon">
                <h3>Wildfire</h3>
                <!-- таблица для десктопа -->
                <table class="profiles__weapon-table" v-if="windowWidth > 800">
                  <thead>
                    <tr>
                      <th>R</th>
                      <th>FP</th>
                      <th>RS</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Special Rules</th>
                      <th>Traits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18</td>
                      <td>1</td>
                      <td>4</td>
                      <td>4</td>
                      <td>1</td>
                      <td>Panic(1), Blast(5"), Force(Strength)</td>
                      <td>Ranged, Psychic</td>
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
                    <div class="grid-table__head cell">R</div>
                    <div class="grid-table__head cell">FP</div>
                    <div class="grid-table__head cell">RS</div>
                    <div class="grid-table__head cell">AP</div>
                    <div class="grid-table__head cell">D</div>
                    <div class="grid-table__head cell">Traits</div>

                    <!-- Вторая строка -->
                    <div class="cell">18</div>
                    <div class="cell">1</div>
                    <div class="cell">4</div>
                    <div class="cell">4</div>
                    <div class="cell">1</div>
                    <div class="cell">
                      <div class="first-letter">Psychic</div>
                    </div>
                    <!-- Третья строка -->
                    <div
                      class="full-span-cell grid-table__head left"
                      style="grid-column: span 6"
                    >
                      Special Rules
                    </div>

                    <!-- Четвертая строка -->
                    <div
                      class="full-span-cell end-cell"
                      style="grid-column: span 6"
                    >
                      <div class="comma wrap">
                        <div>Panic(1), Blast(5"), Force(Strength)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="unit-ability-weapon">
                <h3>Conflagration</h3>
                <!-- таблица для десктопа -->
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
                      <td>-1</td>
                      <td>6+D3</td>
                      <td>5</td>
                      <td>4</td>
                      <td>1</td>
                      <td>Deflagrate(5)</td>
                      <td>Melee, Psychic</td>
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
                    <div class="cell">-1</div>
                    <div class="cell">6+D3</div>
                    <div class="cell">5</div>
                    <div class="cell">4</div>
                    <div class="cell">1</div>
                    <div class="cell">
                      <div class="first-letter">Melee, Psychic</div>
                    </div>
                    <!-- Третья строка -->
                    <div
                      class="full-span-cell grid-table__head left"
                      style="grid-column: span 6"
                    >
                      Special Rules
                    </div>

                    <!-- Четвертая строка -->
                    <div
                      class="full-span-cell end-cell"
                      style="grid-column: span 6"
                    >
                      <div class="comma wrap">
                        <div>Deflagrate(5)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Telekinesis -->
            <div>
              <h4>Telekinesis</h4>
              A Model with the Telekinesis Discipline gains the following
              benefits:
              <ul>
                <li>The Shrouded (4+) Special Rule</li>
                <li>The Force Barrier Psychic Reaction.</li>
                <li>The Immovable Force Psychic Weapon</li>
                <li>The 'Telekine' Trait</li>
              </ul>
              <div>
                <h3 class="list-li-name">
                  Force Barrier (Psychic Power, Blessing)
                </h3>
                <p>
                  This Power can be used in either the Shooting or Assault Phase
                  and grants a Shrouded Damage Mitigation Test.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Reactive Player may
                    choose to declare a Force Barrier Psychic Reaction in either
                    the Assault Phase, at the start of
                    <Tooltip word="Step 4" :tooltip-text="chargeSteps" /> of the
                    Charge Process, or in the Shooting Phase, at the start of
                    <Tooltip word="Step 3" :tooltip-text="shootSteps" /> of a
                    Shooting Attack made by the Active Player.
                  </div>
                  <div>
                    <span class="bold">Cost:</span> The Reactive Player must
                    spend 1 point of their Reaction Allotment to declare a Force
                    Barrier Psychic Reaction - this cost paid as soon as the
                    declaration is made.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of this Psychic
                    Reaction must be a Model with the Telekine Trait under the
                    Reactive Player's control, and must be a part of the Unit
                    targeted by the Charge or Shooting Attack that triggers this
                    Psychic Reaction.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be
                    the Unit that is the target of the Shooting Attack or Charge
                    that triggered the Reaction.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Reaction last until
                    the end of the Sub-Phase in which it was declared.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, make a
                        Manifestation Check.
                      </li>
                      <li>
                        If the Manifestation Check is successful, then all
                        Models in the Target Unit gain a 3+ Shrouded Damage
                        Mitigation Test against any wounds inflicted during a
                        Volley or Shooting Attack.
                      </li>
                      <li>
                        If the Manifestation Check fails then there is no
                        further effect.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="unit-ability-weapon">
                <h3>Immovable Force</h3>
                <!-- таблица для десктопа -->
                <table class="profiles__weapon-table" v-if="windowWidth > 800">
                  <thead>
                    <tr>
                      <th>R</th>
                      <th>FP</th>
                      <th>RS</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Special Rules</th>
                      <th>Traits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18</td>
                      <td>3</td>
                      <td>6</td>
                      <td>4</td>
                      <td>1</td>
                      <td>Pinning(2), Force(Firepower)</td>
                      <td>Ranged, Psychic</td>
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
                    <div class="grid-table__head cell">R</div>
                    <div class="grid-table__head cell">FP</div>
                    <div class="grid-table__head cell">RS</div>
                    <div class="grid-table__head cell">AP</div>
                    <div class="grid-table__head cell">D</div>
                    <div class="grid-table__head cell">Traits</div>

                    <!-- Вторая строка -->
                    <div class="cell">18</div>
                    <div class="cell">3</div>
                    <div class="cell">6</div>
                    <div class="cell">4</div>
                    <div class="cell">1</div>
                    <div class="cell">
                      <div class="first-letter">Psychic, Ranged</div>
                    </div>
                    <!-- Третья строка -->
                    <div
                      class="full-span-cell grid-table__head left"
                      style="grid-column: span 6"
                    >
                      Special Rules
                    </div>

                    <!-- Четвертая строка -->
                    <div
                      class="full-span-cell end-cell"
                      style="grid-column: span 6"
                    >
                      <div class="comma wrap">
                        <div>Pinning(2), Force(Firepower)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Divination -->
            <div>
              <h4>Divination</h4>
              A Model with the Divination Discipline gains the following
              benefits:
              <ul>
                <li>The Duellist's Edge (2) Special Rule</li>
                <li>The Every Strike Foreseen Gambit</li>
                <li>The Foresight's Blessing Psychic Power</li>
                <li>The 'Diviner' Trait</li>
              </ul>
              <p>
                <span class="bold">Every Strike Foreseen</span> - If this Gambit
                is selected, the Controlling Player must make a Willpower Check
                for the Model using this Gambit. If the Check is successful then
                in the Strike Step of the Challenge any Hit Tests made for this
                Model are successful on a result of 2+ regardless of the Weapon
                Skill Characteristics of the Models involved in the Challenge.
                If the Willpower Check is not successful then Hit Tests are made
                as normal. Note that this Willpower Check cannot inflict Perils
                of the Warp.
              </p>
              <div>
                <h3 class="list-li-name">
                  Foresight's Blessing (Psychic Power, Blessing)
                </h3>
                <p>
                  This Power is used as part of a Shooting Attack to grant a
                  Unit the Precision (5+) Special Rule.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Active Player may
                    choose to Manifest the Foresight's Blessing Psychic Power in
                    the Shooting Phase, at
                    <Tooltip word="Step 4" :tooltip-text="shootSteps" /> of any
                    Shooting Attack made by the Active Player.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of the Power must
                    be a Model with the Diviner Trait under the Active Player's
                    control, and must be either part of the Unit making the
                    Shooting Attack or within 18" and with Line of Sight to one
                    or more Models in that Unit.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be
                    the Unit currently selected and in the process of making a
                    Shooting Attack.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Power last until the
                    end of the Shooting Attack being resolved.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, make a
                        Manifestation Check.
                      </li>
                      <li>
                        If the Manifestation Check is successful, then all
                        Models in the Target Unit gain the Precision (5+)
                        Special Rule.
                      </li>
                      <li>
                        If the Manifestation Check fails then there is no
                        further effect.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- telepahy -->
            <div>
              <h4>Telepathy</h4>
              A Model with the Telepathy Discipline gains the following
              benefits:
              <ul>
                <li>The Fear (1) Special Rule</li>
                <li>The Mind-burst Psychic Power</li>
                <li>The Cursed Whispers Psychic Weapon</li>
                <li>The "Telepath' Trait</li>
              </ul>
              <div>
                <h3 class="list-li-name">Mind Burst (Psychic Power, Curse)</h3>
                <p>
                  This Power is used in the Movement Phase and can force the
                  target to Fall Back or become Routed.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Active Player may
                    choose to Manifest the Mind-burst Psychic Power in the
                    Movement Phase, when selecting a Unit under their control
                    that includes at least one Model with the Telepath Trait to
                    move and before any move is made for that Unit.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of the Power must
                    be a Model with the Telepath Trait that is part of the Unit
                    that was selected to move.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be a
                    Unit under the control of the Reactive Player with at least
                    one Model within 18" of the Focus and with Line of Sight to
                    the Focus. The target may not be a Unit that is Locked in
                    Combat or otherwise ineligible to be the target of a
                    Shooting Attack and may not include any Models with the
                    Vehicle Type.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Power are resolved
                    immediately. further effect to the Target Unit.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, the
                        Target Unit’s Controlling Player makes a Resistance
                        Check for that Unit
                      </li>
                      <li>
                        If the Resistance Check is failed, then all Statuses are
                        removed from all Models in the Target Unit, and then the
                        Target Unit must immediately make a Fall Back Move. Once
                        that Fall Back Move has been resolved, a Leadership
                        Check must be made for the Target Unit by its
                        Controlling Player, this Check may not be modified by
                        any effect or Special Rule. If the Leadership Check is
                        successful, then there is no further effect, if it is
                        unsuccessful then all Models in the Target Unit gain the
                        Routed Status.
                      </li>
                      <li>
                        If the Resistance Check succeeds then there is no
                        further effect to the Target Unit.
                      </li>
                      <li>
                        Regardless of whether the Resistance Check succeeds or
                        fails, the Unit that includes the Focus of this Psychic
                        Power may not make a move or Rush in this Movement
                        Phase.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="unit-ability-weapon">
                <h3>Cursed Whispers</h3>
                <!-- таблица для десктопа -->
                <table class="profiles__weapon-table" v-if="windowWidth > 800">
                  <thead>
                    <tr>
                      <th>R</th>
                      <th>FP</th>
                      <th>RS</th>
                      <th>AP</th>
                      <th>D</th>
                      <th>Special Rules</th>
                      <th>Traits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>18</td>
                      <td>2D6</td>
                      <td>3</td>
                      <td>-</td>
                      <td>1</td>
                      <td>Stun(-)</td>
                      <td>Psychic, Ranged</td>
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
                    <div class="grid-table__head cell">R</div>
                    <div class="grid-table__head cell">FP</div>
                    <div class="grid-table__head cell">RS</div>
                    <div class="grid-table__head cell">AP</div>
                    <div class="grid-table__head cell">D</div>
                    <div class="grid-table__head cell">Traits</div>

                    <!-- Вторая строка -->
                    <div class="cell">18</div>
                    <div class="cell">2D6</div>
                    <div class="cell">3</div>
                    <div class="cell">-</div>
                    <div class="cell">1</div>
                    <div class="cell">
                      <div class="first-letter">Psychic, Ranged</div>
                    </div>
                    <!-- Третья строка -->
                    <div
                      class="full-span-cell grid-table__head left"
                      style="grid-column: span 6"
                    >
                      Special Rules
                    </div>

                    <!-- Четвертая строка -->
                    <div
                      class="full-span-cell end-cell"
                      style="grid-column: span 6"
                    >
                      <div class="comma wrap">
                        <div>Stun(-)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Thaumaturgy -->
            <div>
              <h4>Thaumaturgy</h4>
              A Model with the Thaumaturgy Discipline gains the following
              benefits:
              <ul>
                <li>The Hatred (Psykers) Special Rule</li>
                <li>The Resurrection Psychic Reaction</li>
                <li>The Tranquillity Psychic Power</li>
                <li>The 'Thaumaturge' Trait</li>
              </ul>
              <div>
                <h3 class="list-li-name">
                  Resurection (Psychic Reaction, Blessing)
                </h3>
                <p>
                  This Power can be used in the Shooting Phase and can return a
                  single Casualty to the Unit with all Wounds restored.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Reactive Player may
                    choose to declare a Resurrection Psychic Reaction in the
                    Shooting Phase, at the start of
                    <Tooltip word="Step 11" :tooltip-text="shootSteps" /> of any
                    Shooting Attack made by the Active Player.
                  </div>
                  <div>
                    <span class="bold">Cost:</span> The Reactive Player must
                    spend 1 point of their Reaction Allotment to declare a
                    Resurrection Psychic Reaction - this cost paid as soon as
                    the declaration is made.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of this Psychic
                    Reaction must be a Model with the Thaumaturge Trait and
                    under the Reactive Player's Control, and must be a part of
                    the Unit targeted by the Shooting Attack that triggers this
                    Psychic Reaction.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be
                    the Unit that is the target of the Shooting Attack that
                    triggered the Reaction.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Reaction are
                    resolved immediately.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, make a
                        Manifestation Check.
                      </li>
                      <li>
                        If the Manifestation Check is successful then, before
                        any Models in the Target Unit are Removed as Casualties,
                        the Controlling Player of the Target Unit must select
                        one Model being Removed as a Casualty and roll a Dice.
                        If the Dice roll for the chosen Model is equal to or
                        higher than a '4', then that Model is not Removed as a
                        Casualty and is returned to play in Unit Coherency with
                        its Unit and with its Wounds Characteristic set to its
                        Base Value, as listed on that Model's profile. This
                        Psychic Reaction has no effect on Models that do not
                        have a Wounds Characteristic and if the result of the
                        Manifestation Check causes Perils of the Warp, then this
                        instance of Perils of the Warp is resolved after any
                        Models are returned to the Unit.
                      </li>
                      <li>
                        If the Manifestation Check fails then there is no
                        further effect.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="list-li-name">
                  Tranquillity (Psychic Power, Curse)
                </h3>
                <p>
                  This Power is used in the Start Phase and makes it harder for
                  the Target Unit to use Psychic Powers, Psychic Reactions or to
                  attack with Psychic Weapons.
                </p>
                <div class="unit-ability-desc">
                  <div>
                    <span class="bold">Trigger:</span> The Active Player may
                    choose to Manifest the Tranquillity Psychic Power in the
                    Effects Sub-Phase of the Start Phase.
                  </div>
                  <div>
                    <span class="bold">Focus:</span> The Focus of the Power must
                    be a Model with the Thaumaturge Trait and must be controlled
                    by the Active Player.
                  </div>
                  <div>
                    <span class="bold">Target:</span> The Target Unit must be a
                    Unit under the control of the Reactive Player with at least
                    one Model within 18" of the Focus and with Line of Sight to
                    the Focus. The Target Unit must include at least one Model
                    with the Psyker Trait.
                  </div>
                  <div>
                    <span class="bold">Duration:</span> If successfully
                    Manifested, the effects of this Psychic Power last until the
                    start of the Active Player's next Turn as the Active Player.
                  </div>
                  <div>
                    <span class="bold">Process:</span>
                    <ul class="unit-ability-desc_ul">
                      <li>
                        Once the Focus and Target Unit have been decided, the
                        Target Unit’s Controlling Player makes a Resistance
                        Check for that Unit
                      </li>
                      <li>
                        If the Resistance Check is failed, then all Models in
                        the Target Unit suffer a penalty of -2 to their
                        Willpower Characteristic when attempting to Manifest any
                        Psychic Power or Psychic Reaction. If any Model in the
                        Target Unit makes attacks with a Weapon that has the
                        Psychic Trait, then the Strength Characteristic of all
                        Hits inflicted is reduced by 1.
                      </li>
                      <li>
                        If the Resistance Check succeeds then there is no
                        further effect.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click="closeModal('modal8')" class="close-modal-button">
            Close
          </button>
          <button
            @click="closeModal('modal8')"
            class="close-modal-button-2"
          ></button>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import {
  onMounted,
  onUnmounted,
  defineProps,
  computed,
  ref,
  watch,
  reactive,
} from "vue";
import Tooltip from "./textModals/Tooltip.vue";
const rules = ref(false);
const isModalOpen = reactive({});
const windowWidth = ref(window.innerWidth);
const isClassActive = ref(false);
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
function openModal(modalName) {
  isModalOpen[modalName] = true;
}
function closeModal(modalName) {
  isModalOpen[modalName] = false;
}

function updateWidth() {
  windowWidth.value = window.innerWidth;
}
onMounted(() => {
  window.addEventListener("resize", updateWidth);
  isClassActive.value = isClassActive.value;
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});
</script>

<style >
.deployment {
  width: 100%;
  height: 100%;
}

.table-container {
  display: flex;
  align-items: center;
  margin: 20px auto;
  max-width: fit-content; /* чтобы ширина под таблицу */
}

.attacker-label {
  writing-mode: vertical-rl; /* вертикальный текст справа налево */
  transform: rotate(180deg); /* чтобы текст читался снизу вверх */
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
}

.table-wrapper {
  display: flex;
  flex-direction: column;
}

.defender-label {
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
}

.weapon-skill-table {
  border-collapse: collapse;
}

.weapon-skill-table th,
.weapon-skill-table td {
  border: 1px solid #000;
  padding: 8px;
  text-align: center;
}

.weapon-skill-table th {
  background-color: #333;
  color: #fff;
}

.weapon-skill-table tr:nth-child(even) td {
  background-color: var(--table-light-color);
}
.statuses,
.missions,
.psychic {
  text-align: left;
  font-weight: normal;
}

.missions h4,
.psychic h4 {
  font-size: 1.3rem;
}

.status-head {
  font-weight: bold;
  margin-bottom: 1rem;
}

.status-head h4 {
  font-size: 1.3rem;
}
.status-text li,
.missions li,
.psychic li,
.gambits li {
  list-style-type: disc;
  margin-bottom: 1rem;
}
.gambits,
.reactions {
  font-weight: normal;
}
.range-icon {
  background-image: url(../icons/range-icon.svg);
}
.melee-icon {
  background-image: url(../icons/melee-icon.svg);
}
.wound-icon {
  background-image: url(../icons/wound-icon.svg);
}
.statuses-icon {
  background-image: url(../icons/statuses-icon.svg);
}
.gambits-icon {
  background-image: url(../icons/gambits-icon.svg);
}

.reactions-icon {
  background-image: url(../icons/reactions-icon.svg);
  background-position: 0px 3px;
}

.missions-icon {
  background-image: url(../icons/missions-icon.svg);
}

.psychic-icon {
  background-image: url(../icons/psychic-icon.svg);
}
</style>