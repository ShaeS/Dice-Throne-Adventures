export default [
  {
    title: 'Enthropy Mage',
    enemyType: 1,
    health: 12,
    CP: 2,
    rewards: 'green',
    rollObjective: [[4, 5], [4, 5], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Chaotic Sorcery',
        rolls: [
          {
            roll: [[4, 5], [4, 5], [6]],
          },
        ],
        description: 'Roll 1 die: On [1, 2, 3], gain 2 Chaos Tokens. Then deal 4 + 1 dmg per Chaos Token.',
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'Gain 1 x [4, 5] Chaos Tokens. Then deal 1 x Chaos Token undefendable dmg.',
      },
    ],
  },
  {
    title: 'Lost Swordsman',
    enemyType: 1,
    health: 11,
    CP: 0,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    firstStrike: true,
    attacks: [
      {
        title: 'En Garde',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            description: 'Deal 4 Damage.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            description: 'Deal 5 Damage.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'Deal 1 x [1, 2, 3] + 2 x [6] dmg. Prevent 1 x [4, 5] dmg',
      },
    ],
  },
  {
    title: 'Arcane Vibra',
    enemyType: 2,
    health: 10,
    CP: 3,
    rewards: 'blue',
    rollObjective: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
    firstStrike: true,
    attacks: [
      {
        title: 'Sanguiblade',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5]],
            description: 'Deal 4 Damage.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5]],
            description: 'Deal 5 Damage.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
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
        description: 'On [4, 5], [4, 5], gain Blood Power.',
      },
    ],
  },
  {
    title: 'Brutish Cyclops',
    enemyType: 1,
    health: 13,
    CP: 2,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Crush',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [6]],
          },
        ],
        description: 'Deal 4 dmg & roll 1 die: Add dmg equal to the roll value.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1, 2, 3], deal 2 dmg. On [4, 5], heal 1.',
      },
    ],
  },
  {
    title: 'Holy Zealot',
    enemyType: 3,
    health: 15,
    CP: 4,
    rewards: 'purple',
    rollObjective: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
    firstStrike: false,
    attacks: [
      {
        title: 'Zealous Combat',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
          },
        ],
        description: 'Deal 5 dmg & roll 3 die: Add 1x[1, 2, 3] + 2x[4,5] dmg. Heal 2x[6] health.',
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
        description: 'On [1, 2, 3], deal 1 dmg. Prevent 2x[4, 5] + 2x[6] dmg.',
      },
    ],
  },
  {
    title: 'Blood Mage',
    enemyType: 1,
    health: 9,
    CP: 2,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
    firstStrike: true,
    attacks: [
      {
        title: 'Hemo-Siphon',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5]],
            description: 'Deal 4 Damage.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5]],
            description: 'Deal 5 Damage.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [4, 5]],
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
        description: 'On [4, 5], [4, 5], gain Blood Power.',
      },
    ],
  },
  {
    title: 'Loot Goblin',
    enemyType: 3,
    health: 15,
    CP: 4,
    rewards: 'green, blue, purple',
    rollObjective: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    firstStrike: false,
    attacks: [
      {
        title: 'Fight or Flight',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
          },
        ],
        description: 'Roll 1 die: On 1-3, deal 4 undefendable damage. 4-6, Loot Goblin flees.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1, 2, 3], deal 1 dmg. On [4, 5], Boss gains 1CP. On [6], Loot Goblin flees.',
      },
    ],
  },
  {
    title: 'Devilish Imp',
    enemyType: 3,
    health: 11,
    CP: 4,
    rewards: 'purple',
    rollObjective: 'straights',
    firstStrike: true,
    attacks: [
      {
        title: 'Mischeif',
        rolls: [
          {
            roll: 'small straight',
            description: 'Inflict Entangle. Deal 7 dmg.',
          },
          {
            roll: 'large straight',
            description: 'Inflict Entangle. Deal 8 dmg. Steal 2 CP.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4, 5], [4, 5], prevent 3 dmg.',
      },
    ],
  },
  {
    title: 'Wither Elf',
    enemyType: 2,
    health: 14,
    CP: 2,
    rewards: 'blue',
    rollObjective: 'straights',
    firstStrike: false,
    attacks: [
      {
        title: 'Withered Root',
        rolls: [
          {
            roll: 'small straight',
            description: 'Inflict Barbed Vine. Deal 6 dmg.',
          },
          {
            roll: 'large straight',
            description: 'Inflict Wither. Deal 7 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'On [4, 5], [4, 5], prevent 1/2 dmg. (rounded up)',
      },
    ],
  },
  {
    title: 'Crushing Golem',
    enemyType: 2,
    health: 15,
    CP: 3,
    rewards: 'blue',
    rollObjective: [[4, 5], [4, 5], [4, 5]],
    firstStrike: false,
    attacks: [
      {
        title: 'Clobber',
        rolls: [
          {
            roll: [[4, 5], [4, 5], [4, 5]],
          },
        ],
        description: 'Roll 2 die and deal dmg equal to the total roll value. If the value is less than 4, inflict Concussion.',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'Prevent 1x[4, 5] dmg.',
      },
    ],
  },
  {
    title: 'Goblin Enchanter',
    enemyType: 3,
    health: 13,
    CP: 3,
    rewards: 'purple',
    rollObjective: [[1, 2, 3], [4, 5], [4, 5], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Ensorcell',
        rolls: [
          {
            roll: [[1, 2, 3], [4, 5], [4, 5], [6]],
          },
        ],
        description: 'Deal 3 undefendable dmg. Then opponent discards 2 cards randomly.',
      },
    ],
    defense: [
      {
        dice: 5,
        description: 'Deal 1x[4, 5] dmg. On [6], Inflict Poison.',
      },
    ],
  },
  {
    title: 'Onibaba',
    enemyType: 3,
    health: 13,
    CP: 2,
    rewards: 'purple',
    rollObjective: [[4, 5], [4, 5], [4, 5], [4, 5]],
    firstStrike: false,
    attacks: [
      {
        title: 'Alure',
        rolls: [
          {
            roll: [[4, 5], [4, 5], [4, 5], [4, 5]],
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
        description: 'Steal 1 Health per [4, 5] rolled.',
      },
    ],
  },
  {
    title: 'Dreg Lackey',
    enemyType: 2,
    health: 13,
    CP: 1,
    rewards: 'blue',
    rollObjective: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Master\'s Embrace',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [6]],
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
        description: 'Prevent 1x[4, 5] dmg. On [6], Boss gains 1CP',
      },
    ],
  },
  {
    title: 'Wailing Banshee',
    enemyType: 3,
    health: 14,
    CP: 2,
    rewards: 'purple',
    rollObjective: [[6], [6], [6], [6], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Sonic Scream',
        rolls: [
          {
            roll: [[6], [6]],
            description: 'Deal 3 undefendable dmg.',
          },
          {
            roll: [[6], [6], [6]],
            description: 'Deal 4 undefendable dmg.',
          },
          {
            roll: [[6], [6], [6], [6]],
            description: 'Deal 5 undefendable dmg.',
          },
          {
            roll: [[6], [6], [6], [6], [6]],
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
    enemyType: 1,
    health: 15,
    CP: 1,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [6]],
    firstStrike: false,
    attacks: [
      {
        title: 'Ram',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5]],
            description: 'Deal 4 dmg.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5]],
            description: 'Deal 5 dmg.',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [4, 5], [4, 5], [6]],
            description: 'Deal 6 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'On [4, 5], Inflict Knockdown.',
      },
    ],
  },
  {
    title: 'Corrupted Rogue',
    enemyType: 2,
    health: 14,
    CP: 5,
    rewards: 'blue',
    rollObjective: 'Straights',
    firstStrike: true,
    attacks: [
      {
        title: 'Cunning Strike',
        rolls: [
          {
            roll: 'small straight',
            description: 'Deal 1/2 CP as dmg (rounded up).',
          },
          {
            roll: 'large straight',
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
    enemyType: 1,
    health: 8,
    CP: 2,
    rewards: 'green',
    rollObjective: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
    firstStrike: true,
    attacks: [
      {
        title: 'Shred',
        rolls: [
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3]],
            description: 'Deal 4 dmg',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            description: 'Deal 5 dmg',
          },
          {
            roll: [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]],
            description: 'Deal 6 dmg',
          },
        ],
        description: 'On 4-of-a-kind (#\'s), inflict Bleed.',
      },
    ],
    defense: [
      {
        dice: 1,
        description: 'On [1, 2, 3], inflict Bleed.',
      },
    ],
  },
  {
    title: 'Chaos Elf',
    enemyType: 1,
    health: 13,
    CP: 1,
    rewards: 'green',
    rollObjective: 'straights',
    firstStrike: false,
    attacks: [
      {
        title: 'Withered Root',
        rolls: [
          {
            roll: 'small straight',
            description: 'Deal 6 dmg.',
          },
          {
            roll: 'large straight',
            description: 'Deal 7 dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 4,
        description: 'On [4, 5], [4, 5], prevent 1/2 dmg. (rounded up)',
      },
    ],
  },
  {
    title: 'Horned Harpy',
    enemyType: 2,
    health: 9,
    CP: 3,
    rewards: 'blue',
    rollObjective: [[4, 5], [4, 5], [4, 5], [4, 5], [4, 5]],
    firstStrike: false,
    attacks: [
      {
        title: 'Aerial Dive',
        rolls: [
          {
            roll: [[4, 5], [4, 5], [4, 5]],
            description: 'Deal 3 undefendable dmg.',
          },
          {
            roll: [[4, 5], [4, 5], [4, 5], [4, 5]],
            description: 'Deal 4 undefendable dmg.',
          },
          {
            roll: [[4, 5], [4, 5], [4, 5], [4, 5], [4, 5]],
            description: 'Deal 5 undefendable dmg.',
          },
        ],
      },
    ],
    defense: [
      {
        dice: 3,
        description: 'On [4, 5], prevent 1/2 incoming dmg. (rounded up). On [4, 5], [4, 5], ignore all incoming dmg.',
      },
    ],
  },
];
