export const ranged_weapons = {
  "fulcrum hand cannons (ranged)": {
    id: 'rw',
    name: "fulcrum hand cannons (ranged)",
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "5",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          heavy: '(FP)',
          breaching: '(6+)',
          stun: '(0)'
        },
        traits: 'assault, auto',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "wrath and justice": {
    id: 'rw',
    name: "wrath and justice",
    profiles: {
      1: {
        subname: '',
        range: "16",
        fire_power: "6",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          breaching: '(6+)'
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "mortifier bolter": {
    id: 'rw',
    name: "mortifier bolter",
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          panic: '(1)'
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "fulmentarus missile array": {
    id: 'rw',
    name: "fulmentarus missile array",
    profiles: {
      1: {
        subname: 'splinter missiles',
        range: "36",
        fire_power: "4",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          suppressive: '(1)'
        },
        traits: 'missile',
      },
      2: {
        subname: 'hellfire plasma missiles',
        range: "36",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          breaching: '(5+)'
        },
        traits: 'missile, plasma',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "the arbitrator": {
    id: 'rw',
    name: "the arbitrator",
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          breaching: '(5+)'
        },
        traits: 'bolt, assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "fleet service pistol": {
    id: 'rw',
    name: "fleet service pistol",
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          pistol: ''
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "fleet service pistol": {
    id: 'rw',
    name: "fleet service pistol",
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          pistol: ''
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "the spite furnace": {
    id: 'rw',
    name: "the spite furnace",
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "2",
        strength: "7",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
        },
        traits: 'plasma, assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "volkite cavitor": {
    id: 'rw',
    name: "volkite cavitor",
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "4",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

          'deflagrate': '(6+)',
        },
        traits: 'volkite, assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "the widowmakers": {
    id: 'rw',
    name: "the widowmakers",
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "3",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

          'breaching': '(4+)',
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "obsidite rotor cannon": {
    id: 'rw',
    name: "obsidite rotor cannon",
    profiles: {
      1: {
        subname: 'slug rounds',
        range: "24",
        fire_power: "3",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'suppressive': '(1)',
        },
        traits: 'auto',
      },
      2: {
        subname: 'obsidite rounds',
        range: "18",
        fire_power: "2",
        strength: "3",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'overload': '(1)',
          'breaching': '(6+)',
          'critical hit': '(6+)',
        },
        traits: 'auto',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "pyroclast flame projector": {
    id: 'rw',
    name: "pyroclast flame projector",
    profiles: {
      1: {
        subname: 'dispersed',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(1)',
        },
        traits: 'flame, melta',
      },
      2: {
        subname: 'focused',
        range: "12",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'melta': '(6)',
        },
        traits: 'flame, melta',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "dragon's breath gauntlet": {
    id: 'rw',
    name: "dragon's breath gauntlet",
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(2)',
        },
        traits: 'flame',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  "the furnace's heart": {
    id: 'rw',
    name: "the furnace's heart",
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "7",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'panic': '(1)',
        },
        traits: 'volkite',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'forge-crafted heavy flamer': {
    id: 'rw',
    name: 'forge-crafted heavy flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'template': '',
          'panic': '(2)',
        },
        traits: 'flame',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },

  'forge-crafted flamer': {
    id: 'rw',
    name: 'forge-crafted flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "2",
        specail_rules: {
          'template': '',
          'panic': '(1)',
        },
        traits: 'flame',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'forge-crafted hand flamer': {
    id: 'rw',
    name: 'forge-crafted hand flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "2",
        specail_rules: {
          'template': '',
          'pistol': ''
        },
        traits: 'flame, assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'enigmatus missile launcher': {
    id: 'rw',
    name: 'enigmatus missile launcher',
    profiles: {
      1: {
        subname: 'frag missile',
        range: "24",
        fire_power: "1",
        strength: "3",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
        },
        traits: 'assault',
      },
      2: {
        subname: 'krak missile',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {

        },
        traits: 'assault',
      },
      3: {
        subname: 'stasis missile',
        range: "24",
        fire_power: "1",
        strength: "4",
        armor_penetration: "-",
        damage: "2",
        specail_rules: {
          'blast': '(3")',
          'stun': '(3)',
        },
        traits: 'assault, stasis',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'needle pistol': {
    id: 'rw',
    name: 'needle pistol',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "2",
        strength: "2",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'poisoned': '(3+)',
          'pistol': '',
          'pinning': '(1)',
        },
        traits: 'assault, needle',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'irad cleanser': {
    id: 'rw',
    name: 'irad cleanser',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "2",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

          'template': '',
          'phage': '(T)',
          'poisoned': '(2+)',
          'panic': '(1)'
        },
        traits: 'rad',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'cytheron graviton flux projector': {
    id: 'rw',
    name: 'cytheron graviton flux projector',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'template': '',
          'breaching': '(5+)',
          'shock': '(Pinned)',
          'pinning': '(3)'
        },
        traits: 'assault, graviton',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'magaron atomantic pulse cannon': {
    id: 'rw',
    name: 'magaron atomantic pulse cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "3",
        strength: "8",
        armor_penetration: "2",
        damage: "1",
        specail_rules: {
          'armourbane': '',
          'shock': '(Suppressed)'
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'tyrhenius nerve induction shredder': {
    id: 'rw',
    name: 'tyrhenius nerve induction shredder',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "10",
        strength: "1",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'poisoned': '(2+)',
          'panic': '(1)'
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'athanax phosphex canister launcher': {
    id: 'rw',
    name: 'athanax phosphex canister launcher',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'barrage': '(2)',
          'pinning': '(3)',
          'poisoned': '(2+)',
          'phage': '(T)',
        },
        traits: 'rad',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma caster': {
    id: 'rw',
    name: 'plasma caster',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'breaching': '(5+)',
          'overload': '(1)'
        },
        traits: 'plasma',
      }
    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'destroyer missile launcher': {
    id: 'rw',
    name: 'destroyer missile launcher',
    profiles: {
      1: {
        subname: 'rad missile',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'poisoned': '(2+)',
          'phage': '(T)'
        },
        traits: 'assault, rad',
      },


    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'destroyer missile launcher (+ stasis missiles)': {
    id: 'rw',
    name: 'destroyer missile launcher (+ stasis missiles)',
    profiles: {
      1: {
        subname: 'rad missile',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'poisoned': '(2+)',
          'phage': '(T)'
        },
        traits: 'assault, rad',
      },
      2: {
        subname: 'stasis missile',
        range: "24",
        fire_power: "1",
        strength: "4",
        armor_penetration: "-",
        damage: "2",
        specail_rules: {
          'blast': '(3")',
          'stun': '(3)'
        },
        traits: 'assault, stasis',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'the fusil actianeus': {
    id: 'rw',
    name: 'the fusil actianeus',
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "2",
        strength: "7",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'breaching': '(4+)',
        },
        traits: 'assault, plasma',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma repeater': {
    id: 'rw',
    name: 'plasma repeater',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "12",
        fire_power: "3",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "12",
        fire_power: "3",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(5+)',
          'overload': '(1)'
        },
        traits: 'plasma',
      }
    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma burner': {
    id: 'rw',
    name: 'plasma burner',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'breaching': '(6+)',

        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'breaching': '(5+)',
          'overload': '(1)'

        },
        traits: 'plasma',
      }
    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma incinerator': {
    id: 'rw',
    name: 'plasma incinerator',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'template': '',
          'breaching': '(6+)',

        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'template': '',
          'breaching': '(5+)',
          'overload': '(1)'

        },
        traits: 'plasma',
      }
    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'shrapnel pistol': {
    id: 'rw',
    name: 'shrapnel pistol',
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "1",
        strength: "4",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'pinning': '(0)',
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },

  'shrapnel bolter': {
    id: 'rw',
    name: 'shrapnel bolter',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "4",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'pinning': '(0)',
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'shrapnel cannon': {
    id: 'rw',
    name: 'shrapnel cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "3",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'pinning': '(0)',
          'shred': '(6+)',
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin shrapnel cannon': {
    id: 'rw',
    name: 'twin shrapnel cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "6",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'pinning': '(1)',
          'shred': '(5+)',
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'tyrant rocket launcher': {
    id: 'rw',
    name: 'tyrant rocket launcher',
    profiles: {
      1: {
        subname: 'swarmer',
        range: "48",
        fire_power: "3",
        strength: "5",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'breaching': '(6+)',

        },
        traits: 'missile',
      },
      2: {
        subname: 'breaker',
        range: "48",
        fire_power: "1",
        strength: "9",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'armourbane': '',

        },
        traits: 'missile',
      }
    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'the logos array (range)': {
    id: 'rw',
    name: 'the logos array (range)',
    profiles: {
      1: {
        subname: '',
        range: "30",
        fire_power: "6",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'shred': '(4+)',
          'suppressive': '(1)',
        },
        traits: 'bolt, assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'incineratus': {
    id: 'rw',
    name: 'incineratus',
    profiles: {
      1: {
        subname: '',
        range: "15",
        fire_power: "4",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'demolisher cannon': {
    id: 'rw1',
    name: 'demolisher cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "12",
        armor_penetration: "3",
        damage: "3",
        specail_rules: {
          'blast': '(3")',
          'breaching': '(5+)',
          'ordance': '(D)',
          'stun': '(1)',
        },
        traits: '',
      },

    },
    cathegory: 'artillery',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'morbus bombard': {
    id: 'rw2',
    name: 'morbus bombard',
    profiles: {
      1: {
        subname: 'HE shell',
        range: "36",
        fire_power: "1",
        strength: "9",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'ordance': '(D)',
          'blast': '(5")',
          'barrage': '(2)',
          'breaching': '(6+)',
          'pinning': '(1)'
        }
      },
      2: {
        subname: 'phosphex shell*',
        range: "24",
        fire_power: "1",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'blast': '(5")',
          'barrage': '(1)',
          'poisoned': '(3+)',
          'panic': '(3)',
          'breaching': '(5+)',
        },
        traits: 'phosphex',
      }
    },
    cathegory: 'artillery',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'quad launcher': {
    id: 'rw3',
    name: 'quad launcher',
    profiles: {
      1: {
        subname: 'frag',
        range: "60",
        fire_power: "1",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'blast': '(5")',
          'barrage': '(2)'
        },
        traits: '',
      },
      2: {
        subname: 'shatter',
        range: "36",
        fire_power: "4",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'armourbane': ''
        },
        traits: '',
      },
      3: {
        subname: 'phosphex canister shot (with Siege Breaker only)',
        range: "24",
        fire_power: "1",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'barrage': '(1)',
          'poisoned': '(3+)',
          'panic': '(3)',
          'breaching': '(5+)'
        },
        traits: 'phosphex',
      },
    },
    cathegory: 'artillery',
    faction: 'legiones astartes',
    subfaction: '',
  },


  'dreadhammer siege cannon': {
    id: 'rw4',
    name: 'dreadhammer siege cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "12",
        armor_penetration: "3",
        damage: "3",
        specail_rules: {
          'ordance': '(D)',
          'blast': '(5")',
          'breaching': '(5+)',
          'stun': '(1)'
        },
        traits: '',
      },

    },
    cathegory: 'artillery',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'archaeotech pistol': {
    id: 'rw5',
    name: 'archaeotech pistol',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(3+)',
          'pistol': ''
        },
        traits: 'assault, pistol',
      },

    },
    cathegory: 'archaeotech',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'inferno pistol': {
    id: 'rw5a',
    name: 'inferno pistol',
    profiles: {
      1: {
        subname: '',
        range: "6",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "1",
        specail_rules: {
          'melta': '(3)',
          'pistol': ''
        },
        traits: 'assault, melta',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },

  'meltagun': {
    id: 'rw6',
    name: 'meltagun',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'melta': '(6)',
        },
        traits: 'melta'
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },


  'multi-melta': {
    id: 'rw7',
    name: 'multi-melta',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(8)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },



  'twin multi-melta': {
    id: 'rw8',
    name: 'twin multi-melta',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(8)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'gravis melta cannon': {
    id: 'rw9',
    name: 'gravis melta cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(8)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'magna-melta cannon': {
    id: 'rw10',
    name: 'magna-melta cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(12)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'cyclonic melta lance': {
    id: 'rw11',
    name: 'cyclonic melta lance',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "3",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(8)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'siege melta array': {
    id: 'rw12',
    name: 'siege melta array',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "10",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")',
          'melta': '(6)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'melta cutters': {
    id: 'rw13',
    name: 'melta cutters',
    profiles: {
      1: {
        subname: '',
        range: "6",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(3")',
          'melta': '(3)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'melta blast-gun': {
    id: 'rw14',
    name: 'melta blast-gun',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "2",
        strength: "9",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(24)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'sentry melta array': {
    id: 'rw15',
    name: 'sentry melta array',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'heavy': '(RS)',
          'melta': '(8)'

        },
        traits: '',
      },

    },
    cathegory: 'melta',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'missile launcher': {
    id: 'rw16',
    name: 'missile launcher',
    profiles: {
      1: {
        subname: 'frag',
        range: "48",
        fire_power: "1",
        strength: "4",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(3")',

        },
        traits: 'missile',
      },
      2: {
        subname: 'krak',
        range: "48",
        fire_power: "1",
        strength: "8",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',


        },
        traits: 'missile',
      },
      3: {
        subname: 'flak',
        range: "48",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'skyfire': '',

        },
        traits: 'missile',
      },


    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'vengeance launcher': {
    id: 'rw17',
    name: 'vengeance launcher',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(5")',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'havoc launcher': {
    id: 'rw18',
    name: 'havoc launcher',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'stun': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'hunter-killer missile': {
    id: 'rw19',
    name: 'hunter-killer missile',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "9",
        armor_penetration: "3",
        damage: "3",
        specail_rules: {
          'armourbane': '',
          'limited': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'hellstrike missile': {
    id: 'rw20',
    name: 'hellstrike missile',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "9",
        armor_penetration: "3",
        damage: "3",
        specail_rules: {
          'armourbane': '',
          'limited': '(1)',

        },
        traits: 'guided, missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'deathstorm missile launcher': {
    id: 'rw21',
    name: 'deathstorm missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "D3",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pinning': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'kharybdis missile launcher': {
    id: 'rw22',
    name: 'kharybdis missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "5",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pinning': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'rotary missile launcher': {
    id: 'rw23',
    name: 'rotary missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "3",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {


        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'sabre missile': {
    id: 'rw24',
    name: 'sabre missile',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'limited': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'tempest rocket': {
    id: 'rw25',
    name: 'tempest rocket',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "3",
        specail_rules: {
          'armourbane': '',
          'limited': '(1)',

        },
        traits: 'guided missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'aiolos missile launcher': {
    id: 'rw26',
    name: 'aiolos missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "60",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'blast': '(3")',
          'barrage': '(1)',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'boreas air defence missile': {
    id: 'rw27',
    name: 'boreas air defence missile',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'limited': '(1)',
          'skyfire': '',
          'rapid tracking': '',

        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'spicula rocket system': {
    id: 'rw28',
    name: 'spicula rocket system',
    profiles: {
      1: {
        subname: '',
        range: "72",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(7")',
          'barrage': '(2)',
          'suppressive': '(1)',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'arcus missile launcher': {
    id: 'rw29',
    name: 'arcus missile launcher',
    profiles: {
      1: {
        subname: 'arcus warheads',
        range: "36",
        fire_power: "5",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {


        },
        traits: 'missile',
      },
      2: {
        subname: 'skyspear warheads',
        range: "36",
        fire_power: "3",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'skyfire': '',
          'armourbane': '',
          'rapid tracking': '',
        },
        traits: 'missile',
      },
      3: {
        subname: 'pyrax warheads',
        range: "36",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(5")',
          'panic': '(1)',
        },
        traits: 'missile',
      },
      4: {
        subname: 'neutron-flux warheads',
        range: "36",
        fire_power: "3",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'shock': '(Suppressed)',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'cyclone missile launcher': {
    id: 'rw30',
    name: 'cyclone missile launcher',
    profiles: {
      1: {
        subname: 'frag',
        range: "48",
        fire_power: "1",
        strength: "4",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")',
        },
        traits: 'missile',
      },
      2: {
        subname: 'krak',
        range: "48",
        fire_power: "2",
        strength: "8",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
        },
        traits: 'missile',
      },
      3: {
        subname: 'flak',
        range: "48",
        fire_power: "2",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'skyfire': '',
          'heavy': '(D)',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'scorpius missile launcher': {
    id: 'rw31',
    name: 'scorpius missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'blast': '(3")',
          'barrage': '(2)',
          'breaching': '(5+)',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'hyperios missile launcher': {
    id: 'rw32',
    name: 'hyperios missile launcher',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "3",
        strength: "7",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'skyfire': '',
          'rapid tracking': '',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'orias frag missile': {
    id: 'rw33',
    name: 'orias frag missile',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'barrage': '(3)',
          'blast': '(5")',
          'limited': '(1)',
        },
        traits: 'missile',
      },

    },
    cathegory: 'missile',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'rad grenades': {
    id: 'rw34',
    name: 'rad grenades',
    profiles: {
      1: {
        subname: '',
        range: "8",
        fire_power: "1",
        strength: "4",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'poisoned': '(2+)',
          'phage': '(T)',
        },
        traits: 'rad',
      },

    },
    cathegory: 'rad',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'concussive resonator': {
    id: 'rw35',
    name: 'concussive resonator',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "2",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'template': '',
          'overload': '(1)',
          'stun': '(2)',
        },
        traits: 'assault, sonic',
      },

    },
    cathegory: 'sonic',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite serpenta': {
    id: 'rw36',
    name: 'volkite serpenta',
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "2",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'deflagrate': '(5)',

        },
        traits: 'assault, volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'overcharged volkite serpenta': {
    id: 'rw37',
    name: 'overcharged volkite serpenta',
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "4",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'deflagrate': '(5)',
          'overload': '(1)',
        },
        traits: 'assault, volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite charger': {
    id: 'rw38',
    name: 'volkite charger',
    profiles: {
      1: {
        subname: '',
        range: "15",
        fire_power: "2",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(5)',
        },
        traits: 'assault, volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'twin volkite charger': {
    id: 'rw39',
    name: 'twin volkite charger',
    profiles: {
      1: {
        subname: '',
        range: "15",
        fire_power: "3",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(5)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite caliver': {
    id: 'rw40',
    name: 'volkite caliver',
    profiles: {
      1: {
        subname: '',
        range: "30",
        fire_power: "2",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'twin volkite caliver': {
    id: 'rw41',
    name: 'twin volkite caliver',
    profiles: {
      1: {
        subname: '',
        range: "30",
        fire_power: "3",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite culverin': {
    id: 'rw42',
    name: 'volkite culverin',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "3",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'twin volkite culverin': {
    id: 'rw43',
    name: 'twin volkite culverin',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "6",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite falconet': {
    id: 'rw44',
    name: 'volkite falconet',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "10",
        strength: "7",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(7)',
          'pinning': '(2)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite saker': {
    id: 'rw45',
    name: 'volkite saker',
    profiles: {
      1: {
        subname: '',
        range: "25",
        fire_power: "6",
        strength: "6",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite macro-saker': {
    id: 'rw46',
    name: 'volkite macro-saker',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "8",
        strength: "6",
        armor_penetration: "5",
        damage: "2",
        specail_rules: {
          'deflagrate': '(6)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite carronade': {
    id: 'rw47',
    name: 'volkite carronade',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "12",
        strength: "8",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'deflagrate': '(8)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'volkite cardanelle': {
    id: 'rw48',
    name: 'volkite cardanelle',
    profiles: {
      1: {
        subname: '',
        range: "45",
        fire_power: "12",
        strength: "7",
        armor_penetration: "5",
        damage: "2",
        specail_rules: {
          'deflagrate': '(7)',
          'suppressive': '(1)',
        },
        traits: 'volkite',
      },

    },
    cathegory: 'volkite',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'grenade harness': {
    id: 'rw49',
    name: 'grenade harness',
    profiles: {
      1: {
        subname: '',
        range: "6",
        fire_power: "1",
        strength: "5",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'limited': '(1)',

        },
        traits: '',
      },

    },
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
    subfaction: '',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'grenade launcher': {
    id: 'rw50',
    name: 'grenade launcher',
    profiles: {
      1: {
        subname: 'frag',
        range: "24",
        fire_power: "1",
        strength: "3",
        armor_penetration: "6",
        damage: "1",
        specail_rules: {
          'blast': '(3")',

        },
        traits: '',
      },
      2: {
        subname: 'krak',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {

        },
        traits: '',
      },

    },
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'assault grenade launcher': {
    id: 'rw50a',
    name: 'assault grenade launcher',
    profiles: {
      1: {
        subname: 'toxin',
        range: "18",
        fire_power: "3",
        strength: "1",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'poisoned': '(3+)',

        },
        traits: 'assault',
      },
      2: {
        subname: 'krak',
        range: "18",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {

        },
        traits: 'assault',
      },

    },
    // cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
    subfaction: 'death guard',
  },
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  'lascutter (range)': {
    id: 'rw51',
    name: 'lascutter (range)',
    profiles: {
      1: {
        subname: '',
        range: "8",
        fire_power: "1",
        strength: "10",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',

        },
        traits: '',
      },

    },
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'hand flamer': {
    id: 'rw134',
    name: 'hand flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'template': '',
          'pistol': ''
        },
        traits: 'assault flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'alchem caster': {
    id: 'rw134a',
    name: 'alchem caster',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'template': '',
          'pistol': '',
          'poisoned': '(2+)'
        },
        traits: 'assault',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'flamer': {
    id: 'rw53',
    name: 'flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(1)'
        },
        traits: 'flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'alchem flamer': {
    id: 'rw53a',
    name: 'alchem flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'template': '',
          'poisoned': '(2+)'
        },
        traits: 'flame',
      },

    },
    // cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy flamer': {
    id: 'rw54',
    name: 'heavy flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(1)'
        },
        traits: 'flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy alchem flamer': {
    id: 'rw54a',
    name: 'heavy alchem flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'poisoned': '(2+)'
        },
        traits: 'flame',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin heavy flamer': {
    id: 'rw55',
    name: 'twin heavy flamer',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(2)'
        },
        traits: 'flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'flamestorm cannon': {
    id: 'rw56',
    name: 'flamestorm cannon',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "5",
        damage: "2",
        specail_rules: {
          'template': '',
          'panic': '(2)'
        },
        traits: 'flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'photonic incinerator': {
    id: 'rw57',
    name: 'photonic incinerator',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(2)'
        },
        traits: 'assault, flame',
      },

    },
    cathegory: 'flame',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'lascannon': {
    id: 'rw58',
    name: 'lascannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin lascannon': {
    id: 'rw59',
    name: 'twin lascannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "2",
        strength: "9",
        armor_penetration: "2",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'lascannon array': {
    id: 'rw60',
    name: 'lascannon array',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "2",
        strength: "9",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'arachnus heavy lascannon battery': {
    id: 'rw61',
    name: 'arachnus heavy lascannon battery',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "2",
        strength: "9",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'heavy': '(RS)',
          'armourbane': '',
          'skyfire': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'laser destroyer': {
    id: 'rw62',
    name: 'laser destroyer',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "2",
        strength: "10",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'heavy': '(D)',
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'magna laser destroyer': {
    id: 'rw63',
    name: 'magna laser destroyer',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "2",
        strength: "10",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'neutron beam laser': {
    id: 'rw64',
    name: 'neutron beam laser',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "2",
        strength: "10",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',
          'shock': '(Suppressed)'
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'neutron blaster': {
    id: 'rw65',
    name: 'neutron blaster',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'shock': '(Suppressed)',
          'armourbane': '',
          'overload': '(1)'
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'neutron laser battery': {
    id: 'rw66',
    name: 'neutron laser battery',
    profiles: {
      1: {
        subname: '',
        range: "72",
        fire_power: "3",
        strength: "10",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',
          'shock': '(Suppressed)',
          'overload': '(1)'
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'neutron-wave cannon': {
    id: 'rw67',
    name: 'neutron-wave cannon',
    profiles: {
      1: {
        subname: '',
        range: "120",
        fire_power: "2",
        strength: "12",
        armor_penetration: "2",
        damage: "4",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',
          'shock': '(Stunned)',
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'turbo laser destructor': {
    id: 'rw68',
    name: 'turbo laser destructor',
    profiles: {
      1: {
        subname: '',
        range: "96",
        fire_power: "1",
        strength: "12",
        armor_penetration: "2",
        damage: "6",
        specail_rules: {
          'blast': '(3")',
          'armourbane': ''
        },
        traits: 'las',
      },

    },
    cathegory: 'las',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'conversion beam cannon': {
    id: 'rw69',
    name: 'conversion beam cannon',
    profiles: {
      1: {
        subname: '',
        range: "<15",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(3")'
        },
        traits: 'conversion',
      },
      2: {
        subname: '',
        range: "15-30",
        fire_power: "1",
        strength: "7",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(3")'
        },
        traits: 'conversion',
      },
      3: {
        subname: '',
        range: ">30-45",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(3")'
        },
        traits: 'conversion',
      },

    },
    cathegory: 'conversion',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy conversion beam cannon': {
    id: 'rw70',
    name: 'heavy conversion beam cannon',
    profiles: {
      1: {
        subname: '',
        range: "<15",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")'
        },
        traits: 'conversion',
      },
      2: {
        subname: '',
        range: "15-30",
        fire_power: "1",
        strength: "7",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")'
        },
        traits: 'conversion',
      },
      3: {
        subname: '',
        range: ">30-45",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")'
        },
        traits: 'conversion',
      },

    },
    cathegory: 'conversion',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'inversion beamer': {
    id: 'rw71',
    name: 'inversion beamer',
    profiles: {
      1: {
        subname: '',
        range: "<15",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")'
        },
        traits: 'conversion',
      },
      2: {
        subname: '',
        range: "15-30",
        fire_power: "1",
        strength: "7",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5")'
        },
        traits: 'conversion',
      },

    },
    cathegory: 'conversion',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'desintegrator pistol': {
    id: 'rw72',
    name: 'desintegrator pistol',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "4",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'pistol': '',
          'overload': '(1)'
        },
        traits: 'assault, desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'desintegrator rifle': {
    id: 'rw73',
    name: 'desintegrator rifle',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "4",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'overload': '(1)'
        },
        traits: 'desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'desintegrator blaster': {
    id: 'rw74',
    name: 'desintegrator blaster',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "5",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'overload': '(1)'
        },
        traits: 'desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy desintegrator': {
    id: 'rw75',
    name: 'heavy desintegrator',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'overload': '(1)',
          'heavy': '(FP)'
        },
        traits: 'desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin heavy desintegrator': {
    id: 'rw76',
    name: 'twin heavy desintegrator',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "2",
        strength: "7",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'overload': '(2)',
        },
        traits: 'desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'desintegrator cannon': {
    id: 'rw77',
    name: 'desintegrator cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "2",
        strength: "9",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'overload': '(2)',
        },
        traits: 'desintegrator',
      },

    },
    cathegory: 'desintegrator',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'graviton gun': {
    id: 'rw78',
    name: 'graviton gun',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(1)'
        },
        traits: 'graviton',
      },

    },
    cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'graviton shredder': {
    id: 'rw78a',
    name: 'graviton shredder',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(1)'
        },
        traits: 'assault, graviton',
      },

    },
    // cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'graviton pistol': {
    id: 'rw78a',
    name: 'graviton pistol',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(1)'
        },
        traits: 'assault, graviton',
      },

    },
    // cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'graviton cannon': {
    id: 'rw79',
    name: 'graviton cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'blast': '(3")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(2)'
        },
        traits: 'graviton',
      },

    },
    cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'graviton-charge cannon': {
    id: 'rw80',
    name: 'graviton-charge cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "1",
        strength: "9",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'heavy': '(D)',
          'blast': '(3")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(3)',
          'barrage': '(1)'
        },
        traits: 'graviton',
      },

    },
    cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'grav-flux bombard': {
    id: 'rw81',
    name: 'grav-flux bombard',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'blast': '(5")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(2)'
        },
        traits: 'graviton',
      },

    },
    cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'graviton pulveriser': {
    id: 'rw82',
    name: 'graviton pulveriser',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "9",
        armor_penetration: "3",
        damage: "3",
        specail_rules: {
          'heavy': '(D)',
          'blast': '(3")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(3)'
        },
        traits: 'graviton',
      },

    },
    cathegory: 'graviton',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'particle shredder': {
    id: 'rw83',
    name: 'particle  shredder',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'template': '',
          'breaching': '(6+)',
          'overload': '(1)'
        },
        traits: 'assault, particle',
      },

    },
    cathegory: 'particle',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy particle shredder': {
    id: 'rw84',
    name: 'heavy particle shredder',
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'template': '',
          'breaching': '(6+)',
          'overload': '(1)'
        },
        traits: 'assault, particle',
      },

    },
    cathegory: 'particle',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'phosphex bombs': {
    id: 'rw85',
    name: 'phosphex bombs',
    profiles: {
      1: {
        subname: '',
        range: "6",
        fire_power: "1",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'poisoned': '(3+)',
          'breaching': '(5+)',
          'blast': '(3")',
          'panic': '(3)'
        },
        traits: 'phosphex',
      },

    },
    cathegory: 'phosphex',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'phosphex canister shot': {
    id: 'rw136',
    name: 'phosphex canister shot',
    profiles: {
      1: {
        range: "24",
        fire_power: "1",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'barrage': '(1)',
          'poisoned': '(3+)',
          'panic': '(3)',
          'breaching': '(5+)'
        },
        traits: 'phosphex',
      },

    },
    cathegory: 'phosphex',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'phosphex discharger': {
    id: 'rw86',
    name: 'phosphex discharger',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "1",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'poisoned': '(3+)',
          'breaching': '(5+)',
          'blast': '(3")',
          'panic': '(3)',
          'limited': '(3)'
        },
        traits: 'phosphex',
      },

    },
    cathegory: 'phosphex',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'astartes shotgun': {
    id: 'rw87',
    name: 'astartes shotgun',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "2",
        strength: "4",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'stun': '(0)'
        },
        traits: 'assault, auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'banestrike shotgun': {
    id: 'rw87a',
    name: 'banestrike shotgun',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "2",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'stun': '(0)',
          'breaching': '(6+)',
          'shred': '(6+)'

        },
        traits: 'assault',
      },

    },
    // cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: 'alpha legion',
  },
  'rotor cannon': {
    id: 'rw88',
    name: 'rotor cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "3",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
          'suppressive': '(1)'
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'autocannon': {
    id: 'rw89',
    name: 'autocannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'reaper autocannon': {
    id: 'rw90',
    name: 'reaper autocannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'kheres assault cannon': {
    id: 'rw91',
    name: 'kheres assault cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "5",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'gravis autocannon': {
    id: 'rw92',
    name: 'gravis autocannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "3",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'gravis autocannon battery': {
    id: 'rw93',
    name: 'gravis autocannon battery',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "5",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'predator cannon': {
    id: 'rw94',
    name: 'predator cannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "3",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'punisher rotary cannon': {
    id: 'rw95',
    name: 'punisher rotary cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "8",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {

          'ordance': '(FP)',
          'suppressive': '(2)'
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin accelerator autocannon': {
    id: 'rw96',
    name: 'twin accelerator autocannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "6",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'rapid tracking': '',
          'skyfire': '',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'quad accelerator autocannon': {
    id: 'rw97',
    name: 'quad accelerator autocannon',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "10",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(6+)',
          'rapid tracking': '',
          'skyfire': '',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'fellblade accelerator cannon': {
    id: 'rw98',
    name: 'fellblade accelerator cannon',
    profiles: {
      1: {
        subname: 'HE shell',
        range: "100",
        fire_power: "1",
        strength: "8",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'stun': '(2)',
        },
        traits: 'auto',
      },
      2: {
        subname: 'AE shell',
        range: "100",
        fire_power: "1",
        strength: "12",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'blast': '(3")',
          'ordance': '(D)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'skyreaper battery': {
    id: 'rw99',
    name: 'skyreaper battery',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "6",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'rapid tracking': '',
          'skyfire': '',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'anvilus autocannon battery': {
    id: 'rw100',
    name: 'anvilus autocannon battery',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "6",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(5+)',
          'rapid tracking': '',
          'skyfire': '',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'anvilus snub autocannon': {
    id: 'rw101',
    name: 'anvilus snub autocannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "3",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(5+)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'leviathan storm cannon': {
    id: 'rw102',
    name: 'leviathan storm cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "4",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(5+)',
          'heavy': '(FP)',
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'kratos battlecannon': {
    id: 'rw103',
    name: 'kratos battlecannon',
    profiles: {
      1: {
        subname: 'HE shells',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'ordance': '(D)',
          'blast': '(5")',
          'stun': '(1)',
        },
        traits: 'auto',
      },
      2: {
        subname: 'AP shells',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "2",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',
        },
        traits: 'auto',
      },
      3: {
        subname: 'flashburn shells*',
        range: "24",
        fire_power: "1",
        strength: "9",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'ordance': '(D)',
          'armourbane': '',
          'overload': '(1)'
        },
        traits: 'auto',
      },

    },
    cathegory: 'auto',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'bolt pistol': {
    id: 'rw104',
    name: 'bolt pistol',
    profiles: {
      1: {
        subname: '',
        range: "12",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'pistol': ''
        },
        traits: 'assault, bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'bolter': {
    id: 'rw105',
    name: 'bolter',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'banestrike bolter': {
    id: 'rw105a',
    name: 'banestrike bolter',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          breaching: '(6+)'
        },
        traits: 'bolt',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'banestrike bolt cannon': {
    id: 'rw105b',
    name: 'banestrike bolt cannon',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "4",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          breaching: '(6+)'
        },
        traits: 'bolt',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },

  'twin bolter': {
    id: 'rw106',
    name: 'twin-bolter',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "4",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-bolter': {
    id: 'rw107',
    name: 'combi-bolter',
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "4",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {

        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'kraken bolter': {
    id: 'rw108',
    name: 'kraken bolter',
    profiles: {
      1: {
        subname: '',
        range: "30",
        fire_power: "2",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'precision': '(4+)',
          'shot selector': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'nemesis bolter': {
    id: 'rw109',
    name: 'nemesis bolter',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'breaching': '(5+)',
          'pinning': '(1)',
          'precision': '(4+)',
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'nemesis rifle': {
    id: 'rw135',
    name: 'nemesis rifle',
    profiles: {
      1: {
        subname: '',
        range: "48",
        fire_power: "1",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'breaching': '(5+)',
          'pinning': '(1)',
          'precision': '(4+)',
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy bolter': {
    id: 'rw110',
    name: 'heavy bolter',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "3",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(FP)',
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin heavy bolter': {
    id: 'rw111',
    name: 'twin heavy bolter',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "6",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {

        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'gravis bolt cannon': {
    id: 'rw111a',
    name: 'gravis bolt cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "6",
        strength: "5",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'heavy': '(FP)',
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'gravis heavy bolter battery': {
    id: 'rw112',
    name: 'gravis heavy bolter battery',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "8",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'suppressive': '(2)'
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin avenger bolt cannon': {
    id: 'rw113',
    name: 'twin avenger bolt cannon',
    profiles: {
      1: {
        subname: '',
        range: "36",
        fire_power: "10",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'suppressive': '(2)'
        },
        traits: 'bolt',
      },

    },
    cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-flamer': {
    id: 'rw115',
    name: 'combi-flamer',
    profiles: {
      1: {
        subname: 'flamer',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': '',
          'template': '',
          'panic': '(1)',
          'limited': '(1)'
        },
        traits: 'flame',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'alchem combi-flamer': {
    id: 'rw115a',
    name: 'alchem combi-flamer',
    profiles: {
      1: {
        subname: 'alchem flamer',
        range: "template",
        fire_power: "1",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': '',
          'template': '',
          'poisoned': '(2+)',
          'limited': '(1)'
        },
        traits: 'flame',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },

    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-melta': {
    id: 'rw116',
    name: 'combi-melta',
    profiles: {
      1: {
        subname: 'melta',
        range: "12",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'combi': '',
          'melta': '(6)',
          'limited': '(1)'
        },
        traits: 'melta',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-plasma': {
    id: 'rw117',
    name: 'combi-plasma',
    profiles: {
      1: {
        subname: 'plasma',
        range: "24",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'combi': '',
          'breaching': '(6+)',
          'limited': '(1)'
        },
        traits: 'plasma',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-volkite': {
    id: 'rw118',
    name: 'combi-volkite',
    profiles: {
      1: {
        subname: 'volkite',
        range: "15",
        fire_power: "2",
        strength: "5",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': '',
          'deflagrate': '(5)',
        },
        traits: 'volkite',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-grenade': {
    id: 'rw119',
    name: 'combi-grenade',
    profiles: {
      1: {
        subname: 'grenade',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'combi': '',
        },
        traits: '-',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-desintegrator': {
    id: 'rw120',
    name: 'combi-desintegrator',
    profiles: {
      1: {
        subname: 'desintegrator',
        range: "24",
        fire_power: "1",
        strength: "4",
        armor_penetration: "3",
        damage: "2",
        specail_rules: {
          'combi': '',
          'overload': '(1)',
          'limited': '(1)'
        },
        traits: 'desintegrator',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'combi-grav': {
    id: 'rw121',
    name: 'combi-grav',
    profiles: {
      1: {
        subname: 'grav',
        range: "18",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'combi': '',
          'blast': '(3")',
          'breaching': '(6+)',
          'shock': '(Pinned)',
          'pinning': '(1)',
          'limited': '(1)'
        },
        traits: 'graviton',
      },
      2: {
        subname: 'bolter',
        range: "24",
        fire_power: "2",
        strength: "4",
        armor_penetration: "5",
        damage: "1",
        specail_rules: {
          'combi': ''
        },
        traits: 'bolt',
      },

    },
    cathegory: 'combi',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma pistol': {
    id: 'rw122',
    name: 'plasma pistol',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "12",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'breaching': '(6+)',
        },
        traits: 'assault, plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "12",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'breaching': '(5+)',
          'overload': '(1)',
        },
        traits: 'assault, plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'overcharged plasma pistol': {
    id: 'rw123',
    name: 'overcharged plasma pistol',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "12",
        fire_power: "3",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'pistol': '',
          'breaching': '(4+)',
          'overload': '(1)',
        },
        traits: 'assault, plasma',
      },
    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma gun': {
    id: 'rw124',
    name: 'plasma gun',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "24",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "24",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(5+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'twin plasma gun': {
    id: 'rw125',
    name: 'twin plasma gun',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "24",
        fire_power: "2",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(5+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "24",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(4+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma bombard': {
    id: 'rw126',
    name: 'plasma bombard',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "24",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'barrage': '(1)',
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "24",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'barrage': '(1)',
          'breaching': '(5+)',
          'overload': '(2)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'heavy plasma bombard': {
    id: 'rw127',
    name: 'heavy plasma bombard',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'barrage': '(1)',
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'barrage': '(1)',
          'breaching': '(5+)',
          'overload': '(2)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma cannon': {
    id: 'rw128',
    name: 'plasma cannon',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'breaching': '(6+)',
          'heavy': '(RS)'
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'breaching': '(5+)',
          'overload': '(2)',
          'heavy': '(RS)'
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'gravis plasma cannon': {
    id: 'rw129',
    name: 'gravis plasma cannon',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(5")',
          'breaching': '(6+)',
          'heavy': '(RS)'
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'breaching': '(5+)',
          'overload': '(1)',
          'heavy': '(RS)'
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'plasma blaster': {
    id: 'rw130',
    name: 'plasma blaster',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "18",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "18",
        fire_power: "2",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(5+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'executioner plasma destroyer': {
    id: 'rw131',
    name: 'executioner plasma destroyer',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'blast': '(5")',
          'breaching': '(5+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'breaching': '(4+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'hellfire plasma cannonade': {
    id: 'rw132',
    name: 'hellfire plasma cannonade',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "6",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'heavy': '(RS)',
          'breaching': '(5+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'heavy': '(RS)',
          'blast': '(5)',
          'breaching': '(4+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'omega plasma array': {
    id: 'rw133',
    name: 'omega plasma array',
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "36",
        fire_power: "6",
        strength: "7",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'breaching': '(5+)',
        },
        traits: 'plasma',
      },
      2: {
        subname: 'maximal fire',
        range: "36",
        fire_power: "1",
        strength: "8",
        armor_penetration: "4",
        damage: "2",
        specail_rules: {
          'blast': '(5")',
          'breaching': '(4+)',
          'overload': '(1)',
        },
        traits: 'plasma',
      },

    },
    cathegory: 'plasma',
    faction: 'legiones astartes',
    subfaction: '',
  },
  'venom spheres': {
    id: 'rw137',
    name: 'venom spheres',
    profiles: {
      1: {
        subname: '',
        range: "8",
        fire_power: "1",
        strength: "1",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'blast': '(3")',
          'poisoned': '(4+)'
        },
        traits: 'assault',
      },

    },
    cathegory: 'poison',
    faction: 'legiones astartes',
    subfaction: 'alpha legion',
  },
  'banestrike combi-bolter': {
    id: 'rw138',
    name: 'banestrike combi-bolter',
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "4",
        strength: "4",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',

        },
        traits: 'bolt',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'alpha legion',
  },
  'the medusan carapace': {
    id: 'rw',
    name: 'the medusan carapace',
    profiles: {
      1: {
        subname: 'Alpha-12',
        range: "18",
        fire_power: "2",
        strength: "7",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(4+)',

        },
        traits: 'plasma',
      },
      2: {
        subname: 'Epsilon-415',
        range: "18",
        fire_power: "2",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'shock': '(Pinned)',
          'pinning': '(1)',

        },
        traits: 'graviton',
      },
      3: {
        subname: 'Phi-71',
        range: "Template",
        fire_power: "1",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'template': '',
          'panic': '(2)',

        },
        traits: 'flame',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  "storm's wrath": {
    id: '',
    name: "storm's wrath",
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "3",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',

        },
        traits: 'bolt, assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  "the lantern": {
    id: '',
    name: "the lantern",
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "3",
        specail_rules: {
          'armourbane': '',

        },
        traits: 'assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'death guard',
  },
  "slaker": {
    id: '',
    name: "slaker",
    profiles: {
      1: {
        subname: '',
        range: "template",
        fire_power: "1",
        strength: "3",
        armor_penetration: "-",
        damage: "1",
        specail_rules: {
          'template': '',
          'pistol': '',
          'poisoned': '(2+)',
          'panic': '(1)',

        },
        traits: 'assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'death guard',
  },
  "banestrike fussilade": {
    id: '',
    name: "banestrike fussilade",
    profiles: {
      1: {
        subname: '',
        range: "10",
        fire_power: "4",
        strength: "5",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
          'pistol': '',

        },
        traits: 'bolt, assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'sons of horus',
  },
  "the warmasters talon (range)": {
    id: '',
    name: "the warmaster's talon (range)",
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "5",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',


        },
        traits: 'bolt, assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'sons of horus',
  },
  "the hydra's spite": {
    id: '',
    name: "the hydra's spite",
    profiles: {
      1: {
        subname: '',
        range: "18",
        fire_power: "2",
        strength: "7",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'breaching': '(4+)',


        },
        traits: 'plasma, assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'alpha legion',
  },
  "the voice of terra": {
    id: '',
    name: "the voice of terra",
    profiles: {
      1: {
        subname: '',
        range: "24",
        fire_power: "3",
        strength: "5",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'breaching': '(5+)',


        },
        traits: 'bolt, assault',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'imperial fists',
  },
  "the instrument": {
    id: '',
    name: "the instrument",
    profiles: {
      1: {
        subname: 'rapid shot',
        range: "24",
        fire_power: "3",
        strength: "6",
        armor_penetration: "3",
        damage: "1",
        specail_rules: {
          'breaching': '(4+)',


        },
        traits: 'assault',
      },
      2: {
        subname: 'execution shot',
        range: "72",
        fire_power: "1",
        strength: "8",
        armor_penetration: "2",
        damage: "1",
        specail_rules: {
          'heavy': '(D)',
          'pinning': '(1)',
        },
        traits: '-',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'alpha legion',
  },
  "iliastus assault cannon": {
    id: '',
    name: "iliastus assault cannon",
    profiles: {
      1: {
        subname: 'sustained fire',
        range: "24",
        fire_power: "3",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(6+)',
          'heavy': '(FP)',

        },
        traits: 'auto',
      },
      2: {
        subname: 'maximal fire',
        range: "24",
        fire_power: "5",
        strength: "6",
        armor_penetration: "4",
        damage: "1",
        specail_rules: {
          'breaching': '(4+)',
          'heavy': '(FP)',
          'overload': '(1)'

        },
        traits: 'auto',
      },

    },
    // cathegory: 'bolt',
    faction: 'legiones astartes',
    subfaction: 'imperial fists',
  },

}
export const melee_weapons = {
  "fulcrum hand cannons (melee)": {
    id: 'mw',
    name: "fulcrum hand cannons (melee)",
    init_mod: "i",
    attack_mod: "+1",
    strength: "6",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      "shred": '(5+)',
    },
    traits: '-',
    faction: 'legiones astartes',
  },
  "the corvidine talons": {
    id: 'mw',
    name: "the corvidine talons",
    init_mod: "+1",
    attack_mod: "+2",
    strength: "s",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      "critical hit": '(6+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "talionis": {
    id: 'mw',
    name: "talionis",
    init_mod: "+4",
    attack_mod: "3",
    strength: "s",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      "breaching": '(6+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "paired raven's talons": {
    id: 'mw',
    name: "paired raven's talons",
    init_mod: "i",
    attack_mod: "+2",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(6+)',
      "rending": '(6+)',
      "impact": '(IM)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "raven's talons": {
    id: 'mw',
    name: "raven's talons",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(6+)',
      "rending": '(6+)',
      "impact": '(IM)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "argean power sword": {
    id: 'mw',
    name: "argean power sword",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(5+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "phaeton": {
    id: 'mw',
    name: "phaeton",
    init_mod: "i",
    attack_mod: "+1",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(6+)',
      "duelist's edge": '(1)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "the hand of dominion": {
    id: 'mw',
    name: "the hand of dominion",
    init_mod: "-3",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      "armourbane": '',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "the gladius incandor": {
    id: 'mw',
    name: "the gladius incandor",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      "breaching": '(5+)',
      "duelist's edge": '(1)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "legatine axe": {
    id: 'mw',
    name: "legatine axe",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(4+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "butcher chainfists": {
    id: 'mw',
    name: "butcher chainfists",
    init_mod: "-3",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      "shred": '(6+)',
      "armourbane": ''
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "butcher power axes": {
    id: 'mw',
    name: "butcher power axes",
    init_mod: "-1",
    attack_mod: "+1",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": '(4+)'
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "the conqueror's bite": {
    id: 'mw',
    name: "the conqueror's bite",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {

    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "gorechild reforged": {
    id: 'mw',
    name: "gorechild reforged",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
      'shred': '(5+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "the cutter": {
    id: 'mw',
    name: "the cutter",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "gorefather and gorechild": {
    id: 'mw',
    name: "gorefather and gorechild",
    init_mod: "i",
    attack_mod: "+1",
    strength: "s",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(6+)',
      'shred': '(6+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "barb-hook lash": {
    id: 'mw',
    name: "barb-hook lash",
    init_mod: "+1",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
      'phage': '(S)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "paired falax blades": {
    id: 'mw',
    name: "paired falax blades",
    init_mod: "i",
    attack_mod: "+2",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "excoriator chainaxe": {
    id: 'mw',
    name: "excoriator chainaxe",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      'shred': '(6+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "meteor hammer": {
    id: 'mw',
    name: "meteor hammer",
    init_mod: "i",
    attack_mod: "-1",
    strength: "+2",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      'impact': '(IM)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "killer's blade": {
    id: 'mw',
    name: "killer's blade",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "-",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      'precision': '(6+)',
    },
    traits: '-',
    faction: 'legiones astartes',
  },
  "escaton power claw": {
    id: 'mw',
    name: "escaton power claw",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'shred': '(6+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "chainblade": {
    id: 'mw',
    name: "chainblade",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      'shred': '(5+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "the night's whisper": {
    id: 'mw',
    name: "the night's whisper",
    init_mod: "+1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
      'shred': '(5+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "mercy and forgiveness": {
    id: 'mw',
    name: "mercy and forgiveness",
    init_mod: "i",
    attack_mod: "+2",
    strength: "s",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(5+)',
      'shred': '(4+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "chainglaive": {
    id: 'mw',
    name: "chainglaive",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      'shred': '(6+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "headsman's axe": {
    id: 'mw',
    name: "headsman's axe",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(6+)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "dawnbringer": {
    id: 'mw',
    name: "dawnbringer",
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'critical hit': '(5+)',
      'armourbane': ''
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted thunder hammer": {
    id: 'mw',
    name: "forge-crafted thunder hammer",
    init_mod: "-2",
    attack_mod: "+1",
    strength: "+3",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {

    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted power fist": {
    id: 'mw',
    name: "forge-crafted power fist",
    init_mod: "-3",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {

    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted power lance": {
    id: 'mw',
    name: "forge-crafted power lance",
    init_mod: "+1",
    attack_mod: "+1",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'precision': '(6+)'
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted power maul": {
    id: 'mw',
    name: "forge-crafted power maul",
    init_mod: "-1",
    attack_mod: "+1",
    strength: "+2",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted power axe": {
    id: 'mw',
    name: "forge-crafted power axe",
    init_mod: "-1",
    attack_mod: "+1",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)'
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "forge-crafted power sword": {
    id: 'mw',
    name: "forge-crafted power sword",
    init_mod: "i",
    attack_mod: "+1",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "calibanite charge-blade (charged)": {
    id: 'mw',
    name: "calibanite charge-blade (charged)",
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'sword of the order',
    faction: 'legiones astartes',
  },
  "calibanite charge-blade (uncharged)": {
    id: 'mw',
    name: "calibanite charge-blade (uncharged)",
    init_mod: "+2",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "4",
    damage: "1",
    specail_rules: {

    },
    traits: 'sword of the order',
    faction: 'legiones astartes',
  },
  "excindio claws": {
    id: 'mw',
    name: "excindio claws",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      'breaching': '(5+)',
      'reaping blow': '(2)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "the death of worlds": {
    id: 'mw',
    name: "the death of worlds",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+5",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {

    },
    traits: 'none',
    faction: 'legiones astartes',
  },
  "the blade": {
    id: 'mw',
    name: "the blade",
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {

      "duelist's edge": "(2)",
    },
    traits: 'power, sword of the order',
    faction: 'legiones astartes',
  },
  "the wolf blade": {
    id: 'mw',
    name: "the wolf blade",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      shred: "(4+)",
      "breaching": "(4+)",
      "reaping blow": "(2)",
    },
    traits: 'chain, sword of the order',
    faction: 'legiones astartes',
  },
  "the lion sword": {
    id: 'mw',
    name: "the lion sword",
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {

    },
    traits: 'power, sword of the order',
    faction: 'legiones astartes',
  },
  "calibanite warblade": {
    id: 'mw',
    name: "calibanite warblade",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      armourbane: '',
      "breaching": "(5+)",
    },
    traits: 'sword of the order',
    faction: 'legiones astartes',
  },
  "terranic greatsword": {
    id: 'mw',
    name: "terranic greatsword",
    init_mod: "-1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      armourbane: '',
      "breaching": "(5+)",
    },
    traits: 'sword of the order',
    faction: 'legiones astartes',
  },
  "graviton mace": {
    id: 'mw',
    name: "graviton mace",
    init_mod: "-1",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      armourbane: '',
      "shock": "(Pinned)",
    },
    traits: 'graviton, power',
    faction: 'legiones astartes',
  },
  "graviton gauntlet": {
    id: 'mw',
    name: "graviton gauntlet",
    init_mod: "-3",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      "shock": "(Pinned)",
    },
    traits: 'graviton, power',
    faction: 'legiones astartes',
  },
  "forgebreaker desecrated": {
    id: 'mw',
    name: "forgebreaker desecrated",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      "critical hit": "(5+)",
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "the logos array (melee)": {
    id: 'mw',
    name: "the logos array (melee)",
    init_mod: "i",
    attack_mod: "+2",
    strength: "6",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "shred": "(4+)",
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "spiteful demise": {
    id: 'mw',
    name: "",
    init_mod: "i",
    attack_mod: "1",
    strength: "6",
    armor_penetration: "4",
    damage: "2",
    specail_rules: {
      "breaching": "(5+)",
    },
    traits: '-',
    faction: 'legiones astartes',
  },
  "graviton crusher": {
    id: 'mw',
    name: "graviton crusher",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      "shock": "(Pinned)",
      "armourbane": ""
    },
    traits: 'graviton',
    faction: 'legiones astartes',
  },
  "durenda": {
    id: 'mw',
    name: "durenda",
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      "breaching": "(5+)"
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "subjugator": {
    id: 'mw',
    name: "subjugator",
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {

    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  "storm's teeth": {
    id: 'mw',
    name: "storm's teeth",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'shred': '(4+)',
      'reaping blow': '(2)',
    },
    traits: 'chain',
    faction: 'legiones astartes',
  },
  "the black sword": {
    id: 'mw',
    name: "the black sword",
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
      "duelist's edge": '(2)',
    },
    traits: '-',
    faction: 'legiones astartes',
  },
  "the headsmen and the hunter": {
    id: 'mw',
    name: "the headsmen and the hunter",
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(4+)',
    },
    traits: 'power',
    faction: 'legiones astartes',
  },
  'chainsword': {
    id: 'mw1',
    name: 'chainsword',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "5",
    damage: "1",
    specail_rules: {
      'shred': '(6+)',
    },
    traits: 'chain',
    cathegory: 'chain',

    faction: 'legiones astartes',
  },
  'heavy chainaxe': {
    id: 'mw2',
    name: 'heavy chainaxe',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "4",
    damage: "1",
    specail_rules: {
      'shred': '(6+)',
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'heavy chainsword': {
    id: 'mw3',
    name: 'heavy chainsword',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "4",
    damage: "1",
    specail_rules: {
      'shred': '(6+)',
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'chainaxe': {
    id: 'mw4',
    name: 'chainaxe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "5",
    damage: "1",
    specail_rules: {
      'shred': '(6+)',
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'chainfist': {
    id: 'mw5',
    name: 'chainfist',
    init_mod: "-3",
    attack_mod: "-1",
    strength: "+6",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'shred': '(6+)',
      'armourbane': ''
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'gravis chainfist': {
    id: 'mw6',
    name: 'gravis chainfist',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'shred': '(6+)',
      'armourbane': ''
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'paired gravis chainfists': {
    id: 'mw7',
    name: 'paired gravis chainfists',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "4",
    specail_rules: {
      'shred': '(6+)',
      'armourbane': ''
    },
    traits: 'chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'chain bayonet': {
    id: 'mw8',
    name: 'chain bayonet',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "5",
    damage: "1",
    specail_rules: {
      'shred': '(6+)'
    },
    traits: 'bayonet, chain',
    cathegory: 'chain',
    faction: 'legiones astartes',
  },
  'charnabal sabre': {
    id: 'mw9',
    name: 'charnabal sabre',
    init_mod: "+1",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "-",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      "duelist's edge": "(1)"
    },
    traits: 'charnabal',
    cathegory: 'charnabal',
    faction: 'legiones astartes',
  },
  'charnabal tabar': {
    id: 'mw10',
    name: 'charnabal tabar',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "-",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)',
      "duelist's edge": "(1)"
    },
    traits: 'charnabal',
    cathegory: 'charnabal',
    faction: 'legiones astartes',
  },
  'force sword': {
    id: 'mw11',
    name: 'force sword',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'force': '(D)',
    },
    traits: 'psychic',
    cathegory: 'force',
    faction: 'legiones astartes',
  },
  'force axe': {
    id: 'mw12',
    name: 'force axe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'force': '(D)',
    },
    traits: 'psychic',
    cathegory: 'force',
    faction: 'legiones astartes',
  },
  'force maul': {
    id: 'mw13',
    name: 'force maul',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'force': '(D)',
    },
    traits: 'psychic',
    cathegory: 'force',
    faction: 'legiones astartes',
  },
  'force staff': {
    id: 'mw14',
    name: 'force staff',
    init_mod: "+1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "4",
    damage: "1",
    specail_rules: {
      'force': '(D)',
    },
    traits: 'psychic',
    cathegory: 'force',
    faction: 'legiones astartes',
  },

  'power sword': {
    id: 'mw15',
    name: 'power sword',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },

  'power axe': {
    id: 'mw16',
    name: 'power axe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'artificer power axe': {
    id: 'mw16a',
    name: 'artificer power axe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)',
      'shred': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  'power scythe': {
    id: 'mw16b',
    name: 'power scythe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)',
      'reaping blow': '(2)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  'carsoran power axe': {
    id: 'mw16c',
    name: 'carsoran power axe',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)',
      'shred': '(6+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  'carsoran power tabar': {
    id: 'mw16d',
    name: 'carsoran power tabar',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)',
      'shred': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands',
  },
  'power maul': {
    id: 'mw17',
    name: 'power maul',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'power lance': {
    id: 'mw18',
    name: 'power lance',
    init_mod: "+1",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'precision': '(6+)',
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'staff of dark authority': {
    id: 'mw18a',
    name: 'staff of dark authority',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)',
    },
    traits: 'power',

    faction: 'legiones astartes',
  },
  'power fist': {
    id: 'mw19',
    name: 'power fist',
    init_mod: "-3",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'gravis power fist': {
    id: 'mw20',
    name: 'gravis power fist',
    init_mod: "i",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'paired gravis power fists': {
    id: 'mw21',
    name: 'paired gravis power fists',
    init_mod: "i",
    attack_mod: "+1",
    strength: "+3",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'thunder hammer': {
    id: 'mw22',
    name: 'thunder hammer',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'crozius arcanum': {
    id: 'mw23',
    name: 'crozius arcanum',
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "3",
    damage: "2",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'lightning claw': {
    id: 'mw24',
    name: 'lightning claw',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'rending': '(6+)',
      'breaching': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'paired lightning claws': {
    id: 'mw37',
    name: 'paired lightning claws',
    init_mod: "i",
    attack_mod: "+2",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'rending': '(6+)',
      'breaching': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'power lash': {
    id: 'mw38',
    name: 'power lash',
    init_mod: "+1",
    attack_mod: "a",
    strength: "-1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(6+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
  },

  'saturnine war axe': {
    id: 'mw25',
    name: 'saturnine war axe',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'reaping blow': '(2)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'saturnine concussion hammer': {
    id: 'mw26',
    name: 'saturnine concussion hammer',
    init_mod: "-3",
    attack_mod: "a",
    strength: "x2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'critical hit': '(6+)'
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'saturnine disruption fist': {
    id: 'mw27',
    name: 'saturnine disruption fist',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
    },
    traits: 'power',
    cathegory: 'power',
    faction: 'legiones astartes',
  },
  'paragon blade': {
    id: 'mw28',
    name: 'paragon blade',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)'
    },
    traits: '-',
    cathegory: 'paragon',
    faction: 'legiones astartes',
  },
  'lascutter (melee)': {
    id: 'mw29',
    name: 'lascutter (melee)',
    init_mod: "-3",
    attack_mod: "1",
    strength: "12",
    armor_penetration: "2",
    damage: "4",
    specail_rules: {
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'krak grenades': {
    id: 'mw30',
    name: 'krak grenades',
    init_mod: "-3",
    attack_mod: "1",
    strength: "6",
    armor_penetration: "4",
    damage: "2",
    specail_rules: {
      'detonation': ''
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'melta bombs': {
    id: 'mw31',
    name: 'melta bombs',
    init_mod: "-3",
    attack_mod: "1",
    strength: "9",
    armor_penetration: "2",
    damage: "4",
    specail_rules: {
      'armourbane': '',
      'detonation': ''
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'leviathan siege claw': {
    id: 'mw32',
    name: 'leviathan siege claw',
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'paired leviathan siege claws': {
    id: 'mw33',
    name: 'paired leviathan siege claws',
    init_mod: "i",
    attack_mod: "+1",
    strength: "+2",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'leviathan siege drill': {
    id: 'mw34',
    name: 'leviathan siege drill',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'armourbane': '',
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'paired leviathan siege drills': {
    id: 'mw35',
    name: 'paired leviathan siege drills',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "4",
    specail_rules: {
      'armourbane': '',
    },
    traits: '-',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'bayonet': {
    id: 'mw36',
    name: 'bayonet',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "5",
    damage: "1",
    specail_rules: {
    },
    traits: 'bayonet',
    cathegory: 'exotic and miscellaneous',
    faction: 'legiones astartes',
  },
  'power dagger': {
    id: 'mw39',
    name: 'power dagger',
    init_mod: "+2",
    attack_mod: "a",
    strength: "-1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'breaching': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'alpha legion'
  },
  'forgebreaker': {
    id: 'mw',
    name: 'forgebreaker',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+3",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'critical hit': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands'
  },
  'albian power gladius': {
    id: 'mw',
    name: 'albian power gladius',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'Breaching': '(6+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'iron hands'
  },
  'silince': {
    id: 'mw',
    name: 'silince',
    init_mod: "-1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(6+)',
      'reaping blow': '(3)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'death guard'
  },
  'lakrimae': {
    id: 'mw',
    name: 'lakrimae',
    init_mod: "-1",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'reaping blow': '(3)',
      'poisoned': '(3+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'death guard'
  },
  'cthonian power claw': {
    id: 'mw',
    name: 'cthonian power claw',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'shred': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  'worldbreaker': {
    id: 'mw',
    name: 'worldbreaker',
    init_mod: "-2",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "3",
    specail_rules: {
      'critical hit': '(5+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  "the warmasters talon (melee)": {
    id: 'mw',
    name: "the warmaster's talon (melee)",
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'shred': '(6+)',
      'reaping blow': '(3)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  'mourn-it-all': {
    id: 'mw',
    name: 'mourn-it-all',
    init_mod: "i",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(6+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  'the axe serpentis': {
    id: 'mw',
    name: 'the axe serpentis',
    init_mod: "+1",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      'critical hit': '(6+)'
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  'rime-shard': {
    id: 'mw',
    name: 'rime-shard',
    init_mod: "i",
    attack_mod: "a",
    strength: "+2",
    armor_penetration: "2",
    damage: "1",
    specail_rules: {
      '': ''
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'alpha legion'
  },
  'the pale spear': {
    id: 'mw',
    name: 'the pale spear',
    init_mod: "+1",
    attack_mod: "a",
    strength: "+1",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(5+)',
      'armourbane': '',
      'phage': '(S)',
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'alpha legion'
  },
  'the culling blade': {
    id: 'mw',
    name: 'the culling blade',
    init_mod: "i",
    attack_mod: "a",
    strength: "s",
    armor_penetration: "3",
    damage: "1",
    specail_rules: {
      'poisoned': '(2+)',
      'critical hit': '(6+)',
      'breaching': '(5+)',
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'sons of horus'
  },
  'solarite power gauntlet': {
    id: 'mw',
    name: 'solarite power gauntlet',
    init_mod: "-3",
    attack_mod: "a",
    strength: "+4",
    armor_penetration: "2",
    damage: "2",
    specail_rules: {
      'critical hit': '(6+)',
    },
    traits: 'power',
    // cathegory: 'power',
    faction: 'legiones astartes',
    subfaction: 'imperial fists'
  },









}
export const wargear = {
  "corvid pattern jump pack": {
    id: 'wg',
    name: "corvid pattern jump pack",
    desc: ``,
    text: `A Model with a Corvid pattern jump pack has their Movement Characteristic set to 14 and replaces any instance of the
Bulky (X) Special Rule with Bulky (3). Each time a Dangerous Terrain Test is made for a Model with a Corvid pattern jump pack, that Test is automatically passed.`,
    faction: 'legiones astartes',
    unique: true
  },
  "cameleoline": {
    id: 'wg',
    name: "cameleoline",
    desc: ``,
    text: `If a Unit that includes any Models with Cameleoline is the target of a Shooting Attack, if the distance between the closest Model in the Attacking Unit and the Target Unit is 12" or greater, Models in that Unit gain the Shrouded (S+) Special Rule or, if they already have or gain a version of the Shrouded (X) Special Rule from another source, modify the variable number by +1, to a maximum of Shrouded (4+).`,
    faction: 'legiones astartes',
    unique: true
  },
  "peritarch targeter": {
    id: 'wg',
    name: "peritarch targeter",
    desc: ``,
    text: `When a Unit that contains any Models with a peritarch targeter is selected to make a Shooting Attack, if that Unit remained Stationary in the Controlling Player’s preceding Movement Phase, Shrouded Damage Mitigation Rolls cannot be made against attacks made as part of that Shooting Attack. In addition, the Controlling Player can make an Intelligence Check for that Unit. If successful, until that Shooting Attack is fully resolved the Base Ballistic Skill Characteristic of Models in that Unit with a peritarch targeter is modified by +1.`,
    faction: 'legiones astartes',
    unique: true
  },
  "vox-interlink": {
    id: 'wg',
    name: "vox-interlink",
    desc: ``,
    text: `While a Model with a vex-interlink is on the Battlefield, the Controlling Player can add +1 to the result of their Reserves Tests (including those made for Aerial Reserves).`,
    faction: 'legiones astartes',
    unique: true
  },
  "icon of calth": {
    id: 'wg',
    name: "icon of calth",
    desc: ``,
    text: `The Tactical Strength of Models with the Ultramarines Trait in a Unit that includes any Models with an Icon of Calth is modified by +1.`,
    faction: 'legiones astartes',
    unique: true
  },
  "argyrum pattern boarding shield": {
    id: 'wg',
    name: "argyrum pattern boarding shield",
    desc: `This Wargear provides an enhanced save against attacks made in close combat.`,
    text: `A Model with a Argyrum pattern boarding shield has a 5+ Invulnerable Save, increasing to a 4+ Invulnerable Save against Wounds inflicted by Melee Weapons. In addition, it gains the Shield Trait and the Heavy Sub-Type.`,
    faction: 'legiones astartes',
    unique: true
  },

  "occulix targeting auspex": {
    id: 'wg',
    name: "occulix targeting auspex",
    desc: ``,
    text: `When a Model with an occulix targeting auspex is selected to make a
          Shooting Attack, if that Model's Unit remained Stationary in the
          Controlling Player's preceding Movement Phase, that Model gains the
          Firing Protocols (2) Special Rule until the Shooting Attack is fully
          resolved.`,
    faction: 'legiones astartes',
    unique: true
  },

  "drakenscale": {
    id: 'wg',
    name: "drakenscale",
    desc: ``,
    text: `Wounds with the Flame, Plasma, Melta or Volkite Trait allocated to a Model with Drakenscale have their Damage Characteristic set to 1.`,
    faction: 'legiones astartes',
    unique: true
  },
  "cytheron pattern aegis": {
    id: 'wg',
    name: "cytheron pattern aegis",
    desc: ``,
    text: `A Model with a Cytheron pattern aegis has a 5+ Invulnerable Save and gains the Shield Trait. In addition, the Controlling Player of a Unit that includes any Models with a Cytheron pattern aegis may declare the Shieldwall! Advanced Reaction for that Unit. This is an exception to the normal Rules for the Shieldwall! Advanced Reaction.`,
    faction: 'legiones astartes',
    unique: true
  },
  "armour of the forest": {
    id: 'wg',
    name: "armour of the forest",
    desc: ``,
    text: `When a Model with this Special Rule is engaged in a Challenge, the Damage Characteristic of any wound inflicted on that Model is reduced by 1, to a minimum of 1.`,
    faction: 'legiones astartes',
    unique: true
  },
  "stasis grenades": {
    id: 'wg',
    name: "stasis grenades",
    desc: `Stasis grenades reduce the Combat Initiative of enemies.`,
    text: `Once per Battle, the first time a Model with stasis grenades and any Unit that it has joined is successfully Charged, the Combat Initiative of all Models in the Charging Unit is modified by -2 for the duration of the current Assault Phase. This modifier does not affect Models in the Charging Unit that are engaged in a Challenge.`,
    faction: 'legiones astartes',
    unique: true
  },
  "augury scanner": {
    id: 'wg1',
    name: "augury scanner",
    desc: "Augury scanners allow attacks to ignore Shrouded Damage Mitigation Tests.",
    text: "When a Shooting Attack made by a Unit that includes any Models with an augury scanner inflicts any Hits (excluding Hits from attacks made as Snap Shots), Shrouded Damage Mitigation Rolls cannot be made against those Hits.",
    faction: 'legiones astartes'
  },
  'boarding shield': {
    id: 'wg2',
    name: 'boarding shield',
    desc: 'Boarding shields grant a 5+ Invulnerable Save, the Shield Trait and the Heavy Sub-Type.',
    text: 'A Model with a boarding shield gains a 5+ Invulnerable Save. In addition it gains the Shield Trait and the Heavy Sub-Type.',
    faction: 'legiones astartes'
  },
  'cognis-signum': {
    id: 'wg3',
    name: 'cognis-signum',
    desc: 'A cognis-signum allows more accurate attacks to be made with Barrage Weapons.',
    text: 'Instead of making a Shooting Attack with a Model with a cognis-signum, the Controlling Player may instead make an Intelligence Check. If the Check is passed, the Controlling Player may select a single enemy Unit within Line of Sight of the Model with a cognis-signum. The next time the selected enemy Unit is targeted by a Shooting Attack that includes any Weapons with the Barrage (X) Special Rule during the current Shooting Phase, the Controlling Player may make Hit Tests for the attacks that have the Barrage (X) Special Rule as normal, ignoring the limitations of the Barrage (X) Special Rule if the Unit making the Shooting Attack is without Line of Sight to the Target Unit. If the Check is not passed, the cognis-signum has no effect this turn.',
    faction: 'legiones astartes'
  },
  'combat shield': {
    id: 'wg4',
    name: 'combat shield',
    desc: 'A combat shield grants a 5+ Invulnerable Save and a bonus to Focus Rolls.',
    text: 'A Model with a combat shield has a 5+ Invulnerable Save against attacks made with Melee Weapons. In addition a Model with a combat shield gains a +1 modifier to Focus Rolls made for it.',
    faction: 'legiones astartes'
  },
  'command vox relay': {
    id: 'wg5',
    name: 'command vox relay',
    desc: 'A command vox relay grants a bonus to Reserves Tests and can be used to grant other benefits.',
    text: 'While a Model with a command vox relay is on the Battlefield, before making a Reserves Test for a Unit in Reserves, the Controlling Player can select for that Model to activate that command vox relay. If they do, they can modify the result of that Reserves Test by +1. Only one command vox relay can be activated for each Reserves Test.<br><br>In addition, in the Effects Sub-Phase of the Start Phase, the Controlling Player of a Model with a command vox relay can make an Intelligence Check for that Model (if that Model has the Vehicle Type, it is treated as having an Intelligence Characteristic of 8). If that Check is successful, the Controlling Player can select a friendly Unit which includes only Models with the same Faction Trait as the Model with the command vox relay and select one of the following effects:<br><ul class="unit-list"><li>Until the end of this Turn, Models in that Unit gain the Line (1) Special Rule (and lose the Vanguard (X) Special Rule if they had it).</li><li>Until the end of this Turn, Models in that Unit gain the Vanguard (1) Special Rule (and lose the Line (X) Special Rule if they had it).</li></ul>',
    faction: 'legiones astartes'
  },
  'company standard': {
    id: 'wg6',
    name: 'company standard',
    desc: 'A company standard adds a bonus to Combat Resolution.',
    text: 'When resolving a Combat in the Resolution Sub-Phase of the Assault Phase, score 1 Combat Resolution Point for each Unit in that Combat that has any Models that have a company standard. In addition, a Model with a company standard counts as an additional 5 Models for the purposes of Outside Support in a Challenge.',
    faction: 'legiones astartes'
  },
  'cortex controller': {
    id: 'wg7',
    name: 'cortex controller',
    desc: 'Cortex controllers allow Automata to make Reactions.',
    text: 'A Unit that includes any Models with the Automata Type can ignore the restriction on making Reactions imposed by the Automata Type while it includes one or more Models with a cortex controller.',
    faction: 'legiones astartes'
  },
  'cyber-familiar': {
    id: 'wg8',
    name: 'cyber-familiar',
    desc: 'Cyber-familiars grant a bonus to Intelligence Checks.',
    text: 'The Controlling Player of a Model with a cyber-familiar can modify the results of Intelligence Checks made for that Model by -2.',
    faction: 'legiones astartes'
  },
  'dozer blade': {
    id: 'wg9',
    name: 'dozer blade',
    desc: 'Dozer blades allow Models to ignore the Movement penalties of Difficult Terrain.',
    text: 'If the Controlling Player chooses for a Model with a dozer blade to enter any area of Difficult Terrain, the Unit does not apply a modifier to its movement during that Phase.',
    faction: 'legiones astartes'
  },
  'legion standard': {
    id: 'wg10',
    name: 'legion standard',
    desc: 'Legion standards grant bonuses to Combat Resolution.',
    text: 'When resolving a Combat in the Resolution Sub-Phase of the Assault Phase, score 2 Combat Resolution Points for each Unit in that Combat that has any Models that have a Legion standard. In addition, a Model with a Legion standard counts as an additional 6 Models for the purposes of Outside Support in a Challenge.',
    faction: 'legiones astartes'
  },
  'narthecium': {
    id: 'wg11',
    name: 'narthecium',
    desc: 'A narthecium allows Recovery Tests to be made in the Morale Sub-Phase.',
    text: 'If a Unit that includes any Models with a narthecium is not Locked in Combat, before the Controlling Player makes a Characteristic Check for that Unit during the Morale Sub-Phase, they can make a Recovery Test for that Unit. If that Recovery Test is successful, that Player can subtract -2 from the result of the Characteristic Check. Only one Recovery Test can be made for each Unit in this way during each Morale Sub-Phase.',
    faction: 'legiones astartes'
  },
  'nuncio-vox': {
    id: 'wg12',
    name: 'nuncio-vox',
    desc: 'Nuncio-vox allow Units to remove Statuses in the Start Phase.',
    text: 'If a Unit includes one or more Models with a nuncio-vox and there are one or more friendly Models on the Battlefield with the Command Sub-Type, then the Controlling Player may activate the nuncio-vox during the Start Phase of their Turn as the Active Player. When activated, the Controlling Player may make a Check to remove a single Tactical Status from all Models in the Unit that includes the nuncio-vox. This Check is made using the Characteristics of any one friendly Model on the Battlefield with the Command Sub-Type, chosen by the Controlling Player (using Cool, unless attempting to remove Routed, in which case Leadership is used). A nuncio-vox can only be activated once per Turn, and each Friendly Model on the Battlefield with the Command Sub-Type may only be used once per Start Phase as part of this Special Rule.',
    faction: 'legiones astartes'
  },
  'searchlights': {
    id: 'wg13',
    name: 'searchlights',
    desc: 'Searchlights allow attacks to ignore Shrouded Damage Mitigation Rolls.',
    text: 'The Target Number of any Shrouded Damage Mitigation Tests is increased by +1 (to a maximum of 6+) when making Tests as a consequence of wounds, Penetrating Hits or Glancing Hits inflicted by Shooting Attacks made by a Model that has searchlights that has Line of Sight to the Target Unit. Additionally, a Model with searchlights may not make Shrouded Damage Mitigation Tests to negate wounds, Penetrating Hits or Glancing Hits.',
    faction: 'legiones astartes'
  },
  'thermal diffraction field': {
    id: 'wg14',
    name: 'thermal diffraction field',
    desc: 'Thermal diffraction fields reduce the Damage of wounds inflicted by Weapons with specific Traits.',
    text: 'A Model with a thermal diffraction field reduces the Strength of all Hits inflicted on it by Weapons with the Las, Plasma, Melta and Flame Trait by -1. In addition, when any Misfire Groups are generated by a Model with a thermal diffraction field as a result of the Overload (X) Special Rule, any instance of the Breaching (X) Special Rule on those Hits will only take effect on a Wound Test result of 6+, regardless of the value of X.',
    faction: 'legiones astartes'
  },
  'legion vexilla': {
    id: 'wg15',
    name: 'legion vexilla',
    desc: 'A vexilla adds a bonus to Combat Resolution scores.',
    text: 'When resolving a Combat in the Resolution Sub-Phase of the Assault Phase, score 1 Combat Resolution Point for each Unit in that Combat that has any Models that have a vexilla.',
    faction: 'legiones astartes'
  },
  'saturnine teleportation transponder': {
    id: 'wg16',
    name: 'saturnine teleportation transponder',
    desc: '',
    text: 'A Model with a Saturnine teleportation transponder has the Deep Strike Special Rule. While such a Model has joined a Saturnine Terminator Squad Unit in Reserves, Saturnine Terminator and Saturnine Terminator Sergeant Models in that Unit also gain the Deep Strike Special Rule.',
    faction: 'legiones astartes'
  },
  'servo-arm': {
    id: 'wg17',
    name: 'servo-arm',
    desc: 'A Model with a servo-arm repairs additional Wounds or Hull Points when using the Battlesmith (X) Special Rule.',
    text: 'Each time the Controlling Player of a Model with a servo-arm selects the Repair option when activating the Battlesmith (X) Special Rule for that Model, increase the number of Hull Points or Wounds gained by the Target Model by +1.',
    faction: 'legiones astartes'
  },
  'cataphractii terminator armour': {
    id: 'wg18',
    name: 'cataphractii terminator armour',
    desc: '',
    text: 'Legion Cataphractii Terminator armour confers a 2+ Armour Save, a 4+ Invulnerable Save, Slow and Purposeful Special Rule and Heavy Sub-Type. Additionally, set the Move characteristic value to 6.',
    faction: 'legiones astartes'
  },
  'tartaros terminator armour': {
    id: 'wg19',
    name: 'tartaros terminator armour',
    desc: '',
    text: 'Legion Tartaros Terminator armour confers a 2+ Armour Save and a 5+ Invulnerable Save.',
    faction: 'legiones astartes'
  },
  "the pythian scales": {
    id: 'wg',
    name: "the pythian scales",
    desc: ``,
    text: `This Model gains the Fill No Pain(4+) Special Rule against attacks
            made with Weapons with Poisoned(X) Special Rule.`,
    faction: 'legiones astartes',
    unique: true
  },
  "atomantic pavise": {
    id: 'wg',
    name: "atomantic pavise",
    desc: ``,
    text: `Models wholly within 3" of this Model have a 5+ Invulnerable Save
          against Shooting Attacks.`,
    faction: 'legiones astartes',
    unique: true
  },
  "gorgon pattern terminator armour": {
    id: 'wg',
    name: "gorgon pattern terminator armour",
    desc: `Successful Armour Tests and Invulnerable Tests may inflict Tactical
          Statuses on enemy Models.`,
    text: `At the end of Step 4 of the Assault Phase, if any Models with Gorgon
          pattern Terminator armour passed at least one Armour or Invulnerable
          Test against wounds caused by Shooting Attacks in the same Assault
          Phase, the Unit which inflicted those wounds must make a Cool Check.
          If the Check is failed, the Unit gains the Suppressed Status.`,
    faction: 'legiones astartes',
    unique: true
  },
  "icon of the warmaster": {
    id: 'wg',
    name: "icon of the warmaster",
    desc: ``,
    text: `While a Model with an Icon of the Warmaster is part of a Unit which includes any Models with the Line (X) or Vanguard (X) Special Rule, modify the value of X on each of those Models by +1.`,
    faction: 'legiones astartes',
    unique: true
  },
  "icon of allegiance": {
    id: 'wg',
    name: "icon of allegiance",
    desc: ``,
    text: `<p>A Model with an Icon of Allegiance immediately gains 1 Honour Point each
        time:</p>
        
        <ul class="unit__options__ul">
          <li class="unit__options__ul-li">
            That Model is the winner of a Challenge.
          </li>
          <li class="unit__options__ul-li">
            That Model is part of a Combat that included at least one enemy
            Model that does not have the Vehicle Type, of which the Controlling
            Player is declared the winner.
          </li>
        </ul>
        <p>All Honour Points gained by a Model are lost when:</p>
        
        <ul class="unit__options__ul">
          <li class="unit__options__ul-li">
            That Model is Removed as a Casualty.
          </li>
          <li class="unit__options__ul-li">
            That Model is part of a Unit in which any Model gains the Disgraced
            Tactical Status.
          </li>
        </ul>
        <p>During the Decide Victor Step, at the end of the Battle, the Controlling
        Player of any Models with an Icon of Allegiance scores a number of
        Victory Points equal to the amount of Honour Points that any one of
        those Models, selected by the Controlling Player, currently has.</p>`,
    faction: 'legiones astartes',
    unique: true
  },
  "vigil pattern storm shield": {
    id: 'wg',
    name: "vigil pattern storm shield",
    desc: ``,
    text: `A Model with a Vigil pattern storm shield has a 4+ Invulnerable Save. In addition, it gains the Shield Trait and the
Heavy Sub-Type.`,
    faction: 'legiones astartes',
    unique: true
  },
  "the tyrant's regalia": {
    id: 'wg',
    name: "the tyrant's regalia",
    desc: ``,
    text: `A Model with this Special Rule has the Feel No Pain (5+) Special Rule against Wounds suffered when Engaged in a Challenge.`,
    faction: 'legiones astartes',
    unique: true
  },
  "omni-scope": {
    id: 'wg',
    name: "omni-scope",
    desc: ``,
    text: `When a Shooting Attack made by a Unit that includes any Models with an omni-scope inflicts any Hits (excluding Hits from attacks made as Snap Shots), Cover Saving Throws cannot be made against those Hits.`,
    faction: 'legiones astartes',
    unique: true
  },
  "karceri battle shield": {
    id: 'wg',
    name: "karceri battle shield",
    desc: ``,
    text: `When a Model with a Karceri battle shield is allocated an Unsaved Wound, the Damage Characteristic of the Unsaved Wound is halved, rounding up.`,
    faction: 'legiones astartes',
    unique: true
  },

}
export const unit_types = {

  "automata": {
    id: 5,
    name: "automata",
    desc: "The following Rules apply to all Models with the Automata Type:",
    relations: [
      'Models with the Automata Type cannot gain any Tactical Statuses and are considered to automatically pass any Check made to avoid gaining a Tactical Status.However, if a Unit that contains any Models with the Automata Type also includes any Models that do not have the Automata Type, that Check must be made using the Characteristics of one of the Models that does not have the Automata Type and is not automatically passed.',
      'When targeting a Unit that includes any Models with the Automata Type, the effects of the Poisoned (X) Special Rule only trigger on a Wound Test with a result of a \'6\' before modifiers are applied, regardless of the value of X for that variant of the Special Rule.',
      'A Unit that includes one or more Models with the Automata Type may not make Reactions.',
    ]
  },
  "cavalry": {
    id: 2,
    name: "cavalry",
    desc: "The following Rules apply to all Models with the Cavalry Type:",
    relations: ['When making a Fall Back Move for a Model with the Cavalry Type, that Model moves a distance equal to the Initiative Characteristic of the Model plus the total of two Dice rolled and added together.', 'Models with the Cavalry Type may not make use of any Cover Save granted by Terrain Features or Areas of Terrain.'
    ]
  },
  "infantry": {
    id: 1,
    name: "infantry",
    desc: "Infantry is the most basic Type, and is applied to most Models in the game. A Model with the Infantry Type uses the Core Rules without modification, gaining neither benefit nor penalty. Models with the Infantry Type may Embark and Disembark upon Models with the Transport Sub-Type.",
    relations: [
    ]

  },
  "paragon": {
    id: 4,
    name: "paragon",
    desc: "The following Rules apply to all Models with the Paragon Type:",
    relations: [
      'Any Hits inflicted by a Model with the Paragon Type, as part of either Shooting Attacks or in close combat, are allocated by the attacking Model\'s Controlling Player and not the Controlling Player of the Target Unit.',
      ' Models with the Paragon Type may join and leave a Unit that includes Models with the Infantry Type, and Models with the Infantry Type may join and leave a Unit that includes one or more Models with the Paragon Type.',
      'Models with the Paragon Type may Embark and Disembark upon Models with the Transport Sub-Type. ',
      'A Model with the Paragon Type may Issue and Accept Challenges ',
      'The Controlling Player of a Unit that includes one or more Models with the Paragon Type may use the Characteristics of one of those Models to resolve any Characteristic Checks made for that Unit.',
      'In Step 1 of the Resolution Sub-Phase, when deciding how many Models a Player controls in a Combat, a Model with the Paragon Type counts as a number of Models equal to that Model\'s Base Wounds Value.'
    ]

  },
  "walker": {
    id: 3,
    name: "walker",
    desc: "The following rules apply to all models with the Walker type:",
    relations: ['When targeting a unit that includes any models with the walker type, the effects of the poisoned (x) special rule only trigger on a wound test with a result of a \‘6\’ before modifiers are applied, regardless of the value of x for that variant of the special rule.', 'A Model with the Walker Type may attack with all Weapons they have in each Shooting Attack they make, including as part of a Reaction. Note that this does not allow Weapons that do not have the Assault Trait to be used to attack as part of a Volley Attack.', 'In Step 1 of the Resolution Sub-Phase, when deciding how many Models a Player controls in a Combat, a Model with the Walker Type counts as a number of Models equal to that Model\'s Base Wounds Value.'
    ]

  },

  "antigrav": {
    id: 14,
    name: "antigrav",
    desc: "The following Rules apply to all Models with the Antigrav Sub-Type:",
    relations: ['A Unit that includes only Models with the Antigrav Sub-Type may ignore the effects of any and all Terrain it passes over during movement, including passing over Impassable Terrain without penalty or restriction. However, such Units may not begin or end their movement in Impassable Terrain, and if beginning or ending their movement in Dangerous Terrain must take Dangerous Terrain Tests as normal.',
      'A Unit that includes only Models with the Antigrav Sub-Type may ignore both friendly and enemy Models and Units when moving. However, when moving over a friendly Unit all Models with the Antigrav Sub-Type must end their move at least 1" away from all Models that are not part of the same Unit, or if moving over an enemy Unit, must end their move at least 1" away from any enemy Model.'
    ]

  },
  "champion": {
    id: 8,
    name: "champion",
    desc: "The following Rules apply to all Models with the Champion Sub-Type:",
    relations: ['A Model with the Champion Sub-Type may Issue and Accept Challenges']
  },
  "command": {
    id: 7,
    name: "command",
    desc: "The following Rules apply to all Models with the Command Sub-Type:",
    relations: ['A Model with the Command Sub-Type may join and leave Units', 'A Model with the Command Sub-Type may Issue and Accept Challenges', 'The Controlling Player of a Unit that includes one or more Models with the Command Sub-Type may use the Characteristics of one of those Models to resolve any Characteristic Checks made for that Unit.'
    ]
  },
  "flyer": {
    id: 16,
    name: "flyer",
    desc: "The following Rules are exceptions to the Core Rules that always apply to a Model with the Flyer Sub-Type at all times during a Horus Heresy Battle: ",
    relations: ["Whilst on the Battlefield, a Model with the Flyer Sub-Type does not block Line of Sight or the Movement of any Model.",
      "When moving a Model with the Flyer Sub-Type, ignore all Terrain effects and Rules. However, a Model with the Flyer Sub-Type may still not end a move in or on impassable Terrain, a Terrain Feature or a Building.",
      "No Model of any kind may join a Unit that includes a Model with the Flyer Sub-Type.",
      "Models with the Flyer Sub-Type may move through Models with the Vehicle Type, but never inflict Hits on enemy Units they move through and are never eligible to be the Target of the Death or Glory Advanced Reaction.",
      "A Model with the Flyer Sub-Type can never gain any Tactical Statuses and ignores any Rules that would force it to do so.",
      "A Model with the Flyer Sub-Type may never be Locked in Combat or attacked in any way during the Assault Phase and may not be targeted by attacks made using a Melee Weapon.",
      "A Model with the Flyer Sub-Type may never make a Reaction of any kind, unless that Reaction specifically states it may be made by Models with the Flyer Sub-Type – but can be targeted by Reactions.",
      "When a Player is instructed to roll on the Vehicle Damage Table for a Model with this Sub-Type, no roll is made. Instead, the Model loses a single Hull Point."
    ]
  },
  "heavy": {
    id: 9,
    name: "heavy",
    desc: "The following Rules apply to all Models with the Heavy Sub-Type: ",
    relations: ['A Unit that includes only Models with the Heavy Sub-Type gains a bonus of +1 to its Cool Characteristic for Checks to avoid gaining Tactical Statuses.',
      'A Unit that includes Models with the Heavy Sub-Type may not make Rush.',
      'A Unit that includes any Models with the Heavy Sub-Type only uses its Movement Characteristic to determine how far it moves as part of a Set-up Move, not Movement and Initiative totalled.'
    ]
  },
  "light": {
    id: 12,
    name: "light",
    desc: "The following Rules apply to all Models with the Light Sub-Type:",
    relations: ['A Unit that includes only Models with the Light Sub-Type gains a +2 modifier to its Initiative when determining how far that Unit may Rush (this bonus stacks with other bonuses to Rush distance)',
      'A Unit that includes only Models with the Light Sub-Type may make Shooting Attacks after having Rushed, but makes all such shooting Attacks as Snap Shots. Models or Weapons that cannot attack as Snap Shots may not make attacks.',

    ]
  },
  "sergeant": {
    id: 11,
    name: "sergeant",
    desc: "The following Rules apply to all Models with the Sergeant Sub-Type:",
    relations: ['The Controlling Player of a Unit that includes one or more Models with the Sergeant Sub-Type may use the Characteristics of one of those Models to resolve any Characteristic Check made for that Unit.']
  },
  "skirmish": {
    id: 13,
    name: "skirmish",
    desc: "The following Rules apply to all Models with the Skirmish Sub-Type:",
    relations: ['A Unit that includes only Models with the Skirmish Sub-Type has a Unit Coherency range of 3" rather than 2"']

  },
  "transport": {
    id: 15,
    name: "transport",
    desc: "All Models with the Transport Sub-Type are bound by a set of Rules regarding how they operate:",
    relations: ['All Models with the Transport Sub-Type have a Transport Capacity Characteristic, which determines the maximum number of Models that can Embark upon it - one Model per point of Transport Capacity, unless another Rule states otherwise.',
      'Only Models with the Infantry or Paragon Type may Embark or Disembark upon a Model with the Transport Sub-Type.',
      'A Unit may only Embark on a Model with the Transport Sub-Type if all Models in the Embarking Unit have the same Faction as the  Model with the Transport Sub-Type.',
      'A Model with the Transport Sub-Type may only have a single Unit Embarked upon it at any one time (Models with the Specialist Sub-Type, Command Sub-Type or Paragon Type that have joined a Unit are considered part of that Unit and may Embark alongside it)',
      'A Unit may not be partially Embarked on a Model with the Transport Sub-Type - either all Models or no Models in a Unit may be Embarked on a given Model.',
      'If a Model with the Transport Sub-Type has a Unit Embarked upon it, the Embarked Unit is not considered part of the same Unit. The two remain separate Units for all purposes.'
    ]

  },
  "unique": {
    id: 6,
    name: "unique",
    desc: "The following Rules apply to all Models with the Unique Sub-Type:",
    relations: ['An Army may not include more than a single instance of a given Model with this Sub-Type. For example, if Model A and Model B both have the Unique Sub-Type then a single Army could include one of Model A and one of Model B, but no more than one of either Model.', 'A Model with the Unique Sub-Type or a Unit composed entirely of Models with the Unique Sub-Type may not have any options other than those included on its Army List Profile selected for them.'
    ]

  },
  "rapid": {
    id: 17,
    name: "rapid",
    desc: "The following Rules apply to all Models with the Rapid Sub-Type:",
    relations: ['A Model with this Sub-Type may Rush - however the additional distance moved when Rushing is not determined by an Initiative Characteristic, but is always. an additional 6".',
      'When Rushing, a Model with this Sub-Type may make Shooting Attacks, but all Shooting Attacks are made as Snap Shots. A Model with this Sub-Type may not make multiple Shooting Attacks in the same Turn as one where it Rushes.',
      'A Model with both this Sub-Type and the Transport Sub-Type, that the Controlling Player chooses to have Rush in a Turn, may not Disembark any Models in the same Turn (unless required to make an Emergency Disembarkation by another Rule or Special Rule).'
    ]

  },
  "stable": {
    id: 18,
    name: "stable",
    desc: "The following Rules apply to all Models with the Stable Sub-Type:",
    relations: ['A Model with this Sub-Type always gains any benefits for having remained Stationary when making Shooting Attacks, regardless of whether the Model moved in the preceding Movement Phase or the distance moved. This does not count if the Model has Rushed in the preceding Movement Phase.',
      'When making multiple Shooting Attacks in the same Shooting Phase, a Model with this Sub-Type does not have to make all attacks as Snap Shots.'
    ]

  },
  "super-heavy": {
    id: 19,
    name: "super-heavy",
    desc: "The following Rules apply to all Models with the Super-heavy Sub-Type:",
    relations: ['Models with this Sub-Type are not affected in any way by Difficult Terrain or Dangerous Terrain, but may still neither pass through nor end their move in Impassable Terrain.',
      'A Model with this Sub-Type always gains any benefits for having remained Stationary when making Shooting Attacks, regardless of whether the Model moved in the preceding Movement Phase or the distance moved. This does not count if the Model has Rushed in the Preceding Movement Phase.',
      'When making multiple Shooting Attacks in the same Shooting Phase, a Model with this Sub-Type does not have to make all attacks as Snap Shots.',
      'A Model with this Sub-Type may only make Reactions in response to actions undertaken by Units that contain one or more Models with the Paragon Type, Super-heavy Sub-Type, Knight Sub-Type or Titan Sub-Type',
      'When a Player is instructed to roll on the Vehicle Damage Table for a Model with this Sub-Type, no roll is made. Instead, the Model loses a single Hull Point.',
      'If a Model with this Sub-Type has a Transport Capacity, then it may transport any number of Units, so long as the number of Models in the transported Units does not exceed the Vehicle\'s Transport Capacity.'
    ]

  },
  "specialist": {
    id: 18,
    name: "specialist",
    desc: "The following Rules apply to all Models with the Specialist Sub-Type:",
    relations: ['A Model with the Specialist Sub-Type may join and leave Units',
    ]

  },
  "artifica": {
    id: 20,
    name: "artifica",
    desc: "The following Rules apply to all Models with the Artificia Type::",
    relations: ['Models with the Artificia Type cannot gain any Cybertheurgic Statuses, but can gain Tactical Statuses or other kinds of Status effects.',
      "When targeting a Unit that includes any Models with the Artificia Type, the effects of the Poisoned (X) Special Rule only trigger on a Wound Test with a result of a ‘6’ before modifiers are applied, regardless of the value of X for that variant of the Special Rule."
    ]

  },
  "malefic": {
    id: 21,
    name: "malefic",
    desc: "The following Rules apply to all Models with the Malefic Sub-Type: :",
    relations: ['When a Unit composed entirely of Models with the Malefic Sub-Type would gain a Tactical Status of any kind, that Tactical Status is not applied to the Models in the Unit, but instead the Unit suffers D3 automatic wounds with an AP of 2, a Damage of 1 against which no Saving Throws of any kind may be made. Once these wounds are resolved, no Tactical Status is applied to any Model in the Unit. ',
      "Models with the Malefic Sub-Type are not affected by Special Rules that negatively modify their Leadership, Cool, Willpower or Intelligence Characteristics.",
      "No Model that does not also have the Malefic Sub-Type may join or be joined by a Unit that includes one or more Models with the Malefic Sub-Type."
    ]

  },

}
export const special_rules = {
  "unchained conviction": {
    id: "sr",
    name: "unchained conviction",
    mod: "",
    brief: `Models with this Special Rule which would gain the Pinned Tactical Status instead make an immediate Fall Back Move.`,
    text: `Whenever Models in a Unit entirely composed of Models with this Special Rule gain the Pinned Tactical Status, that Unit must immediately make a Fall Back Move. Once this Move has been resolved, all Models in that Unit discard the Pinned Tactical Status.`,
    unique: true,
  },
  "corax shame": {
    id: "sr",
    name: "corax shame",
    mod: "",
    brief: `Models with this Special Rule suffer restrictions when in an Army with Corvus Corax.`,
    text: `A Unit that includes any Models with this Special Rule cannot be joined by a Corvus Corax Model. Additionally, Reserves Rolls made for a Unit that includes any Models with this Special Rule are modified by -1 during any Reserves Sub-Phase in which a friendly Corvus Corax Model was also in Reserves at the start of that Sub-Phase.`,
    unique: true,
  },
  "fatal strike": {
    id: "sr",
    name: "fatal strike",
    mod: "",
    brief: `Fatal Strike temporarily increases the Ballistic Skill Characteristic.`,
    text: `Once per Battle, if a Unit with this Special Rule remained Stationary in the previous Movement Phase, the Unit's Controlling Player may select that Unit to make a Fatal Strike during the Shooting Phase. When making a Fatal Strike, a modifier of +2 is added to the Ballistic Skill Characteristic of all Models with this Special Rule in the selected Unit for the duration of the current Phase.`,
    unique: true,
  },
  "the blood crow": {
    id: "sr",
    name: "the blood crow",
    mod: "",
    brief: `Kaedes Nex always uses his full Ballistic Skill and reduces the effectiveness of an enemy's Damage Mitigation Rolls.`,
    text: `A Model with this Special Rule is never forced to make Shooting Attacks as Snap Shots and may never have its Ballistic Skill modified to less than 6, unless the Target Unit has the Flyer Sub-Type. Additionally, any Shrouded Damage Mitigation Rolls made against wounds inflicted by a Shooting Attack made by a Model with this Special Rule are only successful on a roll of 6+, regardless of the variant of the Shrouded (X) Special Rule the selected Target Model has or any Special Rules to the contrary.`,
    unique: true,
  },
  "the shadowed lord": {
    id: "sr",
    name: "gambit: the shadowed lord",
    mod: "",
    brief: `This Gambit allows Corax to fight as if he had not suffered any Wounds.`,
    text: `When this Gambit is selected, the Controlling Player must select Talionis at the start of the Focus Step and ignores any negative modifiers to the Focus Roll for having a Current Wounds Characteristic lower than its Base Wounds Characteristic. Additionally, if the Player that selected this Gambit is the Active Player and scored at least one successful Hit on the opponent with Talionis during the Strike Step, they may choose to move to the Glory Step after both Players have resolved Step 4 of the current Strike Step, even if they do not have Challenge Advantage.
    `,
    unique: true,
  },
  "sire of the raven guard": {
    id: "sr",
    name: "sire of the raven guard",
    mod: "",
    brief: ``,
    text: `<p>
      If a Model with this Special Rule is part of an Army, then the Controlling Player may apply the following additional Special Rules to all Auxiliary, Apex and Primary Detachments that have the same Faction Trait as the Model with this Special Rule:
    </p>
    <ul class="unit-list">
      <li>
        If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled with Tactical Squad Units and/or Assault Squad Units, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered Prime Slots.
      </li>
    </ul>
    <p>
      Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Models with the Infantry Type and the Raven Guard Trait in the same Army:
    </p>
    <ul class="unit-list">
      <li>
        Until the end of the first Battle Turn of the Battle, all Models in this Army with the Infantry Type and the Raven Guard Trait have the Move Through Cover Special Rule.
      </li>
    </ul>`,
    unique: true,
  },
  "certainty and resolve": {
    id: "sr",
    name: "certainty and resolve",
    mod: "",
    brief: `Models with this Special Rule are never removed as Casualties when they Fall Back into a Battlefield Edge, and
are more likely to have the Routed Tactical Status removed from them in the End Phase.`,
    text: `When any Models in a Unit entirely composed of Models with this Special Rule enter contact with a Battlefield
Edge within the Controlling Player’s Deployment Zone as part of a Fall Back Move, that Unit automatically loses
the Routed Tactical Status and gains the Suppressed Tactical Status. Additionally, when making a Leadership Check
in the Statuses Sub-Phase of the End Phase to remove the Routed Tactical Status from a Unit entirely composed of
Models with this Special Rule, the Controlling Player may roll an additional Dice, discarding the Dice which, once
rolled, has the highest result.`,
    unique: true,
  },
  "the blade of wisdom": {
    id: "sr",
    name: "the blade of wisdom",
    mod: "",
    brief: `Models with this Special Rule gain a bonus when Locked in Combat with Units which have Tactical Statuses.`,
    text: `When Locked in Combat with any Units which contain at least one Model which has any Tactical Statuses, Models in that Combat with this Special Rule gain an additional modifier of +1 to their Attacks Characteristic until the end of the Phase.`,
    unique: true,
  },
  "lords of ultramar": {
    id: "sr",
    name: "lords of ultramar",
    mod: "",
    brief: `Friendly Models in range may use this Model's Characteristics when recovering from a Tactical Status.`,
    text: `During the Statuses Sub-Phase, any friendly Unit that does not include a Model with the Vehicle Type, with one or more Models within 12" of a Model with this Special Rule, that is not itself under the effect of any Tactical Status may use the unmodified Characteristic of the Model with this Special Rule when making Checks to remove Tactical Statuses.`,
    unique: true,
  },
  "calculating swordsman": {
    id: "sr",
    name: "gambit: calculating swordsman",
    mod: "",
    brief: ``,
    text: `If this Gambit is selected, this Model's Controlling Player gains a positive modifier to the Focus Roll corresponding to the number of the current Battle Turn, to a maximum of +4.`,
    unique: true,
  },
  "sire of the ultramarines": {
    id: "sr",
    name: "sire of the ultramarines",
    mod: "",
    brief: ``,
    text: `<p>
      If a Model with this Special Rule is part of an Army, then the Controlling Player may apply the following additional Special Rules to all Auxiliary, Apex and Primary Detachments that have the same Faction Trait as the Model with this Special Rule:
    </p>
    <ul class="unit-list">
      <li>
        If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled, including at least two Assault Squad Units and at least two Tactical Squad Units, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered Prime Slots.
      </li>
    </ul>
    <p>
      Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Models with the Infantry Type and the Ultramarines Trait in the same Army:
    </p>
    <ul class="unit-list">
      <li>
        Until the end of the first Battle Turn of the Battle all Models in this Army with the Infantry Type and the Ultramarines Trait may Hold, Claim and Contest Objectives even if they are under the effects of a Tactical Status.
      </li>
    </ul>`,
    unique: true,
  },
  "bearers of the blood hand": {
    id: "sr",
    name: "bearers of the blood hand",
    mod: "",
    brief: ``,
    text: `When resolving a Combat in the Resolution Sub-Phase of the Assault Phase, the Controlling Player scores 1 Combat
Resolution Point for each Unit that includes any Models with this Special Rule.`,
    unique: true,
  },
  "ravening madmen": {
    id: "sr",
    name: "ravening madmen",
    mod: "",
    brief: `Red Butchers count as having a Weapon Skill Characteristic of 3 when their opponent makes Hit Tests.`,
    text: `Any Hit Tests made in the Assault Phase that target a Unit that includes one or more Models with this Special Rule always count the majority Weapon Skill Characteristic of the Target Unit as 3, regardless of the actual Weapon Skill Characteristic of the Models in that Unit. Additionally, a Unit that includes any Models with this Special Rule may only be joined by Models with this Special Rule.`,
    unique: true,
  },
  "level-headed": {
    id: "sr",
    name: "level-headed",
    mod: "",
    brief: `A Unit that Lotara Sarrin has joined may use her Characteristics to remove Tactical Statuses.`,
    text: `If a Unit includes a Model with this Special Rule, during the Start Phase of their Turn as the Active Player the Controlling Player may make a Check to remove a single Status from all Models in the Unit that includes the Model with this Special Rule. This Check is made using the Characteristics of the Model with this Special Rule (using Cool, unless attempting to remove Routed, in which case Leadership is used).`,
    unique: true,
  },
  "lord of corruption": {
    id: "sr",
    name: "lord of corruption",
    mod: "",
    brief: ``,
    text: `Angron Transfigured cannot be included in the same Army as Angron`,
    unique: true,
  },
  "sire of the world eaters": {
    id: "sr",
    name: "sire of the world eaters",
    mod: "",
    brief: ``,
    text: `<p>
      If a Model with this Special Rule is part of an Army, then the Controlling
      Player may apply the following additional Special Rules to all Auxiliary,
      Apex and Primary Detachments that have the same Faction Trait as the Model
      with this Special Rule:
    </p>
    <ul class="unit-list">
      <li>
        If four or more Troops Battlefield Role Slots in the Primary Detachment
        of this Army are filled with Assault Squad and/or Despoiler Squad Units,
        then all Force Organisation Slots with the Troops Battlefield Role in
        the Primary Detachment are considered Prime Slots.
      </li>
    </ul>
    <p>
      Furthermore, if a Model with this Special Rule is part of an Army, then
      the following Special Rules are granted to all Models with the Infantry or
      Paragon Type and the World Eaters Trait in the same Army:
    </p>
    <ul class="unit-list">
      <li>
        Until the end of the first Battle Turn of the Battle, all Models in this
        Army with the Infantry or Paragon Type and the World Eaters Trait have
        the Fast (2) Special Rule.
      </li>
    </ul>`,
    unique: true,
  },
  "lord of the red sands": {
    id: "sr",
    name: "lord of the red sands",
    mod: "",
    brief: `Angron may fight successive Challenges in a Turn.`,
    text: `At the start of the Glory Step of a Challenge involving a Model with this Special Rule where they are the Challenger, before resolving the Glory Step, the Controlling Player of the Model with this Special Rule can choose to immediately return to the Declare Challenge Step and declare another Challenge. Enemy Models which have already fought in a Challenge during this Sub-Phase are not eligible to take part in this additional Challenge. When the Glory Step for this Challenge Sub-Phase is resolved, Players gain Combat Resolution Points for all of the Challenges resolved during this Sub-Phase.`,
    unique: true,
  },
  "battlefield coordinators": {
    id: "sr",
    name: "battlefield coordinators",
    mod: "",
    brief: `This Special Rule allows the Controlling Player to reduce the Reaction Point cost of a Reaction once per Turn.`,
    text: `Once per Turn, if a Unit that contains any Models with this Special Rule is within 18" of a Unit that makes a Reaction, the Controlling Player can make an Intelligence Check for this Unit. If a Model from the Unit with this Special Rule has Line of Sight to a Model in the Reacting Unit, the Controlling Player can modify the result of that Check by -1. If the Check is successful, that Reaction costs one fewer Reaction Points (to a minimum of 0).`,
    unique: true,
  },
  "sworn loyality": {
    id: "sr",
    name: "sworn loyality",
    mod: "",
    brief: ``,
    text: `When included in an Army in which a Sevatar Unit has been selected as part of the Primary Detachment and is on
the Battlefield, when the Controlling Player of a Night Lords Atramentar Flay-clade Unit makes a Leadership Check
for that Unit, they may always use Sevatar’s Base Leadership Characteristic instead.`,
    unique: true,
  },
  "cloaked in murder": {
    id: "sr",
    name: "cloaked in murder",
    mod: "",
    brief: ``,
    text: `When the Controlling Player declares an enemy Unit that is already Locked in Combat as the Target of a Charge
made by a Unit made up entirely of Models with this Special Rule, Models with this Special Rule modify their Set-up
Move Distance by +1", to a maximum of 6" until that Charge Move is resolved.`,
    unique: true,
  },
  "unscrupulous murderers": {
    id: "sr",
    name: "unscrupulous murderers",
    mod: "",
    brief: `This Special Rule allows a unique aftermath option to be selected in which every Inductii has a chance to inflict
a Precision Hit.`,
    text: `<p>A Unit which contains any Models with this Special Rule may have the Art of Murder aftermath option selected for
it in Step 4 of the Resolution Sub-Phase of the Assault Phase for any Combat in which that Unit has won or drawn
the Combat.</p>
<p><span class="bold">The Art of Murder</span> - The Controlling Player rolls a single Dice for every Model in this Unit which has the
Unscrupulous Murderers Special Rule. For every unmodified result of ‘6’, the Controlling Player may allocate a
single wound to any enemy Model of their choosing from the selected Combat which has had the Hold, Disengage
or Fall Back aftermath option selected for its Unit. These wounds have an AP of ‘–’ and a Damage of 1, and are
resolved immediately.</p>`,
    unique: true,
  },
  "dark dreams": {
    id: "sr",
    name: "dark dreams",
    mod: "",
    brief: ``,
    text: `<p>In this Model's Controlling Player's Effects Sub-Phase, this Model's Controlling Player can roll one Dice and consult the following table:</p>
    <ul class="unit-list">
      <li>1: Until the start of the Controlling Player's next Effects Sub-Phase, this Model loses the Command Sub- Type and gains the Specialist Sub-Type.</li>
      <li>2-4: No effect.</li>
      <li>5-6: Until the start of the Controlling Player's next Effects Sub-Phase, this Model gains the Feel No Pain (5+) Special Rule.</li>
    </ul>`,
    unique: true,
  },
  "dirty fighter": {
    id: "sr",
    name: "gambit: dirty fighter",
    mod: "",
    brief: ``,
    text: `This Gambit can only be selected during the first Face-Off Step of a Challenge involving this Model. If this Gambit is selected, at the start of the Focus Step, this Model's Controlling Player can resolve steps 1 to 4 of the Strike Step once as if this Model had an Attacks Characteristic of 1. The Focus Step is then resolved as normal.`,
    unique: true,
  },
  "sire of the night lords": {
    id: "sr",
    name: "sire of the night lords",
    mod: "",
    brief: ``,
    text: ` <p>
      If a Model with this Special Rule is part of an Army, then the Controlling
      Player may apply the following additional Special Rules to all Auxiliary,
      Apex and Primary Detachments that have the same Faction Trait as the Model
      with this Special Rule:
    </p>
    <ul class="unit-list">
      <li>
        If four or more Troops Battlefield Role Slots in the Primary Detachment
        of this Army are filled with Terror Squad Units and/or Assault Squad
        Units, then all Force Organisation Slots with the Troops Battlefield
        Role in the Primary Detachment are considered Prime Slots.
      </li>
    </ul>
    <p>
      Furthermore, if a Model with this Special Rule is part of an Army, then
      the following Special Rules are granted to all Models in Terror Squad
      Units in the same Army:
    </p>
    <ul class="unit-list">
      <li>
        All Models in Terror Squad Units in this Army gain the Infiltrate (12)
        Special Rule.
      </li>
    </ul>`,
    unique: true,
  },
  "a death long forseen": {
    id: "sr",
    name: "gambit: a death long forseen",
    mod: "",
    brief: ``,
    text: `<div>
    <p>When selecting Gambits for a Model with this Special Rule, its Controlling Player can roll one Dice. On a 5+, this Gambit is available to the Controlling Player to be selected for that Model.</p>
      <p>
        When this Gambit is selected, the Controlling Player can make one
        Willpower Check for each of the following benefits. If the Willpower
        Check is successful, the corresponding effect applies until the start of
        the next Face-Off Step:
      </p>
      <ul class="unit-list">
        <li>
          This Model has the Feel No Pain (5+) Special Rule.
        </li>
        <li>Modify this Model's Attacks Characteristic by +1.</li>
        <li>
          This Model's Mercy and Forgiveness have an Initiative Modifier
          Characteristic of '+2'.
        </li>
      </ul>
    </div>`,
    unique: true,
  },
  "aetos praetoria": {
    id: "sr",
    name: "aetos praetoria",
    mod: "",
    brief: ``,
    text: `The Ætos Dios may only be included in an Army that also includes Rogal Dorn. If the Ætos Dios is included in an
army in this way, Rogal Dorn must begin the battle Embarked upon it.`,
    unique: true,
  },

  "whispers of isstvan": {
    id: "sr",
    name: "whispers of isstvan",
    mod: "",
    brief: ``,
    text: `Cassian Dracos Reborn has the Cybertheurgist Trait and may use the Scrap-code Infection Cybertheurgic Rite only (see Liber Mechanicum). When this Cybertheurgic Rite is invoked for Cassian Dracos, Cassian Dracos is counted as having the Heterodox Trait even though he does not have the Traitor Trait.`,
    unique: true,
  },
  "drakenscale armour": {
    id: "sr",
    name: "drakenscale armour",
    mod: "",
    brief: ``,
    text: `Wounds with the Flame, Plasma, Melta or Volkite Trait allocated to a Model with Drakenscale have their Damage Characteristic set to 1.`,
    unique: true,
  },
  "wargear of heroes": {
    id: "sr",
    name: "wargear of heroes",
    mod: "",
    brief: `Models with this Special Rule which inflict any unsaved wounds confer a bonus to Combat Resolution scores.`,
    text: `When resolving a Combat in the Resolution Sub-Phase of the Assault Phase, the Controlling Player of any Models
with this Special Rule which have inflicted at least one unsaved wound in that Combat in the same Turn scores 1
additional Combat Resolution Point`,
    unique: true,
  },
  "creed of flame": {
    id: "sr",
    name: "creed of flame",
    mod: "",
    brief: ``,
    text: `Any weapon with the Flame Trait that a Model with this Special Rule has also gains the Assault Trait, and ignores the
effects of the Limited (X) Special Rule when making Volley Attacks.`,
    unique: true,
  },
  "sire of the salamanders": {
    id: "sr",
    name: "sire of the salamanders",
    mod: "",
    brief: ``,
    text: `<p>
        If a Model with this Special Rule is part of an Army, then the Controlling Player may apply the following additional Special Rules to all Auxiliary, Apex and Primary Detachments that have the same Faction Trait as the Model with this Special Rule:
      </p>
      <ul class="unit-list">
        <li>
          If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled and at least one Model in each Unit filling those Slots has been upgraded with a Forge-crafted Weapon, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered Prime Slots.
        </li>
      </ul>
      <p>
        Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Models with the Salamanders Trait in the same Army:
      </p>
      <ul class="unit-list">
        <li>
          Until the end of the first Battle Turn of the Battle, the Controlling Player may ignore all negative modifiers to the Leadership, Willpower, Cool and Intelligence Characteristics of all Models with this Special Rule.
        </li>
      </ul>`,
    unique: true,
  },
  "the undying fire": {
    id: "sr",
    name: "gambit: the undying fire",
    mod: "",
    brief: `Vulkan may regenerate lost Wounds when this Gambit is selected.`,
    text: `<p>While a Model with this Special Rule is in a Challenge, its Controlling Player can select the following Gambit:</p>
    <p><span class="bold">The Undying Fire:</span>When this Gambit is selected, this Model's Controlling Player may not apply any positive modifiers to the Focus Roll. However, if this Model is not reduced to 0 Wounds in Step 4 of the Strike Step, this Model increases their Wounds Characteristic by +D3, to a maximum of their Base Wounds Characteristic, before Player return to Step 2 of the Challenge procedure or they move to the Glory Step. Note that any Wounds regained due to this Special Rule do not alter the amount of wounds inflicted by the Opponent for the purposes of Combat Resolution.</p>`,
    unique: true,
  },
  "marked for death": {
    id: "sr",
    name: "marked for death",
    mod: "(x)",
    brief: `The Controlling Player of any Units with this Special Rule may select an enemy Unit to score extra Victory Points from.`,
    text: `At the end of the Declare Mission Reserves Step the Controlling Player of any Units with this Special Rule may select one Unit from the Opposing Player’s Army, this Unit is the ‘Marked’ Unit. Once per Battle, the Controlling Player scores additional Victory Points equal to the value of X if a Friendly Unit with the Marked for Death (X) Special Rule scores Victory Points as a result of the Vanguard (X) Special Rule when the enemy Unit that fulfils the conditions of the Vanguard (X) Special Rule is the Marked Unit.`,
    unique: true,
  },
  "vengeful rage": {
    id: "sr",
    name: "vengeful rage",
    mod: "",
    brief: ``,
    text: `Whilst a Model with this Special Rule has a Current Wounds Characteristic of 4 or less, then in each of the Controlling Player’s Shooting Phases it must have a Shooting Attack made for it targeting the nearest Unit that has a Line of Sight to the Model, regardless of whether that Unit is an enemy or friendly Unit. Such a Shooting Attack must use all Weapons that are within range of at least one Model in the Target Unit.`,
    unique: true,
  },
  "order of the broken claws": {
    id: "sr",
    name: "order of the broken claws",
    mod: "",
    brief: `This Special Rule provides bonuses when Models with it are Locked in Combat with larger enemies.`,
    text: `<p>
      Whilst a Model with this Special Rule is part of a Unit that is Locked in
      Combat with an enemy Unit that includes one or more Models with the Walker
      Type, Automata Type or Malefic Sub-Type:
    </p>
    <ul class="unit-list">
      <li>
        That Model with this Special Rule has its Toughness Characteristic
        modified by +1.
      </li>
      <li>
        When making a Characteristic Check that uses the Leadership, Cool,
        Willpower or Intelligence Characteristics of that Model with this
        Special Rule, the Controlling Player may ignore negative modifiers to
        that Characteristic.
      </li>
    </ul>`,
    unique: true,
  },
  "order exemplars": {
    id: "sr",
    name: "order exemplars",
    mod: "",
    brief: ``,
    text: `<p>
      When a Unit that includes any Models with this Special Rule is selected as
      part of a Detachment, during Army selection, a single option from the
      Orders of the Hekatonystika presented below must be selected for all
      Models in that Unit.
    </p>
    <h4>Orders of the Hekatonystika</h4>
    <ul class="unit-list">
      <li>
        <span class="bold">Augurs of Weakness:</span> When making attacks
        targeting a Unit that includes one or more Models with the Vehicle Type,
        Models with the Order Exemplars Special Rule gain the Armourbane Special
        Rule.
      </li>
      <li>
        <span class="bold">Icons of Resolve:</span> When part of a Unit that is
        successfully Charged by an enemy Unit, Models with the Order Exemplars
        Special Rule set their Leadership Characteristic to 10 for the duration
        of the current Assault Phase.
      </li>
      <li><span class="bold">Slayers of Kings:</span> Whilst part of a Unit that is Locked in Combat with an enemy Unit that includes at least one Model with a Weapon Skill Characteristic of 6 or higher, the Attacks Characteristic of Models with the Order Exemplars Special Rule may be set to 1. If this option is used then the Terranic greatswords those Models have gain the Critical Hit (6+) Special Rule until the Combat ends.</li>
      <li><span class="bold">Hunters of Beasts: </span>Whilst part of a Unit that is Locked in Combat with an enemy Unit that includes one or more Models with a Toughness Characteristic of 6 or higher, the Damage Characteristic of Wounds caused by a Model with this Special Rule is modified by +1.</li>
      <li><span class="bold">Reapers of Hosts: </span>Whilst part of a Unit that is Locked in Combat with one or more enemy Units that outnumbers it, then all Models in that Unit with the Order Exemplars Special Rule modify their Attacks Characteristic by +1.</li>
      <li><span class="bold">Breakers of Witches: </span>Whilst part of a Unit that is Locked in Combat with an enemy Unit that has one or more Models with the Malefic Sub-Type or Psyker Trait, Hit and Wound Tests made for Models with the Order Exemplars Special Rule in that Combat are modified by +1.</li>
    </ul>`,
    unique: true,
  },
  "companions": {
    id: "sr",
    name: "companions",
    mod: "",
    brief: ``,
    text: `While a Model with both the Dark Angels Trait and either the Paragon Type or Command Sub-Type is part of a Unit that includes any Models with this Special Rule, Precision Wounds caused as part of a Shooting Attack cannot be allocated to that Model.`,
    unique: true,
  },
  "ancient of war": {
    id: "sr",
    name: "ancient of war",
    mod: "",
    brief: ``,
    text: `While Marduk Sedras is part of a Unit that includes only Models with the Dark Angels Trait, all Models in that Unit gain the Hatred (Traitor) Special Rule.`,
    unique: true,
  },
  "the lion's choler": {
    id: "sr",
    name: "gambit: the lion's choler",
    mod: "",
    brief: `The Lion gains a bonus to Focus Rolls when he is wounded.`,
    text: `<p>While a Model with this Special Rule is engaged in a Challenge, if it has 2 or fewer Wounds remaining, its Controlling Player can select the following Gambit:</p>
    <p><span class="bold">The Lion's Choler:</span> If this Gambit is selected, the Model for which this Gambit has been selected's Controlling Player adds a +2 Modifier to the Focus Roll, and does not suffer a -1 modifier for each point of difference between this Model's Base Wounds Characteristic and its current Wounds Characteristic.</p>`,
    unique: true,
  },
  "sire of the dark angels": {
    id: "sr",
    name: "sire of the dark angels",
    mod: "",
    brief: ``,
    text: `<p>
        If a Model with this Special Rule is part of an Army, then the Controlling Player may apply the following additional Special Rules to all Auxiliary, Apex and Primary Detachments that have the same Faction Trait as the Model with this Special Rule:
      </p>
      <ul class="unit-list">
        <li>
          If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled and these Slots contain at least one Tactical Squad Unit, at least one Assault Squad Unit and at least one Breacher Squad Unit, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered
Prime Slots.
        </li>
      </ul>
      <p>
        Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Outrider Squadron Units and all Scimitar Jetbike Squadron Units in the same Army:
      </p>
      <ul class="unit-list">
        <li>
          When the Controlling Player of a Model with this Special Rule makes a Reserve Roll for a Outrider Squadron Unit which only includes Models with the Dark Angels Trait or a Scimitar Jetbike Squadron Unit which only includes Models with the Dark Angels Trait, that Roll is modified by +1.
        </li>
      </ul>`,
    unique: true,
  },
  "ferrum occularis": {
    id: "sr",
    name: "ferrum occularis",
    mod: "",
    brief: ``,
    text: `Cover Saves may not be taken against unsaved wounds caused by a Shooting Attack made by a Model with this
Special Rule, if the Model with this Special Rule was part of a Unit that remained Stationary in its Controlling
Player’s previous Movement Phase.`,
    unique: true,
  },
  "those once honoured": {
    id: "sr",
    name: "those once honoured",
    mod: "",
    brief: ``,
    text: `A Unit that includes any Models with this Special Rule can never be joined by a Perturabo Model.`,
    unique: true,
  },
  "shield of the iron tyrant": {
    id: "sr",
    name: "shield of the iron tyrant",
    mod: "",
    brief: `Perturabo cannot be targeted by Precision attacks when he has joined a Unit with this Special Rule.`,
    text: `Only a Model with the Iron Warriors Trait and the Paragon Type or Command Sub-Type can join a Unit that includes Models with this Special Rule. While a Model with the Iron Warriors Trait and the Paragon Type is part of a Unit that includes any Models with this Special Rule, Precision wounds caused as part of a Shooting Attack cannot be allocated to that Model.`,
    unique: true,
  },
  "sire of the iron warriors": {
    id: "sr",
    name: "sire of the iron warriors",
    mod: "",
    brief: ``,
    text: `<p>
        If a Model with this Special Rule is part of an Army, then the
        Controlling Player may apply the following additional Special Rules to
        all Auxiliary, Apex and Primary Detachments that have the same Faction
        Trait as the Model with this Special Rule:
      </p>
      <ul class="unit-list">
        <li>
          If four or more Troops Battlefield Role Slots in the Primary
          Detachment of this Army are filled with Tactical Squad and/or Breacher
          Squad Units, then all Force Organisation Slots with the Troops
          Battlefield Role in the Primary Detachment are considered Prime Slots.
        </li>
      </ul>
      <p>
        Furthermore, if a Model with this Special Rule is part of an Army, then
        the following Special Rules are granted to all Models with the Infantry
        Type and the Iron Warriors Trait in the same Army:
      </p>
      <ul class="unit-list">
        <li>
          Until the end of the first Battle Turn of the Battle, all Models in
          this Army with the Infantry Type and the Iron Warriors Trait have the
          Expendable(1) Special Rule. If they already have the Expendable(X)
          Special Rule, increase its value by 1.
        </li>
      </ul>`,
    unique: true,
  },

  "the breaker": {
    id: "sr",
    name: "gambit: the breaker",
    mod: "",
    brief: `This Reaction allows a friendly Unit to make a Shooting Attack
        targeting a Model that Perturabo is in a Challenge with.`,
    text: `This Gambit can only be selected
        during the first Face-Off Step of a Challenge. If this Gambit is
        selected, this Model does not make attacks during the subsequent Strike
        Step. Instead, this Model's Controlling Player can select a single
        friendly Unit composed of Models with the Iron Warriors Trait that is
        within 12" of any enemy Model in that Combat and not Locked in Combat
        and make a Shooting Attack with that Unit. All such attacks are resolved
        as Snap Shots with the exception that Weapons with the Blast (X) Special
        Rule or the Template Range Characteristic may not be used, and wounds
        from this Shooting Attack can only be allocated to the enemy Model in
        the Challenge.`,
    unique: true,
  },
  "supporting fire": {
    id: "sr",
    name: "supporting fire",
    mod: "",
    brief: ``,
    text: `In the Controlling Player’s Shooting Phase, Shooting Attacks made by Models with this Special Rule which are part of a Unit that remained Stationary in the Controlling Player’s previous Movement Phase gain the Pinning (0) Special Rule.`,
    unique: true,
  },
  "phalanx formation": {
    id: "sr",
    name: "phalanx formation",
    mod: "",
    brief: `Phalanx Warders may make the Shieldwall! Reaction without expending a Reaction Allohnent point, but suffer limitations for doing so.`,
    text: `A Unit that has any Models with this Special Rule may make the Shieldwall! Advanced Reaction without expending a point of the Controlling Player's Reaction Allotment. If a Reaction Point is not expended, the Reacting Unit gains the Pinned Status after the Reaction is resolved.`,
    unique: true,
  },

  'armourbane': {
    id: "sr1",
    name: "Armourbane",
    mod: "",
    brief: "A Weapon with the Armourbane Special Rule counts Glancing Hits as Penetrating Hits.",
    text: "When making Armour Penetration Tests for an attack with this Special Rule, a result that is equal to, or greater than, the target Armour Value inflicts a Penetrating Hit. A Weapon with this Special Rule can never inflict a Glancing Hit, and any Rule that would force them to do so instead inflicts a Penetrating Hit."
  },
  'assault vehicle': {
    id: "sr2",
    name: "assault vehicle",
    mod: "",
    brief: "A Vehicle with this Special Rule allows Models to Disembark and Charge without penalty.",
    text: "A Unit that is Disembarked from another Model that has the Assault Vehicle Special Rule may have a Charge declared for it in the Charge Sub-Phase of the same Player Turn without being forced to make a Disordered Charge."
  },
  'auto-repair': {
    id: "sr3",
    name: "auto-repair",
    mod: "(X)",
    brief: "A Model with this Special Rule has a bonus to Repair Tests to remove Statuses.",
    text: "If the Active Player makes a Repair Test in the Statuses Sub-Phase of the End Phase for a Model with the Vehicle Type with this Special Rule, they ignore the usual Target Number of 6. Instead, the value of X attached to the variant of this Special Rule is used as the Target Number for that Repair Test. For example, a Model with the Auto-repair (4+) Special Rule would pass any Repair Tests made for it on the result of a 4 or higher."
  },
  'barrage': {
    id: "sr4",
    name: "barrage",
    mod: "(X)",
    brief: "A Weapon with this Special Rule may be used to attack Target Units out of Line of Sight.",
    text: `If a Unit for which a Shooting Attack is made includes any Models with one or more Weapons with this Special Rule, then in Step 2 of the Shooting Attack process they may ignore the restriction on requiring Line of Sight to a Target Unit. If a Player uses this Special Rule to declare a Shooting Attack on a Unit that the attacking Unit cannot draw a Line of Sight to, then in Step 3 of the Shooting Attack process that Player may only declare attacks with Weapons that have this Special Rule.<br><br>If a Weapon with this Special Rule and the Blast (X) Special Rule is used to attack a Unit without Line of Sight to that Unit, then no Hit Test is made and an Indirect Scatter Roll must be made for the Blast Marker placed as part of the attack. If such a Weapon makes more than a single attack then a separate Indirect Scatter Roll is made for each attack. When making an Indirect Scatter Roll for such an attack, the number of Dice rolled alongside the Scatter Dice is determined by the value of X for the Weapon with the Barrage (X) Special Rule, the value of these Dice is then totalled to find the distance the attack Scatters.`
  },
  'battlesmith': {
    id: "sr5",
    name: "battlesmith",
    mod: "(X)",
    brief: "A Model with the Battlesmith (X) Special Rule can repair Vehicles, Automata and other mechanical Units.",
    text: `In the Controlling Player's Movement Phase as the Active Player, when a Model with the Battlesmith (X) Special Rule has been selected, but either before or after it has been moved, the Controlling Player of that Model may activate this Special Rule. Once activated, the Controlling Player of the Model with the Battlesmith (X) Special Rule, hereafter referred to as the 'Acting Model', must select one friendly Model within 6" of the Acting Model.The Model selected must have the Vehicle, Automata or Walker Type and is hereafter referred to as the "Target Model'. Once a Target Model has been selected, the Player controlling the Acting Model must make an Intelligence Check for the Acting Model.<br><br>
    If the Check is failed there is no further effect, but if the Check is passed then the Player controlling the Acting Model may select one of the following options:
    <ul class="unit-list"><li><b>Repair</b> - The Target Model gains a number of Wounds or Hull Points equal to the value of X in the Battlesmith (X) Special Rule variant possessed by the Acting Model. This cannot increase the Target Model's Wounds or Hull Points above its Base Value.</li>
    <li><b>Restore</b> - A number of Statuses equal to the value of X in the Battlesmith (X) Special Rule variant possessed by the Acting Model may be removed from the Target Model.</li></ul>
    Activating the Battlesmith (X) Special Rule does not limit the Acting Model or the Target Model when moving or attacking in the same Turn.`
  },
  'blast': {
    id: "sr6",
    name: "blast",
    mod: "(X)",
    brief: "Attacks made with the Blast (X) Special Rule use a Blast Marker to determine how many Hits are caused.",
    text: `When making attacks with a Weapon that has the Blast (X) Special Rule, before any Hit Tests are made, a Blast Marker must first be placed to determine how many Hits may be inflicted by the attack. The Player making the attack must place the Blast Marker indicated in brackets as part of the Special Rule so that the hole in the middle is entirely over the Base of any one Model in the Target Unit. Once the Blast Marker has been placed, the Player making the attack must make a Hit Test for the attack, and each Model from the Target Unit that is fully or partially under the Blast Marker will suffer 1 Hit if the Hit Test is successful.<br><br>
    If the Hit Test is unsuccessful then no Hits are inflicted and the Player making the attack must make a Scatter Roll for the Blast Marker (see the Rules for Scatter). Once a Scatter Roll has been made for the Blast Marker and it has been moved, one Hit is inflicted on a Unit for each Model from that Unit that is wholly or partially covered by the Blast Marker.<br><br>Hits can be scored on both friendly and enemy Units by attacks using the Blast (X) Special Rule. Hits inflicted by Weapons with the Blast (X) Special Rule are allocated in the same manner as other Hits, regardless of which actual Models were under the Blast Marker and the Blast Marker may not be used to inflict Hits on specific Models.<br><br>If a Fire Group includes multiple attacks made with the Blast (X) Special Rule, do not place multiple Blast Markers. A single Blast Marker is placed using the Rules detailed above, and a Hit Test is made for each attack in that Fire Group. For each successful Hit Test, one Hit is inflicted for each Model from the target Unit that is fully or partially under the Blast Marker. If any Hit Tests are unsuccessful then, after any Hits made by successful Hit Tests are
counted, a single Scatter Roll is made for the Blast Marker, regardless of the total number of unsuccessful Hit Tests. For each Hit Test that was unsuccessful, one Hit is inflicted on a Unit for each Model from that Unit that is wholly or partially covered by the Blast Marker after the Scatter Roll has been resolved.<br><br>
<b>HITS ON OTHER UNITS</b><br>
If any Models from Units other than the Target Unit are fully or partially covered by the Blast Marker, then a new Fire Group must be created for those Hits and set to one side. Continue resolving the Shooting Attack on the original Target Unit, and once that Shooting Attack has been completely resolved begin a new Shooting Attack to resolve those additional Fire Groups generated for Units other than the original Target Unit.`
  },
  'breaching': {
    id: "sr7",
    name: "breaching",
    mod: "(X)",
    brief: "With a Weapon that has the Breaching (X) Special Rule there is a chance that a Wound Test may result in the Wound ignoring Armour Saves.",
    text: "When any Wound Test is made for an attack with the Breaching (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Breaching (X) Special Rule, then if a wound is inflicted by that Wound Test, that wound becomes a 'Breaching Wound.<br><br>A Breaching Wound is always treated as having an AP Characteristic of 2 regardless of the Characteristics of the Weapon used to make the attack."
  },
  'bulky': {
    id: "sr8",
    name: "bulky",
    mod: "(X)",
    brief: "Models with the Bulky (X) Special Rule take up more space on Transport Models.",
    text: "A Model with the Bulky (X) Special Rule does not use up 1 Point of Transport Capacity when it Embarks on a Model with the Transport Sub-Type. Instead it uses up a number of points of Transport Capacity equal to the value of X attached to the variant of the Bulky (X) possessed by that Model."
  },
  'critical hit': {
    id: "sr9",
    name: "critical hit",
    mod: "(X)",
    brief: "Attacks made with the Critical Hit (X) Special Rule have a chance to automatically cause a wound and inflict 1 extra point of Damage.",
    text: "When any Hit Test is made for an attack with the Critical Hit (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Critical Hit (X) Special Rule, then if a Hit is inflicted by that Hit Test, that Hit becomes a 'Critical Hit'<br><br>A Critical Hit automatically inflicts a wound without any Dice being rolled, counting as the roll of a '6' for any variable Special Rules that might be triggered by a Wound Test, and increases the Damage Characteristic of the Hit by +1."
  },
  'deep strike': {
    id: "sr10",
    name: "deep strike",
    mod: "",
    brief: "The Deep Strike Special Rule allows a Unit to enter play anywhere on the Battlefield.",
    text: `A Unit that includes only Models with the Deep Strike Special Rule that enters play from Reserves may make a Deep Strike instead of deploying as described in the Reserves Rules. No more than one Unit may attempt at Deep Strike in a given Player Turn. The Unit attempting a Deep Strike may have another Unit without the Deep Strike Special Rule Embarked upon it if the Deep Striking Unit includes Models with the Transport Sub-Type (note that some Missions may allow more Units to attempt a Deep Strike in the same Player Turn. This will be specifically noted in the Mission Special Rules section of that Mission). Note that in Missions where the Reserves Mission Special Rule is not in use, the Deep Strike Special Rule has no effect. Furthermore, Units may not make use of the Deep Strike Special Rule during the first Battle Turn, even if they enter play from Reserves.<br><br>To perform a Deep Strike, the Active Player must declare an Eligible Unit that has entered play from Reserves in the Reserves Sub-Phase as the Deep Striking Unit. The Active Player must then select one Model from that Unit and place it anywhere on the Battlefield. This Model must be placed at least 1" away from any enemy Model, Battlefield Edge or piece of Impassable Terrain. Once this first Model has been placed, the remaining Models in the Unit must be placed within Unit Coherency with at least one other Model in the same Unit and within 6" of the first Model placed. No Models may be placed within 1" of an enemy Model, any Battlefield Edge or a piece of Impassable Terrain. Any Models that cannot be placed using these Rules must be Removed as a Casualty immediately. This
deployment must take place during the Reserves Sub- Phase, and a Unit that deploys as a Deep Strike may not move in the Move Sub-Phase of the same Player Turn or have a Charge declared for it in the Charge Sub-Phase of the same Player Turn, but may make Shooting Attacks as normal. A Unit that is Embarked on a Model that is
deployed as part of a Deep Strike may Disembark during the Move Sub-Phase of the same Player Turn, but may not make any move other than the move made to Disembark and may not have a Charge declared for it in the Charge Sub-Phase of the same Player Turn.<br><br>
Enemy Units may declare Intercept Reactions against a Unit deployed as part of a Deep Strike, but not Reposition Reactions.`
  },
  'deflagrate': {
    id: "sr11",
    name: "deflagrate",
    mod: "(X)",
    brief: "Unsaved Wounds inflicted by attacks with the Deflagrate (X) Special Rule can cause additional Hits.",
    text: "At the end of Step 9 of the Shooting Attack process for any Fire Group or Strike Group that includes Weapons with the Deflagrate (X) Special Rule, create a new Fire Group or Strike Group that must then be selected in Step 10 and resolved. This new Fire Group or Strike Group includes a number of Hits equal to the number of Unsaved Wounds caused by the Fire Group or Strike Group that triggered its creation. These Hits all have a Strength equal to the value of X attached to the variant of the Deflagrate (X) Special Rule possessed by Weapons in the preceding Fire Group or Strike Group, an AP of '-', a Damage of 1 and no Special Rules."
  },
  'detonation': {
    id: "sr12",
    name: "detonation",
    mod: "",
    brief: "Weapons with this Special Rule can only attack Vehicles and immobile Models.",
    text: "A Weapon or attack with this Special Rule may only be selected during Step 2 of any Combat in the Fight Sub- Phase if the Unit making attacks is only Locked in Combat with enemy Units composed of Models with the Vehicle Type and Models with a Movement Characteristic of '0' or. If a Unit is Locked in Combat with any enemy Units that include any Models that do not have the Vehicle Type or a Movement Characteristic of '0' or '-' then no Model may use a Weapon or other attack that has this Special Rule.<br><br> A Weapon or other attack with this Special Rule may also be used to make attacks targeting a Model with the Building Type or a Terrain Piece that has a Toughness or Armour Characteristic."
  },
  "duelist's edge": {
    id: "sr13",
    name: "duelist's edge",
    mod: "(X)",
    brief: "A Weapon with the Duellist's Edge (X) Special Rule grants a bonus to Focus Rolls in Challenges.",
    text: "In Step 3 of the Challenge Sub-Phase, the Focus Step, if a Player has declared that the Model under their control will use a Weapon with the Duellist's Edge (X) Special Rule or has the Duellist's Edge (X) Special Rule, then that Player gains a bonus equal to the value of X on the Focus Roll."
  },
  "eternal warrior": {
    id: "sr14",
    name: "eternal warrior",
    mod: "(X)",
    brief: "A Model with this Special Rule takes less Damage from attacks.",
    text: "When a Model with the Eternal Warrior (X) Special Rule is allocated an Unsaved Wound, the Damage of the Unsaved Wound is reduced by the value of X attached to the specific variant of the Eternal Warrior (X) Special Rule. The effects of this Special Rule cannot reduce the Damage of an Unsaved Wound to less than 1, regardless of the value of X."
  },
  "expendable": {
    id: "sr15",
    name: "expendable",
    mod: "(X)",
    brief: "A Player scores less Victory Points when they destroy a Unit that includes only Models with this Special Rule.",
    text: "The number of Victory Points scored by the opponent when a Unit that includes only Models with this Special Rule is entirely Removed as Casualties, for example, as part of the Vanguard (X) Special Rule, First Strike (X) or Slay the Warlord (X) Mission Special Rules, is reduced by the value of X, to a minimum of 1. If a Unit includes Models with different variants of this Special Rule, then the lowest value of X that was present on any Model in the Unit at the start of the Player Turn in which the last Model in the Unit is Removed as a Casualty is used to determine the effect of this Special Rule on that Unit.<br><br>Note that, if, at the start of any Player Turn a Unit includes any Models that do not have this Special Rule, then this Special Rule has no effect on that Unit for the duration of that Player Turn regardless of how many other Models in the Unit may have any variant of this Special Rule."
  },
  "explodes": {
    id: "sr16",
    name: "explodes",
    mod: "(X)",
    brief:
      "A Model with this Special Rule can explode and cause Hits to nearby Models and Units.",
    text: "Before a Model with the Explodes (X) Special Rule is Removed as a Casualty, the Controlling Player must roll a Dice. If the result of that roll equals or exceeds the value of X attached to this variant of the Explodes (X) Special Rule, the Model explodes. Every Unit with one or more Models within 6\" of an exploding Model suffers a number of Hits equal to the Base Wounds Characteristic or Base Hull Points Characteristic of the exploding Model. Each such Hit has a Strength Characteristic of 8, an AP Characteristic of ' - ' and a Damage Characteristic of 1. Once all Hits caused by this Special Rule have been resolved, the Model with the Explodes (X) Special Rule is Removed as a Casualty as normal.",
  },
  "fast": {
    id: "sr17",
    name: "fast",
    mod: "(X)",
    brief:
      "A Unit that only includes Models with the Fast (X) Special Rule gains a bonus to Rush and Charge Moves. ",
    text: "When the Player controlling a Unit that is composed entirely of Models with the Fast (X) Special Rule elects to have that Unit Rush, add the value of X attached to the specific variant of Fast (X) to the distance the Unit can move. Likewise, when a Unit composed entirely of Models with the Fast (X) Special Rule is required to make a Charge Move, add the value of X attached to the specific variant of Fast (X) Special Rule as a positive modifier to the Charge Roll. In any situation where a Unit includes Models with two or more variants of the Fast (X) Special Rule, the lowest possible modifier is used.",
  },
  "fear": {
    id: "sr18",
    name: "fear",
    mod: "(X)",
    brief:
      "Models near an enemy Model with the Fear(X) Special Rule must reduce their Advanced Characteristics.",
    text: 'When any Model from a Unit is within 12" of an enemy Model with the Fear(X) Special Rule, all Models in that Unit must reduce their Leadership, Willpower, Cool and Intelligence Characteristics by the value of X. This negative modifier is removed as soon as no Models in a given Unit are within 12" of any Model with the Fear(X) Special Rule. If a Unit would be affected by multiple instances of the Fear (X) Special Rule, the value of X is not stacked and instead the single highest value is used as a negative modifier.',
  },
  "feel no pain": {
    id: "sr19",
    name: "Feel No Pain",
    mod: "(X)",
    brief:
      "Feel No Pain (X) is a Damage Mitigation Test that may be taken in addition to a Saving Throw.",
    text: "A Model with the Feel No Pain (X) Special Rule gains a Feel No Pain Damage Mitigation Test that may be used in Step 9 of the Shooting Attack process or Step 8 of the Initiative Step of the Fight Sub-Phase process to discard wounds allocated to the Model. A Damage Mitigation Test may be made after an end in addition to a Saving Throw. The Target Number for a Feel No Pain Damage Mitigation Test is the value of X attached to the specific variant of the Special Rule.",
  },
  "firing protocols": {
    id: "sr20",
    name: "firing protocols",
    mod: "(X)",
    brief:
      "A Model with the Firing Protocols (X) Special Rule may attack with more than one ranged Weapon.",
    text: "A Model with the Firing Protocols (X) Special Rule that makes attacks as part of a Shooting Attack, may make attacks with a number of Weapons equal to the value of X attached to the specific variant of the Firing Protocols (X) Special Rule. The Model must have more than one Ranged Weapon to make use of this Special Rule and may not use the same Weapon more than once in the same Shooting Attack.",
  },
  "force": {
    id: "sr21",
    name: "force",
    mod: "(X)",
    brief:
      "A Weapon with this Special Rule may double a Characteristic with a Willpower Check, but may suffer Perils of the Warp.",
    text: "When selected to be used as part of a Combat or Shooting Attack, a Willpower Check may be made for the Model that will use this Weapon to make attacks. If it is successful then the Characteristic listed as X is doubled (if that Characteristic is AP, then the AP is instead changed to AP 2). If a double is rolled when making this Willpower Check then the Model using the Weapon to make attacks suffers Perils of the Warp.",
  },
  "hatred": {
    id: "sr22",
    name: "hatred",
    mod: "(X)",
    brief:
      "The Hatred (X) Special Rule grants bonuses against enemies of a specific Faction, Type or Trait.",
    text: "When Locked in Combat, or Engaged in a Challenge, with any enemy Models that have the Type or Trait that is the value of X, then all Models with this variant of the Hatred (X) Special Rule gain a bonus of +1 to all Wound Tests made in that Combat.",
  },
  "heavy": {
    id: "sr23",
    name: "heavy",
    mod: "(X)",
    brief:
      "Weapons with the Heavy (X) Special Rule gain +1 to a Characteristic when Stationary.",
    text: "When making a Shooting Attack with a Weapon that has the Heavy (X) Special Rule, a modifier of +1 is added to a Characteristic if the Model with that Weapon is part of a Unit that remained Stationary in the Controlling Player’s previous Movement Phase. If the Characteristic listed is AP, then it improves the AP by one Step. The value of X in the specific variant of the Heavy (X) Special Rule determines which Characteristic gains the +1 modifier.",
  },
  "heedless": {
    id: "sr24",
    name: "heedless",
    mod: "",
    brief: "A Unit that includes any Models with this Special Rule cannot claim Objectives.",
    text: "A Unit that includes any Models with this Special Rule cannot Control or Contest any Objective Marker - this overrides any other Rule or Special Rule that may apply to the Unit regardless of the source of the Rule or effect."
  },
  "impact": {
    id: "sr25",
    name: "impact",
    mod: "(X)",
    brief: "On a successful Charge, a Model with the Impact (X) Special Rule temporarily increases a Characteristic by 1.",
    text: "If a Unit that includes any Models with the Impact (X) Special Rule or any Models that have any Weapons with the Impact (X) Special Rule, and that Unit makes a successful Charge, then this Special Rule is triggered. Once triggered, until the end of that Assault Phase, when making Melee Attacks for Models in that Unit, each Model or Weapon that is selected for one of those Models, that has a variant of this Special Rule gains a modifier of +1 to any Characteristics that is the value of X."
  },
  "infiltrate": {
    id: "sr26",
    name: "infiltrate",
    mod: "(X)",
    brief: "Models with the Infiltrate (X) Special Rule can deploy outside of their Deployment Zone.",
    text: "At the start of a Mission, when deploying Units, the Controlling Player of a Unit that is composed entirely of Models with the Infiltrate (X) Special Rule may choose to deploy that Unit outside of that Player's Deployment Zone. That Unit may be deployed anywhere that is either in the Controlling Player's Deployment Zone or outside of the Opposing Player's Deployment Zone and is at least a number of inches equal to the highest value of X attached to any variant of the Infiltrate (X) Special Rule in that Unit away from any enemy Model.<br><br>Units deployed using the Infiltrate (X) Special Rule are deployed at the same time as other Units under a Player's control, unless the specific Rules of a given Mission state otherwise. The Infiltrate (X) Special Rule only has an effect when deploying Units before the start of the First Turn of a Battle, and Units deploying onto the Battlefield after the First Turn has begun gain no benefit from this Special Rule. A Unit that is deployed outside of the Controlling Player's Deployment Zone by means of this Special Rule may not have a Charge declared for it in the First Battle Turn."
  },
  "light transport": {
    id: "sr27",
    name: "light transport",
    mod: "",
    brief: "Models with this Special Rule cannot carry Models with the Bulky (X) Special Rule.",
    text: "Models that have any variant of the Bulky (X) Special Rule may not Embark on a Model that has this Special Rule."
  },
  "limited": {
    id: "sr28",
    name: "limited",
    mod: "(X)",
    brief: "A Weapon with the Limited (X) Special Rule can only be used to attack a limited number of times per Battle.",
    text: "A Weapon with the Limited (X) Special Rule may only be used to make attacks as part of a Shooting Attack or Combat a number of times equal to the value of Xattached to the specific variant of the Special Rule. Each time it is used to make attacks, the Firepower Characteristic or Attacks Modifier Characteristic of the Weapon is not modified by this Special Rule, only the number of times it may be selected in a given Battle."
  },
  "line": {
    id: "sr29",
    name: "line",
    mod: "(X)",
    brief: "A Unit of Models with this Special Rule can control Objectives more easily and scores more Victory Points from controlling an Objective.",
    text: "If a Unit that Controls an Objective includes a majority of Models with the Line (X) Special Rule then, whenever the Controlling Player scores Victory Points for Controlling that Objective, an additional number of Victory Points equal to the value of X are scored. For example, a Unit of 10 Models, of which the majority have the Line (3) Special Rule, hold an Objective worth 1 Victory Point, when the Controlling Player scores Victory Points for that Objective, they would score a total of 4 Victory Points.<br><br>Furthermore, the value of X is added to the Tactical Strength of a Model that has that Special Rule to determine its ability to Control Objectives (see Core Missions)."
  },
  "move through cover": {
    id: "sr30",
    name: "move through cover",
    mod: "",
    brief: "The Move Through Cover Special Rule allows the penalties of terrain to be ignored.",
    text: "A Unit that includes at least one Model with the Move Through Cover Special Rule ignores the effects of Difficult Terrain and Dangerous Terrain. If called upon to take a Dangerous Terrain Test then such a Unit is assumed to automatically pass without any Dice being rolled."
  },
  "officer of the line": {
    id: "sr31",
    name: "officer of the line",
    mod: "(X)",
    brief: "Models with this Special Rule allow more Auxiliary Detachments to be included in an Army.",
    text: "If a Model with this Special Rule is selected to fill a Command Slot in any Detachment in the Crusade Force Organisation Chart, then the Controlling Player may select a number of Auxiliary Detachments equal to the value of X in the specific variant of this Special Rule instead of just one."
  },
  "ordance": {
    id: "sr32",
    name: "ordance",
    mod: "(X)",
    brief: "Weapons with the Ordnance (X) Special Rule double the value of a Characteristic when Stationary.",
    text: "When making a Shooting Attack with a Weapon that has the Ordnance (X) Special Rule, a modifier of x2 is applied to a Characteristic if the Model with that Weapon is part of a Unit that remained stationary in the Controlling Player's previous Movement Phase (if that Characteristic is AP, then the AP is instead changed to AP 2). The value of X in the specific variant of the Ordnance (X) Special Rule determines which Characteristic gains the x2 modifier."
  },
  "outflank": {
    id: "sr33",
    name: "outflank",
    mod: "",
    brief: "A Unit of Models with the Outflank Special Rule can enter play from outside of Deployment Zones.",
    text: 'A Unit made up entirely of Models with this Special Rule that enters play from Reserves may do so from any point on the Battlefield Edge. The Unit may not enter play from any point that is within the Opposing Player\'s Deployment Zone or within 7" of any enemy Model.<br><br>Note that a Unit Embarked on a Model with the Outflank Special Rule does not need to have the Outflank Special Rule in order for the Model it is Embarked upon to benefit from it. A Model that enters the Battlefield from a point outside of the Controlling Player\'s Deployment Zone by means of this Special Rule, and any Units Embarked on such a Model, may not have a Charge declared for them in the Player Turn on which they enter play.'
  },
  "overload": {
    id: "sr33a",
    name: "overload",
    mod: "(X)",
    brief: "Weapons with this Special Rule may inflict Hits on the Models making Shooting Attacks with them.",
    text: `When the Controlling Player declares that attacks will be made for a Model using a Weapon or profile that has the Overload (X) Special Rule, any Hit Tests made for those attacks that result in a number that is equal to or less than the value of X attached to the variant of the Overload Special Rule that the Weapon had, before any modifiers are applied to the roll, are Misfires.<br><br>For Weapons that do not make Hit Tests, such as Weapons with the Template Special Rule, instead roll a number of dice equal to the Firepower Characteristic of the Weapon used to make the attack after the attack has been declared and the number of Models hit is determined. Each Dice that results in a number equal to or less than the value of X attached to the variant of the Overload Special Rule that the Weapon had creates a Misfire. This does not affect the number of Hits on the Target Unit created by this attack.<br><br>For each Misfire, the Unit for which the Hit Tests were made suffer a Hit - these Hits must form a new Fire Group or Strike Group, referred to as the 'Misfire Group'<br><br>Once the current Shooting Attack and any Reactions triggered by it have been fully resolved, the Misfire Group must be resolved. A Misfire Group is resolved in the same way as any other Fire Group or Strike Group, using the Profile of the Weapon used for the Fire Group or Strike Group it was created from. Wounds, Glancing Hits or Penetrating Hits from this Misfire Group are allocated by the Controlling Player, and must be allocated to a Model that made attacks as part of the Fire Group or Strike Group that generated the Misfire Group. If a Hit from a Misfire Group is generated by an attack made by a Model with the Vehicle Type, then it is resolved against the lowest Armour Value from all of the Model's facings.<br><br>Hits, wounds or Casualties inflicted upon a Unit as a result of this Special Rule do not cause Leadership or Cool Checks, and Hits inflicted as part of a Misfire Group do not trigger any Special Rules that take effect as a result of a certain value on a Hit Test.`
  },
  "panic": {
    id: "sr34",
    name: "panic",
    mod: "(X)",
    brief: "Weapons and other attacks that have the Panic (X) Special Rule have a chance of inflicting the Routed Status on the Target Unit.",
    text: "If a Shooting Attack made for a Weapon or Model with this Special Rule inflicts one or more wounds on a Target Unit, regardless of whether any Damage is inflicted, that Target Unit must make a Leadership Check in the Morale Sub-Phase of the same Player Turn. If this Check is failed then all Models in the Unit gain the Routed Status, if the Check is passed then there is no further effect. The value of X attached to this Special Rule is applied as a negative modifier to the Leadership Characteristic of Models in the Target Unit when making Checks caused by an attack with this Special Rule. If the attack includes multiple Weapons with different versions of this Special Rule the modifiers do not stack - use only the greatest modifier."
  },
  "phage": {
    id: "sr35",
    name: "phage",
    mod: "(X)",
    brief: "Unsaved Wounds with the Phage (X) Special Rule reduce a Characteristic by 1.",
    text: "If an attack made for a Weapon or Model with this Special Rule inflicts one or more Unsaved Wounds on a Target Unit, then once the Shooting Attack or Initiative Step in which the Unsaved Wound was inflicted has been completely resolved, all remaining Models in the Unit that was the target of the attack must reduce the Characteristic that is the value of X for that variant of the Phage (X) Special Rule by 1 for the remainder of the Battle. Models in a Unit may have any number of different Characteristics reduced by 1 by the Phage (X) Special Rule, but no individual Characteristic may be reduced by more than 1 by the Phage (X) Special Rule no matter how many Unsaved Wounds with any variant of that Special Rule are allocated to Models in that Unit."
  },
  "pinning": {
    id: "sr36",
    name: "pinning",
    mod: "(X)",
    brief: "Weapons and other attacks that have the Pinning (X) Special Rule have a chance of inflicting the Pinned Status on the Target Unit.",
    text: "If a Shooting Attack made for a Weapon or Model with this Special Rule inflicts one or more wounds on a Target Unit, regardless of whether any Damage is inflicted, that Target Unit must make a Cool Check in the Morale Sub-Phase of the same Player Turn. If this Check is failed then all Models in the Unit gain the Pinned Status, if the Check is passed then there is no further effect. The value of X attached to this Special Rule is applied as a negative modifier to the Cool Characteristic of Models in the Target Unit when making Checks caused by an attack with this Special Rule, if the attack includes multiple Weapons with different versions of this Special Rule the modifiers do not stack - use only the greatest modifier."
  },
  "pistol": {
    id: "sr37",
    name: "pistol",
    mod: "",
    brief: "A Model may attack with two Weapons that have the Pistol Special Rule.",
    text: "During Step 3 of any Shooting Attack, a Player may choose to have a Model under their control make attacks with two Weapons rather than one if both Weapons have the Pistol Special Rule."
  },
  "poisoned": {
    id: "sr38",
    name: "poisoned",
    mod: "(X)",
    brief: "A Weapon with the Poisoned (X) Special Rule has a chance to cause a wound regardless of the target's Toughness.",
    text: "When making Wound Tests for Hits that have the Poisoned (X) Special Rule, if the result of any Dice rolled is equal to or greater than the value of X attached to the specific variant of this Special Rule then a wound is caused automatically, regardless of the Toughness Characteristic used to determine the Target Number. A Hit that has this Special Rule may still inflict a wound by passing a Wound Test as normal, instead of using this Special Rule, but never inflicts more than 1 wound if it would both pass the Wound Test and trigger the Poisoned (X) Special Rule. Wounds caused using the Poison (X) Special Rule retain the AP and Damage of the Weapon and Saving Throws and Damage Mitigation Tests may be made to discard them as normal. The Poisoned (X) Special Rule has no effect on Models that have the Vehicle Type, and limited effect on Models with the Automata or Walker Types (see the Rules of Walkers and Automata)."
  },
  "precision": {
    id: "sr39",
    name: "precision",
    mod: "(X)",
    brief: "Attacks made with the Precision (X) Special Rule are allocated by the Attacking Player, not the Defender.",
    text: "<br>When any Hit Test is made for an attack with the Precision (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Precision (X) Special Rule, then if a Hit is inflicted by that roll, that Hit becomes a 'Precision Hit.<br><br>These Precision Hits must form a separate Fire Group or Strike Group. Wound Tests are made as normal for Precision Hits and cause Precision wounds. In Step 8 of the Shooting Attack process or Step 7 of the Initiative Step sequence, when selecting a Target Model for a Fire Group or Strike Group that is made up of Precision wounds, the Target Model is not selected using the normal Rules. Instead the attacking Player chooses which Model in the Target Unit will be the Target Model, and may select any Model that is a part of that Unit.<br><br>Note that Models Engaged in a Challenge cannot use this Special Rule to allocate Hits to any Model other than the enemy Model that is Engaged in the same Challenge and that any attacks which are made as Snap Shots, or for Weapons or attacks that have either the Blast (X), Barrage (X), Template or Reaping Blow (X) Special Rules, may never trigger the Precision (X) Special Rule no matter what the result of the Hit Test is."
  },
  "reaping blow": {
    id: "sr40",
    name: "reaping blow",
    mod: "(X)",
    brief: "If a Model with this Special Rule is outnumbered, it gains extra attacks.",
    text: "If a Model is outnumbered in Combat and either has this Special Rule or is made to attack with a Weapon that has this Special Rule, then that Model gains a bonus to its Attacks Characteristic equal to the value of X attached to the variant of this Special Rule it has access to. To be considered outnumbered, the total number of Friendly Models Locked in the same Combat must be less than the total number of Enemy Models Locked in the same Combat - Models with the Bulky (X) Special Rule count as a number of Models equal to the value of X in the variant of the Bulky (X) Special Rule that Model has. This Special Rule has no effect during the Challenge Sub-Phase, and no Model that is Engaged in a Challenge may gain additional Attacks due to this Special Rule."
  },
  "rending": {
    id: "sr41",
    name: "rending",
    mod: "(X)",
    brief: "With a Weapon that has the Rending (X) Special Rule,there is a chance that a Hit Test may result in an automatic wound.",
    text: "When any Hit Test is made for an attack with the Rending (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Rending (X) Special Rule, then if a Hit is inflicted by that Hit Test, that Hit becomes a 'Rending Hit'.<br><br>When required to make a Wound Test for a Rending Hit, no Dice are rolled and the Wound Test succeeds automatically regardless of the Weapon's Strength or the Target's Toughness. The Wound Test is treated as if the result had been '6' for the purposes of any Rules that would be triggered on certain results of a Wound Test. Wounds caused by a Rending Hit use the AP and Damage Characteristics of the Weapon used to make the attack and retain any Special Rules that Weapon had. <br><br>If the Target Unit for an attack made with a Weapon that has this Special Rule includes any Models with the Vehicle Type, then this Special Rule has no effect."
  },
  "shock": {
    id: "sr42",
    name: "shock",
    mod: "(X)",
    brief: "Weapons with the Shock (X) Special Rule have a chance of inflicting Statuses on Vehicles even if it does not penetrate their armour.",
    text: "When making a Hit Test for a Weapon with this Special Rule against a Target Unit that includes any Models with the Vehicle Type or Walker Type, the result of the Hit Test before any modifiers are applied must be checked. If any Hit Test for a Weapon with the Shock (X) Special Rule results in a '5' or '6' before any modifiers are applied, then all Models with the Vehicle Type or Walker Type in the Target Unit gain a Status at the end of Step 11 of the Shooting Attack process or Step 10 of the Initiative Step process. The Status gained is indicated by the value of X attached to that variant of the Shock (X) Special Rule. If the Model already has the stated Status or the attack would apply the Status multiple times there is no additional effect and this Special Rule never causes a Model to lose Wounds or Hull Points. Hits inflicted by a Weapon with this Special Rule must still have Wound Tests or Armour Penetration Tests made for them, and are not discarded if they trigger this Special Rule."
  },
  "shred": {
    id: "sr43",
    name: "shred",
    mod: "(X)",
    brief:
      "Attacks made with the Shred (X) Special Rule can sometimes inflict an extra point of Damage.",
    text: "When any Wound Test is made for an attack with the Shred (X) Special Rule, if the result of the Dice roll, before any modifiers are applied, is equal to or greater than the value of X attached to this variant of the Shred (X) Special Rule, then if a wound is inflicted by that Wound Test, the Damage Characteristic of that wound is increased by 1. Note that the Shred (X) Special Rule may only be triggered by a Wound Test and has no effect when making an Armour Penetration Test.",
  },
  "shrouded": {
    id: "sr44",
    name: "shrouded",
    mod: "(X)",
    brief: "Shrouded (X) is a Damage Mitigation Test that may be taken in addition to a Saving Throw.",
    text: "A Model with the Shrouded (X) Special Rule gains a Shrouded Damage Mitigation Test that may be used in Step 9 of the Shooting Attack process to discard Wounds allocated to the Model. A Damage Mitigation Test may b made after and in addition to a Saving Throw. The Target Number for a Shrouded Damage Mitigation Test is the value of X attached to the specific variant of the Special Rule. A Shrouded Damage Mitigation Test may not be made against wounds inflicted by a Melee Weapon."
  },
  "skyfire": {
    id: "sr45",
    name: "skyfire",
    mod: "",
    brief: "Attacks made with the Skyfire Special Rule ignore penalties when attacking Flyers.",
    text: "A Hit Test made for a Weapon with the Skyfire Special Rule ignores any rule that would require attacks made targeting an enemy Unit that contains any Models with the Flyer Sub-Type to be made as Snap Shots. Instead such an attack makes a normal Hit Test using the Ballistic Skill of the attacking Model - this includes attacks made as part of any Reaction. A Unit that includes any Models with any Tactical Status may not benefit from the effects of this Special Rule."
  },
  "stun": {
    id: "sr46",
    name: "stun",
    mod: "(X)",
    brief: "Weapons and other attacks that have the Stun (X) Special Rule have a chance of inflicting the Stunned Status on the Target Unit.",
    text: "If a Shooting Attack made for a Weapon or Model with this Special Rule inflicts one or more Hits on a Target Unit, that Target Unit must make a Cool Check in the Morale Sub-Phase of the same Player Turn. If this Check is failed then all Models in the Unit gain the Stunned Status and if the Check is passed then there is no further effect. The value of X attached to this Rule is applied as a negative modifier to the Cool Characteristic of Models in the Target Unit when making Checks caused by an Attack with this Special Rule, if the attack includes multiple Weapons with different versions of this Special Rule the modifiers do not stack - use only the greatest modifier."
  },
  "support unit": {
    id: "sr47",
    name: "support unit",
    mod: "(X)",
    brief: "A Unit that contains Models with this Special Rule scores fewer Victory Points for Controlling Objective Markers.",
    text: "A Unit that includes any Models with the Support Unit (X) Special Rule may only ever score a maximum number of Victory Points equal to the value of X for Controlling an Objective, regardless of the Value of that Objective, or any other Special Rules Models in that Unit might have (such as the Line (X) Special Rule)."
  },
  "suppressive": {
    id: "sr48",
    name: "suppressive",
    mod: "(X)",
    brief: "Weapons and other attacks that have the Suppressive (X) Special Rule have a chance of inflicting the Suppressed Status on the Target Unit.",
    text: "If a Shooting Attack made for a Weapon or Model with this Special Rule inflicts one or more Hits on a Target Unit, that Target Unit must make a Cool Check in the Morale Sub-Phase of the same Player Turn. If this Check is failed all Models in the Unit gain the Suppressed Status, and if the Check is passed then there is no further effect. The value of X attached to this Rule is applied as a negative modifier to the Cool Characteristic of Models in the Target Unit when making Checks caused by an Attack with this Special Rule, if the attack includes multiple Weapons with different versions of this Special Rule the modifiers do not stack - use only the greatest modifier."
  },
  "template": {
    id: "sr49",
    name: "template",
    mod: "(X)",
    brief: "Weapons and attacks with the Template Special Rule use the Flame Template to determine how many Models they Hit.",
    text: `When making attacks for a Weapon or other effect that has the Template Special Rule, or otherwise uses a Template, no Hit Tests are made for the attack. Instead, when directed to make Hit Tests for such an attack, a single Template is placed to determine how many Hits are generated. A Template must be placed so that its narrow end is touching the Base of the Model, the edge of a Model's Hull (if it has the Vehicle Type) or other point being used to make the attack, and so that no part of the Template covers or touches a friendly Model's Base, Hull or otherwise would inflict Hits on a friendly Model. Within these restrictions, the Player making the attack may place the Template in an orientation of their choosing as long as at least one Model from the original Target Unit remains under the Template. If the Template cannot be placed under these restrictions, such as if it cannot be placed without covering or touching friendly Models, then no attack may be made.<br><br>Once the Template has been placed, a number of Hits using the profile of the Weapon or effect are inflicted on the Target Unit equal to the number of Models touched or covered by the Template. If the Weapon or attack has a Firepower Characteristic greater than 1 then only a single Template is placed, but the number of Hits inflicted per Model touched or covered by the Template is equal to the Firepower Characteristic of the attack or Weapon. If more than one enemy Unit has Models that are touched or covered by the Template in its final position, then Hits are inflicted on all such Units as noted above, Hits on Units other than the original target form a new Fire Group that must be placed to one side and used to resolve a separate Shooting Attack on the additional Target Unit once all attacks and Fire Groups from the original Shooting Attack have been fully resolved. When resolving Armour Penetration Tests for Hits inflicted by a Weapon with this Special Rule, the position of the Model that was used to make the attack is used to determine which Armour Facing is used.<br><br>Note that the Rules require a Template to be placed in Base Contact with the Model being used to make the attack, but this Model is not counted as having been Hit by the attack and does not stop the attack from being made. However, this only applies to the individual Model being used to make the attack, not to other Models in the same Unit.<br><br> Weapons with this Special Rule will have their Range Characteristic as Template: This does not count as a value of '0' or ': If a Rule requires a number for the Range Characteristic then all Weapons and attacks with this Special Rule are considered to have a Range Characteristic of '8'.<br><br><b>OTHER TEMPLATES</b><br><br>In some rare cases a Weapon may use a different Template than the standard Flame Template, in these cases the Template Rule may be expressed with a bracketed section stating which Template must be used when attacking with that Weapon. Otherwise, the Rules for its use are unchanged from those noted under the Template Special Rule, with the exception of the Range Characteristic it is considered to have.<br><br>An example of this is the use of the Hellstorm Template for certain very large Weapons. In this case the Rule would be expressed as "Template (Hellstorm)" and the attack would be resolved using the Template Special Rule, but placing the larger Hellstorm Template. Weapons with the Template (Hellstorm) Special Rule are considered to have a Range Characteristic of ‘16’ when a Rule requires such weapons to have a numbered Range Characteristic.`
  },
  "vanguard": {
    id: "sr50",
    name: "vanguard",
    mod: "(X)",
    brief: "A Unit that includes Models with this Special Rule scores fewer Victory Points for controlling Objectives, but can score Victory Points for destroying enemy Units that hold Objectives.",
    text: "A Unit that includes a majority of Models with the Vanguard (X) Special Rule may only ever score 1 Victory Point for Controlling an Objective, regardless of that Objective's value. However, the Player that controls a Unit that includes a majority of Models with the Vanguard (X) Special Rule gains Victory Points equal to the value of X in the Vanguard (X) Special Rule, in addition to any Victory Points scored for controlling an Objective, whenever either of the following two statuses are fulfilled:<ul class='unit-list'><li> If an attack made for a Unit that includes a majority of Models with the Vanguard (X) Special Rule causes the last Model in an enemy Unit that is Controlling or Contesting an Objective to be Removed as a Casualty.</li><li>If a Unit that includes a majority of Models with the Vanguard (X) Special Rule has at least one attack made for it in a Combat that results in one or more enemy Units that had at least one Model within 3\" of an Objective at the start of that Assault Phase Falling Back from Combat or being Massacred.</li></ul>Note that the Vanguard (X) Special Rule may only be used to score Victory Points once per Objective per Player Turn - no matter how many enemy Units were Controlling or Locked in Combat near that Objective."
  },
  "aflame": {
    id: "sr51",
    name: "aflame",
    mod: "(X)",
    brief: "A Weapon with this Special Rule causes additional modifiers to a Target's Leadership Characteristic.",
    text: "If a Melee Attack made for a Weapon or Model with this Special Rule inflicts one or more wounds on a Target Unit, regardless of whether any Damage is inflicted, until the end of the Phase, that Unit is considered to be aflame. If the Controlling Player of a Unit that is aflame is required to make a Leadership Check during that Phase for a Combat that includes that Unit, the value of X on this Special Rule is applied as an additional negative modifier to the Leadership Characteristic being used for that Check."
  },
  "firestorm": {
    id: "sr52",
    name: "firestorm",
    mod: "",
    brief: "A Model with this Special Rule does not have to make Volley Attacks as Snap Shots.",
    text: "When a Model with this Special Rule makes Volley Attacks, it is not required to fire Snap Shots. In addition, after making Volley Attacks in Step 4 of the Charge Procedure, a Unit containing any Models with this Special Rule is not required to make a Charge Roll in Step 5. If the Controlling Player chooses not to make a Charge Roll in Step 5 of the Charge Procedure then the Charge Procedure ends immediately."
  },
  "impact reactive doors": {
    id: "sr53",
    name: "impact reactive doors",
    mod: "",
    brief: "A Model with this Special Rule must be deployed with its doors open.",
    text: "When a Model with this Special Rule is Deployed, any doors on the Model must be opened to their full extent. Any Unit Embarked upon a Model with this Special Rule must Disembark in the Move Sub-Phase immediately following the Reserves Sub-Phase in which it was Deployed. Any Model that cannot Disembark from the Model with this Special Rule in that Move Sub-Phase is Removed as a Casualty. Furthermore, once a Unit has Disembarked from a Model with this Special Rule, no Models may Embark upon that Model with this Special Rule for the duration of the Battle. Ranges or Line of Sight from this Model must be measured from the central hull, including for Disembarkation. The doors are ignored for all purposes."
  },
  "implacable advance": {
    id: "sr54",
    name: "implacable advance",
    mod: "",
    brief: "Models with this Special Rule can make Volley Attacks with other Weapons.",
    text: "The Controlling Player of a Model with this Special Rule treats all Ranged Weapons such a Model has that do not have any variant of the Heavy (X) Special Rule or Ordnance (X) Special Rule as having the Assault Trait."
  },
  "medic": {
    id: "sr55",
    name: "medic",
    mod: "(X)",
    brief: "This Special Rule determines the difficulty of any Recovery Tests made due to other Reactions or Special Rules.",
    text: "If a Unit includes one or more Models with the Medic (X) Special Rule, then certain other Special Rules, Reactions or Gambits may allow the Controlling Player to make Recovery Tests for other Models in the same Unit. Note that the Medic (X) Special Rule does not allow Recovery Tests to be made, but simply establishes the Target Number for such Tests - Recovery Tests may only be made if another Special Rule, Reaction or Gambit allows them (see, for example, the Medic! Advanced Reaction).<br><br><b>Recovery Tests</b><br> A Recovery Test is made when one or more Unsaved Wounds are allocated to a Model, and is resolved by rolling a Dice and comparing the result to the value of 'X' in the variant of the Medic (X) Special Rule. If there is more than one variant of the Medic (X) Special Rule present in a Unit, then the Controlling Player chooses which is used to determine the Target Number. If the Recovery Test is successful then a single Unsaved Wound allocated to the Model has its Damage reduced by 1 (to a minimum of 0). If a Recovery Test is failed, then any Unsaved Wounds allocated to the Model are resolved as normal."
  },
  "melta": {
    id: "sr56",
    name: "melta",
    mod: "(X)",
    brief: "This Special Rule increases the amount of Damage against Vehicles when Shooting Attacks are made within a specific range.",
    text: "If at least one Model in a Unit with the Vehicle Type that targeted by a Shooting Attack made by a Model using a Weapon with this Special Rule is within a range equal to or less than the value specified by X, that attack has the Armourbane Special Rule and the Damage of Penetrating Hits caused by that attack is doubled."
  },
  "orbital assault vehicle": {
    id: "sr57",
    name: "orbital assault vehicle",
    mod: "",
    brief: "A Model with this Special Rule must Deep Strike.",
    text: "A Model with this Special Rule must be Deployed onto the Battlefield using the Deep Strike Special Rule and is treated as though it has that Special Rule. It may never be deployed without using the Deep Strike Special Rule, regardless of any other Rule or Mission, and if forced to do so it is immediately reduced to 0 Hull Points."
  },
  "rapid tracking": {
    id: "sr58",
    name: "rapid tracking",
    mod: "",
    brief: "Weapons with this Special Rule are better able to utilise it for intercepting new arrivals on the Battlefield.",
    text: "Each time a Model makes a Shooting Attack as part of the Intercept Advanced Reaction, its Controlling Player can select a Weapon with this Special Rule for that Shooting Attack, even if it is not a Defensive Weapon."
  },
  "shot selector": {
    id: "sr59",
    name: "shot selector",
    mod: "",
    brief: "Weapons with this Special Rule gain one optional additional Special Rule when used to attack.",
    text: "When a Shooting Attack is made that includes one or more Weapons with this Special Rule, at the start of Step 3 of the Shooting Attack procedure, the Attacking Player can select one of the following Special Rules for all Weapons with this Special Rule to gain until the end of this Shooting Attack:<br><ul class='unit-list'><li>Panic (1)</li><li>Breaching (4+)</li><li>Suppressive (2)</li></ul>"
  },
  "slow and purposeful": {
    id: "sr60",
    name: "slow and purposeful",
    mod: "",
    brief: "Models with this Special Rule cannot Pursue fleeing enemy Units.",
    text: "In Step 4 of the Resolution Sub-Phase, a Player that has won Combat cannot choose for a Unit that includes any Models with this Special Rule to Pursue, and must instead select another eligible option for that Unit."
  },
  "void shields": {
    id: "sr61",
    name: "void shields",
    mod: "(X)",
    brief: "A Model with this Special Rule ignores Penetrating Hits as long as it still has active void shields.",
    text: "A Model with this Special Rule has a number of void shields equal to the value of X. While a Model with this Special Rule still has void shields, each time that Model suffers a Penetrating Hit as a result of a Shooting Attack, reduce the Damage of that Penetrating Hit to '0' and reduce the number of void shields this Model has by 1. If the number of void shields a Model has is reduced to 0, this Special Rule has no further effect during that battle."
  },
  "bitter duty": {
    id: "sr62",
    name: "bitter duty",
    mod: "",
    brief: "Models with this Special Rule may not join Units that do not also have this Special Rule.",
    text: "A Unit that includes any Models with this Special Rule can only join Units or be joined by other Models with this Special Rule."
  },
  "combi": {
    id: "sr63",
    name: "combi",
    mod: "",
    brief: "A Weapon with this Special Rule can fire multiple profiles simultaneously.",
    text: "Each time a Model makes a Shooting Attack with a Weapon Profile with this Special Rule, the Controlling Player can select another Profile from the same Weapon with this Special Rule and make attacks with it as part of the same Shooting Attack. Note that if that Profile also has the Limited (X) Special Rule, this does not allow it to be selected to make attacks more than the number of times equal to the value of X on that Special Rule."
  },
  "lord of automata": {
    id: "sr64",
    name: "lord of automata",
    mod: "",
    brief: "This Special Rule allows an Iron Father to be accompanied by a Unit of Battle-automata.",
    text: "When a Model with this Special Rule is included in a Detachment, one additional Force Organisation Slot is added to that Detachment. This Slot can only be filled with one Castellax Battle Maniple or Castellax Destructor Maniple Unit selected from Liber Mechanicum. When such a Unit is included in this way, its Cybernetica Trait is replaced with 'Bonded Automata', and this Unit can be included even though it does not have the same Faction Trait as the other Units in that Detachment. In addition, a Model with this Special Rule may join a Friendly Unit that includes Models with the Automata Type. If a Model with this Special Rule joins a Unit with the Automata Type, the Leadership and Cool Characteristics of Models in that Unit are not reduced.",
    unique: true,
  },
  "death cloud": {
    id: "sr65",
    name: "death cloud",
    mod: "",
    brief: "This Special Rule inflicts Hits on an enemy Unit Locked in Combat with any Models with this Special Rule.",
    text: "At the start of the Fight Sub-Phase, each enemy Unit that is Locked in Combat with one or more Units that include any Models with this Special Rule is affected by the Death Cloud. Each Unit affected by the Death Cloud suffers a number of Hits equal to the number of Models with this Special Rule in Units they are Locked in Combat with. These Hits have a Strength of 1, the Poisoned (3+) Special Rule, an AP of 5 and a Damage Characteristic of 1. No Cover Saves or Shrouded Damage Mitigation Rolls may be made to discard wounds that result from these Hits, but other Saving Throws and Damage Mitigation Rolls may be made as normal.",
    unique: true,
  },
  "inductii": {
    id: "sr66",
    name: "inductii",
    mod: "",
    brief: "A Unit containing any Models with this Special Rule may never be used to select a Prime Advantage.",
    text: "When a Unit that includes any Models with this Special Rule is selected to fill a Prime Force Organisation Slot, no corresponding Prime Advantage may be selected."
  },
  "fury of the legion": {
    id: "sr67",
    name: "fury of the legion",
    mod: "",
    brief: "",
    text: "When a Model with this Special Rule makes a Shooting Attack with a bolter, the bolter gains the Heavy (FP) Special Rule until that Shooting Attack is fully resolved."
  },
  "eyes of the warmaster": {
    id: "sr68",
    name: "eyes of the warmaster",
    mod: "",
    brief: "",
    text: "If a Model with this Special Rule joins a Unit with a different Faction Trait, the Leadership and Cool Characteristics of Models in that Unit are not reduced.",
    unique: true,
  },
  "treacherous lure": {
    id: "sr",
    name: "treacherous lure",
    mod: "",
    brief: "A Unit entirely composed of Models with this Special Rule cannot be targeted by Shooting Attacks during the first Battle Turn.",
    text: `A Unit composed entirely of Models with this Special Rule may not be selected as the Target Unit of a Shooting
Attack during the first Battle Turn. This Special Rule has no effect on Volley Attacks or Shooting Attacks made as
part of a Reaction.`,
    unique: true,
  },
  "harrowmaster": {
    id: "sr",
    name: "harrowmaster",
    mod: "",
    brief: "Certain Units gain the Infiltrate (X) Special Rule when joined by Armillus Dynat.",
    text: "When a Model with this Special Rule is deployed, if every Model in its Unit does not have the Bulky (X) Special Rule, all Models in that Unit gain the Infiltrate (12) Special Rule.",
    unique: true,
  },
  "consul-delegatus": {
    id: "sr",
    name: "consul-delegatus",
    mod: "",
    brief: "",
    text: `An Army may not include more than one Model with this Special Rule. If a Model with this Special Rule is selected to fill a Command Slot in any Detachment in the Crusade Force Organisation Chart, then the Controlling Player may select one Apex Detachment instead of the Auxiliary Detachment usually granted by filling a Command Slot. Additionally, a Model with this Special Rule counts as being a High Command Choice for the purposes of any version of the Slay the Warlord (X) Secondary Objective.`,
    unique: true,
  },
  "hydra's wail": {
    id: "sr",
    name: "hydra's wail",
    mod: "",
    brief: "",
    text: `When making Cool or Intelligence Checks for a Unit with at least one Model within 12" of at least one
enemy Model with this Special Rule, the Controlling Player must roll an additional Dice and discard the lower roll.`,
    unique: true,
  },
  "lone killer": {
    id: "sr",
    name: "lone killer",
    mod: "",
    brief: "",
    text: "A Model with this Special Rule may not be joined by any other Models",
    unique: true,
  },
  "everywhere and nowhere": {
    id: "sr",
    name: "everywhere and nowhere",
    mod: "",
    brief: "",
    text: `If the Mission being played has a Deploy Armies Step, at the end of
            this step, the Controlling Player of a Model with this Special Rule
            can deploy this Model again. When they do so, this Model can leave
            any Unit it has joined before being Deployed and can join a
            different Unit by being Deployed within Unit Coherency of it if the
            Unit is on the Battlefield, or placed with that Unit if it is
            currently Embarked upon a Model with the Transport Sub-Type, if that
            Model has sufficient remaining Transport Capacity and is able to
            Transport Models with the Bulky (X) Special Rule. This Special Rule
            cannot be used to deploy this Model on the Battlefield outside of
            the Controlling Player's Deployment Zone, or Embarked upon a Model
            with the Transport Sub-Type on the Battlefield outside of the
            Controlling Player's Deployment Zone.`,
    unique: true,
  },
  "sire of the aplha legion": {
    id: "sr",
    name: "sire of the aplha legion",
    mod: "",
    brief: "",
    text: `If a Model with this Special Rule is part of an Army, then the
            Controlling Player may apply the following additional Special Rules
            to all Auxiliary, Apex and Primary Detachments that have the same
            Faction Trait as the Model with this Special Rule:
            <ul class="unit-list"><li>
              If four or more Troops Battlefield Role Slots in the Primary
              Detachment of this Army are filled with Tactical Squad Units
              and/or Assault Squad Units, then all Force Organisation Slots with
              the Troops Battlefield Role in the Primary Detachment are
              considered Prime Slots.
            </li>
          </ul>
          <p>
            Force Organisation Slots with the Troops Battlefield Role in the
            Primary Detachment are considered Prime Slots. Furthermore, if a
            Model with this Special Rule is part of an Army, then the following
            Special Rules are granted to all Models with the Alpha Legion Trait
            in the same Army:
          </p>
          <ul class="unit-list">
            <li>
              When the Controlling Player of a Model with this Special Rule
              makes a Reserve Roll for a Unit which only includes Models with
              the Alpha Legion Trait, on a Reserve Roll of 5+ that Unit can
              enter play as if it has the Outflank Special Rule.
            </li>
          </ul>`,
    unique: true,
  },
  "false colours": {
    id: "sr",
    name: "false colours",
    mod: "",
    brief: `A Unit composed entirely of Models with this Special Rule may not be
            selected as the Target Unit of a Shooting Attack or a Charge.`,
    text: `When an enemy Unit finishes a Move within 6" of a Model with this
            Special Rule, that Unit's Controlling Player can make an
            Intelligence Check for that Unit. If that Check is passed, this
            Special Rule has no effect for that Model until the end of the
            Battle. In addition, if a Model with this Special Rule makes a
            Shooting Attack or ends a Charge Move in Base Contact with an enemy
            Model, this Special Rule has no effect for that Model until the end
            of the Battle.`,
    unique: true,
  },
  "forbidden augmentations": {
    id: "sr",
    name: "forbidden augmentations",
    mod: "",
    brief: `Medic! Advanced Reactions may be declared for a Unit entirely composed
          of Models with this Special Rule, for which the Target Number of any
          resultant Recovery Tests is 5+.`,
    text: `A Unit containing only Models with this Special Rule is considered to
          contain one or more Models with the Medic (X) Special Rule for the
          purposes of declaring the Medic! Advanced Reaction. If a Unit
          containing only Models with this Special Rule is the Target Unit of a
          Medic! Advanced Reaction, all Recovery Tests made as part of that
          Reaction have a Target Number of 5+.`,
    unique: true,
  },
  "tempered by war": {
    id: "sr",
    name: "gambit: tempered by war",
    mod: "",
    brief: ``,
    text: `While a Model with this Special Rule is Engaged in a Challenge, its
            Controlling Player can select the following Gambit: when this Gambit
            is selected, this Model's Toughness Characteristic is set to 8 for
            the duration of the following Strike Step.`,
    unique: true,
  },
  "sire of the iron hands": {
    id: "sr",
    name: "sire of the iron hands",
    mod: "",
    brief: ``,
    text: `<p>
            If a Model with this Special Rule is part of an Army, then the
            Controlling Player may apply the following additional Special Rules
            to all Auxiliary, Apex and Primary Detachments that have the same
            Faction Trait as the Model with this Special Rule:
          </p>
          <ul class="unit-list">
            <li>
              If four or more Troops Battlefield Role Slots in the Primary
              Detachment of this Army are filled with Tactical Squads and/or
              Breacher Squads, then all Force Organisation Slots with the Troops
              Battlefield Role in the Primary Detachment are considered Prime
              Slots.
            </li>
          </ul>
          <p>
            Furthermore, if a Model with this Special Rule is part of an Army,
            then the following Special Rules are granted to all Models with the
            Infantry Type and the Iron Hands Trait in the same Army:
          </p>
          <ul class="unit-list">
            <li>
              Until the end of the first Battle Turn of the Battle, all Models
              in this Army with the Infantry Type and the Iron Hands Trait have
              the Feel No Pain (6+) Special Rule.
            </li>
          </ul>`,
    unique: true,
  },
  "fate of the gorgon": {
    id: "sr",
    name: "fate of the gorgon",
    mod: "",
    brief: ``,
    text: `When part of an Army that does not include Ferrus Manus, a Model with
          this Special Rule has the Hatred (Emperor’s Children) Special Rule.`,
    unique: true,
  },
  "barbaran resilience": {
    id: "sr",
    name: "barbaran resilience",
    mod: "",
    brief: `A Unit containing any Models with this Special Rule never gains the Routed Tactical Status due to suffering
25% or more Casualties in the Shooting Phase.`,
    text: `A Unit containing any Models with this Special Rule is never required to take a Leadership Check in the Morale Sub-
Phase to avoid gaining the Routed Tactical Status due to having a certain number of Models removed from that Unit
as Casualties from a single Shooting Attack.`,
    unique: true,
  },
  "witchblood": {
    id: "sr",
    name: "witchblood",
    mod: "",
    brief: `Calas Typhon has the Biomancy Discipline if included in an Army that does not include Mortarion.`,
    text: `<p>
            When part of an Army that includes Mortarion, a Model with this Special Rule does not have any Psychic Disciplines, despite having the Psyker Trait. When part of an Army that does not include Mortarion, a Model with this Special Rule has the Biomancy Discipline.
          </p>

          <p>
            Additionally, once per Battle, while a Model with this Special Rule is engaged in a Challenge, its Controlling Player can select the following Gambit:
          </p>
          <p>
            <span class="bold">Witchblood:</span> While this Gambit is selected, at the start of the Focus Step, the Controlling Player of this Model may make a Willpower Check for this Model. If the Check is successful, this Model has its Attacks and Strength Characteristics modified by +2 in the following Strike Step. If the Check is failed, this Model suffers 1 wound, with an AP of 2 and a Damage of 1, against which only Invulnerable Saves can be taken. If this would cause this Model to be reduced to 0 Wounds, this Model is Removed as a Casualty and the Challenge ends.
          </p>`,
    unique: true,
  },
  "shadow of the reaper": {
    id: "sr",
    name: "shadow of the reaper",
    mod: "",
    brief: ``,
    text: `Each time a Model with this Special Rule Rushes or makes a Set-up
            Move, treat that Model's Movement Characteristic as 12.`,
    unique: true,
  },
  "preternatural resilience": {
    id: "sr",
    name: "preternatural resilience",
    mod: "",
    brief: ``,
    text: `When Engaged in a Challenge, attacks with the Critical Hit (X)
            Special Rule made against a Model with this Special Rule substitute
            the value of X for 6+.`,
    unique: true,
  },
  "sire of the death guard": {
    id: "sr",
    name: "sire of the death guard",
    mod: "",
    brief: ``,
    text: `If a Model with this Special Rule is part of an Army, then the
            Controlling Player may apply the following additional Special Rules
            to all Auxiliary, Apex and Primary Detachments that have the same
            Faction Trait as the Model with this Special Rule:
            <ul class="unit-list">
            <li>
              If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled with Tactical Squad Units, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered Prime Slots.
            </li>
          </ul>
          <p>
            Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Models with the Death Guard Trait in the same Army:
          </p>
          <ul class="unit-list">
            <li>
              Until the end of the first Battle Turn of the Battle, each time the Controlling Player makes a Shooting Attack for a Unit that only includes Models with the Death Guard Trait, if a Fire Group has a total Firepower Characteristic of 11 or more, attacks made by that Fire Group have the Pinning (0) Special Rule.
            </li>
          </ul>`,
    unique: true,
  },
  "master of justaerin": {
    id: "sr",
    name: "master of justaerin",
    mod: "",
    brief: `Abaddon confers additional Special Rules to Justaerin Terminator Squads that he joins.`,
    text: `If a Model with this Special Rule joins a Justaerin Terminator Squad Unit in Reserves, Models in that Unit are also treated as having the Deep Strike Special Rule. In addition, when a Model with this Special Rule is deployed as part of a Deep Strike, that Model and each other Model in the same Unit gain the Feel No Pain (5+) Special Rule until the Controlling Player's next Effects Sub-Phase.
`,
    unique: true,
  },
  "honour above all": {
    id: "sr",
    name: "honour above all",
    mod: "",
    brief: ``,
    text: `When any Model that has joined a Unit that includes any Models with this
        Special Rule takes part in a Challenge, all Models in that Unit with
        this Special Rule gain a bonus of +1 to all Wound Tests made during the
        following Fight Sub-Phase of that Assault Phase.`,
    unique: true,
  },
  "master of war": {
    id: "sr",
    name: "master of war",
    mod: "",
    brief: ``,
    text: `The Controlling Player of an Army that includes a Model with this Special Rule has +1 to their Reaction Allotment in each Turn, unless that Model is Removed as a Casualty.
`,
    unique: true,
  },
  "sire of sons of horus": {
    id: "sr",
    name: "sire of sons of horus",
    mod: "",
    brief: ``,
    text: `<p>
            If a Model with this Special Rule is part of an Army, then the Controlling Player may apply the following additional Special Rules to all Auxiliary, Apex and Primary Detachments that have the same Faction Trait as the Model with this Special Rule:
          </p>
          <ul class="unit-list">
            <li>
              If four or more Troops Battlefield Role Slots in the Primary Detachment of this Army are filled with Tactical Squad Units and/or Despoiler Squad Units, then all Force Organisation Slots with the Troops Battlefield Role in the Primary Detachment are considered Prime Slots.
            </li>
          </ul>
          <p>
            Furthermore, if a Model with this Special Rule is part of an Army, then the following Special Rules are granted to all Models with the Sons of Horus Trait in the same Army:
          </p>
          <ul class="unit-list">
            <li>
              Until the end of the first Battle Turn of the Battle, the Controlling Player of a Model with this Special Rule can add +1 to the Move Characteristic of Models from their Army with the Sons of Horus Trait (excluding Models with the Vehicle Type).
            </li>
          </ul>`,
    unique: true,
  },
  "the warmaster ascended": {
    id: "sr",
    name: "the warmaster ascended",
    mod: "",
    brief: ``,
    text: `Horus Ascended cannot be included in the same Army as Horus Lupercal.`,
    unique: true,
  },
  "the spreading corruption": {
    id: "sr",
    name: "the spreading corruption",
    mod: "",
    brief: ``,
    text: `A Model with this Special Rule can join Units with the Malefic Sub-Type as if it had that Sub-Type and while part of such a Unit, is treated as having that Sub-Type.
`,
    unique: true,
  },
  "haunted": {
    id: "sr",
    name: "haunted",
    mod: "",
    brief: ``,
    text: `The Controlling Player of a Model with this Special Rule gains 2 Victory Points if Garviel Loken is Removed as a Casualty whilst engaged in a Challenge with a Model with this Special Rule.
`,
    unique: true,
  },
  "born survivor": {
    id: "sr",
    name: "born survivor",
    mod: "",
    brief: `This Special Rule allows Garviel Loken to avoid being Removed as a Casualty.`,
    text: `If the Wounds Characteristic of a Model with this Special Rule is reduced to 0 or less, the Controlling Player can roll one Dice. On a 4+, this Model is not Removed as a Casualty and has its current Wounds Characteristic set to '1'.`,
    unique: true,
  },
  "broken in body": {
    id: "sr",
    name: "broken in body",
    mod: "",
    brief: ``,
    text: `Each time an enemy Model declares a Challenge, the Controlling Player of a Model with this Special Rule can select whether the Model with this Special Rule is eligible to take part in a Challenge.`,
    unique: true,
  },
  "creed of brutality": {
    id: "sr",
    name: "creed of brutality",
    mod: "",
    brief: `If a Unit containing any Models with this Special Rule succeeds on a
          Leadership Check in the Start Phase, they gain the Impact (S) Special
          Rule until the end of the Battle Turn.`,
    text: `In the Effects Sub-Phase of their Start Phase, the Controlling Player
          of a Unit containing any Models with this Special Rule can make a
          Leadership Check for that Unit, and if any Model in that Unit is
          within 6" of a friendly Model with the Sons of Horus Trait and a
          Weapon Skill Characteristic of 5 or more, that friendly Model’s
          Leadership Characteristic may be used to resolve this Leadership
          Check. If that Check is successful, every Model in the Unit gains the
          Impact (S) Special Rule until the end of that Battle Turn. If the
          Check is unsuccessful, every Model in that Unit immediately gains the
          Stunned Tactical Status.`,
    unique: true,
  },
  "gun emplacement": {
    id: "sr",
    name: "gun emplacement",
    mod: "",
    brief: `A Model with this Special Rule has special restrictions that apply
          when ranges are measured to and from it.`,
    text: `The hull of a Model with this Special Rule is only considered to be
          the central turret. The outriggers that form the gun carriage are
          ignored for all purposes.`,
    unique: true,
  },
  "mobile command vehicle": {
    id: "sr",
    name: "mobile command vehicle",
    mod: "",
    brief: `A Model with this Special Rule can use some Characteristics of
          Embarked Models instead of its own.`,
    text: `When a Model with this Special Rule is required to make a
          Characteristic Check, the Controlling Player can use the required
          Characteristic for that Check from the Profile of one Model Embarked
          within this Model instead.`,
    unique: true,
  },
  "master of automata": {
    id: "sr",
    name: "master of automata",
    mod: "",
    brief: `This Special Rule allows a Praevian to be accompanied by a Unit of
          Battle-automata.`,
    text: `When a Model with this Special Rule is included in a Detachment, one
          additional Force Organisation Slot is added to that Detachment. This
          Slot can only be filled with one Castellax Battle Maniple or Castellax
          Destructor Maniple Unit selected from Liber Mechanicum. When such a
          Unit is included in this way, its Cybernetica Trait is replaced with
          'Bonded Automata', and this Unit can be included even though it does
          not have the same Faction Trait as the other Units in that Detachment.
          In addition, a Model with this Special Rule may join a Friendly Unit
          that includes Models with the Automata Type. If a Model with this
          Special Rule joins a Unit with the Automata Type, the Leadership and
          Cool Characteristics of Models in that Unit are not reduced as a
          results of this, but may be modified by other rules as normal.`,
    unique: true,
  },
  "master of auxilia": {
    id: "sr",
    name: "master of auxilia",
    mod: "",
    brief: `Overseers can join some Allied Units without penalty to some
          Characteristics.`,
    text: `If a Model with this Special Rule joins a Unit with the Solar Auxilia
          Trait, the Leadership and Cool Characteristics of Models in that Unit
          are not reduced as a results of this, but may be modified by other
          rules as normal.`,
    unique: true,
  },
  "never back down": {
    id: "sr",
    name: "never back down",
    mod: "",
    brief: `A Model with this Special Rule must take part in a Challenge if able.`,
    text: `During the Challenge Sub-Phase, if a Model with this Special Rule is
          eligible, it must be declared as the Challenger or to accept a
          Challenge. If more than one Model with this Special Rule is eligible
          to be the Challenger or to accept a Challenge, the Controlling Player
          may select which one will be declared as the Challenger or to accept a
          Challenge.`,
    unique: true,
  },
  "rapier crew": {
    id: "sr",
    name: "rapier crew",
    mod: "",
    brief: `The Characteristics of different Models with this Special Rule are
          used in different situations.`,
    text: `<p>Each time Wound Tests are made for a Fire Group that targets a Unit
          that includes any Models with this Special Rule, if any Rapier Carrier
          Models are in this Unit, the Toughness Characteristic of the Rapier
          Carriers is treated as being the majority. If any wounds are generated
          by these Wound Tests, the Target Model selected must be a Rapier
          Carrier Model if possible. </p>

          <p>Each time Wound Tests are made for a Strike
          Group targeting this Unit, the Toughness Characteristic of the
          Legionary Models is treated as being the majority. If any wounds are
          generated by these Wound Tests, the Target Model selected must be a
          Legionary Model, if possible. </p>

          <p>If at any point there are only Rapier
          Carrier Models remaining in this Unit, those Models are immediately
          Removed as Casualties.</p>`,
    unique: true,
  },
  "deathstorm": {
    id: "sr",
    name: "deathstorm",
    mod: "",
    brief: `This Model makes a Shooting Attack when it is Deployed on the
          Battlefield.`,
    text: `When a Model with this Special Rule is deployed, any doors on the
          Model must be opened to their full extent. Then, this Model makes up
          to five Shooting Attacks as if it were the Shooting Phase. Each
          Shooting Attack must target a different Unit. After resolving these
          Shooting Attacks, this Model's Deathstorm missile launcher cannot be
          used to make Shooting Attacks again during this Battle.`,
    unique: true,
  },

  "drop transport": {
    id: "sr",
    name: "drop transport",
    mod: "",
    brief: `Dreadclaws can transport a variety of Units to the Battlefield.`,
    text: `Instead of one of the Units that would normally be eligible to Embark
          within a Model with this Special Rule, one Model with the Walker Type
          can instead be Embarked upon it. The Embarked Model cannot have the
          Bulky (X) Special Rule with a value of greater than Bulky (6).`,
    unique: true,
  },
  "heavy drop transport": {
    id: "sr",
    name: "heavy drop transport",
    mod: "",
    brief: `Kharybdis can transport large Units to the Battlefield.`,
    text: `Instead of one of the Units that would normally be eligible to Embark
          within a Model with this Special Rule, one Model with the Walker Type
          can instead be Embarked upon it. The Embarked Model cannot have the
          Bulky (X) Special Rule with a value of greater than Bulky (7).`,
    unique: true,
  },
  "dreadnought transport": {
    id: "sr",
    name: "dreadnought transport",
    mod: "",
    brief: `Dreadnought Drop Pods transport dreadnoughts to the Battlefield.`,
    text: `Only one Model may be Embarked on a Model with this Special Rule, and
          the Embarking Model must have the Walker Type. The Embarked Model
          cannot have the Bulky (X) Special Rule with a value of greater than
          Bulky (7).`,
    unique: true,
  },
  "thunderhawk transport bay": {
    id: "sr",
    name: "thunderhawk transport bay",
    mod: "",
    brief: `A Thunderhawk Gunship can transport larger Models as well as Infantry.`,
    text: `Models of any Type other than Vehicle may Embark on a Model with this Special Rule, however only 2 Models may be Embarked that do not have the Infantry or Paragon Type, and such a Model may not have any variant of the Bulky (X) Special Rule where the value of X is greater than 6.
`,
    unique: true,
  },

  "mastodon transport bay": {
    id: "sr",
    name: "mastodon transport bay",
    mod: "",
    brief: `A Mastodon Super-heavy Assault Transport can transport larger Models as well as Infantry.`,
    text: `Models of any Type other than Vehicle may Embark on a Model with this Special Rule, however only 4 Models may be Embarked that do not have the Infantry or Paragon Type, and such a Model may not have any variant of the Bulky (X) Special Rule where the value of X is greater than 6.
`,
    unique: true,
  },
  "stormbird transport bay": {
    id: "sr",
    name: "stormbird transport bay",
    mod: "",
    brief: `A Sokar Stormbird can transport larger Models, including one Rhino, as well as Infantry.`,
    text: `Models of any Type may Embark on a Model with this Special Rule, however only 2 Models may be Embarked that do not have the Infantry or Paragon Type, and such a Model may not have any variant of the Bulky (X) Special Rule where the value of X is greater than 6. In addition, one Rhino Model may be Embarked and is treated as having the Bulky (12) Special Rule for the purposes of Transport Capacity.`,
    unique: true,
  },
  "bulwark of the imperium": {
    id: "sr",
    name: "gambit: bulwark of the imperium",
    mod: "",
    brief: `This Gambit allows Rogal Dorn to fight defensively`,
    text: `<p>
        While a Model with this Special Rule is engaged in a Challenge, its
        Controll ing Player can select the following Gambit:
      </p>
      <p>
        <span class="bold">Bulwark of the lmperium:</span> While this Gambit is
        selected, Wound Tests made against the Model that this Gambit was
        selected for that have an unmodified result of a 1, 2, 3 and 4 are never
        successful regardless of the Strength Characteristic of a Hit or any
        Special Rules that set the Target Number for Wound Tests.
      </p>

      <p>
        If a Model with this Special Rule is part of an Army, then the
        Controlling Player may apply the following additional Special Rules to
        all Auxiliary, Apex and Primary Detachments that have the same Faction
        Trait as the Model with this Special Rule:
      </p>`,
    unique: true,
  },
  "sire of the imperial fists": {
    id: "sr",
    name: "sire of the imperial fists",
    mod: "",
    brief: ``,
    text: `<p>
        If a Model with this Special Rule is part of an Army, then the
        Controlling Player may apply the following additional Special Rules to
        all Auxiliary, Apex and Primary Detachments that have the same Faction
        Trait as the Model with this Special Rule:
      </p>
      <ul>
        <li>
          If four or more Troops Battlefield Role Slots in the Primary
          Detachment of this Army are filled with Tactical Squads and/or
          Breacher Squads, then all Force Organisation Slots with the Troops
          Battlefield Role in the Primary Detachment are considered Prime Slots.
        </li>
      </ul>
      <p>
        Furthermore, if a Model with this Special Rule is part of an Army, then
        all Models with the Imperial Fists Trait and the Infantry Type gain the
        Prepared Defenses Special Rule:
      </p>
      <p>
        <span class="bold">Prepared Defenses:</span> Until the end of the first Battle Turn of the Battle,
        all Models in this Army with the Infantry Type and the Imperial Fists
        Trait have a 5+ Cover Save while they are within their Controlling
        Player's Deployment Zone.
      </p>`,
    unique: true,
  },
  "slayer of kings": {
    id: "sr",
    name: "slayer of kings",
    mod: "",
    brief: `Sigismund's Controlling Player must issue a Challenge if able and select which of his opponents will accept.`,
    text: `<p>During the Controlling Player's Challenge Sub-Phase, if Sigismund is eligible, he must be declared as the Challenger. If more than one Model under the Active Player's control in a Combat must be the Challenger, they must select Sigismund as the Challenger.</p>
      <p>Additionally, when the Controlling Player issues a Challenge for Sigismund (including as part of the Heroic Intervention Advanced Reaction), they may select which of the Opposing Player's eligible Models is the Challenged. If, for any reason, the selected enemy Model cannot be the Challenged, Sigismund's Controlling Player gains a number of Combat Resolution Points equal to the starting Wounds Characteristic of the selected enemy Model that did not become the Challenged, and Sigismund's Controlling Player may select an alternative eligible Model to accept the Challenge.</p>
`,
    unique: true,
  },
  "death's champion": {
    id: "sr",
    name: "gambit: death's champion",
    mod: "",
    brief: ``,
    text: `<p>While a Model with this Special Rule is engaged in a Challenge, its Controlling Player can select the following Gambit:</p>
      <p><span class="bold">Death's Champion: </span>If this Gambit is selected, attacks made by this Model in the following Strike Step have the Critical Hit (5+) Special Rule.</p>`,
    unique: true,
  },
  "shield master": {
    id: "sr",
    name: "shield master",
    mod: "",
    brief: ``,
    text: `The Controlling Player of a Model with this Special Rule does not suffer a penalty of -1 to Focus Rolls for this Model
having the Heavy Sub-Type.`,
    unique: true,
  },
  "executioner's tax": {
    id: "sr",
    name: "gambit: executioner's tax",
    mod: "",
    brief: ``,
    text: `<p>
      While a Model with this Special Rule is in a Challenge, its Controlling Player can select the following Gambit:
    </p>
    <p>
      <span class="bold">Executioner's Tax:</span> When this Gambit is selected, the Controlling Player must roll an additional Dice in the Focus Step and must discard the highest result. Attacks made in the following Strike Phase gain the Critical Hit (6+) Special Rule.
    </p>`,
    unique: true,
  },
  "the line unbroken": {
    id: "sr",
    name: "gambit: the line unbroken",
    mod: "",
    brief: ``,
    text: `p>While a Model with this Special Rule is engaged in a Challenge, its Controlling Player can select the
following Gambit:</p>
<p><span class="bold">The Line Unbroken:</span> When this Gambit is selected and this Model does not have Combat Advantage, Camba Diaz's
Attacks Characteristic is modified by +2.</p>`,
    unique: true,
  },
  "void commander": {
    id: "sr",
    name: "void commander",
    mod: "",
    brief: ``,
    text: `If a Model with this Special Rule joins a Breacher Squad Unit in Reserves, Models in that Unit gain the Deep Strike:
Special Rule while this Model is part of the Unit. In addition, when a Model with this Special Rule is deployed as
part of a Deep Strike, that Model and each other Model in the same Unit gain the Feel No Pain (S+) Special Rule
until the Controlling Player's next Effects Sub-Phase.`,
    unique: true,
  },
  "templar assault": {
    id: "sr",
    name: "templar assault",
    mod: "",
    brief: `Templar Brethren can close with their opponents more effectively when charging after they Disembark`,
    text: `In the Assault Phase of any Player Turn in which they Disembarked from a Model with the Assault Vehicle Special
Rule, Models with this Special Rule may add +2" to any Set-up Moves made. This modifier does not apply if the Unit
was forced to make an Emergency Disembarkation during the same Turn.`,
    unique: true,
  },







}


const officer_wargear = {
  variants: [
    {
      what: 'bolt pistol',
      cost: [0, '']
    },
    {
      what: 'chainsword',
      cost: [0, '']
    },
    {
      what: 'bolter',
      cost: [5, 'pts']
    },
    {
      what: 'volkite serpenta',
      cost: [5, 'pts']
    },
    {
      what: 'hand flamer',
      cost: [5, 'pts']
    },
    {
      what: 'plasma pistol',
      cost: [5, 'pts']
    },
    {
      what: 'desintegrator pistol',
      cost: [5, 'pts']
    },
    {
      what: 'chainaxe',
      cost: [0, 'pts']
    },
    {
      what: 'charnabal sabre',
      cost: [5, 'pts']
    },
    {
      what: 'power sword',
      cost: [10, 'pts']
    },
    {
      what: 'power axe',
      cost: [10, 'pts']
    },
    {
      what: 'power maul',
      cost: [10, 'pts']
    },
    {
      what: 'power lance',
      cost: [10, 'pts']
    },
    {
      what: 'power fist',
      cost: [15, 'pts']
    },
    {
      what: 'lightning claw',
      cost: [10, 'pts']
    },
    {
      what: 'thunder hammer',
      cost: [15, 'pts']
    },
    {
      what: 'combat shield',
      cost: [0, 'pts']
    },
    {
      what: 'boarding shield',
      cost: [5, 'pts']
    },
  ],
}
const terminator_wargear = {
  variants: [
    {
      what: 'lightning claw',
      cost: [5, 'pts']
    },
    {
      what: 'chainfist',
      cost: [10, 'pts']
    },

    {
      what: 'power fist',
      cost: [10, 'pts']
    },
    {
      what: 'thunder hammer',
      cost: [10, 'pts']
    },
  ],
}
const power_weapon = {
  variants: [
    {
      what: 'power sword',
      cost: [10, 'pts']
    },
    {
      what: 'power axe',
      cost: [10, 'pts']
    },
    {
      what: 'power maul',
      cost: [10, 'pts']
    },
    {
      what: 'power lance',
      cost: [10, 'pts']
    },
  ],
}
const sergeant_weapon = {
  variants: [
    {
      what: 'chainsword',
      cost: [0, 'pts']
    },
    {
      what: 'chainaxe',
      cost: [0, 'pts']
    },
    {
      what: 'charnabal sabre',
      cost: [5, 'pts']
    },
    {
      what: 'power sword',
      cost: [10, 'pts']
    },
    {
      what: 'power axe',
      cost: [10, 'pts']
    },
    {
      what: 'power maul',
      cost: [10, 'pts']
    },
    {
      what: 'power lance',
      cost: [10, 'pts']
    },
    {
      what: 'power fist',
      cost: [15, 'pts']
    },
    {
      what: 'lightning claw',
      cost: [10, 'pts']
    },
    {
      what: 'thunder hammer',
      cost: [15, 'pts']
    },
  ],
}
const combi_weapon = {
  variants: [
    {
      what: 'combi-bolter',
      cost: [5, 'pts']
    },
    {
      what: 'combi-flamer',
      cost: [10, 'pts']
    },
    {
      what: 'combi-melta',
      cost: [10, 'pts']
    },
    {
      what: 'combi-plasma',
      cost: [10, 'pts']
    },
    {
      what: 'combi-volkite',
      cost: [10, 'pts']
    },
    {
      what: 'combi-grenade',
      cost: [10, 'pts']
    },
    {
      what: 'combi-desintegrator',
      cost: [10, 'pts']
    },
    {
      what: 'combi-grav',
      cost: [10, 'pts']
    },
  ],
}
const special_weapons = {
  variants: [
    {
      what: 'flamer',
      cost: [5, 'pts']
    },
    {
      what: 'meltagun',
      cost: [15, 'pts']
    },
    {
      what: 'plasma gun',
      cost: [10, 'pts']
    },
    {
      what: 'volkite charger',
      cost: [5, 'pts']
    },
    {
      what: 'volkite caliver',
      cost: [10, 'pts']
    },
    {
      what: 'rotor cannon',
      cost: [10, 'pts']
    },
  ],
}
const pistols = {
  variants: [
    {
      what: 'plasma pistol',
      cost: [5, 'pts']
    },
    {
      what: 'hand flamer',
      cost: [5, 'pts']
    },
    {
      what: 'volkite serpenta',
      cost: [5, 'pts']
    },
  ],
}
const equip = {
  variants: [
    {
      what: 'nuncio-vox',
      cost: [10, 'pts']
    },
    {
      what: 'augury scanner',
      cost: [10, 'pts']
    },
  ],
}
const heavy_weapons = {
  variants: [
    {
      what: 'heavy bolter',
      cost: [10, 'pts']
    },
    {
      what: 'heavy flamer',
      cost: [10, 'pts']
    },
    {
      what: 'autocannon',
      cost: [20, 'pts']
    },
    {
      what: 'missile launcher',
      cost: [15, 'pts']
    },
    {
      what: 'multi-melta',
      cost: [25, 'pts']
    },
    {
      what: 'plasma cannon',
      cost: [20, 'pts']
    },
    {
      what: 'volkite culverin',
      cost: [15, 'pts']
    },
    {
      what: 'lascannon',
      cost: [25, 'pts']
    },
  ],
}
const sponson = {
  variants: [
    {
      where: 'two sponson mounted',
      what: 'heavy bolter',
      cost: [0, 'pts']
    },
    {
      where: 'two sponson mounted',
      what: 'heavy flamer',
      cost: [0, 'pts']
    },
    {
      where: 'two sponson mounted',
      what: 'volkite culverin',
      cost: [10, 'pts']
    },
    {
      where: 'two sponson mounted',
      what: 'lascannon',
      cost: [20, 'pts']
    },
  ],
}
const pintle_weapons = {
  variants: [
    {
      where: 'pintle mounted',
      what: 'combi-bolter',
      cost: [5, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'combi-flamer',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'combi-melta',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'combi-plasma',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'combi-volkite',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'havoc launcher',
      cost: [5, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'heavy bolter',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'heavy flamer',
      cost: [10, 'pts']
    },
    {
      where: 'pintle mounted',
      what: 'multi-melta',
      cost: [25, 'pts']
    },

  ],
}

// export const traits = {

// }
