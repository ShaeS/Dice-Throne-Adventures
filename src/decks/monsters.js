export default [
  {
    title: 'Enthropy Mage',
    level: 1,
    health: 12,
    CP: 2,
    rewards: [1],
    rollObjective: ['4-5', '4-5', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Chaotic Sorcery',
        rolls: [
          {
            roll: ['4-5', '4-5', '6'],
          },
        ],
        description: 'Roll 1 die: On [1-3], gain 2 Chaos Tokens. Then deal 4 + 1 dmg per Chaos Token.',
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'Gain 1 x [4-5] Chaos Tokens. Then deal 1 x Chaos Token undefendable dmg.',
      },
    ],
  },
  {
    title: 'Lost Swordsman',
    level: 1,
    health: 11,
    CP: 0,
    rewards: [1],
    rollObjective: ['1-3', '1-3', '1-3', '1-3', '1-3'],
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'En Garde',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 4 Damage.',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 5 Damage.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'Deal 1 x [1-3] + 2 x [6] dmg. Prevent 1 x [4-5] dmg',
      },
    ],
  },
  {
    title: 'Arcane Vibra',
    level: 2,
    health: 10,
    CP: 3,
    rewards: [2],
    rollObjective: ['1-3', '1-3', '4-5', '4-5', '4-5'],
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'Sanguiblade',
        rolls: [
          {
            roll: ['1-3', '1-3', '4-5'],
            description: 'Deal 4 Damage.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5'],
            description: 'Deal 5 Damage.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5', '4-5'],
            description: 'Deal 6 Damage.',
          },
        ],
        description: 'If Arcane Vibra has 3 Blood Power, spend them to heal an amount equal to the dmg sucessfully dealt.',
      },
    ],
    passive: [
      {
        description: 'At the start of each turn gain Blood Power',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4-5], [4-5], gain Blood Power.',
      },
    ],
  },
  {
    title: 'Brutish Cyclops',
    level: 1,
    health: 13,
    CP: 2,
    rewards: [1],
    rollObjective: ['1-3', '1-3', '1-3', '1-3', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Crush',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '6'],
          },
        ],
        description: 'Deal 4 dmg & roll 1 die: Add dmg equal to the roll value.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1-3], deal 2 dmg. On [4-5], heal 1.',
      },
    ],
  },
  {
    title: 'Holy Zealot',
    level: 3,
    health: 15,
    CP: 4,
    rewards: [3],
    rollObjective: ['1-3', '1-3', '4-5', '4-5', '4-5'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Zealous Combat',
        rolls: [
          {
            roll: ['1-3', '1-3', '4-5', '4-5', '4-5'],
          },
        ],
        description: 'Deal 5 dmg & roll 3 die: Add 1x[1-3] + 2x[4,5] dmg. Heal 2x[6] health.',
      },
    ],
    passive: [
      {
        description: 'On a failed Offensive Roll, gain Retribution',
      },
    ],
    defense: [
      {
        dice: 4,
        description: 'On [1-3], deal 1 dmg. Prevent 2x[4-5] + 2x[6] dmg.',
      },
    ],
  },
  {
    title: 'Blood Mage',
    level: 1,
    health: 9,
    CP: 2,
    rewards: [1],
    rollObjective: ['1-3', '1-3', '4-5', '4-5', '4-5'],
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'Hemo-Siphon',
        rolls: [
          {
            roll: ['1-3', '1-3', '4-5'],
            description: 'Deal 4 Damage.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5'],
            description: 'Deal 5 Damage.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5', '4-5'],
            description: 'Deal 6 Damage.',
          },
        ],
        description: 'If Blood Mage has 4 Blood Power, spend them to heal an amount equal to the dmg sucessfully dealt.',
      },
    ],
    passive: [
      {
        description: 'At the start of each turn gain Blood Power',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4-5], [4-5], gain Blood Power.',
      },
    ],
  },
  {
    title: 'Loot Goblin',
    level: 3,
    health: 15,
    CP: 4,
    rewards: [1, 2, 3],
    rollObjective: ['1-3', '1-3', '1-3', '1-3', '1-3'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Fight or Flight',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
          },
        ],
        description: 'Roll 1 die: On [1-3], deal 4 undefendable damage. 4-6, Loot Goblin flees.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1-3], deal 1 dmg. On [4-5], Boss gains 1CP. On [6], Loot Goblin flees.',
      },
    ],
  },
  {
    title: 'Devilish Imp',
    level: 3,
    health: 11,
    CP: 4,
    rewards: [3],
    rollObjective: 'Straights',
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'Mischeif',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Inflict Entangle. Deal 7 dmg.',
          },
          {
            roll: 'Large Straight',
            description: 'Inflict Entangle. Deal 8 dmg. Steal 2 CP.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4-5], [4-5], prevent 3 dmg.',
      },
    ],
  },
  {
    title: 'Wither Elf',
    level: 2,
    health: 14,
    CP: 2,
    rewards: [2],
    rollObjective: 'Straights',
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Withered Root',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Inflict Barbed Vine. Deal 6 dmg.',
          },
          {
            roll: 'Large Straight',
            description: 'Inflict Wither. Deal 7 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4-5], [4-5], prevent 1/2 dmg. (rounded up)',
      },
    ],
  },
  {
    title: 'Crushing Golem',
    level: 2,
    health: 15,
    CP: 3,
    rewards: [2],
    rollObjective: ['4-5', '4-5', '4-5'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Clobber',
        rolls: [
          {
            roll: ['4-5', '4-5', '4-5'],
          },
        ],
        description: 'Roll 2 die and deal dmg equal to the total roll value. If the value is less than 4, inflict Concussion.',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'Prevent 1x[4-5] dmg.',
      },
    ],
  },
  {
    title: 'Goblin Enchanter',
    level: 3,
    health: 13,
    CP: 3,
    rewards: [3],
    rollObjective: ['1-3', '4-5', '4-5', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Ensorcell',
        rolls: [
          {
            roll: ['1-3', '4-5', '4-5', '6'],
          },
        ],
        description: 'Deal 3 undefendable dmg. Then opponent discards 2 cards randomly.',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'Deal 1x[4-5] dmg. On [6], Inflict Poison.',
      },
    ],
  },
  {
    title: 'Onibaba',
    level: 3,
    health: 13,
    CP: 2,
    rewards: [3],
    rollObjective: ['4-5', '4-5', '4-5', '4-5'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Alure',
        rolls: [
          {
            roll: ['4-5', '4-5', '4-5', '4-5'],
          },
        ],
        description: 'Roll 1 die and deal undefendable dmg equal to the roll value.',
      },
    ],
    passive: [
      {
        description: 'On a failed Offensive Roll, inflict Silence.',
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'Steal 1 Health per [4-5] rolled.',
      },
    ],
  },
  {
    title: 'Dreg Lackey',
    level: 2,
    health: 13,
    CP: 1,
    rewards: [2],
    rollObjective: ['1-3', '1-3', '4-5', '4-5', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Master\'s Embrace',
        rolls: [
          {
            roll: ['1-3', '1-3', '4-5', '4-5', '6'],
          },
        ],
        description: 'Deal 4 undefendable dmg.',
      },
    ],
    passive: [
      {
        description: 'On a failed Offensive Roll, Boss gains 1CP.',
      },
    ],
    defense: [
      {
        dice: 4,
        description: 'Prevent 1x[4-5] dmg. On [6], Boss gains 1CP',
      },
    ],
  },
  {
    title: 'Wailing Banshee',
    level: 3,
    health: 14,
    CP: 2,
    rewards: [3],
    rollObjective: ['6', '6', '6', '6', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Sonic Scream',
        rolls: [
          {
            roll: ['6', '6'],
            description: 'Deal 3 undefendable dmg.',
          },
          {
            roll: ['6', '6', '6'],
            description: 'Deal 4 undefendable dmg.',
          },
          {
            roll: ['6', '6', '6', '6'],
            description: 'Deal 5 undefendable dmg.',
          },
          {
            roll: ['6', '6', '6', '6', '6'],
            description: 'Deal 6 undefendable dmg.',
          },
        ],
        description: 'This dmg is dealt to all heroes engaged with Wailing Banshee.',
      },
    ],
    defense: [
      {
        dice: 2,
        description: 'On [6], Ignores all incoming dmg.',
      },
    ],
  },
  {
    title: 'Satyr',
    level: 1,
    health: 15,
    CP: 1,
    rewards: [1],
    rollObjective: ['1-3', '1-3', '4-5', '4-5', '6'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Ram',
        rolls: [
          {
            roll: ['1-3', '1-3', '4-5'],
            description: 'Deal 4 dmg.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5'],
            description: 'Deal 5 dmg.',
          },
          {
            roll: ['1-3', '1-3', '4-5', '4-5', '6'],
            description: 'Deal 6 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'On [4-5], Inflict Knockdown.',
      },
    ],
  },
  {
    title: 'Corrupted Rogue',
    level: 2,
    health: 14,
    CP: 5,
    rewards: [2],
    rollObjective: 'Straights',
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'Cunning Strike',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Deal 1/2 CP as dmg (rounded up).',
          },
          {
            roll: 'Large Straight',
            description: 'Deal CP as dmg.',
          },
        ],
      },
    ],
    passive: [
      {
        description: 'At the start of each turn, gain 2CP. On failed Offensive Roll, gain Sneak Attack.',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [6], [6], ignore all incoming dmg. On any other outcome, steal 1CP',
      },
    ],
  },
  {
    title: 'Dark Panther',
    level: 1,
    health: 8,
    CP: 2,
    rewards: [1],
    rollObjective: ['1-3', '1-3', '1-3', '1-3', '1-3'],
    firstStrike: true,
    statusEffects: [],
    attacks: [
      {
        title: 'Shred',
        rolls: [
          {
            roll: ['1-3', '1-3', '1-3'],
            description: 'Deal 4 dmg',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 5 dmg',
          },
          {
            roll: ['1-3', '1-3', '1-3', '1-3', '1-3'],
            description: 'Deal 6 dmg',
          },
        ],
        description: 'On 4-of-a-kind (#\'s), inflict Bleed.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1-3], inflict Bleed.',
      },
    ],
  },
  {
    title: 'Chaos Elf',
    level: 1,
    health: 13,
    CP: 1,
    rewards: [1],
    rollObjective: 'Straights',
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Withered Root',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Deal 6 dmg.',
          },
          {
            roll: 'Large Straight',
            description: 'Deal 7 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 4,
        description: 'On [4-5], [4-5], prevent 1/2 dmg. (rounded up)',
      },
    ],
  },
  {
    title: 'Horned Harpy',
    level: 2,
    health: 9,
    CP: 3,
    rewards: [2],
    rollObjective: ['4-5', '4-5', '4-5', '4-5', '4-5'],
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Aerial Dive',
        rolls: [
          {
            roll: ['4-5', '4-5', '4-5'],
            description: 'Deal 3 undefendable dmg.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 4 undefendable dmg.',
          },
          {
            roll: ['4-5', '4-5', '4-5', '4-5', '4-5'],
            description: 'Deal 5 undefendable dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'On [4-5], prevent 1/2 incoming dmg. (rounded up). On [4-5], [4-5], ignore all incoming dmg.',
      },
    ],
  },
  {
    title: 'Fierce Hydra',
    level: 3,
    health: 7,
    CP: 10,
    rewards: [3],
    rollObjective: ['6', '6'],
    firstStrike: false,
    statusEffects: [
      { title: 'Chaos Token' },
      { title: 'Chaos Token' },
      { title: 'Chaos Token' },
    ],
    attacks: [
      {
        title: 'Plurabite',
        rolls: [
          {
            roll: ['6', '6'],
          },
        ],
        description: 'Deal 6 + 3 dmg per head.',
      },
    ],
    passive: [
      {
        description: 'At the conclusion of the Offensive Roll Phase, roll 1 die: On [6], gain 1 Head.',
      },
    ],
    defense: [
      {
        dice: 0,
        description: 'If this enemy\'s Health is redued to 0 while Heads remain, remove 1 Head and reset Fierce Hydra\'s Health',
      },
    ],
    additional: 'Setup: Begin with 3 Heads in play (represented by Chaos Tokens).',
  },
  {
    title: 'Chaos Knight',
    level: 3,
    health: 15,
    CP: 2,
    rewards: [3],
    rollObjective: 'Straights',
    firstStrike: false,
    statusEffects: [],
    attacks: [
      {
        title: 'Unholy Attack',
        rolls: [
          {
            roll: 'Small Straight',
            description: 'Heal 2, deal 5 dmg.',
          },
          {
            roll: 'Large Straight',
            description: 'Heal 3, deal 7 dmg.',
          },
        ],
        description: 'Deal 6 + 3 dmg per head.',
      },
    ],
    passive: [
      {
        description: 'On a failed Offensive Roll, gain Crit.',
      },
    ],
    defense: [
      {
        dice: 4,
        description: 'On [1, 2, 3], deal 1 dmg. Prevent 1x[4, 5] + 2x[6] dmg.',
      },
    ],
  },
];
