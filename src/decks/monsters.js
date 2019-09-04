// FROM VIDEO AFK - DICE THRONE ADVENTURES up to 1:04

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
        description: 'Gain 1 x [4, 5] Chaos Tokens. Then deal 1 x Chaos Token dmg.',
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
];
