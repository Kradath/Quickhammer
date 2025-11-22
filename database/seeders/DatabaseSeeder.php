<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // DB::table('factions')->insert([
        //     [
        //         'name' => 'Legiones Astartes',
        //         'conflict_side' => '-'
        //     ],
        //     [
        //         'name' => 'Taghmata Omnissiah',
        //         'conflict_side' => '-'
        //     ],
        //     [
        //         'name' => 'Agents of the Emperor',
        //         'conflict_side' => 'l'
        //     ],
        //     [
        //         'name' => 'Legio Custodes',
        //         'conflict_side' => 'l'
        //     ],
        //     [
        //         'name' => 'Divisio Assassinorum',
        //         'conflict_side' => 'l'
        //     ],
        //     [
        //         'name' => 'Solar Auxilia',
        //         'conflict_side' => '-'
        //     ],
        // ]);

        // DB::table('r_weapons')->insert([
        //     [
        //         'name' => 'bolter',
        //         'range' => '24',
        //         'fire_power' => '2',
        //         'strength' => '4',
        //         'armor_penetration' => '5',
        //         'damage' => '1',
        //         'weapon_trait_id' => '1',
        //         'faction_id' => '1',
        //         'subfaction_id' => '0',
        //     ],
        // ]);

        DB::table('special_rules')->insert([

            [
                'name' => 'Explodes (x)',
                'rule' => ' A Model with this Special Rule can explode and cause Hits to nearby Models and Units. Before a Model with the Explodes (X) Special Rule is Removed as a Casualty, the Controlling Player must roll a Dice. If the result of that roll equals or exceeds the value of X attached to this variant of the Explodes (X) Special Rule, the Model explodes. Every Unit with one or more Models within 6" of an exploding Model suffers a number of Hits equal to the Base Wounds Characteristic or Base Hull Points Characteristic of the exploding Model. Each such Hit has a Strength Characteristic of 8, an AP Characteristic of \' - \' and a Damage Characteristic of 1. Once all Hits caused by this Special Rule have been resolved, the Model with the Explodes (X) Special Rule is Removed as a Casualty as normal.',
                'weapon' => '0'
            ],
            [
                'name' => 'FAST (X)',
                'rule' => 'A Unit that only includes Models with the Fast (X) Special Rule gains a bonus to Rush and Charge Moves. When the Player controlling a Unit that is composed entirely of Models with the Fast (X) Special Rule elects to have that Unit Rush, add the value of X attached to the specific variant of Fast (X) to the distance the Unit can move. Likewise, when a Unit composed entirely of Models with the Fast (X) Special Rule is required to make a Charge Move, add the value of X attached to the specific variant of Fast (X) Special Rule as a positive modifier to the Charge Roll. In any situation where a Unit includes Models with two or more variants of the Fast (X) Special Rule, the lowest possible modifier is used.',
                'weapon' => '0'
            ],
            [
                'name' => 'Fear (X)',
                'rule' => 'Models near an enemy Model with the Fear (X) Special Rule must reduce their Advanced Characteristics. When any Model from a Unit is within 12" of an enemy Model with the Fear (X) Special Rule, all Models in that Unit must reduce their Leadership, Willpower, Cool and Intelligence Characteristics by the value of X. This negative modifier is removed as soon as no Models in a given Unit are within 12" of any Model with the Fear (X) Special Rule. If a Unit would be affected by multiple instances of the Fear (X) Special Rule, the value of X is not stacked and instead the single highest value is used as a negative modifier.А',
                'weapon' => '0'
            ],
            [
                'name' => 'Feel No Pain (X)',
                'rule' => 'Feel No Pain (X) is a Damage Mitigation Test that may be taken in addition to a Saving Throw. A Model with the Feel No Pain (X) Special Rule gains a Feel No Pain Damage Mitigation Test that may be used in Step 9 of the Shooting Attack process or Step 8 of the Initiative Step of the Fight Sub-Phase process to discard wounds allocated to the Model. A Damage Mitigation Test may be made after an end in addition to a Saving Throw. The Target Number for a Feel No Pain Damage Mitigation Test is the value of X attached to the specific variant of the Special Rule.',
                'weapon' => '0'
            ],
            [
                'name' => 'FIRING PROTOCOLS (X)',
                'rule' => 'A Model with the Firing Protocols (X) Special Rule may attack with more than one ranged Weapon. A Model with the Firing Protocols (X) Special Rule that makes attacks as part of a Shooting Attack, may make attacks with a number of Weapons equal to the value of X attached to the specific variant of the Firing Protocols (X) Special Rule. The Model must have more than one Ranged Weapon to make use of this Special Rule and may not use the same Weapon more than once in the same Shooting Attack.',
                'weapon' => '0'
            ],
            [
                'name' => 'FORCE (X)',
                'rule' => 'A Weapon with this Special Rule may double a Characteristic with a Willpower Check, but may suffer Perils of the Warp. When selected to be used as part of a Combat or Shooting Attack, a Willpower Check may be made for the Model that will use this Weapon to make attacks. If it is successful then the Characteristic listed as X is doubled (if that Characteristic is AP, then the AP is instead changed to AP 2). If a double is rolled when making this Willpower Check then the Model using the Weapon to make attacks suffers Perils of the Warp.',
                'weapon' => '1'
            ],
            [
                'name' => 'HATRED (X)',
                'rule' => 'The Hatred (X) Special Rule grants bonuses against enemies of a specific Faction, Type or Trait. When Locked in Combat, or Engaged in a Challenge, with any enemy Models that have the Type or Trait that is the value of X, then all Models with this variant of the Hatred (X) Special Rule gain a bonus of +1 to all Wound Tests made in that Combat.',
                'weapon' => '0'
            ],
            [
                'name' => 'HEAVY (X)',
                'rule' => 'Weapons with the Heavy (X) Special Rule gain +1 to a Characteristic when Stationary. When making a Shooting Attack with a Weapon that has the Heavy (X) Special Rule, a modifier of +1 is added to a Characteristic if the Model with that Weapon is part of a Unit that remained Stationary in the Controlling Player’s previous Movement Phase. If the Characteristic listed is AP, then it improves the AP by one Step (see the Rules for modifying Saves and AP on page 168). The value of X in the specific variant of the Heavy (X) Special Rule determines which Characteristic gains the +1 modifier.',
                'weapon' => '1'
            ],
            [
                'name' => 'Shred (X)',
                'rule' => 'Attacks made with the Shred (X) Special Rule can sometimes inflict an extra point of Damage. When any Wound Test is made for an attack with the Shred (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Shred (X) Special Rule, then if a wound is inflicted by that Wound Test, the Damage Characteristic of that wound is increased by 1. Note that the Shred (X) Special Rule may only be triggered by a Wound Test and has no effect when making an Armour Penetration Test.',
                'weapon' => '1'
            ],
        ]);

        // DB::table('weapon_traits')->insert([
        //     [
        //         'name' => 'Bolt'
        //     ],
        //     [
        //         'name' => 'Las'
        //     ],
        //     [
        //         'name' => 'Melta'
        //     ],
        //     [
        //         'name' => 'Desintegrator'
        //     ],
        //     [
        //         'name' => 'Power'
        //     ],
        //     [
        //         'name' => 'Melee'
        //     ],
        // ]);

        // DB::table('sub_factions')->insert([
        //     [
        //         'name' => 'Dark Angels',
        //         'faction_id' => '1'
        //     ],
        // ]);

    }
}
